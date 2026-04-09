# **Product Requirements Document (PRD)**

​**Nama Produk:** Jemaah.id (Tentatif)

**Platform:** Mobile App (iOS/Android) & Web Responsif

**Visi Produk:** Menjadi platform independen \#1 di Indonesia yang memberdayakan calon jamaah haji dan umroh untuk membuat keputusan keberangkatan yang aman, transparan, dan sesuai budget melalui komparasi data yang sangat detil.

## **​1. Target Pengguna**

* ​Calon jamaah (individu atau keluarga) yang mencari paket umroh/haji.  
* ​Anak muda/millennial yang membelikan paket untuk orang tuanya (sangat kritis terhadap fasilitas dan rekam jejak).  
* ​Jamaah dengan kebutuhan khusus (butuh kursi roda, hotel sangat dekat pelataran, dsb).

## **​2. Fitur Utama (Core Features)**

* ​**Smart Search & Filter:** Pencarian berdasarkan bulan keberangkatan, rentang harga, kota embarkasi, dan durasi.  
* ​**Super-Detailed Package Profile:** Halaman profil paket yang membedah *itinerary* hari per hari.  
* ​**The "Apple-to-Apple" Comparison Engine:** Fitur utama untuk membandingkan hingga 4 paket/travel secara berdampingan (side-by-side) dengan *highlight* Plus/Minus otomatis.  
* ​**Travel Agency Verification:** Status legalitas Kemenag (PPIU/PIHK) terintegrasi langsung dengan database pemerintah.  
* ​**User Reviews & Ratings:** Review asli dari jamaah yang sudah pulang (dilengkapi foto realita hotel & makanan).

## **​3. Matriks Komparasi Detil (Data Points)**

​Ini adalah jantung dari **Jemaah.id**. Setiap travel wajib mengisi atau tim data entry kita harus mengumpulkan metrik berikut untuk dikomparasi:

### **​A. Informasi Dasar & Logistik**

* ​**Harga Total & Mata Uang:** (Apakah sudah termasuk perlengkapan/handling fee atau belum?)  
* ​**Durasi:** (Misal: 9 Hari, 12 Hari, 16 Hari)  
* ​**Kota Embarkasi:** (Misal: Jakarta, Surabaya, Makassar)  
* ​**Penerbangan:** Maskapai, Kelas (Ekonomi/Bisnis), Tipe (Direct/Transit), Durasi Transit, Jatah Bagasi.  
* ​**Jenis Visa:** Visa Umroh / Visa Turis.

### **​B. Akomodasi (Di-breakdown per Hari/Fase)**

​*Mengingat travel sering pindah hotel untuk efisiensi budget, matriks ini harus dinamis.*

* ​**Makkah (Fase 1 \- Hari 1 s/d 4):**  
  * ​Nama Hotel & Bintang (*Real star*, bukan klaim sepihak).  
  * ​Jarak ke Pelataran Masjidil Haram (dalam Meter).  
  * ​Tipe Kamar (Quad/Quintuple/Triple/Double).  
* ​**Madinah (Fase 2 \- Hari 5 s/d 8):**  
  * ​Nama Hotel & Bintang.  
  * ​Jarak ke Pagar Masjid Nabawi (dalam Meter).  
  * ​Tipe Kamar.  
* ​**Hotel Transit/Jeddah (Jika ada):** Nama hotel & durasi menginap.

### **​C. Konsumsi & Transportasi Lokal**

* ​**Skema Makan:** *Full Board* (3x sehari di hotel), *Half Board*, atau Box/Catering luar.  
* ​**Menu Makanan:** Internasional / Full Menu Nusantara.  
* ​**Transportasi Antar Kota (Makkah-Madinah):** Bus Eksekutif (kapasitas berapa?), Bus Standar, atau Kereta Cepat Haramain (HSR).

### **​D. Pemandu & Layanan Ibadah**

* ​**Tour Leader (TL):** Berangkat dari Indonesia mendampingi full?  
* ​**Muthawwif (Pembimbing):** Standby di Saudi? Orang Indonesia/Mahasiswa/Lokal? Rasio Muthawwif vs Jamaah (Misal 1:45).  
* ​**Fasilitas Khusus:** Apakah ada *receiver* / alat pendengar radio (earpiece) saat Thawaf agar suara Muthawwif terdengar jelas?  
* ​**Kajian/Tausiyah:** Ada pendampingan Ustadz/Asatidz khusus selama di hotel?

