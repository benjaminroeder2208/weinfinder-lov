import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeToggle from "@/components/ThemeToggle";
import { Suspense, lazy } from "react";

const Landing = lazy(() => import("./pages/Landing.tsx"));
const SoFunktionierts = lazy(() => import("./pages/SoFunktionierts.tsx"));
const SoFunktioniertsRechner = lazy(() => import("./pages/SoFunktioniertsRechner.tsx"));
const Social = lazy(() => import("./pages/Social.tsx"));
const Kontakt = lazy(() => import("./pages/legal/Kontakt.tsx"));
const Impressum = lazy(() => import("./pages/legal/Impressum.tsx"));
const Datenschutz = lazy(() => import("./pages/legal/Datenschutz.tsx"));
const Agb = lazy(() => import("./pages/legal/Agb.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: "#f5f0e8" }} />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/so-funktionierts" element={<SoFunktionierts />} />
            <Route path="/so-funktionierts/rechner" element={<SoFunktioniertsRechner />} />
            <Route path="/social" element={<Social />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<Agb />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
