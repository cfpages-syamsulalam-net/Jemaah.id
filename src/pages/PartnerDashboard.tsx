import { DollarSign, Users, Package, TrendingUp, ArrowUpRight, ArrowDownRight, Eye } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

export default function PartnerDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Dashboard Partner</h1>
        <p className="text-slate-500">
          Selamat datang, Patuhi Travel
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <Badge variant="success" className="gap-1">
                <ArrowUpRight className="h-3 w-3" />
                +12%
              </Badge>
            </div>
            <div className="text-sm text-slate-500 mb-1">Pendapatan Bulan Ini</div>
            <div className="text-2xl font-bold text-slate-900">Rp 285.5jt</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <Badge variant="success" className="gap-1">
                <ArrowUpRight className="h-3 w-3" />
                +8%
              </Badge>
            </div>
            <div className="text-sm text-slate-500 mb-1">Total Leads</div>
            <div className="text-2xl font-bold text-slate-900">142</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Package className="h-6 w-6 text-amber-600" />
              </div>
              <Badge variant="primary">Aktif</Badge>
            </div>
            <div className="text-sm text-slate-500 mb-1">Paket Aktif</div>
            <div className="text-2xl font-bold text-slate-900">24</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <Badge variant="success" className="gap-1">
                <ArrowUpRight className="h-3 w-3" />
                +15%
              </Badge>
            </div>
            <div className="text-sm text-slate-500 mb-1">Konversi</div>
            <div className="text-2xl font-bold text-slate-900">32.5%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Recent Bookings */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-slate-900">Booking Terbaru</h3>
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Lihat Semua
              </Button>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Ahmad Rizki', package: 'Umroh Syawal Berkah', date: '2 jam lalu', status: 'pending' },
                { name: 'Siti Aminah', package: 'Umroh Ramadhan', date: '5 jam lalu', status: 'confirmed' },
                { name: 'Budi Santoso', package: 'Haji Plus 2026', date: '1 hari lalu', status: 'confirmed' },
              ].map((booking, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{booking.name}</div>
                    <div className="text-xs text-slate-500">{booking.package}</div>
                  </div>
                  <div className="text-right">
                    <Badge variant={booking.status === 'confirmed' ? 'success' : 'warning'} className="mb-1">
                      {booking.status === 'confirmed' ? 'Dikonfirmasi' : 'Menunggu'}
                    </Badge>
                    <div className="text-xs text-slate-500">{booking.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Packages */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-slate-900">Paket Terpopuler</h3>
              <Button variant="ghost" size="sm">Kelola</Button>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Umroh Syawal Berkah', views: 1240, bookings: 45 },
                { name: 'Umroh Ramadhan Premium', views: 980, bookings: 38 },
                { name: 'Haji Plus 2026', views: 756, bookings: 28 },
              ].map((pkg, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{pkg.name}</div>
                    <div className="text-xs text-slate-500">{pkg.views} dilihat • {pkg.bookings} booking</div>
                  </div>
                  <Badge variant="primary">#{index + 1}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Aksi Cepat</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <Button className="gap-2">
              <Package className="h-5 w-5" />
              Tambah Paket
            </Button>
            <Button variant="outline" className="gap-2">
              <Users className="h-5 w-5" />
              Kelola Leads
            </Button>
            <Button variant="outline" className="gap-2">
              <DollarSign className="h-5 w-5" />
              Lihat Laporan
            </Button>
            <Button variant="outline" className="gap-2">
              <TrendingUp className="h-5 w-5" />
              Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