### **​E. Inclusions & Exclusions (Apa yang didapat dan tidak)**

* ​Kereta Gantung/Telecab di Thaif (Include/Exclude?)  
* ​Air Zam-zam (Dapat 5L atau tidak, tergantung regulasi maskapai saat itu).  
* ​Perlengkapan: Koper, Kain Ihram, Mukena, Batik, dll.  
* ​Asuransi Perjalanan & Kesehatan.

## **​4. Konsep UI/UX "Comparison Engine"**

​Saat pengguna memilih 2 hingga 4 paket dan mengklik **"Bandingkan"**, layar akan berubah menjadi format tabel horizontal/swipeable.

​**Sistem Otomatis "Plus & Minus" (Pro & Cons):**

Aplikasi akan secara cerdas memberikan *badge* atau *highlight* warna (Hijau untuk Plus, Merah/Abu-abu untuk Minus) berdasarkan logika sederhana antar paket yang dibandingkan.

## **5\. Kebutuhan Non-Fungsional (Non-Functional Requirements)**

* ​**Kecepatan & Performa:** Proses *loading* tabel komparasi harus dibawah 2 detik agar user tidak frustrasi.  
* ​**Validitas Data:** Admin travel agency harus memiliki dashboard sendiri (Partner Portal) untuk *update* ketersediaan *seat* dan harga secara *real-time*.  
* ​**Mobile First:** Karena tabel komparasi sangat lebar, UX di HP harus menggunakan fitur *freeze column* (kolom fitur diam, kolom travel bisa di-swipe ke kiri/kanan).

## **6\. Sistem Integrasi & Validasi Data (*Data Integrity & Anti-Fraud*)**

​Tujuan dari sistem ini adalah meminimalisir input manual (teks bebas) dari pihak travel dan menggantinya dengan sistem *auto-populate* (terisi otomatis) yang ditarik dari pihak ketiga yang terpercaya.

### **​A. Validasi Akomodasi & Jarak (Integrasi Google Maps API)**

​Admin travel **TIDAK DIIZINKAN** mengetik manual nama hotel, bintang, dan jarak.

* ​**Google Places API (Auto-Suggest):** Saat mengisi data hotel, admin harus mengetik nama hotel dan memilih dari *dropdown* yang ditarik langsung dari database Google Maps (seperti saat kita pesan Gojek/Grab).  
* ​**Otomatisasi Data Profil Hotel:** Begitu hotel dipilih, sistem *Jemaah.id* otomatis menarik data:  
  * ​Nama Resmi Hotel  
  * ​Bintang Hotel (Rating resmi dan *User Rating* dari Google)  
  * ​Foto Fasad/Depan Hotel (dari Google)  
* ​**Google Distance Matrix API (Validasi Jarak Pasti):** Sistem akan menyimpan titik koordinat (Latitude/Longitude) pelataran Masjidil Haram (Makkah) dan Masjid Nabawi (Madinah). Jarak dari hotel ke masjid akan **dihitung otomatis oleh sistem aplikasi kita** berdasarkan rute jalan kaki terdekat di Google Maps. Admin travel tidak bisa berbohong mengklaim jarak 50m jika di Maps tertulis 800m.

### **​B. Validasi Legalitas Travel (Integrasi Kemenag RI / SISKOPATUH)**

​Mencegah travel bodong masuk ke dalam platform.

* ​**Wajib Input Nomor SK:** Saat travel mendaftar sebagai *partner*, mereka wajib memasukkan Nomor SK PPIU (Penyelenggara Perjalanan Ibadah Umrah) atau PIHK (Haji Khusus).  
* ​**API Kemenag / Web Scraping Legalitas:** Sistem kita akan mengecek nomor tersebut ke database Kementerian Agama RI.  
* ​**Auto-Lock Data Perusahaan:** Jika valid, nama perusahaan, alamat kantor pusat, dan status izin (Aktif/Dicabut) akan terisi otomatis dan dilabeli **"Verified by Kemenag"** dengan centang hijau/biru. Jika nomor SK palsu atau sudah dicabut, akun otomatis ditolak.

### **​C. Validasi Maskapai & Jadwal (Integrasi Flight Data API)**

