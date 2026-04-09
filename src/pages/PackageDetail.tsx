import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, MapPin, Plane, ShieldCheck, Calendar, Clock, CheckCircle } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Card, CardContent } from '../components/ui/Card'
import { DUMMY_PACKAGES } from '../data/dummyData'

export default function PackageDetail() {
  const { id } = useParams()
  const pkg = DUMMY_PACKAGES.find(p => p.id === parseInt(id || '0'))

  if (!pkg) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Package Not Found</h1>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Kembali</span>
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Badge variant="primary" className="mb-2">
              {pkg.duration}
            </Badge>
            <h1 className="text-4xl font-display font-bold text-slate-900 mb-2">{pkg.name}</h1>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <span className="font-bold text-primary">{pkg.agency}</span>
              {pkg.verified && (
                <span className="flex items-center gap-1 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  Terverifikasi
                </span>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-500 mb-1">Mulai dari</div>
            <div className="text-4xl font-display font-bold text-primary">Rp {pkg.price}</div>
          </div>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="h-96 bg-slate-100 rounded-lg mb-8 flex items-center justify-center">
        <div className="text-center text-primary/30">
          <Plane className="h-16 w-16 mx-auto mb-4" />
          <div className="text-xl font-bold">{pkg.airline}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hotel Details */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Akomodasi Hotel</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 mb-1">Makkah</div>
                    <div className="text-slate-600">{pkg.hotelMakkah}</div>
                    <div className="flex items-center gap-2 mt-1">
                      {Array.from({ length: pkg.hotelMakkahStar }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="text-sm text-slate-500 mt-2">Jarak: {pkg.distance} ke Masjidil Haram</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 mb-1">Madinah</div>
                    <div className="text-slate-600">{pkg.hotelMadinah}</div>
                    <div className="flex items-center gap-2 mt-1">
                      {Array.from({ length: pkg.hotelMadinahStar }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Airline */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Maskapai Penerbangan</h2>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <Plane className="h-6 w-6 text-primary" />
                <div className="flex-1">
                  <div className="font-bold text-slate-900">{pkg.airline}</div>
                  <div className="text-sm text-slate-600">Keberangkatan: {pkg.departure}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Itinerary */}
          {pkg.itinerary && pkg.itinerary.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Itinerary Perjalanan</h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 border-l-2 border-primary/20 pl-4">
                        <div className="font-bold text-slate-900">Hari {day.day}: {day.title}</div>
                        <div className="text-sm text-slate-600 mt-1">{day.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Includes */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Fasilitas Termasuk</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pkg.includes?.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="text-sm text-slate-500 mb-2">Rating & Ulasan</div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                  <span className="text-3xl font-bold text-slate-900">{pkg.rating}</span>
                </div>
                <div className="text-sm text-slate-600">{pkg.reviews} ulasan</div>
              </div>
              <Button className="w-full mb-3" size="lg">
                Pesan Sekarang
              </Button>
              <Button variant="outline" className="w-full">
                Simpan ke Favorit
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-sm text-slate-500 mb-2">Keberangkatan</div>
              <div className="font-bold text-slate-900 mb-4">{pkg.departure}</div>
              <div className="text-sm text-slate-500 mb-2">Durasi</div>
              <div className="font-bold text-slate-900 mb-4">{pkg.duration}</div>
              <div className="text-sm text-slate-500 mb-2">Status</div>
              <Badge variant="success" className="mb-2">Tersedia</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
