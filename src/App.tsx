import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import AuthProvider from "@/lib/auth-context";
import Home from "./components/home";
import CampaignPage from "./components/campaign/campaign-page";
import AuthCallback from "./pages/auth/callback";
import Terms from "./pages/legal/terms";
import Privacy from "./pages/legal/privacy";
import Footer from "./components/layout/footer";
import routes from "tempo-routes";

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <Navbar />
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaign/:id" element={<CampaignPage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Suspense>
    </AuthProvider>
  );
}

export default App;
