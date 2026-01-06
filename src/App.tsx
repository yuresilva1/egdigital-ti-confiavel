import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicos from "./pages/Servicos";
import TITerceirizada from "./pages/TITerceirizada";
import Planos from "./pages/Planos";
import Diferenciais from "./pages/Diferenciais";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import SplashScreen from "./components/SplashScreen";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Display splash screen for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Render the splash screen while loading
    return <SplashScreen onAnimationEnd={() => {}} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/ti-terceirizada" element={<TITerceirizada />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/diferenciais" element={<Diferenciais />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;