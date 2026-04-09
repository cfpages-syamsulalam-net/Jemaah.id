import { Star, MapPin, Phone, Mail, Globe } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { DUMMY_AGENCIES, DUMMY_PACKAGES } from '../data/dummyData'

export default function AgencyProfile() {
  const agency = DUMMY_AGENCIES[0]
  const agencyPackages = DUMMY_PACKAGES.slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className="h-24 w-24 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl">
            {agency.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-display font-bold text-slate-900">{agency.name}</h1>
              {agency.verified && (
                <Badge variant="success">Terverifikasi</Badge>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-bold">{agency.rating}</span>
                <span>({agency.reviews} ulasan)</span>
              </div>
              <span>•</span>
              <span>Bergabung sejak {agency.joinedDate}</span>
            </div>
            <p className="text-slate-600 max-w-2xl">{agency.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Packages */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">Paket Umroh & Haji</h3>
                <Badge variant="primary">{agency.packagesCount} paket</Badge>
              </div>
              <div className="space-y-4">
                {agencyPackages.map((pkg) => (
                  <div key={pkg.id} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-slate-900">{pkg.name}</h4>
                        <p className="text-sm text-slate-600">{pkg.duration} • {pkg.airline}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">Rp {pkg.price}</div>
                        <div className="text-xs text-slate-500">per orang</div>
                      </div>
                    </div>
                    <div className="flex gap-4 text-sm text-slate-600">
                      <span>🏨 {pkg.hotelMakkah} ({pkg.hotelMakkahStar}⭐)</span>
                      <span>✈️ {pkg.departure}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Ulasan Jamaah</h3>
              <div className="space-y-4">
                {[
                  { name: 'Ahmad Rizki', rating: 5, date: '2 hari lalu', comment: 'Pelayanan sangat memuaskan, pembimbing membantu sekali.' },
                  { name: 'Siti Nurhaliza', rating: 5, date: '1 minggu lalu', comment: 'Hotel dekat dengan masjid, makanan enak.' },
                  { name: 'Budi Santoso', rating: 4, date: '2 minggu lalu', comment: 'Secara keseluruhan bagus, hanya sedikit delay di bandara.' }
                ].map((review, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-slate-900">{review.name}</div>
                      <div className="text-xs text-slate-500">{review.date}</div>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-slate-500">Alamat</div>
                    <div className="text-sm text-slate-900">{agency.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-slate-500">Telepon</div>
                    <div className="text-sm text-slate-900">+62 812-3456-7890</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="text-sm text-slate-900">info@patuhitravel.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-slate-500">Website</div>
                    <div className="text-sm text-primary underline cursor-pointer">www.patuhitravel.com</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Statistik Travel</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Total Jamaah</span>
                  <span className="font-bold text-slate-900">1,240+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Keberangkatan</span>
                  <span className="font-bold text-slate-900">85 trip</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Rating</span>
                  <span className="font-bold text-slate-900">{agency.rating}/5.0</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" size="lg">
            Hubungi Travel
          </Button>
        </div>
      </div>
    </div>
  )
}
