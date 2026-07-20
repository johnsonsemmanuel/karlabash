import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Heart,
  Shield,
  Zap,
  EyeOff,
  BookOpen,
  Lock,
  ThumbsUp,
} from "lucide-react";
import type { Book } from "../../data/mockData";
import { books } from "../../data/mockData";

interface BookDetailProps {
  book: Book;
}

const FORMATS = ["ebook", "audiobook", "print"] as const;
const FORMAT_LABELS: Record<string, string> = {
  ebook: "eBook",
  audiobook: "Audiobook",
  print: "Print",
};

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < Math.floor(rating)
              ? "fill-gold text-gold"
              : i < rating
                ? "fill-gold/50 text-gold"
                : "fill-line text-line"
          }
        />
      ))}
    </div>
  );
}

const SAMPLE_REVIEWS = [
  {
    name: "Kwaku Mensah",
    initials: "KM",
    date: "June 2026",
    rating: 5,
    text: "Absolutely brilliant. The writing drew me in from the first page and never let go. A must-read for anyone interested in West African literature.",
    helpful: 24,
  },
  {
    name: "Ama Osei",
    initials: "AO",
    date: "May 2026",
    rating: 4,
    text: "Beautiful storytelling with deep cultural roots. Some chapters felt a bit slow, but the payoff at the end was worth it. Highly recommended.",
    helpful: 18,
  },
  {
    name: "Kofi Asante",
    initials: "KA",
    date: "April 2026",
    rating: 5,
    text: "This book opened my eyes to perspectives I had never considered. The author has a gift for making history feel alive and immediate.",
    helpful: 12,
  },
];

const RATING_DISTRIBUTION = [
  { stars: 5, pct: 60, count: 140 },
  { stars: 4, pct: 25, count: 59 },
  { stars: 3, pct: 10, count: 23 },
  { stars: 2, pct: 3, count: 7 },
  { stars: 1, pct: 2, count: 5 },
];

