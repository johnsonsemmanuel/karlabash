import { Link } from "react-router-dom";
import { CalendarClock } from "lucide-react";

interface Webinar {
  id: string;
  title: string;
  host: string;
  hostAvatar: string;
  date: string;
  isLive: boolean;
  isFree: boolean;
  price?: number;
  registeredCount: number;
}

interface WebinarCardProps {
  webinar: Webinar;
}

export default function WebinarCard({ webinar }: WebinarCardProps) {
  return (
    <Link to={`/webinars/${webinar.id}`}>
      <div className="bg-white border border-[#E4E1DC] rounded-[7px] overflow-hidden hover:shadow-sm transition-shadow">
        <div className="h-32 bg-[#141414] relative">
          {webinar.isLive && (
            <div className="absolute top-2 left-2 bg-[#D62828] text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              LIVE
            </div>
          )}
          {webinar.isFree && (
            <div className="absolute top-2 right-2 bg-[#F2B705] text-[#141414] text-[10px] font-bold px-2 py-0.5 rounded-[4px]">
              FREE
            </div>
          )}
        </div>
        <div className="p-3">
          <div className="flex items-center gap-2 mb-2">
            <img
              src={webinar.hostAvatar}
              alt={webinar.host}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs text-[#3A3A3A]">{webinar.host}</span>
          </div>
          <h3 className="text-sm font-semibold text-[#141414] line-clamp-2">
            {webinar.title}
          </h3>
          <div className="text-xs text-[#3A3A3A] mt-2 flex items-center gap-1">
            <CalendarClock className="w-3 h-3" />
            {webinar.date}
          </div>
          <div className="flex justify-between items-center mt-2">
            <span
              className={`text-sm font-bold tabular-nums ${webinar.isFree ? "text-[#1E7A44]" : "text-[#141414]"}`}
            >
              {webinar.isFree ? "Free" : `GHS ${webinar.price}`}
            </span>
            <span className="text-xs text-[#3A3A3A]">
              {webinar.registeredCount} registered
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
