import { useParams } from 'react-router-dom'
import WebinarDetail from '@/components/webinars/WebinarDetail'
import LiveView from '@/components/webinars/LiveView'
import { webinars } from '@/data/mockData'

export function WebinarDetailPage() {
  const { id } = useParams<{ id: string }>()
  const webinar = webinars.find((w: { id: string }) => w.id === id)

  if (!webinar) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <p className="text-charcoal">Webinar not found</p>
      </div>
    )
  }

  return (
    <div>
      <WebinarDetail webinar={webinar} />
      {webinar.isLive && (
        <div className="max-w-6xl mx-auto px-4 py-6">
          <LiveView webinar={webinar} />
        </div>
      )}
    </div>
  )
}
