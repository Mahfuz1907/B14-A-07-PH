# 💪 B14-A7-Bazar Dor

---

# API's

## BASE_URL_1: https://api.api-store.workers.dev/api/bazardor

## BASE_URL_2: https://api.abcz.workers.dev/api/bazardor (alternative)

---

# 🔧 Main Requirements — 50 Marks

### 1. Product Details Page — Layout (`/product/[slug]`)

**Protected route — requires login.**

### 2. Category Page

- **Empty state** (when category has no items / invalid slug): 404-style message + CTA button **“হোম পেজে ফিরে যান”** (links back to `/`).

### 3. Authentication (`/signin`, `/signup`)

- **Sign In**: User Login: The user will show a Login page with a form , so that the user can Log in this application.
  - If the user Login successfully then navigate him to his Home page. If not, show him an error with toast / error message anywhere in the form.

- **Sign Up**: User Registration: Create a register page with a form , so that the user can register himself in this application.
  - If the user Register successfully then navigate him to his login page.
  - If not, show him an error with toast / error message anywhere in the form.

- Use **BetterAuth** (email/password + Google + GitHub), toast on success/error, skeleton loaders.

### 5. Responsive Design

- The entire website must work correctly on mobile, tablet, and desktop screen sizes (grid collapses correctly, navbar + ticker stays usable, hero stacks, `btn-sm sm:btn-md`, `max-w-6xl` container, etc.).

---

# Requirement

- Add a 404 Page for any unknown/invalid route (e.g. `/category/invalid`, `/product/unknown` → friendly 404 + “হোম পেজে ফিরে যান”)
- Show a relevant toast notification for auth + protected-route redirects (use `react-hot-toast` / `data-rht-toaster`).
- Make sure reloading any page after deployment does not cause an error (dynamic `[slug]` routes must work on Vercel — no hard 404 on refresh)

---

# Challenge Requirements — 10 Marks

### C1. GitHub README

- Add a well-designed `README.md` that includes:
  - Project name (বাজার দর / BazarDor)
  - Short description
  - Technologies used
  - 5 key features of the project

---
