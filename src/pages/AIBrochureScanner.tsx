import { useState } from 'react'
import { Upload, FileImage, Zap, Eye, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export default function AIBrochureScanner() {
  const [uploaded, setUploaded] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">
          AI Brochure Scanner
        </h1>
        <p className="text-slate-500">
          Upload brosur travel untuk diekstrak datanya secara otomatis
        </p>
      </div>

      {!uploaded ? (
        <Card>
          <CardContent className="p-12">
            <div className="text-center">
              <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Upload Brosur Package
              </h2>
              <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                AI kami akan membaca dan mengekstrak informasi paket umroh dari brosur secara otomatis
              </p>

              <div
                className="border-2 border-dashed border-slate-300 rounded-lg p-12 hover:border-primary transition-colors cursor-pointer mb-6"
                onClick={() => setUploaded(true)}
              >
                <FileImage className="h-12 w-12 mx-auto mb-4 text-slate-400" />
                <div className="text-lg font-bold text-slate-900 mb-2">
                  Klik untuk upload atau drag & drop
                </div>
                <div className="text-sm text-slate-500 mb-4">
                  JPG, PNG, PDF (Maks. 10MB per file)
                </div>
                <div className="text-xs text-slate-400">
                  Bisa upload multiple brochures sekaligus
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-bold text-slate-900 mb-1">Cepat</div>
                  <div className="text-slate-600">Proses dalam hitungan detik</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <Eye className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-bold text-slate-900 mb-1">Akurat</div>
                  <div className="text-slate-600">OCR + AI untuk akurasi tinggi</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-bold text-slate-900 mb-1">Mudah</div>
                  <div className="text-slate-600">Review & edit sebelum publish</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {/* Upload Success */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    Upload Berhasil!
                  </h3>
                  <p className="text-slate-600">
                    Brosur sedang diproses oleh AI...
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <FileImage className="h-5 w-5 text-primary" />
                    <span className="font-bold text-slate-900">brochure-umroh-2026.jpg</span>
                  </div>
                  <Badge variant="success">Uploaded</Badge>
                </div>
                <div className="text-sm text-slate-600">
                  Ukuran: 2.4 MB • Diupload: Baru saja
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Processing */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Proses Ekstraksi</h3>
              <div className="space-y-3">
                {[
                  { step: 'Upload file', status: 'completed' },
                  { step: 'OCR Processing', status: 'processing' },
                  { step: 'AI Data Extraction', status: 'pending' },
                  { step: 'Review Results', status: 'pending' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {item.status === 'completed' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : item.status === 'processing' ? (
                      <div className="h-5 w-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <div className="h-5 w-5 border-2 border-slate-300 rounded-full" />
                    )}
                    <span className={item.status === 'processing' ? 'font-bold text-primary' : 'text-slate-700'}>
                      {item.step}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What Will Be Extracted */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Data yang Akan Diekstrak</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Nama Paket',
                  'Harga',
                  'Durasi',
                  'Kota Keberangkatan',
                  'Maskapai',
                  'Hotel Makkah',
                  'Hotel Madinah',
                  'Tanggal Keberangkatan',
                  'Fasilitas',
                  'Itinerary'
                ].map((field, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>{field}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={() => setUploaded(false)}>
              Upload Brosur Lain
            </Button>
            <Button className="flex-1">
              Lihat Hasil Ekstraksi
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
