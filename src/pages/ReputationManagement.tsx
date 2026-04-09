import { Star, TrendingUp, Reply } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export default function ReputationManagement() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Manajemen Reputasi</h1>
        <p className="text-slate-500">Analisis sentimen dan manajemen ulasan</p>
      </div>

      {/* Reputation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Rating Keseluruhan</div>
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-8 w-8 fill-amber-400 text-amber-400" />
              <span className="text-3xl font-bold text-slate-900">4.9</span>
            </div>
            <div className="text-sm text-slate-400">dari 342 ulasan</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Sentimen Positif</div>
            <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Ulasan Baru (Bulan Ini)</div>
            <div className="text-3xl font-bold text-slate-900 mb-2">28</div>
            <Badge variant="success" className="gap-1">
              <TrendingUp className="h-3 w-3" />
              +15%
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Respon Rate</div>
            <div className="text-3xl font-bold text-primary mb-2">87%</div>
            <div className="text-xs text-slate-400">298/342 dijawab</div>
          </CardContent>
        </Card>
      </div>

      {/* Rating Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Distribusi Rating</h3>
            <div className="space-y-3">
              {[
                { stars: 5, count: 245, percentage: 72 },
                { stars: 4, count: 67, percentage: 20 },
                { stars: 3, count: 20, percentage: 6 },
                { stars: 2, count: 7, percentage: 2 },
                { stars: 1, count: 3, percentage: 1 }
              ].map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm font-bold text-slate-900">{item.stars}</span>
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="flex-1 bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-amber-400 h-3 rounded-full transition-all"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-slate-600 w-12 text-right">{item.count}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Kata Kunci Paling Sering</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { word: 'Membantu', count: 89 },
                { word: 'Ramah', count: 76 },
                { word: 'Berkah', count: 65 },
                { word: 'Nyaman', count: 54 },
                { word: 'Profesional', count: 43 },
                { word: 'Lancar', count: 38 },
                { word: 'Hotel Bagus', count: 32 },
                { word: 'Makanan Enak', count: 28 }
              ].map((item, index) => (
                <Badge key={index} variant="primary" className="py-2 px-3 text-sm">
                  {item.word} <span className="ml-1 text-xs opacity-75">({item.count})</span>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reviews */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Ulasan Terbaru</h3>
          <div className="space-y-4">
            {[
              { name: 'Ahmad Rizki', rating: 5, date: '2 hari lalu', comment: 'Pelayanan sangat memuaskan, pembimbing sangat membantu selama ibadah.', responded: true },
              { name: 'Siti Nurhaliza', rating: 5, date: '5 hari lalu', comment: 'Hotel dekat dengan Masjidil Haram, makanan enak dan bervariasi.', responded: true },
              { name: 'Budi Santoso', rating: 4, date: '1 minggu lalu', comment: 'Secara keseluruhan bagus, hanya sedikit delay di bandara saat pulang.', responded: false },
            ].map((review, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900">{review.name}</span>
                      {review.responded && <Badge variant="success">Dibalas</Badge>}
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{review.comment}</p>
                    <div className="text-xs text-slate-500">{review.date}</div>
                  </div>
                </div>
                {!review.responded && (
                  <Button size="sm" variant="outline" className="gap-2">
                    <Reply className="h-4 w-4" />
                    Balas Ulasan
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
