import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function TwitterAuthButton() {
  const handleTwitterLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "twitter",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <Button
      onClick={handleTwitterLogin}
      className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white"
    >
      <Twitter className="h-4 w-4 mr-2" />
      Sign in with Twitter
    </Button>
  );
}
