import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Shield, Database, Lock, Eye, UserCheck, Mail } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge variant="primary" className="mb-4">Legal</Badge>
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
          Kebijakan Privasi
        </h1>
        <p className="text-slate-500">Terakhir diperbarui: 10 April 2026</p>
      </div>

      {/* Content */}
      <div className="space-y-8">
        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">1. Pendahuluan</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              PT Jemaah Indonesia Sejahtera ("Jemaah.id", "kami", "kita") berkomitmen untuk melindungi 
              privasi dan keamanan data pribadi Anda ("Pengguna", "Anda"). Kebijakan Privasi ini 
              menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan membagikan informasi Anda.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Dengan menggunakan platform Jemaah.id, Anda menyetujui pengumpulan dan penggunaan informasi 
              sesuai dengan Kebijakan Privasi ini.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Database className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">2. Informasi yang Kami Kumpulkan</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">2.1 Informasi yang Anda Berikan:</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Nama lengkap, email, nomor telepon</li>
                  <li>Data paspor dan dokumen perjalanan</li>
                  <li>Informasi pembayaran (diproses secara aman oleh payment gateway)</li>
                  <li>Data jamaah yang Anda daftarkan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-900 mb-2">2.2 Informasi yang Dikumpulkan Secara Otomatis:</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Log penggunaan platform (halaman yang dikunjungi, waktu akses)</li>
                  <li>Informasi perangkat (browser, sistem operasi, IP address)</li>
                  <li>Cookies dan teknologi pelacakan serupa</li>
                  <li>Riwayat pencarian dan preferensi</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">3. Bagaimana Kami Menggunakan Informasi Anda</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Memproses booking dan pembayaran paket Umroh/Haji</li>
              <li>Verifikasi identitas dan dokumen perjalanan</li>
              <li>Menghubungkan Anda dengan travel yang Anda pilih</li>
              <li>Mengirimkan notifikasi status booking</li>
              <li>Meningkatkan pengalaman dan fitur platform</li>
              <li>Mencegah penipuan dan penyalahgunaan</li>
              <li>Memenuhi kewajiban hukum dan regulasi</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">4. Berbagi Informasi dengan Pihak Ketiga</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Kami <strong>tidak menjual</strong> data pribadi Anda kepada pihak ketiga. Kami hanya membagikan 
              informasi Anda dalam situasi berikut:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><strong>Dengan Travel:</strong> Data yang diperlukan untuk memproses booking Anda</li>
              <li><strong>Dengan Payment Gateway:</strong> Informasi pembayaran untuk memproses transaksi</li>
              <li><strong>Dengan Otoritas:</strong> Jika diwajibkan oleh hukum atau perintah pengadilan</li>
              <li><strong>Dengan Persetujuan Anda:</strong> Untuk tujuan spesifik yang Anda setujui</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">5. Hak Anda</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><strong>Akses:</strong> Meminta salinan data pribadi Anda yang kami simpan</li>
              <li><strong>Koreksi:</strong> Meminta perbaikan data yang tidak akurat</li>
              <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi Anda</li>
              <li><strong>Penarikan Persetujuan:</strong> Menolak pemrosesan data tertentu</li>
              <li><strong>Portabilitas:</strong> Memindahkan data Anda ke layanan lain</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Untuk menggunakan hak Anda, hubungi kami di{' '}
              <a href="mailto:privacy@jemaah.id" className="text-primary hover:underline">
                privacy@jemaah.id
              </a>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-slate-900">6. Hubungi Kami</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi:
            </p>
            <div className="bg-slate-50 rounded-lg p-4 space-y-2">
              <p className="text-slate-700"><strong>Email:</strong> privacy@jemaah.id</p>
              <p className="text-slate-700"><strong>Telepon:</strong> +62 812-3456-7890</p>
              <p className="text-slate-700"><strong>Alamat:</strong> Jakarta Selatan, Indonesia</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
