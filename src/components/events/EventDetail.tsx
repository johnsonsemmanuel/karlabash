import { useState } from "react";
import { Calendar, MapPin, Minus, Plus } from "lucide-react";
import type { Event } from "../../data/mockData";

interface EventDetailProps {
  event: Event;
}

export default function EventDetail({ event }: EventDetailProps) {
  const [selectedTier, setSelectedTier] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const dateObj = new Date(event.date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = dateObj.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  const tier = event.ticketTiers[selectedTier];
  const total = tier ? tier.price * quantity : 0;

  return (
    <div>
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 md:h-64 object-cover bg-line"
      />

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-red-karlabash">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate} · {formattedTime}</span>
        </div>

        <h1 className="text-xl font-manrope font-bold text-ink mt-2">
          {event.title}
        </h1>

        <p className="text-sm text-charcoal flex items-center gap-1 mt-1">
          <MapPin className="w-4 h-4 shrink-0" />
          {event.venue}
        </p>

        <p className="text-sm text-charcoal mt-1">
          Organized by {event.organizer}
        </p>

        <div className="border-t border-line my-4" />

        <h2 className="text-base font-manrope font-bold">Select Tickets</h2>

        <div className="mt-3 space-y-3">
          {event.ticketTiers.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => {
                setSelectedTier(i);
                setQuantity(1);
              }}
              className={
                selectedTier === i
                  ? "w-full bg-white border border-red-karlabash bg-red-karlabash/5 rounded-[7px] p-4 text-left cursor-pointer"
                  : "w-full bg-white border border-line rounded-[7px] p-4 text-left cursor-pointer"
              }
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-charcoal mt-0.5">
                    {t.available} available
                  </p>
                </div>
                <p className="text-base font-bold tabular-nums text-ink">
                  GH₵ {t.price}
                </p>
              </div>

              {selectedTier === i && (
                <div className="flex items-center justify-end gap-3 mt-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuantity(Math.max(1, quantity - 1));
                    }}
                    className="w-8 h-8 border border-line rounded-[7px] flex items-center justify-center text-charcoal cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold tabular-nums w-6 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuantity(quantity + 1);
                    }}
                    className="w-8 h-8 border border-line rounded-[7px] flex items-center justify-center text-charcoal cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-line p-4">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <p className="text-lg font-bold tabular-nums text-ink">
            GH₵ {total}
          </p>
          <button
            type="button"
            className="flex-1 h-11 bg-red-karlabash text-white font-semibold rounded-[7px] text-sm cursor-pointer"
          >
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
}
