import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import Home from './pages/Home'
import Search from './pages/Search'
import Compare from './pages/Compare'
import PackageDetail from './pages/PackageDetail'
import Favorites from './pages/Favorites'
import SearchHistory from './pages/SearchHistory'
import UserProfile from './pages/UserProfile'
import MyBookings from './pages/MyBookings'
import WriteReview from './pages/WriteReview'
import BookingSelectRoom from './pages/BookingSelectRoom'
import BookingPassengerDetails from './pages/BookingPassengerDetails'
import BookingSummary from './pages/BookingSummary'
import PaymentConfirmation from './pages/PaymentConfirmation'
import PartnerDashboard from './pages/PartnerDashboard'
import PackageManagement from './pages/PackageManagement'

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search-history" element={<SearchHistory />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/write-review" element={<WriteReview />} />
          <Route path="/booking/room" element={<BookingSelectRoom />} />
          <Route path="/booking/passenger" element={<BookingPassengerDetails />} />
          <Route path="/booking/summary" element={<BookingSummary />} />
          <Route path="/booking/payment" element={<PaymentConfirmation />} />
          <Route path="/partner/dashboard" element={<PartnerDashboard />} />
          <Route path="/partner/packages" element={<PackageManagement />} />
          <Route path="/verification" element={<div className="container mx-auto py-20 text-center text-slate-500">Travel Verification (Coming Soon)</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
