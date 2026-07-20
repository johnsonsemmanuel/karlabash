import { NavLink } from "react-router-dom";
import { Home, Bookmark, PlusCircle, Heart, User } from "lucide-react";

const tabs = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/library", icon: Bookmark, label: "Library" },
  { to: "/sell", icon: PlusCircle, label: "Sell", isCenter: true },
  { to: "/show-love", icon: Heart, label: "Support" },
  { to: "/profile", icon: User, label: "Profile" },
];

export default function TabBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-line z-50">
      <div className="max-w-lg mx-auto h-full flex items-center justify-around">
        {tabs.map((tab) => {
          if (tab.isCenter) {
            return (
              <NavLink
                key={tab.to}
                to={tab.to}
                className="flex flex-col items-center gap-0.5 cursor-pointer"
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`w-11 h-11 -mt-4 rounded-full flex items-center justify-center ${
                        isActive
                          ? "bg-red-karlabash text-white"
                          : "bg-red-karlabash text-white"
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-medium ${
                        isActive ? "text-red-karlabash" : "text-charcoal"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </>
                )}
              </NavLink>
            );
          }

          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.to === "/"}
              className="flex flex-col items-center gap-0.5 cursor-pointer"
            >
              {({ isActive }) => (
                <>
                  <tab.icon
                    className={`w-5 h-5 ${isActive ? "text-red-karlabash" : "text-charcoal"}`}
                    fill={isActive ? "currentColor" : "none"}
                  />
                  <span
                    className={`text-[10px] font-medium ${
                      isActive ? "text-red-karlabash" : "text-charcoal"
                    }`}
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
