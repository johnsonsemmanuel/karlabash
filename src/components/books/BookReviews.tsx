import { Star, ThumbsUp, PenLine } from "lucide-react";

interface Review {
  id: string;
  reviewerName: string;
  reviewerAvatar: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
}

interface BookReviewsProps {
  reviews: Review[];
  totalReviews: number;
  averageRating: number;
  ratingDistribution: {
    stars: number;
    count: number;
    percentage: number;
  }[];
}

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= rating
              ? "fill-gold text-gold"
              : "fill-none text-line"
          }
        />
      ))}
    </div>
  );
}

function RatingDistributionBar({
  stars,
  count,
  percentage,
}: {
  stars: number;
  count: number;
  percentage: number;
}) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-3 text-right tabular-nums text-charcoal">
        {stars}
      </span>
      <Star size={10} className="fill-gold text-gold" />
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-line/30">
        <div
          className="h-full rounded-full bg-gold transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-6 text-right tabular-nums text-charcoal">
        {count}
      </span>
    </div>
  );
}

export default function BookReviews({
  reviews,
  totalReviews,
  averageRating,
  ratingDistribution,
}: BookReviewsProps) {
  return (
    <section className="space-y-4">
      <h2 className="font-manrope text-lg font-bold text-ink">
        Reader Reviews
      </h2>

      {/* Rating summary */}
      <div className="flex flex-col gap-4 rounded-[7px] border border-line bg-warm-white p-4 sm:flex-row sm:items-center">
        {/* Left: average rating */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="text-4xl font-bold tabular-nums text-ink">
            {averageRating.toFixed(1)}
          </span>
          <StarRating rating={Math.round(averageRating)} size={16} />
          <span className="text-xs text-charcoal">
            {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
          </span>
        </div>

        {/* Divider */}
        <div className="hidden h-16 w-px bg-line sm:block" />
        <div className="h-px w-full bg-line sm:hidden" />

        {/* Right: distribution bars */}
        <div className="flex flex-1 flex-col gap-1.5">
          {ratingDistribution.map((dist) => (
            <RatingDistributionBar
              key={dist.stars}
              stars={dist.stars}
              count={dist.count}
              percentage={dist.percentage}
            />
          ))}
        </div>
      </div>

      {/* Review cards */}
      <div className="space-y-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-[7px] border border-line bg-white p-4"
          >
            {/* Header */}
            <div className="mb-2 flex items-center gap-3">
              <img
                src={review.reviewerAvatar}
                alt={review.reviewerName}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink">
                  {review.reviewerName}
                </p>
                <p className="text-xs text-charcoal">{review.date}</p>
              </div>
              <StarRating rating={review.rating} />
            </div>

            {/* Content */}
            <p className="text-sm leading-relaxed text-charcoal">
              {review.content}
            </p>

            {/* Footer */}
            <div className="mt-3 flex items-center">
              <button className="flex items-center gap-1.5 text-xs text-charcoal transition-colors hover:text-ink">
                <ThumbsUp size={12} />
                <span>
                  Helpful{review.helpful > 0 ? ` (${review.helpful})` : ""}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Write a review */}
      <button className="flex h-10 w-full items-center justify-center gap-2 rounded-[7px] border border-line bg-white text-sm font-semibold text-ink transition-colors hover:bg-warm-white">
        <PenLine size={14} />
        Write a Review
      </button>
    </section>
  );
}
