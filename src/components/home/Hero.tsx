import { Link } from "react-router-dom";

const bookCovers = [
  { title: "Echoes of the Volta", bg: "bg-[#2A2A2A]" },
  { title: "Digital Gold", bg: "bg-charcoal" },
  { title: "Sankofa & Machine", bg: "bg-[#2A2A2A]" },
  { title: "Accra After Dark", bg: "bg-charcoal" },
];

export default function Hero() {
  return (
    <section className="bg-ink py-24 px-6 max-lg:py-14 max-lg:px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center max-lg:grid-cols-1 max-lg:gap-8">
        <div>
          <span className="bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
            Ghana&apos;s Creative Marketplace
          </span>

          <h1 className="text-4xl lg:text-5xl max-lg:text-3xl font-manrope font-extrabold text-white leading-tight">
            Discover.
            <br />
            Read.
            <br />
            Support.
          </h1>

          <p className="text-lg max-lg:text-base text-white/60 mt-4 max-w-md leading-relaxed">
            From Accra to Kumasi. Buy books, attend events, join webinars, and
            support the creators shaping Ghana&apos;s story.
          </p>

          <div className="mt-8 max-lg:mt-6 flex max-lg:flex-col max-lg:gap-3 gap-3">
            <Link
              to="/books"
              className="h-12 px-8 bg-red-karlabash text-white font-semibold rounded-[7px] text-sm hover:bg-red-karlabash-dark transition-colors flex items-center justify-center"
            >
              Browse Books
            </Link>
            <Link
              to="/events"
              className="h-12 px-8 border border-white/20 text-white font-semibold rounded-[7px] text-sm hover:bg-white/5 transition-colors flex items-center justify-center"
            >
              Explore Events
            </Link>
          </div>
        </div>

        <div className="relative max-lg:hidden">
          <div className="grid grid-cols-2 gap-3 -rotate-2">
            {bookCovers.map((book, i) => (
              <div
                key={i}
                className={`${book.bg} rounded-[7px] aspect-[2/3] flex items-end p-3`}
              >
                <span className="text-white/50 text-[10px] font-semibold uppercase tracking-wider leading-tight">
                  {book.title}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute -top-3 -right-3 bg-gold text-ink text-xs font-bold px-3 py-1.5 rounded-[7px]">
            2,400+ Books
          </div>
          <div className="absolute -bottom-3 -left-3 bg-red-karlabash text-white text-xs font-bold px-3 py-1.5 rounded-[7px]">
            500+ Events
          </div>
        </div>
      </div>
    </section>
  );
}
