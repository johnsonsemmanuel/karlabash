import { useState } from "react";

type Tab = "Books" | "Tickets" | "Webinars" | "Bookings";

const tabs: Tab[] = ["Books", "Tickets", "Webinars", "Bookings"];

const purchases: Record<
  Tab,
  { id: string; title: string; date: string; action: string }[]
> = {
  Books: [
    { id: "p_1", title: "Echoes of the Volta", date: "Jul 15, 2026", action: "Read" },
    { id: "p_2", title: "Digital Gold: Building in West Africa", date: "Jul 10, 2026", action: "Read" },
    { id: "p_3", title: "Jollof Rice and Other Lies", date: "Jun 28, 2026", action: "Read" },
    { id: "p_4", title: "Building the Future: Tech in Ghana", date: "Jun 14, 2026", action: "Read" },
  ],
  Tickets: [
    { id: "t_1", title: "VIP Ticket - Afrofuture Fest 2026", date: "Jul 18, 2026", action: "View Ticket" },
    { id: "t_2", title: "WriteShop: Fiction Masterclass", date: "Jul 16, 2026", action: "View Ticket" },
  ],
  Webinars: [
    { id: "w_1", title: "Building a Personal Brand as a Creative", date: "Jul 20, 2026", action: "Join" },
    { id: "w_2", title: "How to Self-Publish Your First Book in Ghana", date: "Jul 8, 2026", action: "Join" },
  ],
  Bookings: [
    { id: "b_1", title: "1-on-1 Writing Consultation", date: "Jul 25, 2026", action: "Join" },
    { id: "b_2", title: "Book Cover Design", date: "Jul 28, 2026", action: "Join" },
  ],
};

export default function BuyerLibrary() {
  const [activeTab, setActiveTab] = useState<Tab>("Books");

  return (
    <div className="p-4 bg-warm-white min-h-screen">
      <h1 className="text-lg font-manrope font-bold text-ink mb-4">
        My Purchases
      </h1>

      <div className="flex gap-0 border-b border-line mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-3 text-sm font-semibold transition ${
              activeTab === tab
                ? "text-red-karlabash border-b-2 border-red-karlabash"
                : "text-charcoal"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {purchases[activeTab].map((item) => (
          <div
            key={item.id}
            className="bg-white border border-line rounded-[7px] p-3"
          >
            <div className="aspect-video bg-line rounded-[7px] mb-2" />
            <p className="text-sm font-semibold text-ink line-clamp-1">
              {item.title}
            </p>
            <p className="text-xs text-charcoal">{item.date}</p>
            <button className="text-xs font-semibold text-red-karlabash mt-2">
              {item.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
