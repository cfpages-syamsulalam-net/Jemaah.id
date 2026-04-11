import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

export default function FAQ() {
  const faqs = [
    {
      category: 'Umum',
      questions: [
        {
          q: 'Apa itu Jemaah.id?',
          a: 'Jemaah.id adalah platform independen #1 di Indonesia untuk membandingkan paket Umroh & Haji secara transparan dan terverifikasi. Kami membantu jamaah menemukan paket terbaik dengan verifikasi langsung ke database Kemenag RI.'
        },
        {
          q: 'Apakah Jemaah.id menyediakan layanan booking?',
          a: 'Ya! Setelah Anda menemukan paket yang sesuai, Anda bisa langsung melakukan booking melalui platform kami dengan proses pembayaran yang aman.'
        },
        {
          q: 'Apakah ada biaya tambahan menggunakan Jemaah.id?',
          a: 'Tidak ada biaya tambahan untuk jamaah. Harga yang tertera di Jemaah.id sama dengan harga langsung dari travel.'
        }
      ]
    },
    {
      category: 'Verifikasi Travel',
      questions: [
        {
          q: 'Bagaimana Jemaah.id memverifikasi travel?',
          a: 'Kami memverifikasi travel melalui beberapa cara: (1) Cek izin PPIU/PIHK ke database Kemenag RI, (2) Verifikasi hotel via Google Maps untuk akurasi jarak, (3) Verifikasi maskapai via FlightData API, (4) Review dari jamaah yang sudah berangkat.'
        },
        {
          q: 'Apa arti badge "Terverifikasi"?',
          a: 'Badge "Terverifikasi" menandakan bahwa travel tersebut telah melalui proses verifikasi oleh tim kami, termasuk pengecekan legalitas, fasilitas, dan track record.'
        },
        {
          q: 'Bagaimana jika travel yang saya pilih tidak terverifikasi?',
          a: 'Kami menyarankan untuk memilih travel yang sudah terverifikasi demi keamanan dan kenyamanan Anda. Travel yang belum terverifikasi masih dalam proses review.'
        }
      ]
    },
    {
      category: 'Booking & Pembayaran',
      questions: [
        {
          q: 'Bagaimana cara melakukan booking?',
          a: 'Pilih paket yang Anda inginkan → Klik "Pesan Sekarang" → Isi data jamaah → Pilih metode pembayaran → Selesai!'
        },
        {
          q: 'Metode pembayaran apa saja yang tersedia?',
          a: 'Kami menerima transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, Dana), kartu kredit/debit, dan QRIS.'
        },
        {
          q: 'Apakah bisa cicilan?',
          a: 'Ya, kami menyediakan opsi cicilan 0% hingga 12 bulan untuk beberapa metode pembayaran tertentu.'
        },
        {
          q: 'Bagaimana kebijakan pembatalan?',
          a: 'Kebijakan pembatalan berbeda-beda tergantung travel. Umumnya, pembatalan H-30 dikenakan biaya admin 10%, H-14 dikenakan 50%, dan H-7 tidak dapat refund. Detailnya akan diinformasikan saat booking.'
        }
      ]
    },
    {
      category: 'Keamanan & Privasi',
      questions: [
        {
          q: 'Apakah data saya aman?',
          a: 'Ya, kami menggunakan enkripsi SSL/TLS untuk semua data. Data paspor dan dokumen penting disimpan dengan enkripsi end-to-end.'
        },
        {
          q: 'Apakah Jemaah.id membagikan data saya ke pihak ketiga?',
          a: 'Kami tidak menjual atau membagikan data pribadi Anda ke pihak ketiga tanpa persetujuan. Data hanya dibagikan ke travel terkait untuk keperluan booking Anda.'
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge variant="primary" className="mb-4">Bantuan</Badge>
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Temukan jawaban untuk pertanyaan umum tentang Jemaah.id
        </p>
      </div>

      {/* FAQ Sections */}
      <div className="space-y-8">
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{section.category}</h2>
            <div className="space-y-3">
              {section.questions.map((faq, faqIndex) => (
                <FAQItem key={faqIndex} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <Card className="mt-12">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Masih Punya Pertanyaan?
          </h3>
          <p className="text-slate-600 mb-6">
            Tim kami siap membantu Anda 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@jemaah.id" className="text-primary hover:underline">
              📧 support@jemaah.id
            </a>
            <a href="tel:+6281234567890" className="text-primary hover:underline">
              📞 +62 812-3456-7890
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="p-0 hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
        >
          <span className="font-bold text-slate-900 pr-4">{question}</span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
          ) : (
            <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
          )}
        </button>
        {isOpen && (
          <div className="px-6 pb-6 pt-0 border-t border-slate-100">
            <p className="text-slate-600 leading-relaxed">{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
