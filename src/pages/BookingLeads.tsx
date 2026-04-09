import { useState } from 'react'
import { Users, Phone, Mail, Calendar, DollarSign, Eye, Check, Search } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function BookingLeads() {
  const [filter, setFilter] = useState('all')

  const leads = [
    {
      id: 1,
      name: 'Ahmad Rizki',
      email: 'ahmad.rizki@email.com',
      phone: '+62 812-3456-7890',
      package: 'Umroh Syawal Berkah',
      passengers: 2,
      date: '15 Mei 2026',
      status: 'new',
      inquiry: 'Tersedia kamar quad untuk tanggal 15 Mei?',
      submittedAt: '2 jam lalu',
      budget: '60.000.000'
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      email: 'siti.n@email.com',
      phone: '+62 813-7654-3210',
      package: 'Umroh Ramadhan Premium',
      passengers: 4,
      date: '1 Mar 2026',
      status: 'contacted',
      inquiry: 'Apakah ada diskon untuk group 4 orang?',
      submittedAt: '5 jam lalu',
      budget: '140.000.000'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      email: 'budi.s@email.com',
      phone: '+62 811-2233-4455',
      package: 'Haji Plus 2026',
      passengers: 2,
      date: 'Jun 2026',
      status: 'converted',
      inquiry: 'Ingin langsung booking untuk haji plus',
      submittedAt: '1 hari lalu',
      budget: '250.000.000'
    }
  ]

  const filteredLeads = filter === 'all' 
    ? leads 
    : leads.filter(lead => lead.status === filter)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge variant="success">Baru</Badge>
      case 'contacted':
        return <Badge variant="primary">Dihubungi</Badge>
      case 'converted':
        return <Badge variant="secondary">Konversi</Badge>
      case 'lost':
        return <Badge variant="outline">Hilang</Badge>
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Booking Leads</h1>
          <p className="text-slate-500">
            Kelola prospek pelanggan dan inquiry
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            Export CSV
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-slate-500 mb-1">Total Leads</div>
            <div className="text-2xl font-bold text-slate-900">{leads.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-slate-500 mb-1">Leads Baru</div>
            <div className="text-2xl font-bold text-green-600">
              {leads.filter(l => l.status === 'new').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-slate-500 mb-1">Sudah Dihubungi</div>
            <div className="text-2xl font-bold text-primary">
              {leads.filter(l => l.status === 'contacted').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-slate-500 mb-1">Konversi</div>
            <div className="text-2xl font-bold text-slate-900">
              {leads.filter(l => l.status === 'converted').length}
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
              <Input placeholder="Cari leads..." className="pl-10 h-12" />
            </div>
            <div className="flex gap-2">
              {['all', 'new', 'contacted', 'converted'].map((f) => (
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

      {/* Leads List */}
      <div className="space-y-4">
        {filteredLeads.map((lead) => (
          <Card key={lead.id} className="p-0 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{lead.name}</h3>
                    {getStatusBadge(lead.status)}
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{lead.inquiry}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="h-4 w-4" />
                      <span>{lead.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>{lead.passengers} orang</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <DollarSign className="h-4 w-4" />
                      <span>Rp {lead.budget}</span>
                    </div>
                    <div className="text-slate-500">{lead.submittedAt}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-slate-100">
                <Button variant="outline" size="sm" className="gap-2">
                  <Eye className="h-4 w-4" />
                  Detail
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Telepon
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
                {lead.status === 'new' && (
                  <Button size="sm" className="gap-2">
                    <Check className="h-4 w-4" />
                    Tandai Dihubungi
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
