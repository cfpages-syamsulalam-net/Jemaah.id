import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { SlidersHorizontal, ArrowUpDown, X } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { Input } from "../components/ui/Input"
import { PackageCard, type Package } from "../components/shared/PackageCard"

const MOCK_RESULTS: Package[] = [
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

export default function Search() {
  const navigate = useNavigate()
  const [selectedForCompare, setSelectedForCompare] = useState<number[]>([])

  const toggleCompare = (id: number) => {
    setSelectedForCompare(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : prev.length < 4 ? [...prev, id] : prev
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 shrink-0 space-y-8">
          <div>
            <h3 className="font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </h3>
            
            <div className="space-y-6">
              {/* Price Range */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Rentang Harga</label>
                <div className="space-y-2">
                  <Input placeholder="Min" type="number" className="h-9" />
                  <Input placeholder="Max" type="number" className="h-9" />
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Bintang Hotel</label>
                <div className="flex flex-col gap-2">
                  {[5, 4, 3].map(star => (
                    <label key={star} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-primary/10" />
                      <span className="text-sm text-slate-600">Bintang {star}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Airline */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Maskapai</label>
                <div className="flex flex-col gap-2">
                  {["Saudia", "Garuda", "Turkish", "Lion Air"].map(air => (
                    <label key={air} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-primary/10" />
                      <span className="text-sm text-slate-600">{air}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-6">
          {/* Header & Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-primary/5 pb-6">
            <div>
              <h1 className="text-2xl font-display font-bold text-slate-900">Hasil Pencarian</h1>
              <p className="text-sm text-slate-500">Ditemukan {MOCK_RESULTS.length} paket terbaik untuk Anda.</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowUpDown className="h-4 w-4" />
                Urutkan
              </Button>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {MOCK_RESULTS.map(pkg => (
              <PackageCard 
                key={pkg.id} 
                pkg={pkg} 
                onCompareToggle={toggleCompare}
                isComparing={selectedForCompare.includes(pkg.id)}
              />
            ))}
          </div>
        </main>
      </div>

      {/* Comparison Drawer */}
      {selectedForCompare.length > 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
          <Card className="bg-primary text-white border-none shadow-2xl p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {selectedForCompare.map(id => (
                  <div key={id} className="h-10 w-10 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-bold text-xs">
                    {MOCK_RESULTS.find(p => p.id === id)?.agency.charAt(0)}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-sm">{selectedForCompare.length} Paket dipilih</p>
                <p className="text-xs text-white/70">Bandingkan side-by-side</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" onClick={() => setSelectedForCompare([])}>
                <X className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                className="bg-white text-primary hover:bg-white/90 font-bold px-6"
                onClick={() => navigate('/compare')}
              >
                Bandingkan Sekarang
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
