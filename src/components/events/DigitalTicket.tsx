import { Download } from "lucide-react";

interface Ticket {
  event: string;
  holderName: string;
  reference: string;
  qrCode: string;
  date: string;
  venue: string;
}

interface DigitalTicketProps {
  ticket: Ticket;
}

function QRPlaceholder() {
  return (
    <div className="w-40 h-40 mx-auto bg-ink rounded-[7px] flex items-center justify-center p-3">
      <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-[2px]">
        {Array.from({ length: 64 }).map((_, i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          const filled =
            (row < 3 && col < 3) ||
            (row < 3 && col > 4) ||
            (row > 4 && col < 3) ||
            (row + col) % 3 === 0;
          return (
            <div
              key={i}
              className={filled ? "bg-white" : "bg-transparent"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function DigitalTicket({ ticket }: DigitalTicketProps) {
  return (
    <div className="max-w-sm mx-auto bg-white border border-line rounded-[7px] overflow-hidden">
      <div className="bg-red-karlabash py-4 px-6 text-center">
        <p className="text-lg font-manrope font-bold text-white">
          {ticket.event}
        </p>
        <p className="text-sm text-white/80 mt-1">{ticket.date}</p>
      </div>

      <div className="p-6">
        <QRPlaceholder />

        <p className="text-sm font-semibold text-ink mt-4 text-center">
          {ticket.holderName}
        </p>
        <p className="text-xs text-charcoal mt-1 text-center font-mono">
          {ticket.reference}
        </p>
        <p className="text-xs text-charcoal text-center mt-1">
          {ticket.venue}
        </p>
      </div>

      <div className="border-t border-line p-3 flex justify-center">
        <button
          type="button"
          className="text-sm font-semibold text-red-karlabash flex items-center gap-1 cursor-pointer"
        >
          <Download className="w-4 h-4" />
          Add to Wallet
        </button>
      </div>
    </div>
  );
}
