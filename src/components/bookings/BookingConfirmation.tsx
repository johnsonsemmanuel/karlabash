import { Link } from "react-router-dom";
import { CheckCircle, Calendar, Clock } from "lucide-react";

interface Booking {
  service: string;
  provider: string;
  date: string;
  timeSlot: string;
  reference: string;
  price: number;
}

interface BookingConfirmationProps {
  booking: Booking;
}

export default function BookingConfirmation({
  booking,
}: BookingConfirmationProps) {
  return (
    <div className="max-w-md mx-auto bg-white border border-[#E4E1DC] rounded-[7px] overflow-hidden">
      <div className="bg-[#1E7A44] py-4 text-center">
        <CheckCircle className="w-10 h-10 text-white mx-auto" />
        <h2 className="text-lg font-manrope font-bold text-white mt-2">
          Booking Confirmed
        </h2>
      </div>

      <div className="p-6 space-y-3">
        <p className="text-sm font-semibold text-[#141414]">
          {booking.service}
        </p>
        <p className="text-sm text-[#3A3A3A]">{booking.provider}</p>
        <div className="text-sm text-[#3A3A3A] flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {booking.date}
        </div>
        <div className="text-sm text-[#3A3A3A] flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {booking.timeSlot}
        </div>
        <div className="border-t border-[#E4E1DC]" />
        <p className="text-xs text-[#3A3A3A] font-mono">
          Ref: {booking.reference}
        </p>
        <p className="text-lg font-bold tabular-nums text-[#141414]">
          GHS {booking.price}
        </p>
      </div>

      <div className="p-4">
        <button className="w-full border border-[#E4E1DC] text-[#141414] h-10 rounded-[7px] text-sm font-semibold">
          Add to Calendar
        </button>
        <Link
          to="/bookings"
          className="text-center text-sm text-[#D62828] mt-2 block"
        >
          Back to Bookings
        </Link>
      </div>
    </div>
  );
}
