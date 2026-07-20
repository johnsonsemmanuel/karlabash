import { useParams } from "react-router-dom";
import BookDetail from "@/components/books/BookDetail";
import { books } from "@/data/mockData";

export function BookDetailPage() {
  const { id } = useParams<{ id: string }>();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <p className="text-charcoal text-sm">Book not found</p>
      </div>
    );
  }

  return <BookDetail book={book} />;
}
