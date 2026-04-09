import { Link } from 'react-router-dom'
import { Users, Home, AlertCircle } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

export default function BookingSummary() {
  const bookingDetails = {
    packageName: 'Umroh Syawal Berkah',
    agency: 'Patuhi Travel',
    departure: 'Jakarta',
    date: '15 Mei 2026',
    duration: '9 Hari',
    roomType: 'Quad (4 orang)',
    passengers: [
      { name: 'Ahmad Rizki', passport: 'A1234567' },
      { name: 'Siti Nurhaliza', passport: 'B7654321' }
    ],
    pricePerPerson: 29500000,
    totalPassengers: 2,
    subtotal: 59000000,
    adminFee: 500000,
    total: 59500000
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <span className="text-slate-500">Pilih Kamar</span>
          </div>
          <div className="h-1 flex-1 mx-4 bg-slate-200">
            <div className="h-full bg-primary"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <span className="text-slate-500">Data Jamaah</span>
          </div>
          <div className="h-1 flex-1 mx-4 bg-slate-200">
            <div className="h-full bg-primary w-1/2"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <span className="font-bold text-slate-900">Pembayaran</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Ringkasan Booking</h1>
        <p className="text-slate-500">
          Periksa kembali detail pemesanan Anda
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Booking Details */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Detail Paket</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Paket</span>
                  <span className="font-bold text-slate-900">{bookingDetails.packageName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Travel</span>
                  <span className="font-bold text-slate-900">{bookingDetails.agency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Keberangkatan</span>
                  <span className="font-bold text-slate-900">{bookingDetails.departure}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Tanggal</span>
                  <span className="font-bold text-slate-900">{bookingDetails.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Durasi</span>
                  <span className="font-bold text-slate-900">{bookingDetails.duration}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Akomodasi</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Home className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">Tipe Kamar</div>
                    <div className="text-sm text-slate-600">{bookingDetails.roomType}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Data Jamaah</h3>
              <div className="space-y-3">
                {bookingDetails.passengers.map((passenger, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div className="flex-1">
                      <div className="font-bold text-slate-900">{passenger.name}</div>
                      <div className="text-sm text-slate-600">Paspor: {passenger.passport}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-800">
              <strong>Penting:</strong> Pastikan semua data sesuai dengan dokumen perjalanan Anda. 
              Perubahan setelah pembayaran mungkin dikenakan biaya tambahan.
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div>
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Rincian Biaya</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">
                    Rp {bookingDetails.pricePerPerson.toLocaleString('id-ID')} × {bookingDetails.totalPassengers} orang
                  </span>
                  <span className="text-slate-900">
                    Rp {bookingDetails.subtotal.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Biaya Admin</span>
                  <span className="text-slate-900">
                    Rp {bookingDetails.adminFee.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
              
              <div className="pt-4 border-t mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900">Total</span>
                  <span className="text-2xl font-bold text-primary">
                    Rp {bookingDetails.total.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <Link to="/booking/payment" className="block mb-3">
                <Button className="w-full" size="lg">
                  Lanjut ke Pembayaran
                </Button>
              </Link>
              <Link to="/booking/passenger">
                <Button variant="outline" className="w-full">
                  Kembali
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
