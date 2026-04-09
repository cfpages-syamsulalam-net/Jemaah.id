# Jemaah.id - Complete Feature Specifications

This document provides detailed feature specifications for all screens in the Jemaah.id platform. It serves as a comprehensive reference for future development when integrating real APIs and adding backend functionality.

**Last Updated:** 10 April 2026  
**Total Screens:** 42  
**Status:** Phase 1 - Dummy Data Implementation Complete (23/42 screens)

---

## 📑 Table of Contents

1. [Consumer (Jamaah) App](#1-consumer-jamaah-app)
2. [Partner Portal (B2B)](#2-partner-portal-b2b)
3. [Booking & Transaction Flows](#3-booking--transaction-flows)
4. [Operational & Verification](#4-operational--verification)
5. [Specialized Interactions](#5-specialized-interactions)

---

## 1. Consumer (Jamaah) App

### 1.1 Home Screen (`Home.tsx`)
**Route:** `/`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Hero section with smart search bar (departure city, month selection)
- Trust badges (Verified Travel, Accurate Hotel Distance, Confirmed Airline)
- Featured packages grid (3 packages displayed)
- Responsive layout (mobile & desktop)

**Future Features (API Integration):**
- [ ] Real-time featured packages from backend
- [ ] Personalized recommendations based on user behavior
- [ ] Dynamic search with autocomplete
- [ ] Integration with Google Places API for hotel verification badges
- [ ] Integration with FlightData API for airline verification
- [ ] A/B testing for hero section copy
- [ ] Analytics tracking for search interactions
- [ ] Seasonal promotions banner
- [ ] Recently viewed packages section

---

### 1.2 Search Results (`Search.tsx`)
**Route:** `/search`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Package listing with mock results (6 packages)
- Filter sidebar (price range, rating, airline, duration, departure city)
- Sort functionality (price low-high, high-low, rating)
- Package cards with quick compare checkbox
- Results count display
- Active filters display with remove option

**Future Features (API Integration):**
- [ ] Real search with query parameters
- [ ] Pagination or infinite scroll
- [ ] Debounced search input
- [ ] Filter persistence in URL params
- [ ] Google Places API integration for hotel distance verification
- [ ] FlightData API integration for airline verification
- [ ] SISKOPATUH API for agency verification status
- [ ] Search suggestions/autocomplete
- [ ] Recent searches dropdown
- [ ] Export search results (PDF/CSV)
- [ ] Share search results link
- [ ] Price alert notifications
- [ ] Search analytics for admin

---

### 1.3 Package Detail (`PackageDetail.tsx`)
**Route:** `/package/:id`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Full package information display
- Hotel details (Makkah & Madinah with star ratings)
- Airline information
- Day-by-day itinerary (9 days sample)
- Included facilities checklist
- Pricing display
- Rating & review count
- Book now CTA button
- Save to favorites button
- Image placeholder

**Future Features (API Integration):**
- [ ] Real package data from database
- [ ] Image gallery (hotel photos, mosque distance photos)
- [ ] Google Maps embed for hotel location
- [ ] Google Street View integration for mosque distance verification
- [ ] Real-time availability checking
- [ ] Dynamic pricing based on dates
- [ ] Room type selector with different prices
- [ ] Flight schedule details
- [ ] Visa requirements display
- [ ] Customer reviews section with pagination
- [ ] Q&A section for package inquiries
- [ ] Share package (WhatsApp, social media)
- [ ] Compare with similar packages
- [ ] Price history chart
- [ ] Book now with date picker
- [ ] Add to calendar integration
- [ ] Download itinerary PDF
- [ ] Virtual tour of hotels (360° photos)

---

### 1.4 Comparison Engine (`Compare.tsx`)
**Route:** `/compare`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Side-by-side package comparison (up to 4 packages)
- Apple-to-Apple feature comparison table
- Plus/Minus highlights (mocked logic)
- Price comparison
- Hotel comparison (stars, distance, name)
- Airline comparison
- Duration comparison
- Rating comparison
- Remove package from comparison
- Book selected package

**Future Features (API Integration):**
- [ ] Save comparison to database
- [ ] Share comparison link
- [ ] Export comparison as PDF
- [ ] Smart highlights (auto-detect key differences)
- [ ] Recommendation engine (best value, best rated, etc.)
- [ ] Price difference calculator
- [ ] Value score calculation
- [ ] Historical price comparison
- [ ] Notify when price drops
- [ ] Compare with user's favorites
- [ ] Multi-language comparison table
- [ ] Print-friendly view
- [ ] Mobile-optimized stacked view

---

### 1.5 Favorites (`Favorites.tsx`)
**Route:** `/favorites`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Grid of saved packages (3 packages)
- Package cards with key info
- Remove from favorites
- View package detail
- Book now CTA
- Empty state with CTA

**Future Features (API Integration):**
- [ ] Persist favorites in database
- [ ] Sync across devices
- [ ] Price drop notifications
- [ ] Availability alerts
- [ ] Organize favorites into collections
- [ ] Add personal notes to favorites
- [ ] Share favorites
- [ ] Compare selected favorites
- [ ] Bulk actions (remove all, compare all)
- [ ] Sort favorites (price, date added, rating)
- [ ] Auto-remove unavailable packages
- [ ] Favorite expiration warnings

---

### 1.6 Search History (`SearchHistory.tsx`)
**Route:** `/search-history`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- List of recent searches (3 entries)
- Search parameters display (departure, month, duration)
- Results count
- Date of search
- Quick "search again" button
- Empty state

**Future Features (API Integration):**
- [ ] Persist search history in database
- [ ] Limit history (last 50 searches)
- [ ] Delete individual searches
- [ ] Clear all history
- [ ] Search history analytics
- [ ] Popular searches suggestions
- [ ] Auto-complete from history
- [ ] Privacy controls (opt-out)
- [ ] Sync across devices
- [ ] Export search history

---

### 1.7 Saved Comparisons (`SavedComparisons.tsx`)
**Route:** `/saved-comparisons`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- List of saved comparisons (2 entries)
- Package names and agencies
- Date saved
- View comparison button
- Delete comparison
- Empty state with CTA

**Future Features (API Integration):**
- [ ] Persist comparisons in database
- [ ] Share comparison links
- [ ] Update comparison with latest prices
- [ ] Notify on price changes
- [ ] Export as PDF
- [ ] Tag comparisons (personal labels)
- [ ] Search saved comparisons
- [ ] Archive old comparisons

---

### 1.8 User Profile (`UserProfile.tsx`)
**Route:** `/profile`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- User profile information display
- Edit profile button
- Document management section
- Document upload functionality (UI only)
- Document status badges (verified, pending, rejected)
- Upload guidelines
- Document list with status

**Future Features (API Integration):**
- [ ] Real user data from auth provider
- [ ] Edit profile form with validation
- [ ] Real document upload to storage (S3/Cloudflare R2)
- [ ] OCR for passport data extraction
- [ ] Automatic document verification
- [ ] Manual review queue for admin
- [ ] Document expiration notifications
- [ ] Download uploaded documents
- [ ] Delete documents
- [ ] Re-upload rejected documents
- [ ] Document history log
- [ ] Privacy settings
- [ ] Notification preferences
- [ ] Two-factor authentication
- [ ] Connected accounts (Google, WhatsApp)
- [ ] Account deletion option
- [ ] Data export (GDPR compliance)

---

### 1.9 My Bookings (`MyBookings.tsx`)
**Route:** `/my-bookings`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Booking history list (2 bookings)
- Booking status badges (upcoming, completed, cancelled)
- Booking details (package, agency, date, passengers, room, price)
- View booking detail button
- Manage booking button (for upcoming)
- Empty state

**Future Features (API Integration):**
- [ ] Real booking data from database
- [ ] Booking status tracking
- [ ] Payment status tracking
- [ ] Download booking confirmation PDF
- [ ] Add booking to calendar
- [ ] Share booking details
- [ ] Cancel booking flow
- [ ] Request date change
- [ ] Add passengers to existing booking
- [ ] Upgrade room type
- [ ] Contact agency from booking
- [ ] Booking timeline/activity log
- [ ] Refund status tracking
- [ ] Review prompt after completed trip
- [ ] Rebook same package
- [ ] Visa application status
- [ ] Flight ticket download
- [ ] Hotel voucher download

---

### 1.10 Write Review (`WriteReview.tsx`)
**Route:** `/write-review`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Package being reviewed display
- Overall star rating (1-5)
- Detailed rating categories:
  - Quality of accommodation
  - Guide service quality
  - Food quality
  - Transportation
  - Overall satisfaction
- Review text area (1000 char limit)
- Photo upload area (up to 5 photos)
- Submit review button
- Character counter

**Future Features (API Integration):**
- [ ] Submit review to database
- [ ] Only verified bookings can review
- [ ] Photo upload to storage
- [ ] Photo moderation
- [ ] Review moderation (profanity filter)
- [ ] Edit review within 7 days
- [ ] Delete review
- [ ] Helpful/unhelpful voting
- [ ] Agency response to reviews
- [ ] Review helpfulness algorithm
- [ ] Verified badge for genuine reviews
- [ ] Report inappropriate review
- [ ] Review incentives (points/badges)
- [ ] Multi-language review support
- [ ] Video review upload (future)

---

## 2. Partner Portal (B2B)

### 2.1 Partner Dashboard (`PartnerDashboard.tsx`)
**Route:** `/partner/dashboard`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Stats overview:
  - Monthly revenue (with % change)
  - Total leads (with % change)
  - Active packages count
  - Conversion rate (with % change)
- Recent bookings list
- Top packages by performance
- Quick action buttons

**Future Features (API Integration):**
- [ ] Real-time analytics from database
- [ ] Revenue chart (line graph, date range picker)
- [ ] Leads funnel visualization
- [ ] Package performance metrics
- [ ] Conversion funnel analytics
- [ ] Customer demographics
- [ ] Traffic sources breakdown
- [ ] Revenue forecasting
- [ ] Goal setting & tracking
- [ ] Custom date range filters
- [ ] Export reports (CSV, PDF)
- [ ] Scheduled report emails
- [ ] Notifications center
- [ ] Pending actions alerts
- [ ] Quick links to common tasks
- [ ] Team member activity log
- [ ] API usage statistics

---

### 2.2 Package Management (`PackageManagement.tsx`)
**Route:** `/partner/packages`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Package list table
- Search packages
- Filter packages
- Package details (name, duration, price, bookings, status)
- Status badges (active, draft)
- Actions: view, edit, delete
- Add new package button

**Future Features (API Integration):**
- [ ] CRUD operations with database
- [ ] Bulk actions (activate, deactivate, delete)
- [ ] Duplicate package
- [ ] Package templates
- [ ] Import packages from CSV
- [ ] Export packages to CSV
- [ ] Package versioning
- [ ] Change history log
- [ ] Package scheduling (auto-publish date)
- [ ] A/B testing for package descriptions
- [ ] Package performance metrics
- [ ] SEO optimization tools
- [ ] Auto-translate package details
- [ ] Image management
- [ ] Pricing history
- [ ] Availability calendar
- [ ] Package dependencies (related packages)

---

### 2.3 Add Package Wizard (`AddPackageWizard.tsx`)
**Route:** `/partner/add-package`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- 4-step wizard:
  - Step 1: Basic info (name, duration, price, departure, airline, description)
  - Step 2: Hotel & transport (Makkah hotel, Madinah hotel, star ratings)
  - Step 3: Itinerary (day-by-day activities)
  - Step 4: Review & publish (checklist, draft save, publish)
- Progress indicator
- Navigation buttons
- Form validation UI

**Future Features (API Integration):**
- [ ] Save draft to database
- [ ] Auto-save progress
- [ ] Hotel verification via Google Places API
- [ ] Airline verification via FlightData API
- [ ] Price validation (min/max thresholds)
- [ ] Duplicate package detection
- [ ] Required fields validation
- [ ] Image upload for package
- [ ] Itinerary template library
- [ ] Copy itinerary from existing package
- [ ] Preview package before publish
- [ ] Submit for admin review
- [ ] Publish immediately or schedule
- [ ] AI-assisted package creation
- [ ] Auto-generate description from template
- [ ] Bulk upload packages

---

### 2.4 Agency Profile (`AgencyProfile.tsx`)
**Route:** `/agency/:id`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Agency header (logo, name, verified badge, rating, join date)
- Agency description
- Package list
- Customer reviews
- Contact information
- Agency statistics
- Contact agency button

**Future Features (API Integration):**
- [ ] Real agency data from database
- [ ] Edit profile (for agency owner)
- [ ] Update contact information
- [ ] Upload agency logo
- [ ] Upload agency photos
- [ ] Manage business hours
- [ ] Respond to reviews
- [ ] View profile analytics
- [ ] Verification status tracking
- [ ] Document upload for verification
- [ ] Social media links
- [ ] Agency website link
- [ ] Certificates display
- [ ] Team members list
- [ ] Public inquiry form
- [ ] Report incorrect information

---

## 3. Booking & Transaction Flows

### 3.1 Booking Select Room (`BookingSelectRoom.tsx`)
**Route:** `/booking/room`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Progress stepper (1-2-3)
- Room type options (Quad, Triple, Double)
- Room descriptions
- Pricing per room type
- Availability count
- Room bed configuration
- Selection state
- Continue button

**Future Features (API Integration):**
- [ ] Real-time room availability
- [ ] Dynamic pricing per room type
- [ ] Room photos
- [ ] Room amenities list
- [ ] Special requests textarea
- [ ] Room combination (mix types)
- [ ] Group booking discount
- [ ] Early bird pricing
- [ ] Last-minute deals
- [ ] Room upgrade offers
- [ ] Roommate matching service
- [ ] Child pricing options
- [ ] Extra bed options
- [ ] Save room preference

---

### 3.2 Booking Passenger Details (`BookingPassengerDetails.tsx`)
**Route:** `/booking/passenger`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Progress stepper
- Multi-passenger form
- Fields per passenger:
  - Full name (as per passport)
  - Passport number
  - Birth date
  - Gender
  - Phone number
- Add passenger button
- Remove passenger button
- Form validation UI
- Continue button

**Future Features (API Integration):**
- [ ] Save to database
- [ ] Passport OCR (scan & auto-fill)
- [ ] Passport validation (format check)
- [ ] Auto-fill from user profile
- [ ] Duplicate passenger detection
- [ ] Visa eligibility check
- [ ] Age-based pricing
- [ ] Infant/child options
- [ ] Emergency contact
- [ ] Special needs/requirements
- [ ] Meal preference
- [ ] Seat preference
- [ ] Travel insurance option
- [ ] Next of kin details
- [ ] Group leader designation
- [ ] Save passenger templates

---

### 3.3 Booking Summary (`BookingSummary.tsx`)
**Route:** `/booking/summary`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Progress stepper
- Package details summary
- Accommodation details
- Passenger list
- Price breakdown:
  - Price per person × passengers
  - Admin fee
  - Total
- Important notice
- Proceed to payment button
- Back button

**Future Features (API Integration):**
- [ ] Real-time price calculation
- [ ] Promo code/discount field
- [ ] Loyalty points redemption
- [ ] Payment plan options
- [ ] Installment calculator
- [ ] Currency selector
- [ ] Tax breakdown
- [ ] Service fee explanation
- [ ] Terms & conditions checkbox
- [ ] Cancellation policy display
- [ ] Price lock timer
- [ ] Save booking as draft
- [ ] Share booking summary
- [ ] Download summary PDF
- [ ] Price guarantee badge

---

### 3.4 Payment Confirmation (`PaymentConfirmation.tsx`)
**Route:** `/booking/payment`  
**Status:** ✅ Implemented

**Current Features (Dummy Data):**
- Success icon
- Booking ID display
- Booking summary
- Next steps information
- View booking history button
- Back to home button
- Support contact info

**Future Features (API Integration):**
- [ ] Real payment gateway integration (Xendit/Midtrans)
- [ ] Multiple payment methods:
  - Bank transfer
  - Credit/debit card
  - E-wallet (GoPay, OVO, Dana)
  - Virtual account
  - QRIS
- [ ] Payment receipt
- [ ] Email confirmation
- [ ] SMS confirmation
- [ ] WhatsApp notification
- [ ] Payment deadline
- [ ] Payment reminder emails
- [ ] Failed payment handling
- [ ] Retry payment option
- [ ] Refund processing
- [ ] Invoice download (PDF)
- [ ] Payment schedule (installments)
- [ ] Auto-charge saved payment method
- [ ] Fraud detection
- [ ] 3D Secure verification

---

## 4. Operational & Verification

### 4.1 Claims Queue Dashboard (Admin)
**Route:** `/admin/claims`  
**Status:** ⬜ Not Implemented

**Planned Features:**
- [ ] List of pending agency claims
- [ ] Claim details view
- [ ] Approve/reject claims
- [ ] Claim priority levels
- [ ] Search & filter claims
- [ ] Claim assignment to admin
- [ ] Claim history
- [ ] Agency communication log
- [ ] Document review
- [ ] Verification checklist
- [ ] Bulk approve/reject
- [ ] Claim statistics
- [ ] SLA tracking
- [ ] Escalation system
- [ ] Rejection reason templates
- [ ] Email notifications
- [ ] Audit trail

---

### 4.2 AI Brochure Scanner Upload
**Route:** `/scanner/upload`  
**Status:** ⬜ Not Implemented

**Planned Features:**
- [ ] Image upload (drag & drop)
- [ ] Multiple file upload
- [ ] Supported formats: JPG, PNG, PDF
- [ ] File size validation
- [ ] Image preview
- [ ] OCR processing indicator
- [ ] Processing status
- [ ] Cancel upload
- [ ] Upload history
- [ ] Tips for best results
- [ ] Example images
- [ ] Batch upload
- [ ] Scan from URL
- [ ] Mobile camera integration

---

### 4.3 AI Scan Results Review
**Route:** `/scanner/results`  
**Status:** ⬜ Not Implemented

**Planned Features:**
- [ ] Extracted data display
- [ ] Confidence scores per field
- [ ] Edit extracted data
- [ ] Add missing information
- [ ] Side-by-side comparison (original vs extracted)
- [ ] Save as draft package
- [ ] Discard scan
- [ ] Re-scan image
- [ ] Manual override options
- [ ] Add new agency from scan
- [ ] Link to existing agency
- [ ] Export scan data
- [ ] Scan history
- [ ] Accuracy metrics
- [ ] Feedback loop for AI improvement

---

### 4.4 Verified Partner Directory
**Route:** `/verified-partners`  
**Status:** ⬜ Not Implemented

**Planned Features:**
- [ ] List of all verified agencies
- [ ] Search agencies
- [ ] Filter by location
- [ ] Filter by rating
- [ ] Filter by package count
- [ ] Agency cards with key info
- [ ] View agency profile
- [ ] Verification badge
- [ ] License number display
- [ ] Contact agency button
- [ ] Report issue
- [ ] Sort options
- [ ] Map view
- [ ] Agency comparison
- [ ] Reviews preview
- [ ] Recent activity

---

### 4.5 View Certificate Dashboard
**Route:** `/certificates`  
**Status:** ⬜ Not Implemented

**Planned Features:**
- [ ] Certificate list
- [ ] Certificate details
- [ ] Verification status
- [ ] Expiry date tracking
- [ ] Download certificate
- [ ] Print certificate
- [ ] Share certificate
- [ ] QR code verification
- [ ] Blockchain verification (future)
- [ ] Certificate history
- [ ] Renewal reminders
- [ ] Invalid certificate report
- [ ] Certificate templates

---

### 4.6 Document Verified Success
**Route:** `/document-verified`  
**Status:** ⬜ Not Implemented

**Planned Features:**
- [ ] Success confirmation
- [ ] Document preview
- [ ] Verification badge
- [ ] Verification date
- [ ] Verified by information
- [ ] Download verified document
- [ ] Continue to next step
- [ ] Share verification status
- [ ] Add to profile

---

## 5. Specialized Interactions

### 5.1 Passport Upload Interaction
**Route:** `/upload-passport`  
**Status:** ⬜ Not Implemented

**Planned Features:**
- [ ] Camera capture (mobile)
- [ ] File upload
- [ ] Drag & drop
- [ ] Image guidelines
- [ ] Real-time validation
- [ ] Image quality check
- [ ] Auto-crop & rotate
- [ ] OCR preview
- [ ] Extracted data preview
- [ ] Confirm & save
- [ ] Retake photo
- [ ] Multiple passport support
- [ ] Passport expiry check
- [ ] Data privacy notice
- [ ] Secure upload encryption

---

### 5.2 Claim Success Package Verified
**Route:** `/claim-success`  
**Status:** ⬜ Not Implemented

**Planned Features:**
- [ ] Success confirmation
- [ ] Package verification badge
- [ ] Verified details summary
- [ ] Verification certificate
- [ ] Share verification
- [ ] Download proof
- [ ] Notify agency
- [ ] View verified package
- [ ] Continue browsing
- [ ] Trust badge display
- [ ] Verification timestamp

---

## 📊 Feature Priority Matrix

### P0 (Critical - Launch Blockers)
- Complete all booking flow screens
- Partner dashboard basics
- Package management CRUD
- User profile & documents
- Search & compare functionality

### P1 (High Priority - Post-Launch)
- Payment gateway integration
- Real API integrations (Google Places, FlightData)
- Document upload & OCR
- Review system
- Agency verification

### P2 (Medium Priority - Growth)
- AI Brochure Scanner
- Advanced analytics
- Mobile apps (Capacitor)
- Notification system
- Multi-language support

### P3 (Nice to Have - Future)
- Blockchain verification
- Video reviews
- Virtual hotel tours
- AI-assisted package creation
- Advanced fraud detection

---

## 🔗 Future API Integrations

1. **Google Maps Platform**
   - Places API (hotel verification)
   - Distance Matrix API
   - Street View API
   - Geocoding API

2. **Flight Data**
   - Amadeus API
   - Skyscanner API
   - FlightRadar24 API

3. **Government Systems**
   - Kemenag SISKOPATUH API
   - Imigrasi API (passport validation)
   - Dukcapil API (citizen data)

4. **Payment Gateways**
   - Xendit
   - Midtrans
   - Stripe (international)

5. **Authentication**
   - Supabase Auth
   - Clerk
   - Google OAuth
   - WhatsApp OAuth

6. **Storage & OCR**
   - Cloudflare R2
   - AWS S3
   - Google Cloud Vision
   - Tesseract.js

7. **Communication**
   - SendGrid (emails)
   - Twilio (SMS)
   - WhatsApp Business API
   - Firebase Cloud Messaging (push)

---

**This document will be updated as features are implemented and new requirements emerge.**
