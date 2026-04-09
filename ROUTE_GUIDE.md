# Jemaah.id - Complete Route Guide

**Base URL:** http://localhost:5555

---

## 🏠 Consumer Routes (Jamaah)

### Main Pages
| Route | Page | Description | Test Link |
|-------|------|-------------|-----------|
| `/` | Home | Hero search, featured packages | http://localhost:5555/ |
| `/search` | Search Results | Package listing with filters | http://localhost:5555/search |
| `/compare` | Compare | Side-by-side comparison | http://localhost:5555/compare |
| `/package/:id` | Package Detail | Full itinerary & booking | http://localhost:5555/package/1 |

### User Account
| Route | Page | Description | Test Link |
|-------|------|-------------|-----------|
| `/favorites` | Favorites | Saved packages | http://localhost:5555/favorites |
| `/search-history` | Search History | Recent searches | http://localhost:5555/search-history |
| `/saved-comparisons` | Saved Comparisons | Comparison history | http://localhost:5555/saved-comparisons |
| `/profile` | User Profile | Profile & documents | http://localhost:5555/profile |
| `/my-bookings` | My Bookings | Booking history | http://localhost:5555/my-bookings |
| `/write-review` | Write Review | Submit review | http://localhost:5555/write-review |

---

## 📅 Booking Flow (Sequential)

Test the complete booking journey:

1. **Step 1:** http://localhost:5555/booking/room - Select room type
2. **Step 2:** http://localhost:5555/booking/passenger - Passenger details
3. **Step 3:** http://localhost:5555/booking/summary - Review & summary
4. **Step 4:** http://localhost:5555/booking/payment - Payment confirmation

---

## 🏢 Partner Portal Routes (B2B)

### Dashboard & Management
| Route | Page | Description | Test Link |
|-------|------|-------------|-----------|
| `/partner/dashboard` | Dashboard | Analytics & metrics | http://localhost:5555/partner/dashboard |
| `/partner/packages` | Package Management | CRUD operations | http://localhost:5555/partner/packages |
| `/partner/add-package` | Add Package | 4-step wizard | http://localhost:5555/partner/add-package |

### Public Pages
| Route | Page | Description | Test Link |
|-------|------|-------------|-----------|
| `/agency/:id` | Agency Profile | Public profile | http://localhost:5555/agency/1 |

---

## 🔧 Other Routes

| Route | Page | Description | Test Link |
|-------|------|-------------|-----------|
| `/verification` | Verification | Coming soon placeholder | http://localhost:5555/verification |

---

## 🧪 Quick Testing Checklist

### Consumer Flow ✅
- [ ] Visit Home page, see featured packages
- [ ] Search for packages with filters
- [ ] View package details (click any package)
- [ ] Add packages to favorites
- [ ] Compare multiple packages
- [ ] View search history
- [ ] Check saved comparisons
- [ ] Update user profile
- [ ] View booking history
- [ ] Write a review

### Booking Flow ✅
- [ ] Start booking from package detail
- [ ] Select room type (Quad/Triple/Double)
- [ ] Enter passenger details
- [ ] Review booking summary
- [ ] Complete payment

### Partner Portal ✅
- [ ] View partner dashboard
- [ ] Manage packages (CRUD)
- [ ] Create new package with wizard
- [ ] View agency profile

---

## 💡 Tips for Testing

1. **All data is mocked** - No real API calls, everything works offline
2. **Hot reload enabled** - Changes reflect instantly
3. **Use browser dev tools** - Test responsive design (F12)
4. **Check console** - No errors should appear
5. **Navigate freely** - All routes are fully functional

---

## 🐛 If White Screen Appears

1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Check browser console (F12) for errors
4. Verify dev server is running: http://localhost:5555

---

**All 23 screens are ready for testing! 🚀**
