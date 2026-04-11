import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import Home from './pages/Home'
import Search from './pages/Search'
import Compare from './pages/Compare'
import PackageDetail from './pages/PackageDetail'
import Favorites from './pages/Favorites'
import SearchHistory from './pages/SearchHistory'
import SearchEmptyState from './pages/SearchEmptyState'
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
import ReviewsDashboard from './pages/ReviewsDashboard'
import AIBrochureScanner from './pages/AIBrochureScanner'
import AIScanResults from './pages/AIScanResults'
import VerifiedPartnerDirectory from './pages/VerifiedPartnerDirectory'
import ClaimsQueue from './pages/ClaimsQueue'
import CertificateView from './pages/CertificateView'
import PassportUpload from './pages/PassportUpload'
import DocumentVerified from './pages/DocumentVerified'
import SavedComparisons from './pages/SavedComparisons'
import FAQ from './pages/FAQ'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Contact from './pages/Contact'
import PartnerRegistration from './pages/PartnerRegistration'
import Login from './pages/Login'
import TravelVerification from './pages/TravelVerification'
import PopularPackages from './pages/PopularPackages'
import HotelDetail from './pages/HotelDetail'
import AirlineDetail from './pages/AirlineDetail'

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          {/* Consumer Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search-empty" element={<SearchEmptyState />} />
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
          <Route path="/partner/reviews" element={<ReviewsDashboard />} />
          <Route path="/partner/scanner" element={<AIBrochureScanner />} />
          <Route path="/partner/scanner/results" element={<AIScanResults />} />
          <Route path="/agency/:id" element={<AgencyProfile />} />
          
          {/* Operational */}
          <Route path="/verified-partners" element={<VerifiedPartnerDirectory />} />
          <Route path="/admin/claims" element={<ClaimsQueue />} />
          <Route path="/admin/certificates" element={<CertificateView />} />
          
          {/* Public Pages */}
          <Route path="/verification" element={<TravelVerification />} />
          <Route path="/popular" element={<PopularPackages />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="/airline/:id" element={<AirlineDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partner" element={<PartnerRegistration />} />
          <Route path="/login" element={<Login />} />
          
          {/* Other */}
          <Route path="*" element={
            <div className="container mx-auto py-20 text-center">
              <h1 className="text-6xl font-bold text-slate-300 mb-4">404</h1>
              <p className="text-xl text-slate-500 mb-6">Halaman tidak ditemukan</p>
              <a href="/" className="text-primary hover:underline">Kembali ke Beranda</a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
