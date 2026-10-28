import { BookOpen, Users, ArrowRight, Sparkles, BookMarked, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl w-full relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 text-foreground tracking-tight">
            Apologetics
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Grow in your knowledge and faith. Choose your study path below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Link 
            to="/study"
            className="group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm p-6 hover:bg-card hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40 transition-all duration-300 flex flex-col"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Compass className="w-32 h-32 text-primary translate-x-8 -translate-y-8 transform group-hover:scale-110 duration-500" />
            </div>
            
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <BookMarked className="h-6 w-6 text-primary" />
            </div>
            
            <h2 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">Detailed Topic Study</h2>
            <p className="text-muted-foreground text-sm mb-6 flex-1">
              Dive deep into comprehensive theological topics, track your progress, and test your knowledge.
            </p>
            
            <div className="flex items-center text-sm text-primary font-semibold mt-auto">
              Start Studying <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link 
            to="/groups"
            className="group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm p-6 hover:bg-card hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40 transition-all duration-300 flex flex-col"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <BookOpen className="w-32 h-32 text-primary translate-x-8 -translate-y-8 transform group-hover:scale-110 duration-500" />
            </div>
            
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            
            <h2 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">Monthly Topic Study</h2>
            <p className="text-muted-foreground text-sm mb-6 flex-1">
              Explore a database of monthly topics to discuss, share insights, and grow together.
            </p>
            
            <div className="flex items-center text-sm text-primary font-semibold mt-auto">
              Explore Topics <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-card/50 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Daily streaks and progress tracking enabled
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
