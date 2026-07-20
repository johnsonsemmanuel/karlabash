import Hero from '@/components/home/Hero'
import CategoryRail from '@/components/home/CategoryRail'
import FeaturedCreators from '@/components/home/FeaturedCreators'
import { books, events, webinars, creators } from '@/data/mockData'

export function HomePage() {
  return (
    <div>
      <Hero />
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-2">
        <CategoryRail title="Popular Books" items={books} type="books" seeAllLink="/books" />
        <CategoryRail title="Upcoming Events" items={events} type="events" seeAllLink="/events" />
        <CategoryRail title="Live Webinars" items={webinars} type="webinars" seeAllLink="/webinars" />
        <FeaturedCreators creators={creators} />
      </div>
    </div>
  )
}
