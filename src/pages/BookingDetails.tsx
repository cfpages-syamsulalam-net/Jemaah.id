import { Calendar, MapPin, Plane, Users, FileText, Download } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export default function BookingDetails() {
  const booking = {
    id: 'BK-2026-001',
    packageName: 'Umroh Syawal Berkah',
    agency: 'Patuhi Travel',
    departure: 'Jakarta',
    date: '15 Mei 2026',
    return: '23 Mei 2026',
    duration: '9 Hari',
    status: 'confirmed',
    passengers: [
      { name: 'Ahmad Rizki', passport: 'A1234567', seat: '12A' },
      { name: 'Siti Nurhaliza', passport: 'B7654321', seat: '12B' }
    ],
    roomType: 'Quad (4 orang)',
    hotelMakkah: 'Hilton Suites',
    hotelMadinah: 'Anwar Al Madinah',
    airline: 'Saudia Airlines',
    flightOut: 'SV-812 (Jakarta → Madinah)',
    flightBack: 'SV-811 (Makkah → Jakarta)',
    totalPrice: '59.000.000',
    paymentStatus: 'paid',
    paymentMethod: 'Bank Transfer',
    paymentDate: '5 April 2026'
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Detail Booking</h1>
        <p className="text-slate-500">
          ID: {booking.id}
        </p>
      </div>

      {/* Status Banner */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{booking.packageName}</h3>
                <p className="text-slate-600">{booking.agency}</p>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="success" className="mb-2">Dikonfirmasi</Badge>
              <div className="text-sm text-slate-500">Lunas</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Trip Details */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Detail Perjalanan</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-sm text-slate-500">Tanggal</div>
                  <div className="font-bold text-slate-900">{booking.date} - {booking.return}</div>
                  <div className="text-sm text-slate-600">{booking.duration}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Plane className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-sm text-slate-500">Penerbangan PP</div>
                  <div className="font-bold text-slate-900">{booking.airline}</div>
                  <div className="text-sm text-slate-600">Outbound: {booking.flightOut}</div>
                  <div className="text-sm text-slate-600">Return: {booking.flightBack}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-sm text-slate-500">Hotel</div>
                  <div className="font-bold text-slate-900">Makkah: {booking.hotelMakkah}</div>
                  <div className="font-bold text-slate-900">Madinah: {booking.hotelMadinah}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Passengers */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Data Jamaah</h3>
            <div className="space-y-3">
              {booking.passengers.map((passenger, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="font-bold text-slate-900">{passenger.name}</span>
                    </div>
                    <Badge variant="primary">Seat {passenger.seat}</Badge>
                  </div>
                  <div className="text-sm text-slate-600">Paspor: {passenger.passport}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Info */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Informasi Pembayaran</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-slate-500 mb-1">Total</div>
              <div className="text-xl font-bold text-primary">Rp {booking.totalPrice}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Metode</div>
              <div className="font-bold text-slate-900">{booking.paymentMethod}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Tanggal Bayar</div>
              <div className="font-bold text-slate-900">{booking.paymentDate}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Status</div>
              <Badge variant="success">Lunas</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
        <Button variant="outline" className="gap-2">
          <FileText className="h-4 w-4" />
          Lihat Itinerary
        </Button>
        <Button variant="secondary">Hubungi Travel</Button>
      </div>
    </div>
  )
}
