"use client";

import { useState, useEffect } from "react";
import { WA_LINK } from "@/utils/constants";

// Each link scrolls smoothly to a section id on the page
const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features",     href: "#features"     },
  { label: "Pricing",      href: "#pricing"      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Smooth scroll — offsets 80px so navbar never covers the section title
  function handleNavClick(e, href) {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position:      "fixed",
        top:            0,
        left:           0,
        right:          0,
        zIndex:         100,
        padding:       "0 32px",
        height:         68,
        display:       "flex",
        alignItems:    "center",
        justifyContent: "space-between",
        background:    scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom:  scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition:    "all 0.4s ease",
      }}
    >
      {/* Logo */}
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width:          34,
            height:         34,
            borderRadius:  "50%",
            background:    "var(--green)",
            display:       "flex",
            alignItems:    "center",
            justifyContent: "center",
            fontSize:       16,
            flexShrink:     0,
            transition:    "transform 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          🍽️
        </div>
        <span style={{
          fontFamily:    "var(--font-display)",
          fontWeight:     700,
          fontSize:       18,
          letterSpacing: "-0.03em",
        }}>
          OrderFlow
        </span>
      </a>

      {/* Desktop nav links — smooth scroll to page sections */}
      <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={(e) => handleNavClick(e, href)}
            style={{
              color:          "var(--muted)",
              fontFamily:     "var(--font-body)",
              fontSize:        14,
              fontWeight:      500,
              padding:        "8px 14px",
              borderRadius:    8,
              transition:     "color 0.2s",
              textDecoration: "none",
              cursor:         "pointer",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* CTA button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background:   "var(--green)",
          color:        "#000",
          borderRadius: "var(--radius-pill)",
          padding:      "9px 20px",
          fontFamily:   "var(--font-body)",
          fontWeight:    600,
          fontSize:      13,
          display:      "flex",
          alignItems:   "center",
          gap:           6,
          transition:   "transform 0.2s, box-shadow 0.2s",
          whiteSpace:   "nowrap",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 4px 24px var(--green-glow)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <span style={{ fontSize: 15 }}>💬</span>
        Order Now
      </a>
    </nav>
  );
}
