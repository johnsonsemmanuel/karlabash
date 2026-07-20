import { useParams } from 'react-router-dom'
import BookDetail from '@/components/books/BookDetail'
import { books } from '@/data/mockData'

export function BookDetailPage() {
  const { id } = useParams<{ id: string }>()
  const book = books.find((b: { id: string }) => b.id === id)

  if (!book) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <p className="text-charcoal">Book not found</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <BookDetail book={book} />
    </div>
  )
}
