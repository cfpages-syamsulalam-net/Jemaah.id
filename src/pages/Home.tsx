import { Search, Plane, ShieldCheck, MapPin, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { Badge } from "../components/ui/Badge"
import { Input } from "../components/ui/Input"
import { PackageCard, type Package } from "../components/shared/PackageCard"

const FEATURED_PACKAGES: Package[] = [
  {
    id: 1,
    agency: "Patuhi Travel",
    name: "Umroh Syawal Berkah",
    price: "29.500.000",
    duration: "9 Hari",
    airline: "Saudia Airlines",
    hotelMakkah: "Hilton Suites",
    hotelMakkahStar: 5,
    distance: "150m",
    departure: "Jakarta",
    verified: true,
  },
  {
    id: 2,
    agency: "Amanah Wisata",
    name: "Umroh Plus Turki Premium",
    price: "35.800.000",
    duration: "12 Hari",
    airline: "Turkish Airlines",
    hotelMakkah: "Movenpick Makkah",
    hotelMakkahStar: 5,
    distance: "50m",
    departure: "Surabaya",
    verified: true,
  },
  {
    id: 3,
    agency: "Berkah Jannah",
    name: "Umroh Hemat Ramadhan",
    price: "24.900.000",
    duration: "9 Hari",
    airline: "Lion Air",
    hotelMakkah: "Anjum Hotel",
    hotelMakkahStar: 4,
    distance: "350m",
    departure: "Makassar",
    verified: true,
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge variant="primary" className="mb-6 py-1 px-4 text-sm">
            Platform Independen #1 di Indonesia
          </Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Ibadah Tenang, <br />
            <span className="text-primary">Pilihan Terang.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Bandingkan paket Umroh & Haji dari ratusan travel terverifikasi secara Apple-to-Apple. 
            Transparan, jujur, dan diverifikasi langsung oleh Google Maps & FlightData.
          </p>

          {/* Smart Search Bar */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-2 border-primary/5 shadow-lg">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <Input placeholder="Kota Embarkasi (Jakarta, Surabaya...)" className="pl-10 h-12 border-none shadow-none focus-visible:ring-0" />
                </div>
                <div className="h-10 w-[1px] bg-primary/5 hidden md:block self-center" />
                <div className="flex-1 relative">
                  <Plane className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <Input placeholder="Bulan Keberangkatan" className="pl-10 h-12 border-none shadow-none focus-visible:ring-0" />
                </div>
                <Button size="lg" className="h-12 px-8 font-bold gap-2">
                  <Search className="h-5 w-5" />
                  Cari Paket
                </Button>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-900 mb-1 text-lg">Travel Terverifikasi</h3>
              <p className="text-sm text-slate-500">Izin PPIU/PIHK divalidasi langsung ke database Kemenag RI.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-900 mb-1 text-lg">Jarak Hotel Akurat</h3>
              <p className="text-sm text-slate-500">Diverifikasi via Google Maps untuk jarak asli ke pelataran Masjid.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Plane className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-900 mb-1 text-lg">Kepastian Maskapai</h3>
              <p className="text-sm text-slate-500">Status Direct/Transit & tipe pesawat ditarik dari FlightData API.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Paket Populer Bulan Ini</h2>
            <p className="text-slate-500">Pilihan terbaik untuk keberangkatan terdekat.</p>
          </div>
          <Button variant="ghost" className="gap-2 text-primary font-bold">
            Lihat Semua <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>
    </div>
  )
}
