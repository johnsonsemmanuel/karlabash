import { useMemo } from "react";
import { Lock, Star } from "lucide-react";

interface BookPreviewProps {
  book: {
    id: string;
    title: string;
    author: string;
    chapters: { title: string; content: string }[];
    previewChapters: number;
    price: number;
  };
}

export default function BookPreview({ book }: BookPreviewProps) {
  const visibleChapters = book.chapters.slice(0, book.previewChapters);
  const lockedChapters = book.chapters.slice(book.previewChapters);
  const remaining = lockedChapters.length;

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const watermarkLines = useMemo(() => {
    const lines: string[] = [];
    for (let i = 0; i < 30; i++) {
      lines.push("PREVIEW  •  Karlabash");
    }
    return lines;
  }, []);

  return (
    <div
      className="relative"
      onContextMenu={handleContextMenu}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Watermark overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden select-none"
        aria-hidden="true"
      >
        {watermarkLines.map((line, i) => (
          <div
            key={i}
            className="absolute text-xs whitespace-nowrap"
            style={{
              top: `${(i * 6) % 130 - 15}%`,
              left: "-10%",
              transform: "rotate(-45deg)",
              opacity: 0.03,
              color: "#141414",
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Visible preview content */}
      <div
        className="relative space-y-8 select-none"
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        {visibleChapters.map((chapter, index) => (
          <section key={index}>
            <h3 className="mb-4 font-manrope text-lg font-semibold text-ink">
              {chapter.title}
            </h3>
            <div
              className="space-y-4 text-ink"
              style={{ fontSize: "16px", lineHeight: 1.8 }}
            >
              {chapter.content.split("\n\n").map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>
            {index < visibleChapters.length - 1 && (
              <hr className="mt-8 border-line" />
            )}
          </section>
        ))}
      </div>

      {/* Locked content section */}
      {remaining > 0 && (
        <div className="relative mt-8">
          {/* Fade overlay */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-32 bg-gradient-to-b from-transparent to-warm-white" />

          {/* Blurred locked chapters */}
          <div className="relative overflow-hidden rounded-[7px] border border-line bg-white p-6 blur-sm">
            <div className="space-y-6">
              {lockedChapters.map((chapter, index) => (
                <div key={index}>
                  <h3 className="mb-3 font-manrope text-lg font-semibold text-ink">
                    {chapter.title}
                  </h3>
                  <div className="space-y-3 text-ink opacity-50">
                    {chapter.content
                      .split("\n\n")
                      .slice(0, 2)
                      .map((paragraph, pIdx) => (
                        <p key={pIdx} className="text-base leading-[1.8]">
                          {paragraph}
                        </p>
                      ))}
                    {chapter.content.split("\n\n").length > 2 && (
                      <p className="text-sm text-charcoal">...</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Purchase gate */}
          <div className="relative z-30 -mt-16 flex flex-col items-center px-6 pt-20 pb-8 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-karlabash/10">
              <Lock size={20} className="text-red-karlabash" />
            </div>

            <h3 className="mb-1 font-manrope text-lg font-bold text-ink">
              Purchase to continue reading
            </h3>
            <p className="mb-6 text-sm text-charcoal">
              Unlock full book including {remaining} more{" "}
              {remaining === 1 ? "chapter" : "chapters"}
            </p>

            <button className="flex w-full max-w-sm items-center justify-center gap-2 rounded-[7px] bg-red-karlabash px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Buy Now for GHS {book.price.toFixed(2)}
            </button>

            <div className="mt-4 flex items-center gap-1 text-xs text-charcoal">
              <Star size={12} className="fill-gold text-gold" />
              <span>Instant access after purchase</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
