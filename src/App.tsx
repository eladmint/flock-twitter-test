import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import CampaignPage from "./components/campaign/campaign-page";
import AuthCallback from "./pages/auth/callback";
import { AuthProvider } from "./lib/auth-context";
import routes from "tempo-routes";

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campaign/:id" element={<CampaignPage />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