​Mencegah travel berbohong soal pesawat (misal menjanjikan *Direct* Saudia, ternyata transit pakai maskapai LCC).

* ​**Integrasi GDS (Amadeus / Sabre / Skyscanner API):** Admin travel hanya perlu memasukkan **Tanggal Keberangkatan** dan **Kode Penerbangan** (Misal: SV 817).  
* ​**Auto-Populate Data Penerbangan:** Sistem akan menarik data otomatis:  
  * ​Nama Maskapai & Logo  
  * ​Rute (misal: CGK \- JED)  
  * ​Status Penerbangan: *Direct* (Langsung) atau *Transit*.  
  * ​Jika Transit: Sistem otomatis menampilkan di mana transitnya dan berapa lama durasinya.

### **​D. Restriksi Input Data Fasilitas (No Free-Text Policy)**

​Untuk bisa membuat tabel komparasi yang rapi (Apple-to-Apple), kita harus membatasi admin travel menggunakan kolom teks bebas (*free-text*).

* ​**Dropdown & Toggle:** Semua input fasilitas ibadah menggunakan *toggle* (Ya/Tidak) atau *dropdown* baku.  
  * ​*Contoh Kereta:* Dropdown pilihan "Kereta Cepat Haramain Kelas Ekonomi", "Kereta Cepat Haramain Kelas Bisnis", "Bus Eksekutif", "Bus Standar".  
  * ​*Contoh Alat Dengar:* Toggle (Ya, disediakan / Tidak).  
  * ​*Contoh Makan:* Dropdown "Full Board Hotel", "Katering Box", "Half-Board".  
* ​Hanya bagian "Catatan Tambahan" atau "Deskripsi Itinerary Harian" yang boleh menggunakan teks bebas.

### **​Efek dari Sistem Validasi Ini untuk Pengguna (Jamaah)**

​Ketika calon jamaah membandingkan paket, mereka akan melihat **Badge Verifikasi** pada metrik tertentu. Misalnya:

* ​Jarak Hotel: 350 Meter (Verified by Google Maps 📍)  
* ​Pesawat: Saudia Airlines \- Direct (Verified Flight ✈️)  
* ​Travel: Izin PPIU No. 123/2024 (Verified Kemenag 🇮🇩)

​Dengan menambahkan lapis keamanan data ini, **Jemaah.id** bukan cuma jadi aplikasi perbandingan biasa, tapi jadi **pelindung utama jamaah dari penipuan travel umroh**. Tingkat kepercayaan (*trust*) ke aplikasi kita akan meroket drastis.

## **7\. Sistem Rating & Review (Verified Pilgrims Review)**

​Tujuannya adalah memastikan bahwa setiap ulasan yang muncul di aplikasi berasal dari jamaah yang benar-benar berangkat menggunakan paket tersebut, bukan akun bot atau staf travel itu sendiri.

### **​A. Mekanisme Validasi Review (Anti-Fake Review)**

​Kita akan menerapkan **3 Lapis Validasi**:

1. ​**Transactional-Based Review (Closed Loop):**  
   * ​Hanya pengguna yang status transaksinya "Completed/Returned" (Sudah Pulang) di sistem *Jemaah.id* yang bisa memberikan rating bintang dan ulasan teks.  
   * ​Tombol "Tulis Review" hanya akan aktif maksimal 30 hari setelah tanggal kepulangan yang tercantum di paket.  
2. ​**Evidence-Based Review:**  
   * ​Jamaah diwajibkan mengunggah minimal 2 foto asli (misal: foto kamar hotel, foto makanan, atau foto bersama Tour Leader di depan bus) sebagai syarat ulasan mendapatkan badge **"Verified Trip"**.  
   * ​Foto akan diproses melalui *Image Recognition* sederhana untuk mendeteksi apakah itu foto asli atau hanya hasil ambil dari internet (Google Images).  
3. ​**Cross-Check via Admin Travel:**  
   * ​Jika jamaah mendaftar di luar aplikasi tapi ingin memberi review, mereka harus mengunggah bukti manifest atau sertifikat umroh dari travel tersebut. Tim moderator *Jemaah.id* akan memverifikasi secara manual sebelum review ditayangkan.

### **​B. Matriks Penilaian (Granular Rating)**

​Bukan hanya satu rating umum, tapi user harus menilai aspek detil yang sebelumnya mereka bandingkan, agar data ini bisa balik lagi ke sistem perbandingan.

