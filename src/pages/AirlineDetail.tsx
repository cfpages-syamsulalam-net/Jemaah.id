import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, Plane, Star, Clock, Shield, Wifi, UtensilsCrossed, Armchair, Briefcase, Monitor, MapPin, Check, X, Award, Users, Zap, Coffee } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

const AIRLINE_DATA: Record<string, any> = {
  1: {
    id: 1,
    name: "Saudia Airlines",
    code: "SV",
    country: "Arab Saudi",
    founded: 1945,
    fleet: 145,
    rating: 4.2,
    reviews: 2840,
    description: "Saudia Airlines adalah maskapai nasional Arab Saudi dan salah satu maskapai terbesar di Timur Tengah. Sebagai maskapai flag carrier Kerajaan Arab Saudi, Saudia memiliki keunggulan unik dalam melayani jamaah Umroh dan Haji.",
    hub: "Bandara Internasional King Abdulaziz, Jeddah",
    website: "www.flysaudia.com",
    phone: "+966 9200 22222",

    // === COMPARISON POINTS ===
    
    // 1. Route & Flight Pattern
    flightType: "Direct (Tanpa Transit)",
    flightDuration: "9 jam 30 menit (Jakarta → Jeddah)",
    destination: "Jeddah (King Abdulaziz) / Madinah",
    
    // 2. Aircraft
    aircraftType: "Boeing 787-9 Dreamliner / Boeing 777-300ER",
    aircraftAge: "Rata-rata 7 tahun",
    
    // 3. Seat Comfort
    seatPitch: "32-33 inci (Economy)",
    seatWidth: "17.2 inci",
    recline: "Ya, hingga 6 inci",
    
    // 4. Baggage
    checkedBaggage: "46 kg (2x23 kg) - 2 pieces",
    cabinBaggage: "7 kg (1 piece + laptop bag)",
    
    // 5. Meals & Catering
    mealService: "Halal Certified - 2x meal service",
    mealOptions: "Menu Indonesia & Arab tersedia",
    specialMeal: "Request menu khusus (diabetic, child, etc.)",
    
    // 6. In-Flight Entertainment
    entertainment: "Personal IFE system di setiap seat",
    screenType: "Layar sentuh 10-13 inci",
    content: "100+ film, musik, TV shows",
    
    // 7. Connectivity
    wifi: "Tersedia (berbayar)",
    usbPort: "Ya, di setiap seat",
    powerOutlet: "Ya, AC power outlet",
    
    // 8. Special Services for Umroh/Hajj
    prayerFacility: "Musholla di pesawat, arah kiblat ditandai",
    arabicCrew: "Kru bilingual (Arab + Inggris)",
    indonesianCrew: "Kru Bahasa Indonesia tersedia di rute tertentu",
    quranAvailable: "Al-Quran digital di IFE",
    
    // 9. Punctuality
    onTimePerformance: "82% tepat waktu",
    averageDelay: "Rata-rata delay 15 menit",
    
    // 10. Lounge Access
    loungeIncluded: "Business Class only",
    loungePayPerUse: "Tersedia ($35/orang)",
    
    // 11. Frequent Flyer
    loyaltyProgram: "AlFursan (Saudia Frequent Flyer)",
    milesEarning: "100% miles untuk Umroh/Hajj routes",
    
    // 12. Safety & Certification
    safetyRating: "7/7 bintang (AirlineRatings.com)",
    iosacertified: "Ya, IOSA Certified",
    
    // Pros & Cons
    pros: [
      "Penerbangan langsung tanpa transit (hemat 4-8 jam)",
      "Baggage allowance besar (46kg vs 20-30kg maskapai lain)",
      "Musholla di pesawat dengan penanda kiblat",
      "Menu makanan Halal certified & ada menu Indonesia",
      "Al-Quran digital tersedia di IFE",
      "Kru berpengalaman dengan jamaah Umroh/Haji",
      "Safety rating tertinggi (7/7 bintang)",
    ],
    cons: [
      "WiFi berbayar (tidak gratis)",
      "Lounge hanya untuk Business Class",
      "Kru Bahasa Indonesia terbatas di rute tertentu",
      "IFE content lebih sedikit dibanding Emirates/Qatar",
    ]
  }
}

function ComparisonRow({ label, value, icon: Icon }: { label: string; value: string; icon?: any }) {
  return (
    <div className="flex items-start justify-between py-3 border-b border-slate-100 last:border-0">
      <div className="flex items-center gap-3 flex-1">
        {Icon && <Icon className="h-5 w-5 text-slate-400 flex-shrink-0" />}
        <span className="text-sm font-medium text-slate-600">{label}</span>
      </div>
      <span className="text-sm font-bold text-slate-900 text-right ml-4">{value}</span>
    </div>
  )
}

function CheckItem({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
      <span className="text-slate-700">{label}</span>
    </li>
  )
}

function XItem({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
      <span className="text-slate-700">{label}</span>
    </li>
  )
}

