import { BarChart3, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export default function SavedComparisons() {
  const comparisons = [
    {
      id: 1,
      packages: ['Umroh Syawal Berkah', 'Umroh Plus Turki'],
      agencies: ['Patuhi Travel', 'Amanah Wisata'],
      date: '2 hari lalu',
      packageCount: 2
    },
    {
      id: 2,
      packages: ['Umroh Hemat Ramadhan', 'Umroh VIP 12 Hari'],
      agencies: ['Berkah Jannah', 'Citra Haramain'],
      date: '1 minggu lalu',
      packageCount: 2
    }
  ]

  if (comparisons.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <BarChart3 className="h-16 w-16 mx-auto mb-4 text-slate-300" />
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">
          Perbandingan Tersimpan Kosong
        </h1>
        <p className="text-slate-500 mb-6">
          Anda belum menyimpan perbandingan paket.
        </p>
        <Link to="/search">
          <Button>Cari Paket untuk Dibandingkan</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">
          Perbandingan Tersimpan
        </h1>
        <p className="text-slate-500">
          {comparisons.length} perbandingan
        </p>
      </div>

      <div className="space-y-4">
        {comparisons.map((comparison) => (
          <Card key={comparison.id} className="p-0 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-slate-900">
                    Perbandingan {comparison.packageCount} Paket
                  </h3>
                </div>
                <Badge variant="secondary">{comparison.date}</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {comparison.packages.map((pkg, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-bold text-slate-900 mb-1">{pkg}</div>
                    <div className="text-sm text-slate-600">{comparison.agencies[index]}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Link to="/compare" className="flex-1">
                  <Button variant="outline" className="w-full gap-2">
                    <Eye className="h-4 w-4" />
                    Lihat Perbandingan
                  </Button>
                </Link>
                <Button variant="secondary">Hapus</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
