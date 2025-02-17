import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { Twitter } from "lucide-react";

export default function TwitterAuthButton() {
  const { user, signInWithTwitter, signOut } = useAuth();

  return user ? (
    <Button variant="outline" onClick={signOut} className="w-full">
      <Twitter className="h-4 w-4 mr-2" />
      Sign Out
    </Button>
  ) : (
    <Button variant="outline" onClick={signInWithTwitter} className="w-full">
      <Twitter className="h-4 w-4 mr-2" />
      Sign in with Twitter
    </Button>
  );
}
