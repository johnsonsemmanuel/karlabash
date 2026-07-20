import { useState } from "react";
import PaymentMethodSelector from "./PaymentMethodSelector";
import OrderSummary from "./OrderSummary";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutPageProps {
  items: OrderItem[];
  platformFee: number;
  total: number;
  onPay: (data: { method: string; phone?: string; network?: string; cardNumber?: string; expiry?: string; cvv?: string }) => void;
}

const NETWORKS = ["MTN", "Vodafone", "AirtelTigo"];

export default function CheckoutPage({
  items,
  platformFee,
  total,
  onPay,
}: CheckoutPageProps) {
  const [method, setMethod] = useState("mobile-money");
  const [network, setNetwork] = useState("MTN");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePay = () => {
    if (method === "mobile-money") {
      onPay({ method, phone, network });
    } else {
      onPay({ method, cardNumber, expiry, cvv });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8">
        <div className="space-y-6">
          <h2 className="text-base font-manrope font-bold text-[#141414]">
            Payment Method
          </h2>
          <PaymentMethodSelector selected={method} onSelect={setMethod} />

          {method === "mobile-money" && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#3A3A3A] mb-2 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="024 000 0000"
                  className="w-full h-11 border border-[#E4E1DC] rounded-[7px] px-3 text-sm outline-none focus:border-[#D62828]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#3A3A3A] mb-2 block">
                  Network
                </label>
                <div className="space-y-2">
                  {NETWORKS.map((n) => (
                    <button
                      key={n}
                      onClick={() => setNetwork(n)}
                      className={`w-full p-4 border rounded-[7px] flex items-center gap-3 cursor-pointer transition-colors ${
                        network === n
                          ? "border-[#D62828] bg-[#D62828]/5"
                          : "border-[#E4E1DC] bg-white"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          network === n
                            ? "border-[#D62828] bg-[#D62828]"
                            : "border-[#E4E1DC]"
                        }`}
                      >
                        {network === n && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="text-sm font-medium text-[#141414]">
                        {n}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {method === "card" && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#3A3A3A] mb-2 block">
                  Card Number
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full h-11 border border-[#E4E1DC] rounded-[7px] px-3 text-sm outline-none focus:border-[#D62828]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#3A3A3A] mb-2 block">
                    Expiry
                  </label>
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full h-11 border border-[#E4E1DC] rounded-[7px] px-3 text-sm outline-none focus:border-[#D62828]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#3A3A3A] mb-2 block">
                    CVV
                  </label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    maxLength={4}
                    className="w-full h-11 border border-[#E4E1DC] rounded-[7px] px-3 text-sm outline-none focus:border-[#D62828]"
                  />
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handlePay}
            className="w-full h-12 bg-[#D62828] text-white font-semibold rounded-[7px] text-sm"
          >
            Pay GHS {total}
          </button>
        </div>

        <div className="lg:sticky lg:top-8 lg:self-start">
          <OrderSummary
            items={items}
            platformFee={platformFee}
            total={total}
          />
          <p className="text-xs text-[#3A3A3A] mt-2">
            All prices in Ghana Cedis (GHS)
          </p>
        </div>
      </div>
    </div>
  );
}
