import { useState } from 'react'
import { ArrowLeft, ArrowRight, Upload, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Badge } from '../components/ui/Badge'

export default function AddPackageWizard() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    { number: 1, title: 'Informasi Dasar' },
    { number: 2, title: 'Hotel & Transport' },
    { number: 3, title: 'Itinerary' },
    { number: 4, title: 'Review & Publish' }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link to="/partner/packages" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali</span>
        </Link>
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Tambah Paket Baru</h1>
        <p className="text-slate-500">Wizard Anti-Ngawur - Pastikan data akurat</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${
              currentStep >= step.number 
                ? 'bg-primary text-white' 
                : 'bg-slate-200 text-slate-500'
            }`}>
              {currentStep > step.number ? <CheckCircle className="h-5 w-5" /> : step.number}
            </div>
            <div className="ml-2 text-sm font-bold text-slate-900">{step.title}</div>
            {index < steps.length - 1 && (
              <div className={`h-1 w-16 mx-4 ${
                currentStep > step.number ? 'bg-primary' : 'bg-slate-200'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <Card>
        <CardContent className="p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Informasi Dasar Paket</h3>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Nama Paket *
                </label>
                <Input placeholder="Contoh: Umroh Syawal Berkah 2026" className="h-12" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Durasi (Hari) *
                  </label>
                  <Input placeholder="9" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Harga per Orang (Rp) *
                  </label>
                  <Input placeholder="29500000" className="h-12" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Kota Keberangkatan *
                  </label>
                  <select className="w-full h-12 px-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Jakarta</option>
                    <option>Surabaya</option>
                    <option>Makassar</option>
                    <option>Bandung</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Maskapai *
                  </label>
                  <select className="w-full h-12 px-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Saudia Airlines</option>
                    <option>Garuda Indonesia</option>
                    <option>Turkish Airlines</option>
                    <option>Lion Air</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Deskripsi Paket
                </label>
                <textarea
                  className="w-full min-h-[120px] p-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Jelaskan keunikan paket Anda..."
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Hotel & Transportasi</h3>
              
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="text-sm text-blue-800">
                  <strong>Info:</strong> Hotel akan diverifikasi otomatis via Google Maps untuk akurasi jarak.
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-3">Hotel Makkah</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">Nama Hotel</label>
                      <Input placeholder="Hilton Suites" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">Bintang</label>
                      <select className="w-full h-12 px-4 border border-slate-200 rounded-lg">
                        <option>5 Bintang</option>
                        <option>4 Bintang</option>
                        <option>3 Bintang</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-3">Hotel Madinah</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">Nama Hotel</label>
                      <Input placeholder="Anwar Al Madinah" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">Bintang</label>
                      <select className="w-full h-12 px-4 border border-slate-200 rounded-lg">
                        <option>5 Bintang</option>
                        <option>4 Bintang</option>
                        <option>3 Bintang</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Itinerary Perjalanan</h3>
              
              <div className="space-y-4">
                {[1, 2, 3].map((day) => (
                  <div key={day} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-slate-900">Hari {day}</h4>
                      <Badge variant="primary">Draft</Badge>
                    </div>
                    <Input placeholder="Judul kegiatan hari ini" className="h-12 mb-2" />
                    <textarea
                      className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Deskripsi kegiatan..."
                      rows={2}
                    />
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  + Tambah Hari
                </Button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Review & Publish</h3>
              
              <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                <h4 className="font-bold text-green-900 mb-2">Paket Siap Dipublikasikan!</h4>
                <p className="text-sm text-green-700">
                  Semua data telah lengkap dan siap untuk ditinjau oleh tim verifikasi.
                </p>
              </div>

              <div className="space-y-3 p-4 bg-slate-50 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-3">Checklist:</h4>
                {[
                  'Informasi dasar lengkap',
                  'Hotel Makkah & Madinah terisi',
                  'Itinerary 9 hari dibuat',
                  'Fasilitas tercatat',
                  'Harga sesuai'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  Simpan Draft
                </Button>
                <Button className="flex-1 gap-2">
                  <Upload className="h-5 w-5" />
                  Publish Paket
                </Button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep < 4 && (
            <div className="flex gap-3 mt-8 pt-6 border-t border-slate-200">
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Sebelumnya
                </Button>
              )}
              <Button
                className="flex-1"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Selanjutnya
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
