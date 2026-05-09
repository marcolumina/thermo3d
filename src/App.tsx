import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useCartSync } from "@/hooks/useCartSync";
import Index from "./pages/Index.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import Catalogue from "./pages/Catalogue.tsx";
import Contact from "./pages/Contact.tsx";
import APropos from "./pages/APropos.tsx";
import FAQ from "./pages/FAQ.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import CGV from "./pages/CGV.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
import PolitiqueRetour from "./pages/PolitiqueRetour.tsx";
import AccessoiresThermomix from "./pages/AccessoiresThermomix.tsx";
import SupportThermomix from "./pages/SupportThermomix.tsx";
import RangementThermomix from "./pages/RangementThermomix.tsx";
import AccessoiresTM5 from "./pages/AccessoiresTM5.tsx";
import AccessoiresTM6 from "./pages/AccessoiresTM6.tsx";
import AccessoiresTM7 from "./pages/AccessoiresTM7.tsx";
import Blog from "./pages/Blog.tsx";
import Livraison from "./pages/Livraison.tsx";
import BlogArticle from "./pages/BlogArticle.tsx";
import NotFound from "./pages/NotFound.tsx";
import Auth from "./pages/Auth.tsx";
import Account from "./pages/Account.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import CacheEcranPersonnalise from "./pages/CacheEcranPersonnalise.tsx";
import CacheEcranSurMesure from "./pages/CacheEcranSurMesure.tsx";
import MascotFloating from "./components/MascotFloating.tsx";
import CookieBanner from "./components/CookieBanner.tsx";

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/index.html" element={<Index />} />
        <Route path="/product/:handle" element={<ProductPage />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/politique-de-retour" element={<PolitiqueRetour />} />
        <Route path="/retours" element={<PolitiqueRetour />} />
        <Route path="/livraison" element={<Livraison />} />
        <Route path="/accessoires-thermomix" element={<AccessoiresThermomix />} />
        <Route path="/support-thermomix" element={<SupportThermomix />} />
        <Route path="/rangement-thermomix" element={<RangementThermomix />} />
        <Route path="/accessoires-tm5" element={<AccessoiresTM5 />} />
        <Route path="/accessoires-tm6" element={<AccessoiresTM6 />} />
        <Route path="/accessoires-tm7" element={<AccessoiresTM7 />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/account" element={<Account />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/cache-ecran-personnalise" element={<CacheEcranPersonnalise />} />
        <Route path="/cache-ecran-sur-mesure" element={<CacheEcranPersonnalise />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MascotFloating />
      <CookieBanner />
    </BrowserRouter>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
