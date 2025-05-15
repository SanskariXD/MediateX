
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Chatbot";
import Learn from "./pages/Learn";
import MediatorConnect from "./pages/MediatorConnect";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import SplashScreen from "./components/SplashScreen";

import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(() => {
    // Show splash screen only on first visit
    return !localStorage.getItem('hasSeenSplash');
  });

  useEffect(() => {
    // Mark splash as seen after it's shown once
    if (showSplash) {
      localStorage.setItem('hasSeenSplash', 'true');
    }
  }, [showSplash]);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/mediator-connect" element={<MediatorConnect />} />
              <Route path="/community" element={<Community />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
