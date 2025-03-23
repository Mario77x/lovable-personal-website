
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { generateFavicon } from "./utils/generateFavicon";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Generate dynamic favicon on mount
    generateFavicon();
    
    // Force refresh metadata for social sharing
    const metaTags = document.querySelectorAll('meta[property^="og:"]');
    metaTags.forEach(tag => {
      // This trick forces browsers to re-fetch the metadata
      const parent = tag.parentNode;
      if (parent) {
        const clone = tag.cloneNode(true);
        parent.replaceChild(clone, tag);
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
