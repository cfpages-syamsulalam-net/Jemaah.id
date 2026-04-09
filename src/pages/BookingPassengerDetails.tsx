import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Input } from '../components/ui/Input'

interface Passenger {
  id: number
  fullName: string
  passportNumber: string
  birthDate: string
  gender: 'male' | 'female'
  phone: string
}

export default function BookingPassengerDetails() {
  const [passengers, setPassengers] = useState<Passenger[]>([
    {
      id: 1,
      fullName: '',
      passportNumber: '',
      birthDate: '',
      gender: 'male',
      phone: ''
    }
  ])

  const addPassenger = () => {
    setPassengers([
      ...passengers,
      {
        id: passengers.length + 1,
        fullName: '',
        passportNumber: '',
        birthDate: '',
        gender: 'male',
        phone: ''
      }
    ])
  }

  const removePassenger = (id: number) => {
    if (passengers.length > 1) {
      setPassengers(passengers.filter(p => p.id !== id))
    }
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
            <div className="h-full bg-primary w-1/2"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <span className="font-bold text-slate-900">Data Jamaah</span>
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
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Data Jamaah</h1>
        <p className="text-slate-500">
          Masukkan informasi lengkap sesuai paspor
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {passengers.map((passenger, index) => (
          <Card key={passenger.id} className="p-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Jamaah #{index + 1}
                </h3>
                {passengers.length > 1 && (
                  <button
                    onClick={() => removePassenger(passenger.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Nama Lengkap (Sesuai Paspor) *
                  </label>
                  <Input
                    placeholder="Contoh: AHMAD RIZKI BIN ABDULLAH"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Nomor Paspor *
                  </label>
                  <Input
                    placeholder="Contoh: A1234567"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Tanggal Lahir *
                  </label>
                  <Input
                    type="date"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Jenis Kelamin *
                  </label>
                  <select className="w-full h-12 px-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Nomor Telepon *
                  </label>
                  <Input
                    placeholder="+62 812-3456-7890"
                    className="h-12"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Button
          variant="outline"
          className="w-full gap-2"
          onClick={addPassenger}
        >
          <Plus className="h-5 w-5" />
          Tambah Jamaah
        </Button>
      </div>

      <div className="flex gap-3">
        <Link to="/booking/room" className="flex-1">
          <Button variant="outline" className="w-full" size="lg">
            Kembali
          </Button>
        </Link>
        <Link to="/booking/summary" className="flex-1">
          <Button className="w-full" size="lg">
            Lanjut ke Ringkasan
          </Button>
        </Link>
      </div>
    </div>
  )
}
