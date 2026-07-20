import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-ink py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-manrope font-extrabold text-white">
          Ready to start?
        </h2>
        <p className="text-sm text-white/60 mt-3">
          Join thousands of readers and creators on Karlabash.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            to="/signup"
            className="h-12 px-8 bg-red-karlabash text-white font-semibold rounded-[7px] text-sm flex items-center justify-center"
          >
            Create Account
          </Link>
          <Link
            to="/books"
            className="h-12 px-8 border border-white/20 text-white font-semibold rounded-[7px] text-sm hover:bg-white/5 transition-colors flex items-center justify-center"
          >
            Browse Books
          </Link>
        </div>
      </div>
    </section>
  );
}
