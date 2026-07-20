import { useState } from "react";
import type { Book } from "../../data/mockData";
import BookCard from "./BookCard";

interface BookCatalogProps {
  books: Book[];
}

const CATEGORIES = ["All", "Fiction", "Non-Fiction", "Poetry", "Business"] as const;

type SortOption = "newest" | "price-asc" | "price-desc" | "rating";

export default function BookCatalog({ books }: BookCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const filtered = books.filter((book) => {
    if (activeCategory === "All") return true;
    return book.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div>
      <div className="flex gap-2 mb-4 flex-wrap items-center">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={
              activeCategory === cat
                ? "px-4 py-1.5 rounded-full text-sm font-semibold bg-red-karlabash text-white"
                : "px-4 py-1.5 rounded-full text-sm font-semibold border border-line text-charcoal"
            }
          >
            {cat}
          </button>
        ))}

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="ml-auto h-9 px-3 border border-line rounded-[7px] text-sm text-ink bg-white"
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {sorted.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
