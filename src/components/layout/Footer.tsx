import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="w-full border-t border-primary/5 bg-surface py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl font-display leading-none">J</span>
              </div>
              <span className="text-xl font-display font-bold text-primary tracking-tight">Jemaah.id</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Platform independen #1 di Indonesia untuk komparasi paket Umroh & Haji yang transparan dan terverifikasi.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">Produk</h4>
            <ul className="space-y-3">
              <li><Link to="/search" className="text-sm text-slate-500 hover:text-primary transition-colors">Cari Paket</Link></li>
              <li><Link to="/compare" className="text-sm text-slate-500 hover:text-primary transition-colors">Bandingkan Paket</Link></li>
              <li><Link to="/verification" className="text-sm text-slate-500 hover:text-primary transition-colors">Verifikasi Travel</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">Perusahaan</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link to="/partner" className="text-sm text-slate-500 hover:text-primary transition-colors">Jadi Partner</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-500 hover:text-primary transition-colors">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">Bantuan</h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-sm text-slate-500 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="text-sm text-slate-500 hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
              <li><Link to="/terms" className="text-sm text-slate-500 hover:text-primary transition-colors">Syarat & Ketentuan</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2026 Jemaah.id. Terdaftar di Kemenkominfo & Kemenag RI.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-slate-500">Verified by Google Maps & FlightData</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
