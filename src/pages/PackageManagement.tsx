import { Plus, Edit, Trash2, Eye, Search, Filter } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Input } from '../components/ui/Input'

export default function PackageManagement() {
  const packages = [
    { id: 1, name: 'Umroh Syawal Berkah', duration: '9 Hari', price: '29.5jt', status: 'active', bookings: 45 },
    { id: 2, name: 'Umroh Ramadhan Premium', duration: '12 Hari', price: '35.8jt', status: 'active', bookings: 38 },
    { id: 3, name: 'Haji Plus 2026', duration: '40 Hari', price: '125jt', status: 'active', bookings: 28 },
    { id: 4, name: 'Umroh Awal Tahun', duration: '10 Hari', price: '31.2jt', status: 'draft', bookings: 0 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Manajemen Paket</h1>
          <p className="text-slate-500">Kelola semua paket umroh dan haji Anda</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-5 w-5" />
          Tambah Paket Baru
        </Button>
      </div>

      {/* Search and Filter */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input placeholder="Cari paket..." className="pl-10 h-12" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-5 w-5" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Packages Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-bold text-slate-900">Nama Paket</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-slate-900">Durasi</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-slate-900">Harga</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-slate-900">Booking</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-slate-900">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-slate-900">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {packages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-900">{pkg.name}</div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{pkg.duration}</td>
                    <td className="py-4 px-6 font-bold text-primary">{pkg.price}</td>
                    <td className="py-4 px-6 text-slate-600">{pkg.bookings}</td>
                    <td className="py-4 px-6">
                      <Badge variant={pkg.status === 'active' ? 'success' : 'secondary'}>
                        {pkg.status === 'active' ? 'Aktif' : 'Draft'}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
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
