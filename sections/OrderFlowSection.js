"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/utils/useInView";
import { DEMO_MESSAGES } from "@/utils/constants";
import PhoneMockup  from "@/components/PhoneMockup";
import SectionBadge from "@/components/SectionBadge";

const STEPS = [
  { icon: "💬", text: "WhatsApp opens instantly" },
  { icon: "⚡", text: "Pre-filled message ready to send" },
  { icon: "✅", text: "Order confirmed in seconds" },
];

export default function OrderFlowSection() {
  const [ref, inView] = useInView();
  const [step, setStep]   = useState(0);

  // Cycle through chat messages when in view
  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setStep((s) => (s >= DEMO_MESSAGES.length - 1 ? 0 : s + 1)), 1900);
    return () => clearInterval(t);
  }, [inView]);

  const visibleMessages = DEMO_MESSAGES.slice(0, step + 1);
  const showCTA = step === DEMO_MESSAGES.length - 1;

  return (
    <section
      ref={ref}
      style={{
        padding:   "130px 32px",
        position:  "relative",
        overflow:  "hidden",
      }}
    >
      {/* Background glow — right side */}
      <div style={{
        position:      "absolute",
        right:         -120,
        top:           "50%",
        transform:     "translateY(-50%)",
        width:          500,
        height:         500,
        borderRadius:  "50%",
        background:    "radial-gradient(circle, rgba(37,211,102,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div
        style={{
          maxWidth:   1200,
          margin:    "0 auto",
          display:   "flex",
          alignItems: "center",
          gap:        80,
        }}
        className="stack-mobile"
      >
        {/* ── Phone mockup ── */}
        <div
          className={`reveal ${inView ? "visible" : ""}`}
          style={{ display: "flex", justifyContent: "center", position: "relative", flexShrink: 0 }}
        >
          <PhoneMockup messages={visibleMessages} showCTA={showCTA} />

          {/* Glow beneath phone */}
          <div style={{
            position:      "absolute",
            bottom:        -24,
            left:          "50%",
            transform:     "translateX(-50%)",
            width:          200,
            height:         40,
            borderRadius:  "50%",
            background:    "radial-gradient(ellipse, rgba(37,211,102,0.22), transparent 70%)",
            filter:        "blur(12px)",
            pointerEvents: "none",
          }} />

          {/* Step indicators */}
          <div style={{
            position:  "absolute",
            bottom:    -56,
            left:      "50%",
            transform: "translateX(-50%)",
            display:   "flex",
            gap:        8,
          }}>
            {DEMO_MESSAGES.map((_, i) => (
              <div key={i} style={{
                width:        i === step ? 20 : 6,
                height:       6,
                borderRadius: "var(--radius-pill)",
                background:   i === step ? "var(--green)" : "var(--border)",
                transition:   "all 0.3s ease",
              }} />
            ))}
          </div>
        </div>

        {/* ── Copy ── */}
        <div style={{ flex: 1 }}>
          <SectionBadge
            label="Step 01 — Customer Orders"
            className={`reveal ${inView ? "visible" : ""}`}
          />

          <h2
            className={`reveal ${inView ? "visible" : ""} stagger-1`}
            style={{
              fontFamily:    "var(--font-display)",
              fontWeight:     800,
              fontSize:      "clamp(30px, 4vw, 52px)",
              lineHeight:     1.1,
              letterSpacing: "-0.03em",
              marginBottom:   20,
            }}
          >
            One tap to place<br />an order
          </h2>

          <p
            className={`reveal ${inView ? "visible" : ""} stagger-2`}
            style={{
              color:        "var(--muted)",
              fontSize:      17,
              lineHeight:    1.75,
              marginBottom:  40,
              maxWidth:      420,
            }}
          >
            Customers tap a button and chat in WhatsApp — the app they already use every day.
            No downloads, no accounts, no friction. Just food.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {STEPS.map(({ icon, text }, i) => (
              <div
                key={i}
                className={`reveal ${inView ? "visible" : ""} stagger-${i + 3}`}
                style={{ display: "flex", alignItems: "center", gap: 14 }}
              >
                <div style={{
                  width:          42,
                  height:         42,
                  borderRadius:  "var(--radius-sm)",
                  background:    "rgba(37,211,102,0.10)",
                  border:        "1px solid rgba(37,211,102,0.22)",
                  display:       "flex",
                  alignItems:    "center",
                  justifyContent: "center",
                  fontSize:       20,
                  flexShrink:     0,
                }}>
                  {icon}
                </div>
                <span style={{ fontSize: 15, color: "#d0d0d0" }}>{text}</span>
              </div>
            ))}
          </div>

          {/* Live indicator */}
          <div
            className={`reveal ${inView ? "visible" : ""} stagger-6`}
            style={{
              display:       "inline-flex",
              alignItems:    "center",
              gap:            10,
              marginTop:      36,
              background:    "var(--card)",
              border:        "1px solid var(--border)",
              borderRadius:  "var(--radius-md)",
              padding:       "12px 18px",
            }}
          >
            <div style={{ position: "relative" }}>
              <div style={{
                width:        10,
                height:       10,
                borderRadius: "50%",
                background:  "var(--green)",
              }} />
              <div style={{
                position:  "absolute",
                inset:      0,
                borderRadius: "50%",
                background: "var(--green)",
                animation: "ping 1.2s ease-in-out infinite",
              }} />
            </div>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>
              Demo is <strong style={{ color: "#fff" }}>live</strong> — watch the chat update automatically
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