* ​**Kesesuaian Itinerary:** (Apakah jadwal sesuai janji?)  
* ​**Kualitas Hotel:** (Apakah benar bintang 5 dan sedekat itu?)  
* ​**Kualitas Makanan:** (Rasa dan ketepatan waktu)  
* ​**Kompetensi Tour Leader/Muthawwif:** (Penguasaan ilmu dan keramahan)  
* ​**Transportasi:** (Kondisi bus dan ketepatan waktu)

### **​C. Fitur "Review Highlight" dalam Tabel Komparasi**

​Rating ini akan ditarik kembali ke fitur utama (Komparasi):

* ​Saat membandingkan 4 travel, di baris paling bawah akan ada baris **"Real User Satisfaction"**.  
* ​Sistem akan menampilkan: *"85% Jamaah bilang hotel sesuai deskripsi"* atau *"15% Jamaah mengeluhkan makanan sering terlambat"*.  
* ​Ini memberikan tekanan positif bagi travel untuk selalu menjaga kualitas layanan.

### **​D. Kebijakan Transparansi & Hak Jawab**

* ​**No Deletion Policy:** Travel tidak bisa menghapus review negatif. Mereka hanya memiliki **"Hak Jawab"** untuk memberikan klarifikasi atau permintaan maaf secara publik di bawah ulasan tersebut.  
* ​**Report Abuse:** User lain bisa melaporkan ulasan yang dianggap mengandung SARA atau kata-kata kasar, yang kemudian akan dimoderasi oleh sistem.

## **​8. Angle Monetisasi dari Review (B2B)**

​Data review negatif yang mendetil adalah "emas" bagi travel yang ingin memperbaiki diri.

* ​**Reputation Management Report:** Kita bisa menjual laporan bulanan kepada travel agency berisi analisis sentimen jamaah mereka dibandingkan dengan kompetitor terdekat.  
* ​**Contoh:** *"Banyak jamaah Anda pindah ke Travel B karena meskipun hotel Anda lebih mahal, jamaah mengeluhkan Muthawwif Travel B lebih informatif."*

## **​1. User Flow: Perjalanan Pengguna (User Journey)**

​Kita bagi menjadi dua sisi: **Sisi Jamaah (C2C)** dan **Sisi Travel Agency (B2B)**.

### **​A. Sisi Calon Jamaah (The Seeker)**

​**Kondisi: Tidak Login (Guest)**

1. ​**Home:** User masuk, melihat promo *flash sale* atau paket populer.  
2. ​**Search/Explore:** User mencari paket berdasarkan bulan/budget.  
3. ​**Comparison:** User bisa memilih hingga 4 paket dan melihat tabel perbandingan detil.  
4. ​**Paywall/Login Wall:** Saat user mengklik tombol **"Lihat Detail Itinerary Per Hari"** atau **"Hubungi Travel"**, sistem memunculkan *pop-up* login (Google/WA).  
   * ​*Kenapa di sini?* Karena mereka sudah "panas" dan butuh data detil, jadi mereka tidak keberatan memberikan data email/no HP.

​**Kondisi: Login (Member)**

1. ​**Save/Wishlist:** User bisa simpan paket yang sudah dibandingkan (Fitur: "Simpan Perbandingan Ini").  
2. ​**Consultation:** Fitur "Tanya Ahli" atau "Chat Travel" terbuka.  
3. ​**Booking:** User mengisi data manifest (paspor/KTP) sekali saja di aplikasi kita untuk daftar ke travel mana pun.  
4. ​**Retention:** Sistem mengirim notifikasi: *"Paket yang kamu bandingkan kemarin sisa 5 seat lagi\!"* atau *"Travel \[X\] yang kamu simpan lagi diskon 2 juta\!"*

### **​B. Sisi Travel Agency (The Provider)**

1. ​**Registration:** Input izin PPIU/Kemenag.  
2. ​**Verification:** Sistem *Jemaah.id* memverifikasi legalitas (Manual \+ API).  
3. ​**Inventory Management:** Travel input paket menggunakan sistem "Anti-Ngawur" (Google Maps & Flight API).  
4. ​**Leads Dashboard:** Travel melihat siapa saja yang mengklik "Tertarik" pada paket mereka dan bisa membalas chat calon jamaah.

