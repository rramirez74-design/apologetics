import { useState, useEffect, useMemo } from "react";
import { topics, Article, SubTopicCategory, SubTopic, Topic } from "@/data/topics";
import { BookOpen, ChevronRight, Menu, FileText, ArrowLeft, CheckCircle2, RefreshCw, ExternalLink, X, LayoutDashboard, Library, PanelLeftClose, PanelLeft, Search, Flame, Bookmark, BookmarkPlus, BookmarkMinus, Trophy, Target, History, PlayCircle, Award, Star, Clock, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const getCategoryScore = (category: SubTopicCategory | string, scores: Record<string, number>) => {
  if (typeof category === 'string') return scores[`cat-${slugify(category)}`] || 0;
  if (!category.articles || category.articles.length === 0) return scores[`cat-${slugify(category.title)}`] || 0;
  const total = category.articles.reduce((sum, article) => sum + (scores[`article-${slugify(article.title)}`] || 0), 0);
  return Math.round(total / category.articles.length);
};

const getSubTopicScore = (subtopic: SubTopic | string, scores: Record<string, number>) => {
  if (typeof subtopic === 'string') return scores[`subtopic-${slugify(subtopic)}`] || 0;
  if (!subtopic.items || subtopic.items.length === 0) return scores[`subtopic-${slugify(subtopic.title)}`] || 0;
  const total = subtopic.items.reduce((sum, item) => sum + getCategoryScore(item, scores), 0);
  return Math.round(total / subtopic.items.length);
};

const getTopicScore = (topic: Topic, scores: Record<string, number>) => {
  if (!topic.subtopics || topic.subtopics.length === 0) return scores[`topic-${topic.id}`] || 0;
  const total = topic.subtopics.reduce((sum, subtopic) => sum + getSubTopicScore(subtopic, scores), 0);
  return Math.round(total / topic.subtopics.length);
};

const getGlobalScore = (scores: Record<string, number>) => {
  if (topics.length === 0) return 0;
  const total = topics.reduce((sum, topic) => sum + getTopicScore(topic, scores), 0);
  return Math.round(total / topics.length);
};

const renderMarkdown = (text: string) => {
  // Simple regex to replace markdown links [text](url) with HTML anchor tags
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

const Quiz = ({ id, title, onComplete }: { id: string, title: string, onComplete: (score: number) => void }) => {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const defaultQuestions = [
    { q: `What is a key principle of ${title}?`, options: ["Understanding the truth", "Ignoring the facts", "Guessing"], answer: "Understanding the truth" },
    { q: `How does ${title} impact our worldview?`, options: ["It confuses us", "It shapes our core beliefs", "It has no impact"], answer: "It shapes our core beliefs" },
    { q: `Why is studying ${title} important?`, options: ["To pass a test", "To grow in knowledge and faith", "Just for fun"], answer: "To grow in knowledge and faith" },
  ];

  const questions = title === "What is God like?" ? [
    { q: "According to the article, what is the problem with assuming God is only in control of the weather or the sun?", options: ["It makes God too powerful", "It only gets part of the picture of who God is", "It means God is unknowable", "It is true for all people"], answer: "It only gets part of the picture of who God is" },
    { q: "What does the law of causality suggest about the universe?", options: ["The universe has always existed", "Time and space are an illusion", "What has a beginning has a cause, pointing to God as the ultimate cause", "Truth is invented, not discovered"], answer: "What has a beginning has a cause, pointing to God as the ultimate cause" },
    { q: "Which of the following is NOT an attribute of God mentioned in the article?", options: ["He is spirit", "He is unchanging", "He is limited by time", "He is all-knowing and all-present"], answer: "He is limited by time" },
    { q: "How did Jesus show us what God is like, according to the text?", options: ["By controlling the weather", "By writing the Bible", "By showing that God is love, compassionate, merciful, and forgiving", "By explaining the Theory of General Relativity"], answer: "By showing that God is love, compassionate, merciful, and forgiving" }
  ] : title === "Who is God?" ? [
    { q: "How does the Bible approach the existence of God?", options: ["It attempts to prove His existence through complex arguments", "It assumes His existence from the very beginning", "It suggests His existence is a mystery", "It leaves it up to personal interpretation"], answer: "It assumes His existence from the very beginning" },
    { q: "Why is thinking correctly about God considered of utmost importance?", options: ["To pass theological exams", "Because a false idea about God is idolatry", "To win arguments with atheists", "Because it makes us feel better"], answer: "Because a false idea about God is idolatry" },
    { q: "Which of these describes God's nature according to the article?", options: ["He is limited by time and space", "He is physical and tangible", "He is spirit, infinite, incomparable, and unchanging", "He is only present in certain holy places"], answer: "He is spirit, infinite, incomparable, and unchanging" },
    { q: "How can we really know who God is?", options: ["By studying nature", "By looking at Jesus", "By meditating on our own thoughts", "By asking other people"], answer: "By looking at Jesus" }
  ] : defaultQuestions;

  if (!started) {
    return (
      <div className="mt-8 p-6 border rounded-2xl bg-card/50">
        <h3 className="text-xl font-display font-semibold mb-2">Test your knowledge</h3>
        <p className="text-muted-foreground mb-4">Take a quick quiz on {title} to track your progress.</p>
        <Button onClick={() => setStarted(true)}>Start Quiz</Button>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="mt-8 p-6 border rounded-2xl bg-card/50 text-center">
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-display font-semibold mb-2">Quiz Complete!</h3>
        <p className="text-muted-foreground mb-4">You scored {percentage}%</p>
        <Button onClick={() => {
          setStarted(false);
          setCurrentQ(0);
          setScore(0);
          setFinished(false);
        }}>Retake Quiz</Button>
      </div>
    );
  }

  const q = questions[currentQ];

  const handleNext = () => {
    let newScore = score;
    if (selected === q.answer) {
      newScore += 1;
      setScore(newScore);
    }
    
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected("");
    } else {
      const finalScore = Math.round((newScore / questions.length) * 100);
      setFinished(true);
      onComplete(finalScore);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="w-full max-w-2xl bg-card border rounded-2xl p-6 md:p-10 shadow-2xl relative">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          onClick={() => {
            setStarted(false);
            setCurrentQ(0);
            setScore(0);
          }}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="flex justify-between items-center mb-6 mt-4">
          <h3 className="text-xl font-display font-semibold">Question {currentQ + 1} of {questions.length}</h3>
          <span className="text-sm text-muted-foreground">Progress: {Math.round(((currentQ) / questions.length) * 100)}%</span>
        </div>
        <Progress value={((currentQ) / questions.length) * 100} className="mb-8 h-2" />
        
        <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">{q.q}</p>
        
        <RadioGroup value={selected} onValueChange={setSelected} className="space-y-4 mb-8">
          {q.options.map((opt, i) => (
            <div 
              key={i} 
              className={`flex items-start space-x-3 border p-4 rounded-xl transition-all cursor-pointer ${
                selected === opt ? 'border-primary bg-primary/5' : 'hover:bg-secondary/20 hover:border-border/80'
              }`}
              onClick={() => setSelected(opt)}
            >
              <RadioGroupItem value={opt} id={`opt-${i}`} className="mt-1 shrink-0" />
              <Label htmlFor={`opt-${i}`} className="flex-1 cursor-pointer text-base leading-snug font-normal">{opt}</Label>
            </div>
          ))}
        </RadioGroup>

        <div className="flex justify-end">
          <Button onClick={handleNext} disabled={!selected} size="lg" className="w-full sm:w-auto px-8">
            {currentQ === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const { topicId, subtopicId, categoryId, articleId } = useParams();
  const navigate = useNavigate();

  const [scores, setScores] = useState<Record<string, number>>({});
  const [isCheckingLive, setIsCheckingLive] = useState(false);
  const [liveStatus, setLiveStatus] = useState<'idle' | 'checking' | 'up-to-date'>('idle');
  
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [recentActivity, setRecentActivity] = useState<{title: string, path: string, type: string, date: string, score?: number}[]>([]);
  const [weeklyGoal, setWeeklyGoal] = useState(5);
  const [weeklyProgress, setWeeklyProgress] = useState(0);
  const [achievements, setAchievements] = useState<string[]>([]);
  
  useEffect(() => {
    const saved = localStorage.getItem('quiz_scores');
    if (saved) {
      try { setScores(JSON.parse(saved)); } catch (e) {}
    }

    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      try { setBookmarks(JSON.parse(savedBookmarks)); } catch (e) {}
    }

    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisit');
    let currentStreak = parseInt(localStorage.getItem('streak') || '0', 10);

    if (lastVisit !== today) {
      if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastVisitDate.toDateString() === yesterday.toDateString()) {
          currentStreak += 1;
        } else {
          currentStreak = 1;
        }
      } else {
        currentStreak = 1;
      }
      localStorage.setItem('streak', currentStreak.toString());
      localStorage.setItem('lastVisit', today);
    }
    setStreak(currentStreak);

    const savedActivity = localStorage.getItem('recentActivity');
    if (savedActivity) {
      try { 
        const parsed = JSON.parse(savedActivity);
        setRecentActivity(parsed); 
        
        // Calculate weekly progress
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const thisWeek = parsed.filter((a: any) => new Date(a.date) >= oneWeekAgo);
        setWeeklyProgress(thisWeek.length);
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    // Check achievements
    const newAchievements = [];
    if (streak >= 3) newAchievements.push('3-Day Streak');
    if (streak >= 7) newAchievements.push('7-Day Streak');
    if (Object.values(scores).some(s => s === 100)) newAchievements.push('Perfect Score');
    if (Object.keys(scores).length >= 5) newAchievements.push('Quiz Master');
    setAchievements(newAchievements);
  }, [streak, scores]);

  const logActivity = (title: string, path: string, type: string, score?: number) => {
    setRecentActivity(prev => {
      const newActivity = [{ title, path, type, date: new Date().toISOString(), score }, ...prev.filter(a => a.path !== path || a.type !== type)].slice(0, 10);
      localStorage.setItem('recentActivity', JSON.stringify(newActivity));
      
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      const thisWeek = newActivity.filter((a: any) => new Date(a.date) >= oneWeekAgo);
      setWeeklyProgress(thisWeek.length);
      
      return newActivity;
    });
  };

  const saveScore = (id: string, score: number, title?: string, path?: string) => {
    const newScores = { ...scores, [id]: Math.max(scores[id] || 0, score) };
    setScores(newScores);
    localStorage.setItem('quiz_scores', JSON.stringify(newScores));
    if (title && path) {
      logActivity(title, path, 'quiz', score);
    }
  };

  useEffect(() => {
    if (articleId) {
      setLiveStatus('checking');
      // Simulate network request for live checking
      const timer = setTimeout(() => {
        setLiveStatus('up-to-date');
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setLiveStatus('idle');
    }
  }, [articleId]);

  const isDashboard = !topicId;
  const selectedTopic = topicId ? topics.find((t) => t.id === topicId) || topics[0] : topics[0];
  const actualTopicId = selectedTopic.id;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const selectedSubtopic = subtopicId 
    ? selectedTopic.subtopics.find(s => {
        const title = typeof s === 'string' ? s : s.title;
        return slugify(title) === subtopicId;
      })
    : null;

  const subtopicTitle = selectedSubtopic 
    ? (typeof selectedSubtopic === 'string' ? selectedSubtopic : selectedSubtopic.title)
    : "";

  const subtopicItems = selectedSubtopic && typeof selectedSubtopic !== 'string' 
    ? selectedSubtopic.items 
    : [];

  const selectedCategory = categoryId 
    ? subtopicItems.find(i => {
        if (typeof i === 'string') return slugify(i) === categoryId;
        return slugify(i.title) === categoryId;
      })
    : null;

  const categoryTitle = selectedCategory
    ? (typeof selectedCategory === 'string' ? selectedCategory : selectedCategory.title)
    : "";

  const selectedArticle = articleId && typeof selectedCategory !== 'string' && selectedCategory?.articles
    ? selectedCategory.articles.find(a => slugify(a.title) === articleId)
    : null;

  const articleTitle = selectedArticle ? selectedArticle.title : "";

  useEffect(() => {
    if (selectedArticle && articleId) {
      const path = `/t/${actualTopicId}/${slugify(subtopicTitle)}/${slugify(categoryTitle)}/${slugify(selectedArticle.title)}`;
      logActivity(selectedArticle.title, path, 'read');
    }
  }, [selectedArticle, articleId, actualTopicId, subtopicTitle, categoryTitle]);

  const allSearchableItems = useMemo(() => {
    const items: { title: string, path: string, type: string, breadcrumb: string }[] = [];
    topics.forEach(t => {
      items.push({ title: t.title, path: `/t/${t.id}`, type: 'Topic', breadcrumb: t.title });
      t.subtopics.forEach(st => {
        const stTitle = typeof st === 'string' ? st : st.title;
        const stPath = `/t/${t.id}/${slugify(stTitle)}`;
        items.push({ title: stTitle, path: stPath, type: 'Subtopic', breadcrumb: `${t.title} > ${stTitle}` });
        if (typeof st !== 'string' && st.items) {
          st.items.forEach(cat => {
            const catTitle = typeof cat === 'string' ? cat : cat.title;
            const catPath = `${stPath}/${slugify(catTitle)}`;
            items.push({ title: catTitle, path: catPath, type: 'Category', breadcrumb: `${t.title} > ${stTitle} > ${catTitle}` });
            if (typeof cat !== 'string' && cat.articles) {
              cat.articles.forEach(art => {
                items.push({ title: art.title, path: `${catPath}/${slugify(art.title)}`, type: 'Article', breadcrumb: `${stTitle} > ${catTitle}` });
              });
            }
          });
        }
      });
    });
    return items;
  }, []);

  const searchResults = searchQuery.length > 1
    ? allSearchableItems.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const toggleBookmark = (path: string) => {
    const newBookmarks = bookmarks.includes(path)
      ? bookmarks.filter(b => b !== path)
      : [...bookmarks, path];
    setBookmarks(newBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
  };

  const SidebarContent = () => (
    <div className="py-6">
      <div className="px-6 mb-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <h2 className="text-2xl font-display font-bold text-primary flex items-center gap-3">
            <BookOpen className="h-7 w-7" />
            Apologetics
          </h2>
        </Link>
        <Button variant="ghost" size="icon" className="hidden lg:flex -mr-2" onClick={() => setIsSidebarOpen(false)}>
          <PanelLeftClose className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>
      <div className="space-y-1 px-3">
        <button
          onClick={() => {
            navigate(`/study`);
            setIsMobileMenuOpen(false);
          }}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-all mb-4 ${
            isDashboard
              ? "bg-primary text-primary-foreground font-medium shadow-sm"
              : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
          }`}
        >
          <LayoutDashboard className="h-4 w-4 shrink-0" />
          <span className="font-semibold">Dashboard</span>
        </button>
        
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-4 mt-4">Topics</div>
        {topics.map((topic) => {
          const score = getTopicScore(topic, scores);
          return (
            <button
              key={topic.id}
              onClick={() => {
                navigate(`/t/${topic.id}`);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex flex-col gap-2 px-4 py-3 text-sm rounded-lg transition-all ${
                !isDashboard && actualTopicId === topic.id
                  ? "bg-primary text-primary-foreground font-medium shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <Library className="h-4 w-4 shrink-0" />
                  <span className="text-left line-clamp-1">{topic.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] opacity-80">{score}%</span>
                  {!isDashboard && actualTopicId === topic.id && <ChevronRight className="h-4 w-4 shrink-0" />}
                </div>
              </div>
              <Progress 
                value={score} 
                className={`h-1 w-full ${!isDashboard && actualTopicId === topic.id ? '[&>div]:bg-primary-foreground bg-primary-foreground/20' : ''}`} 
              />
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-background overflow-hidden font-sans">
      {/* Desktop Sidebar */}
      <aside className={`hidden lg:flex flex-col border-r bg-card/50 backdrop-blur-sm transition-all duration-300 ${isSidebarOpen ? 'w-80' : 'w-0 opacity-0 overflow-hidden border-none'}`}>
        <ScrollArea className="flex-1 w-80">
          <SidebarContent />
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {!isSidebarOpen && (
          <div className="hidden lg:flex absolute top-8 left-8 z-20">
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-card/80 backdrop-blur-sm shadow-sm" 
              onClick={() => setIsSidebarOpen(true)}
            >
              <PanelLeft className="h-5 w-5" />
            </Button>
          </div>
        )}
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 border-b bg-card/80 backdrop-blur-md sticky top-0 z-10">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-xl font-display font-bold flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Apologetics
            </h1>
          </Link>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <ScrollArea className="h-full">
                <SidebarContent />
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </header>

        {/* Content Area */}
        <ScrollArea className="flex-1 p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            
            {!isDashboard && (
              <Breadcrumb className="mb-8">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/study">Dashboard</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {selectedSubtopic ? (
                      <BreadcrumbLink asChild>
                        <Link to={`/t/${actualTopicId}`}>{selectedTopic.title}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{selectedTopic.title}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {selectedSubtopic && (
                    <>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        {selectedCategory ? (
                          <BreadcrumbLink asChild>
                            <Link to={`/t/${actualTopicId}/${slugify(subtopicTitle)}`}>{subtopicTitle}</Link>
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{subtopicTitle}</BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                    </>
                  )}
                  {selectedCategory && (
                    <>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        {selectedArticle ? (
                          <BreadcrumbLink asChild>
                            <Link to={`/t/${actualTopicId}/${slugify(subtopicTitle)}/${slugify(categoryTitle)}`}>{categoryTitle}</Link>
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{categoryTitle}</BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                    </>
                  )}
                  {selectedArticle && (
                    <>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>{articleTitle}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </>
                  )}
                </BreadcrumbList>
              </Breadcrumb>
            )}

            {isDashboard ? (
              <div className="mb-12">
                <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">Study Dashboard</h1>
                <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mb-8">
                  Track your overall progress across all apologetics topics.
                </p>

                <div className="relative mb-12 max-w-2xl">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      placeholder="Search topics, categories, or articles..." 
                      className="pl-10 h-12 text-lg bg-card/50"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  {searchQuery.length > 1 && (
                    <div className="absolute w-full z-20 mt-2 bg-card border rounded-xl shadow-lg max-h-96 overflow-y-auto">
                      {searchResults.length > 0 ? (
                        <div className="p-2 space-y-1">
                          {searchResults.map((result, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                navigate(result.path);
                                setSearchQuery("");
                              }}
                              className="w-full text-left px-4 py-3 hover:bg-secondary/20 rounded-lg transition-colors flex flex-col"
                            >
                              <span className="font-medium text-foreground">{result.title}</span>
                              <span className="text-xs text-muted-foreground">{result.type} • {result.breadcrumb}</span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="p-8 text-center text-muted-foreground">
                          No results found for "{searchQuery}"
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  <div className="p-6 rounded-2xl border bg-primary/5 border-primary/20 flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-medium text-muted-foreground mb-2">Overall Progress</span>
                    <span className="text-5xl font-display font-bold text-primary">{getGlobalScore(scores)}%</span>
                  </div>
                  <div className="p-6 rounded-2xl border bg-card/50 flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-1 justify-center"><Flame className="h-4 w-4 text-orange-500"/> Daily Streak</span>
                    <span className="text-5xl font-display font-bold text-foreground">
                      {streak} <span className="text-2xl text-muted-foreground">days</span>
                    </span>
                  </div>
                  <div className="p-6 rounded-2xl border bg-card/50 flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-medium text-muted-foreground mb-2">Topics Started</span>
                    <span className="text-5xl font-display font-bold text-foreground">
                      {topics.filter(t => getTopicScore(t, scores) > 0).length}
                      <span className="text-xl text-muted-foreground">/{topics.length}</span>
                    </span>
                  </div>
                  <div className="p-6 rounded-2xl border bg-card/50 flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-medium text-muted-foreground mb-2">Quizzes</span>
                    <span className="text-5xl font-display font-bold text-foreground">
                      {Object.keys(scores).filter(k => scores[k] > 0).length}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                  <div className="col-span-1 lg:col-span-2 space-y-8">
                    {/* Continue Studying */}
                    {recentActivity.length > 0 && (
                      <div className="p-6 rounded-2xl border bg-card shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors cursor-pointer" onClick={() => navigate(recentActivity[0].path)}>
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                          <PlayCircle className="w-24 h-24 text-primary translate-x-4 -translate-y-4" />
                        </div>
                        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Clock className="h-4 w-4" /> Continue Studying
                        </h2>
                        <h3 className="text-2xl font-display font-bold mb-2 pr-12">{recentActivity[0].title}</h3>
                        <p className="text-muted-foreground text-sm flex items-center gap-2">
                          {recentActivity[0].type === 'quiz' ? 'Quiz completed' : 'Article read'} • {new Date(recentActivity[0].date).toLocaleDateString()}
                        </p>
                      </div>
                    )}

                    {/* Recent Activity Feed */}
                    <div>
                      <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                        <History className="h-5 w-5 text-primary" /> Recent Activity
                      </h2>
                      <div className="space-y-3">
                        {recentActivity.slice(1, 6).map((activity, idx) => (
                          <div key={idx} onClick={() => navigate(activity.path)} className="p-4 rounded-xl border bg-card/50 hover:bg-card transition-colors flex items-center gap-4 cursor-pointer">
                            <div className={`p-2 rounded-lg ${activity.type === 'quiz' ? 'bg-orange-500/10 text-orange-500' : 'bg-primary/10 text-primary'}`}>
                              {activity.type === 'quiz' ? <Trophy className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-foreground truncate">{activity.title}</h4>
                              <p className="text-xs text-muted-foreground">{new Date(activity.date).toLocaleDateString()}</p>
                            </div>
                            {activity.score !== undefined && (
                              <div className="text-right">
                                <span className="font-bold text-lg">{activity.score}%</span>
                              </div>
                            )}
                          </div>
                        ))}
                        {recentActivity.length <= 1 && (
                          <div className="text-center p-6 border border-dashed rounded-xl text-muted-foreground">
                            Start reading articles or taking quizzes to see your history here.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Weekly Goals */}
                    <div className="p-6 rounded-2xl border bg-card shadow-sm">
                      <h2 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" /> Weekly Goal
                      </h2>
                      <div className="flex flex-col items-center justify-center py-4">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" className="stroke-secondary/20" strokeWidth="12" fill="none" />
                            <circle 
                              cx="50" cy="50" r="40" 
                              className="stroke-primary" 
                              strokeWidth="12" 
                              fill="none" 
                              strokeDasharray="251.2" 
                              strokeDashoffset={251.2 - (251.2 * Math.min(weeklyProgress / weeklyGoal, 1))}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-display font-bold">{weeklyProgress}</span>
                            <span className="text-xs text-muted-foreground">/ {weeklyGoal}</span>
                          </div>
                        </div>
                        <p className="text-sm text-center text-muted-foreground mt-4">
                          {weeklyProgress >= weeklyGoal ? "Goal reached! Great job!" : `${weeklyGoal - weeklyProgress} more activities to reach your goal.`}
                        </p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="p-6 rounded-2xl border bg-card shadow-sm">
                      <h2 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" /> Achievements
                      </h2>
                      <div className="grid grid-cols-2 gap-3">
                        <div className={`p-3 rounded-xl border flex flex-col items-center text-center gap-2 ${achievements.includes('3-Day Streak') ? 'bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400' : 'bg-muted opacity-50 grayscale'}`}>
                          <Flame className="h-6 w-6" />
                          <span className="text-xs font-semibold">3-Day Streak</span>
                        </div>
                        <div className={`p-3 rounded-xl border flex flex-col items-center text-center gap-2 ${achievements.includes('7-Day Streak') ? 'bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400' : 'bg-muted opacity-50 grayscale'}`}>
                          <Flame className="h-6 w-6" />
                          <span className="text-xs font-semibold">7-Day Streak</span>
                        </div>
                        <div className={`p-3 rounded-xl border flex flex-col items-center text-center gap-2 ${achievements.includes('Perfect Score') ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-600 dark:text-yellow-400' : 'bg-muted opacity-50 grayscale'}`}>
                          <Star className="h-6 w-6" />
                          <span className="text-xs font-semibold">Perfect Score</span>
                        </div>
                        <div className={`p-3 rounded-xl border flex flex-col items-center text-center gap-2 ${achievements.includes('Quiz Master') ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-muted opacity-50 grayscale'}`}>
                          <Trophy className="h-6 w-6" />
                          <span className="text-xs font-semibold">Quiz Master</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {bookmarks.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                      <Bookmark className="h-6 w-6 text-primary" /> Bookmarked Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {bookmarks.map((path, idx) => {
                        const item = allSearchableItems.find(i => i.path === path);
                        if (!item) return null;
                        return (
                          <button
                            key={idx}
                            onClick={() => navigate(path)}
                            className="text-left p-4 rounded-2xl border bg-card/40 hover:bg-card transition-all flex flex-col"
                          >
                            <span className="font-semibold text-lg mb-1">{item.title}</span>
                            <span className="text-xs text-muted-foreground">{item.breadcrumb}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : !selectedSubtopic ? (
              <>
                <div className="mb-12">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground mb-4">
                    Topic
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">{selectedTopic.title}</h1>
                  <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl">
                    Select a subtopic below to dive deeper into your study and explore related questions and scriptures.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {selectedTopic.subtopics.map((subtopic, index) => {
                    const isString = typeof subtopic === 'string';
                    const title = isString ? subtopic : subtopic.title;
                    const progress = getSubTopicScore(subtopic, scores);

                    return (
                      <div 
                        key={index}
                        onClick={() => navigate(`/t/${actualTopicId}/${slugify(title)}`)}
                        className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer group flex flex-col min-h-[120px]"
                      >
                        <h3 className="font-display font-semibold text-xl group-hover:text-primary transition-colors mb-4">{title}</h3>
                        
                        <div className="mt-auto">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-muted-foreground font-medium">Progress</span>
                            <span className="text-xs text-muted-foreground">{progress}%</span>
                          </div>
                          <Progress value={progress} className="h-1.5 mb-4" />
                          
                          <div className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                            Study this topic <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Quiz 
                  id={`topic-${actualTopicId}`} 
                  title={selectedTopic.title} 
                  onComplete={(score) => saveScore(`topic-${actualTopicId}`, score, selectedTopic.title, `/t/${actualTopicId}`)} 
                />
              </>
            ) : !selectedCategory ? (
              <>
                <div className="mb-12">
                  <Button 
                    variant="ghost" 
                    className="mb-6 -ml-4 text-muted-foreground hover:text-foreground"
                    onClick={() => navigate(`/t/${actualTopicId}`)}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to {selectedTopic.title}
                  </Button>
                  <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">{subtopicTitle}</h1>
                </div>

                {subtopicItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {subtopicItems.map((item, i) => {
                      const isString = typeof item === 'string';
                      const title = isString ? item : item.title;
                      const description = !isString ? item.description : undefined;
                      const progress = getCategoryScore(item, scores);

                      return (
                        <div 
                          key={i} 
                          onClick={() => navigate(`/t/${actualTopicId}/${slugify(subtopicTitle)}/${slugify(title)}`)}
                          className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer group flex flex-col min-h-[120px]"
                        >
                          <h3 className="font-display font-semibold text-xl group-hover:text-primary transition-colors mb-2">{title}</h3>
                          {description && (
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{description}</p>
                          )}
                          <div className="mt-auto">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs text-muted-foreground font-medium">Progress</span>
                              <span className="text-xs text-muted-foreground">{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-1.5 mb-4" />
                            
                            <div className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                              Explore <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12 border rounded-2xl bg-card/30 border-dashed">
                    <p className="text-muted-foreground">More content coming soon for this topic.</p>
                  </div>
                )}
              </>
            ) : !selectedArticle ? (
              <>
                <div className="mb-12">
                  <Button 
                    variant="ghost" 
                    className="mb-6 -ml-4 text-muted-foreground hover:text-foreground"
                    onClick={() => navigate(`/t/${actualTopicId}/${slugify(subtopicTitle)}`)}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to {subtopicTitle}
                  </Button>
                  <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">{categoryTitle}</h1>
                  {typeof selectedCategory !== 'string' && selectedCategory.description && (
                    <p className="text-muted-foreground text-lg max-w-2xl">{selectedCategory.description}</p>
                  )}
                </div>

                {typeof selectedCategory !== 'string' && selectedCategory.articles && selectedCategory.articles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {selectedCategory.articles.map((article, j) => {
                      const score = scores[`article-${slugify(article.title)}`] || 0;
                      return (
                        <button
                          key={j}
                          onClick={() => navigate(`/t/${actualTopicId}/${slugify(subtopicTitle)}/${slugify(categoryTitle)}/${slugify(article.title)}`)}
                          className="text-left p-5 rounded-2xl border bg-card/40 backdrop-blur-sm hover:bg-card hover:shadow-lg hover:shadow-primary/5 hover:border-primary/40 transition-all duration-300 flex flex-col group relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                            <FileText className="w-24 h-24 text-primary translate-x-6 -translate-y-6 transform group-hover:scale-110 duration-500" />
                          </div>
                          
                          <div className="flex items-start gap-4 z-10 w-full mb-6">
                            <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors shrink-0">
                              <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 pt-0.5">
                              <span className="font-display font-semibold text-lg text-foreground/90 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                {article.title}
                              </span>
                            </div>
                          </div>
                          
                          <div className="mt-auto w-full z-10 bg-background/50 p-3.5 rounded-xl border border-border/50 group-hover:border-primary/20 transition-colors">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs font-medium text-muted-foreground">Study Progress</span>
                              <span className="text-xs font-bold text-primary">{score}%</span>
                            </div>
                            <Progress value={score} className="h-1.5 w-full bg-secondary/30" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-16 border rounded-2xl bg-card/30 border-dashed">
                    <BookOpen className="h-10 w-10 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">Articles coming soon.</p>
                  </div>
                )}
                <Quiz 
                  id={`cat-${slugify(categoryTitle)}`} 
                  title={categoryTitle} 
                  onComplete={(score) => saveScore(`cat-${slugify(categoryTitle)}`, score, categoryTitle, `/t/${actualTopicId}/${slugify(subtopicTitle)}/${slugify(categoryTitle)}`)} 
                />
              </>
            ) : (
              <>
                <div className="mb-12">
                  <Button 
                    variant="ghost" 
                    className="mb-6 -ml-4 text-muted-foreground hover:text-foreground"
                    onClick={() => navigate(`/t/${actualTopicId}/${slugify(subtopicTitle)}/${slugify(categoryTitle)}`)}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to {categoryTitle}
                  </Button>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <h1 className="text-3xl lg:text-4xl font-display font-bold tracking-tight leading-tight mb-0 pr-12">{articleTitle}</h1>
                    
                    <div className="flex items-center gap-3 shrink-0">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className={`rounded-full shrink-0 ${bookmarks.includes(`/t/${actualTopicId}/${slugify(subtopicTitle)}/${slugify(categoryTitle)}/${slugify(articleTitle)}`) ? 'text-primary border-primary bg-primary/5' : 'text-muted-foreground'}`}
                        onClick={() => toggleBookmark(`/t/${actualTopicId}/${slugify(subtopicTitle)}/${slugify(categoryTitle)}/${slugify(articleTitle)}`)}
                      >
                        {bookmarks.includes(`/t/${actualTopicId}/${slugify(subtopicTitle)}/${slugify(categoryTitle)}/${slugify(articleTitle)}`) ? (
                          <BookmarkMinus className="h-5 w-5" />
                        ) : (
                          <BookmarkPlus className="h-5 w-5" />
                        )}
                      </Button>
                      
                      {liveStatus !== 'idle' && (
                        <div className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-secondary/30 border border-border/50 shrink-0">
                          {liveStatus === 'checking' ? (
                            <>
                              <RefreshCw className="h-4 w-4 text-muted-foreground animate-spin" />
                              <span className="text-muted-foreground">Verifying...</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                              <span className="text-foreground font-medium">Up to date</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {selectedArticle.lastUpdated && (
                    <p className="text-sm text-muted-foreground mb-8 border-b pb-4">
                      Last updated: {selectedArticle.lastUpdated}
                    </p>
                  )}
                  
                  <div className="prose prose-slate dark:prose-invert max-w-none text-foreground/90 leading-relaxed whitespace-pre-wrap text-lg">
                    {renderMarkdown(selectedArticle.content)}
                  </div>
                </div>

                <Quiz 
                  id={`article-${slugify(articleTitle)}`} 
                  title={articleTitle} 
                  onComplete={(score) => saveScore(`article-${slugify(articleTitle)}`, score, articleTitle, `/t/${actualTopicId}/${slugify(subtopicTitle)}/${slugify(categoryTitle)}/${slugify(articleTitle)}`)} 
                />
              </>
            )}

            <footer className="mt-16 pt-8 pb-4 text-center border-t border-border/40">
              {selectedArticle && selectedArticle.url ? (
                <div className="flex flex-col items-center gap-2">
                  <a 
                    href={selectedArticle.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    Read original article on GotQuestions.org
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    All information and answers are provided by GotQuestions.org
                  </p>
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">
                  All information is provided by <a href="https://www.gotquestions.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">GotQuestions.org</a>
                </p>
              )}
            </footer>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
};

export default Index;
