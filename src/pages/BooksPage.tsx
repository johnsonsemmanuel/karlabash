import BookCatalog from '@/components/books/BookCatalog'
import { books } from '@/data/mockData'

export function BooksPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-lg font-manrope font-bold mb-4">Browse Books</h1>
      <BookCatalog books={books} />
    </div>
  )
}
