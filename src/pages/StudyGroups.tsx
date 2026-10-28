import { useState } from "react";
import { ArrowLeft, Users, Search, BookOpen, Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChurchContent = () => (
  <div className="space-y-8 text-lg leading-relaxed animate-in fade-in duration-500 max-w-4xl mx-auto">
    <div className="mb-12 text-center">
      <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-3xl mb-6">
        <BookOpen className="h-10 w-10 text-primary" />
      </div>
      <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">The Church</h2>
      <p className="text-xl text-muted-foreground">
        Ecclesiology • Monthly Topic Study
      </p>
    </div>

    <div className="space-y-4">
      <h3 className="text-2xl font-bold font-display">1. How do you define a church and what components make a church what it is?</h3>
      
      <div className="bg-secondary/10 border-l-4 border-primary p-6 rounded-r-xl space-y-4">
        <div className="flex items-center gap-2 font-bold text-primary">
          <BookOpen className="h-5 w-5" />
          <span>Eph 1:22-23 NLT</span>
        </div>
        <p className="text-sm italic text-muted-foreground">
          <strong>Context:</strong> Ephesians 1:15–23 celebrates the value of our salvation in Christ. Paul's prayers for the believers of Ephesus not only include praise for their success, but an appeal for their growth. This passage heavily involves the supremacy of Christ. As believers, we are not only followers of Jesus, but also recipients of His blessings and power. Paul seeks to remind the Ephesian church that a complete understanding of Christ leads to a greater love and a stronger faith.
        </p>
        <p>
          <strong>Verse:</strong> 22 God has put all things under the authority of Christ and has made him head over all things for the benefit of the church. 23 And the church is his body; it is made full and complete by Christ, who fills all things everywhere with himself.
        </p>
      </div>

      <p className="bg-muted p-4 rounded-xl">
        <strong>Note:</strong> Many people think that the word church is restricted to either a building or denomination. But the biblical understanding of the church is that it is the body of Christ.
      </p>

      <div className="bg-secondary/10 border-l-4 border-primary p-6 rounded-r-xl space-y-4">
        <div className="flex items-center gap-2 font-bold text-primary">
          <BookOpen className="h-5 w-5" />
          <span>1Co 12:27 NLT</span>
        </div>
        <p className="text-sm italic text-muted-foreground">
          <strong>Context:</strong> First Corinthians 12:12–31 continues Paul's teaching on the spiritual gifts as they cooperate to empower God's will for the church. The Christian church is like a human body. It is one individual organism made up of many different parts that serve a wide variety of functions. All those functions matter. Nobody should decide they don't like their gift or their role in the church and try to quit. The body needs each member to do its part in order to work properly. We must respect and value each other for the vital roles we serve in the church.
        </p>
        <p>
          <strong>Verse:</strong> 27 All of you together are Christ's body, and each of you is a part of it.
        </p>
      </div>

      <p className="bg-muted p-4 rounded-xl">
        <strong>Note:</strong> Through this we know that one can become part of the body of Christ and the church can refer to a localized body of believers or the universal group of believers. How does one become part of the church or body of Christ?
      </p>

      <div className="bg-secondary/10 border-l-4 border-primary p-6 rounded-r-xl space-y-4">
        <div className="flex items-center gap-2 font-bold text-primary">
          <BookOpen className="h-5 w-5" />
          <span>1Co 12:13 NLT</span>
        </div>
        <p>
          13 Some of us are Jews, some are Gentiles, some are slaves, and some are free. But we have all been baptized into one body by one Spirit, and we all share the same Spirit.
        </p>
      </div>

      <p className="bg-muted p-4 rounded-xl">
        <strong>Note:</strong> One becoming part of the body of Christ is the work of the Holy Spirit and is what unites all believers. One must first receive the spirit.
      </p>
    </div>

    <div className="space-y-4 mt-8">
      <ul className="list-decimal pl-6 space-y-4 font-medium">
        <li>How would you explain to someone how the spirit is received?</li>
        <li>How does thinking of the church as a people rather than a building change the impact and importance of church?</li>
        <li>How do you view someone who claims to be a believer but is not part of a local church?</li>
        <li>What about another believer who is not a part of your local church?</li>
        <li>How would seeing these believers as your brothers and sisters within the universal church impact the way you interact with them.</li>
        <li>Look up the following verses and after each verse we review let's reflect from it how should church attendance impact your faith and how do you live it out?</li>
      </ul>
    </div>

    <div className="space-y-6 mt-8">
      <div className="bg-secondary/10 border-l-4 border-primary p-6 rounded-r-xl space-y-4">
        <div className="flex items-center gap-2 font-bold text-primary">
          <BookOpen className="h-5 w-5" />
          <span>Act 2:42-47 NLT</span>
        </div>
        <p className="text-sm italic text-muted-foreground">
          <strong>Context:</strong> Acts 2:42–47 describes the routine of the early church. One morning, about nine days after Jesus ascended into heaven, the Holy Spirit indwelt 120 of His followers (Acts 2:1–4). By that evening, three thousand devout Jews and proselytes had joined them (Acts 2:41). Most of the newcomers had come to Jerusalem for Pentecost from other countries. Many decide to stay in Jerusalem, to learn more about Jesus and be part of the phenomenon we now call ''the church.''
        </p>
        <p>
          <strong>Verses:</strong> 42 All the believers devoted themselves to the apostles' teaching, and to fellowship, and to sharing in meals (including the Lord's Supper), and to prayer. 43 A deep sense of awe came over them all, and the apostles performed many miraculous signs and wonders. 44 And all the believers met together in one place and shared everything they had. 45 They sold their property and possessions and shared the money with those in need. 46 They worshiped together at the Temple each day, met in homes for the Lord's Supper, and shared their meals with great joy and generosity-- 47 all the while praising God and enjoying the goodwill of all the people. And each day the Lord added to their fellowship those who were being saved.
        </p>
      </div>

      <div className="bg-secondary/10 border-l-4 border-primary p-6 rounded-r-xl space-y-4">
        <div className="flex items-center gap-2 font-bold text-primary">
          <BookOpen className="h-5 w-5" />
          <span>1Co 12:12-27 NLT</span>
        </div>
        <p>
          12 The human body has many parts, but the many parts make up one whole body. So it is with the body of Christ. 13 Some of us are Jews, some are Gentiles, some are slaves, and some are free. But we have all been baptized into one body by one Spirit, and we all share the same Spirit. 14 Yes, the body has many different parts, not just one part. 15 If the foot says, "I am not a part of the body because I am not a hand," that does not make it any less a part of the body. 16 And if the ear says, "I am not part of the body because I am not an eye," would that make it any less a part of the body? 17 If the whole body were an eye, how would you hear? Or if your whole body were an ear, how would you smell anything? 18 But our bodies have many parts, and God has put each part just where he wants it. 19 How strange a body would be if it had only one part! 20 Yes, there are many parts, but only one body. 21 The eye can never say to the hand, "I don't need you." The head can't say to the feet, "I don't need you." 22 In fact, some parts of the body that seem weakest and least important are actually the most necessary. 23 And the parts we regard as less honorable are those we clothe with the greatest care. So we carefully protect those parts that should not be seen, 24 while the more honorable parts do not require this special care. So God has put the body together such that extra honor and care are given to those parts that have less dignity. 25 This makes for harmony among the members, so that all the members care for each other. 26 If one part suffers, all the parts suffer with it, and if one part is honored, all the parts are glad. 27 All of you together are Christ's body, and each of you is a part of it.
        </p>
      </div>

      <div className="bg-secondary/10 border-l-4 border-primary p-6 rounded-r-xl space-y-4">
        <div className="flex items-center gap-2 font-bold text-primary">
          <BookOpen className="h-5 w-5" />
          <span>Eph 4:11-32 NLT</span>
        </div>
        <p>
          11 Now these are the gifts Christ gave to the church: the apostles, the prophets, the evangelists, and the pastors and teachers. 12 Their responsibility is to equip God's people to do his work and build up the church, the body of Christ. 13 This will continue until we all come to such unity in our faith and knowledge of God's Son that we will be mature in the Lord, measuring up to the full and complete standard of Christ. 14 Then we will no longer be immature like children. We won't be tossed and blown about by every wind of new teaching. We will not be influenced when people try to trick us with lies so clever they sound like the truth. 15 Instead, we will speak the truth in love, growing in every way more and more like Christ, who is the head of his body, the church. 16 He makes the whole body fit together perfectly. As each part does its own special work, it helps the other parts grow, so that the whole body is healthy and growing and full of love. 17 With the Lord's authority I say this: Live no longer as the Gentiles do, for they are hopelessly confused. 18 Their minds are full of darkness; they wander far from the life God gives because they have closed their minds and hardened their hearts against him. 19 They have no sense of shame. They live for lustful pleasure and eagerly practice every kind of impurity. 20 But that isn't what you learned about Christ. 21 Since you have heard about Jesus and have learned the truth that comes from him, 22 throw off your old sinful nature and your former way of life, which is corrupted by lust and deception. 23 Instead, let the Spirit renew your thoughts and attitudes. 24 Put on your new nature, created to be like God--truly righteous and holy. 25 So stop telling lies. Let us tell our neighbors the truth, for we are all parts of the same body. 26 And "don't sin by letting anger control you." Don't let the sun go down while you are still angry, 27 for anger gives a foothold to the devil. 28 If you are a thief, quit stealing. Instead, use your hands for good hard work, and then give generously to others in need. 29 Don't use foul or abusive language. Let everything you say be good and helpful, so that your words will be an encouragement to those who hear them. 30 And do not bring sorrow to God's Holy Spirit by the way you live. Remember, he has identified you as his own, guaranteeing that you will be saved on the day of redemption. 31 Get rid of all bitterness, rage, anger, harsh words, and slander, as well as all types of evil behavior. 32 Instead, be kind to each other, tenderhearted, forgiving one another, just as God through Christ has forgiven you.
        </p>
      </div>

      <div className="bg-secondary/10 border-l-4 border-primary p-6 rounded-r-xl space-y-4">
        <div className="flex items-center gap-2 font-bold text-primary">
          <BookOpen className="h-5 w-5" />
          <span>Heb 10:23-25 NLT</span>
        </div>
        <p className="text-sm italic text-muted-foreground">
          <strong>Context:</strong> Hebrews 10:19–25 is an encouraging bridge between two major sections of the book of Hebrews. Earlier verses completed a long, detailed explanation of why the new covenant is superior to the old covenant. This section is meant to inspire Christians to be confident, courageous, and uplifted in living out their faith. The following passage is perhaps the sternest warning given in this letter about the danger of ''falling away'' from the faith.
        </p>
        <p>
          <strong>Verses:</strong> 23 Let us hold tightly without wavering to the hope we affirm, for God can be trusted to keep his promise. 24 Let us think of ways to motivate one another to acts of love and good works. 25 And let us not neglect our meeting together, as some people do, but encourage one another, especially now that the day of his return is drawing near.
        </p>
      </div>
    </div>

    <div className="space-y-4 mt-8">
      <ul className="list-decimal pl-6 space-y-4 font-medium">
        <li>In what ways has the local church helped you grow in your faith?</li>
        <li>If someone does not belong to a local body of believers or is not actively engaged in a local church, what are they wrestling with regarding God’s instruction to live in fellowship with other believers or what reasons might they have for remaining disconnected?</li>
        <li>Some people may have past pain, frustrations, or experiences, what may be preventing them from surrendering those feelings in order to follow God’s instructions?</li>
      </ul>
    </div>

    <p className="bg-muted p-4 rounded-xl mt-8">
      <strong>Note:</strong> When we are part of a church, we should thank God for both our local body of believers and the universal church. We can also think of someone outside our local church within the body of Christ whom we can encourage and build up this week.
    </p>
  </div>
);

