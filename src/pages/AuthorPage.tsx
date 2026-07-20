import { useParams } from 'react-router-dom'
import AuthorStorefront from '@/components/books/AuthorStorefront'
import BookCatalog from '@/components/books/BookCatalog'
import { creators, books } from '@/data/mockData'

export function AuthorPage() {
  const { id } = useParams<{ id: string }>()
  const creator = creators.find((c: { id: string }) => c.id === id)
  const authorBooks = books.filter((b: { authorId: string }) => b.authorId === id)

  if (!creator) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <p className="text-charcoal">Creator not found</p>
      </div>
    )
  }

  return (
    <div>
      <AuthorStorefront creator={creator} />
      {authorBooks.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h2 className="text-lg font-manrope font-bold mb-4">Books by {creator.name}</h2>
          <BookCatalog books={authorBooks} />
        </div>
      )}
    </div>
  )
}
