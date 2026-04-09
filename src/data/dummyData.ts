// Centralized dummy data for all screens

export interface Package {
  id: number
  agency: string
  name: string
  price: string
  priceNumeric: number
  duration: string
  airline: string
  hotelMakkah: string
  hotelMakkahStar: number
  hotelMadinah: string
  hotelMadinahStar: number
  distance: string
  departure: string
  verified: boolean
  rating: number
  reviews: number
  image?: string
  includes?: string[]
  itinerary?: DayItinerary[]
}

export interface DayItinerary {
  day: number
  title: string
  description: string
}

export interface Agency {
  id: number
  name: string
  logo?: string
  rating: number
  reviews: number
  verified: boolean
  packagesCount: number
  joinedDate: string
  location: string
  description: string
}

export interface Booking {
  id: string
  packageName: string
  agency: string
  date: string
  status: 'upcoming' | 'completed' | 'cancelled'
  passengers: number
  totalPrice: string
  roomType: string
}

export interface Review {
  id: number
  userName: string
  rating: number
  date: string
  comment: string
  packageName: string
}

export interface SearchHistory {
  id: number
  departure: string
  month: string
  duration: string
  results: number
  date: string
}

export interface Document {
  id: number
  type: 'passport' | 'visa' | 'vaccine'
  name: string
  uploadDate: string
  status: 'verified' | 'pending' | 'rejected'
}

// Dummy Packages
export const DUMMY_PACKAGES: Package[] = [
  {
    id: 1,
    agency: "Patuhi Travel",
    name: "Umroh Syawal Berkah",
    price: "29.500.000",
    priceNumeric: 29500000,
    duration: "9 Hari",
    airline: "Saudia Airlines",
    hotelMakkah: "Hilton Suites",
    hotelMakkahStar: 5,
    hotelMadinah: "Anwar Al Madinah",
    hotelMadinahStar: 4,
    distance: "150m",
    departure: "Jakarta",
    verified: true,
    rating: 4.9,
    reviews: 127,
    includes: ["Visa Umroh", "Tiket Pesawat PP", "Hotel Bintang 4-5", "Makan 3x Sehari", "Pembimbing Ibadah", "Asuransi"],
    itinerary: [
      { day: 1, title: "Jakarta - Madinah", description: "Berkumpul di Bandara Soekarno-Hatta. Penerbangan ke Madinah." },
      { day: 2, title: "Madinah", description: "Check-in hotel. Ziarah Masjid Nabawi." },
      { day: 3, title: "Madinah", description: "Ziarah tempat bersejarah Madinah." },
      { day: 4, title: "Madinah - Makkah", description: "Perjalanan ke Makkah via Bir Ali. Niat Umroh." },
      { day: 5, title: "Makkah", description: "Tawaf, Sa'i, Tahallul. Ibadah di Masjidil Haram." },
      { day: 6, title: "Makkah", description: "Ibadah sunnah dan dzikir." },
      { day: 7, title: "Makkah", description: "Ibadah bebas." },
      { day: 8, title: "Makkah - Jakarta", description: "Persiapan pulang. Penerbangan ke Jakarta." },
      { day: 9, title: "Jakarta", description: "Tiba di Jakarta." }
    ]
  },
  {
    id: 2,
    agency: "Amanah Wisata",
    name: "Umroh Plus Turki Premium",
    price: "35.800.000",
    priceNumeric: 35800000,
    duration: "12 Hari",
    airline: "Turkish Airlines",
    hotelMakkah: "Movenpick Makkah",
    hotelMakkahStar: 5,
    hotelMadinah: "Pullman Zamzam",
    hotelMadinahStar: 5,
    distance: "50m",
    departure: "Surabaya",
    verified: true,
    rating: 4.8,
    reviews: 98,
    includes: ["Visa Umroh", "Tiket Pesawat PP", "Hotel Bintang 5", "Makan 3x Sehari", "City Tour Turki", "Pembimbing Ibadah"],
    itinerary: []
  },
  {
    id: 3,
    agency: "Berkah Jannah",
    name: "Umroh Hemat Ramadhan",
    price: "24.900.000",
    priceNumeric: 24900000,
    duration: "9 Hari",
    airline: "Lion Air",
    hotelMakkah: "Anjum Hotel",
    hotelMakkahStar: 4,
    hotelMadinah: "Millennium Al Aqeeq",
    hotelMadinahStar: 4,
    distance: "350m",
    departure: "Makassar",
    verified: true,
    rating: 4.7,
    reviews: 64,
    includes: ["Visa Umroh", "Tiket Pesawat PP", "Hotel Bintang 4", "Makan 3x Sehari", "Pembimbing Ibadah"],
    itinerary: []
  },
  {
    id: 4,
    agency: "Citra Haramain",
    name: "Umroh VIP 12 Hari",
    price: "45.000.000",
    priceNumeric: 45000000,
    duration: "12 Hari",
    airline: "Garuda Indonesia",
    hotelMakkah: "Fairmont Clock Tower",
    hotelMakkahStar: 5,
    hotelMadinah: "The Oberoi Madinah",
    hotelMadinahStar: 5,
    distance: "0m",
    departure: "Jakarta",
    verified: true,
    rating: 5.0,
    reviews: 42,
    includes: ["Visa Umroh", "Tiket Garuda PP", "Hotel Bintang 5", "Makan 3x Sehari", "Pembimbing Khusus", "Asuransi Premium"],
    itinerary: []
  },
  {
    id: 5,
    agency: "Safarindo Dakwah",
    name: "Umroh Ekonomi Plus",
    price: "26.500.000",
    priceNumeric: 26500000,
    duration: "9 Hari",
    airline: "Sriwijaya Air",
    hotelMakkah: "Le Meridien Towers",
    hotelMakkahStar: 4,
    hotelMadinah: "Al Ewaan Hotel",
    hotelMadinahStar: 3,
    distance: "500m",
    departure: "Bandung",
    verified: true,
    rating: 4.6,
    reviews: 89,
    includes: ["Visa Umroh", "Tiket Pesawat PP", "Hotel Bintang 3-4", "Makan 3x Sehari", "Pembimbing Ibadah"],
    itinerary: []
  },
  {
    id: 6,
    agency: "Nusantara Travel",
    name: "Umroh Awal Tahun",
    price: "31.200.000",
    priceNumeric: 31200000,
    duration: "10 Hari",
    airline: "Emirates",
    hotelMakkah: "Conrad Makkah",
    hotelMakkahStar: 5,
    hotelMadinah: "Dar Al Taqwa",
    hotelMadinahStar: 4,
    distance: "200m",
    departure: "Jakarta",
    verified: true,
    rating: 4.8,
    reviews: 73,
    includes: ["Visa Umroh", "Tiket Pesawat PP", "Hotel Bintang 4-5", "Makan 3x Sehari", "Pembimbing Ibadah"],
    itinerary: []
  }
]

