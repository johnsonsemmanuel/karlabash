import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import type { Book, Event } from "@/data/mockData";

interface FeaturedSectionProps {
  books: Book[];
  events: Event[];
}

function formatEventDate(dateStr: string) {
  const d = new Date(dateStr);
  const day = d.getDate();
  const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  return { day, month };
}

export default function FeaturedSection({ books, events }: FeaturedSectionProps) {
  const displayBooks = books.slice(0, 5);
  const displayEvents = events.slice(0, 3);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-manrope font-extrabold text-ink">
            Trending Books
          </h2>
          <Link
            to="/books"
            className="text-sm text-red-karlabash font-semibold hover:underline"
          >
            See all
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {displayBooks.map((book) => (
            <Link
              key={book.id}
              to={`/books/${book.id}`}
              className="bg-white border border-line rounded-[7px] overflow-hidden hover:border-charcoal/30 transition-colors"
            >
              <div className="w-full aspect-[2/3] bg-line">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-ink line-clamp-2">
                  {book.title}
                </p>
                <p className="text-xs text-charcoal mt-1">{book.author}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-bold tabular-nums text-ink">
                    GHS {book.price}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span className="text-xs text-charcoal">{book.rating}</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-manrope font-extrabold text-ink">
              Upcoming Events
            </h2>
            <Link
              to="/events"
              className="text-sm text-red-karlabash font-semibold hover:underline"
            >
              See all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayEvents.map((event) => {
              const { day, month } = formatEventDate(event.date);
              return (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className="bg-white border border-line rounded-[7px] overflow-hidden hover:border-charcoal/30 transition"
                >
                  <div className="h-40 bg-charcoal relative">
                    <div className="absolute top-3 left-3 bg-red-karlabash text-white px-3 py-1.5 rounded-[7px] leading-none">
                      <span className="text-lg font-bold block">{day}</span>
                      <span className="text-[10px] uppercase">{month}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-base font-semibold text-ink line-clamp-1">
                      {event.title}
                    </p>
                    <p className="text-sm text-charcoal mt-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="line-clamp-1">{event.venue}</span>
                    </p>
                    <p className="text-base font-bold tabular-nums text-ink mt-2">
                      GHS {event.price}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
