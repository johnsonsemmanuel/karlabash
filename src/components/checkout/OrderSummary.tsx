interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface OrderSummaryProps {
  items: OrderItem[];
  platformFee: number;
  total: number;
}

export default function OrderSummary({
  items,
  platformFee: _platformFee,
  total,
}: OrderSummaryProps) {
  return (
    <div className="bg-[#FAF9F7] border border-[#E4E1DC] rounded-[7px] p-4">
      {items.map((item, i) => (
        <div key={i} className="flex justify-between text-sm mb-2">
          <span className="text-[#141414]">
            {item.name}
            {item.quantity > 1 && (
              <span className="text-[#3A3A3A]"> x{item.quantity}</span>
            )}
          </span>
          <span className="text-[#141414] font-medium tabular-nums">
            GHS {item.price}
          </span>
        </div>
      ))}
      <div className="text-xs text-[#3A3A3A] mb-2">Platform fee</div>
      <div className="border-t border-[#E4E1DC] my-2" />
      <div className="flex justify-between">
        <span className="text-sm font-semibold text-[#141414]">Total</span>
        <span className="text-lg font-bold tabular-nums text-[#141414]">
          GHS {total}
        </span>
      </div>
    </div>
  );
}
