import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

export default function LoginForm() {
  const [method, setMethod] = useState<"phone" | "email">("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-full max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-manrope font-bold text-ink mb-1">
        Welcome back
      </h1>
      <p className="text-sm text-charcoal mb-8">
        Log in to your Karlabash account
      </p>

      <div className="flex gap-6 mb-6 border-b border-line">
        <button
          type="button"
          onClick={() => setMethod("phone")}
          className={`pb-2 text-sm font-medium transition-colors ${
            method === "phone"
              ? "text-red-karlabash font-semibold border-b-2 border-red-karlabash"
              : "text-charcoal"
          }`}
        >
          Phone
        </button>
        <button
          type="button"
          onClick={() => setMethod("email")}
          className={`pb-2 text-sm font-medium transition-colors ${
            method === "email"
              ? "text-red-karlabash font-semibold border-b-2 border-red-karlabash"
              : "text-charcoal"
          }`}
        >
          Email
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {method === "phone" ? (
          <div className="mb-4">
            <label className="block text-sm font-medium text-ink mb-1.5">
              Phone number
            </label>
            <div className="flex items-center border border-line rounded-[7px] bg-white focus-within:border-red-karlabash transition-colors">
              <div className="flex items-center gap-1.5 pl-3 pr-2 border-r border-line text-sm text-charcoal">
                <Phone size={16} className="text-charcoal" />
                <span>+233</span>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="24 567 8901"
                className="flex-1 px-3 py-3 text-sm text-ink outline-none bg-transparent"
              />
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <label className="block text-sm font-medium text-ink mb-1.5">
              Email address
            </label>
            <div className="flex items-center border border-line rounded-[7px] bg-white focus-within:border-red-karlabash transition-colors">
              <Mail size={16} className="text-charcoal ml-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 px-3 py-3 text-sm text-ink outline-none bg-transparent"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full h-11 bg-red-karlabash text-white rounded-[7px] font-semibold text-sm hover:bg-red-karlabash-dark transition-colors"
        >
          Continue
        </button>
      </form>

      <p className="text-sm text-charcoal text-center mt-6">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="text-red-karlabash font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
