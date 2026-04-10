# Development Operations Protocol

**Critical rules to prevent white screen issues and maintain project health.**

**Created:** 10 April 2026  
**Status:** MANDATORY - Must be followed for every development session

---

## 🚨 THE GOLDEN RULE: Always Verify Before Declaring Complete

**NEVER declare a task complete without running these verification steps.**

---

## ✅ Pre-Flight Checklist (MUST Run Before Any Session End)

### **Step 1: Build Verification**

```bash
npm run build
```

**MUST see:**
```
✓ built in X.XXs
```

**If you see ANY errors:**
- ❌ DO NOT declare complete
- ❌ DO NOT stop working
- ✅ FIX all errors first
- ✅ Run build again
- ✅ Repeat until 0 errors

### **Step 2: Dev Server Verification**

```bash
# Kill existing server first
taskkill /F /PID <current_pid>

# Start fresh
npm run dev
```

**MUST verify:**
- Server starts successfully
- No console errors in terminal
- Port 5555 is listening

### **Step 3: Browser Verification**

1. Open http://localhost:5555
2. Open DevTools (F12)
3. Check Console tab - MUST have 0 red errors
4. Check Network tab - No failed requests (red)
5. Page must render (NOT white screen)

---

## 🚫 THE NEVER LIST (Things That Cause White Screens)

### **NEVER Do These:**

1. **NEVER skip build verification**
   - ❌ "It looks fine, I'll skip the build check"
   - ✅ ALWAYS run `npm run build` before declaring done

2. **NEVER leave unused imports**
   - ❌ `import { useState, useEffect } from 'react'` (if useEffect not used)
   - ✅ Remove ALL unused imports immediately

3. **NEVER forget type-only imports when required**
   - ❌ `import { Package } from './types'` (when Package is a type)
   - ✅ `import type { Package } from './types'`

4. **NEVER skip dev server restart after major changes**
   - ❌ Keep running old server with stale code
   - ✅ Kill server → Start fresh → Verify page loads

5. **NEVER add dependencies without installing them**
   - ❌ `import { createClient } from '@supabase/supabase-js'` without `npm install`
   - ✅ Install package FIRST, then import

6. **NEVER mismatch component props**
   - ❌ Pass wrong prop types to components
   - ✅ Check component interface before passing props

7. **NEVER forget to update routes when creating new pages**
   - ❌ Create `NewPage.tsx` but don't add to `App.tsx`
   - ✅ Add route IMMEDIATELY after creating page

8. **NEVER push code that hasn't been built**
   - ❌ Commit without running build first
   - ✅ Build MUST pass before commit

---

## ✅ THE ALWAYS LIST (Best Practices)

### **ALWAYS Do These:**

1. **ALWAYS run build after creating/editing files**
   ```bash
   npm run build
   ```

2. **ALWAYS check for TypeScript errors immediately**
   - Red squiggles in code = fix NOW
   - Don't accumulate errors

3. **ALWAYS restart dev server after multiple changes**
   ```bash
   # Windows
   taskkill /F /PID <pid> && npm run dev
   
   # Or use Ctrl+C in terminal, then npm run dev
   ```

4. **ALWAYS verify in browser**
   - Open http://localhost:5555
   - Check for white screen
   - Open DevTools console (F12)
   - Look for errors

5. **ALWAYS clean up imports after creating files**
   ```typescript
   // ❌ BAD
   import { useState, useEffect, useMemo } from 'react'
   import { Card, Badge, Button, Input } from '../components/ui'
   
   // ✅ GOOD (only what's used)
   import { useState } from 'react'
   import { Card } from '../components/ui/Card'
   import { Badge } from '../components/ui/Badge'
   import { Button } from '../components/ui/Button'
   ```

