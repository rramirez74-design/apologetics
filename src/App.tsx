import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MainMenu from "./pages/MainMenu";
import StudyGroups from "./pages/StudyGroups";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/study" element={<Index />} />
          <Route path="/groups" element={<StudyGroups />} />
          <Route path="/t/:topicId" element={<Index />} />
          <Route path="/t/:topicId/:subtopicId" element={<Index />} />
          <Route path="/t/:topicId/:subtopicId/:categoryId" element={<Index />} />
          <Route path="/t/:topicId/:subtopicId/:categoryId/:articleId" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
