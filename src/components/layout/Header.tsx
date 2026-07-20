import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, Bell, ShoppingCart } from "lucide-react";

const navLinks = [
  { to: "/books", label: "Books" },
  { to: "/events", label: "Events" },
  { to: "/webinars", label: "Webinars" },
  { to: "/bookings", label: "Bookings" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 h-14 md:h-16 bg-white border-b border-line z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between md:gap-8">
        <Link
          to="/"
          className="font-manrope font-extrabold text-lg md:text-xl text-ink shrink-0"
        >
          Karlabash
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.to);
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-ink font-semibold"
                    : "text-charcoal font-medium hover:text-ink"
                }`}
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center w-64 h-9 border border-line rounded-[7px] px-3 gap-2">
          <Search className="w-4 h-4 text-charcoal/40 shrink-0" />
          <input
            type="text"
            placeholder="Search books, events, creators..."
            className="bg-transparent border-none outline-none text-sm flex-1 min-w-0 placeholder:text-charcoal/40"
          />
        </div>

        <div className="flex items-center gap-1 md:gap-3 shrink-0">
          <Link
            to="/notifications"
            className="w-9 h-9 flex items-center justify-center rounded-[7px] hover:bg-warm-white transition-colors text-charcoal cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
          </Link>
          <Link
            to="/cart"
            className="w-9 h-9 flex items-center justify-center rounded-[7px] hover:bg-warm-white transition-colors text-charcoal cursor-pointer"
            aria-label="Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </Link>
          <Link
            to="/profile"
            className="hidden md:flex w-8 h-8 rounded-full bg-ink text-white text-xs font-semibold items-center justify-center shrink-0"
          >
            KA
          </Link>
        </div>
      </div>
    </header>
  );
}
