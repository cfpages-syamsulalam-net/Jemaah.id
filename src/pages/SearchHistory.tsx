import { Clock, Search, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { DUMMY_SEARCH_HISTORY } from '../data/dummyData'

export default function SearchHistory() {
  const history = DUMMY_SEARCH_HISTORY

  if (history.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <Search className="h-16 w-16 mx-auto mb-4 text-slate-300" />
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Riwayat Pencarian Kosong</h1>
        <p className="text-slate-500 mb-6">
          Anda belum melakukan pencarian.
        </p>
        <Link to="/">
          <Button>Mulai Cari Paket</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Riwayat Pencarian</h1>
        <p className="text-slate-500">
          {history.length} pencarian terakhir
        </p>
      </div>

      <div className="space-y-4">
        {history.map((item) => (
          <Card key={item.id} className="p-0 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Keberangkatan</div>
                    <div className="font-bold text-slate-900">{item.departure}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Bulan</div>
                    <div className="font-bold text-slate-900">{item.month}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Durasi</div>
                    <div className="font-bold text-slate-900">{item.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Hasil</div>
                    <div className="font-bold text-primary">{item.results} paket</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <Link to="/search">
                    <Button size="sm" variant="ghost" className="gap-2">
                      <span>Cari Lagi</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
