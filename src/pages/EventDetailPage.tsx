import { useParams } from 'react-router-dom'
import EventDetail from '@/components/events/EventDetail'
import { events } from '@/data/mockData'

export function EventDetailPage() {
  const { id } = useParams<{ id: string }>()
  const event = events.find((e: { id: string }) => e.id === id)

  if (!event) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <p className="text-charcoal">Event not found</p>
      </div>
    )
  }

  return (
    <div>
      <EventDetail event={event} />
    </div>
  )
}
