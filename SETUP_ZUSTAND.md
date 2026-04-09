# Zustand State Management Setup

Complete guide for implementing Zustand for global state management in Jemaah.id.

**Last Updated:** 10 April 2026  
**Purpose:** Replace dummy data with real-time state management

---

## 📋 Table of Contents

1. [What is Zustand?](#what-is-zustand)
2. [Installation](#installation)
3. [Store Architecture](#store-architecture)
4. [Implementation](#implementation)
5. [Usage in Components](#usage-in-components)
6. [Best Practices](#best-practices)

---

## What is Zustand?

Zustand is a small, fast, and scalable state management solution for React. It uses simplified flux principles and doesn't require a provider wrapper.

**Why Zustand for Jemaah.id?**
- ✅ No boilerplate (vs Redux)
- ✅ No provider needed (vs Context)
- ✅ TypeScript-first
- ✅ Works with React Server Components
- ✅ Tiny bundle size (~1kb)
- ✅ Built-in devtools support

---

## Installation

```bash
npm install zustand
```

That's it! No additional configuration needed.

---

## Store Architecture

For Jemaah.id, we'll create these stores:

```
src/
└── stores/
    ├── authStore.ts      # User authentication state
    ├── packageStore.ts   # Packages, search, filters
    ├── bookingStore.ts   # Booking flow state
    ├── compareStore.ts   # Comparison state
    └── uiStore.ts        # UI state (modals, toasts, etc.)
```

---

## Implementation

### 1. Auth Store

Create `src/stores/authStore.ts`:

```typescript
import { create } from 'zustand'
import { supabase } from '../lib/supabase'

type User = {
  id: string
  email: string
  full_name: string | null
  role: 'user' | 'agency' | 'admin'
  avatar_url: string | null
}

type AuthState = {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  
  // Actions
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  updateProfile: (data: Partial<User>) => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setLoading: (isLoading) => set({ isLoading }),

  login: async (email: string, password: string) => {
    set({ isLoading: true })
    try {
      const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if (error) throw error
      
      // Fetch user profile from database
      const { data: profile } = await supabase
        .from('users')
        .select('*')
        .eq('id', user?.id)
        .single()
      
      set({ 
        user: profile, 
        isAuthenticated: true,
        isLoading: false 
      })
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },

  signup: async (email: string, password: string) => {
    set({ isLoading: true })
    try {
      const { data: { user }, error } = await supabase.auth.signUp({
        email,
        password,
      })
      
      if (error) throw error
      
      set({ isLoading: false })
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },

  logout: async () => {
    await supabase.auth.signOut()
    set({ user: null, isAuthenticated: false })
  },

  updateProfile: async (data) => {
    const { user } = useAuthStore.getState()
    if (!user) throw new Error('No user logged in')

    const { data: updatedProfile, error } = await supabase
      .from('users')
      .update(data)
      .eq('id', user.id)
      .select()
      .single()

    if (error) throw error

    set({ user: updatedProfile })
  },
}))

// Auto-load user session on app start
supabase.auth.getSession().then(({ data: { session } }) => {
  if (session?.user) {
    // Fetch and set user profile
  }
})

// Listen for auth changes
supabase.auth.onAuthStateChange((_event, session) => {
  if (session?.user) {
    // Update user profile
  } else {
    useAuthStore.getState().setUser(null)
  }
})
```

### 2. Package Store

Create `src/stores/packageStore.ts`:

```typescript
import { create } from 'zustand'

type Package = {
  id: string
  name: string
  price: number
  duration_days: number
  departure_city: string
  airline: string
  // ... other fields
}

type PackageState = {
  packages: Package[]
  isLoading: boolean
  searchQuery: string
  filters: {
    minPrice?: number
    maxPrice?: number
    departureCity?: string
    airline?: string
    durationDays?: number
  }
  
  // Actions
  setPackages: (packages: Package[]) => void
  setLoading: (loading: boolean) => void
  setSearchQuery: (query: string) => void
  setFilters: (filters: Partial<PackageState['filters']>) => void
  fetchPackages: () => Promise<void>
  searchPackages: () => Promise<void>
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8787/api'

export const usePackageStore = create<PackageState>((set, get) => ({
  packages: [],
  isLoading: false,
  searchQuery: '',
  filters: {},

  setPackages: (packages) => set({ packages }),
  setLoading: (isLoading) => set({ isLoading }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setFilters: (filters) => set((state) => ({ 
    filters: { ...state.filters, ...filters } 
  })),

  fetchPackages: async () => {
    set({ isLoading: true })
    try {
      const response = await fetch(`${API_BASE_URL}/packages`)
      const data = await response.json()
      set({ packages: data.data, isLoading: false })
    } catch (error) {
      set({ isLoading: false })
      console.error('Failed to fetch packages:', error)
    }
  },

  searchPackages: async () => {
    const { searchQuery, filters } = get()
    set({ isLoading: true })
    
    try {
      const response = await fetch(`${API_BASE_URL}/packages/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          search: searchQuery,
          ...filters,
        }),
      })
      
      const data = await response.json()
      set({ packages: data.data, isLoading: false })
    } catch (error) {
      set({ isLoading: false })
      console.error('Failed to search packages:', error)
    }
  },
}))
```

### 3. Compare Store

Create `src/stores/compareStore.ts`:

```typescript
import { create } from 'zustand'

