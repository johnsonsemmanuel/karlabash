import WebinarCard from '@/components/webinars/WebinarCard'
import { webinars } from '@/data/mockData'

export function WebinarsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-lg font-manrope font-bold mb-4">Webinars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {webinars.map((webinar) => (
          <WebinarCard key={webinar.id} webinar={webinar} />
        ))}
      </div>
    </div>
  )
}
