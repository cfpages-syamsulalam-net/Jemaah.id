import { useState } from 'react'
import { SlidersHorizontal, ArrowLeft, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { PackageCard } from '../components/shared/PackageCard'
import { DUMMY_PACKAGES } from '../data/dummyData'

export default function PopularPackages() {
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'duration'>('rating')
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 150000000])
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([])
  const [selectedCities, setSelectedCities] = useState<string[]>([])

  const allPackages = DUMMY_PACKAGES

  const airlines = [...new Set(allPackages.map(p => p.airline))]
  const cities = [...new Set(allPackages.map(p => p.departure))]

  const filteredPackages = allPackages
    .filter(pkg => {
      const withinPrice = pkg.priceNumeric >= priceRange[0] && pkg.priceNumeric <= priceRange[1]
      const airlineMatch = selectedAirlines.length === 0 || selectedAirlines.includes(pkg.airline)
      const cityMatch = selectedCities.length === 0 || selectedCities.includes(pkg.departure)
      return withinPrice && airlineMatch && cityMatch
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.priceNumeric - b.priceNumeric
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  const toggleAirline = (airline: string) => {
    setSelectedAirlines(prev =>
      prev.includes(airline) ? prev.filter(a => a !== airline) : [...prev, airline]
    )
  }

  const toggleCity = (city: string) => {
    setSelectedCities(prev =>
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    )
  }

  const clearFilters = () => {
    setPriceRange([0, 150000000])
    setSelectedAirlines([])
    setSelectedCities([])
  }

  const activeFiltersCount = selectedAirlines.length + selectedCities.length

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Beranda</span>
        </Link>
        <div className="flex items-end justify-between">
          <div>
            <Badge variant="primary" className="mb-3">Paket Populer</Badge>
            <h1 className="text-4xl font-display font-bold text-slate-900 mb-2">
              Paket Populer Bulan Ini
            </h1>
            <p className="text-lg text-slate-500">
              {filteredPackages.length} paket populer dipilih oleh ribuan jamaah
            </p>
          </div>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-5 w-5" />
            Filter
            {activeFiltersCount > 0 && (
              <Badge variant="primary" className="ml-1">{activeFiltersCount}</Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Sort & Filter Bar */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-900">Urutkan:</span>
              <div className="flex gap-2">
                {[
                  { value: 'rating', label: 'Rating Tertinggi' },
                  { value: 'price', label: 'Harga Terendah' },
                ].map(option => (
                  <Button
                    key={option.value}
                    variant={sortBy === option.value ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setSortBy(option.value as any)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
            {activeFiltersCount > 0 && (
              <Button variant="ghost" size="sm" className="gap-2 text-red-600" onClick={clearFilters}>
                <X className="h-4 w-4" />
                Hapus Semua Filter
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Filters Sidebar */}
      {showFilters && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Price Range */}
              <div>
                <h3 className="font-bold text-slate-900 mb-3">Rentang Harga</h3>
                <div className="space-y-2">
                  <div className="text-sm text-slate-600">
                    Rp {(priceRange[0] / 1000000).toFixed(0)}jt - Rp {(priceRange[1] / 1000000).toFixed(0)}jt
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150000000"
                    step="1000000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Airlines */}
              <div>
                <h3 className="font-bold text-slate-900 mb-3">Maskapai</h3>
                <div className="space-y-2">
                  {airlines.map(airline => (
                    <label key={airline} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedAirlines.includes(airline)}
                        onChange={() => toggleAirline(airline)}
                        className="w-4 h-4 rounded border-primary/10 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-slate-700">{airline}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Cities */}
              <div>
                <h3 className="font-bold text-slate-900 mb-3">Kota Keberangkatan</h3>
                <div className="space-y-2">
                  {cities.map(city => (
                    <label key={city} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCities.includes(city)}
                        onChange={() => toggleCity(city)}
                        className="w-4 h-4 rounded border-primary/10 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-slate-700">{city}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedAirlines.map(airline => (
            <Badge key={airline} variant="primary" className="gap-2 py-2 px-3">
              {airline}
              <button onClick={() => toggleAirline(airline)} className="hover:text-red-600">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {selectedCities.map(city => (
            <Badge key={city} variant="primary" className="gap-2 py-2 px-3">
              {city}
              <button onClick={() => toggleCity(city)} className="hover:text-red-600">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      {/* Packages Grid */}
      {filteredPackages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Tidak Ada Paket Ditemukan</h3>
            <p className="text-slate-500 mb-6">Coba ubah filter atau kata kunci pencarian Anda</p>
            <Button onClick={clearFilters}>Hapus Semua Filter</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
