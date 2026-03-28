"use client";

import { useInView } from "@/utils/useInView";
import SectionBadge from "@/components/SectionBadge";

const NOTIFICATIONS = [
  { icon: "🍔", label: "New Order #1042 — Smash Burger",    color: "#25D366", amount: null },
  { icon: "🍕", label: "New Order #1043 — Pepperoni Pizza", color: "#f59e0b", amount: null },
  { icon: "🧋", label: "New Order #1044 — Boba Tea × 2",   color: "#a78bfa", amount: null },
  { icon: "💳", label: "Payment Confirmed",                  color: "#34d399", amount: "SAR 129" },
];

const QUICK_STATS = [
  { icon: "📱", label: "Instant Alerts" },
  { icon: "🔔", label: "Sound Notification" },
  { icon: "📊", label: "Order Dashboard" },
];

function NotificationCard({ icon, label, color, amount, delay, inView }) {
  return (
    <div style={{
      display:       "flex",
      alignItems:    "center",
      gap:            14,
      background:    "var(--card)",
      border:        `1px solid ${color}22`,
      borderRadius:  "var(--radius-md)",
      padding:       "14px 18px",
      boxShadow:     `0 0 0 1px ${color}11`,
      opacity:        inView ? 1 : 0,
      transform:      inView ? "none" : "translateX(30px)",
      transition:    `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}>
      {/* Avatar */}
      <div style={{
        width:          46,
        height:         46,
        borderRadius:  "50%",
        background:    `${color}1a`,
        border:        `1px solid ${color}44`,
        display:       "flex",
        alignItems:    "center",
        justifyContent: "center",
        fontSize:       22,
        flexShrink:     0,
        position:      "relative",
      }}>
        {icon}
        {/* Online dot */}
        <div style={{
          position:     "absolute",
          top:           0,
          right:         0,
          width:         12,
          height:        12,
          borderRadius: "50%",
          background:   color,
          border:       "2px solid var(--card)",
        }} />
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontWeight: 600,
          fontSize:    14,
          color:      "#fff",
          overflow:   "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}>
          {label}
        </div>
        <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>Just now</div>
      </div>

      {/* Badge */}
      {amount ? (
        <div style={{ color: "#34d399", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{amount}</div>
      ) : (
        <div style={{
          background:    `${color}22`,
          color:          color,
          borderRadius:  "var(--radius-pill)",
          padding:       "3px 10px",
          fontSize:       11,
          fontWeight:     700,
          flexShrink:     0,
        }}>
          NEW
        </div>
      )}
    </div>
  );
}

export default function RestaurantSection() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      style={{
        padding:    "130px 32px",
        background: "linear-gradient(to bottom, var(--black), var(--surface), var(--black))",
      }}
    >
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
        {/* ── Copy ── */}
        <div style={{ flex: 1 }}>
          <SectionBadge
            label="Step 02 — Restaurant Notified"
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
            Receive orders<br />
            <span style={{ color: "var(--green)" }}>instantly</span>
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
            Your team gets a WhatsApp notification the moment an order comes in.
            No missed orders. No lost revenue. Ever.
          </p>

          {/* Feature chips */}
          <div
            className={`reveal ${inView ? "visible" : ""} stagger-3`}
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            {QUICK_STATS.map(({ icon, label }) => (
              <div
                key={label}
                style={{
                  background:   "var(--card)",
                  border:       "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding:      "12px 18px",
                  display:      "flex",
                  alignItems:   "center",
                  gap:           10,
                  transition:   "border-color 0.2s, background 0.2s",
                  cursor:       "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(37,211,102,0.3)";
                  e.currentTarget.style.background  = "rgba(37,211,102,0.05)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background  = "var(--card)";
                }}
              >
                <span style={{ fontSize: 20 }}>{icon}</span>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Notifications column ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          {NOTIFICATIONS.map((notif, i) => (
            <NotificationCard key={i} {...notif} delay={i * 0.18} inView={inView} />
          ))}

          {/* Revenue counter */}
          <div style={{
            marginTop:  8,
            background: "linear-gradient(135deg, rgba(37,211,102,0.12), rgba(37,211,102,0.04))",
            border:     "1px solid rgba(37,211,102,0.22)",
            borderRadius: "var(--radius-lg)",
            padding:    "24px 28px",
            opacity:     inView ? 1 : 0,
            transform:   inView ? "none" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.85s, transform 0.7s ease 0.85s",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ color: "var(--muted)", fontSize: 13, marginBottom: 6 }}>Today's Revenue</div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontWeight:  800,
                  fontSize:    42,
                  color:      "var(--green)",
                  lineHeight:  1,
                }}>
                  SAR 3,247
                </div>
                <div style={{ color: "#34d399", fontSize: 13, marginTop: 8, display: "flex", alignItems: "center", gap: 4 }}>
                  <span>↑</span> 24% from yesterday
                </div>
              </div>

              {/* Mini bar chart */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 48 }}>
                {[40, 65, 45, 80, 55, 90, 100].map((h, i) => (
                  <div key={i} style={{
                    width:        8,
                    height:      `${h}%`,
                    borderRadius: 3,
                    background:   i === 6 ? "var(--green)" : "rgba(37,211,102,0.25)",
                    transition:  `height 0.8s ease ${0.9 + i * 0.06}s`,
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
