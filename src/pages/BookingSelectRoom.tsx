import { useState } from 'react'
import { Check, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

interface RoomType {
  id: string
  type: string
  description: string
  price: string
  priceNumeric: number
  available: number
  beds: string
  image?: string
}

const ROOM_TYPES: RoomType[] = [
  {
    id: 'quad',
    type: 'Quad (4 orang)',
    description: '4 tempat tidur dalam 1 kamar',
    price: '29.500.000',
    priceNumeric: 29500000,
    available: 5,
    beds: '4 Single Beds'
  },
  {
    id: 'triple',
    type: 'Triple (3 orang)',
    description: '3 tempat tidur dalam 1 kamar',
    price: '32.000.000',
    priceNumeric: 32000000,
    available: 3,
    beds: '3 Single Beds'
  },
  {
    id: 'double',
    type: 'Double (2 orang)',
    description: '2 tempat tidur dalam 1 kamar',
    price: '38.500.000',
    priceNumeric: 38500000,
    available: 2,
    beds: '2 Single Beds / 1 Double Bed'
  }
]

export default function BookingSelectRoom() {
  const [selectedRoom, setSelectedRoom] = useState<string>('quad')

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <span className="font-bold text-slate-900">Pilih Kamar</span>
          </div>
          <div className="h-1 flex-1 mx-4 bg-slate-200">
            <div className="h-full bg-primary w-0"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
              2
            </div>
            <span className="text-slate-500">Data Jamaah</span>
          </div>
          <div className="h-1 flex-1 mx-4 bg-slate-200">
            <div className="h-full bg-primary w-0"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
              3
            </div>
            <span className="text-slate-500">Pembayaran</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Pilih Tipe Kamar</h1>
        <p className="text-slate-500">
          Paket: Umroh Syawal Berkah - Patuhi Travel
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {ROOM_TYPES.map((room) => (
          <Card
            key={room.id}
            className={`p-0 cursor-pointer transition-all ${
              selectedRoom === room.id
                ? 'border-2 border-primary shadow-lg'
                : 'border border-slate-200 hover:border-primary/50'
            }`}
            onClick={() => setSelectedRoom(room.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{room.type}</h3>
                    {selectedRoom === room.id && (
                      <Badge variant="success">
                        <Check className="h-3 w-3 mr-1" />
                        Dipilih
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{room.description}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      <span>{room.beds}</span>
                    </div>
                    <div className="text-green-600 font-bold">
                      Tersisa {room.available} kamar
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500 mb-1">Harga per orang</div>
                  <div className="text-2xl font-bold text-primary">Rp {room.price}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-3">
        <Link to="/" className="flex-1">
          <Button variant="outline" className="w-full" size="lg">
            Batal
          </Button>
        </Link>
        <Link to="/booking/passenger" className="flex-1">
          <Button className="w-full" size="lg">
            Lanjut ke Data Jamaah
          </Button>
        </Link>
      </div>
    </div>
  )
}
