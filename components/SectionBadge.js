"use client";

/**
 * SectionBadge — small green pill label used above section headlines.
 * Props: label (string), className (optional string for reveal classes)
 */
export default function SectionBadge({ label, className = "" }) {
  return (
    <div
      className={className}
      style={{
        display:       "inline-block",
        background:    "rgba(37,211,102,0.10)",
        border:        "1px solid rgba(37,211,102,0.22)",
        borderRadius:  "var(--radius-pill)",
        padding:       "5px 16px",
        marginBottom:   20,
      }}
    >
      <span style={{
        color:         "var(--green)",
        fontSize:       11,
        fontWeight:     600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}>
        {label}
      </span>
    </div>
  );
}
