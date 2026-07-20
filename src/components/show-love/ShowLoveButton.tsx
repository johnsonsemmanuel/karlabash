import { Heart } from "lucide-react";

interface ShowLoveButtonProps {
  creatorName: string;
  onClick: () => void;
}

export default function ShowLoveButton({
  creatorName,
  onClick,
}: ShowLoveButtonProps) {
  return (
    <button
      onClick={onClick}
      className="h-11 px-6 bg-[#F2B705] text-[#141414] font-semibold rounded-[7px] text-sm flex items-center gap-2 hover:brightness-95 transition-colors cursor-pointer"
    >
      <Heart className="w-4 h-4" />
      Show Love to {creatorName}
    </button>
  );
}
