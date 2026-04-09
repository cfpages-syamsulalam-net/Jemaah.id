import { Search, MapPin, Star, ShieldCheck, ExternalLink, Phone, Mail } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { DUMMY_AGENCIES } from '../data/dummyData'

export default function VerifiedPartnerDirectory() {
  const agencies = DUMMY_AGENCIES

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">
          Direktori Partner Terverifikasi
        </h1>
        <p className="text-slate-500">
          Daftar travel umroh & haji yang telah diverifikasi oleh Jemaah.id
        </p>
      </div>

      {/* Search & Filter */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input placeholder="Cari travel berdasarkan nama atau lokasi..." className="pl-10 h-12" />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-sm text-slate-500 mb-1">Total Travel Terverifikasi</div>
            <div className="text-3xl font-bold text-primary">{agencies.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-sm text-slate-500 mb-1">Rata-rata Rating</div>
            <div className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-1">
              <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
              {(agencies.reduce((sum, a) => sum + a.rating, 0) / agencies.length).toFixed(1)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-sm text-slate-500 mb-1">Total Paket Aktif</div>
            <div className="text-3xl font-bold text-slate-900">
              {agencies.reduce((sum, a) => sum + a.packagesCount, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Agency List */}
      <div className="space-y-4">
        {agencies.map((agency) => (
          <Card key={agency.id} className="p-0 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  {agency.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{agency.name}</h3>
                    {agency.verified && (
                      <Badge variant="success">
                        <ShieldCheck className="h-3 w-3 mr-1" />
                        Terverifikasi
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-bold">{agency.rating}</span>
                      <span>({agency.reviews} ulasan)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{agency.location}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{agency.description}</p>
                  <div className="flex gap-4 text-sm text-slate-500">
                    <span>Bergabung: {agency.joinedDate}</span>
                    <span>•</span>
                    <span>{agency.packagesCount} paket aktif</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-slate-100">
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Lihat Profil
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Hubungi
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
