import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarPickerProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  unavailableDates: Date[];
}

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isUnavailable(date: Date, unavailable: Date[]) {
  return unavailable.some((d) => isSameDay(d, date));
}

export default function CalendarPicker({
  selectedDate,
  onSelectDate,
  unavailableDates,
}: CalendarPickerProps) {
  const [viewDate, setViewDate] = useState(new Date());
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const today = new Date();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="bg-white border border-[#E4E1DC] rounded-[7px] p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="w-8 h-8 flex items-center justify-center rounded-[7px] hover:bg-[#F2B705]/10"
        >
          <ChevronLeft className="w-4 h-4 text-[#141414]" />
        </button>
        <span className="text-sm font-bold text-[#141414]">
          {MONTHS[month]} {year}
        </span>
        <button
          onClick={nextMonth}
          className="w-8 h-8 flex items-center justify-center rounded-[7px] hover:bg-[#F2B705]/10"
        >
          <ChevronRight className="w-4 h-4 text-[#141414]" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((d, i) => (
          <div
            key={i}
            className="w-10 h-10 flex items-center justify-center text-xs text-[#3A3A3A] font-semibold"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) return <div key={i} className="w-10 h-10 invisible" />;

          const date = new Date(year, month, day);
          const isSelected = selectedDate && isSameDay(date, selectedDate);
          const isToday = isSameDay(date, today);
          const unavailable = isUnavailable(date, unavailableDates);

          let className =
            "w-10 h-10 flex items-center justify-center text-sm rounded-[7px] ";

          if (unavailable) {
            className += "bg-[#E4E1DC]/50 text-[#3A3A3A]/30 cursor-not-allowed";
          } else if (isSelected) {
            className += "bg-[#D62828] text-white font-semibold";
          } else {
            className += "hover:bg-[#D62828]/10 cursor-pointer text-[#141414]";
          }

          if (isToday && !isSelected) {
            className += " border border-[#D62828]";
          }

          return (
            <button
              key={i}
              disabled={unavailable}
              onClick={() => !unavailable && onSelectDate(date)}
              className={className}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
