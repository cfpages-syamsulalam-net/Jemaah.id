# Backend Integration Setup Guide

This guide provides step-by-step instructions for setting up all third-party integrations for Jemaah.id.

**Last Updated:** 10 April 2026  
**Status:** Ready for Implementation  
**Current State:** 39 screens with dummy data → Ready for real APIs

---

## 📋 Table of Contents

1. [Supabase (Database + Auth)](#1-supabase-setup)
2. [Cloudflare Pages (Frontend Deployment)](#2-cloudflare-pages-setup)
3. [Hono + Cloudflare Workers (Backend API)](#3-hono--cloudflare-workers-setup)
4. [Zustand (State Management)](#4-zustand-state-management)
5. [Google Maps Platform](#5-google-maps-platform)
6. [Payment Gateway (Xendit/Midtrans)](#6-payment-gateway)
7. [File Storage (Cloudflare R2)](#7-file-storage-cloudflare-r2)
8. [Integration Checklist](#8-integration-checklist)

---

## 1. Supabase Setup

### **What We're Using:**
- ✅ PostgreSQL Database
- ✅ Authentication (Email, Google, WhatsApp)
- ✅ Row Level Security (RLS)
- ✅ Real-time subscriptions
- ✅ Storage (alternative to Cloudflare R2)

### **Step 1: Create Supabase Project**

1. Go to [https://supabase.com](https://supabase.com)
2. Click "New Project"
3. Choose your organization
4. Fill in:
   - **Project name:** `jemaah-id`
   - **Database Password:** (save securely!)
   - **Region:** `Southeast Asia (Singapore)` for best performance
5. Click "Create new project"
6. Wait 2-3 minutes for provisioning

### **Step 2: Get Project Credentials**

1. Go to Project Settings → API
2. Copy these values:
   ```
   Project URL: https://xxxxx.supabase.co
   Anon/Public Key: eyJhbG...
   Service Role Key: eyJhbG... (keep secret!)
   ```
3. Create `.env.local` in your project root:
   ```env
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbG...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbG... # Backend only!
   ```

### **Step 3: Install Supabase Client**

```bash
npm install @supabase/supabase-js
```

### **Step 4: Create Database Schema**

Run this SQL in Supabase SQL Editor:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  phone VARCHAR(20),
  avatar_url TEXT,
  role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'agency', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agencies table
CREATE TABLE agencies (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  logo_url TEXT,
  location VARCHAR(255),
  phone VARCHAR(20),
  email VARCHAR(255),
  website VARCHAR(255),
  is_verified BOOLEAN DEFAULT FALSE,
  ppui_number VARCHAR(50),
  pihk_number VARCHAR(50),
  rating DECIMAL(3,2) DEFAULT 0.00,
  reviews_count INTEGER DEFAULT 0,
  packages_count INTEGER DEFAULT 0,
  user_id UUID REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Packages table
CREATE TABLE packages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  agency_id UUID REFERENCES agencies(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  duration_days INTEGER NOT NULL,
  departure_city VARCHAR(100),
  airline VARCHAR(100),
  hotel_makkah VARCHAR(255),
  hotel_makkah_stars INTEGER,
  hotel_madinah VARCHAR(255),
  hotel_madinah_stars INTEGER,
  distance_to_masjid INTEGER, -- in meters
  includes JSONB,
  itinerary JSONB,
  is_active BOOLEAN DEFAULT TRUE,
  is_verified BOOLEAN DEFAULT FALSE,
  views_count INTEGER DEFAULT 0,
  bookings_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings table
CREATE TABLE bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  package_id UUID REFERENCES packages(id),
  agency_id UUID REFERENCES agencies(id),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  room_type VARCHAR(50),
  passengers JSONB,
  total_price INTEGER NOT NULL,
  payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded')),
  payment_method VARCHAR(50),
  payment_date TIMESTAMP WITH TIME ZONE,
  booking_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews table
CREATE TABLE reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  package_id UUID REFERENCES packages(id),
  booking_id UUID REFERENCES bookings(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  photos JSONB,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Documents table
CREATE TABLE documents (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  type VARCHAR(50) CHECK (type IN ('passport', 'visa', 'vaccine', 'other')),
  file_url TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'rejected')),
  extracted_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_packages_agency ON packages(agency_id);
CREATE INDEX idx_packages_active ON packages(is_active);
CREATE INDEX idx_bookings_user ON bookings(user_id);
CREATE INDEX idx_bookings_agency ON bookings(agency_id);
CREATE INDEX idx_reviews_package ON reviews(package_id);
CREATE INDEX idx_documents_user ON documents(user_id);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE agencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Users can read own profile
CREATE POLICY "Users can view own profile"
  ON users FOR SELECT
  USING (auth.uid() = id);

-- Users can update own profile
CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- Everyone can read active agencies
CREATE POLICY "Everyone can view agencies"
  ON agencies FOR SELECT
  TO authenticated
  USING (true);

-- Everyone can read active packages
CREATE POLICY "Everyone can view packages"
  ON packages FOR SELECT
  TO authenticated
  USING (is_active = true);

-- Users can view own bookings
CREATE POLICY "Users can view own bookings"
  ON bookings FOR SELECT
  USING (auth.uid() = user_id);

-- Agencies can view bookings for their packages
CREATE POLICY "Agencies can view their bookings"
  ON bookings FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM agencies 
      WHERE agencies.user_id = auth.uid() 
      AND agencies.id = bookings.agency_id
    )
  );

-- Users can view own documents
CREATE POLICY "Users can view own documents"
  ON documents FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert own documents
CREATE POLICY "Users can insert own documents"
  ON documents FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

### **Step 5: Create Supabase Client in Code**

Create `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for database
export type User = {
  id: string
  email: string
  full_name: string | null
  phone: string | null
  avatar_url: string | null
  role: 'user' | 'agency' | 'admin'
  created_at: string
  updated_at: string
}

export type Agency = {
  id: string
  name: string
  slug: string
  description: string | null
  logo_url: string | null
  location: string | null
  phone: string | null
  email: string | null
  website: string | null
  is_verified: boolean
  ppui_number: string | null
  pihk_number: string | null
  rating: number
  reviews_count: number
  packages_count: number
  user_id: string | null
  created_at: string
  updated_at: string
}

export type Package = {
  id: string
  agency_id: string
  name: string
  slug: string
  description: string | null
  price: number
  duration_days: number
  departure_city: string | null
  airline: string | null
  hotel_makkah: string | null
  hotel_makkah_stars: number | null
  hotel_madinah: string | null
  hotel_madinah_stars: number | null
  distance_to_masjid: number | null
  includes: any[] | null
  itinerary: any[] | null
  is_active: boolean
  is_verified: boolean
  views_count: number
  bookings_count: number
  created_at: string
  updated_at: string
}
```

**📖 Continue in next sections for Cloudflare, Hono, Zustand, and other integrations...**
