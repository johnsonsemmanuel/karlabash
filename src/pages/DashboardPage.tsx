import { useState } from 'react'
import DashboardHome from '@/components/dashboard/DashboardHome'
import CreatorStats from '@/components/dashboard/CreatorStats'
import { currentUser } from '@/data/mockData'

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'stats'>('overview')

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex gap-4 mb-6 border-b border-line">
        <button
          onClick={() => setActiveTab('overview')}
          className={`pb-3 font-manrope font-bold text-sm border-b-2 transition-colors ${
            activeTab === 'overview'
              ? 'border-red-karlabash text-red-karlabash'
              : 'border-transparent text-charcoal'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('stats')}
          className={`pb-3 font-manrope font-bold text-sm border-b-2 transition-colors ${
            activeTab === 'stats'
              ? 'border-red-karlabash text-red-karlabash'
              : 'border-transparent text-charcoal'
          }`}
        >
          Stats
        </button>
      </div>
      {activeTab === 'overview' ? (
        <DashboardHome user={currentUser} />
      ) : (
        <CreatorStats />
      )}
    </div>
  )
}