type Package = {
  id: string
  name: string
  price: number
  // ... other fields
}

type CompareState = {
  comparing: Package[]
  maxCompare: number
  
  // Actions
  addToCompare: (pkg: Package) => void
  removeFromCompare: (id: string) => void
  clearCompare: () => void
  isInCompare: (id: string) => boolean
}

export const useCompareStore = create<CompareState>((set, get) => ({
  comparing: [],
  maxCompare: 4,

  addToCompare: (pkg) => {
    const { comparing, maxCompare } = get()
    if (comparing.length >= maxCompare) {
      alert(`Maksimal ${maxCompare} paket untuk dibandingkan`)
      return
    }
    if (comparing.find(p => p.id === pkg.id)) {
      return
    }
    set({ comparing: [...comparing, pkg] })
  },

  removeFromCompare: (id) => {
    set((state) => ({
      comparing: state.comparing.filter(p => p.id !== id)
    }))
  },

  clearCompare: () => set({ comparing: [] }),

  isInCompare: (id) => {
    return get().comparing.some(p => p.id === id)
  },
}))
```

### 4. Booking Store

Create `src/stores/bookingStore.ts`:

```typescript
import { create } from 'zustand'

type Passenger = {
  full_name: string
  passport_number: string
  birth_date: string
  gender: 'male' | 'female'
  phone: string
}

type BookingState = {
  currentStep: number
  selectedPackage: any | null
  roomType: string | null
  passengers: Passenger[]
  
  // Actions
  setStep: (step: number) => void
  setPackage: (pkg: any) => void
  setRoomType: (roomType: string) => void
  addPassenger: (passenger: Passenger) => void
  removePassenger: (index: number) => void
  resetBooking: () => void
}

export const useBookingStore = create<BookingState>((set) => ({
  currentStep: 1,
  selectedPackage: null,
  roomType: null,
  passengers: [],

  setStep: (currentStep) => set({ currentStep }),
  setPackage: (selectedPackage) => set({ selectedPackage }),
  setRoomType: (roomType) => set({ roomType }),
  
  addPassenger: (passenger) => set((state) => ({
    passengers: [...state.passengers, passenger]
  })),
  
  removePassenger: (index) => set((state) => ({
    passengers: state.passengers.filter((_, i) => i !== index)
  })),
  
  resetBooking: () => set({
    currentStep: 1,
    selectedPackage: null,
    roomType: null,
    passengers: []
  }),
}))
```

### 5. UI Store

Create `src/stores/uiStore.ts`:

```typescript
import { create } from 'zustand'

