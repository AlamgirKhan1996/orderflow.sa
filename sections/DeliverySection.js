"use client";

import { useInView } from "@/utils/useInView";
import { DELIVERY_STEPS } from "@/utils/constants";
import SectionBadge from "@/components/SectionBadge";

function StepCard({ icon, title, desc, index, total, inView }) {
  const isEven = index % 2 === 0;
  return (
    <div style={{
      display:       "flex",
      flexDirection: "column",
      alignItems:    "center",
      textAlign:     "center",
      position:      "relative",
      opacity:        inView ? 1 : 0,
      transform:      inView ? "none" : "translateY(40px)",
      transition:    `opacity 0.6s ease ${index * 0.14}s, transform 0.6s ease ${index * 0.14}s`,
    }}>
      {/* Connector line (not on last item) */}
      {index < total - 1 && (
        <div style={{
          position:    "absolute",
          top:          44,
          left:        "calc(50% + 44px)",
          right:       "calc(-50% + 44px)",
          height:       2,
          background:  "var(--border)",
          zIndex:       0,
        }} className="hide-mobile" />
      )}

      {/* Icon circle */}
      <div style={{
        width:          88,
        height:         88,
        borderRadius:  "50%",
        background:     isEven
          ? "rgba(37,211,102,0.10)"
          : "var(--card)",
        border:         `2px solid ${isEven ? "rgba(37,211,102,0.28)" : "var(--border)"}`,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        fontSize:        38,
        marginBottom:    20,
        position:       "relative",
        zIndex:          1,
        animation:       inView
          ? `bounce-small ${2.2 + index * 0.25}s ease-in-out ${index * 0.18}s infinite`
          : "none",
        transition:      "transform 0.2s, box-shadow 0.2s",
        cursor:         "default",
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform  = "scale(1.1)";
          e.currentTarget.style.boxShadow  = isEven
            ? "0 0 24px rgba(37,211,102,0.3)"
            : "0 8px 24px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform  = "scale(1)";
          e.currentTarget.style.boxShadow  = "none";
        }}
      >
        {icon}

        {/* Step number */}
        <div style={{
          position:       "absolute",
          top:            -4,
          right:          -4,
          width:           22,
          height:          22,
          borderRadius:   "50%",
          background:      isEven ? "var(--green)" : "var(--surface)",
          border:         `1px solid ${isEven ? "var(--green)" : "var(--border)"}`,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          fontSize:        10,
          fontWeight:      700,
          color:           isEven ? "#000" : "var(--muted)",
        }}>
          {index + 1}
        </div>
      </div>

      <div style={{
        fontFamily: "var(--font-display)",
        fontWeight:  700,
        fontSize:    15,
        marginBottom: 8,
      }}>
        {title}
      </div>
      <div style={{
        color:     "var(--muted)",
        fontSize:   13,
        lineHeight: 1.6,
        maxWidth:   140,
        margin:    "0 auto",
      }}>
        {desc}
      </div>
    </div>
  );
}

export default function DeliverySection() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} style={{ padding: "130px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <SectionBadge
            label="Step 03 — The Journey"
            className={`reveal ${inView ? "visible" : ""}`}
          />

          <h2
            className={`reveal ${inView ? "visible" : ""} stagger-1`}
            style={{
              fontFamily:    "var(--font-display)",
              fontWeight:     800,
              fontSize:      "clamp(30px, 4vw, 52px)",
              letterSpacing: "-0.03em",
              marginBottom:   16,
            }}
          >
            From order to doorstep
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
            A seamless, fast process your customers will love — and keep coming back for.
          </p>
        </div>

        {/* ── Steps grid ── */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap:                  32,
          position:            "relative",
        }}>
          {DELIVERY_STEPS.map((step, i) => (
            <StepCard
              key={i}
              {...step}
              index={i}
              total={DELIVERY_STEPS.length}
              inView={inView}
            />
          ))}
        </div>

        {/* ── Progress bar ── */}
        <div style={{ marginTop: 56 }}>
          <div style={{
            height:       3,
            borderRadius: 3,
            background:  "var(--border)",
            position:    "relative",
            overflow:    "hidden",
          }}>
            <div style={{
              position:        "absolute",
              inset:            0,
              borderRadius:     3,
              background:      "linear-gradient(90deg, var(--green2), var(--green))",
              transform:        inView ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition:      "transform 2s ease 0.6s",
            }} />
          </div>

          <div style={{
            display:        "flex",
            justifyContent: "space-between",
            marginTop:       10,
            color:          "var(--muted)",
            fontSize:        12,
          }}>
            <span>Order placed 💬</span>
            <span style={{ color: "var(--green)", fontWeight: 600 }}>Avg. 28 minutes</span>
            <span>Delivered 🎉</span>
          </div>
        </div>

        {/* ── Bottom stat cards ── */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap:                  16,
          marginTop:            48,
        }}>
          {[
            { value: "28 min",  label: "Avg. Delivery Time",  icon: "⏱️" },
            { value: "99.2%",   label: "On-Time Rate",        icon: "✅" },
            { value: "0 cold",  label: "Cold Deliveries",     icon: "🔥" },
            { value: "24 / 7",  label: "Always Available",    icon: "🌙" },
          ].map(({ value, label, icon }, i) => (
            <div
              key={i}
              style={{
                background:   "var(--card)",
                border:       "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                padding:      "20px",
                textAlign:    "center",
                opacity:       inView ? 1 : 0,
                transform:     inView ? "none" : "translateY(20px)",
                transition:   `opacity 0.5s ease ${0.8 + i * 0.1}s, transform 0.5s ease ${0.8 + i * 0.1}s`,
              }}
            >
              <div style={{ fontSize: 26, marginBottom: 8 }}>{icon}</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight:  800,
                fontSize:    24,
                color:      "var(--green)",
              }}>
                {value}
              </div>
              <div style={{ color: "var(--muted)", fontSize: 12, marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
