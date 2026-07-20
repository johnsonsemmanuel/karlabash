import { Link } from "react-router-dom";
import { Bell, ShoppingCart, User, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-line z-50">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center gap-4">
        <Link to="/" className="font-manrope font-extrabold text-lg text-red-karlabash shrink-0">
          Karlabash
        </Link>

        <div className="flex-1 max-w-md h-9 border border-line rounded-[7px] px-3 flex items-center gap-2">
          <Search className="w-4 h-4 text-charcoal/40 shrink-0" />
          <input
            type="text"
            placeholder="Search books, events, creators..."
            className="bg-transparent border-none outline-none text-sm flex-1 min-w-0"
          />
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            className="w-9 h-9 flex items-center justify-center rounded-[7px] hover:bg-warm-white transition-colors text-charcoal cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="w-9 h-9 flex items-center justify-center rounded-[7px] hover:bg-warm-white transition-colors text-charcoal cursor-pointer"
            aria-label="Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="w-9 h-9 flex items-center justify-center rounded-[7px] hover:bg-warm-white transition-colors text-charcoal cursor-pointer"
            aria-label="Account"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
