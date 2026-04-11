import { useState } from 'react'
import { ShieldCheck, X, Check, Info, Plane, Star, MapPin, Clock, Shield, Building, Moon, ChevronDown, ChevronUp } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { DUMMY_PACKAGES } from "../data/dummyData"

// Ambil 3 paket pertama untuk comparison
const COMPARE_PACKAGES = DUMMY_PACKAGES.slice(0, 3)

interface ComparisonRowProps {
  label: string
  values: string[]
  renderValues?: (pkg: typeof DUMMY_PACKAGES[0]) => React.ReactNode
  highlight?: 'best' | 'worst' | null
  highlightIndex?: number
}

function ComparisonRow({ label, values, renderValues, highlightIndex }: ComparisonRowProps) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
      <td className="p-4 text-sm font-medium text-slate-600 bg-white sticky left-0 z-10 border-r border-slate-100">
        {label}
      </td>
      {COMPARE_PACKAGES.map((pkg, idx) => (
        <td key={pkg.id} className={`p-4 text-center text-sm ${highlightIndex === idx ? 'bg-primary/5 font-bold text-primary' : 'text-slate-900'}`}>
          {renderValues ? renderValues(pkg) : values[idx]}
        </td>
      ))}
    </tr>
  )
}

function SectionHeader({ label, icon: Icon }: { label: string; icon?: any }) {
  return (
    <tr className="bg-primary/10">
      <td colSpan={COMPARE_PACKAGES.length + 1} className="p-3 px-4 text-xs font-bold text-primary uppercase tracking-widest border-r border-primary/20">
        {Icon && <Icon className="h-4 w-4 inline mr-2 -mt-0.5" />}
        {label}
      </td>
    </tr>
  )
}

