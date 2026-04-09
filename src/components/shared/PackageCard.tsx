import { Plane, MapPin, ShieldCheck, Star } from "lucide-react"
import { Card, CardContent } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"

export interface Package {
  id: number
  agency: string
  name: string
  price: string
  duration: string
  airline: string
  hotelMakkah: string
  hotelMakkahStar: number
  distance: string
  departure: string
  verified: boolean
}

interface PackageCardProps {
  pkg: Package
  onCompareToggle?: (id: number) => void
  isComparing?: boolean
}

export function PackageCard({ pkg, onCompareToggle, isComparing }: PackageCardProps) {
  return (
    <Card className="p-0 overflow-hidden hover:shadow-lg transition-shadow border-primary/5 group">
      <div className="h-48 bg-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary/30 font-bold uppercase tracking-widest text-xl">
          {pkg.airline}
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="success" className="bg-white/90 backdrop-blur-sm text-primary border-none">
            {pkg.duration}
          </Badge>
        </div>
        {pkg.verified && (
          <div className="absolute top-4 right-4 h-8 w-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
            <ShieldCheck className="h-5 w-5 text-primary" />
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">{pkg.agency}</span>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-slate-900">4.9</span>
          </div>
        </div>
        <h3 className="font-display font-bold text-slate-900 text-xl mb-4 group-hover:text-primary transition-colors line-clamp-1">
          {pkg.name}
        </h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <Plane className="h-4 w-4 text-slate-400" />
            <span>{pkg.airline} • {pkg.departure}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-slate-400" />
            <span className="line-clamp-1">{pkg.hotelMakkah} ({pkg.distance} ke Masjid)</span>
          </div>
        </div>

        <div className="pt-4 border-t border-primary/5 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xs text-slate-400 block uppercase font-bold tracking-widest">Mulai Dari</span>
              <span className="text-2xl font-display font-bold text-primary">Rp {pkg.price}</span>
            </div>
            <Button size="sm" variant="secondary">Detail</Button>
          </div>
          
          <label className="flex items-center gap-2 cursor-pointer pt-2 border-t border-primary/5">
            <input 
              type="checkbox" 
              checked={isComparing}
              onChange={() => onCompareToggle?.(pkg.id)}
              className="w-4 h-4 rounded border-primary/10 text-primary focus:ring-primary" 
            />
            <span className="text-xs font-medium text-slate-500">Bandingkan Paket</span>
          </label>
        </div>
      </CardContent>
    </Card>
  )
}
