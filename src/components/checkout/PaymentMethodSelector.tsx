import { Phone, CreditCard } from "lucide-react";

interface PaymentMethodSelectorProps {
  selected: string;
  onSelect: (method: string) => void;
}

const METHODS = [
  {
    id: "mobile-money",
    label: "Mobile Money",
    sub: "MTN, Vodafone, AirtelTigo",
    icon: Phone,
  },
  {
    id: "card",
    label: "Debit/Credit Card",
    sub: "Visa, Mastercard",
    icon: CreditCard,
  },
];

export default function PaymentMethodSelector({
  selected,
  onSelect,
}: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-3">
      {METHODS.map((method) => {
        const isSelected = selected === method.id;
        const Icon = method.icon;
        return (
          <button
            key={method.id}
            onClick={() => onSelect(method.id)}
            className={`w-full p-4 border rounded-[7px] flex items-center gap-3 cursor-pointer transition-colors ${
              isSelected
                ? "border-[#D62828] bg-[#D62828]/5"
                : "border-[#E4E1DC] bg-white"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                isSelected
                  ? "border-[#D62828] bg-[#D62828]"
                  : "border-[#E4E1DC]"
              }`}
            >
              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
            </div>
            <Icon className="w-5 h-5 text-[#3A3A3A]" />
            <div className="text-left">
              <p className="text-sm font-semibold text-[#141414]">
                {method.label}
              </p>
              <p className="text-xs text-[#3A3A3A]">{method.sub}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
