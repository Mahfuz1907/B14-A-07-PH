# 💪 B14-A7-Bazar Dor

---

# API's

## BASE_URL_1: https://api.api-store.workers.dev/api/bazardor

## BASE_URL_2: https://api.abcz.workers.dev/api/bazardor (alternative)

---

# 🔧 Main Requirements — 50 Marks

### 1. Category Page

- **Empty state** (when category has no items / invalid slug): 404-style message + CTA button **“হোম পেজে ফিরে যান”** (links back to `/`).

### 2. Authentication (`/signin`, `/signup`)

- Use **BetterAuth** (email/password + Google + GitHub), toast on success/error, skeleton loaders.

### 3. Responsive Design

- The entire website must work correctly on mobile, tablet, and desktop screen sizes (grid collapses correctly, navbar + ticker stays usable, hero stacks, `btn-sm sm:btn-md`, `max-w-6xl` container, etc.).

---

# Requirement

- Add a 404 Page for any unknown/invalid route (e.g. `/category/invalid`, `/product/unknown` → friendly 404 + “হোম পেজে ফিরে যান”)
- Show a relevant toast notification for auth + protected-route redirects (use `react-hot-toast` / `data-rht-toaster`).

---
