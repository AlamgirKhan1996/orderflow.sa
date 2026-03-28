"use client";

import { WA_LINK, CONTACT_EMAIL, FOOTER_LINKS } from "@/utils/constants";

export default function Footer() {
  return (
    <footer style={{
      borderTop:  "1px solid var(--border)",
      padding:    "56px 32px 32px",
      background: "var(--surface)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── Top row ── */}
        <div style={{
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "flex-start",
          flexWrap:       "wrap",
          gap:             40,
          marginBottom:    48,
        }}>

          {/* Brand */}
          <div style={{ maxWidth: 260 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{
                width:          36,
                height:         36,
                borderRadius:  "50%",
                background:    "var(--green)",
                display:       "flex",
                alignItems:    "center",
                justifyContent: "center",
                fontSize:       18,
              }}>🍽️</div>
              <span style={{
                fontFamily:    "var(--font-display)",
                fontWeight:     700,
                fontSize:       20,
                letterSpacing: "-0.03em",
              }}>
                OrderFlow
              </span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>
              Turning WhatsApp into your restaurant's most powerful sales channel. Simple, instant, powerful.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {["𝕏", "in", "📘"].map((icon, i) => (
                <div key={i} style={{
                  width:          34,
                  height:         34,
                  borderRadius:   8,
                  background:    "var(--card)",
                  border:        "1px solid var(--border)",
                  display:       "flex",
                  alignItems:    "center",
                  justifyContent: "center",
                  fontSize:       14,
                  cursor:        "pointer",
                  transition:    "border-color 0.2s, background 0.2s",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(37,211,102,0.4)";
                    e.currentTarget.style.background  = "rgba(37,211,102,0.08)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background  = "var(--card)";
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            {FOOTER_LINKS.map(({ title, links }) => (
              <div key={title}>
                <div style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:     700,
                  fontSize:       12,
                  marginBottom:   16,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color:         "var(--muted)",
                }}>
                  {title}
                </div>
                {links.map((link) => (
                  <div key={link} style={{ marginBottom: 11 }}>
                    <a
                      href="#"
                      style={{ color: "#999", fontSize: 14, transition: "color 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "#999"; }}
                    >
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Newsletter strip ── */}
        <div style={{
          background:    "var(--card)",
          border:        "1px solid var(--border)",
          borderRadius:  "var(--radius-lg)",
          padding:       "28px 32px",
          display:       "flex",
          alignItems:    "center",
          justifyContent: "space-between",
          gap:            24,
          flexWrap:      "wrap",
          marginBottom:   40,
        }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, marginBottom: 4 }}>
              Get weekly growth tips for your restaurant 📬
            </div>
            <div style={{ color: "var(--muted)", fontSize: 14 }}>
              Join 1,200+ restaurant owners. No spam, ever.
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                background:   "var(--surface)",
                border:       "1px solid var(--border)",
                borderRadius: "var(--radius-pill)",
                padding:      "10px 18px",
                color:        "#fff",
                fontSize:      14,
                fontFamily:   "var(--font-body)",
                outline:      "none",
                minWidth:      200,
              }}
            />
            <button style={{
              background:   "var(--green)",
              color:        "#000",
              border:       "none",
              borderRadius: "var(--radius-pill)",
              padding:      "10px 22px",
              fontSize:      14,
              fontWeight:    600,
              fontFamily:   "var(--font-body)",
              cursor:       "pointer",
              transition:   "transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          borderTop:      "1px solid var(--border)",
          paddingTop:      24,
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "center",
          flexWrap:       "wrap",
          gap:             16,
        }}>
          <p style={{ color: "var(--muted)", fontSize: 13 }}>
            © 2025 OrderFlow. All rights reserved. · Built with 💚
          </p>

          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <a href={`mailto:${CONTACT_EMAIL}`} style={{
              color: "var(--muted)", fontSize: 13, transition: "color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; }}
            >
              {CONTACT_EMAIL}
            </a>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:       "inline-flex",
                alignItems:    "center",
                gap:            7,
                background:    "rgba(37,211,102,0.10)",
                border:        "1px solid rgba(37,211,102,0.25)",
                color:         "var(--green)",
                borderRadius:  "var(--radius-pill)",
                padding:       "8px 18px",
                fontSize:       13,
                fontWeight:     600,
                transition:    "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background  = "rgba(37,211,102,0.2)";
                e.currentTarget.style.transform   = "scale(1.04)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background  = "rgba(37,211,102,0.10)";
                e.currentTarget.style.transform   = "scale(1)";
              }}
            >
              <span style={{ fontSize: 16 }}>💬</span> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
