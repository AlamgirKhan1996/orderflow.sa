"use client";

import { WA_LINK, RESTAURANT_NAME } from "@/utils/constants";

function ChatBubble({ msg, index }) {
  const isCustomer = msg.from === "customer";
  return (
    <div
      style={{
        alignSelf:    isCustomer ? "flex-end" : "flex-start",
        maxWidth:     "82%",
        background:   isCustomer ? "#005c4b" : "#202c33",
        color:        "#e9edef",
        borderRadius: isCustomer
          ? "12px 12px 4px 12px"
          : "12px 12px 12px 4px",
        padding:     "8px 12px",
        fontSize:     13,
        lineHeight:   1.55,
        animation:   `slideInMsg 0.4s ease ${index * 0.35}s both`,
        boxShadow:   "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      {msg.text}
      <div style={{
        fontSize:    10,
        color:       "rgba(255,255,255,0.4)",
        textAlign:   "right",
        marginTop:    3,
      }}>
        {msg.time} {isCustomer ? "✓✓" : ""}
      </div>
    </div>
  );
}

/**
 * PhoneMockup — renders a realistic WhatsApp-style phone UI.
 *
 * Props:
 *   messages  — array of { from: "customer"|"restaurant", text, time }
 *   showCTA   — if true, replaces input bar with an order CTA button
 */
export default function PhoneMockup({ messages = [], showCTA = false }) {
  return (
    <div style={{
      width:        280,
      background:  "#1a1a1a",
      borderRadius: "var(--radius-xl)",
      border:       "8px solid #2a2a2a",
      boxShadow:    "0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)",
      overflow:     "hidden",
      position:     "relative",
      userSelect:   "none",
    }}>

      {/* Status bar */}
      <div style={{
        background:  "#075E54",
        padding:     "10px 14px",
        display:     "flex",
        alignItems:  "center",
        gap:          10,
      }}>
        {/* Avatar */}
        <div style={{
          width:          38,
          height:         38,
          borderRadius:  "50%",
          background:    "rgba(255,255,255,0.15)",
          display:       "flex",
          alignItems:    "center",
          justifyContent: "center",
          fontSize:       18,
          flexShrink:     0,
        }}>🍽️</div>

        <div>
          <div style={{ fontWeight: 600, fontSize: 14, color: "#fff" }}>
            {RESTAURANT_NAME}
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>
            🟢 Online — tap to order
          </div>
        </div>

        {/* Video + phone icons */}
        <div style={{ marginLeft: "auto", display: "flex", gap: 12, opacity: 0.7 }}>
          <span style={{ fontSize: 15 }}>📹</span>
          <span style={{ fontSize: 15 }}>📞</span>
        </div>
      </div>

      {/* Chat area */}
      <div style={{
        background:      "#0b141a",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        minHeight:        280,
        padding:          14,
        display:         "flex",
        flexDirection:   "column",
        gap:              10,
        overflowY:       "auto",
      }}>

        {/* Date chip */}
        <div style={{
          alignSelf:     "center",
          background:    "rgba(17,27,33,0.8)",
          borderRadius:   12,
          padding:       "4px 12px",
          fontSize:       11,
          color:         "rgba(255,255,255,0.5)",
          marginBottom:   4,
        }}>
          Today
        </div>

        {messages.map((msg, i) => (
          <ChatBubble key={i} msg={msg} index={i} />
        ))}
      </div>

      {/* Input / CTA bar */}
      <div style={{
        background:  "#202c33",
        padding:     "10px 12px",
        display:     "flex",
        alignItems:  "center",
        gap:          8,
      }}>
        {showCTA ? (
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex:          1,
              background:   "var(--green)",
              color:        "#000",
              borderRadius: "var(--radius-pill)",
              padding:      "10px 16px",
              fontSize:      13,
              fontWeight:    700,
              textAlign:    "center",
              animation:    "pulse-green 2s ease-in-out infinite",
              display:      "flex",
              alignItems:   "center",
              justifyContent: "center",
              gap:            6,
            }}
          >
            <span>💬</span> Tap to Order via WhatsApp
          </a>
        ) : (
          <>
            <span style={{ fontSize: 19, opacity: 0.6 }}>😊</span>
            <div style={{
              flex:         1,
              background:  "#2a3942",
              borderRadius: "var(--radius-pill)",
              padding:     "8px 14px",
              fontSize:     12,
              color:       "#8696a0",
            }}>
              Type a message…
            </div>
            <div style={{
              width:          34,
              height:         34,
              borderRadius:  "50%",
              background:    "var(--green)",
              display:       "flex",
              alignItems:    "center",
              justifyContent: "center",
              fontSize:       15,
            }}>🎤</div>
          </>
        )}
      </div>
    </div>
  );
}
