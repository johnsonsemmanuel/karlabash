import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Book } from "../../data/mockData";

interface BookCardProps {
  book: Book;
}

function StarRating({ rating, size = 11 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < Math.round(rating) ? "fill-gold text-gold" : "fill-line text-line"
          }
        />
      ))}
    </div>
  );
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link
      to={`/books/${book.id}`}
      className="bg-white border border-line rounded-[7px] overflow-hidden hover:border-charcoal/30 transition-colors block"
    >
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-full aspect-[2/3] object-cover bg-line"
      />
      <div className="p-3">
        <span className="inline-block text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-[4px] bg-charcoal text-white mb-1.5">
          {book.format}
        </span>
        <p className="text-sm font-semibold text-ink line-clamp-2">
          {book.title}
        </p>
        <p className="text-xs text-charcoal mt-1">{book.author}</p>
        <p className="text-sm font-bold text-ink tabular-nums mt-2">
          GH₵ {book.price}
        </p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <StarRating rating={book.rating} />
          <span className="text-xs text-charcoal">({book.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}
