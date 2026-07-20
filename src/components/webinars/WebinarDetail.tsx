import { CalendarClock } from "lucide-react";

interface Webinar {
  id: string;
  title: string;
  host: string;
  hostAvatar: string;
  date: string;
  description: string;
  isLive: boolean;
  isFree: boolean;
  price?: number;
  registeredCount: number;
}

interface WebinarDetailProps {
  webinar: Webinar;
}

export default function WebinarDetail({ webinar }: WebinarDetailProps) {
  return (
    <div>
      <div className="bg-[#141414] py-6 px-4">
        {webinar.isLive && (
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] animate-pulse" />
            <span className="text-xs font-bold text-[#D62828]">LIVE NOW</span>
          </div>
        )}
        <h1 className="text-xl font-manrope font-bold text-white mt-2">
          {webinar.title}
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <img
            src={webinar.hostAvatar}
            alt={webinar.host}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-white/80">{webinar.host}</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="text-sm text-[#3A3A3A] flex items-center gap-2">
          <CalendarClock className="w-4 h-4" />
          {webinar.date}
        </div>
        <p className="text-sm text-[#3A3A3A] leading-relaxed mt-4">
          {webinar.description}
        </p>

        <div className="mt-6">
          {webinar.isFree ? (
            <button className="w-full h-12 bg-[#D62828] text-white font-semibold rounded-[7px] text-sm">
              Register for Free
            </button>
          ) : (
            <div>
              <span className="text-lg font-bold tabular-nums text-[#141414]">
                GHS {webinar.price}
              </span>
              <button className="w-full h-12 bg-[#D62828] text-white font-semibold rounded-[7px] text-sm mt-2">
                Register Now
              </button>
            </div>
          )}
        </div>

        <p className="text-xs text-[#3A3A3A] mt-3">
          {webinar.registeredCount} people registered
        </p>
      </div>
    </div>
  );
}
