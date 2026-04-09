import { useState } from 'react'
import { CheckCircle, Clock, Search, Eye, Check, X } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function ClaimsQueue() {
  const [filter, setFilter] = useState('all')

  const claims = [
    {
      id: 'CLM-001',
      agency: 'Patuhi Travel',
      package: 'Umroh Syawal Berkah',
      type: 'hotel_change',
      description: 'Perubahan hotel dari Hilton ke Movenpick',
      status: 'pending',
      submittedAt: '2 jam lalu',
      priority: 'high',
      documents: 3
    },
    {
      id: 'CLM-002',
      agency: 'Amanah Wisata',
      package: 'Umroh Ramadhan Premium',
      type: 'price_update',
      description: 'Penyesuaian harga dari 35jt menjadi 38jt',
      status: 'pending',
      submittedAt: '5 jam lalu',
      priority: 'medium',
      documents: 2
    },
    {
      id: 'CLM-003',
      agency: 'Berkah Jannah',
      package: 'Umroh Hemat Ramadhan',
      type: 'itinerary_change',
      description: 'Perubahan jadwal hari ke-4 dan ke-5',
      status: 'approved',
      submittedAt: '1 hari lalu',
      priority: 'low',
      documents: 1
    }
  ]

  const filteredClaims = filter === 'all' ? claims : claims.filter(c => c.status === filter)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="warning"><Clock className="h-3 w-3 mr-1" />Menunggu</Badge>
      case 'approved':
        return <Badge variant="success"><CheckCircle className="h-3 w-3 mr-1" />Disetujui</Badge>
      case 'rejected':
        return <Badge variant="error"><X className="h-3 w-3 mr-1" />Ditolak</Badge>
      default:
        return null
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="error">Tinggi</Badge>
      case 'medium':
        return <Badge variant="warning">Sedang</Badge>
      case 'low':
        return <Badge variant="secondary">Rendah</Badge>
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Antrian Klaim</h1>
          <p className="text-slate-500">Review dan approval klaim dari travel</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Export Report</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-slate-500 mb-1">Total Klaim</div>
            <div className="text-2xl font-bold text-slate-900">{claims.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-slate-500 mb-1">Menunggu Review</div>
            <div className="text-2xl font-bold text-amber-600">
              {claims.filter(c => c.status === 'pending').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-slate-500 mb-1">Disetujui</div>
            <div className="text-2xl font-bold text-green-600">
              {claims.filter(c => c.status === 'approved').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-slate-500 mb-1">Prioritas Tinggi</div>
            <div className="text-2xl font-bold text-red-600">
              {claims.filter(c => c.priority === 'high').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input placeholder="Cari klaim..." className="pl-10 h-12" />
            </div>
            <div className="flex gap-2">
              {['all', 'pending', 'approved', 'rejected'].map((f) => (
                <Button
                  key={f}
                  variant={filter === f ? 'primary' : 'outline'}
                  onClick={() => setFilter(f)}
                >
                  {f === 'all' ? 'Semua' : f.charAt(0).toUpperCase() + f.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Claims List */}
      <div className="space-y-4">
        {filteredClaims.map((claim) => (
          <Card key={claim.id} className="p-0 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{claim.id}</h3>
                    {getStatusBadge(claim.status)}
                    {getPriorityBadge(claim.priority)}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                    <div>
                      <span className="text-slate-500">Agency:</span>
                      <span className="ml-2 font-bold text-slate-900">{claim.agency}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Paket:</span>
                      <span className="ml-2 font-bold text-slate-900">{claim.package}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Tipe:</span>
                      <span className="ml-2 font-bold text-slate-900">{claim.type}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Dokumen:</span>
                      <span className="ml-2 font-bold text-slate-900">{claim.documents} file</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                    {claim.description}
                  </p>
                  <div className="text-xs text-slate-500 mt-2">
                    Dikirim: {claim.submittedAt}
                  </div>
                </div>
              </div>

              {claim.status === 'pending' && (
                <div className="flex gap-2 pt-4 border-t border-slate-100">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Eye className="h-4 w-4" />
                    Lihat Dokumen
                  </Button>
                  <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700">
                    <Check className="h-4 w-4" />
                    Setujui
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 text-red-600 hover:text-red-700">
                    <X className="h-4 w-4" />
                    Tolak
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
