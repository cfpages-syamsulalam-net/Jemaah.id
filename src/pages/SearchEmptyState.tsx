import { Search, Package, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

export default function SearchEmptyState() {
  return (
    <div className="container mx-auto px-4 py-20">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-12 text-center">
          {/* Empty State Icon */}
          <div className="h-24 w-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="h-12 w-12 text-slate-400" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-display font-bold text-slate-900 mb-3">
            Tidak Ada Paket Ditemukan
          </h1>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            Coba ubah filter atau kata kunci pencarian Anda untuk menemukan paket umroh yang sesuai.
          </p>

          {/* Suggestions */}
          <div className="bg-slate-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-bold text-slate-900 mb-3">Saran Pencarian:</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Coba ubah kota keberangkatan (Jakarta, Surabaya, Makassar)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Perluas rentang bulan keberangkatan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Kurangi jumlah filter yang aktif</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Coba durasi yang berbeda (9 hari, 12 hari)</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Link to="/" className="flex-1">
              <Button className="w-full">
                Kembali ke Beranda
              </Button>
            </Link>
            <Link to="/search" className="flex-1">
              <Button variant="outline" className="w-full">
                <X className="h-4 w-4 mr-2" />
                Reset Filter
              </Button>
            </Link>
          </div>

          {/* Popular Searches */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Pencarian Populer:</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'Umroh Mei 2026',
                'Umroh Jakarta',
                'Umroh 9 Hari',
                'Haji Plus',
                'Umroh Ramadhan'
              ].map((query, index) => (
                <Link key={index} to="/search">
                  <Button variant="outline" size="sm" className="text-sm">
                    <Package className="h-3 w-3 mr-2" />
                    {query}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
