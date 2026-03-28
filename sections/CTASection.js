"use client";

import { useInView, useCountUp } from "@/utils/useInView";
import { WA_LINK } from "@/utils/constants";
import SectionBadge from "@/components/SectionBadge";

const GUARANTEES = [
  "✅ No setup fees",
  "✅ 7-day free trial",
  "✅ Cancel anytime",
  "✅ Full onboarding support",
];

const TRUST_ITEMS = [
  { icon: "🏪", value: "500+",   label: "Restaurants" },
  { icon: "📦", value: "50K+",   label: "Orders / month" },
  { icon: "⭐", value: "4.9",    label: "App rating" },
  { icon: "🌍", value: "12",     label: "Countries" },
];

export default function CTASection() {
  const [ref, inView] = useInView();
  const spotsLeft = useCountUp(47, inView, 2200);

  return (
    <section
      ref={ref}
      style={{
        padding:   "130px 32px",
        position:  "relative",
        overflow:  "hidden",
      }}
    >
      {/* Radial glow */}
      <div style={{
        position:      "absolute",
        inset:          0,
        background:    "radial-gradient(ellipse at center, rgba(37,211,102,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Grid */}
      <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative" }}>

        {/* Trust bar */}
        <div
          className={`reveal ${inView ? "visible" : ""}`}
          style={{
            display:        "flex",
            justifyContent: "center",
            gap:             32,
            marginBottom:    48,
            flexWrap:       "wrap",
          }}
        >
          {TRUST_ITEMS.map(({ icon, value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>{icon}</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight:  800,
                fontSize:    20,
                color:      "var(--green)",
              }}>
                {value}
              </div>
              <div style={{ color: "var(--muted)", fontSize: 12 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Urgency badge */}
        <div
          className={`reveal ${inView ? "visible" : ""} stagger-1`}
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            gap:             10,
            background:    "rgba(239,68,68,0.09)",
            border:        "1px solid rgba(239,68,68,0.28)",
            borderRadius:  "var(--radius-pill)",
            padding:       "7px 20px",
            marginBottom:   28,
          }}
        >
          <div style={{ position: "relative" }}>
            <div style={{
              width:        9,
              height:       9,
              borderRadius: "50%",
              background:  "#ef4444",
            }} />
            <div style={{
              position:     "absolute",
              inset:         0,
              borderRadius: "50%",
              background:   "#ef4444",
              animation:    "ping 1s ease-in-out infinite",
            }} />
          </div>
          <span style={{ color: "#ef4444", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Only {spotsLeft} spots remaining this month
          </span>
        </div>

        {/* Headline */}
        <h2
          className={`reveal ${inView ? "visible" : ""} stagger-2`}
          style={{
            fontFamily:    "var(--font-display)",
            fontWeight:     800,
            fontSize:      "clamp(34px, 5.5vw, 70px)",
            lineHeight:     1.05,
            letterSpacing: "-0.04em",
            marginBottom:   24,
          }}
        >
          Ready to grow your<br />
          <span style={{
            background:           "linear-gradient(135deg, var(--green), #34d399)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor:  "transparent",
            backgroundClip:       "text",
          }}>
            restaurant business?
          </span>
        </h2>

        <p
          className={`reveal ${inView ? "visible" : ""} stagger-3`}
          style={{
            color:        "var(--muted)",
            fontSize:      18,
            lineHeight:    1.75,
            maxWidth:      520,
            margin:       "0 auto 48px",
          }}
        >
          Join hundreds of restaurants already using OrderFlow to turn WhatsApp
          into their most powerful, always-on sales channel.
        </p>

        {/* Primary CTA */}
        <div
          className={`reveal ${inView ? "visible" : ""} stagger-4`}
          style={{ marginBottom: 20 }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:       "inline-flex",
              alignItems:    "center",
              gap:            12,
              background:    "var(--green)",
              color:         "#000",
              borderRadius:  "var(--radius-pill)",
              padding:       "20px 48px",
              fontFamily:    "var(--font-display)",
              fontWeight:     800,
              fontSize:       19,
              animation:     "pulse-green 2.5s ease-in-out infinite",
              transition:    "transform 0.2s, box-shadow 0.2s",
              whiteSpace:    "nowrap",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform  = "scale(1.06)";
              e.currentTarget.style.boxShadow  = "0 10px 50px rgba(37,211,102,0.4)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform  = "scale(1)";
              e.currentTarget.style.boxShadow  = "none";
            }}
          >
            <span style={{ fontSize: 24 }}>💬</span>
            Get Your System Now
          </a>
        </div>

        {/* Guarantees */}
        <div
          className={`reveal ${inView ? "visible" : ""} stagger-5`}
          style={{
            display:        "flex",
            justifyContent: "center",
            gap:             20,
            flexWrap:       "wrap",
          }}
        >
          {GUARANTEES.map((g) => (
            <span key={g} style={{ color: "var(--muted)", fontSize: 13 }}>{g}</span>
          ))}
        </div>

        {/* Bottom divider quote */}
        <div
          className={`reveal ${inView ? "visible" : ""} stagger-6`}
          style={{
            marginTop:     60,
            padding:       "28px 32px",
            background:   "var(--card)",
            border:        "1px solid var(--border)",
            borderRadius:  "var(--radius-lg)",
            textAlign:     "center",
          }}
        >
          <p style={{
            fontFamily:    "var(--font-display)",
            fontSize:       18,
            fontStyle:     "italic",
            color:         "#ccc",
            lineHeight:     1.6,
            marginBottom:   16,
          }}>
            "We went from 30 orders a day to over 120 — in the first week."
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <div style={{
              width:          36,
              height:         36,
              borderRadius:  "50%",
              background:    "linear-gradient(135deg, var(--green2), var(--green))",
              display:       "flex",
              alignItems:    "center",
              justifyContent: "center",
              fontSize:       18,
            }}>👨‍🍳</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Chef Mohammed Al-Rashid</div>
              <div style={{ color: "var(--muted)", fontSize: 12 }}>Owner, Al-Rashid Kitchen, Riyadh</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
