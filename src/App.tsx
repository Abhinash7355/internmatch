
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InternshipDetails from "./pages/InternshipDetails";
import AboutUs from "./pages/AboutUs";
import BrowseInternships from "./pages/BrowseInternships";
import ApplyPage from "./pages/ApplyPage";
import ContactUs from "./pages/ContactUs";
import SearchInternships from "./pages/SearchInternships";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import ChatAI from "./components/ChatAI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/internship/:id" element={<InternshipDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/browse" element={<BrowseInternships />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/search" element={<SearchInternships />} />
          <Route path="/services" element={<Services />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatAI />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