## **​2. Strategi Monetisasi (The Revenue Streams)**

​Agar tidak mengganggu *user experience* dan tetap menjaga netralitas aplikasi, berikut adalah 4 *angle* monetisasi:

### **​1. Komisi per Closing (Lead Generation Fee)**

​Ini adalah sumber utama. Kita tidak mengambil uang dari jamaah, tapi dari travel.

* ​**Model:** Setiap ada jamaah yang membayar DP melalui sistem kita atau terkonfirmasi daftar via aplikasi, travel memberikan *success fee* (misal: Rp 500rb \- Rp 1jt per jamaah).  
* ​**Keuntungan:** Adil bagi travel karena mereka hanya bayar jika ada hasil.

### **​2. Verified Premium Listing (SaaS Model)**

​Travel membayar biaya langganan bulanan agar paket mereka mendapat fitur ekstra:

* ​**Badge "Top Rated":** Paket muncul di urutan atas pencarian (tetap transparan, ada label 'Ads' atau 'Promoted').  
* ​**Analytics Dashboard:** Travel bisa melihat data: *"Berapa orang yang membandingkan paket saya dengan kompetitor \[X\]?"* Ini data sangat mahal bagi travel untuk strategi marketing mereka.

### **​3. Integrated Financing Service (Fintech Partnership)**

​Banyak jamaah yang ingin berangkat tapi butuh cicilan (Umroh Dulu Bayar Belakangan).

* ​**Model:** Kita bekerja sama dengan Bank Syariah atau lembaga pembiayaan syariah.  
* ​**Revenue:** Kita mendapat *referral fee* dari setiap aplikasi pembiayaan yang disetujui melalui platform kita.

### **​4. Cross-Selling (Kebutuhan Jamaah)**

​Saat jamaah sudah menentukan pilihan, mereka butuh hal lain:

* ​**Asuransi Perjalanan Tambahan.**  
* ​**Penyewaan Kursi Roda/Perlengkapan Haji.**  
* ​**Paket Internet Roaming (Saudi Arabia).**  
* ​Kita bisa integrasikan fitur "Beli di Sini" untuk kebutuhan ini.

## **​3. Tambahan Fitur "Retensi" (Database Power)**

​Sesuai saranmu, database adalah aset. Kita bisa melakukan:

* ​**Drip Marketing:** Jika user belum *closing* setelah 1 bulan membandingkan, kirim email edukasi: *"5 Tips Memilih Hotel di Makkah agar Tidak Kecapekan."* (Sambil merekomendasikan paket yang hotelnya dekat).  
* ​**Seasonal Remarketing:** User yang umroh tahun ini, 5 tahun lagi mungkin ingin Haji atau Umroh sekeluarga lagi. Kita punya datanya untuk di-re-engage.

# 

# **Entity Relationship Diagram (PRD)**

Berikut adalah rancangan **Entity Relationship Diagram (ERD)** yang dirancang untuk mendukung fitur *Side-by-Side Comparison* dan *Anti-Ngawur Validation*.

## **​1. Arsitektur Database (High-Level)**

​Kita akan membagi database menjadi 5 modul utama:

1. ​**Users & Auth:** Data jamaah dan admin travel.  
2. ​**Travel & Legal:** Data legalitas biro travel (PPIU/PIHK).  
3. ​**Packages & Components:** Data paket, penerbangan, dan fasilitas.  
4. ​**Itinerary & Accommodation:** Detail hari-per-hari dan integrasi Google Places.  
5. ​**Transactions & Leads:** Data komisi dan booking.

## **​2. Tabel Utama & Atribut (ERD Schema)**

### **​A. Tabel travel\_agencies (Penyedia)**

* ​id (PK)  
* ​agency\_name (String)  
* ​kemenag\_license\_number (String, Unique) \- *Nomor PPIU/PIHK*  
* ​is\_verified (Boolean) \- *Status verifikasi manual/API*  
* ​logo\_url (String)  
* ​rating\_avg (Float)

### **​B. Tabel packages (Paket Umroh/Haji)**