export default function Compare() {
  const [airlineExpanded, setAirlineExpanded] = useState(false)
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Perbandingan Apple-to-Apple</h1>
          <p className="text-slate-500">Bandingkan {COMPARE_PACKAGES.length} paket secara detail dan transparan</p>
        </div>
        <Button variant="outline" className="gap-2">
          <X className="h-4 w-4" />
          Bersihkan
        </Button>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-lg">
        <table className="w-full border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-gradient-to-b from-primary/5 to-transparent">
              <th className="w-48 p-6 text-left bg-white sticky left-0 z-20 border-b-2 border-primary/10">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kategori</span>
              </th>
              {COMPARE_PACKAGES.map(pkg => (
                <th key={pkg.id} className="p-6 text-center border-b-2 border-primary/10 min-w-[280px]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-2xl">
                      {pkg.agency.charAt(0)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider block">{pkg.agency}</span>
                      <h3 className="font-display font-bold text-slate-900 text-base">{pkg.name}</h3>
                    </div>
                    <Badge variant="success" className="text-sm py-1 px-3">Rp {pkg.price}</Badge>
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-bold">{pkg.rating}</span>
                      <span className="text-slate-400">({pkg.reviews})</span>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {/* LOGISTICS */}
            <SectionHeader label="Logistik & Penerbangan" icon={Plane} />
            <ComparisonRow
              label="Maskapai"
              values={COMPARE_PACKAGES.map(p => p.airline)}
              renderValues={(pkg) => (
                <div className="flex flex-col items-center gap-1">
                  <Link to={`/airline/1`} className="font-bold text-primary hover:underline cursor-pointer">
                    {pkg.airline}
                  </Link>
                  <span className="text-xs text-slate-500">Direct Flight</span>
                  {pkg.airline === "Garuda Indonesia" && <Badge variant="primary" className="text-[10px]">Premium</Badge>}
                </div>
              )}
            />
            <ComparisonRow
              label="Kota Keberangkatan"
              values={COMPARE_PACKAGES.map(p => p.departure)}
            />
            <ComparisonRow
              label="Durasi Perjalanan"
              values={COMPARE_PACKAGES.map(p => p.duration)}
              renderValues={(pkg) => (
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span className="font-bold">{pkg.duration}</span>
                </div>
              )}
            />

            {/* Airline Details Toggle */}
            <tr
              className="bg-blue-50/50 cursor-pointer hover:bg-blue-50 transition-colors"
              onClick={() => setAirlineExpanded(!airlineExpanded)}
            >
              <td colSpan={COMPARE_PACKAGES.length + 1} className="p-3 px-4 text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center justify-between border-r border-blue-100">
                <span className="flex items-center gap-2">
                  <Plane className="h-4 w-4" />
                  Detail Maskapai ({airlineExpanded ? 'sembunyikan' : 'tampilkan'})
                </span>
                {airlineExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </td>
            </tr>

            {airlineExpanded && (
              <>
                <ComparisonRow
                  label="Tipe Penerbangan"
                  values={[]}
                  renderValues={(pkg) => (
                    <span className="font-bold text-slate-900">
                      {pkg.airline === "Turkish Airlines" ? "Transit (Istanbul)" : "Direct"}
                    </span>
                  )}
                />
                <ComparisonRow
                  label="Durasi ke Jeddah"
                  values={[]}
                  renderValues={(pkg) => (
                    <span className={pkg.airline === "Saudia Airlines" ? "font-bold text-primary" : ""}>
                      {pkg.airline === "Saudia Airlines" ? "9.5 jam" : pkg.airline === "Turkish Airlines" ? "14 jam" : "10 jam"}
                    </span>
                  )}
                />
                <ComparisonRow
                  label="Bagasi Terdaftar"
                  values={[]}
                  renderValues={(pkg) => (
                    <span className={pkg.airline === "Saudia Airlines" ? "font-bold text-primary" : ""}>
                      {pkg.airline === "Saudia Airlines" ? "46 kg (2x23kg)" : "30 kg"}
                    </span>
                  )}
                />
                <ComparisonRow
                  label="Bagasi Kabin"
                  values={["7 kg", "7 kg", "7 kg"]}
                />
                <ComparisonRow
                  label="Musholla di Pesawat"
                  values={[]}
                  renderValues={(pkg) => (
                    pkg.airline === "Saudia Airlines" || pkg.airline === "Garuda Indonesia" ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-slate-300 mx-auto" />
                    )
                  )}
                />
                <ComparisonRow
                  label="WiFi"
                  values={[]}
                  renderValues={(pkg) => (
                    <span className={pkg.airline === "Saudia Airlines" ? "text-amber-600" : "text-green-600"}>
                      {pkg.airline === "Saudia Airlines" ? "Berbayar" : "Gratis"}
                    </span>
                  )}
                />
                <ComparisonRow
                  label="IFE Screen Size"
                  values={[]}
                  renderValues={(pkg) => (
                    <span className={pkg.airline === "Turkish Airlines" ? "font-bold text-primary" : ""}>
                      {pkg.airline === "Saudia Airlines" ? '10-13"' : pkg.airline === "Turkish Airlines" ? '13.3"' : '10.6"'}
                    </span>
                  )}
                />
                <ComparisonRow
                  label="Menu Indonesia"
                  values={[]}
                  renderValues={(pkg) => (
                    pkg.airline === "Turkish Airlines" ? (
                      <X className="h-5 w-5 text-slate-300 mx-auto" />
                    ) : (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    )
                  )}
                />
                <ComparisonRow
                  label="Al-Quran Digital"
                  values={[]}
                  renderValues={(pkg) => (
                    pkg.airline === "Turkish Airlines" ? (
                      <X className="h-5 w-5 text-slate-300 mx-auto" />
                    ) : (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    )
                  )}
                />
                <ComparisonRow
                  label="Kru Bahasa Indonesia"
                  values={[]}
                  renderValues={(pkg) => (
                    pkg.airline === "Turkish Airlines" ? (
                      <X className="h-5 w-5 text-slate-300 mx-auto" />
                    ) : (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    )
                  )}
                />
                <ComparisonRow
                  label="Safety Rating"
                  values={[]}
                  renderValues={(pkg) => (
                    <span className={pkg.airline === "Garuda Indonesia" ? "text-amber-600" : "font-bold text-primary"}>
                      {pkg.airline === "Garuda Indonesia" ? "6/7 ⭐" : "7/7 ⭐"}
                    </span>
                  )}
                />
                <ComparisonRow
                  label="Usia Armada"
                  values={[]}
                  renderValues={(pkg) => (
                    <span className={pkg.airline === "Turkish Airlines" ? "font-bold text-primary" : ""}>
                      {pkg.airline === "Saudia Airlines" ? "7 tahun" : pkg.airline === "Turkish Airlines" ? "5 tahun" : "9 tahun"}
                    </span>
                  )}
                />
                <ComparisonRow
                  label="Frequent Flyer"
                  values={["AlFursan", "Miles&Smiles", "GarudaMiles"]}
                />
              </>
            )}

            {/* HOTEL MAKKAH */}
            <SectionHeader label="Akomodasi Makkah" icon={Building} />
            <ComparisonRow
              label="Nama Hotel"
              values={[]}
              renderValues={(pkg) => (
                <div>
                  <Link to={`/hotel/${pkg.id}`} className="font-bold text-primary hover:underline">
                    {pkg.hotelMakkah}
                  </Link>
                  <div className="flex gap-0.5 justify-center mt-1">
                    {Array.from({ length: pkg.hotelMakkahStar }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              )}
            />
            <ComparisonRow
              label="Jarak ke Masjidil Haram"
              values={[]}
              renderValues={(pkg) => (
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span className={pkg.distance === "0m" || pkg.distance === "50m" ? "text-primary font-bold" : "text-slate-700"}>
                      {pkg.distance}
                    </span>
                  </div>
                  {(pkg.distance === "0m" || pkg.distance === "50m") && (
                    <Badge variant="success" className="text-[10px]">Sangat Dekat</Badge>
                  )}
                </div>
              )}
              highlightIndex={COMPARE_PACKAGES.findIndex(p => p.distance === "0m" || p.distance === "50m")}
            />

            {/* HOTEL MADINAH */}
            <SectionHeader label="Akomodasi Madinah" icon={Moon} />
            <ComparisonRow
              label="Nama Hotel"
              values={[]}
              renderValues={(pkg) => (
                <div>
                  <span className="font-bold text-slate-900">{pkg.hotelMadinah}</span>
                  <div className="flex gap-0.5 justify-center mt-1">
                    {Array.from({ length: pkg.hotelMadinahStar }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              )}
            />

            {/* FASILITAS */}
            <SectionHeader label="Fasilitas & Pelayanan" icon={ShieldCheck} />
            
            {[
              { label: "Visa Umroh", key: "includes", check: "Visa" },
              { label: "Tiket Pesawat PP", key: "includes", check: "Tiket Pesawat" },
              { label: "Makan 3x Sehari", key: "includes", check: "Makan 3x" },
              { label: "Pembimbing Ibadah", key: "includes", check: "Pembimbing" },
              { label: "Asuransi Perjalanan", key: "includes", check: "Asuransi" },
              { label: "Handling & Perlengkapan", key: "includes", check: "Handling" },
              { label: "Air Zamzam", key: "includes", check: "Zamzam" },
              { label: "Laundry", key: "includes", check: "Laundry" },
            ].map(item => (
              <ComparisonRow
                key={item.label}
                label={item.label}
                values={[]}
                renderValues={(pkg) => (
                  pkg.includes?.some(i => i.toLowerCase().includes(item.check!.toLowerCase())) ? (
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-slate-300 mx-auto" />
                  )
                )}
              />
            ))}

            {/* SMART INSIGHT */}
            <SectionHeader label="Analisis Smart Insight" icon={Info} />
            <ComparisonRow
              label="Kelebihan (Plus)"
              values={[]}
              renderValues={(pkg) => (
                <ul className="text-xs text-left space-y-2">
                  <li className="flex items-start gap-2 text-primary font-medium">
                    <Check className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <span>{pkg.rating >= 4.9 ? "Rating tertinggi" : pkg.priceNumeric < 27000000 ? "Harga paling terjangkau" : "Hotel paling dekat"}</span>
                  </li>
                  <li className="flex items-start gap-2 text-primary font-medium">
                    <Check className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <span>{pkg.hotelMakkahStar >= 5 ? "Hotel bintang 5" : "Sudah termasuk asuransi"}</span>
                  </li>
                  <li className="flex items-start gap-2 text-primary font-medium">
                    <Check className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <span>Travel terverifikasi Kemenag</span>
                  </li>
                </ul>
              )}
            />
            <ComparisonRow
              label="Kekurangan (Minus)"
              values={[]}
              renderValues={(pkg) => (
                <ul className="text-xs text-left space-y-2">
                  <li className="flex items-start gap-2 text-slate-500">
                    <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <span>{pkg.distance === "350m" || pkg.distance === "500m" ? "Jarak hotel cukup jauh" : "Harga di atas rata-rata"}</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-500">
                    <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <span>Belum termasuk tipping guide</span>
                  </li>
                </ul>
              )}
            />

            {/* VERIFICATION */}
            <SectionHeader label="Status Verifikasi" icon={Shield} />
            <ComparisonRow
              label="Legalitas Travel"
              values={[]}
              renderValues={(pkg) => (
                pkg.verified ? (
                  <Badge variant="success" className="gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    Terverifikasi
                  </Badge>
                ) : (
                  <Badge variant="warning">Menunggu</Badge>
                )
              )}
            />
            <ComparisonRow
              label="Hotel Diverifikasi"
              values={[]}
              renderValues={() => (
                <Badge variant="success" className="gap-1">
                  <MapPin className="h-3 w-3" />
                  via Google Maps
                </Badge>
              )}
            />
            <ComparisonRow
              label="Maskapai Diverifikasi"
              values={[]}
              renderValues={() => (
                <Badge variant="success" className="gap-1">
                  <Plane className="h-3 w-3" />
                  via FlightData
                </Badge>
              )}
            />

            {/* ACTION BUTTONS */}
            <tr className="bg-slate-50">
              <td className="p-6 bg-white sticky left-0 z-10 border-r border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Aksi</span>
              </td>
              {COMPARE_PACKAGES.map(pkg => (
                <td key={pkg.id} className="p-6 text-center">
                  <div className="flex flex-col gap-2">
                    <Link to={`/package/${pkg.id}`}>
                      <Button className="w-full" size="sm">Lihat Detail</Button>
                    </Link>
                    <Link to={`/agency/1`}>
                      <Button variant="outline" size="sm" className="w-full">Profil Travel</Button>
                    </Link>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" className="px-8 gap-2">
          <ShieldCheck className="h-5 w-5" />
          Verifikasi Travel Ini
        </Button>
        <Button variant="outline" size="lg">
          Simpan Perbandingan
        </Button>
      </div>
    </div>
  )
}
