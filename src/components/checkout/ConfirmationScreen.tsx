import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Copy } from "lucide-react";

interface ConfirmationScreenProps {
  reference: string;
  orderType: "purchase" | "ticket" | "webinar" | "booking";
}

const ACTION_LABELS: Record<string, { label: string; path: string }> = {
  purchase: { label: "Download your book", path: "/downloads" },
  ticket: { label: "View your ticket", path: "/tickets" },
  webinar: { label: "Join webinar", path: "/webinars" },
  booking: { label: "View booking", path: "/bookings" },
};

export default function ConfirmationScreen({
  reference,
  orderType,
}: ConfirmationScreenProps) {
  const [copied, setCopied] = useState(false);
  const action = ACTION_LABELS[orderType];

  const handleCopy = () => {
    navigator.clipboard.writeText(reference);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center py-12 px-4">
      <CheckCircle className="w-14 h-14 text-[#1E7A44] mx-auto" />
      <h2 className="text-xl font-manrope font-bold text-[#141414] mt-4">
        Payment Confirmed
      </h2>
      <div className="mt-2 inline-flex items-center gap-2 bg-[#FAF9F7] px-3 py-1.5 rounded-[4px]">
        <span className="text-sm font-mono text-[#3A3A3A]">{reference}</span>
        <button
          onClick={handleCopy}
          className="text-[#3A3A3A] hover:text-[#141414]"
        >
          <Copy className="w-3.5 h-3.5" />
        </button>
      </div>
      {copied && (
        <p className="text-xs text-[#1E7A44] mt-1">Copied!</p>
      )}

      <Link
        to={action.path}
        className="block w-full h-11 bg-[#D62828] text-white rounded-[7px] font-semibold text-sm mt-6 max-w-sm mx-auto leading-[44px]"
      >
        {action.label}
      </Link>

      <Link to="/" className="text-sm text-[#3A3A3A] mt-4 block">
        Back to Home
      </Link>
    </div>
  );
}
