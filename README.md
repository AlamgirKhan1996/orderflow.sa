# 🍽️ OrderFlow — WhatsApp Restaurant Ordering Landing Page

A premium, dark-theme Next.js landing page that turns WhatsApp into your restaurant's most powerful sales channel.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Configure your WhatsApp number
Copy `.env.example` to `.env.local` and fill in your details:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_WA_NUMBER=966XXXXXXXXX        # Your WhatsApp number (no + or spaces)
NEXT_PUBLIC_WA_MESSAGE=Hi%20I%20want%20to%20order
NEXT_PUBLIC_RESTAURANT_NAME=My Restaurant
NEXT_PUBLIC_CONTACT_EMAIL=hello@myrestaurant.com
```

### 3. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
orderflow/
├── app/
│   ├── globals.css        ← All CSS variables, animations, utilities
│   ├── layout.js          ← Root layout + metadata (SEO)
│   └── page.js            ← Page assembly (imports all sections)
│
├── components/
│   ├── LoadingScreen.js   ← Animated splash screen
│   ├── Navbar.js          ← Sticky navbar with scroll effect
│   ├── PhoneMockup.js     ← WhatsApp-style phone UI component
│   ├── SectionBadge.js    ← Reusable green pill label
│   └── Footer.js          ← Footer with newsletter + WhatsApp CTA
│
├── sections/
│   ├── HeroSection.js     ← Headline, floating food cards, stats
│   ├── OrderFlowSection.js← Live chat demo with phone mockup
│   ├── RestaurantSection.js← Notification feed + revenue counter
│   ├── DeliverySection.js ← Animated step-by-step delivery flow
│   ├── CustomerSection.js ← Reviews, star animations, metrics
│   └── CTASection.js      ← Final CTA with urgency + testimonial
│
├── utils/
│   ├── constants.js       ← All site data, colors, menu items
│   └── useInView.js       ← Intersection Observer hooks
│
├── .env.local             ← Your private config (never commit this)
├── .env.example           ← Template to share with team
└── next.config.js
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| `--black` | `#080808` |
| `--surface` | `#111111` |
| `--card` | `#181818` |
| `--green` | `#25D366` (WhatsApp green) |
| `--green2` | `#128C7E` |
| `--muted` | `#888888` |
| `--font-display` | Syne (headings) |
| `--font-body` | Outfit (body) |

---

## ✏️ Customisation

### Change menu items
Edit `MENU_ITEMS` in `utils/constants.js`

### Change delivery steps
Edit `DELIVERY_STEPS` in `utils/constants.js`

### Change reviews
Edit `REVIEWS` in `utils/constants.js`

### Change WhatsApp chat demo
Edit `DEMO_MESSAGES` in `utils/constants.js`

### Change colors
Edit CSS variables at the top of `app/globals.css`

---

## 🏗️ Build for production

```bash
npm run build
npm start
```

---

## 📦 Deploy to Vercel

```bash
npx vercel
```

Set your environment variables in the Vercel dashboard under **Settings → Environment Variables**.

---

## 🔑 Environment Variables

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_WA_NUMBER` | WhatsApp number (no + or spaces) | `966501234567` |
| `NEXT_PUBLIC_WA_MESSAGE` | URL-encoded pre-filled message | `Hi%20I%20want%20to%20order` |
| `NEXT_PUBLIC_RESTAURANT_NAME` | Restaurant name shown in UI | `Al-Rashid Kitchen` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Footer contact email | `hello@restaurant.com` |

---

## 📄 License

MIT — free to use and modify for your business.
