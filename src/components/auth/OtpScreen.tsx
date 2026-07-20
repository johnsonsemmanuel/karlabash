import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CODE_LENGTH = 6;
const INITIAL_SECONDS = 45;

export default function OtpScreen() {
  const [digits, setDigits] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const next = [...digits];
    next[index] = value.slice(-1);
    setDigits(next);
    if (value && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, CODE_LENGTH);
    if (!pasted) return;
    const next = [...digits];
    for (let i = 0; i < pasted.length; i++) {
      next[i] = pasted[i];
    }
    setDigits(next);
    const focusIdx = Math.min(pasted.length, CODE_LENGTH - 1);
    inputRefs.current[focusIdx]?.focus();
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-12">
      <Link
        to="/login"
        className="inline-flex items-center text-charcoal hover:text-ink transition-colors mb-8"
      >
        <ArrowLeft size={20} />
      </Link>

      <h1 className="text-lg font-manrope font-bold text-ink mb-1">
        Enter verification code
      </h1>
      <p className="text-sm text-charcoal mb-8">
        We sent a 6-digit code to +233 XX XXX XXXX
      </p>

      <div className="flex gap-3 justify-center mb-8">
        {digits.map((digit, i) => (
          <input
            key={i}
            ref={(el) => { inputRefs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={handlePaste}
            className="w-12 h-14 border border-line rounded-[7px] text-center text-xl font-bold text-ink outline-none focus:border-red-karlabash transition-colors bg-white"
          />
        ))}
      </div>

      {seconds > 0 ? (
        <p className="text-sm text-charcoal text-center mb-6">
          Resend code in {formatTime(seconds)}
        </p>
      ) : (
        <button
          type="button"
          onClick={() => setSeconds(INITIAL_SECONDS)}
          className="block mx-auto text-red-karlabash font-semibold text-sm mb-6 hover:underline"
        >
          Resend Code
        </button>
      )}

      <button
        type="button"
        className="w-full h-11 bg-red-karlabash text-white rounded-[7px] font-semibold text-sm hover:bg-red-karlabash-dark transition-colors"
      >
        Verify
      </button>
    </div>
  );
}
