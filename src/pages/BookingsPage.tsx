import { useState } from 'react'
import CalendarPicker from '@/components/bookings/CalendarPicker'
import TimeSlotList from '@/components/bookings/TimeSlotList'

const mockSlots = [
  { time: '09:00 AM', available: true },
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '02:00 PM', available: true },
  { time: '03:00 PM', available: true },
  { time: '04:00 PM', available: true },
]

export function BookingsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-lg font-manrope font-bold mb-4">Book a Session</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-manrope font-semibold mb-3 text-ink">Select Date</h2>
          <CalendarPicker selectedDate={selectedDate} onSelectDate={setSelectedDate} unavailableDates={[]} />
        </div>
        <div>
          <h2 className="font-manrope font-semibold mb-3 text-ink">Available Times</h2>
          <TimeSlotList
            slots={mockSlots}
            selectedSlot={selectedSlot}
            onSelectSlot={setSelectedSlot}
          />
        </div>
      </div>
      {selectedDate && selectedSlot && (
        <div className="mt-6 p-4 bg-white border border-line rounded-[7px]">
          <h3 className="font-manrope font-semibold mb-2 text-ink">Booking Summary</h3>
          <p className="text-sm text-charcoal">
            {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            {' at '}
            {selectedSlot}
          </p>
          <button className="mt-4 w-full h-11 bg-red-karlabash text-white rounded-[7px] font-semibold text-sm">
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  )
}
