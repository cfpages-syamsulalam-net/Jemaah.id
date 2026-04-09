import { Star, Heart, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { DUMMY_PACKAGES } from '../data/dummyData'

export default function Favorites() {
  const favorites = DUMMY_PACKAGES.slice(0, 3) // Simulate 3 favorites

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <Heart className="h-16 w-16 mx-auto mb-4 text-slate-300" />
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Favorit Kosong</h1>
        <p className="text-slate-500 mb-6">
          Anda belum menyimpan paket favorit.
        </p>
        <Link to="/">
          <Button>Cari Paket Umroh</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Paket Favorit Saya</h1>
        <p className="text-slate-500">
          {favorites.length} paket tersimpan
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((pkg) => (
          <Card key={pkg.id} className="p-0 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-slate-100 relative">
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary/30 font-bold uppercase tracking-widest text-xl">
                {pkg.airline}
              </div>
              <button className="absolute top-4 right-4 h-8 w-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors">
                <Heart className="h-5 w-5 text-red-500 fill-red-500" />
              </button>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{pkg.agency}</span>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-slate-900">{pkg.rating}</span>
                </div>
              </div>
              <h3 className="font-display font-bold text-slate-900 text-xl mb-4">{pkg.name}</h3>

              <div className="space-y-2 mb-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="font-bold">Durasi:</span>
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Hotel Makkah:</span>
                  <span>{pkg.hotelMakkah} ({pkg.hotelMakkahStar}⭐)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-primary/5">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-bold tracking-widest">Mulai Dari</span>
                    <span className="text-2xl font-display font-bold text-primary">Rp {pkg.price}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link to={`/package/${pkg.id}`} className="flex-1">
                    <Button variant="outline" className="w-full gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Detail
                    </Button>
                  </Link>
                  <Button className="flex-1">Pesan</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
