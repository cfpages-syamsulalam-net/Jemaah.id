import { Shield, CheckCircle, X, Eye, Download } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export default function CertificateView() {
  const certificates = [
    {
      id: 'CERT-001',
      agency: 'Patuhi Travel',
      type: 'PPIU',
      number: 'PPIU/2024/123',
      issuedDate: '1 Jan 2024',
      expiryDate: '1 Jan 2026',
      status: 'active',
      documentUrl: '#'
    },
    {
      id: 'CERT-002',
      agency: 'Amanah Wisata',
      type: 'PIHK',
      number: 'PIHK/2023/456',
      issuedDate: '15 Mar 2023',
      expiryDate: '15 Mar 2025',
      status: 'expired',
      documentUrl: '#'
    },
    {
      id: 'CERT-003',
      agency: 'Berkah Jannah',
      type: 'PPIU',
      number: 'PPIU/2024/789',
      issuedDate: '10 Jun 2024',
      expiryDate: '10 Jun 2026',
      status: 'active',
      documentUrl: '#'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Sertifikat & Legalitas</h1>
        <p className="text-slate-500">Daftar sertifikat dan dokumen legalitas travel</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Sertifikat Aktif</div>
            <div className="text-3xl font-bold text-green-600">
              {certificates.filter(c => c.status === 'active').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Sertifikat Kedaluwarsa</div>
            <div className="text-3xl font-bold text-red-600">
              {certificates.filter(c => c.status === 'expired').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-slate-500 mb-1">Total Sertifikat</div>
            <div className="text-3xl font-bold text-slate-900">{certificates.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Certificates List */}
      <div className="space-y-4">
        {certificates.map((cert) => (
          <Card key={cert.id} className="p-0 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                    cert.status === 'active' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <Shield className={`h-6 w-6 ${
                      cert.status === 'active' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">{cert.agency}</h3>
                      <Badge variant={cert.status === 'active' ? 'success' : 'error'}>
                        {cert.status === 'active' ? (
                          <><CheckCircle className="h-3 w-3 mr-1" />Aktif</>
                        ) : (
                          <><X className="h-3 w-3 mr-1" />Kedaluwarsa</>
                        )}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-500">Tipe:</span>
                        <span className="ml-2 font-bold text-slate-900">{cert.type}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Nomor:</span>
                        <span className="ml-2 font-bold text-slate-900">{cert.number}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Terbit:</span>
                        <span className="ml-2 font-bold text-slate-900">{cert.issuedDate}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Kedaluwarsa:</span>
                        <span className="ml-2 font-bold text-slate-900">{cert.expiryDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-slate-100">
                <Button variant="outline" size="sm" className="gap-2">
                  <Eye className="h-4 w-4" />
                  Lihat
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
