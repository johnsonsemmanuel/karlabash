import { NavLink } from "react-router-dom";
import { Home, Bookmark, PlusCircle, Heart, User } from "lucide-react";

const tabs = [
  { to: "/", icon: Home, label: "Home", end: true },
  { to: "/library", icon: Bookmark, label: "Library", end: false },
  { to: "/sell", icon: PlusCircle, label: "Sell", isCenter: true, end: false },
  { to: "/show-love", icon: Heart, label: "Support", end: false },
  { to: "/profile", icon: User, label: "Profile", end: false },
];

export default function TabBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-line z-50 md:hidden">
      <div className="max-w-lg mx-auto h-full flex items-center justify-around">
        {tabs.map((tab) => {
          if (tab.isCenter) {
            return (
              <NavLink
                key={tab.to}
                to={tab.to}
                className="flex flex-col items-center gap-0.5 cursor-pointer"
              >
                <div className="w-11 h-11 -mt-4 bg-red-karlabash text-white rounded-full flex items-center justify-center">
                  <tab.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium text-red-karlabash">
                  {tab.label}
                </span>
              </NavLink>
            );
          }

          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className="flex flex-col items-center gap-0.5 cursor-pointer"
            >
              {({ isActive }) => (
                <>
                  <tab.icon
                    className={`w-5 h-5 ${isActive ? "text-red-karlabash" : "text-charcoal"}`}
                    fill={isActive ? "currentColor" : "none"}
                  />
                  <span
                    className={`text-[10px] font-medium ${isActive ? "text-red-karlabash" : "text-charcoal"}`}
                  >
                    {tab.label}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