6. **ALWAYS use proper import structure**
   ```typescript
   // ✅ CORRECT ORDER
   import React from 'react'           // Framework
   import { useState } from 'react'    // React hooks
   import { Link } from 'react-router-dom'  // Router
   import { Icon } from 'lucide-react'      // Icons
   import { Component } from '../path'      // Local components
   import { data } from '../data'           // Data
   ```

7. **ALWAYS verify component exports**
   ```typescript
   // ✅ In component file
   export default function MyComponent() { ... }
   
   // ✅ In import
   import MyComponent from './MyComponent'  // Note: no {} for default export
   ```

---

## 🔍 White Screen Troubleshooting Flowchart

When you see a white screen, follow this EXACT order:

```
White Screen Detected
         ↓
1. Check DevTools Console (F12)
         ↓
   Red Errors Found?
         ↓
    YES → Read error message
         ↓
   Identify the file & line
         ↓
   Common errors:
   • "X is not defined" → Missing import
   • "Cannot read property" → Undefined data
   • "Type error" → Wrong prop type
   • "Module not found" → Missing package
         ↓
   Fix the error
         ↓
   Save file (auto-reload)
         ↓
   Check if white screen gone?
         ↓
   YES → Run build to verify
   NO → Check next error
         ↓
    NO errors in console?
         ↓
2. Check DevTools Network tab (F12 → Network)
         ↓
   Failed requests (red)?
         ↓
   YES → Check API endpoints
         ↓
3. Check if dev server is running
         ↓
   netstat -ano | findstr :5555
         ↓
   Not running? → npm run dev
         ↓
4. Hard refresh browser
         ↓
   Ctrl + Shift + R (Windows)
   Cmd + Shift + R (Mac)
         ↓
5. Clear browser cache
         ↓
   DevTools → Application → Clear site data
         ↓
6. Kill and restart dev server
         ↓
   taskkill /F /PID <pid>
   npm run dev
         ↓
7. Run build to check for compilation errors
         ↓
   npm run build
         ↓
   Fix any errors found
         ↓
   Restart dev server
         ↓
   Verify in browser
```

---

## 📋 Session Workflow (Follow This Every Time)

### **Starting a Session:**

```bash
# 1. Kill any existing dev server
taskkill /F /PID <current_pid>

# 2. Start fresh
npm run dev

# 3. Verify in browser
# Open http://localhost:5555
# Check DevTools console (F12)
# Ensure no errors, page loads
```

### **During a Session:**

```
1. Create/edit files
        ↓
2. Save file (Vite auto-reloads)
        ↓
3. Check browser for errors
        ↓
   Errors? → Fix immediately
   No errors? → Continue
        ↓
4. After every 3-5 files created:
   - Run build: npm run build
   - Fix any errors
   - Restart dev server
```

### **Ending a Session:**

```
1. Run final build: npm run build
        ↓
   ERRORS? → Fix ALL before stopping
   SUCCESS? → Continue
        ↓
2. Restart dev server fresh
        ↓
3. Open http://localhost:5555 in browser
        ↓
4. Open DevTools (F12)
        ↓
5. Check Console tab
        ↓
   Red errors? → Fix before ending
   No errors? → Continue
        ↓
6. Check page renders correctly
        ↓
   White screen? → Troubleshoot using flowchart
   Page loads? → Continue
        ↓
7. Update documentation:
   - CHANGELOG.md (what was done)
   - SCREENS.md (if new screens added)
   - PROGRESS.md (if milestone reached)
        ↓
8. NOW you can declare session complete
```

---

## 🚨 Emergency Recovery Steps

If white screen persists and you can't find the issue:

### **Step 1: Check Last Files Created/Edited**

```bash
# Look at recently modified files
git status
```

### **Step 2: Check Build Output Carefully**

```bash
npm run build
```

Read EVERY line of output, not just the summary.

### **Step 3: Check Browser Console**

F12 → Console tab → Read ALL errors (not just first one)

### **Step 4: Check Terminal for Vite Errors**

The terminal running `npm run dev` shows errors in red.

