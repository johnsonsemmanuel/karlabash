import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import AuthLayout from '@/components/layout/AuthLayout'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'
import { SignupPage } from '@/pages/SignupPage'
import { OtpPage } from '@/pages/OtpPage'
import { BooksPage } from '@/pages/BooksPage'
import { BookDetailPage } from '@/pages/BookDetailPage'
import { BookReaderPage } from '@/pages/BookReaderPage'
import { AuthorPage } from '@/pages/AuthorPage'
import { EventsPage } from '@/pages/EventsPage'
import { EventDetailPage } from '@/pages/EventDetailPage'
import { WebinarsPage } from '@/pages/WebinarsPage'
import { WebinarDetailPage } from '@/pages/WebinarDetailPage'
import { BookingsPage } from '@/pages/BookingsPage'
import { CheckoutPage } from '@/pages/CheckoutPage'
import { ConfirmationPage } from '@/pages/ConfirmationPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { LibraryPage } from '@/pages/LibraryPage'
import { ShowLovePage } from '@/pages/ShowLovePage'
import { ProfilePage } from '@/pages/ProfilePage'
import { SellPage } from '@/pages/SellPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookDetailPage />} />
          <Route path="/books/:id/read" element={<BookReaderPage />} />
          <Route path="/author/:id" element={<AuthorPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/webinars" element={<WebinarsPage />} />
          <Route path="/webinars/:id" element={<WebinarDetailPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/show-love" element={<ShowLovePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/otp" element={<OtpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
