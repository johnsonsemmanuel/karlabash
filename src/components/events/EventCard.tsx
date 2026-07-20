import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import type { Event } from "../../data/mockData";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const dateObj = new Date(event.date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("en-US", { month: "short" }).toUpperCase();

  const seatsRemaining = event.totalSeats - event.seatsSold;
  const seatsPercent = (seatsRemaining / event.totalSeats) * 100;
  const isLowSeats = seatsPercent < 20;

  return (
    <Link
      to={`/events/${event.id}`}
      className="bg-white border border-line rounded-[7px] overflow-hidden block"
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-36 object-cover bg-line"
        />
        <div className="absolute top-2 left-2 bg-red-karlabash text-white px-2 py-1 rounded-[4px] text-center">
          <div className="text-lg font-bold leading-none">{day}</div>
          <div className="text-[10px] uppercase">{month}</div>
        </div>
        {isLowSeats && (
          <span className="absolute top-2 right-2 bg-gold text-ink text-[10px] font-semibold px-2 py-0.5 rounded-[4px]">
            {seatsRemaining} left
          </span>
        )}
      </div>

      <div className="p-3">
        <p className="text-sm font-semibold text-ink line-clamp-1">
          {event.title}
        </p>
        <p className="text-xs text-charcoal mt-1">{event.organizer}</p>
        <p className="text-xs text-charcoal flex items-center gap-1 mt-1">
          <MapPin className="w-3 h-3 shrink-0" />
          <span className="truncate">{event.venue}</span>
        </p>
        <p className="text-sm font-bold tabular-nums text-ink mt-2">
          GH₵ {event.price}
        </p>
      </div>
    </Link>
  );
}
