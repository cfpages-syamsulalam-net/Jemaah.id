import { CheckCircle, Shield, Download, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export default function DocumentVerified() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardContent className="p-12 text-center">
          {/* Success Icon */}
          <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-14 w-14 text-green-600" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-3">
            Dokumen Terverifikasi!
          </h1>
          <p className="text-slate-600 mb-8">
            Dokumen Anda telah berhasil diverifikasi oleh tim kami
          </p>

          {/* Verification Details */}
          <div className="bg-slate-50 rounded-lg p-6 mb-8 text-left">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Jenis Dokumen</span>
                <span className="font-bold text-slate-900">Paspor</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Nomor Paspor</span>
                <span className="font-bold text-slate-900">A1234567</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Nama</span>
                <span className="font-bold text-slate-900">Ahmad Rizki</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Tanggal Verifikasi</span>
                <span className="font-bold text-slate-900">10 April 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Status</span>
                <Badge variant="success">
                  <Shield className="h-3 w-3 mr-1" />
                  Terverifikasi
                </Badge>
              </div>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6 mb-8">
            <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
            <div className="font-bold text-slate-900 mb-1">Badge Verifikasi</div>
            <div className="text-sm text-slate-600">
              Akun Anda sekarang memiliki badge "Terverifikasi" di semua transaksi
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <div className="flex gap-3 mb-3">
              <Button variant="outline" className="flex-1 gap-2">
                <Download className="h-4 w-4" />
                Download Sertifikat
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Share2 className="h-4 w-4" />
                Bagikan
              </Button>
            </div>
            <Link to="/profile">
              <Button className="w-full">
                Kembali ke Profil
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