export default function BookDetail({ book }: BookDetailProps) {
  const [selectedFormat, setSelectedFormat] = useState<Book["format"]>(
    book.format
  );
  const [descExpanded, setDescExpanded] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const relatedBooks = books
    .filter((b) => b.id !== book.id && b.category === book.category)
    .slice(0, 5);

  const previewChapterCount =
    book.previewChapters ?? Math.min(2, book.chapters?.length ?? 0);

  const handlePreviewChapterClick = (index: number) => {
    if (index < previewChapterCount) {
      previewRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* ── Section A: Hero ── */}
      <div className="grid grid-cols-1 md:grid-cols-[320px,1fr] gap-10">
        {/* Left: Cover */}
        <div>
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full rounded-[7px] bg-line"
          />
          <div className="flex items-center gap-3 mt-4">
            <span className="text-[10px] text-charcoal flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Secure purchase
            </span>
            <span className="text-[10px] text-charcoal flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Instant access
            </span>
            <span className="text-[10px] text-charcoal flex items-center gap-1">
              <EyeOff className="w-3 h-3" />
              No screenshots
            </span>
          </div>
        </div>

        {/* Right: Info */}
        <div>
          {/* Format pills */}
          <div className="flex gap-2">
            {FORMATS.map((fmt) => (
              <button
                key={fmt}
                type="button"
                onClick={() => setSelectedFormat(fmt)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer transition-colors ${
                  selectedFormat === fmt
                    ? "bg-ink text-white"
                    : "border border-line text-charcoal hover:border-charcoal/30"
                }`}
              >
                {FORMAT_LABELS[fmt]}
              </button>
            ))}
          </div>

          <h1 className="text-2xl md:text-3xl font-manrope font-extrabold text-ink mt-4 leading-tight">
            {book.title}
          </h1>

          <Link
            to={`/author/${book.authorId}`}
            className="text-sm text-red-karlabash font-medium mt-2 inline-block hover:underline"
          >
            {book.author}
          </Link>

          <div className="flex items-center gap-2 mt-3">
            <StarRating rating={book.rating} />
            <span className="text-sm font-bold tabular-nums text-ink">
              {book.rating}
            </span>
            <span className="text-sm text-charcoal">
              ({book.reviewCount} reviews)
            </span>
          </div>

          <p className="text-3xl font-manrope font-extrabold tabular-nums text-ink mt-4">
            GHS {book.price}
          </p>

          <div className="mt-4 max-w-lg">
            <p
              className={`text-sm text-charcoal leading-relaxed ${
                !descExpanded ? "line-clamp-3" : ""
              }`}
            >
              {book.description}
            </p>
            <button
              type="button"
              onClick={() => setDescExpanded(!descExpanded)}
              className="text-red-karlabash text-sm font-semibold mt-1 cursor-pointer"
            >
              {descExpanded ? "Show less" : "Read more"}
            </button>
          </div>

          {/* Action buttons */}
          <button
            type="button"
            className="w-full h-12 bg-red-karlabash text-white font-semibold rounded-[7px] text-sm mt-6 hover:bg-red-karlabash-dark transition-colors cursor-pointer"
          >
            Buy Now
          </button>
          <button
            type="button"
            className="w-full h-11 bg-gold text-ink font-semibold rounded-[7px] text-sm mt-3 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Heart className="w-4 h-4" />
            Show Love
          </button>
          <button
            type="button"
            className="w-full h-11 border border-line text-ink font-semibold rounded-[7px] text-sm mt-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-warm-white transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Read Preview
          </button>
        </div>
      </div>

      {/* ── Section B: Book Details grid ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {[
          { label: "Pages", value: String(book.pages) },
          { label: "Language", value: book.language },
          { label: "Publisher", value: book.publisher },
          { label: "Published Date", value: book.publishedDate },
          { label: "ISBN", value: book.isbn },
          {
            label: "Format",
            value: FORMAT_LABELS[book.format] ?? book.format,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white border border-line rounded-[7px] p-4"
          >
            <p className="text-xs text-charcoal uppercase tracking-wide">
              {item.label}
            </p>
            <p className="text-sm font-semibold text-ink mt-1">{item.value}</p>
          </div>
        ))}
      </div>

      {/* ── Section C: Table of Contents ── */}
      {book.chapters && book.chapters.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-manrope font-bold text-ink mb-4">
            Table of Contents
          </h2>
          <div className="bg-white border border-line rounded-[7px] overflow-hidden">
            {book.chapters.map((ch, i) => (
              <div
                key={i}
                className={`px-4 py-3 flex justify-between items-center border-b border-line last:border-b-0 ${
                  i < previewChapterCount
                    ? "cursor-pointer hover:bg-warm-white"
                    : ""
                }`}
                onClick={() => handlePreviewChapterClick(i)}
              >
                <div className="flex items-center">
                  <span className="text-xs text-charcoal font-semibold w-8">
                    {i + 1}.
                  </span>
                  <span className="text-sm text-ink">{ch.title}</span>
                </div>
                <div>
                  {i < previewChapterCount ? (
                    <span className="text-[10px] bg-gold/10 text-gold-dark px-2 py-0.5 rounded-full font-semibold">
                      Preview
                    </span>
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-charcoal/30" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Section D: Preview Section ── */}
      {book.chapters && book.chapters.length > 0 && (
        <div className="mt-10" ref={previewRef}>
          <h2 className="text-lg font-manrope font-bold text-ink mb-2">
            Preview
          </h2>
          <p className="text-sm text-charcoal mb-6">
            Read the first {previewChapterCount} chapters for free
          </p>

          {/* Preview chapters */}
          <div
            style={{ userSelect: "none", WebkitUserSelect: "none" }}
            onContextMenu={(e) => e.preventDefault()}
            className="relative"
          >
            {/* Watermark */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden z-10"
              aria-hidden="true"
            >
              <div
                className="absolute text-[10px] text-ink/[0.04] whitespace-nowrap select-none"
                style={{
                  transform: "rotate(-35deg)",
                  transformOrigin: "center center",
                  top: "30%",
                  left: "-10%",
                  width: "200%",
                }}
              >
                {Array.from({ length: 20 }).map((_, i) => (
                  <span key={i} className="mr-20">
                    PREVIEW &bull; Karlabash
                  </span>
                ))}
              </div>
            </div>

            {book.chapters.slice(0, previewChapterCount).map((ch, i) => (
              <div key={i}>
                <h3 className="text-lg font-manrope font-semibold text-ink mb-4">
                  {ch.title}
                </h3>
                <div className="text-ink text-base leading-[1.8] space-y-4">
                  {ch.content.split("\n\n").map((para, pi) => (
                    <p key={pi}>
                      {pi === 0 ? (
                        <>
                          <span className="text-4xl font-bold float-left mr-2 mt-1 text-red-karlabash leading-none">
                            {para.charAt(0)}
                          </span>
                          {para.slice(1)}
                        </>
                      ) : (
                        para
                      )}
                    </p>
                  ))}
                </div>
                {i < previewChapterCount - 1 && (
                  <hr className="border-t border-line my-8" />
                )}
              </div>
            ))}
          </div>

          {/* Blurred locked section */}
          {book.chapters.length > previewChapterCount && (
            <div className="relative mt-8">
              <div className="blur-sm opacity-50 pointer-events-none select-none">
                {book.chapters
                  .slice(previewChapterCount, previewChapterCount + 1)
                  .map((ch, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-manrope font-semibold text-ink mb-4">
                        {ch.title}
                      </h3>
                      <div className="text-ink text-base leading-[1.8] space-y-4">
                        {ch.content.split("\n\n").map((para, pi) => (
                          <p key={pi}>{para}</p>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="absolute inset-0 bg-warm-white/90 flex flex-col items-center justify-center z-20">
                <Lock className="w-8 h-8 text-charcoal" />
                <p className="text-sm text-ink font-semibold mt-3">
                  Purchase to continue reading
                </p>
                <p className="text-xs text-charcoal mt-1">
                  Unlock all {book.chapters.length} chapters for GHS {book.price}
                </p>
                <button
                  type="button"
                  className="mt-4 px-6 h-10 bg-red-karlabash text-white font-semibold rounded-[7px] text-sm cursor-pointer hover:bg-red-karlabash-dark transition-colors"
                >
                  Buy Now
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Section E: Reviews ── */}
      <div className="mt-10">
        <h2 className="text-lg font-manrope font-bold text-ink mb-6">
          Reader Reviews
        </h2>

        <div className="bg-warm-white border border-line rounded-[7px] p-5 flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-4xl font-manrope font-bold tabular-nums text-ink">
              {book.rating}
            </span>
            <div className="mt-1">
              <StarRating rating={book.rating} />
            </div>
            <span className="text-sm text-charcoal mt-1">
              {book.reviewCount} reviews
            </span>
          </div>
          <div className="flex-1 space-y-2">
            {RATING_DISTRIBUTION.map((row) => (
              <div key={row.stars} className="flex items-center gap-2">
                <span className="text-xs text-charcoal w-4 text-right">
                  {row.stars}
                </span>
                <div className="flex-1 bg-line/30 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gold h-2 rounded-full"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="text-xs text-charcoal w-8 text-right">
                  {row.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {SAMPLE_REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-white border border-line rounded-[7px] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-charcoal text-white text-xs flex items-center justify-center rounded-full font-semibold">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {review.name}
                  </p>
                  <p className="text-xs text-charcoal">{review.date}</p>
                </div>
              </div>
              <div className="mt-2">
                <StarRating rating={review.rating} size={12} />
              </div>
              <p className="text-sm text-charcoal leading-relaxed mt-2">
                {review.text}
              </p>
              <button
                type="button"
                className="text-xs text-charcoal flex items-center gap-1 mt-3 cursor-pointer hover:text-ink transition-colors"
              >
                <ThumbsUp className="w-3 h-3" />
                Helpful ({review.helpful})
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="w-full h-10 border border-line text-ink rounded-[7px] text-sm font-semibold mt-4 cursor-pointer hover:bg-warm-white transition-colors"
        >
          Write a Review
        </button>
      </div>

      {/* ── Section F: Related Books ── */}
      {relatedBooks.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-manrope font-bold text-ink mb-4">
            You might also like
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {relatedBooks.map((rb) => (
              <Link
                key={rb.id}
                to={`/books/${rb.id}`}
                className="w-36 flex-shrink-0 block"
              >
                <img
                  src={rb.coverUrl}
                  alt={rb.title}
                  className="w-full aspect-[2/3] object-cover rounded-[7px] bg-line"
                />
                <p className="text-xs font-semibold text-ink mt-2 line-clamp-2">
                  {rb.title}
                </p>
                <p className="text-[10px] text-charcoal mt-0.5">{rb.author}</p>
                <p className="text-xs font-bold text-ink tabular-nums mt-1">
                  GHS {rb.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
