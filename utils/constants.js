// ─── Site-wide constants ─────────────────────────────────────────────────────
// All values are driven by environment variables defined in .env.local

export const WA_NUMBER =
  process.env.NEXT_PUBLIC_WA_NUMBER || "966XXXXXXXXX";

export const WA_MESSAGE =
  process.env.NEXT_PUBLIC_WA_MESSAGE || "Hi%20I%20want%20to%20order";

export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export const RESTAURANT_NAME =
  process.env.NEXT_PUBLIC_RESTAURANT_NAME || "OrderFlow Restaurant";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@orderflow.com";

// ─── Design tokens (mirrors CSS variables) ───────────────────────────────────
export const COLORS = {
  black:      "#080808",
  surface:    "#111111",
  card:       "#181818",
  border:     "rgba(255,255,255,0.07)",
  green:      "#25D366",
  green2:     "#128C7E",
  greenGlow:  "rgba(37,211,102,0.18)",
  white:      "#ffffff",
  muted:      "#888888",
};

// ─── Food menu items (hero floating cards) ────────────────────────────────────
export const MENU_ITEMS = [
  { emoji: "🍔", name: "Smash Burger",      price: "SAR 45" },
  { emoji: "🍕", name: "Pepperoni Pizza",   price: "SAR 62" },
  { emoji: "🥗", name: "Caesar Salad",      price: "SAR 32" },
  { emoji: "🧋", name: "Boba Tea",          price: "SAR 22" },
  { emoji: "🍣", name: "Salmon Roll",       price: "SAR 78" },
  { emoji: "🍰", name: "Cheesecake Slice",  price: "SAR 28" },
];

// ─── Delivery steps ───────────────────────────────────────────────────────────
export const DELIVERY_STEPS = [
  { icon: "📋", title: "Order Received",   desc: "Instant WhatsApp notification" },
  { icon: "🍳", title: "Chef Prepares",    desc: "Kitchen gets the order immediately" },
  { icon: "📦", title: "Packed & Ready",   desc: "Quality checked, bag sealed" },
  { icon: "🚴", title: "Out for Delivery", desc: "Driver picks up within minutes" },
  { icon: "🔔", title: "At Your Door",     desc: "Customer is notified on arrival" },
  { icon: "😍", title: "Delivered!",       desc: "Hot food, happy customer" },
];

// ─── Customer reviews ─────────────────────────────────────────────────────────
export const REVIEWS = [
  {
    name:   "Layla M.",
    avatar: "👩",
    review: "Ordered my whole family dinner through WhatsApp in 2 minutes. The process is incredibly smooth!",
    rating: 5,
  },
  {
    name:   "Ahmed K.",
    avatar: "👨",
    review: "Got my order confirmed instantly. Food arrived hot and exactly as expected. Will order again!",
    rating: 5,
  },
  {
    name:   "Sara T.",
    avatar: "🧕",
    review: "Best ordering experience I've had. No apps to download, just a quick message and done.",
    rating: 5,
  },
];

// ─── Key metrics ──────────────────────────────────────────────────────────────
export const METRICS = [
  { value: "94%",  label: "Customer Satisfaction" },
  { value: "4.9★", label: "Average Rating" },
  { value: "68%",  label: "Repeat Order Rate" },
  { value: "2.3x", label: "Revenue Growth" },
];

export const HERO_STATS = [
  { value: "3x",     label: "More Orders" },
  { value: "98%",    label: "Delivery Rate" },
  { value: "< 2min", label: "Response Time" },
];

// ─── WhatsApp chat demo messages ──────────────────────────────────────────────
export const DEMO_MESSAGES = [
  { from: "customer",   text: "Hi! I want to order a Smash Burger 🍔",                              time: "12:42" },
  { from: "restaurant", text: "Welcome! 🎉 What size would you like? Small, Medium, or Large?",      time: "12:42" },
  { from: "customer",   text: "Large please! And a Boba Tea 🧋",                                    time: "12:43" },
  { from: "restaurant", text: "Perfect! Your order total is SAR 67. Please confirm your address ✅", time: "12:43" },
];

// ─── Nav links ────────────────────────────────────────────────────────────────
export const NAV_LINKS = ["How It Works", "Features", "Pricing"];

// ─── Footer links ─────────────────────────────────────────────────────────────
export const FOOTER_LINKS = [
  { title: "Product", links: ["Features", "Pricing", "Demo", "API"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Support", links: ["Help Center", "Contact", "Status", "Privacy"] },
];
