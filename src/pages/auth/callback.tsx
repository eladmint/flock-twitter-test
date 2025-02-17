import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

import Navbar from "@/components/layout/navbar";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle the OAuth callback
    const handleAuthCallback = async () => {
      try {
        // Get the session - this should automatically handle the OAuth callback
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) throw error;

        if (session) {
          // Successfully authenticated
          console.log("Authentication successful");
          navigate("/");
        } else {
          // No session found
          console.error("No session found");
          navigate("/");
        }
      } catch (error) {
        console.error("Error during authentication:", error);
        navigate("/");
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      <div className="h-[calc(100vh-4rem)] w-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Completing sign in...</h2>
          <p className="text-gray-600">You will be redirected shortly</p>
        </div>
      </div>
    </div>
  );
}
