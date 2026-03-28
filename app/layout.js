import "./globals.css";

export const metadata = {
  title: "OrderFlow — Get More Orders Automatically via WhatsApp",
  description:
    "Turn visitors into customers using a seamless WhatsApp ordering system. No apps, no friction — just more orders, more revenue.",
  keywords: [
    "WhatsApp ordering",
    "restaurant ordering system",
    "food delivery",
    "WhatsApp business",
    "online restaurant orders",
  ],
  openGraph: {
    title: "OrderFlow — Get More Orders Automatically",
    description: "Turn visitors into customers using WhatsApp.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍽️</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
