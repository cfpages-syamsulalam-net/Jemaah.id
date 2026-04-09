import { useState } from 'react'
import { Upload, Camera, FileText, CheckCircle, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export default function PassportUpload() {
  const [step, setStep] = useState<'upload' | 'preview' | 'success'>('upload')

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">
          Upload Paspor
        </h1>
        <p className="text-slate-500">
          Foto atau upload paspor Anda untuk verifikasi
        </p>
      </div>

      {step === 'upload' && (
        <Card>
          <CardContent className="p-8">
            {/* Instructions */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Panduan Foto Paspor</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                  <div className="text-sm font-bold text-green-900 mb-1">Foto yang Baik</div>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>✓ Seluruh halaman terlihat</li>
                    <li>✓ Fokus dan jelas</li>
                    <li>✓ Pencahayaan cukup</li>
                    <li>✓ Tidak ada glare</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-red-600 mb-2" />
                  <div className="text-sm font-bold text-red-900 mb-1">Hindari Ini</div>
                  <ul className="text-xs text-red-700 space-y-1">
                    <li>✗ Terpotong atau blur</li>
                    <li>✗ Gelap atau overexposed</li>
                    <li>✗ Ada glare/silau</li>
                    <li>✗ Miring atau terbalik</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Upload Area */}
            <div
              className="border-2 border-dashed border-slate-300 rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer mb-6"
              onClick={() => setStep('preview')}
            >
              <Upload className="h-12 w-12 mx-auto mb-4 text-slate-400" />
              <div className="text-lg font-bold text-slate-900 mb-2">
                Klik untuk upload paspor
              </div>
              <div className="text-sm text-slate-500 mb-2">
                JPG, PNG, PDF (Maks. 5MB)
              </div>
              <div className="text-xs text-slate-400">
                atau drag & drop file di sini
              </div>
            </div>

            {/* Mobile Camera Option */}
            <Button variant="outline" className="w-full gap-2 mb-3">
              <Camera className="h-5 w-5" />
              Ambil Foto dengan Kamera
            </Button>

            {/* Privacy Notice */}
            <div className="p-4 bg-slate-50 rounded-lg text-sm text-slate-600">
              <strong>Privasi Terjaga:</strong> Data paspor Anda dienkripsi dan hanya digunakan untuk verifikasi perjalanan.
            </div>
          </CardContent>
        </Card>
      )}

      {step === 'preview' && (
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Preview Paspor</h3>
              <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-16 w-16 text-slate-400" />
              </div>
              
              {/* Extracted Data Preview */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900">Data yang Terdeteksi:</h4>
                {[
                  { label: 'Nama Lengkap', value: 'AHMAD RIZKI BIN ABDULLAH' },
                  { label: 'Nomor Paspor', value: 'A1234567' },
                  { label: 'Tanggal Lahir', value: '15 Januari 1990' },
                  { label: 'Masa Berlaku', value: '20 Desember 2030' },
                ].map((field, index) => (
                  <div key={index} className="flex justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-slate-600">{field.label}</span>
                    <span className="text-sm font-bold text-slate-900">{field.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={() => setStep('upload')}>
              Upload Ulang
            </Button>
            <Button className="flex-1" onClick={() => setStep('success')}>
              Konfirmasi & Simpan
            </Button>
          </div>
        </div>
      )}

      {step === 'success' && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Paspor Berhasil Diupload!
            </h2>
            <p className="text-slate-600 mb-6">
              Paspor Anda sedang dalam proses verifikasi. Kami akan menginformasikan hasilnya dalam 1-2 hari kerja.
            </p>
            <div className="p-4 bg-slate-50 rounded-lg mb-6 text-left">
              <div className="text-sm text-slate-600 mb-2">Status: <Badge variant="warning">Menunggu Verifikasi</Badge></div>
              <div className="text-sm text-slate-600">Estimasi: 1-2 hari kerja</div>
            </div>
            <Link to="/profile">
              <Button className="w-full">
                Kembali ke Profil
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
