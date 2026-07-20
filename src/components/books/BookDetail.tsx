import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Heart } from "lucide-react";
import type { Book } from "../../data/mockData";

interface BookDetailProps {
  book: Book;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < Math.round(rating) ? "fill-gold text-gold" : "fill-line text-line"
          }
        />
      ))}
    </div>
  );
}

const FORMATS = ["ebook", "audiobook", "print"] as const;
const FORMAT_LABELS: Record<string, string> = {
  ebook: "eBook",
  audiobook: "Audiobook",
  print: "Print",
};

export default function BookDetail({ book }: BookDetailProps) {
  const [selectedFormat, setSelectedFormat] = useState<Book["format"]>(book.format);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="lg:grid lg:grid-cols-[1fr,1fr] lg:gap-8">
        <div>
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full max-w-sm rounded-[7px] bg-line"
          />
        </div>

        <div>
          <div className="flex gap-2 mt-4 lg:mt-0">
            {FORMATS.map((fmt) => (
              <button
                key={fmt}
                type="button"
                onClick={() => setSelectedFormat(fmt)}
                className={
                  selectedFormat === fmt
                    ? "px-4 py-1.5 rounded-full text-sm font-semibold bg-gold text-ink"
                    : "px-4 py-1.5 rounded-full text-sm font-semibold border border-line text-charcoal"
                }
              >
                {FORMAT_LABELS[fmt]}
              </button>
            ))}
          </div>

          <h1 className="text-xl font-manrope font-bold text-ink mt-3">
            {book.title}
          </h1>

          <Link
            to={`/authors/${book.authorId}`}
            className="text-sm text-red-karlabash mt-1 inline-block"
          >
            {book.author}
          </Link>

          <div className="flex items-center gap-2 mt-2">
            <StarRating rating={book.rating} />
            <span className="text-xs text-charcoal">
              {book.rating} ({book.reviewCount} reviews)
            </span>
          </div>

          <p className="text-2xl font-bold tabular-nums text-ink mt-3">
            GH₵ {book.price}
          </p>

          <p className="text-sm text-charcoal mt-4 leading-relaxed">
            {book.description}
          </p>

          <button
            type="button"
            className="w-full h-12 bg-red-karlabash text-white font-semibold rounded-[7px] text-sm mt-6 cursor-pointer"
          >
            Buy Now
          </button>

          <button
            type="button"
            className="w-full h-11 bg-gold text-ink font-semibold rounded-[7px] text-sm mt-3 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Heart className="w-4 h-4" />
            Show Love to Author
          </button>
        </div>
      </div>
    </div>
  );
}
