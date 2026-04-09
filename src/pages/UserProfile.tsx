import { User, Mail, Phone, MapPin, Upload, ShieldCheck, AlertCircle, CheckCircle, Clock } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { DUMMY_DOCUMENTS } from '../data/dummyData'

export default function UserProfile() {
  const documents = DUMMY_DOCUMENTS

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'pending':
        return <Clock className="h-4 w-4 text-amber-500" />
      case 'rejected':
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge variant="success">Terverifikasi</Badge>
      case 'pending':
        return <Badge variant="warning">Menunggu</Badge>
      case 'rejected':
        return <Badge variant="error">Ditolak</Badge>
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Profil Saya</h1>
        <p className="text-slate-500">Kelola informasi pribadi dan dokumen perjalanan Anda</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Ahmad Rizki</h2>
                <p className="text-sm text-slate-500">Bergabung sejak Jan 2025</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="text-sm font-medium text-slate-900">ahmad.rizki@email.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-slate-400" />
                  <div>
                    <div className="text-sm text-slate-500">Telepon</div>
                    <div className="text-sm font-medium text-slate-900">+62 812-3456-7890</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <div>
                    <div className="text-sm text-slate-500">Kota</div>
                    <div className="text-sm font-medium text-slate-900">Jakarta Selatan</div>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6">Edit Profil</Button>
            </CardContent>
          </Card>
        </div>

        {/* Documents Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-slate-900 mb-1">Dokumen Saya</h2>
                  <p className="text-sm text-slate-500">Kelola paspor, visa, dan dokumen lainnya</p>
                </div>
                <Button className="gap-2">
                  <Upload className="h-4 w-4" />
                  Upload
                </Button>
              </div>

              <div className="space-y-4">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{doc.name}</div>
                        <div className="text-sm text-slate-500">Diupload: {doc.uploadDate}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getStatusIcon(doc.status)}
                      {getStatusBadge(doc.status)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upload Instructions */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Panduan Upload Dokumen</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    1
                  </div>
                  <p>Pastikan dokumen terlihat jelas dan tidak blur</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    2
                  </div>
                  <p>Foto seluruh halaman dokumen, jangan dipotong</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    3
                  </div>
                  <p>Format yang didukung: JPG, PNG, PDF (Maks. 5MB)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
