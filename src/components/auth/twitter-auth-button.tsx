import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth-context";

export default function TwitterAuthButton() {
  const { user, signInWithTwitter, signOut } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithTwitter();
    } catch (error) {
      console.error("Error signing in with Twitter:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      // Force reload after sign out to clear any cached state
      window.location.href = "/";
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return user ? (
    <Button variant="outline" onClick={handleSignOut}>
      <Twitter className="h-4 w-4 mr-2" />
      Sign Out
    </Button>
  ) : (
    <Button variant="outline" onClick={handleSignIn}>
      <Twitter className="h-4 w-4 mr-2" />
      Sign in with Twitter
    </Button>
  );
}
