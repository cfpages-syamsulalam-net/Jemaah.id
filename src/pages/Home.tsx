import { Search, Plane, ShieldCheck, MapPin, Star, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card, CardContent } from "../components/ui/Card"
import { Badge } from "../components/ui/Badge"
import { Input } from "../components/ui/Input"

const FEATURED_PACKAGES = [
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
            <Card key={pkg.id} className="p-0 overflow-hidden hover:shadow-lg transition-shadow border-primary/5 group cursor-pointer">
              <div className="h-48 bg-slate-100 relative overflow-hidden">
                 <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary/30 font-bold uppercase tracking-widest text-xl">
                   {pkg.airline}
                 </div>
                 <div className="absolute top-4 left-4">
                   <Badge variant="success" className="bg-white/90 backdrop-blur-sm text-primary border-none">
                     {pkg.duration}
                   </Badge>
                 </div>
                 {pkg.verified && (
                   <div className="absolute top-4 right-4 h-8 w-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                     <ShieldCheck className="h-5 w-5 text-primary" />
                   </div>
                 )}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{pkg.agency}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-slate-900">4.9</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-slate-900 text-xl mb-4 group-hover:text-primary transition-colors">
                  {pkg.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <Plane className="h-4 w-4 text-slate-400" />
                    <span>{pkg.airline} • {pkg.departure}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span>{pkg.hotelMakkah} ({pkg.distance} ke Masjid)</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-primary/5 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-bold tracking-widest">Mulai Dari</span>
                    <span className="text-2xl font-display font-bold text-primary">Rp {pkg.price}</span>
                  </div>
                  <Button size="sm" variant="secondary">Detail</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
