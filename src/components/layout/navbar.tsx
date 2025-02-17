import { Button } from "@/components/ui/button";
import { Bell, Home, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/lib/auth-context";
import TwitterAuthButton from "@/components/auth/twitter-auth-button";

export default function Navbar() {
  const { user } = useAuth();
  return (
    <nav className="fixed top-0 w-full border-b bg-white/80 backdrop-blur-sm z-50">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Link to="/" className="mr-6">
          <img src="/logo.svg" alt="Flock" className="h-8 w-auto" />
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          {!user ? (
            <TwitterAuthButton />
          ) : (
            <>
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5 text-[#001F3F]" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-[#001F3F]" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5 text-[#001F3F]" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 text-[#001F3F]" />
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
