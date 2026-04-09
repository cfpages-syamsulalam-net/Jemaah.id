# Third-Party Integrations Guide

Complete setup guides for Google Maps, Payment Gateways, File Storage, and other external services for Jemaah.id.

**Last Updated:** 10 April 2026  
**Services:** Google Maps, Xendit/Midtrans, Cloudflare R2, Email/SMS, AI/OCR

---

## 📋 Table of Contents

1. [Google Maps Platform](#1-google-maps-platform)
2. [Payment Gateway (Xendit)](#2-payment-gateway-xendit)
3. [Payment Gateway (Midtrans)](#2b-payment-gateway-midtrans)
4. [File Storage (Cloudflare R2)](#3-file-storage-cloudflare-r2)
5. [Email Service (Resend)](#4-email-service-resend)
6. [WhatsApp Business API](#5-whatsapp-business-api)
7. [AI/OCR (Google Cloud Vision)](#6-aiocr-google-cloud-vision)
8. [Integration Summary](#7-integration-summary)

---

## 1. Google Maps Platform

### **APIs We Need:**
- ✅ Maps JavaScript API (display maps)
- ✅ Places API (hotel verification)
- ✅ Geocoding API (convert address to coordinates)
- ✅ Distance Matrix API (calculate distance to Masjid)

### **Step 1: Create Google Cloud Project**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Project name: `jemaah-id`
4. Click "Create"

### **Step 2: Enable APIs**

Go to "APIs & Services" → "Library" and enable:

1. **Maps JavaScript API**
2. **Places API**
3. **Geocoding API**
4. **Distance Matrix API**
5. **Street View Static API** (optional, for hotel photos)

### **Step 3: Create API Key**

1. Go to "APIs & Services" → "Credentials"
2. Click "+ CREATE CREDENTIALS" → "API key"
3. Copy the API key (starts with `AIza...`)
4. Click "Edit API key" to set restrictions

### **Step 4: Set API Key Restrictions**

**HTTP referrer restrictions (for frontend):**
- Click "Add an item"
- Enter: `*.jemaah.id/*`
- Enter: `localhost:*/*` (for development)

**Add to `.env.local`:**
```env
VITE_GOOGLE_MAPS_API_KEY=AIzaSy...
```

### **Step 5: Set Up Billing**

Google Maps requires billing, but gives $200/month free credit:

1. Go to "Billing"
2. Link billing account to project
3. Most usage will be covered by free tier

### **Step 6: Implementation**

Install Google Maps package:
```bash
npm install @react-google-maps/api
```

**Hotel Distance Verification:**

```typescript
// src/lib/google-maps.ts
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

export async function getPlaceDetails(placeId: string) {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`
  )
  return response.json()
}

export async function calculateDistance(origin: string, destination: string) {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${GOOGLE_MAPS_API_KEY}`
  )
  return response.json()
}

// Verify hotel distance to Masjid al-Haram
export async function verifyHotelDistance(
  hotelName: string,
  city: 'makkah' | 'madinah'
) {
  const masjidLocation = city === 'makkah' 
    ? 'Masjid al-Haram, Makkah' 
    : 'Masjid an-Nabawi, Madinah'

  const result = await calculateDistance(hotelName, masjidLocation)
  
  return {
    distance: result.rows[0].elements[0].distance.text,
    duration: result.rows[0].elements[0].duration.text,
  }
}
```

**Display Map in Component:**

```typescript
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

function HotelMap({ hotelLocation }) {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        center={hotelLocation}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '300px' }}
      >
        <Marker position={hotelLocation} />
      </GoogleMap>
    </LoadScript>
  )
}
```

---

## 2. Payment Gateway: Xendit

### **Why Xendit?**
- ✅ Best for Indonesia (local payment methods)
- ✅ Bank transfers, e-wallets, credit cards
- ✅ Easy integration
- ✅ Competitive fees (1.4% + Rp 2,000 for VA)

### **Step 1: Create Xendit Account**

1. Go to [https://www.xendit.co/](https://www.xendit.co/)
2. Click "Sign Up"
3. Fill in business details
4. Verify email and phone

### **Step 2: Get API Keys**

1. Go to Dashboard → Settings → Developers
2. Copy API keys:
   - **Secret Key:** `xnd_development_...` (test mode)
   - **Public Key:** `xnd_public_development_...`

### **Step 3: Add to Environment**

**Backend (`wrangler.toml`):**
```toml
[vars]
XENDIT_SECRET_KEY = "xnd_development_..."
XENDIT_PUBLIC_KEY = "xnd_public_development_..."
XENDIT_CALLBACK_TOKEN = "your-callback-token"
```

### **Step 4: Create Payment Endpoint**

Create in Hono backend `src/routes/payments.ts`:

```typescript
import { Hono } from 'hono'
import { Xendit } from 'xendit-node'

const xendit = new Xendit({
  secretKey: c.env.XENDIT_SECRET_KEY
})

app.post('/create-invoice', async (c) => {
  const { bookingId, amount, customerName, email } = await c.req.json()
  
  const { data: invoice } = await xendit.Invoice.createInvoice({
    data: {
      externalId: `booking-${bookingId}`,
      amount: amount,
      payerEmail: email,
      description: `Payment for booking ${bookingId}`,
      customerName: customerName,
      successRedirectUrl: 'https://jemaah.id/booking/payment-success',
      failureRedirectUrl: 'https://jemaah.id/booking/payment-failed',
    }
  })

  return c.json({ 
    data: invoice,
    message: 'Invoice created successfully'
  })
})

// Webhook handler
app.post('/webhook', async (c) => {
  const callbackToken = c.req.header('x-callback-token')
  
  if (callbackToken !== c.env.XENDIT_CALLBACK_TOKEN) {
    return c.json({ error: 'Unauthorized' }, 401)
  }

  const data = await c.req.json()
  
  // Update booking status in database
  if (data.status === 'PAID') {
    const bookingId = data.external_id.replace('booking-', '')
    await updateBookingPaymentStatus(bookingId, 'paid')
  }

  return c.json({ status: 'ok' })
})
```

### **Step 5: Payment Methods Supported**

- ✅ Bank Transfer (Virtual Accounts)
  - BCA, Mandiri, BNI, BRI, etc.
- ✅ E-Wallets
  - GoPay, OVO, Dana, ShopeePay
- ✅ Credit/Debit Cards
  - Visa, Mastercard
- ✅ QRIS
  - All Indonesian QR payment

### **Step 6: Frontend Integration**

```typescript
// In booking payment page
const handlePayment = async () => {
  const response = await fetch(`${API_BASE_URL}/payments/create-invoice`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      bookingId: booking.id,
      amount: booking.total_price,
      customerName: user.full_name,
      email: user.email,
    }),
  })

  const { data: invoice } = await response.json()
  
  // Redirect to Xendit payment page
  window.location.href = invoice.invoice_url
}
```

---

## 2B. Payment Gateway: Midtrans (Alternative)

### **Why Midtrans?**
- ✅ Popular in Indonesia
- ✅ More payment methods
- ✅ Better documentation
- ✅ Slightly cheaper fees

### **Setup Steps:**

1. Register at [https://midtrans.com/](https://midtrans.com/)
2. Get Server Key & Client Key
3. Install SDK: `npm install midtrans-client`
4. Similar implementation to Xendit

**Choose one payment gateway based on your preference.**

---

## 3. File Storage: Cloudflare R2

### **Why Cloudflare R2?**
- ✅ Zero egress fees (unlike AWS S3)
- ✅ S3-compatible API
- ✅ $0.015/GB storage
- ✅ Fast global CDN
- ✅ Integrates with Cloudflare ecosystem

### **Step 1: Create R2 Bucket**

1. Go to Cloudflare Dashboard → R2
2. Click "Create Bucket"
3. Bucket name: `jemaah-documents`
4. Click "Create"

### **Step 2: Create API Token**

1. Go to R2 → Manage R2 API Tokens
2. Click "Create API Token"
3. Permissions: `Object Read & Write`
4. Copy credentials:
   - Access Key ID
   - Secret Access Key
   - Endpoint

### **Step 3: Install R2 Client**

```bash
npm install @aws-sdk/client-s3
```

### **Step 4: Backend Upload Endpoint**

```typescript
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
})

app.post('/upload-document', async (c) => {
  const formData = await c.req.formData()
  const file = formData.get('file') as File
  
  const key = `documents/${Date.now()}-${file.name}`
  
  await r2Client.send(new PutObjectCommand({
    Bucket: 'jemaah-documents',
    Key: key,
    Body: file,
    ContentType: file.type,
  }))

  const fileUrl = `https://r2.jemaah.id/${key}`

  return c.json({ url: fileUrl })
})
```

### **Step 5: Frontend Upload Component**

```typescript
const handleFileUpload = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch(`${API_BASE_URL}/upload-document`, {
    method: 'POST',
    body: formData,
  })

  const { url } = await response.json()
  
  // Save URL to database
  await saveDocumentToDatabase(url)
}
```

---

## 4. Email Service: Resend

### **Why Resend?**
- ✅ Modern API
- ✅ 100 emails/day free
- ✅ $0.20 per 1,000 emails after
- ✅ React email templates support

### **Step 1: Create Resend Account**

1. Go to [https://resend.com/](https://resend.com/)
2. Sign up with GitHub or email
3. Verify your domain

### **Step 2: Get API Key**

1. Go to Dashboard → API Keys
2. Copy API key
3. Add to backend environment

### **Step 3: Install SDK**

```bash
npm install resend
```

### **Step 4: Send Email**

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Booking confirmation email
export async function sendBookingConfirmation(userEmail: string, bookingData: any) {
  await resend.emails.send({
    from: 'Jemaah.id <noreply@jemaah.id>',
    to: userEmail,
    subject: 'Booking Confirmation - Jemaah.id',
    html: `
      <h1>Booking Confirmed!</h1>
      <p>Thank you for booking with us.</p>
      <p>Booking ID: ${bookingData.id}</p>
      <p>Package: ${bookingData.packageName}</p>
    `,
  })
}
```

---

## 5. WhatsApp Business API

### **Option 1: Twilio WhatsApp**

1. Sign up at [Twilio](https://www.twilio.com/)
2. Enable WhatsApp channel
3. Get Account SID & Auth Token
4. Install: `npm install twilio`

```typescript
import twilio from 'twilio'

const client = twilio(ACCOUNT_SID, AUTH_TOKEN)

export async function sendWhatsApp(phoneNumber: string, message: string) {
  await client.messages.create({
    from: 'whatsapp:+14155238886',
    to: `whatsapp:${phoneNumber}`,
    body: message,
  })
}
```

### **Option 2: Meta WhatsApp Cloud API**

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Create app → WhatsApp
3. Get Phone Number ID & Access Token
4. More affordable than Twilio

---

## 6. AI/OCR: Google Cloud Vision

### **For Passport & Document Scanning**

### **Step 1: Enable Vision API**

1. Go to Google Cloud Console
2. Enable "Cloud Vision API"
3. Create service account
4. Download JSON key file

### **Step 2: Install SDK**

```bash
npm install @google-cloud/vision
```

### **Step 3: OCR Implementation**

```typescript
import { ImageAnnotatorClient } from '@google-cloud/vision'

const client = new ImageAnnotatorClient({
  keyFilename: 'path/to/service-account.json'
})

export async function extractPassportData(imageUrl: string) {
  const [result] = await client.textDetection(imageUrl)
  const detections = result.textAnnotations
  
  // Parse passport data from detected text
  const text = detections[0]?.description || ''
  
  return {
    passportNumber: extractPassportNumber(text),
    fullName: extractFullName(text),
    birthDate: extractBirthDate(text),
    expiryDate: extractExpiryDate(text),
  }
}
```

---

## 7. Integration Summary

### **All Environment Variables**

**Frontend (.env.local):**
```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbG...
VITE_API_BASE_URL=http://localhost:8787/api
VITE_GOOGLE_MAPS_API_KEY=AIza...
```

**Backend (wrangler.toml):**
```toml
[vars]
SUPABASE_URL = "https://xxxxx.supabase.co"
SUPABASE_SERVICE_ROLE_KEY = "eyJhbG..."
GOOGLE_MAPS_API_KEY = "AIza..."
XENDIT_SECRET_KEY = "xnd_development_..."
RESEND_API_KEY = "re_..."
CLOUDFLARE_R2_ACCESS_KEY = "..."
CLOUDFLARE_R2_SECRET_KEY = "..."
```

### **Cost Estimates (Monthly)**

| Service | Free Tier | Paid Plan |
|---------|-----------|-----------|
| Supabase | 50,000 MAU | $25/mo |
| Cloudflare Pages | Unlimited | Free |
| Cloudflare Workers | 100k/day | $5/mo |
| Google Maps | $200 credit | Usage-based |
| Xendit | Free setup | 1.4% + Rp 2,000 |
| Cloudflare R2 | 10 GB | $0.015/GB |
| Resend | 100/day | $0.20/1k emails |
| **Total (Est.)** | **~$30-50/mo** | **Scales with usage** |

---

## 🎯 Implementation Order

### **Phase 1: Core (Week 1-2)**
1. ✅ Supabase (Database + Auth)
2. ✅ Zustand (State Management)
3. ✅ Basic API endpoints (Hono)
4. ✅ Authentication flow

### **Phase 2: Payments (Week 3)**
5. ✅ Payment gateway (Xendit)
6. ✅ Booking flow integration
7. ✅ Webhook handlers

### **Phase 3: Features (Week 4)**
8. ✅ Google Maps (hotel verification)
9. ✅ File storage (R2)
10. ✅ Email notifications

### **Phase 4: Advanced (Week 5+)**
11. ✅ AI/OCR for passport scanning
12. ✅ WhatsApp notifications
13. ✅ Analytics & monitoring

---

**All third-party integrations are now documented and ready for implementation! 🚀**
