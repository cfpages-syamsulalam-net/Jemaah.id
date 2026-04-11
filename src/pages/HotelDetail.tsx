import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Star, Wifi, UtensilsCrossed, Car, Snowflake, Shield, Camera, ChevronLeft, ChevronRight, Phone, Mail, Clock, Building2, Check, Heart, Share2 } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

const HOTEL_DATA: Record<string, any> = {
  1: {
    id: 1,
    name: "Hilton Suites Makkah",
    stars: 5,
    distance: "150m dari Masjidil Haram",
    address: "Jabal Al Kaaba, Al Haram, Makkah 24231, Arab Saudi",
    phone: "+966 12 543 4444",
    email: "makkah@hilton.com",
    checkIn: "15:00",
    checkOut: "12:00",
    yearBuilt: 2010,
    yearRenovated: 2020,
    totalRooms: 300,
    rating: 4.8,
    reviews: 1240,
    description: "Hilton Suites Makkah menawarkan akomodasi mewah dengan pemandangan langsung ke Masjidil Haram. Hotel ini terletak di lokasi strategis hanya 150 meter dari pelataran Masjid, menjadikannya pilihan utama bagi jamaah Umroh dan Haji.",
    features: [
      { icon: Wifi, label: "WiFi Gratis", desc: "High-speed internet" },
      { icon: UtensilsCrossed, label: "Restoran", desc: "3 restoran & 2 kafe" },
      { icon: Car, label: "Transportasi", desc: "Shuttle gratis" },
      { icon: Snowflake, label: "AC", desc: "Climate control" },
      { icon: Shield, label: "Keamanan 24/7", desc: "CCTV & security" },
      { icon: Camera, label: "Room Service", desc: "24 jam" },
    ],
    rooms: [
      { type: "Standard Room", size: "35 m²", beds: "2 Single Beds", view: "City View", price: "Rp 850.000/malam" },
      { type: "Deluxe Room", size: "45 m²", beds: "1 King Bed", view: "Partial Haram View", price: "Rp 1.200.000/malam" },
      { type: "Executive Suite", size: "65 m²", beds: "1 King Bed + Living Room", view: "Haram View", price: "Rp 2.100.000/malam" },
      { type: "Royal Suite", size: "120 m²", beds: "2 King Beds", view: "Direct Haram View", price: "Rp 3.500.000/malam" },
    ],
    photos: [
      "Lobby Utama",
      "Kamar Deluxe",
      "Restoran",
      "Pemandangan Haram",
      "Kamar Mandi",
      "Meeting Room"
    ],
    coordinates: { lat: 21.4225, lng: 39.8262 },
    verifiedBy: "Google Maps"
  }
}

export default function HotelDetail() {
  const { id } = useParams()
  const hotel = HOTEL_DATA[id || '1'] || HOTEL_DATA['1']
  const [currentPhoto, setCurrentPhoto] = useState(0)

  const nextPhoto = () => setCurrentPhoto((prev) => (prev + 1) % hotel.photos.length)
  const prevPhoto = () => setCurrentPhoto((prev) => (prev - 1 + hotel.photos.length) % hotel.photos.length)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link to="/search" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary mb-6">
        <ChevronLeft className="h-4 w-4" />
        <span>Kembali</span>
      </Link>

      {/* Hotel Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-display font-bold text-slate-900">{hotel.name}</h1>
              <Badge variant="success">
                <Shield className="h-3 w-3 mr-1" />
                Diverifikasi
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: hotel.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {hotel.distance}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {hotel.rating} ({hotel.reviews} ulasan)
              </span>
            </div>
            <p className="text-slate-500 text-sm">{hotel.address}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Heart className="h-4 w-4" />
              Simpan
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Bagikan
            </Button>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <Card className="mb-8">
        <CardContent className="p-0">
          <div className="relative h-96 bg-slate-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <Building2 className="h-16 w-16 mx-auto mb-4" />
                <div className="text-xl font-bold">{hotel.photos[currentPhoto]}</div>
                <div className="text-sm mt-2">Foto {currentPhoto + 1} dari {hotel.photos.length}</div>
              </div>
            </div>
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-slate-700" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-slate-700" />
            </button>
          </div>
          {/* Photo Thumbnails */}
          <div className="flex gap-2 p-4 overflow-x-auto">
            {hotel.photos.map((photo: string, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentPhoto(index)}
                className={`h-20 w-32 bg-slate-100 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all ${
                  currentPhoto === index ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
                }`}
              >
                {photo}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Tentang Hotel</h2>
              <p className="text-slate-600 leading-relaxed">{hotel.description}</p>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Fasilitas Hotel</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.features.map((feature: any, index: number) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                      <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{feature.label}</div>
                        <div className="text-xs text-slate-500">{feature.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Room Types */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Tipe Kamar</h2>
              <div className="space-y-4">
                {hotel.rooms.map((room: any, index: number) => (
                  <div key={index} className="p-4 border border-slate-200 rounded-lg hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">{room.type}</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                          <span>{room.size}</span>
                          <span>•</span>
                          <span>{room.beds}</span>
                          <span>•</span>
                          <span>{room.view}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{room.price}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-green-600">
                      <Check className="h-4 w-4" />
                      <span>WiFi gratis</span>
                      <Check className="h-4 w-4" />
                      <span>Sarapan termasuk</span>
                      <Check className="h-4 w-4" />
                      <span>AC</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reviews Summary */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Ulasan Tamu</h2>
              <div className="flex items-center gap-6 mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-slate-900">{hotel.rating}</div>
                  <div className="flex gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(hotel.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                    ))}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">{hotel.reviews} ulasan</div>
                </div>
                <div className="flex-1 space-y-2">
                  {[
                    { label: "Lokasi", score: 4.9 },
                    { label: "Kebersihan", score: 4.7 },
                    { label: "Pelayanan", score: 4.8 },
                    { label: "Kenyamanan", score: 4.6 },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="text-sm text-slate-600 w-24">{item.label}</span>
                      <div className="flex-1 bg-slate-200 rounded-full h-2">
                        <div className="bg-amber-400 h-2 rounded-full" style={{ width: `${(item.score / 5) * 100}%` }}></div>
                      </div>
                      <span className="text-sm font-bold text-slate-900 w-8 text-right">{item.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Informasi Hotel</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <div className="text-slate-500">Alamat</div>
                    <div className="font-bold text-slate-900">{hotel.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <div className="text-slate-500">Telepon</div>
                    <div className="font-bold text-slate-900">{hotel.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <div className="text-slate-500">Email</div>
                    <div className="font-bold text-slate-900">{hotel.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <div className="text-slate-500">Check-in / Check-out</div>
                    <div className="font-bold text-slate-900">{hotel.checkIn} / {hotel.checkOut}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <div className="text-slate-500">Tahun Dibangun / Renovasi</div>
                    <div className="font-bold text-slate-900">{hotel.yearBuilt} / {hotel.yearRenovated}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-slate-400 mt-0.5" />
                  <div>
                    <div className="text-slate-500">Diverifikasi oleh</div>
                    <div className="font-bold text-primary">{hotel.verifiedBy}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Lokasi di Peta</h3>
              <div className="h-48 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm font-bold">Google Maps</div>
                  <div className="text-xs mt-1">Lat: {hotel.coordinates.lat}, Lng: {hotel.coordinates.lng}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" size="lg">
            Hubungi Hotel
          </Button>
        </div>
      </div>
    </div>
  )
}
