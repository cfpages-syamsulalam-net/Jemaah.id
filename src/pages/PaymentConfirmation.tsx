import { Link } from 'react-router-dom'
import { CheckCircle, Calendar, Mail, Phone } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

export default function PaymentConfirmation() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="text-center mb-8">
        <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">
          Pembayaran Berhasil!
        </h1>
        <p className="text-slate-500">
          Booking Anda sedang diproses
        </p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <Badge variant="secondary" className="mb-3">Menunggu Konfirmasi</Badge>
            <div className="text-sm text-slate-500 mb-1">ID Booking</div>
            <div className="text-2xl font-bold text-slate-900">BK-2026-002</div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center py-3 border-b border-slate-100">
              <span className="text-slate-600">Paket</span>
              <span className="font-bold text-slate-900">Umroh Syawal Berkah</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-100">
              <span className="text-slate-600">Travel</span>
              <span className="font-bold text-slate-900">Patuhi Travel</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-100">
              <span className="text-slate-600">Jamaah</span>
              <span className="font-bold text-slate-900">2 orang</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-100">
              <span className="text-slate-600">Total Bayar</span>
              <span className="font-bold text-primary">Rp 59.500.000</span>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg">
            <div className="text-sm text-slate-600 mb-2">Langkah Selanjutnya:</div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-xs">
                  1
                </div>
                <span>Travel akan mengkonfirmasi booking Anda dalam 1-2 hari kerja</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-xs">
                  2
                </div>
                <span>Anda akan menerima email konfirmasi dengan detail lengkap</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-xs">
                  3
                </div>
                <span>Tim kami akan menghubungi untuk proses visa dan persiapan</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3 mb-6">
        <Link to="/my-bookings">
          <Button className="w-full" size="lg">
            <Calendar className="h-5 w-5 mr-2" />
            Lihat Riwayat Booking
          </Button>
        </Link>
        <Link to="/">
          <Button variant="outline" className="w-full" size="lg">
            Kembali ke Beranda
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="p-6 text-center">
          <div className="text-sm text-slate-500 mb-3">Butuh Bantuan?</div>
          <div className="space-y-2 text-sm text-slate-600">
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              <span>support@jemaah.id</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+62 812-3456-7890</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
