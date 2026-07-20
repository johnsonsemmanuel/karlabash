import CheckoutComponent from '@/components/checkout/CheckoutPage'

const mockOrder = {
  items: [
    { name: 'Digital Gold: Building in West Africa', price: 120, quantity: 1 },
  ],
  platformFee: 5,
  total: 125,
  onPay: (data: Record<string, unknown>) => {
    console.log('Payment:', data)
  },
}

export function CheckoutPage() {
  return (
    <div>
      <CheckoutComponent
        items={mockOrder.items}
        platformFee={mockOrder.platformFee}
        total={mockOrder.total}
        onPay={mockOrder.onPay}
      />
    </div>
  )
}
