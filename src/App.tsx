import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const App = () => {
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
        <Analytics
  mode="production"
  debug={true}
  endpoint="https://elevatebrand36.com/_vercel/insights"
  scriptSrc="https://elevatebrand36.com/_vercel/insights/script.js"
  beforeSend={(event: BeforeSendEvent) => {
    if (event.url.includes("/private")) {
      return null;
    }
    return event;
  }}
/>
</TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
