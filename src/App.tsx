
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Index from "./pages/Index";

// Lazy load pages for better performance
const InternshipDetails = lazy(() => import("./pages/InternshipDetails"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const BrowseInternships = lazy(() => import("./pages/BrowseInternships"));
const ApplyPage = lazy(() => import("./pages/ApplyPage"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const SearchInternships = lazy(() => import("./pages/SearchInternships"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading spinner for lazy-loaded components
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-intern-purple"></div>
  </div>
);

const queryClient = new QueryClient();

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
