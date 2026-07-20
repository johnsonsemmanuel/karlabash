import SupportFlow from '@/components/show-love/SupportFlow'
import SupporterList from '@/components/show-love/SupporterList'
import { creators } from '@/data/mockData'

const mockCreator = creators[0]
const mockSupporters = [
  { name: 'Adaeze O.', amount: 50, message: 'Keep inspiring us!', anonymous: false, date: '2026-07-15' },
  { name: 'Kwadwo M.', amount: 25, message: '', anonymous: false, date: '2026-07-14' },
  { name: 'Anonymous', amount: 100, message: 'We believe in you.', anonymous: true, date: '2026-07-13' },
  { name: 'Ama D.', amount: 10, message: 'Love your work!', anonymous: false, date: '2026-07-12' },
]

export function ShowLovePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-lg font-manrope font-bold mb-4 text-ink">Show Love</h1>
      <SupportFlow
        creator={mockCreator}
        onSubmit={(data) => console.log('Support:', data)}
      />
      <div className="mt-8 max-w-md mx-auto">
        <SupporterList supporters={mockSupporters} />
      </div>
    </div>
  )
}
