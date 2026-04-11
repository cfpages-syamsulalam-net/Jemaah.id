import { useState } from 'react'
import { Building2, CheckCircle, FileText, Users, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function PartnerRegistration() {
  const [formData, setFormData] = useState({
    agencyName: '',
    picName: '',
    email: '',
    phone: '',
    licenseNumber: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Pendaftaran berhasil! Tim kami akan menghubungi Anda dalam 2-3 hari kerja.')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="primary" className="mb-4">Partner Program</Badge>
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
          Jadilah Mitra Travel <span className="text-primary">Terverifikasi</span>
        </h1>
        <p className="text-lg text-slate-600">
          Bergabunglah dengan 150+ travel terpercaya di Jemaah.id dan jangkau ribuan jamaah potensial
        </p>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Akses ke Ribuan Jamaah</h3>
            <p className="text-sm text-slate-600">
              Dapatkan exposure ke 10,000+ jamaah aktif yang mencari paket setiap bulan
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Dashboard Analytics</h3>
            <p className="text-sm text-slate-600">
              Pantau performa paket, leads, dan konversi dengan dashboard lengkap
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Badge Terverifikasi</h3>
            <p className="text-sm text-slate-600">
              Dapatkan badge verifikasi yang meningkatkan kepercayaan jamaah
            </p>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Cara Bergabung</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Daftar', desc: 'Isi formulir pendaftaran' },
            { step: '2', title: 'Verifikasi', desc: 'Tim kami verifikasi legalitas' },
            { step: '3', title: 'Setup', desc: 'Upload paket pertama Anda' },
            { step: '4', title: 'Go Live', desc: 'Paket tampil ke ribuan jamaah' },
          ].map((item) => (
            <Card key={item.step}>
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Registration Form */}
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Formulir Pendaftaran
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Nama Travel/Agency *
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  value={formData.agencyName}
                  onChange={(e) => setFormData({...formData, agencyName: e.target.value})}
                  placeholder="Contoh: Patuhi Travel"
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Nama Penanggung Jawab *
              </label>
              <Input
                value={formData.picName}
                onChange={(e) => setFormData({...formData, picName: e.target.value})}
                placeholder="Nama lengkap PIC"
                className="h-12"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="email@travel.com"
                  className="h-12"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Telepon *
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+62 812-xxx-xxxx"
                  className="h-12"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Nomor Izin PPIU/PIHK *
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})}
                  placeholder="Contoh: PPIU/2024/123"
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full gap-2" size="lg">
              Daftar Sebagai Partner
              <ArrowRight className="h-5 w-5" />
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Sudah punya akun partner?{' '}
            <Link to="/partner/dashboard" className="text-primary font-bold hover:underline">
              Login ke Dashboard
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
