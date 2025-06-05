
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutMediation from "./pages/AboutMediation";
import OnlineMediation from "./pages/OnlineMediation";
import MediatorDiscovery from "./pages/MediatorDiscovery";
import LegalInfo from "./pages/LegalInfo";
import InviteParty from "./pages/InviteParty";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import Stats from "./pages/Stats";
import LegalTerms from "./pages/LegalTerms";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutMediation />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/online-mediation" element={<OnlineMediation />} />
          <Route path="/mediators" element={<MediatorDiscovery />} />
          <Route path="/legal-info" element={<LegalInfo />} />
          <Route path="/legal-terms" element={<LegalTerms />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/invite" element={<InviteParty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
