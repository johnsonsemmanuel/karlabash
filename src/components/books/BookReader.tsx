import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useContentProtection } from "@/hooks/useContentProtection";
import Watermark from "@/components/ui/Watermark";

interface BookReaderProps {
  book: {
    id: string;
    title: string;
    author: string;
    coverUrl: string;
    chapters: { title: string; content: string }[];
  };
}

export default function BookReader({ book }: BookReaderProps) {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const contentRef = useRef<HTMLDivElement>(null);

  const { containerRef, protectedStyle } = useContentProtection({
    enabled: true,
  });

  const totalChapters = book.chapters.length;
  const chapter = book.chapters[currentChapter];

  const goToChapter = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalChapters) {
        setCurrentChapter(index);
        setSidebarOpen(false);
        if (contentRef.current) {
          contentRef.current.scrollTop = 0;
        }
      }
    },
    [totalChapters]
  );

  const increaseFontSize = useCallback(() => {
    setFontSize((prev) => Math.min(prev + 1, 22));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize((prev) => Math.max(prev - 1, 14));
  }, []);

  useEffect(() => {
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        e.preventDefault();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "u") {
        e.preventDefault();
      }
      if (e.key === "F12") {
        e.preventDefault();
      }
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        (e.key === "I" || e.key === "J" || e.key === "C")
      ) {
        e.preventDefault();
      }
      if (e.key === "PrintScreen") {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  const paragraphs = chapter?.content.split("\n\n") ?? [];
  const firstParagraph = paragraphs[0] ?? "";
  const restParagraphs = paragraphs.slice(1);

  return (
    <div
      className="fixed inset-0 flex bg-white text-ink"
      onDragStart={(e) => e.preventDefault()}
    >
      <Watermark text="PREVIEW • Karlabash" />

      {/* ── Mobile top bar ── */}
      <div className="fixed top-0 left-0 right-0 z-30 flex h-12 items-center border-b border-line bg-white px-4 md:hidden">
        <Link
          to={`/books/${book.id}`}
          className="mr-3 text-ink"
          aria-label="Back to book"
        >
          <ArrowLeft size={20} />
        </Link>
        <span className="flex-1 truncate text-sm font-semibold text-ink">
          {book.title}
        </span>
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-ink cursor-pointer"
          aria-label="Open chapter menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* ── Sidebar overlay (mobile) ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        ref={containerRef}
        className={`fixed top-0 left-0 z-40 flex h-full w-64 flex-col border-r border-line bg-white transition-transform duration-200 md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar header */}
        <div className="px-4 pt-4 pb-3 border-b border-line">
          <p className="text-sm font-manrope font-bold text-ink leading-snug">
            {book.title}
          </p>
          <p className="text-xs text-charcoal mt-1">{book.author}</p>
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-3 right-3 text-charcoal md:hidden cursor-pointer"
            aria-label="Close sidebar"
          >
            <X size={16} />
          </button>
        </div>

        {/* Chapter list */}
        <nav className="flex-1 overflow-y-auto py-2">
          {book.chapters.map((ch, index) => (
            <button
              key={index}
              onClick={() => goToChapter(index)}
              className={`w-full px-4 py-3 text-left text-sm cursor-pointer border-l-2 transition-colors ${
                index === currentChapter
                  ? "bg-red-karlabash/5 text-red-karlabash border-red-karlabash font-semibold"
                  : "text-charcoal border-transparent hover:bg-warm-white"
              }`}
            >
              <span className="mr-2 font-semibold">{index + 1}.</span>
              {ch.title}
            </button>
          ))}
        </nav>

        {/* Reading progress */}
        <div className="border-t border-line px-4 py-3">
          <p className="text-xs text-charcoal mb-1.5">
            Chapter {currentChapter + 1} of {totalChapters}
          </p>
          <div className="h-1 w-full rounded-full bg-line/30 overflow-hidden">
            <div
              className="h-full rounded-full bg-red-karlabash transition-all duration-300"
              style={{
                width: `${totalChapters > 0 ? ((currentChapter + 1) / totalChapters) * 100 : 0}%`,
              }}
            />
          </div>
        </div>

        {/* Font size controls (desktop) */}
        <div className="hidden md:flex items-center justify-center gap-3 border-t border-line px-4 py-3">
          <button
            onClick={decreaseFontSize}
            disabled={fontSize <= 14}
            aria-label="Decrease font size"
            className="flex h-7 w-7 items-center justify-center rounded-[7px] border border-line text-charcoal cursor-pointer hover:bg-warm-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <Minus size={14} />
          </button>
          <span className="text-xs tabular-nums text-charcoal min-w-[24px] text-center">
            {fontSize}px
          </span>
          <button
            onClick={increaseFontSize}
            disabled={fontSize >= 22}
            aria-label="Increase font size"
            className="flex h-7 w-7 items-center justify-center rounded-[7px] border border-line text-charcoal cursor-pointer hover:bg-warm-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
      </aside>

      {/* ── Main reading area ── */}
      <div className="relative flex flex-1 flex-col">
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto px-6 md:px-12 py-12 mt-12 md:mt-0 pb-20 md:pb-12"
        >
          <article
            className="mx-auto max-w-2xl"
            style={protectedStyle}
          >
            <h1 className="mb-8 font-manrope text-2xl font-bold text-ink">
              {chapter?.title}
            </h1>

            <div
              className="text-ink space-y-5"
              style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
            >
              {firstParagraph && (
                <p>
                  <span className="mr-2 mt-1 float-left text-5xl font-bold leading-none text-red-karlabash">
                    {firstParagraph.charAt(0)}
                  </span>
                  {firstParagraph.slice(1)}
                </p>
              )}

              {restParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </article>
        </div>

        {/* ── Bottom bar (mobile) ── */}
        <div className="fixed bottom-0 left-0 right-0 z-30 flex h-12 items-center justify-between border-t border-line bg-white px-4 md:px-8 md:static md:h-auto md:border-t-0 md:pb-4 md:pt-4">
          <button
            onClick={() => goToChapter(currentChapter - 1)}
            disabled={currentChapter === 0}
            className="flex items-center gap-1 text-sm text-charcoal transition-colors hover:text-ink disabled:opacity-30 disabled:hover:text-charcoal cursor-pointer"
          >
            <ChevronLeft size={16} />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={decreaseFontSize}
              disabled={fontSize <= 14}
              aria-label="Decrease font size"
              className="md:hidden flex h-7 w-7 items-center justify-center rounded-[7px] border border-line text-charcoal cursor-pointer hover:bg-warm-white disabled:opacity-30 transition-colors"
            >
              <Minus size={14} />
            </button>
            <span className="text-xs tabular-nums text-charcoal">
              Ch. {currentChapter + 1} of {totalChapters}
            </span>
            <button
              onClick={increaseFontSize}
              disabled={fontSize >= 22}
              aria-label="Increase font size"
              className="md:hidden flex h-7 w-7 items-center justify-center rounded-[7px] border border-line text-charcoal cursor-pointer hover:bg-warm-white disabled:opacity-30 transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>

          <button
            onClick={() => goToChapter(currentChapter + 1)}
            disabled={currentChapter === totalChapters - 1}
            className="flex items-center gap-1 text-sm text-charcoal transition-colors hover:text-ink disabled:opacity-30 disabled:hover:text-charcoal cursor-pointer"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
