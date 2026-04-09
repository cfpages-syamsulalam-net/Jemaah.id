import { Star, MessageSquare, Eye, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export default function ReviewsDashboard() {
  const reviews = [
    {
      id: 1,
      name: 'Ahmad Rizki',
      rating: 5,
      date: '2 hari lalu',
      comment: 'Pelayanan sangat memuaskan, pembimbing sangat membantu selama ibadah.',
      package: 'Umroh Syawal Berkah',
      responded: true,
      response: 'Terima kasih banyak Pak Ahmad! Semoga ibadahnya diterima oleh Allah SWT.'
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      rating: 5,
      date: '5 hari lalu',
      comment: 'Hotel dekat dengan Masjidil Haram, makanan enak dan bervariasi.',
      package: 'Umroh Ramadhan Premium',
      responded: false,
      response: ''
    },
    {
      id: 3,
      name: 'Budi Santoso',
      rating: 4,
      date: '1 minggu lalu',
      comment: 'Secara keseluruhan bagus, hanya sedikit delay di bandara saat pulang.',
      package: 'Umroh VIP 12 Hari',
      responded: true,
      response: 'Terima kasih feedbacknya Pak Budi, akan kami koordinasikan dengan maskapai.'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Dashboard Ulasan</h1>
        <p className="text-slate-500">Kelola dan respon ulasan dari jamaah</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Total Ulasan</div>
            <div className="text-3xl font-bold text-slate-900">342</div>
            <div className="text-xs text-slate-400 mt-1">Semua waktu</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Rating Rata-rata</div>
            <div className="flex items-center gap-2 mb-1">
              <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
              <span className="text-3xl font-bold text-slate-900">4.9</span>
            </div>
            <div className="text-xs text-slate-400">dari 5.0</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Perlu Respon</div>
            <div className="text-3xl font-bold text-amber-600">28</div>
            <Badge variant="warning" className="mt-2">Menunggu</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Respon Rate</div>
            <div className="text-3xl font-bold text-green-600">92%</div>
            <Badge variant="success" className="mt-2">
              <CheckCircle className="h-3 w-3 mr-1" />
              Bagus
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="p-0 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{review.name}</h3>
                    <Badge variant="primary">{review.package}</Badge>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 text-sm text-slate-500">{review.date}</span>
                  </div>
                  <p className="text-slate-700 mb-3">{review.comment}</p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Eye className="h-4 w-4" />
                    Lihat
                  </Button>
                </div>
              </div>

              {/* Response Section */}
              {review.responded ? (
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900 mb-1">Respon Anda:</div>
                      <div className="text-sm text-slate-700">{review.response}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2 pt-4 border-t border-slate-100">
                  <textarea
                    className="flex-1 p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tulis respon untuk ulasan ini..."
                    rows={2}
                  />
                  <Button className="self-end">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Respon
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
