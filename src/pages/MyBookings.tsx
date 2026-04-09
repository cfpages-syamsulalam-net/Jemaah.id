import { Calendar, Users, DollarSign, Clock, CheckCircle, XCircle, AlertCircle, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { DUMMY_BOOKINGS } from '../data/dummyData'

export default function MyBookings() {
  const bookings = DUMMY_BOOKINGS

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="success">Akan Datang</Badge>
      case 'completed':
        return <Badge variant="primary">Selesai</Badge>
      case 'cancelled':
        return <Badge variant="error">Dibatalkan</Badge>
      default:
        return null
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Clock className="h-5 w-5 text-green-500" />
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-primary" />
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-slate-400" />
    }
  }

  if (bookings.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <Calendar className="h-16 w-16 mx-auto mb-4 text-slate-300" />
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Belum Ada Booking</h1>
        <p className="text-slate-500 mb-6">
          Anda belum memiliki riwayat pemesanan.
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
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Riwayat Booking</h1>
        <p className="text-slate-500">
          {bookings.length} pemesanan
        </p>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <Card key={booking.id} className="p-0 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{booking.packageName}</h3>
                    {getStatusBadge(booking.status)}
                  </div>
                  <p className="text-sm text-slate-600 mb-1">{booking.agency}</p>
                  <p className="text-xs text-slate-500">ID Booking: {booking.id}</p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(booking.status)}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-sm text-slate-500 mb-1 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Tanggal
                  </div>
                  <div className="font-bold text-slate-900">{booking.date}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Jamaah
                  </div>
                  <div className="font-bold text-slate-900">{booking.passengers} orang</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Tipe Kamar</div>
                  <div className="font-bold text-slate-900">{booking.roomType}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1 flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Total
                  </div>
                  <div className="font-bold text-primary">Rp {booking.totalPrice}</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <Eye className="h-4 w-4" />
                  Lihat Detail
                </Button>
                {booking.status === 'upcoming' && (
                  <Button variant="secondary">Kelola Booking</Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
