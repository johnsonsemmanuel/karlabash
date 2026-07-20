import { BookOpen, Ticket, Video, Calendar } from "lucide-react";
import { recentSales } from "../../data/mockData";

interface DashboardHomeProps {
  user: {
    name: string;
    earnings: number;
    followersCount: number;
    totalSales: number;
  };
}

const saleTypeIcons: Record<string, typeof BookOpen> = {
  "Digital Gold: Building in West Africa": BookOpen,
  "VIP Ticket - Afrofuture Fest 2026": Ticket,
  "Building the Future: Tech in Ghana": BookOpen,
  "WriteShop: Fiction Masterclass": Calendar,
  "Echoes of the Volta": BookOpen,
};

export default function DashboardHome({ user }: DashboardHomeProps) {
  return (
    <div className="p-4 bg-warm-white min-h-screen">
      <h1 className="text-lg font-manrope font-bold text-ink">
        Welcome back, {user.name}
      </h1>
      <p className="text-sm text-charcoal">Here's what's happening today.</p>

      <div className="bg-ink rounded-[7px] p-5 mt-5 mb-6">
        <p className="text-sm text-white/60">Total Earnings</p>
        <p className="text-3xl font-bold tabular-nums text-gold mt-1">
          GH₵ {user.earnings.toLocaleString()}
        </p>
        <div className="flex gap-6 mt-4">
          <div>
            <p className="text-xs text-white/50">Total Sales</p>
            <p className="text-lg font-bold tabular-nums text-white">
              {user.totalSales.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs text-white/50">Followers</p>
            <p className="text-lg font-bold tabular-nums text-white">
              {user.followersCount.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-manrope font-semibold text-ink">
            Recent Sales
          </h2>
          <button className="text-sm text-red-karlabash font-semibold">
            View All
          </button>
        </div>
        <div className="space-y-2">
          {recentSales.map((sale) => {
            const Icon = saleTypeIcons[sale.item] || BookOpen;
            return (
              <div
                key={sale.id}
                className="bg-white border border-line rounded-[7px] p-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-[7px] bg-red-karlabash/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-red-karlabash" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-ink line-clamp-1">
                    {sale.item}
                  </p>
                  <p className="text-xs text-charcoal">{sale.buyer}</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sm font-bold tabular-nums text-ink">
                    GH₵ {sale.amount}
                  </p>
                  <span
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-[4px] ${
                      sale.status === "completed"
                        ? "bg-success/10 text-success"
                        : "bg-gold/20 text-gold-dark"
                    }`}
                  >
                    {sale.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white border border-line rounded-[7px] p-4 text-center cursor-pointer hover:border-charcoal/30 transition">
          <BookOpen className="w-8 h-8 mx-auto text-red-karlabash" />
          <p className="text-xs font-semibold text-ink mt-2">Books</p>
        </div>
        <div className="bg-white border border-line rounded-[7px] p-4 text-center cursor-pointer hover:border-charcoal/30 transition">
          <Calendar className="w-8 h-8 mx-auto text-red-karlabash" />
          <p className="text-xs font-semibold text-ink mt-2">Events</p>
        </div>
        <div className="bg-white border border-line rounded-[7px] p-4 text-center cursor-pointer hover:border-charcoal/30 transition">
          <Video className="w-8 h-8 mx-auto text-red-karlabash" />
          <p className="text-xs font-semibold text-ink mt-2">Webinars</p>
        </div>
      </div>
    </div>
  );
}
