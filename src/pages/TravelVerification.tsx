import { Search, ShieldCheck, MapPin, Star, ExternalLink, CheckCircle, FileText } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { DUMMY_AGENCIES } from '../data/dummyData'
import { Link } from 'react-router-dom'

export default function TravelVerification() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="primary" className="mb-4">Verifikasi</Badge>
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
          Verifikasi Travel <span className="text-primary">Independen</span>
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Kami memverifikasi setiap travel secara independen melalui database Kemenag RI, 
          Google Maps, dan FlightData API untuk memastikan keakuratan informasi.
        </p>

        {/* Search */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
            <Input
              placeholder="Cari travel berdasarkan nama atau kota..."
              className="pl-12 h-14 text-lg"
            />
          </div>
        </div>
      </div>

      {/* Verification Process */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">Legalitas</h3>
            <p className="text-sm text-slate-600 text-center">
              Verifikasi izin PPIU/PIHK langsung ke database Kemenag RI
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">Hotel & Lokasi</h3>
            <p className="text-sm text-slate-600 text-center">
              Verifikasi jarak hotel ke Masjid via Google Maps untuk akurasi
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">Maskapai</h3>
            <p className="text-sm text-slate-600 text-center">
              Validasi maskapai dan rute penerbangan via FlightData API
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Verified Agencies List */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Travel Terverifikasi ({DUMMY_AGENCIES.length})
        </h2>
        <div className="space-y-4">
          {DUMMY_AGENCIES.map((agency) => (
            <Card key={agency.id} className="p-0 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    {agency.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{agency.name}</h3>
                      <Badge variant="success">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Terverifikasi
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="font-bold">{agency.rating}</span>
                        <span>({agency.reviews} ulasan)</span>
                      </div>
                      <span>•</span>
                      <span>{agency.packagesCount} paket aktif</span>
                      <span>•</span>
                      <span>{agency.location}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{agency.description}</p>
                    <div className="flex gap-2">
                      <Link to={`/agency/${agency.id}`}>
                        <Button variant="outline" size="sm" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Lihat Profil
                        </Button>
                      </Link>
                      <Button size="sm">Lihat Paket</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Card>
        <CardContent className="p-8 text-center bg-gradient-to-br from-primary/5 to-primary/10">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Travel Anda Belum Terdaftar?
          </h3>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto">
            Daftarkan travel Anda untuk mendapatkan verifikasi dan jangkau ribuan jamaah potensial
          </p>
          <Link to="/partner">
            <Button size="lg">Daftarkan Travel</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
