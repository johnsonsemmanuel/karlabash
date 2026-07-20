import type { Creator } from "../../data/mockData";

interface FeaturedCreatorsProps {
  creators: Creator[];
}

export default function FeaturedCreators({ creators }: FeaturedCreatorsProps) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-manrope font-bold text-ink mb-3">
        Featured Creators
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {creators.map((creator) => (
          <div
            key={creator.id}
            className="w-36 flex-shrink-0 text-center p-3 bg-white border border-line rounded-[7px]"
          >
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-14 h-14 rounded-full mx-auto border-2 border-white object-cover"
            />
            <p className="text-sm font-semibold text-ink mt-2 line-clamp-1">
              {creator.name}
            </p>
            <p className="text-xs text-charcoal capitalize">
              {creator.category}
            </p>
            <p className="text-xs text-charcoal tabular-nums">
              {creator.followerCount.toLocaleString()} followers
            </p>
            <button className="mt-2 w-full h-8 text-xs font-semibold bg-red-karlabash text-white rounded-[7px] hover:bg-red-karlabash-dark transition-colors">
              Follow
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
