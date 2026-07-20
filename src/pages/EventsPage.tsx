import { Link } from 'react-router-dom'
import { events } from '@/data/mockData'
import Badge from '@/components/ui/Badge'

export function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-lg font-manrope font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => {
          const seatsLeft = event.totalSeats - event.seatsSold
          const isLow = seatsLeft < event.totalSeats * 0.2
          const dateObj = new Date(event.date)
          return (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="bg-white border border-line rounded-[7px] overflow-hidden hover:border-charcoal/30 transition-colors"
            >
              <div className="h-36 bg-charcoal relative">
                <div className="absolute top-2 left-2 bg-red-karlabash text-white text-center px-2 py-1 rounded-[4px] leading-none">
                  <div className="text-lg font-bold">{dateObj.getDate()}</div>
                  <div className="text-[10px] uppercase">{dateObj.toLocaleString('en-US', { month: 'short' })}</div>
                </div>
                {isLow && (
                  <div className="absolute top-2 right-2">
                    <Badge variant="gold">{seatsLeft} left</Badge>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm text-ink line-clamp-1">{event.title}</h3>
                <p className="text-charcoal text-xs mt-1">{event.venue}</p>
                <p className="text-ink font-bold text-sm mt-2 tabular-nums">
                  {event.price === 0 ? 'Free' : `GHS ${event.price.toLocaleString()}`}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
