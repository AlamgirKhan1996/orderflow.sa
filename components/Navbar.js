"use client";

import { useState, useEffect } from "react";
import { WA_LINK, NAV_LINKS } from "@/utils/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
      {/* ── Logo ── */}
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
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
          fontFamily:  "var(--font-display)",
          fontWeight:   700,
          fontSize:     18,
          letterSpacing: "-0.03em",
        }}>
          OrderFlow
        </span>
      </a>

      {/* ── Desktop links ── */}
      <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {NAV_LINKS.map((label) => (
          <button
            key={label}
            style={{
              background:    "none",
              border:         "none",
              color:         "var(--muted)",
              cursor:        "pointer",
              fontFamily:    "var(--font-body)",
              fontSize:       14,
              fontWeight:     500,
              padding:       "8px 14px",
              borderRadius:   8,
              transition:    "color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── CTA button ── */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background:    "var(--green)",
          color:         "#000",
          borderRadius:  "var(--radius-pill)",
          padding:       "9px 20px",
          fontFamily:    "var(--font-body)",
          fontWeight:     600,
          fontSize:       13,
          display:       "flex",
          alignItems:    "center",
          gap:            6,
          transition:    "transform 0.2s, box-shadow 0.2s",
          whiteSpace:    "nowrap",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform  = "scale(1.05)";
          e.currentTarget.style.boxShadow  = "0 4px 24px var(--green-glow)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform  = "scale(1)";
          e.currentTarget.style.boxShadow  = "none";
        }}
      >
        <span style={{ fontSize: 15 }}>💬</span>
        Order Now
      </a>
    </nav>
  );
}
