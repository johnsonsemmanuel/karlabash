import { User } from "lucide-react";

interface Supporter {
  name: string;
  amount: number;
  message: string;
  anonymous: boolean;
  date: string;
}

interface SupporterListProps {
  supporters: Supporter[];
}

export default function SupporterList({ supporters }: SupporterListProps) {
  const total = supporters.reduce(
    (sum, s) => (s.anonymous ? sum : sum + s.amount),
    0,
  );

  return (
    <div>
      <h3 className="text-base font-manrope font-semibold text-[#141414]">
        Recent Supporters
      </h3>
      <p className="text-2xl font-bold tabular-nums text-[#F2B705] mt-1">
        GHS {total}
      </p>

      <div className="space-y-3 mt-4">
        {supporters.map((supporter, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 bg-white border border-[#E4E1DC] rounded-[7px]"
          >
            {supporter.anonymous ? (
              <div className="w-8 h-8 rounded-full bg-[#F2B705] flex items-center justify-center">
                <User className="w-4 h-4 text-[#141414]" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-[#F2B705] flex items-center justify-center text-xs font-bold text-[#141414]">
                {supporter.name.charAt(0)}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#141414]">
                {supporter.anonymous ? "Anonymous" : supporter.name}
              </p>
              {supporter.message && (
                <p className="text-sm text-[#3A3A3A] mt-0.5">
                  {supporter.message}
                </p>
              )}
              <p className="text-xs text-[#3A3A3A] mt-0.5">{supporter.date}</p>
            </div>
            {!supporter.anonymous && (
              <span className="text-sm font-bold tabular-nums text-[#F2B705]">
                GHS {supporter.amount}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
