import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Pesan terkirim! Kami akan merespons dalam 1x24 jam.')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge variant="primary" className="mb-4">Kontak</Badge>
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
          Hubungi Kami
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Tim kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">support@jemaah.id</p>
                    <p className="text-sm text-slate-500">Respons dalam 1x24 jam</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Telepon</h4>
                    <p className="text-slate-600">+62 812-3456-7890</p>
                    <p className="text-sm text-slate-500">Senin-Jumat, 09:00-17:00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Kantor</h4>
                    <p className="text-slate-600">Jl. Kemang Raya No. 123</p>
                    <p className="text-slate-600">Jakarta Selatan, 12730</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Jam Operasional</h4>
                    <p className="text-slate-600">Senin-Jumat: 09:00 - 17:00 WIB</p>
                    <p className="text-slate-600">Sabtu: 09:00 - 14:00 WIB</p>
                    <p className="text-sm text-green-600 font-bold">Customer Support: 24/7</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Butuh Bantuan Cepat?</h3>
              <div className="space-y-3">
                <a href="/faq" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="font-bold text-slate-900">FAQ</div>
                  <div className="text-sm text-slate-600">Temukan jawaban pertanyaan umum</div>
                </a>
                <a href="/partner" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="font-bold text-slate-900">Jadi Partner</div>
                  <div className="text-sm text-slate-600">Daftarkan travel Anda sebagai mitra</div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Nama Lengkap *
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Masukkan nama Anda"
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="email@contoh.com"
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Subjek *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full h-12 px-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Pilih subjek</option>
                  <option value="booking">Pertanyaan Booking</option>
                  <option value="payment">Masalah Pembayaran</option>
                  <option value="complaint">Keluhan</option>
                  <option value="partnership">Kerjasama Partnership</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Pesan *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full min-h-[150px] p-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>

              <Button type="submit" className="w-full gap-2" size="lg">
                <Send className="h-5 w-5" />
                Kirim Pesan
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
