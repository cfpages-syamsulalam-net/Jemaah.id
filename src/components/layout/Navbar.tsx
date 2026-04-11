import { Link } from "react-router-dom"
import { Search, Heart, User, Menu } from "lucide-react"
import { Button } from "../ui/Button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl font-display leading-none">J</span>
            </div>
            <span className="text-xl font-display font-bold text-primary tracking-tight">Jemaah.id</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/search" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Cari Paket</Link>
            <Link to="/compare" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Bandingkan</Link>
            <Link to="/verification" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Verifikasi Travel</Link>
          </div>

          {/* Icons/Auth */}
          <div className="flex items-center gap-2">
            <Link to="/search" className="md:flex hidden">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/favorites" className="md:flex hidden">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <div className="h-8 w-[1px] bg-primary/10 mx-2 md:block hidden" />
            <Link to="/login" className="hidden md:flex">
              <Button variant="primary" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                <span>Login / Daftar</span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
