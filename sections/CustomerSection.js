"use client";

import { useInView } from "@/utils/useInView";
import { REVIEWS, METRICS } from "@/utils/constants";
import SectionBadge from "@/components/SectionBadge";

function Star({ delay, inView }) {
  return (
    <span style={{
      fontSize:  30,
      display:  "inline-block",
      opacity:   inView ? 1 : 0,
      animation: inView ? `star-pop 0.5s ease ${delay}s both` : "none",
    }}>⭐</span>
  );
}

function ReviewCard({ name, avatar, review, rating, delay, inView }) {
  return (
    <div style={{
      background:    "var(--card)",
      border:        "1px solid var(--border)",
      borderRadius:  "var(--radius-lg)",
      padding:       "26px",
      opacity:        inView ? 1 : 0,
      transform:      inView ? "none" : "translateY(30px)",
      transition:    `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      position:      "relative",
      overflow:      "hidden",
      cursor:        "default",
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(37,211,102,0.25)";
        e.currentTarget.style.transform   = "translateY(-4px)";
        e.currentTarget.style.boxShadow   = "0 12px 40px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform   = "none";
        e.currentTarget.style.boxShadow   = "none";
      }}
      style={{
        background:    "var(--card)",
        border:        "1px solid var(--border)",
        borderRadius:  "var(--radius-lg)",
        padding:       "26px",
        opacity:        inView ? 1 : 0,
        transform:      inView ? "none" : "translateY(30px)",
        transition:    `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s, border-color 0.2s, box-shadow 0.2s`,
        position:      "relative",
        overflow:      "hidden",
        cursor:        "default",
      }}
    >
      {/* Glow corner */}
      <div style={{
        position:   "absolute",
        top:         0,
        right:       0,
        width:       80,
        height:      80,
        background: "radial-gradient(circle at top right, rgba(37,211,102,0.08), transparent)",
        pointerEvents: "none",
      }} />

      {/* Stars */}
      <div style={{ marginBottom: 14 }}>
        {"⭐".repeat(rating)}
      </div>

      <p style={{ color: "#d0d0d0", fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>
        "{review}"
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width:          40,
          height:         40,
          borderRadius:  "50%",
          background:    "linear-gradient(135deg, var(--green2), var(--green))",
          display:       "flex",
          alignItems:    "center",
          justifyContent: "center",
          fontSize:       20,
        }}>
          {avatar}
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{name}</div>
          <div style={{ color: "var(--muted)", fontSize: 12 }}>✅ Verified Customer</div>
        </div>
      </div>
    </div>
  );
}

export default function CustomerSection() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      style={{
        padding:    "130px 32px",
        background: "linear-gradient(to bottom, var(--black), var(--surface), var(--black))",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionBadge
            label="Step 04 — Happy Customers"
            className={`reveal ${inView ? "visible" : ""}`}
          />

          {/* Animated stars */}
          <div style={{ marginBottom: 20 }}>
            {[0, 0.1, 0.2, 0.3, 0.4].map((d, i) => (
              <Star key={i} delay={d} inView={inView} />
            ))}
          </div>

          <h2
            className={`reveal ${inView ? "visible" : ""} stagger-1`}
            style={{
              fontFamily:    "var(--font-display)",
              fontWeight:     800,
              fontSize:      "clamp(30px, 4vw, 54px)",
              letterSpacing: "-0.03em",
              marginBottom:   16,
              lineHeight:     1.1,
            }}
          >
            Happy customers =<br />
            <span style={{ color: "var(--green)" }}>More revenue</span>
          </h2>

          <p
            className={`reveal ${inView ? "visible" : ""} stagger-2`}
            style={{
              color:    "var(--muted)",
              fontSize:  17,
              maxWidth:  460,
              margin:   "0 auto",
              lineHeight: 1.65,
            }}
          >
            When ordering is effortless, customers return. And they bring their friends.
          </p>
        </div>

        {/* ── Review cards ── */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap:                  20,
          marginBottom:         48,
        }}>
          {REVIEWS.map((r, i) => (
            <ReviewCard key={i} {...r} delay={i * 0.15} inView={inView} />
          ))}
        </div>

        {/* ── Metric tiles ── */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap:                  16,
        }}>
          {METRICS.map(({ value, label }, i) => (
            <div
              key={i}
              style={{
                background:   "var(--card)",
                border:       "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                padding:      "26px",
                textAlign:    "center",
                opacity:       inView ? 1 : 0,
                transform:     inView ? "none" : "translateY(20px)",
                transition:   `opacity 0.5s ease ${0.55 + i * 0.1}s, transform 0.5s ease ${0.55 + i * 0.1}s, border-color 0.2s`,
                cursor:       "default",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(37,211,102,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight:  800,
                fontSize:    34,
                color:      "var(--green)",
                lineHeight:  1,
              }}>
                {value}
              </div>
              <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 8 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
