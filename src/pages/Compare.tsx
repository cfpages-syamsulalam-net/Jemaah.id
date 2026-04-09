import { ShieldCheck, X, Check, Info } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import type { Package } from "../components/shared/PackageCard"

const MOCK_PACKAGES: Package[] = [
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
    id: 4,
    agency: "Labbaika Tours",
    name: "Umroh VIP Awal Musim",
    price: "42.000.000",
    duration: "9 Hari",
    airline: "Garuda Indonesia",
    hotelMakkah: "Dar Al Tawhid",
    hotelMakkahStar: 5,
    distance: "0m",
    departure: "Jakarta",
    verified: true,
  }
]

export default function Compare() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Perbandingan Paket</h1>
          <p className="text-slate-500">Analisis Apple-to-Apple untuk membantu keputusan Anda.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <X className="h-4 w-4" />
          Bersihkan Semua
        </Button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-1/4 p-4 text-left bg-background sticky left-0 z-10 border-b border-primary/5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Fitur & Fasilitas</span>
                </th>
                {MOCK_PACKAGES.map(pkg => (
                  <th key={pkg.id} className="w-1/4 p-4 text-center border-b border-primary/5 bg-surface">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{pkg.agency}</span>
                      <h3 className="font-display font-bold text-slate-900 text-sm line-clamp-1">{pkg.name}</h3>
                      <Badge variant="success" className="mt-2">Rp {pkg.price}</Badge>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {/* Basic Info Section */}
              <tr className="bg-primary/5">
                <td colSpan={MOCK_PACKAGES.length + 1} className="p-2 px-4 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                  Logistik & Penerbangan
                </td>
              </tr>
              <tr>
                <td className="p-4 text-sm font-medium text-slate-600 bg-background sticky left-0 z-10">Maskapai</td>
                {MOCK_PACKAGES.map(pkg => (
                  <td key={pkg.id} className="p-4 text-center text-sm text-slate-900">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-bold">{pkg.airline}</span>
                      <span className="text-xs text-slate-500">Direct Flight</span>
                      {pkg.airline === "Garuda Indonesia" && <Badge variant="primary" className="text-[10px] py-0">Plus</Badge>}
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 text-sm font-medium text-slate-600 bg-background sticky left-0 z-10">Kota Keberangkatan</td>
                {MOCK_PACKAGES.map(pkg => (
                  <td key={pkg.id} className="p-4 text-center text-sm text-slate-900">{pkg.departure}</td>
                ))}
              </tr>

              {/* Accommodation Section */}
              <tr className="bg-primary/5">
                <td colSpan={MOCK_PACKAGES.length + 1} className="p-2 px-4 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                  Akomodasi (Makkah)
                </td>
              </tr>
              <tr>
                <td className="p-4 text-sm font-medium text-slate-600 bg-background sticky left-0 z-10">Nama Hotel</td>
                {MOCK_PACKAGES.map(pkg => (
                  <td key={pkg.id} className="p-4 text-center text-sm text-slate-900 font-bold">{pkg.hotelMakkah}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 text-sm font-medium text-slate-600 bg-background sticky left-0 z-10">Bintang & Jarak</td>
                {MOCK_PACKAGES.map(pkg => (
                  <td key={pkg.id} className="p-4 text-center text-sm text-slate-900">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex gap-0.5">
                        {Array.from({ length: pkg.hotelMakkahStar }).map((_, i) => (
                          <ShieldCheck key={i} className="h-3 w-3 text-primary" />
                        ))}
                      </div>
                      <span className={pkg.distance === "0m" ? "text-primary font-bold" : "text-slate-500"}>
                        {pkg.distance} ke Masjid
                      </span>
                      {pkg.distance === "0m" && <Badge variant="success" className="text-[10px] py-0">Keunggulan Utama</Badge>}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Analysis Section */}
              <tr className="bg-primary/5">
                <td colSpan={MOCK_PACKAGES.length + 1} className="p-2 px-4 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                  Analisis Jemaah.id (Smart Insight)
                </td>
              </tr>
              <tr>
                <td className="p-4 text-sm font-medium text-slate-600 bg-background sticky left-0 z-10">Kelebihan (Plus)</td>
                {MOCK_PACKAGES.map(pkg => (
                  <td key={pkg.id} className="p-4">
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li className="flex items-center gap-2 text-primary font-medium">
                        <Check className="h-3 w-3" />
                        {pkg.price === "29.500.000" ? "Harga sangat kompetitif" : "Lokasi hotel paling strategis"}
                      </li>
                      <li className="flex items-center gap-2 text-primary font-medium">
                        <Check className="h-3 w-3" />
                        Sudah termasuk asuransi
                      </li>
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 text-sm font-medium text-slate-600 bg-background sticky left-0 z-10">Catatan (Minus)</td>
                {MOCK_PACKAGES.map(pkg => (
                  <td key={pkg.id} className="p-4">
                    <ul className="text-xs text-slate-500 space-y-2">
                      <li className="flex items-center gap-2">
                        <Info className="h-3 w-3" />
                        {pkg.distance === "150m" ? "Perlu jalan kaki singkat" : "Harga di atas rata-rata"}
                      </li>
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <Button size="lg" className="px-12 font-bold h-14 text-lg">
          Hubungi Travel Sekarang
        </Button>
      </div>
    </div>
  )
}
