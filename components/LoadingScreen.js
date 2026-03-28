"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Minimum display time so animation feels intentional
    const timer = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position:   "fixed",
        inset:       0,
        background:  "var(--black)",
        zIndex:      9999,
        display:     "flex",
        flexDirection: "column",
        alignItems:  "center",
        justifyContent: "center",
        gap:         20,
        transition:  "opacity 0.7s ease, visibility 0.7s ease",
        opacity:     done ? 0 : 1,
        visibility:  done ? "hidden" : "visible",
        pointerEvents: done ? "none" : "all",
      }}
    >
      {/* Spinner ring */}
      <div style={{ position: "relative", width: 64, height: 64 }}>
        <div style={{
          position:    "absolute",
          inset:        0,
          borderRadius: "50%",
          border:       "2px solid var(--border)",
          borderTop:    "2px solid var(--green)",
          animation:    "spin-slow 0.9s linear infinite",
        }} />
        <div style={{
          position:       "absolute",
          inset:           0,
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "center",
          fontSize:        26,
          animation:       "bounce-small 1s ease-in-out infinite",
        }}>
          🍽️
        </div>
      </div>

      {/* Label */}
      <p style={{
        fontFamily:    "var(--font-display)",
        fontSize:       12,
        letterSpacing:  "0.22em",
        color:          "var(--muted)",
        textTransform:  "uppercase",
      }}>
        Preparing your experience
      </p>

      {/* Progress bar */}
      <div style={{
        width:        160,
        height:        2,
        borderRadius:  2,
        background:   "var(--border)",
        overflow:     "hidden",
      }}>
        <div style={{
          height:          "100%",
          borderRadius:     2,
          background:      "var(--green)",
          animation:       "shimmer 1.6s ease-in-out forwards",
          backgroundImage: "linear-gradient(90deg, var(--green2), var(--green), var(--green2))",
          backgroundSize:  "400px 100%",
        }} />
      </div>
    </div>
  );
}