### **Step 5: Last Resort - Revert & Rebuild**

```bash
# If git is being used
git log --oneline -5  # See last 5 commits
git revert HEAD       # Revert last commit if needed

# Or manually remove last created files
# Then run build again
```

---

## 📝 Common Error Patterns & Solutions

### **Error: "X is not defined"**

```typescript
// ❌ PROBLEM
<PackageCard pkg={pkg} />
// Error: PackageCard is not defined

// ✅ SOLUTION
import { PackageCard } from '../components/shared/PackageCard'
```

### **Error: "Cannot read properties of undefined"**

```typescript
// ❌ PROBLEM
const pkg = DUMMY_PACKAGES.find(p => p.id === id)
return <h1>{pkg.name}</h1>
// Error if pkg is undefined

// ✅ SOLUTION
const pkg = DUMMY_PACKAGES.find(p => p.id === id)
if (!pkg) return <div>Package not found</div>
return <h1>{pkg.name}</h1>
```

### **Error: "Module not found"**

```bash
# ❌ PROBLEM
import { createClient } from '@supabase/supabase-js'
// Error: Cannot find module

# ✅ SOLUTION
npm install @supabase/supabase-js
```

### **Error: "Type X is not assignable to type Y"**

```typescript
// ❌ PROBLEM
<Badge variant="warning">Text</Badge>
// Error: "warning" not in type

// ✅ SOLUTION
// Either add "warning" to Badge's type definition
// Or use existing variant
<Badge variant="secondary">Text</Badge>
```

---

## 🎯 Quick Reference Card

Print this and keep it visible:

```
┌─────────────────────────────────────────────┐
│     BEFORE DECLARING SESSION COMPLETE       │
│                                             │
│  1. npm run build → MUST PASS (0 errors)   │
│  2. Restart dev server → MUST START        │
│  3. Open browser → MUST NOT BE WHITE       │
│  4. Check console → MUST HAVE 0 ERRORS     │
│  5. Update docs → MUST BE CURRENT          │
│                                             │
│  If ANY fail → FIX BEFORE STOPPING         │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│         WHEN CREATING NEW FILES             │
│                                             │
│  1. Create file                             │
│  2. Add imports to App.tsx if new page     │
│  3. Remove unused imports immediately      │
│  4. Save and check browser                 │
│  5. Run build after 3-5 files              │
│  6. Fix any errors before continuing       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│         WHITE SCREEN DETECTED               │
│                                             │
│  1. F12 → Console → Read errors            │
│  2. Fix reported errors                    │
│  3. F12 → Network → Check failures         │
│  4. Restart dev server                     │
│  5. Hard refresh (Ctrl+Shift+R)            │
│  6. npm run build → Check for errors       │
│  7. Fix and repeat until clean             │
└─────────────────────────────────────────────┘
```

---

## 🤖 AI Agent Instructions

**When AI (Qwen/Gemini) is working on this project:**

1. **MUST run `npm run build` before declaring task complete**
2. **MUST fix ALL TypeScript errors**
3. **MUST restart dev server after changes**
4. **MUST verify no white screen in browser**
5. **MUST update CHANGELOG.md after every change**
6. **MUST remove unused imports immediately**
7. **MUST use type-only imports when required**
8. **MUST add routes to App.tsx when creating pages**
9. **MUST NOT skip verification steps**
10. **MUST NOT declare complete until all checks pass**

---

## 📊 Health Check Commands

Run these periodically to ensure project health:

```bash
# Check for TypeScript errors
npm run build

# Check for linting issues  
npm run lint

# Check if dev server is running
netstat -ano | findstr :5555

# Check file changes
git status

# View recent commits
git log --oneline -10
```

---

**This document MUST be consulted before EVERY development session and followed strictly to prevent white screen issues.** 🚀

**Remember: A task is NOT complete until the build passes AND the page loads without errors!**
