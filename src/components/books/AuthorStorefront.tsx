import { useState } from "react";
import { CheckCircle } from "lucide-react";
import type { Creator } from "../../data/mockData";

interface AuthorStorefrontProps {
  creator: Creator;
}

const TABS = ["Books", "Events", "Webinars", "About"] as const;

export default function AuthorStorefront({ creator }: AuthorStorefrontProps) {
  const [activeTab, setActiveTab] = useState<string>("Books");

  return (
    <div>
      <div className="bg-ink py-8 px-4">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="w-16 h-16 rounded-full border-2 border-white object-cover shrink-0"
          />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg font-manrope font-bold text-white truncate">
                {creator.name}
              </h1>
              {creator.verified && (
                <span className="text-gold inline-flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                </span>
              )}
            </div>
            <p className="text-sm text-white/70 mt-0.5 line-clamp-1">
              {creator.bio}
            </p>
            <p className="text-xs text-white/50 tabular-nums mt-1">
              {creator.followerCount.toLocaleString()} followers
            </p>
          </div>
          <button
            type="button"
            className="ml-auto h-9 px-5 bg-red-karlabash text-white text-sm font-semibold rounded-[7px] shrink-0 cursor-pointer"
          >
            Follow
          </button>
        </div>
      </div>

      <div className="flex border-b border-line">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={
              activeTab === tab
                ? "px-5 py-3 text-sm font-semibold text-red-karlabash border-b-2 border-red-karlabash"
                : "px-5 py-3 text-sm font-semibold text-charcoal"
            }
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4">
        {activeTab === "About" && (
          <p className="text-sm text-charcoal leading-relaxed">{creator.bio}</p>
        )}
      </div>
    </div>
  );
}
