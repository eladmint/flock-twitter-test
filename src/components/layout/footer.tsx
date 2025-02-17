import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full border-t bg-white/80 backdrop-blur-sm">
      <div className="flex h-12 items-center justify-center space-x-4 px-4 text-sm text-gray-600">
        <Link to="/privacy" className="hover:text-[#001F3F] transition-colors">
          Privacy Policy
        </Link>
        <span>•</span>
        <Link to="/terms" className="hover:text-[#001F3F] transition-colors">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
