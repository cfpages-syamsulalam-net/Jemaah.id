import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Scale, AlertTriangle, Shield, CreditCard, UserX, FileText } from 'lucide-react'

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge variant="primary" className="mb-4">Legal</Badge>
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
          Syarat & Ketentuan
        </h1>
        <p className="text-slate-500">Terakhir diperbarui: 10 April 2026</p>
      </div>

      {/* Content */}
      <div className="space-y-8">
        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">1. Penerimaan Syarat</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Dengan mengakses dan menggunakan platform Jemaah.id, Anda ("Pengguna", "Anda") 
              menyetujui untuk terikat oleh Syarat & Ketentuan ini. Jika Anda tidak menyetujui, 
              harap tidak menggunakan layanan kami.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Jemaah.id berhak mengubah Syarat & Ketentuan ini sewaktu-waktu. Perubahan berlaku 
              segera setelah diposting di platform.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">2. Deskripsi Layanan</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Jemaah.id adalah platform digital yang menyediakan:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Layanan perbandingan paket Umroh & Haji dari berbagai travel</li>
              <li>Verifikasi legalitas dan kualitas travel mitra</li>
              <li>Sistem booking dan pembayaran online</li>
              <li>Manajemen dokumen perjalanan</li>
              <li>Ulasan dan rating dari jamaah</li>
            </ul>
            <p className="text-slate-600 mt-4 leading-relaxed">
              <strong>Penting:</strong> Jemaah.id adalah platform perbandingan dan booking. 
              Pelaksanaan ibadah adalah tanggung jawab travel mitra yang Anda pilih.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">3. Akun & Keamanan</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Anda bertanggung jawab atas keamanan akun Anda</li>
              <li>Gunakan password yang kuat dan jangan bagikan kepada pihak lain</li>
              <li>Segera hubungi kami jika mencurigai adanya penyalahgunaan</li>
              <li>Kami berhak menonaktifkan akun yang melanggar ketentuan</li>
              <li>Anda wajib memberikan informasi yang akurat dan terbaru</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">4. Pembayaran & Refund</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">4.1 Pembayaran:</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Harga yang tertermasuk sudah termasuk semua komponen yang dijelaskan</li>
                  <li>Pembayaran diproses melalui payment gateway yang aman</li>
                  <li>Booking dikonfirmasi setelah pembayaran diterima penuh</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-900 mb-2">4.2 Pembatalan & Refund:</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Pembatalan H-30 atau lebih: Potongan admin 10%</li>
                  <li>Pembatalan H-14 sampai H-29: Refund 50%</li>
                  <li>Pembatalan H-7 sampai H-13: Refund 25%</li>
                  <li>Pembatalan kurang dari H-7: Tidak ada refund</li>
                </ul>
                <p className="text-sm text-slate-500 mt-2">
                  *Kebijakan dapat berbeda tergantung travel yang dipilih
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">5. Batasan Tanggung Jawab</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Jemaah.id tidak bertanggung jawab atas pelaksanaan ibadah oleh travel</li>
              <li>Kami tidak menjamin ketersediaan slot atau harga tertentu</li>
              <li>Kami tidak bertanggung jawab atas force majeure (bencana alam, pandemi, dll)</li>
              <li>Verifikasi travel dilakukan sebaik mungkin, namun tidak menjamin 100% bebas risiko</li>
              <li>Pengguna disarankan untuk membeli asuransi perjalanan</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <UserX className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">6. Pelanggaran & Sanksi</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Kami berhak menonaktifkan akun Pengguna yang:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Memberikan informasi palsu atau menyesatkan</li>
              <li>Menyalahgunakan platform untuk tujuan ilegal</li>
              <li>Melakukan spam atau ulasan palsu</li>
              <li>Mencoba membobol keamanan sistem</li>
              <li>Melanggar hak kekayaan intelektual</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Hubungi Kami</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Pertanyaan tentang Syarat & Ketentuan dapat dikirim ke:
            </p>
            <div className="bg-slate-50 rounded-lg p-4 space-y-2">
              <p className="text-slate-700"><strong>Email:</strong> legal@jemaah.id</p>
              <p className="text-slate-700"><strong>Telepon:</strong> +62 812-3456-7890</p>
              <p className="text-slate-700"><strong>Alamat:</strong> Jakarta Selatan, Indonesia</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
