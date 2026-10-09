# 💪 B14-A7-Bazar Dor

---

# API's

## BASE_URL_1: https://api.api-store.workers.dev/api/bazardor

## BASE_URL_2: https://api.abcz.workers.dev/api/bazardor (alternative)

---

## 🐣 Basic Requirements (Must Do for Everyone)

- Your app must work on all screen sizes — mobile, tablet, and desktop
- Add a nice README.md file with your project name, description, technologies used, and features(minimum 5)

---

# 🔧 Main Requirements — 50 Marks

### 1. 🔝 Navbar

- Design the Navbar exactly like the Figma.
- **Right-side auth buttons**: `সাইন ইন` + `সাইন আপ`. When logged in, show profile / sign-out instead.

---

### 2. Product Details Page — Layout (`/product/[slug]`)

**Protected route — requires login.**

### 3. Category Page

- **Empty state** (when category has no items / invalid slug): 404-style message + CTA button **“হোম পেজে ফিরে যান”** (links back to `/`).

### 4. Authentication (`/signin`, `/signup`)

- **Sign In**: User Login: The user will show a Login page with a form , so that the user can Log in this application.
  - If the user Login successfully then navigate him to his Home page. If not, show him an error with toast / error message anywhere in the form.

- **Sign Up**: User Registration: Create a register page with a form , so that the user can register himself in this application.
  - If the user Register successfully then navigate him to his login page.
  - If not, show him an error with toast / error message anywhere in the form.

- Use **BetterAuth** (email/password + Google + GitHub), toast on success/error, skeleton loaders.
- Show relevant **toast notification** on login / signup / logout / validation error.
- 💡Don’t implement email verification or forget password method as it will inconvenience the examiner. If you want, you can add these after receiving the assignment result.

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

### C2. - Update Information Feature

- In My Profile route there will be an update button. On clicking it, Take user to another route
- Show user a form with an input field ( Name ), An Update Information button.

Follow this documentation: https://better-auth.com/docs/concepts/users-accounts#update-user

---
