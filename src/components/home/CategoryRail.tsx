import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Book, Event, Webinar } from "../../data/mockData";

interface CategoryRailProps {
  title: string;
  items: (Book | Event | Webinar)[];
  type: "books" | "events" | "webinars";
  seeAllLink: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={
            i < Math.round(rating) ? "fill-gold text-gold" : "fill-line text-line"
          }
        />
      ))}
    </div>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <Link to={`/books/${book.id}`} className="w-40 flex-shrink-0 group">
      <div className="w-full h-52 object-cover rounded-[7px] bg-line overflow-hidden">
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <p className="text-sm font-semibold text-ink mt-2 line-clamp-2">
        {book.title}
      </p>
      <p className="text-xs text-charcoal mt-0.5">{book.author}</p>
      <p className="text-sm font-bold text-ink tabular-nums mt-1">
        GH₵ {book.price}
      </p>
      <StarRating rating={book.rating} />
    </Link>
  );
}

function EventCard({ event }: { event: Event }) {
  const dateObj = new Date(event.date);
  const month = dateObj.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = dateObj.getDate();

  return (
    <Link to={`/events/${event.id}`} className="w-56 flex-shrink-0 group">
      <div className="relative w-full h-32 rounded-[7px] bg-line overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-2 left-2 bg-red-karlabash text-white text-xs font-bold px-2 py-1 rounded-[4px]">
          {month} {day}
        </div>
      </div>
      <p className="text-sm font-semibold text-ink mt-2 line-clamp-1">
        {event.title}
      </p>
      <p className="text-xs text-charcoal">{event.venue}</p>
      <p className="text-sm font-bold text-ink tabular-nums mt-1">
        GH₵ {event.price}
      </p>
    </Link>
  );
}

function WebinarCard({ webinar }: { webinar: Webinar }) {
  const dateObj = new Date(webinar.date);
  const formatted = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <Link to={`/webinars/${webinar.id}`} className="w-52 flex-shrink-0 group">
      <div className="relative w-full h-32 rounded-[7px] bg-line overflow-hidden">
        <img
          src={webinar.hostAvatar}
          alt={webinar.host}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        {webinar.isLive && (
          <span className="absolute top-2 left-2 bg-red-karlabash text-white text-xs px-2 py-0.5 rounded-[4px] font-semibold">
            LIVE
          </span>
        )}
      </div>
      <p className="text-sm font-semibold text-ink mt-2 line-clamp-2">
        {webinar.title}
      </p>
      <p className="text-xs text-charcoal">{webinar.host}</p>
      <p className="text-xs text-charcoal mt-0.5">{formatted}</p>
      <p className="text-sm font-bold text-ink tabular-nums mt-1">
        {webinar.isFree ? "Free" : `GH₵ ${webinar.price}`}
      </p>
    </Link>
  );
}

export default function CategoryRail({
  title,
  items,
  type,
  seeAllLink,
}: CategoryRailProps) {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-manrope font-bold text-ink">{title}</h2>
        <Link
          to={seeAllLink}
          className="text-sm text-red-karlabash font-medium hover:underline"
        >
          See all
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {type === "books" &&
          items.map((item) => (
            <BookCard key={item.id} book={item as Book} />
          ))}
        {type === "events" &&
          items.map((item) => (
            <EventCard key={item.id} event={item as Event} />
          ))}
        {type === "webinars" &&
          items.map((item) => (
            <WebinarCard key={item.id} webinar={item as Webinar} />
          ))}
      </div>
    </section>
  );
}