* ​id (PK)  
* ​agency\_id (FK to travel\_agencies)  
* ​package\_name (String)  
* ​category (Enum: Umroh, Haji Plus, Umroh Plus)  
* ​departure\_date (Date)  
* ​duration\_days (Integer)  
* ​base\_price\_idr (BigInt)  
* ​flight\_code (String) \- *Contoh: SV-817*  
* ​flight\_type (Enum: Direct, Transit)  
* ​airline\_name (String) \- *Auto-populate via API*  
* ​is\_active (Boolean)  
* ​seat\_quota (Integer)

### **​C. Tabel hotels (Master Data Hotel)**

​*Guna tabel ini adalah menyimpan cache dari Google Places agar tidak hit API terus-menerus dan menjaga konsistensi nama.*

* ​id (PK)  
* ​google\_place\_id (String, Unique)  
* ​hotel\_name (String)  
* ​star\_rating (Integer)  
* ​latitude & longitude (Decimal)  
* ​city (Enum: Makkah, Madinah, Jeddah, Amman, etc)

### **​D. Tabel package\_accommodations (Jembatan Paket & Hotel)**

​*Karena satu paket bisa ganti-ganti hotel (misal: 3 hari di hotel A, 5 hari di hotel B).*

* ​id (PK)  
* ​package\_id (FK to packages)  
* ​hotel\_id (FK to hotels)  
* ​phase\_order (Integer) \- *Urutan menginap (1, 2, 3\)*  
* ​stay\_duration (Integer) \- *Berapa malam*  
* ​distance\_to\_masjid (Integer) \- *Otomatis dihitung sistem (dalam meter)*  
* ​room\_type (Enum: Quad, Triple, Double)

### **​E. Tabel itineraries (Detail Hari per Hari)**

* ​id (PK)  
* ​package\_id (FK to packages)  
* ​day\_number (Integer)  
* ​activity\_title (String)  
* ​description (Text)  
* ​meals\_provided (Boolean)

### **​F. Tabel comparisons (Fitur Simpan Banding)**

​*Untuk menyimpan riwayat user yang membandingkan paket.*

* ​id (PK)  
* ​user\_id (FK to users)  
* ​package\_ids (JSON / Array) \- *Menyimpan ID paket yang dibandingan (Max 4\)*  
* ​created\_at (Timestamp)

### **​G. Tabel reviews**

*Sistem rating dan review*

* ​id (PK)  
* ​user\_id (FK to users)  
* ​package\_id (FK to packages)  
* ​booking\_id (FK to transactions) \- *Kunci utama validasi*  
* ​rating\_overall (Float)  
* ​rating\_hotel (Integer)  
* ​rating\_food (Integer)  
* ​rating\_service (Integer)  
* ​review\_text (Text)  
* ​is\_verified\_trip (Boolean)  
* ​created\_at (Timestamp)

### **​H. Tabel review\_photos**

* ​id (PK)  
* ​review\_id (FK to reviews)  
* ​photo\_url (String)

## **​3. Logika Relasi untuk Fitur "Bandingkan"**

​Saat user klik **"Bandingkan"** pada Paket A dan Paket B, sistem akan melakukan query berikut:

1. ​**Fetch Basic:** Ambil harga, pesawat, dan durasi dari packages.  
2. ​**Fetch Hotels:** Ambil semua hotel\_id dari package\_accommodations yang terhubung ke paket tersebut, urutkan berdasarkan phase\_order.  
3. ​**Calculate Advantage:** \* Bandingkan distance\_to\_masjid terkecil.  
   * ​Bandingkan star\_rating tertinggi.  
   * ​Bandingkan base\_price\_idr terendah.  
4. ​**Display:** Sajikan dalam tabel di Front-End.

## **​4. Keunggulan Struktur Ini untuk Bisnis (Monetisasi)**

* ​**Data-Driven Ads:** Karena kita tahu user sedang membandingkan paket dengan hotel Bintang 3 (Tabel package\_accommodations), kita bisa memunculkan iklan (Promoted) paket Bintang 4 yang harganya hanya selisih sedikit.  
* ​**Accuracy:** Dengan google\_place\_id, tidak ada lagi nama hotel yang *typo* atau membingungkan (misal: "Hilton" vs "Makkah Hilton" — di sistem kita akan jadi satu entitas yang sama).  
* ​**Lead Tracking:** Di tabel transactions/leads, kita bisa mencatat paket mana yang paling sering "Kalah" saat dibandingan, dan kita bisa menjual data ini (Analitycs) ke pihak travel agar mereka memperbaiki fasilitas mereka.