type Toast = {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

type UIState = {
  toasts: Toast[]
  isSidebarOpen: boolean
  
  // Actions
  addToast: (message: string, type: Toast['type']) => void
  removeToast: (id: string) => void
  toggleSidebar: () => void
}

export const useUIStore = create<UIState>((set) => ({
  toasts: [],
  isSidebarOpen: false,

  addToast: (message, type) => {
    const id = Math.random().toString(36).substr(2, 9)
    set((state) => ({
      toasts: [...state.toasts, { id, message, type }]
    }))
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter(t => t.id !== id)
      }))
    }, 5000)
  },

  removeToast: (id) => set((state) => ({
    toasts: state.toasts.filter(t => t.id !== id)
  })),

  toggleSidebar: () => set((state) => ({
    isSidebarOpen: !state.isSidebarOpen
  })),
}))
```

---

## Usage in Components

### Example 1: Using Auth Store

```typescript
import { useAuthStore } from '../stores/authStore'

function UserProfile() {
  const { user, logout, updateProfile } = useAuthStore()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div>
      <h1>Welcome, {user?.full_name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
```

### Example 2: Using Package Store

```typescript
import { usePackageStore } from '../stores/packageStore'

function PackageList() {
  const { packages, isLoading, fetchPackages } = usePackageStore()

  useEffect(() => {
    fetchPackages()
  }, [])

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {packages.map(pkg => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  )
}
```

### Example 3: Using Compare Store

```typescript
import { useCompareStore } from '../stores/compareStore'

function PackageCard({ pkg }) {
  const { addToCompare, removeFromCompare, isInCompare } = useCompareStore()
  const isComparing = isInCompare(pkg.id)

  return (
    <div>
      <h3>{pkg.name}</h3>
      <button onClick={() => isComparing ? removeFromCompare(pkg.id) : addToCompare(pkg)}>
        {isComparing ? 'Remove from Compare' : 'Add to Compare'}
      </button>
    </div>
  )
}
```

---

## Best Practices

### 1. Select Specific State

Instead of subscribing to entire store, select specific fields:

```typescript
// ❌ Re-renders on any change
const { packages, isLoading } = usePackageStore()

// ✅ Only re-renders when packages change
const packages = usePackageStore(state => state.packages)
```

### 2. Use Selectors for Derived State

```typescript
const expensivePackages = usePackageStore(
  state => state.packages.filter(p => p.price > 30000000)
)
```

### 3. Persist State (Optional)

For persisting compare state across sessions:

```typescript
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCompareStore = create(
  persist(
    (set, get) => ({
      comparing: [],
      // ... actions
    }),
    {
      name: 'compare-storage', // localStorage key
    }
  )
)
```

### 4. Combine Stores in Components

```typescript
function BookingPage() {
  const { user } = useAuthStore()
  const { selectedPackage } = useBookingStore()
  const { addToast } = useUIStore()

  const handleBooking = async () => {
    if (!user) {
      addToast('Please login to book', 'warning')
      return
    }
    // Continue with booking
  }
}
```

---

## 🎯 Migration Plan from Dummy Data

### Phase 1: Install Zustand (Done ✅)
```bash
npm install zustand
```

### Phase 2: Create Stores (Next)
- [ ] Create all 5 store files
- [ ] Add TypeScript types
- [ ] Test stores with mock data

### Phase 3: Replace Dummy Data
- [ ] Replace `DUMMY_PACKAGES` with API calls in packageStore
- [ ] Replace booking flow with bookingStore
- [ ] Replace compare with compareStore
- [ ] Add auth flow with authStore

### Phase 4: Test & Optimize
- [ ] Test all components with real stores
- [ ] Add loading states
- [ ] Add error handling
- [ ] Optimize with selectors

---

**Zustand is now ready to manage your application state! 🚀**