export default function AirlineDetail() {
  const { id } = useParams()
  const airline = AIRLINE_DATA[id || '1'] || AIRLINE_DATA['1']

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link to="/compare" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary mb-6">
        <ChevronLeft className="h-4 w-4" />
        <span>Kembali ke Perbandingan</span>
      </Link>

      {/* Airline Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-display font-bold text-slate-900">{airline.name}</h1>
              <Badge variant="success">
                <Shield className="h-3 w-3 mr-1" />
                Diverifikasi
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {airline.rating} ({airline.reviews} ulasan)
              </span>
              <span>•</span>
              <span>{airline.country}</span>
              <span>•</span>
              <span>Code: {airline.code}</span>
            </div>
            <p className="text-slate-500">{airline.description}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Simpan</Button>
            <Button variant="outline" size="sm">Bagikan</Button>
          </div>
        </div>
      </div>

      {/* Airline Quick Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <Plane className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">{airline.fleet}</div>
            <div className="text-xs text-slate-500">Total Armada</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">{airline.founded}</div>
            <div className="text-xs text-slate-500">Tahun Berdiri</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Award className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">7/7</div>
            <div className="text-xs text-slate-500">Safety Rating</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">{airline.onTimePerformance}</div>
            <div className="text-xs text-slate-500">Tepat Waktu</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* FLIGHT DETAILS */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Plane className="h-6 w-6 text-primary" />
                Detail Penerbangan
              </h2>
              <ComparisonRow label="Tipe Penerbangan" value={airline.flightType} icon={Plane} />
              <ComparisonRow label="Durasi Penerbangan" value={airline.flightDuration} icon={Clock} />
              <ComparisonRow label="Tujuan" value={airline.destination} icon={MapPin} />
              <ComparisonRow label="Jenis Pesawat" value={airline.aircraftType} icon={Plane} />
              <ComparisonRow label="Usia Rata-rata Pesawat" value={airline.aircraftAge} icon={Clock} />
              <ComparisonRow label="Performance Tepat Waktu" value={airline.onTimePerformance} icon={Zap} />
            </CardContent>
          </Card>

          {/* SEAT COMFORT */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Armchair className="h-6 w-6 text-primary" />
                Kenyamanan Kursi (Economy Class)
              </h2>
              <ComparisonRow label="Jarak Antar Kursi (Pitch)" value={airline.seatPitch} icon={Armchair} />
              <ComparisonRow label="Lebar Kursi" value={airline.seatWidth} icon={Armchair} />
              <ComparisonRow label="Recline" value={airline.recline} icon={Armchair} />
            </CardContent>
          </Card>

          {/* BAGGAGE */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-primary" />
                Bagasi
              </h2>
              <ComparisonRow label="Bagasi Terdaftar" value={airline.checkedBaggage} icon={Briefcase} />
              <ComparisonRow label="Bagasi Kabin" value={airline.cabinBaggage} icon={Briefcase} />
            </CardContent>
          </Card>

          {/* MEALS */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <UtensilsCrossed className="h-6 w-6 text-primary" />
                Makanan & Minuman
              </h2>
              <ComparisonRow label="Layanan Makan" value={airline.mealService} icon={UtensilsCrossed} />
              <ComparisonRow label="Pilihan Menu" value={airline.mealOptions} icon={UtensilsCrossed} />
              <ComparisonRow label="Menu Khusus" value={airline.specialMeal} icon={UtensilsCrossed} />
            </CardContent>
          </Card>

          {/* ENTERTAINMENT & CONNECTIVITY */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Monitor className="h-6 w-6 text-primary" />
                Hiburan & Konektivitas
              </h2>
              <ComparisonRow label="In-Flight Entertainment" value={airline.entertainment} icon={Monitor} />
              <ComparisonRow label="Layar" value={airline.screenType} icon={Monitor} />
              <ComparisonRow label="Konten" value={airline.content} icon={Monitor} />
              <ComparisonRow label="WiFi" value={airline.wifi} icon={Wifi} />
              <ComparisonRow label="USB Port" value={airline.usbPort} icon={Zap} />
              <ComparisonRow label="Power Outlet" value={airline.powerOutlet} icon={Zap} />
            </CardContent>
          </Card>

          {/* SPECIAL UMROH/HAJJ SERVICES */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Coffee className="h-6 w-6 text-primary" />
                Layanan Khusus Umroh/Haji
              </h2>
              <ComparisonRow label="Musholla di Pesawat" value={airline.prayerFacility} icon={Coffee} />
              <ComparisonRow label="Kru Bilingual Arab" value={airline.arabicCrew} icon={Users} />
              <ComparisonRow label="Kru Bahasa Indonesia" value={airline.indonesianCrew} icon={Users} />
              <ComparisonRow label="Al-Quran Digital" value={airline.quranAvailable} icon={Coffee} />
            </CardContent>
          </Card>

          {/* PROS & CONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Keunggulan (Plus)
                </h3>
                <ul className="space-y-2">
                  {airline.pros.map((pro: string, i: number) => (
                    <CheckItem key={i} label={pro} />
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2">
                  <X className="h-5 w-5" />
                  Kekurangan (Minus)
                </h3>
                <ul className="space-y-2">
                  {airline.cons.map((con: string, i: number) => (
                    <XItem key={i} label={con} />
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Informasi Maskapai</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-slate-500">Hub Utama</div>
                  <div className="font-bold text-slate-900">{airline.hub}</div>
                </div>
                <div>
                  <div className="text-slate-500">Website</div>
                  <a href={airline.website} className="font-bold text-primary hover:underline">{airline.website}</a>
                </div>
                <div>
                  <div className="text-slate-500">Telepon</div>
                  <div className="font-bold text-slate-900">{airline.phone}</div>
                </div>
                <div>
                  <div className="text-slate-500">Program Loyalitas</div>
                  <div className="font-bold text-slate-900">{airline.loyaltyProgram}</div>
                </div>
                <div>
                  <div className="text-slate-500">Sertifikasi</div>
                  <Badge variant="success" className="mt-1">IOSA Certified</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" size="lg">
            Kunjungi Website
          </Button>
        </div>
      </div>
    </div>
  )
}
