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
import BookingDetails from './pages/BookingDetails'
import PartnerDashboard from './pages/PartnerDashboard'
import PackageManagement from './pages/PackageManagement'
import AgencyProfile from './pages/AgencyProfile'
import AddPackageWizard from './pages/AddPackageWizard'
import BookingLeads from './pages/BookingLeads'
import AgencyFinancials from './pages/AgencyFinancials'
import MarketAnalytics from './pages/MarketAnalytics'
import ReputationManagement from './pages/ReputationManagement'
import AIBrochureScanner from './pages/AIBrochureScanner'
import AIScanResults from './pages/AIScanResults'
import VerifiedPartnerDirectory from './pages/VerifiedPartnerDirectory'
import ClaimsQueue from './pages/ClaimsQueue'
import PassportUpload from './pages/PassportUpload'
import DocumentVerified from './pages/DocumentVerified'
import SavedComparisons from './pages/SavedComparisons'

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          {/* Consumer Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search-history" element={<SearchHistory />} />
          <Route path="/saved-comparisons" element={<SavedComparisons />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/booking/:id" element={<BookingDetails />} />
          <Route path="/write-review" element={<WriteReview />} />
          <Route path="/upload-passport" element={<PassportUpload />} />
          <Route path="/document-verified" element={<DocumentVerified />} />
          
          {/* Booking Flow */}
          <Route path="/booking/room" element={<BookingSelectRoom />} />
          <Route path="/booking/passenger" element={<BookingPassengerDetails />} />
          <Route path="/booking/summary" element={<BookingSummary />} />
          <Route path="/booking/payment" element={<PaymentConfirmation />} />
          
          {/* Partner Routes */}
          <Route path="/partner/dashboard" element={<PartnerDashboard />} />
          <Route path="/partner/packages" element={<PackageManagement />} />
          <Route path="/partner/add-package" element={<AddPackageWizard />} />
          <Route path="/partner/leads" element={<BookingLeads />} />
          <Route path="/partner/financials" element={<AgencyFinancials />} />
          <Route path="/partner/analytics" element={<MarketAnalytics />} />
          <Route path="/partner/reputation" element={<ReputationManagement />} />
          <Route path="/partner/scanner" element={<AIBrochureScanner />} />
          <Route path="/partner/scanner/results" element={<AIScanResults />} />
          <Route path="/agency/:id" element={<AgencyProfile />} />
          
          {/* Operational */}
          <Route path="/verified-partners" element={<VerifiedPartnerDirectory />} />
          <Route path="/admin/claims" element={<ClaimsQueue />} />
          
          {/* Other */}
          <Route path="/verification" element={<div className="container mx-auto py-20 text-center text-slate-500">Travel Verification (Coming Soon)</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
