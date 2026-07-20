import {
  User,
  CreditCard,
  Bell,
  Globe,
  HelpCircle,
  FileText,
  Shield,
  LogOut,
  Trash2,
  ChevronRight,
} from "lucide-react";
import { currentUser } from "../../data/mockData";

interface SectionGroup {
  title: string;
  items: {
    label: string;
    icon: typeof User;
    variant?: "default" | "danger";
  }[];
}

const sections: SectionGroup[] = [
  {
    title: "Account",
    items: [
      { label: "Edit Profile", icon: User },
      { label: "Payment Methods", icon: CreditCard },
      { label: "Notification Settings", icon: Bell },
      { label: "Language", icon: Globe },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Help Center", icon: HelpCircle },
      { label: "Terms of Service", icon: FileText },
      { label: "Privacy Policy", icon: Shield },
    ],
  },
  {
    title: "Danger",
    items: [
      { label: "Log Out", icon: LogOut, variant: "danger" },
      { label: "Delete Account", icon: Trash2, variant: "danger" },
    ],
  },
];

export default function ProfilePage() {
  return (
    <div className="bg-warm-white min-h-screen">
      <div className="bg-ink py-8 px-4 text-center">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="w-20 h-20 rounded-full mx-auto border-2 border-white object-cover"
        />
        <p className="text-lg font-manrope font-bold text-white mt-3">
          {currentUser.name}
        </p>
        <p className="text-sm text-white/60">{currentUser.email}</p>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-[4px] bg-gold text-ink mt-2 inline-block">
          {currentUser.role}
        </span>
      </div>

      <div className="max-w-lg mx-auto mt-6 space-y-1">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="text-xs font-semibold text-charcoal uppercase tracking-wide px-4 mb-1">
              {section.title}
            </p>
            <div className="bg-white border border-line rounded-[7px] overflow-hidden">
              {section.items.map((item) => (
                <button
                  key={item.label}
                  className={`w-full px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-warm-white transition border-b border-line last:border-b-0 ${
                    item.variant === "danger"
                      ? "text-red-karlabash"
                      : "text-ink"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      className={`w-4 h-4 ${
                        item.variant === "danger"
                          ? "text-red-karlabash"
                          : "text-charcoal"
                      }`}
                    />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-charcoal/40" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
