import { useState } from 'react'
import { CheckCircle, Edit, Save, ArrowLeft, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function AIScanResults() {
  const [editing, setEditing] = useState(false)

  const extractedData = {
    packageName: 'Umroh Syawal Berkah 2026',
    agency: 'Patuhi Travel',
    price: '29.500.000',
    duration: '9 Hari',
    departure: 'Jakarta',
    airline: 'Saudia Airlines',
    hotelMakkah: 'Hilton Suites',
    hotelMakkahStar: '5',
    hotelMadinah: 'Anwar Al Madinah',
    hotelMadinahStar: '4',
    includes: ['Visa Umroh', 'Tiket Pesawat PP', 'Hotel Bintang 4-5', 'Makan 3x Sehari']
  }

  const confidenceScores = {
    packageName: 98,
    agency: 95,
    price: 99,
    duration: 97,
    departure: 92,
    airline: 88,
    hotelMakkah: 94,
    hotelMakkahStar: 96,
    hotelMadinah: 91,
    hotelMadinahStar: 93,
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <Link to="/partner/scanner" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali</span>
        </Link>
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">
          Hasil Scan AI
        </h1>
        <p className="text-slate-500">
          Review dan edit data yang diekstrak dari brosur
        </p>
      </div>

      {/* Accuracy Overview */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Ekstraksi Berhasil</h3>
                <p className="text-sm text-slate-600">Akurasi rata-rata: 94%</p>
              </div>
            </div>
            <Badge variant="success">10/10 fields extracted</Badge>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {Object.entries(confidenceScores).map(([field, score]) => (
              <div key={field} className="p-2 bg-slate-50 rounded-lg text-center">
                <div className={`text-lg font-bold ${score >= 95 ? 'text-green-600' : score >= 90 ? 'text-primary' : 'text-amber-600'}`}>
                  {score}%
                </div>
                <div className="text-xs text-slate-500 capitalize">{field}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Extracted Data */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">Data yang Diekstrak</h3>
            {!editing ? (
              <Button onClick={() => setEditing(true)} className="gap-2">
                <Edit className="h-4 w-4" />
                Edit Data
              </Button>
            ) : (
              <Button className="gap-2 bg-green-600 hover:bg-green-700">
                <Save className="h-4 w-4" />
                Simpan Perubahan
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Nama Paket
              </label>
              {editing ? (
                <Input defaultValue={extractedData.packageName} className="h-12" />
              ) : (
                <div className="p-3 bg-slate-50 rounded-lg font-bold text-slate-900">{extractedData.packageName}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Agency
              </label>
              {editing ? (
                <Input defaultValue={extractedData.agency} className="h-12" />
              ) : (
                <div className="p-3 bg-slate-50 rounded-lg font-bold text-slate-900">{extractedData.agency}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Harga (Rp)
              </label>
              {editing ? (
                <Input defaultValue={extractedData.price} className="h-12" />
              ) : (
                <div className="p-3 bg-slate-50 rounded-lg font-bold text-primary">Rp {extractedData.price}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Durasi
              </label>
              {editing ? (
                <Input defaultValue={extractedData.duration} className="h-12" />
              ) : (
                <div className="p-3 bg-slate-50 rounded-lg font-bold text-slate-900">{extractedData.duration}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Kota Keberangkatan
              </label>
              {editing ? (
                <Input defaultValue={extractedData.departure} className="h-12" />
              ) : (
                <div className="p-3 bg-slate-50 rounded-lg font-bold text-slate-900">{extractedData.departure}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Maskapai
              </label>
              {editing ? (
                <Input defaultValue={extractedData.airline} className="h-12" />
              ) : (
                <div className="p-3 bg-slate-50 rounded-lg font-bold text-slate-900">{extractedData.airline}</div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1">
          Simpan sebagai Draft
        </Button>
        <Button className="flex-1 gap-2">
          <Zap className="h-5 w-5" />
          Publish Paket
        </Button>
      </div>
    </div>
  )
}
