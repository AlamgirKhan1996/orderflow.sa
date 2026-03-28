"use client";

import { useState, useEffect } from "react";
import { WA_LINK, MENU_ITEMS, HERO_STATS } from "@/utils/constants";

// Floating food card
function FoodCard({ emoji, name, price, style }) {
  return (
    <div style={{
      background:    "rgba(24,24,24,0.85)",
      border:        "1px solid var(--border)",
      borderRadius:  "var(--radius-lg)",
      padding:       "16px 20px",
      display:       "flex",
      alignItems:    "center",
      gap:            14,
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      boxShadow:     "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
      whiteSpace:    "nowrap",
      ...style,
    }}>
      <span style={{ fontSize: 34 }}>{emoji}</span>
      <div>
        <div style={{
          fontFamily: "var(--font-display)",
          fontWeight:  700,
          fontSize:    14,
          lineHeight:  1.2,
        }}>{name}</div>
        <div style={{ color: "var(--green)", fontSize: 13, fontWeight: 600, marginTop: 2 }}>{price}</div>
      </div>
    </div>
  );
}

// Floating cards layout
function FloatingCards({ loaded }) {
  const floatStyles = [
    { animation: "floatA 4.0s ease-in-out infinite", animationDelay: "0s",    top: 20,  right: 20  },
    { animation: "floatB 5.0s ease-in-out infinite", animationDelay: "0.8s",  top: 170, left: 0    },
    { animation: "floatC 3.5s ease-in-out infinite", animationDelay: "1.4s",  bottom: 110, right: 40 },
    { animation: "floatA 4.5s ease-in-out infinite", animationDelay: "2.0s",  top: 320, right: 10  },
  ];

  return (
    <div style={{
      flex:       1,
      position:  "relative",
      height:     460,
      minWidth:   280,
      opacity:    loaded ? 1 : 0,
      transition: "opacity 1s ease 0.5s",
    }}>
      {MENU_ITEMS.slice(0, 4).map((item, i) => (
        <div key={i} style={{ position: "absolute", ...floatStyles[i] }}>
          <FoodCard {...item} />
        </div>
      ))}

      {/* Central glow orb */}
      <div style={{
        position:     "absolute",
        top:          "50%",
        left:         "50%",
        transform:    "translate(-50%, -50%)",
        width:         200,
        height:        200,
        borderRadius: "50%",
        background:   "radial-gradient(circle, rgba(37,211,102,0.14), transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Order count badge */}
      <div style={{
        position:   "absolute",
        bottom:      40,
        left:        10,
        background: "linear-gradient(135deg, rgba(37,211,102,0.15), rgba(37,211,102,0.05))",
        border:     "1px solid rgba(37,211,102,0.25)",
        borderRadius: "var(--radius-md)",
        padding:    "12px 18px",
        animation:  "floatB 6s ease-in-out 1s infinite",
      }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--green)" }}>+128</div>
        <div style={{ color: "var(--muted)", fontSize: 12, marginTop: 2 }}>orders today</div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 900); return () => clearTimeout(t); }, []);

  const anim = (delay) => ({
    opacity:    loaded ? 1 : 0,
    transform:  loaded ? "none" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section style={{
      minHeight:  "100vh",
      display:    "flex",
      alignItems: "center",
      position:   "relative",
      overflow:   "hidden",
      padding:    "120px 32px 80px",
    }}>
      {/* Background glow */}
      <div style={{
        position:      "absolute",
        top:           "20%",
        left:          "50%",
        transform:     "translateX(-50%)",
        width:          700,
        height:         700,
        borderRadius:  "50%",
        background:    "radial-gradient(circle, rgba(37,211,102,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Grid */}
      <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div style={{
        maxWidth:   1200,
        margin:    "0 auto",
        width:     "100%",
        display:   "flex",
        alignItems: "center",
        gap:        64,
      }} className="stack-mobile">

        {/* ── Left: copy ── */}
        <div style={{ flex: 1 }}>

          {/* Badge */}
          <div style={{
            display:       "inline-flex",
            alignItems:    "center",
            gap:            8,
            background:    "rgba(37,211,102,0.09)",
            border:        "1px solid rgba(37,211,102,0.22)",
            borderRadius:  "var(--radius-pill)",
            padding:       "6px 18px",
            marginBottom:   28,
            ...anim(0.1),
          }}>
            <div style={{
              width:        8,
              height:       8,
              borderRadius: "50%",
              background:  "var(--green)",
              animation:   "ping 1.5s ease-in-out infinite",
            }} />
            <span style={{
              color:         "var(--green)",
              fontSize:       11,
              fontWeight:     600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}>
              WhatsApp Ordering System
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily:    "var(--font-display)",
            fontWeight:     800,
            fontSize:      "clamp(40px, 6vw, 80px)",
            lineHeight:     1.05,
            letterSpacing: "-0.04em",
            marginBottom:   24,
            ...anim(0.2),
          }}>
            Get More Orders<br />
            <span style={{
              background:              "linear-gradient(135deg, var(--green), #34d399, var(--green))",
              backgroundSize:         "200% 200%",
              animation:              "gradShift 4s ease infinite",
              WebkitBackgroundClip:   "text",
              WebkitTextFillColor:    "transparent",
              backgroundClip:         "text",
            }}>
              Automatically
            </span>
          </h1>

          {/* Subtext */}
          <p style={{
            color:         "var(--muted)",
            fontSize:      "clamp(16px, 2vw, 19px)",
            lineHeight:     1.7,
            maxWidth:       480,
            marginBottom:   40,
            ...anim(0.35),
          }}>
            Turn visitors into paying customers using a seamless WhatsApp ordering system.
            No apps. No friction. Just results — 24/7.
          </p>

          {/* CTAs */}
          <div style={{
            display:  "flex",
            gap:       14,
            flexWrap: "wrap",
            ...anim(0.5),
          }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:       "inline-flex",
                alignItems:    "center",
                gap:            10,
                background:    "var(--green)",
                color:         "#000",
                borderRadius:  "var(--radius-pill)",
                padding:       "16px 34px",
                fontFamily:    "var(--font-display)",
                fontWeight:     700,
                fontSize:       16,
                animation:     "pulse-green 2.5s ease-in-out infinite",
                transition:    "transform 0.2s",
                whiteSpace:    "nowrap",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
            >
              <span style={{ fontSize: 20 }}>💬</span> Order Now
            </a>

            <button style={{
              background:   "transparent",
              color:        "var(--white)",
              border:       "1px solid var(--border)",
              borderRadius: "var(--radius-pill)",
              padding:      "16px 28px",
              fontFamily:   "var(--font-body)",
              fontWeight:    500,
              fontSize:      15,
              cursor:       "pointer",
              transition:   "border-color 0.2s, background 0.2s",
              whiteSpace:   "nowrap",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.background  = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background  = "transparent";
              }}
            >
              ▶ Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display:     "flex",
            gap:          36,
            marginTop:    52,
            flexWrap:    "wrap",
            paddingTop:   32,
            borderTop:   "1px solid var(--border)",
            ...anim(0.65),
          }}>
            {HERO_STATS.map(({ value, label }) => (
              <div key={label}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontWeight:  800,
                  fontSize:    28,
                  color:      "var(--green)",
                  lineHeight:  1,
                }}>
                  {value}
                </div>
                <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 5 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: floating cards ── */}
        <FloatingCards loaded={loaded} />
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:       "absolute",
        bottom:          32,
        left:           "50%",
        transform:      "translateX(-50%)",
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        gap:             8,
        color:          "var(--muted)",
        fontSize:        12,
        letterSpacing:  "0.08em",
        opacity:        loaded ? 1 : 0,
        transition:     "opacity 1s ease 1.2s",
      }}>
        <span>SCROLL</span>
        <div style={{
          width:      1,
          height:     40,
          background: "linear-gradient(to bottom, var(--muted), transparent)",
          animation:  "bounce-small 1.5s ease-in-out infinite",
        }} />
      </div>
    </section>
  );
}