// Dummy Agencies
export const DUMMY_AGENCIES: Agency[] = [
  {
    id: 1,
    name: "Patuhi Travel",
    rating: 4.9,
    reviews: 342,
    verified: true,
    packagesCount: 24,
    joinedDate: "Jan 2020",
    location: "Jakarta Selatan",
    description: "Travel terpercaya dengan izin resmi Kemenag. Spesialisasi Umroh dan Haji Plus."
  },
  {
    id: 2,
    name: "Amanah Wisata",
    rating: 4.8,
    reviews: 256,
    verified: true,
    packagesCount: 18,
    joinedDate: "Mar 2019",
    location: "Surabaya",
    description: "Melayani jamaah dari seluruh Indonesia dengan pelayanan terbaik."
  },
  {
    id: 3,
    name: "Berkah Jannah",
    rating: 4.7,
    reviews: 189,
    verified: true,
    packagesCount: 15,
    joinedDate: "Jul 2021",
    location: "Makassar",
    description: "Paket umroh hemat berkualitas untuk semua kalangan."
  }
]

// Dummy Bookings
export const DUMMY_BOOKINGS: Booking[] = [
  {
    id: "BK-2026-001",
    packageName: "Umroh Syawal Berkah",
    agency: "Patuhi Travel",
    date: "15 Mei 2026",
    status: "upcoming",
    passengers: 2,
    totalPrice: "59.000.000",
    roomType: "Quad"
  },
  {
    id: "BK-2025-089",
    packageName: "Umroh Ramadhan",
    agency: "Amanah Wisata",
    date: "10 Mar 2025",
    status: "completed",
    passengers: 4,
    totalPrice: "99.600.000",
    roomType: "Triple"
  }
]

// Dummy Reviews
export const DUMMY_REVIEWS: Review[] = [
  {
    id: 1,
    userName: "Ahmad Rizki",
    rating: 5,
    date: "2 hari lalu",
    comment: "Alhamdulillah, pelayanan sangat memuaskan. Pembimbing ibadah sangat membantu.",
    packageName: "Umroh Syawal Berkah"
  },
  {
    id: 2,
    userName: "Siti Nurhaliza",
    rating: 4,
    date: "1 minggu lalu",
    comment: "Hotel dekat dengan Masjidil Haram. Makanan enak dan bervariasi.",
    packageName: "Umroh Plus Turki Premium"
  }
]

// Dummy Search History
export const DUMMY_SEARCH_HISTORY: SearchHistory[] = [
  {
    id: 1,
    departure: "Jakarta",
    month: "Mei 2026",
    duration: "9 Hari",
    results: 24,
    date: "3 hari lalu"
  },
  {
    id: 2,
    departure: "Surabaya",
    month: "Jun 2026",
    duration: "12 Hari",
    results: 18,
    date: "1 minggu lalu"
  },
  {
    id: 3,
    departure: "Makassar",
    month: "Jul 2026",
    duration: "9 Hari",
    results: 12,
    date: "2 minggu lalu"
  }
]

// Dummy Documents
export const DUMMY_DOCUMENTS: Document[] = [
  {
    id: 1,
    type: "passport",
    name: "Paspor - Ahmad Rizki",
    uploadDate: "5 Apr 2026",
    status: "verified"
  },
  {
    id: 2,
    type: "visa",
    name: "Visa Umroh",
    uploadDate: "6 Apr 2026",
    status: "pending"
  }
]
