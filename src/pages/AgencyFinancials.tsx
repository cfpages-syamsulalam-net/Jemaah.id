import { DollarSign, TrendingUp, Users, Package, ArrowUpRight, ArrowDownRight, Calendar, Download } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export default function AgencyFinancials() {
  const transactions = [
    { id: 'TRX-001', type: 'booking', description: 'Umroh Syawal Berkah - Ahmad Rizki', amount: '29.500.000', commission: '2.950.000', date: '10 Apr 2026', status: 'completed' },
    { id: 'TRX-002', type: 'booking', description: 'Umroh Ramadhan - Siti Aminah', amount: '35.800.000', commission: '3.580.000', date: '9 Apr 2026', status: 'completed' },
    { id: 'TRX-003', type: 'refund', description: 'Refund - Budi Santoso', amount: '-29.500.000', commission: '-2.950.000', date: '8 Apr 2026', status: 'processed' },
    { id: 'TRX-004', type: 'booking', description: 'Haji Plus 2026 - Dewi Lestari', amount: '125.000.000', commission: '12.500.000', date: '7 Apr 2026', status: 'pending' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Laporan Keuangan</h1>
          <p className="text-slate-500">Tracking pendapatan dan komisi</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export Laporan
        </Button>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <Badge variant="success" className="gap-1">
                <ArrowUpRight className="h-3 w-3" />
                +18%
              </Badge>
            </div>
            <div className="text-sm text-slate-500 mb-1">Pendapatan Bulan Ini</div>
            <div className="text-2xl font-bold text-slate-900">Rp 285.5jt</div>
            <div className="text-xs text-slate-400 mt-1">April 2026</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <Badge variant="success" className="gap-1">
                <ArrowUpRight className="h-3 w-3" />
                +12%
              </Badge>
            </div>
            <div className="text-sm text-slate-500 mb-1">Komisi Diperoleh</div>
            <div className="text-2xl font-bold text-primary">Rp 28.5jt</div>
            <div className="text-xs text-slate-400 mt-1">10% dari pendapatan</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <Badge variant="primary">Aktif</Badge>
            </div>
            <div className="text-sm text-slate-500 mb-1">Transaksi Berhasil</div>
            <div className="text-2xl font-bold text-slate-900">47</div>
            <div className="text-xs text-slate-400 mt-1">Bulan ini</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Package className="h-6 w-6 text-amber-600" />
              </div>
              <Badge variant="warning" className="gap-1">
                <ArrowDownRight className="h-3 w-3" />
                -3%
              </Badge>
            </div>
            <div className="text-sm text-slate-500 mb-1">Pending Payout</div>
            <div className="text-2xl font-bold text-slate-900">Rp 12.5jt</div>
            <div className="text-xs text-slate-400 mt-1">Menunggu proses</div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart Placeholder */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-900">Grafik Pendapatan 6 Bulan Terakhir</h3>
            <div className="flex gap-2">
              {['6B', '1T', '1Th'].map((period) => (
                <Button key={period} variant="outline" size="sm">{period}</Button>
              ))}
            </div>
          </div>
          <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-400">
              <TrendingUp className="h-12 w-12 mx-auto mb-2" />
              <div className="text-sm">Grafik akan diintegrasikan dengan Chart.js/Recharts</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">Riwayat Transaksi</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Filter Tanggal
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-bold text-slate-900">ID</th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-slate-900">Deskripsi</th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-slate-900">Tanggal</th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-slate-900">Jumlah</th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-slate-900">Komisi</th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-slate-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transactions.map((trx) => (
                  <tr key={trx.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 text-sm font-mono text-slate-600">{trx.id}</td>
                    <td className="py-3 px-4">
                      <div className="text-sm font-bold text-slate-900">{trx.description}</div>
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-600">{trx.date}</td>
                    <td className={`py-3 px-4 text-sm font-bold ${trx.amount.startsWith('-') ? 'text-red-600' : 'text-slate-900'}`}>
                      Rp {trx.amount}
                    </td>
                    <td className="py-3 px-4 text-sm font-bold text-primary">Rp {trx.commission}</td>
                    <td className="py-3 px-4">
                      <Badge variant={trx.status === 'completed' ? 'success' : trx.status === 'pending' ? 'warning' : 'secondary'}>
                        {trx.status === 'completed' ? 'Selesai' : trx.status === 'pending' ? 'Pending' : 'Diproses'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
