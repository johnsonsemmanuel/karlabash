import { useState } from "react";

interface Creator {
  name: string;
  avatar: string;
}

interface SupportFlowProps {
  creator: Creator;
  onSubmit: (data: {
    amount: number;
    message: string;
    publicAmount: boolean;
  }) => void;
}

const PRESET_AMOUNTS = [10, 25, 50, 100, 200];

export default function SupportFlow({ creator, onSubmit }: SupportFlowProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [message, setMessage] = useState("");
  const [publicAmount, setPublicAmount] = useState(false);
  const [isCustom, setIsCustom] = useState(false);

  const handlePreset = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustom = () => {
    setIsCustom(true);
    setSelectedAmount(null);
  };

  const finalAmount = isCustom ? parseFloat(customAmount) || 0 : selectedAmount || 0;

  const handleSubmit = () => {
    if (finalAmount <= 0) return;
    onSubmit({ amount: finalAmount, message, publicAmount });
  };

  return (
    <div className="max-w-md mx-auto bg-white border border-[#E4E1DC] rounded-[7px] p-6">
      <div className="text-center">
        <img
          src={creator.avatar}
          alt={creator.name}
          className="w-14 h-14 rounded-full mx-auto object-cover"
        />
        <p className="text-base font-manrope font-semibold text-[#141414] mt-3">
          Send encouragement to {creator.name}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-6">
        {PRESET_AMOUNTS.map((amount) => (
          <button
            key={amount}
            onClick={() => handlePreset(amount)}
            className={`rounded-full py-2.5 text-sm font-medium text-center cursor-pointer border transition-colors ${
              selectedAmount === amount && !isCustom
                ? "bg-[#F2B705] text-[#141414] border-[#F2B705]"
                : "border-[#E4E1DC] text-[#3A3A3A]"
            }`}
          >
            GHS {amount}
          </button>
        ))}
        <button
          onClick={handleCustom}
          className={`rounded-full py-2.5 text-sm font-medium text-center cursor-pointer border transition-colors ${
            isCustom
              ? "bg-[#F2B705] text-[#141414] border-[#F2B705]"
              : "border-[#E4E1DC] text-[#3A3A3A]"
          }`}
        >
          Custom
        </button>
      </div>

      {isCustom && (
        <div className="mt-3 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#3A3A3A]">
            GHS
          </span>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full h-10 border border-[#E4E1DC] rounded-[7px] pl-12 pr-3 text-sm outline-none focus:border-[#F2B705]"
          />
        </div>
      )}

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a short message..."
        className="w-full h-20 border border-[#E4E1DC] rounded-[7px] p-3 text-sm mt-4 outline-none resize-none focus:border-[#F2B705]"
      />

      <div className="flex items-center gap-2 mt-3">
        <button
          onClick={() => setPublicAmount(!publicAmount)}
          className={`w-10 h-5 rounded-full transition-colors relative ${
            publicAmount ? "bg-[#F2B705]" : "bg-[#E4E1DC]"
          }`}
        >
          <span
            className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
              publicAmount ? "left-5" : "left-0.5"
            }`}
          />
        </button>
        <span className="text-xs text-[#3A3A3A]">Show my amount publicly</span>
      </div>

      <button
        onClick={handleSubmit}
        disabled={finalAmount <= 0}
        className="w-full h-11 bg-[#F2B705] text-[#141414] font-semibold rounded-[7px] mt-4 text-sm disabled:opacity-50 cursor-pointer"
      >
        Send Support
      </button>
    </div>
  );
}
