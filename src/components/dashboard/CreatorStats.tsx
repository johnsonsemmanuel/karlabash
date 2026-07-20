import { TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  { label: "Views This Week", value: "2,847", change: "+12.5%", positive: true },
  { label: "Conversion Rate", value: "4.2%", change: "+0.8%", positive: true },
  { label: "Avg. Rating", value: "4.8", change: "+0.1", positive: true },
  { label: "Followers This Month", value: "186", change: "-3.2%", positive: false },
];

const topProducts = [
  { rank: 1, title: "Digital Gold: Building in West Africa", sales: 87, revenue: 10440 },
  { rank: 2, title: "Building the Future: Tech in Ghana", sales: 56, revenue: 6160 },
  { rank: 3, title: "WriteShop: Fiction Masterclass", sales: 35, revenue: 3500 },
  { rank: 4, title: "1-on-1 Writing Consultation", sales: 22, revenue: 3300 },
  { rank: 5, title: "Echoes of the Volta", sales: 18, revenue: 1530 },
];

export default function CreatorStats() {
  return (
    <div className="p-4 bg-warm-white min-h-screen">
      <h1 className="text-lg font-manrope font-bold text-ink">
        Your Performance
      </h1>

      <div className="grid grid-cols-2 gap-3 mt-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-line rounded-[7px] p-4"
          >
            <p className="text-xs text-charcoal">{stat.label}</p>
            <p className="text-xl font-bold tabular-nums text-ink mt-1">
              {stat.value}
            </p>
            <div className="flex items-center gap-1 mt-1">
              {stat.positive ? (
                <TrendingUp className="w-3 h-3 text-success" />
              ) : (
                <TrendingDown className="w-3 h-3 text-red-karlabash" />
              )}
              <span
                className={`text-xs ${
                  stat.positive ? "text-success" : "text-red-karlabash"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-base font-manrope font-semibold mt-6 mb-3">
        Top Performing
      </h2>
      <div className="space-y-2">
        {topProducts.map((product) => (
          <div
            key={product.rank}
            className="bg-white border border-line rounded-[7px] p-3 flex items-center gap-3"
          >
            <div className="w-6 h-6 rounded-full bg-charcoal text-white text-xs font-bold flex items-center justify-center">
              {product.rank}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ink line-clamp-1">
                {product.title}
              </p>
              <p className="text-xs text-charcoal">
                {product.sales} sales
              </p>
            </div>
            <p className="text-sm font-bold tabular-nums text-ink ml-auto">
              GH₵ {product.revenue.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
