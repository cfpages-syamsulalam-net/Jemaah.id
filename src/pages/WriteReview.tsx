import { useState } from 'react'
import { Star, Upload, X } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Input } from '../components/ui/Input'

export default function WriteReview() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [reviewText, setReviewText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Review submitted! Rating: ${rating}, Review: ${reviewText}`)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Tulis Ulasan</h1>
        <p className="text-slate-500">Bagikan pengalaman Anda tentang paket umroh</p>
      </div>

      <Card>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Package Info */}
            <div className="p-4 bg-slate-50 rounded-lg mb-6">
              <div className="text-sm text-slate-500 mb-1">Mengulas Paket</div>
              <div className="font-bold text-slate-900">Umroh Syawal Berkah - Patuhi Travel</div>
              <div className="text-sm text-slate-600">Keberangkatan: 15 Mei 2026</div>
            </div>

            {/* Overall Rating */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Rating Keseluruhan *
              </label>
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-colors"
                  >
                    <Star
                      className={`h-10 w-10 ${
                        star <= (hoverRating || rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="text-sm text-slate-600">
                {rating > 0 ? `${rating} dari 5 bintang` : 'Klik untuk memberi rating'}
              </div>
            </div>

            {/* Detailed Ratings */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900">Rating Detail</h3>
              
              {[
                'Kualitas Akomodasi',
                'Pelayanan Pembimbing',
                'Kualitas Makanan',
                'Transportasi',
                'Kepuasan Keseluruhan'
              ].map((category) => (
                <div key={category} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-700">{category}</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-slate-300" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Review Text */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Ulasan Anda *
              </label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Ceritakan pengalaman Anda selama umroh..."
                className="w-full min-h-[150px] p-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                maxLength={1000}
              />
              <div className="text-xs text-slate-500 mt-1 text-right">
                {reviewText.length}/1000 karakter
              </div>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Foto Dokumentasi (Opsional)
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="h-8 w-8 mx-auto mb-2 text-slate-400" />
                <div className="text-sm text-slate-600 mb-1">Klik untuk upload foto</div>
                <div className="text-xs text-slate-500">Maks. 5 foto (JPG, PNG)</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1" size="lg">
                Kirim Ulasan
              </Button>
              <Button type="button" variant="outline" size="lg">
                Batal
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