const StudyGroups = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const defaultTopics = [
    { id: "1", title: "The Church", category: "Ecclesiology", groups: 12, month: "August 2026" },
  ];

  const churchQuestions = [
    { id: "q1", title: "What is the Church?" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-10 p-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => {
              if (selectedQuestion) setSelectedQuestion(null);
              else if (selectedTopic) setSelectedTopic(null);
            }} 
            asChild={!selectedTopic && !selectedQuestion}
          >
            {selectedQuestion || selectedTopic ? (
              <ArrowLeft className="h-5 w-5" />
            ) : (
              <Link to="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            )}
          </Button>
          <h1 className="text-xl font-display font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Monthly Topic Study
          </h1>
        </div>
      </header>

      <main className="flex-1 p-6 lg:p-12 max-w-6xl mx-auto w-full">
        {selectedTopic === "1" ? (
          selectedQuestion === "q1" ? (
            <ChurchContent />
          ) : (
            <div className="animate-in fade-in duration-500">
              <div className="mb-12 text-center">
                <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-3xl mb-6">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">The Church</h2>
                <p className="text-xl text-muted-foreground">
                  Ecclesiology • Monthly Topic Study
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
                {churchQuestions.map((q) => (
                  <div 
                    key={q.id}
                    onClick={() => setSelectedQuestion(q.id)}
                    className="p-6 rounded-2xl border bg-card/50 hover:bg-card hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">{q.title}</h3>
                    <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0" />
                  </div>
                ))}
              </div>
            </div>
          )
        ) : (
          <>
            <div className="mb-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Monthly Topic Database</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our database of monthly study topics to discuss, share insights, and grow together.
              </p>
            </div>

            <div className="relative mb-12 max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for topics..." 
                className="pl-12 h-14 text-lg bg-card/50 rounded-2xl"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {defaultTopics.map((topic) => (
                <div 
                  key={topic.id} 
                  onClick={() => setSelectedTopic(topic.id)}
                  className="p-6 rounded-3xl border bg-card/50 hover:bg-card hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all cursor-pointer flex flex-col h-full group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/10 p-3 rounded-2xl group-hover:bg-primary/20 transition-colors">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground">
                      {topic.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{topic.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-6">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5"><Users className="h-4 w-4" /> {topic.groups} groups</span>
                      <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {topic.month}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0" />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default StudyGroups;
