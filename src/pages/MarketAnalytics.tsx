import { Eye, Users, DollarSign, ArrowUpRight } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

export default function MarketAnalytics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Analitik Pasar</h1>
        <p className="text-slate-500">Insight harga kompetitor dan perilaku pengguna</p>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <Badge variant="success" className="gap-1">
                <ArrowUpRight className="h-3 w-3" />
                +5%
              </Badge>
            </div>
            <div className="text-sm text-slate-500 mb-1">Harga Rata-rata Pasar</div>
            <div className="text-2xl font-bold text-slate-900">Rp 31.2jt</div>
            <div className="text-xs text-slate-400 mt-1">Umroh 9 hari</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <Badge variant="success" className="gap-1">
                <ArrowUpRight className="h-3 w-3" />
                +22%
              </Badge>
            </div>
            <div className="text-sm text-slate-500 mb-1">Total Views Platform</div>
            <div className="text-2xl font-bold text-slate-900">45.2K</div>
            <div className="text-xs text-slate-400 mt-1">Bulan ini</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <Badge variant="primary">Aktif</Badge>
            </div>
            <div className="text-sm text-slate-500 mb-1">Pengunjung Unik</div>
            <div className="text-2xl font-bold text-slate-900">12.8K</div>
            <div className="text-xs text-slate-400 mt-1">+18% dari bulan lalu</div>
          </CardContent>
        </Card>
      </div>

      {/* Competitor Pricing Analysis */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Analisis Harga Kompetitor</h3>
          <div className="space-y-4">
            {[
              { agency: 'Patuhi Travel', package: 'Umroh Syawal Berkah', price: 29500000, avgMarket: 31200000, status: 'below' },
              { agency: 'Amanah Wisata', package: 'Umroh Ramadhan Premium', price: 35800000, avgMarket: 33500000, status: 'above' },
              { agency: 'Citra Haramain', package: 'Umroh VIP 12 Hari', price: 45000000, avgMarket: 42000000, status: 'above' },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-bold text-slate-900">{item.package}</div>
                    <div className="text-sm text-slate-600">{item.agency}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-900">Rp {item.price.toLocaleString('id-ID')}</div>
                    <Badge variant={item.status === 'below' ? 'success' : 'warning'} className="mt-1">
                      {item.status === 'below' ? 'Di bawah rata-rata' : 'Di atas rata-rata'}
                    </Badge>
                  </div>
                </div>
                <div className="text-xs text-slate-500">
                  Rata-rata pasar: Rp {item.avgMarket.toLocaleString('id-ID')}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Behavior Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Paket Paling Dilihat</h3>
            <div className="space-y-3">
              {[
                { name: 'Umroh Syawal Berkah', agency: 'Patuhi Travel', views: 1240, trend: '+15%' },
                { name: 'Umroh Ramadhan Premium', agency: 'Amanah Wisata', views: 980, trend: '+8%' },
                { name: 'Haji Plus 2026', agency: 'Citra Haramain', views: 756, trend: '+22%' },
              ].map((pkg, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">#{index + 1} {pkg.name}</div>
                    <div className="text-xs text-slate-500">{pkg.agency}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-slate-900">{pkg.views} views</div>
                    <div className="text-xs text-green-600">{pkg.trend}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Tren Pencarian Populer</h3>
            <div className="space-y-3">
              {[
                { query: 'Umroh Mei 2026', count: 342, trend: '+25%' },
                { query: 'Umroh Jakarta', count: 289, trend: '+12%' },
                { query: 'Haji Plus', count: 234, trend: '+18%' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="font-bold text-slate-900 text-sm">{item.query}</div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-slate-900">{item.count} pencarian</div>
                    <div className="text-xs text-green-600">{item.trend}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
