import { useSearchParams } from 'react-router-dom'
import ConfirmationScreen from '@/components/checkout/ConfirmationScreen'

export function ConfirmationPage() {
  const [searchParams] = useSearchParams()
  const reference = searchParams.get('ref') || 'KLB-2026-001'
  const orderType = (searchParams.get('type') || 'purchase') as 'purchase' | 'ticket' | 'webinar' | 'booking'

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <ConfirmationScreen reference={reference} orderType={orderType} />
    </div>
  )
}
