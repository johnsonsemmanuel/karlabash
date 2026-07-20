interface TimeSlot {
  time: string;
  available: boolean;
}

interface TimeSlotListProps {
  slots: TimeSlot[];
  selectedSlot: string | null;
  onSelectSlot: (time: string) => void;
}

export default function TimeSlotList({
  slots,
  selectedSlot,
  onSelectSlot,
}: TimeSlotListProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#141414] mb-3">
        Available Times
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {slots.map((slot) => {
          const isSelected = selectedSlot === slot.time;
          let className =
            "h-10 px-3 rounded-full border text-sm font-medium flex items-center justify-center cursor-pointer transition-colors ";

          if (!slot.available) {
            className +=
              "border-[#E4E1DC] text-[#3A3A3A]/30 cursor-not-allowed";
          } else if (isSelected) {
            className += "bg-[#D62828] text-white border-[#D62828]";
          } else {
            className +=
              "border-[#E4E1DC] text-[#141414] hover:border-[#D62828]";
          }

          return (
            <button
              key={slot.time}
              disabled={!slot.available}
              onClick={() => slot.available && onSelectSlot(slot.time)}
              className={className}
            >
              {slot.time}
            </button>
          );
        })}
      </div>
    </div>
  );
}
