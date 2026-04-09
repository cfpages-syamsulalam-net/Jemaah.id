# Cloudflare Pages + Hono Backend Setup

Complete guide for deploying Jemaah.id frontend to Cloudflare Pages and building backend API with Hono on Cloudflare Workers.

**Last Updated:** 10 April 2026  
**Tech Stack:** Cloudflare Pages (Frontend) + Hono (Backend API) + Cloudflare Workers

---

## 📋 Table of Contents

1. [Cloudflare Pages (Frontend)](#1-cloudflare-pages-frontend)
2. [Hono Backend Setup](#2-hono-backend-setup)
3. [Cloudflare Workers Deployment](#3-cloudflare-workers-deployment)
4. [API Routes Structure](#4-api-routes-structure)
5. [Environment Variables](#5-environment-variables)
6. [Testing Locally](#6-testing-locally)

---

## 1. Cloudflare Pages (Frontend)

### **Step 1: Create Cloudflare Account**

1. Go to [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Sign up with email or Google account
3. Verify your email

### **Step 2: Connect GitHub Repository**

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click "Workers & Pages" in left sidebar
3. Click "Create Application" → "Pages"
4. Click "Connect to Git"
5. Authorize Cloudflare to access your GitHub
6. Select your repository: `Jemaah.id`
7. Click "Begin Setup"

### **Step 3: Configure Build Settings**

Fill in the build settings:

- **Project name:** `jemaah-id`
- **Production branch:** `main`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** (leave blank)
- **Environment variables:** (add later in Settings)

Click "Save and Deploy"

### **Step 4: Custom Domain (Optional)**

1. Go to your Pages project → "Custom domains"
2. Click "Set up a custom domain"
3. Enter: `jemaah.id`
4. Follow DNS configuration instructions
5. Wait for SSL certificate provisioning (~5 minutes)

### **Step 5: Automatic Deployments**

Every push to `main` branch will automatically:
1. Build your Vite app
2. Deploy to Cloudflare Pages
3. Provide preview URL for testing
4. Deploy to production on success

---

## 2. Hono Backend Setup

### **What is Hono?**
Hono is a lightweight, ultrafast web framework for Cloudflare Workers. It's perfect for our backend API because:
- ✅ Runs on Cloudflare Workers (serverless, free tier)
- ✅ TypeScript-first
- ✅ 10x faster than Express.js
- ✅ Tiny bundle size (<15kb)
- ✅ Same code works on Cloudflare, Vercel, Deno, etc.

### **Step 1: Create Backend Project**

Create a new directory for your backend:

```bash
cd ..  # Go to parent directory
mkdir jemaah-api
cd jemaah-api
npm init -y
```

### **Step 2: Install Dependencies**

```bash
npm install hono
npm install -D wrangler typescript @cloudflare/workers-types
```

### **Step 3: Initialize Wrangler CLI**

```bash
npx wrangler init
```

This creates `wrangler.toml` configuration file.

### **Step 4: Configure `wrangler.toml`**

```toml
name = "jemaah-api"
main = "src/index.ts"
compatibility_date = "2024-04-01"

# Environment variables (add real values later)
[vars]
SUPABASE_URL = "https://xxxxx.supabase.co"
SUPABASE_SERVICE_ROLE_KEY = "your-service-role-key"
GOOGLE_MAPS_API_KEY = "your-google-maps-key"
```

### **Step 5: Create Hono App Structure**

```
jemaah-api/
├── src/
│   ├── index.ts           # Main entry point
│   ├── routes/
│   │   ├── packages.ts    # Package endpoints
│   │   ├── agencies.ts    # Agency endpoints
│   │   ├── bookings.ts    # Booking endpoints
│   │   ├── reviews.ts     # Review endpoints
│   │   └── users.ts       # User endpoints
│   ├── middleware/
│   │   ├── auth.ts        # Authentication middleware
│   │   └── cors.ts        # CORS configuration
│   ├── lib/
│   │   ├── supabase.ts    # Supabase client
│   │   └── google-maps.ts # Google Maps client
│   └── types.ts           # TypeScript types
├── wrangler.toml
├── package.json
└── tsconfig.json
```

### **Step 6: Create Main Hono App**

Create `src/index.ts`:

```typescript
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import packagesRoute from './routes/packages'
import agenciesRoute from './routes/agencies'
import bookingsRoute from './routes/bookings'
import reviewsRoute from './routes/reviews'
import usersRoute from './routes/users'

const app = new Hono()

// CORS configuration for frontend
app.use('/*', cors({
  origin: ['http://localhost:5555', 'https://jemaah.id'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length'],
  maxAge: 600,
  credentials: true,
}))

// Health check
app.get('/', (c) => {
  return c.json({ 
    status: 'ok',
    message: 'Jemaah.id API is running',
    timestamp: new Date().toISOString()
  })
})

// Routes
app.route('/api/packages', packagesRoute)
app.route('/api/agencies', agenciesRoute)
app.route('/api/bookings', bookingsRoute)
app.route('/api/reviews', reviewsRoute)
app.route('/api/users', usersRoute)

export default app
```

### **Step 7: Create Sample Route**

Create `src/routes/packages.ts`:

```typescript
import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { getSupabaseClient } from '../lib/supabase'

const app = new Hono()

// GET /api/packages - List all active packages
app.get('/', async (c) => {
  const supabase = getSupabaseClient(c.env.SUPABASE_URL, c.env.SUPABASE_SERVICE_ROLE_KEY)
  
  const { data: packages, error } = await supabase
    .from('packages')
    .select(`
      *,
      agency:agencies(name, slug, logo_url, rating)
    `)
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (error) {
    return c.json({ error: error.message }, 500)
  }

  return c.json({ data: packages })
})

// GET /api/packages/:id - Get single package
app.get('/:id', async (c) => {
  const id = c.req.param('id')
  const supabase = getSupabaseClient(c.env.SUPABASE_URL, c.env.SUPABASE_SERVICE_ROLE_KEY)
  
  const { data: pkg, error } = await supabase
    .from('packages')
    .select(`
      *,
      agency:agencies(*)
    `)
    .eq('id', id)
    .single()

  if (error) {
    return c.json({ error: error.message }, 500)
  }

  if (!pkg) {
    return c.json({ error: 'Package not found' }, 404)
  }

  return c.json({ data: pkg })
})

// POST /api/packages/search - Search packages
app.post('/search', zValidator('json', z.object({
  departure_city: z.string().optional(),
  min_price: z.number().optional(),
  max_price: z.number().optional(),
  duration_days: z.number().optional(),
  airline: z.string().optional(),
})), async (c) => {
  const body = c.req.valid('json')
  const supabase = getSupabaseClient(c.env.SUPABASE_URL, c.env.SUPABASE_SERVICE_ROLE_KEY)
  
  let query = supabase
    .from('packages')
    .select('*, agency:agencies(name, slug, logo_url, rating)')
    .eq('is_active', true)

  if (body.departure_city) {
    query = query.eq('departure_city', body.departure_city)
  }
  if (body.min_price) {
    query = query.gte('price', body.min_price)
  }
  if (body.max_price) {
    query = query.lte('price', body.max_price)
  }

  const { data: packages, error } = await query

  if (error) {
    return c.json({ error: error.message }, 500)
  }

  return c.json({ data: packages })
})

export default app
```

### **Step 8: Create Supabase Helper**

Create `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

export function getSupabaseClient(url: string, key: string) {
  return createClient(url, key)
}
```

### **Step 9: Add TypeScript Config**

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "lib": ["ESNext"],
    "types": ["@cloudflare/workers-types"],
    "jsx": "react-jsx",
    "jsxImportSource": "hono/jsx"
  }
}
```

---

## 3. Cloudflare Workers Deployment

### **Step 1: Login to Cloudflare**

```bash
npx wrangler login
```

This opens a browser window for authentication.

### **Step 2: Test Locally**

```bash
npx wrangler dev
```

Your API will run at `http://localhost:8787`

Test endpoints:
```bash
curl http://localhost:8787/
curl http://localhost:8787/api/packages
```

### **Step 3: Deploy to Production**

```bash
npx wrangler deploy
```

Your API will be available at:
```
https://jemaah-api.your-subdomain.workers.dev
```

### **Step 4: Add Custom Domain (Optional)**

```bash
npx wrangler routes add jemaah-api "jemaah.id/api/*"
```

---

## 4. API Routes Structure

### **Complete API Endpoints:**

```
# Packages
GET    /api/packages              # List all active packages
GET    /api/packages/:id          # Get single package
POST   /api/packages/search       # Search packages
POST   /api/packages              # Create package (agency only)
PUT    /api/packages/:id          # Update package (agency only)
DELETE /api/packages/:id          # Delete package (agency only)

# Agencies
GET    /api/agencies              # List all agencies
GET    /api/agencies/:id          # Get agency profile
GET    /api/agencies/:slug        # Get agency by slug
GET    /api/agencies/:id/packages # Get agency packages
PUT    /api/agencies/:id          # Update agency (owner only)

# Bookings
GET    /api/bookings              # List user bookings
POST   /api/bookings              # Create booking
GET    /api/bookings/:id          # Get booking details
PUT    /api/bookings/:id          # Update booking
POST   /api/bookings/:id/pay      # Initiate payment

# Reviews
GET    /api/reviews               # List reviews
POST   /api/reviews               # Create review
GET    /api/reviews/:id           # Get review
PUT    /api/reviews/:id           # Update review (owner only)
POST   /api/reviews/:id/respond   # Respond to review (agency only)

# Users
GET    /api/users/me              # Get current user
PUT    /api/users/me              # Update current user
GET    /api/users/me/documents    # List user documents
POST   /api/users/me/documents    # Upload document

# Admin
GET    /api/admin/claims           # List claims
POST   /api/admin/claims/:id/approve  # Approve claim
POST   /api/admin/claims/:id/reject   # Reject claim
```

---

## 5. Environment Variables

### **Frontend (.env.local)**

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbG...
VITE_API_BASE_URL=http://localhost:8787/api
VITE_GOOGLE_MAPS_API_KEY=AIza...
```

### **Backend (wrangler.toml)**

```toml
[vars]
SUPABASE_URL = "https://xxxxx.supabase.co"
SUPABASE_SERVICE_ROLE_KEY = "eyJhbG..."
GOOGLE_MAPS_API_KEY = "AIza..."
FLIGHTDATA_API_KEY = "your-key"
XENDIT_API_KEY = "your-key"
```

### **Add to Cloudflare Workers**

```bash
npx wrangler secret put SUPABASE_URL
npx wrangler secret put SUPABASE_SERVICE_ROLE_KEY
npx wrangler secret put GOOGLE_MAPS_API_KEY
```

---

## 6. Testing Locally

### **Run Frontend + Backend Together**

Terminal 1 (Backend):
```bash
cd jemaah-api
npx wrangler dev
```

Terminal 2 (Frontend):
```bash
cd Jemaah.id
npm run dev
```

### **Test API Calls from Frontend**

```typescript
// Example: Fetch packages
const response = await fetch('http://localhost:8787/api/packages')
const data = await response.json()
console.log(data)
```

---

## 📚 Next Steps

After setting up Cloudflare + Hono:

1. ✅ Set up Supabase (see `SETUP_SUPABASE.md`)
2. ✅ Set up Zustand (see `SETUP_ZUSTAND.md`)
3. ✅ Set up Google Maps (see `SETUP_THIRD_PARTY.md`)
4. ✅ Set up Payment Gateway (see `SETUP_THIRD_PARTY.md`)
5. Replace dummy data with real API calls
6. Add authentication flow
7. Deploy to production

---

**Your Jemaah.id platform is now ready for full-stack development! 🚀**
