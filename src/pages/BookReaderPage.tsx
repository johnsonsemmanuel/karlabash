import { useParams, Link } from "react-router-dom";
import BookReader from "@/components/books/BookReader";
import { books } from "@/data/mockData";

export function BookReaderPage() {
  const { id } = useParams<{ id: string }>();
  const book = books.find((b) => b.id === id);

  if (!book || !book.chapters || book.chapters.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-warm-white px-4">
        <p className="text-charcoal text-sm">Book not found or no chapters available.</p>
        <Link
          to="/books"
          className="mt-4 text-sm text-red-karlabash font-semibold hover:underline"
        >
          Browse Books
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white">
      <BookReader
        book={{
          id: book.id,
          title: book.title,
          author: book.author,
          coverUrl: book.coverUrl,
          chapters: book.chapters,
        }}
      />
    </div>
  );
}
