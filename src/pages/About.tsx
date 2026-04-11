import { Shield, Target, Users, Award, Building2, Globe } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="primary" className="mb-4">Tentang Kami</Badge>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
          Misi Kami untuk Transparansi <br />
          <span className="text-primary">Ibadah Umroh & Haji</span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Jemaah.id lahir dari keprihatinan terhadap maraknya kasus penipuan dan ketidaktransparanan 
          dalam industri travel Umroh & Haji di Indonesia. Kami hadir untuk memberikan perlindungan 
          kepada jamaah melalui verifikasi dan perbandingan yang objektif.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-slate-500">Travel Terverifikasi</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-slate-500">Jamaah Terlayani</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">5K+</div>
            <div className="text-sm text-slate-500">Paket Tersedia</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">34</div>
            <div className="text-sm text-slate-500">Provinsi Terjangkau</div>
          </CardContent>
        </Card>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <Card>
          <CardContent className="p-8">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Misi Kami</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Memberikan transparansi harga dan fasilitas paket Umroh & Haji</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Memverifikasi legalitas dan kualitas travel secara independen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Melindungi jamaah dari penipuan dan praktik tidak etis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Memudahkan perbandingan paket secara Apple-to-Apple</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Visi Kami</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Menjadi platform verifikasi dan perbandingan paket ibadah terbesar di Indonesia 
              yang dipercaya oleh jutaan jamaah dan ribuan travel.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Kami bercita-cita untuk menciptakan ekosistem yang transparan, di mana setiap jamaah 
              dapat membuat keputusan yang tepat berdasarkan data yang akurat dan terverifikasi.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Values */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Nilai-Nilai Kami</h2>
          <p className="text-slate-600">Prinsip yang kami pegang teguh dalam setiap langkah</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Transparansi</h3>
              <p className="text-slate-600 text-sm">
                Kami menampilkan informasi apa adanya, tanpa manipulasi atau kepentingan tertentu.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Integritas</h3>
              <p className="text-slate-600 text-sm">
                Verifikasi dilakukan secara independen dan objektif berdasarkan data yang akurat.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Pelayanan</h3>
              <p className="text-slate-600 text-sm">
                Kepuasan dan keamanan jamaah adalah prioritas utama dalam setiap fitur kami.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Tim Kami</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Didirikan oleh profesional berpengalaman di bidang teknologi dan industri travel Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Ahmad Fauzi', role: 'CEO & Founder', bio: '10+ tahun di industri teknologi Indonesia' },
            { name: 'Siti Aminah', role: 'COO', bio: 'Mantan direktur operasional travel nasional' },
            { name: 'Budi Santoso', role: 'CTO', bio: 'Ex-Google engineer, spesialis platform' },
          ].map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-3xl">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-bold mb-2">{member.role}</p>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Card>
        <CardContent className="p-12 text-center bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Punya Pertanyaan atau Saran?
          </h2>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto">
            Kami selalu terbuka untuk masukan dan kolaborasi untuk meningkatkan layanan jamaah
          </p>
          <Button size="lg">
            Hubungi Kami
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
