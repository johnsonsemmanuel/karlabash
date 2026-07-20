import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-red-karlabash py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-manrope font-bold text-white mb-3">
          Discover Ghana&apos;s best books, events, and creators
        </h1>
        <p className="text-sm text-white/80 mb-6 max-w-lg mx-auto">
          From Accra to Kumasi. Read, attend, support.
        </p>
        <Link
          to="/books"
          className="bg-gold text-ink font-semibold px-8 py-3 rounded-[7px] text-sm hover:bg-gold-dark transition-colors inline-block"
        >
          Browse the Marketplace
        </Link>
      </div>
    </section>
  );
}
