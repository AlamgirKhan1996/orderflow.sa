"use client";

import { useState, useEffect, useRef } from "react";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&family=Cabinet+Grotesk:wght@400;500;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --black:#060805;--surface:#0C0F09;--card:#131810;--card2:#192010;
  --border:rgba(255,255,255,.08);--border2:rgba(255,255,255,.14);
  --green:#25D366;--green2:#128C7E;
  --gold:#D4A843;--gold2:#F0C97A;
  --orange:#F97316;--orange2:#FED7AA;
  --red:#EF4444;--amber:#F59E0B;
  --white:#FDFFF8;--muted:rgba(255,255,255,.5);--muted2:rgba(255,255,255,.78);
  --far:'Tajawal',sans-serif;
  --fen:'Cabinet Grotesk',sans-serif;
  --header-h: 104px;
}
html{scroll-behavior:smooth}
body{
  background:var(--black);color:var(--white);
  -webkit-font-smoothing:antialiased;overflow-x:hidden;
}
::-webkit-scrollbar{width:3px}
::-webkit-scrollbar-track{background:var(--black)}
::-webkit-scrollbar-thumb{background:var(--green2);border-radius:3px}

@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes ping{0%{transform:scale(1);opacity:1}100%{transform:scale(2.4);opacity:0}}
@keyframes glow{0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.45)}50%{box-shadow:0 0 0 18px rgba(37,211,102,0)}}
@keyframes gradShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}

.reveal{opacity:0;transform:translateY(20px);transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1)}
.reveal.in{opacity:1;transform:none}
.d1{transition-delay:.07s!important}.d2{transition-delay:.14s!important}
.d3{transition-delay:.21s!important}.d4{transition-delay:.28s!important}

/* ─ Buttons ─ */
.btn-main{
  display:inline-flex;align-items:center;justify-content:center;gap:10px;
  background:var(--green);color:#000;border:none;border-radius:14px;
  padding:18px 36px;font-weight:900;font-size:17px;cursor:pointer;
  transition:transform .2s,box-shadow .2s;
  animation:glow 2.5s ease-in-out infinite;
  text-decoration:none;white-space:nowrap;
}
.btn-main:hover{transform:scale(1.05);box-shadow:0 12px 48px rgba(37,211,102,.45)}
.btn-out{
  display:inline-flex;align-items:center;gap:8px;background:transparent;
  color:var(--white);border:1px solid var(--border2);border-radius:14px;
  padding:18px 24px;font-weight:700;font-size:15px;cursor:pointer;
  transition:all .2s;text-decoration:none;white-space:nowrap;
}
.btn-out:hover{border-color:var(--green);color:var(--green);background:rgba(37,211,102,.07)}

/* ─ Layout ─ */
.sec{padding:80px 24px}
.con{max-width:1040px;margin:0 auto}
.card{background:var(--card);border:1px solid var(--border);border-radius:20px;transition:border-color .25s,transform .25s,box-shadow .25s}
.card:hover{border-color:var(--border2);transform:translateY(-3px);box-shadow:0 16px 40px rgba(0,0,0,.4)}

/* ─ Calc input ─ */
.calc-inp{
  background:var(--card2);border:2px solid var(--border2);border-radius:12px;
  padding:14px 18px;color:var(--white);font-size:22px;font-weight:800;
  width:100%;outline:none;transition:border-color .2s;text-align:center;
}
.calc-inp:focus{border-color:var(--green)}

/* ─ Nav link ─ */
.nl{background:none;border:none;color:var(--muted);font-size:14px;font-weight:600;padding:8px 14px;border-radius:8px;cursor:pointer;transition:color .2s}
.nl:hover{color:#fff}

/* ─ Lang toggle ─ */
.lt{
  background:rgba(212,168,67,.12);
  border:1.5px solid rgba(212,168,67,.4);
  border-radius:99px;padding:6px 16px;
  color:var(--gold2);font-size:13px;font-weight:800;
  cursor:pointer;transition:all .2s;letter-spacing:.04em;
}
.lt:hover{background:rgba(212,168,67,.25);color:#fff}

@media(max-width:768px){
  .sec{padding:60px 20px}
  .hm{display:none!important}
  :root{--header-h:90px}
}
`;

/* ── helpers ─────────────────────────────────────────────────── */
function useInView() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setV(true); o.disconnect(); }
    }, { threshold: 0.1 });
    o.observe(el); return () => o.disconnect();
  }, []);
  return [ref, v];
}

function useCountUp(end, trigger) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const s = Date.now(), dur = 1400;
    const tick = () => {
      const p = Math.min((Date.now() - s) / dur, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [trigger, end]);
  return n;
}

const WA_AR = "https://wa.me/966595632609?text=السلام%20عليكم%2C%20أريد%20الاستفسار%20عن%20عرض%20الإطلاق%20199%20ريال%20-%20المدينة%20المنورة";
const WA_EN = "https://wa.me/966595632609?text=Hello%2C%20I%20want%20the%20199%20SAR%20launch%20offer%20-%20Madinah";

/* ══════════════════════════════════════════════════════════
   STICKY HEADER WRAPPER — Banner + Navbar together
   ══════════════════════════════════════════════════════════ */
function StickyHeader({ lang, setLang, spots }) {
  const ar = lang === "ar";
  const f = ar ? "var(--far)" : "var(--fen)";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navLinks = ar
    ? [["المشكلة", "problem"], ["الحل", "solution"], ["كيف يعمل", "how"], ["العرض", "offer"]]
    : [["Problem", "problem"], ["Solution", "solution"], ["How it works", "how"], ["The Offer", "offer"]];

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
    }}>
      {/* ── Gold/Orange Launch Banner ── */}
      <div style={{
        background: "linear-gradient(90deg, #C4780A, #E8A020, #F0C040, #E8A020, #C4780A)",
        backgroundSize: "300%",
        animation: "gradShift 5s ease infinite",
        padding: "9px 20px",
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: 12, flexWrap: "wrap",
      }}>
        {/* Live dot */}
        <div style={{ position: "relative", width: 9, height: 9, flexShrink: 0 }}>
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#fff" }} />
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#fff", animation: "ping 1.4s ease-in-out infinite" }} />
        </div>

        <span style={{
          fontFamily: f, fontWeight: 900, fontSize: 14, color: "#000",
          textAlign: "center",
        }}>
          {ar
            ? `🔥 عرض الإطلاق: نظام طلبات كامل في 24 ساعة — فقط 199 ريال (متبقي ${spots} مطاعم فقط!)`
            : `🔥 Launch Offer: Full ordering system in 24 hours — only SAR 199 (${spots} spots left!)`}
        </span>

        <a href={ar ? WA_AR : WA_EN}
          target="_blank" rel="noopener noreferrer"
          style={{
            background: "#000", color: "#F0C040",
            borderRadius: 99, padding: "5px 16px",
            fontSize: 12, fontWeight: 900,
            textDecoration: "none", flexShrink: 0,
            fontFamily: f, letterSpacing: ".03em",
            transition: "transform .15s",
            whiteSpace: "nowrap",
          }}>
          {ar ? "احجز الآن ←" : "Claim now →"}
        </a>
      </div>

      {/* ── Navbar ── */}
      <nav style={{
        padding: "0 24px", height: 62,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(6,8,5,.97)" : "rgba(6,8,5,.85)",
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid var(--border)",
        direction: ar ? "rtl" : "ltr",
        transition: "background .3s",
      }}>

        {/* Logo */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", flexShrink: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "var(--green)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: f, fontWeight: 900, fontSize: 15, color: "#000",
            flexShrink: 0,
          }}>OF</div>
          <div>
            <div style={{ fontFamily: f, fontWeight: 900, fontSize: 18, letterSpacing: ar ? 0 : "-.02em", lineHeight: 1.1 }}>
              OrderFlow
            </div>
            <div style={{ fontFamily: f, fontSize: 10, color: "var(--gold2)", fontWeight: 700, lineHeight: 1 }}>
              {ar ? "المدينة المنورة 🕌" : "Madinah 🕌"}
            </div>
          </div>
        </div>

        {/* Nav links — desktop */}
        <div className="hm" style={{ display: "flex", gap: 2 }}>
          {navLinks.map(([label, id]) => (
            <button key={id} className="nl" style={{ fontFamily: f }}
              onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </div>

        {/* Right: lang toggle + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          {/* Language toggle — always visible */}
          <button
            className="lt"
            style={{ fontFamily: f }}
            onClick={() => setLang(ar ? "en" : "ar")}
          >
            {ar ? "🇬🇧 EN" : "🇸🇦 عربي"}
          </button>

          {/* CTA — desktop only */}
          <a href={ar ? WA_AR : WA_EN}
            target="_blank" rel="noopener noreferrer"
            className="hm"
            style={{
              display: "flex", alignItems: "center", gap: 7,
              background: "var(--green)", color: "#000",
              borderRadius: 10, padding: "8px 18px",
              fontFamily: f, fontWeight: 900, fontSize: 13,
              textDecoration: "none", whiteSpace: "nowrap",
            }}>
            💬 {ar ? "199 ريال – ابدأ" : "SAR 199 – Start"}
          </a>
        </div>
      </nav>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════ */
function Hero({ lang, spots }) {
  const ar = lang === "ar";
  const f = ar ? "var(--far)" : "var(--fen)";
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 250);
    return () => clearTimeout(t);
  }, []);

  const a = (d = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "none" : "translateY(24px)",
    transition: `opacity .7s cubic-bezier(.22,1,.36,1) ${d}s, transform .7s cubic-bezier(.22,1,.36,1) ${d}s`,
  });

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
      padding: "0 24px 60px",
      paddingTop: "var(--header-h)",
      direction: ar ? "rtl" : "ltr",
    }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 60%, rgba(37,211,102,.08) 0%, transparent 65%), var(--black)",
      }} />
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(37,211,102,.04) 1px,transparent 1px), linear-gradient(90deg,rgba(37,211,102,.04) 1px,transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse at center, black 20%, transparent 76%)",
      }} />

      <div className="con" style={{ width: "100%", textAlign: "center", position: "relative" }}>

        {/* Scarcity pill */}
        <div style={{
          ...a(0),
          display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
          background: "rgba(249,115,22,.12)", border: "1px solid rgba(249,115,22,.35)",
          borderRadius: 99, padding: "8px 20px",
        }}>
          <span>🔥</span>
          <span style={{ fontFamily: f, fontSize: 13, fontWeight: 800, color: "#FB923C" }}>
            {ar
              ? `عرض الإطلاق — متبقي ${spots} مطاعم فقط بسعر 199 ريال`
              : `Launch Offer — Only ${spots} spots left at SAR 199`}
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          ...a(.1),
          fontFamily: f, fontWeight: 900,
          fontSize: ar ? "clamp(34px,6.5vw,72px)" : "clamp(30px,5.5vw,64px)",
          lineHeight: 1.06,
          letterSpacing: ar ? "-.01em" : "-.04em",
          marginBottom: 18,
        }}>
          {ar ? (
            <>
              وقّف دفع العمولة لطلبات.<br />
              <span style={{
                background: "linear-gradient(135deg, var(--green), #34d399, var(--green))",
                backgroundSize: "200%", animation: "gradShift 4s ease infinite",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                خلّ طلباتك تجيك مباشرة.
              </span>
            </>
          ) : (
            <>
              Stop losing profit to Talabat.<br />
              <span style={{
                background: "linear-gradient(135deg, var(--green), #34d399, var(--green))",
                backgroundSize: "200%", animation: "gradShift 4s ease infinite",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Get orders directly to WhatsApp.
              </span>
            </>
          )}
        </h1>

        {/* Sub */}
        <p style={{
          ...a(.2),
          fontFamily: f, fontSize: ar ? 18 : 17, color: "var(--muted2)",
          lineHeight: 1.75, maxWidth: 580, margin: "0 auto 14px",
        }}>
          {ar
            ? "نظام طلبات واتساب كامل لمطعمك في المدينة المنورة — بدون عمولة، بدون تطبيق، بدون تعقيد. العميل يطلب وأنت تستقبل مباشرة. في 24 ساعة."
            : "A complete WhatsApp ordering system for your Madinah restaurant — no commission, no app, no complexity. Customer orders, you receive directly. In 24 hours."}
        </p>

        {/* Madinah badge */}
        <div style={{
          ...a(.25),
          display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 34,
          background: "rgba(212,168,67,.1)", border: "1px solid rgba(212,168,67,.28)",
          borderRadius: 99, padding: "7px 18px",
        }}>
          <span style={{ fontSize: 18 }}>🕌</span>
          <span style={{ fontFamily: f, fontSize: 13, fontWeight: 700, color: "var(--gold2)" }}>
            {ar ? "متخصص في المدينة المنورة" : "Specializing in Madinah Al-Munawwarah"}
          </span>
        </div>

        {/* CTA buttons */}
        <div style={{ ...a(.3), display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 44 }}>
          <a href={ar ? WA_AR : WA_EN} target="_blank" rel="noopener noreferrer"
            className="btn-main" style={{ fontFamily: f, fontSize: 17 }}>
            <span style={{ fontSize: 20 }}>💬</span>
            {ar ? "احجز مكانك — 199 ريال فقط" : "Claim your spot — SAR 199 only"}
          </a>
          <button className="btn-out" style={{ fontFamily: f }}
            onClick={() => document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })}>
            {ar ? "كيف يعمل؟" : "How it works?"} →
          </button>
        </div>

        {/* Trust pills */}
        <div style={{ ...a(.4), display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          {(ar
            ? ["✅ بدون عمولة أبداً", "⚡ جاهز في 24 ساعة", "💬 واتساب فقط", "🆓 استشارة مجانية", "🛡️ ضمان الرضا"]
            : ["✅ Zero commission", "⚡ Ready in 24 hours", "💬 WhatsApp only", "🆓 Free consult", "🛡️ Satisfaction guarantee"]
          ).map(t => (
            <span key={t} style={{ fontFamily: f, fontSize: 13, color: "var(--muted2)", fontWeight: 500 }}>{t}</span>
          ))}
        </div>

        {/* Platform pills */}
        <div style={{ ...a(.5), display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div style={{ fontFamily: f, fontSize: 11, color: "var(--muted)", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>
            {ar ? "بديل مباشر عن" : "Direct alternative to"}
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { ar: "طلبات", en: "Talabat", pct: "25–30%" },
              { ar: "هنقرستيشن", en: "HungerStation", pct: "20–28%" },
              { ar: "جاهز", en: "Jahez", pct: "15–25%" },
            ].map(p => (
              <div key={p.en} style={{ background: "rgba(239,68,68,.06)", border: "1px solid rgba(239,68,68,.18)", borderRadius: 12, padding: "8px 16px", textAlign: "center" }}>
                <div style={{ fontFamily: f, fontSize: 12, fontWeight: 700 }}>{ar ? p.ar : p.en}</div>
                <div style={{ fontFamily: f, fontSize: 11, color: "var(--red)", fontWeight: 800 }}>
                  {ar ? `عمولة ${p.pct}` : `${p.pct} fee`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   COMMISSION CALCULATOR
   ══════════════════════════════════════════════════════════ */
function Calc({ lang }) {
  const [ref, inView] = useInView();
  const ar = lang === "ar";
  const f = ar ? "var(--far)" : "var(--fen)";
  const [daily, setDaily] = useState(1500);
  const [rate, setRate] = useState(25);
  const monthly = Math.round(daily * 30 * (rate / 100));
  const count = useCountUp(monthly, inView);

  return (
    <section id="problem" ref={ref} className="sec" style={{ paddingTop: 0, direction: ar ? "rtl" : "ltr" }}>
      <div className="con">
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div className={`reveal ${inView ? "in" : ""}`}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: f, background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.25)", color: "var(--red)", borderRadius: 99, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", marginBottom: 14 }}>
              💸 {ar ? "المشكلة الحقيقية" : "The Real Problem"}
            </span>
          </div>
          <h2 className={`reveal ${inView ? "in" : ""} d1`} style={{ fontFamily: f, fontWeight: 900, fontSize: "clamp(24px,4vw,48px)", letterSpacing: ar ? "-.01em" : "-.03em", lineHeight: 1.1, marginBottom: 12 }}>
            {ar
              ? <span>طلبات وهنقر تأخذ أرباحك. <span style={{ color: "var(--red)" }}>حسّب كم تخسر.</span></span>
              : <span>Talabat takes your profit. <span style={{ color: "var(--red)" }}>Calculate your loss.</span></span>}
          </h2>
          <p className={`reveal ${inView ? "in" : ""} d2`} style={{ fontFamily: f, fontSize: 16, color: "var(--muted2)", maxWidth: 460, margin: "0 auto", lineHeight: 1.75 }}>
            {ar ? "اكتب مبيعاتك اليومية وشوف كم تخسره كل شهر للمنصات." : "Enter your daily sales and see how much you give away every month."}
          </p>
        </div>

        <div className={`reveal ${inView ? "in" : ""} d2`} style={{ background: "linear-gradient(135deg,rgba(239,68,68,.08),rgba(239,68,68,.03))", border: "1px solid rgba(239,68,68,.22)", borderRadius: 24, padding: "36px 28px", maxWidth: 620, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
            <div>
              <div style={{ fontFamily: f, fontSize: 13, color: "var(--muted)", fontWeight: 700, marginBottom: 8 }}>
                {ar ? "مبيعاتك اليومية (ريال)" : "Daily sales (SAR)"}
              </div>
              <input type="number" className="calc-inp" style={{ fontFamily: f }}
                value={daily} onChange={e => setDaily(Math.max(0, Number(e.target.value)))} />
            </div>
            <div>
              <div style={{ fontFamily: f, fontSize: 13, color: "var(--muted)", fontWeight: 700, marginBottom: 8 }}>
                {ar ? "نسبة العمولة (%)" : "Commission rate (%)"}
              </div>
              <input type="number" className="calc-inp" style={{ fontFamily: f }}
                value={rate} min={0} max={50}
                onChange={e => setRate(Math.min(50, Math.max(0, Number(e.target.value))))} />
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: f, fontSize: 12, color: "var(--red)", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>
              {ar ? "أنت تخسر كل شهر" : "You lose every month"}
            </div>
            <div style={{ fontFamily: f, fontWeight: 900, fontSize: "clamp(48px,9vw,82px)", color: "var(--red)", lineHeight: 1 }}>
              SAR {count.toLocaleString()}
            </div>
            <div style={{ fontFamily: f, fontSize: 14, color: "var(--muted)", marginTop: 8, marginBottom: 24 }}>
              {ar ? `وسنوياً تخسر SAR ${(monthly * 12).toLocaleString()}!` : `Yearly: SAR ${(monthly * 12).toLocaleString()} lost forever!`}
            </div>
            <div style={{ background: "rgba(37,211,102,.1)", border: "1px solid rgba(37,211,102,.28)", borderRadius: 16, padding: "16px 20px" }}>
              <div style={{ fontFamily: f, fontSize: 13, color: "var(--green)", fontWeight: 800, marginBottom: 4 }}>
                {ar ? "مع OrderFlow — تخلص من هذه الخسارة نهائياً" : "With OrderFlow — eliminate this loss permanently"}
              </div>
              <div style={{ fontFamily: f, fontWeight: 900, fontSize: 26, color: "var(--green)" }}>
                SAR {monthly.toLocaleString()} {ar ? "تبقى في جيبك كل شهر" : "stays in your pocket every month"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   SOLUTION
   ══════════════════════════════════════════════════════════ */
function Solution({ lang }) {
  const [ref, inView] = useInView();
  const ar = lang === "ar";
  const f = ar ? "var(--far)" : "var(--fen)";
  return (
    <section id="solution" ref={ref} className="sec" style={{ paddingTop: 0, direction: ar ? "rtl" : "ltr" }}>
      <div className="con">
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div className={`reveal ${inView ? "in" : ""}`}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: f, background: "rgba(37,211,102,.1)", border: "1px solid rgba(37,211,102,.22)", color: "var(--green)", borderRadius: 99, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", marginBottom: 14 }}>
              ✅ {ar ? "الحل" : "The Solution"}
            </span>
          </div>
          <h2 className={`reveal ${inView ? "in" : ""} d1`} style={{ fontFamily: f, fontWeight: 900, fontSize: "clamp(24px,4vw,48px)", letterSpacing: ar ? "-.01em" : "-.03em", lineHeight: 1.1, marginBottom: 12 }}>
            {ar
              ? <span>طلباتك تجيك مباشرة.<br /><span style={{ color: "var(--green)" }}>100% أرباحك لك.</span></span>
              : <span>Orders come directly to you.<br /><span style={{ color: "var(--green)" }}>100% of profit is yours.</span></span>}
          </h2>
        </div>

        <div className={`reveal ${inView ? "in" : ""} d2`} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 700, margin: "0 auto 32px" }}>
          <div style={{ background: "rgba(239,68,68,.06)", border: "1px solid rgba(239,68,68,.18)", borderRadius: 20, padding: "22px 20px" }}>
            <div style={{ fontFamily: f, fontSize: 11, fontWeight: 800, color: "var(--red)", marginBottom: 14, letterSpacing: ".1em" }}>✕ {ar ? "الوضع الحالي" : "WITHOUT ORDERFLOW"}</div>
            {(ar
              ? ["عميل → طلبات → عمولة 25% → أنت", "دفع متأخر أسابيع", "ما تعرف من هم عملاءك", "المنصة تتحكم في ظهورك"]
              : ["Customer → Talabat → 25% → You", "Payment delayed weeks", "You don't know your customers", "Platform controls your visibility"]
            ).map(t => (
              <div key={t} style={{ display: "flex", gap: 8, marginBottom: 9 }}>
                <span style={{ color: "var(--red)", flexShrink: 0 }}>✕</span>
                <span style={{ fontFamily: f, fontSize: 13, color: "var(--muted2)", lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(37,211,102,.08)", border: "1px solid rgba(37,211,102,.28)", borderRadius: 20, padding: "22px 20px" }}>
            <div style={{ fontFamily: f, fontSize: 11, fontWeight: 800, color: "var(--green)", marginBottom: 14, letterSpacing: ".1em" }}>✓ {ar ? "مع OrderFlow" : "WITH ORDERFLOW"}</div>
            {(ar
              ? ["عميل → موقعك → واتساب → أنت 💯", "الدفع مباشرة — تحويل أو STC Pay", "بيانات عملاءك كلها عندك", "أنت المتحكم الوحيد"]
              : ["Customer → Your site → WhatsApp → You 💯", "Direct payment — transfer or STC Pay", "All customer data is yours", "You are in full control"]
            ).map(t => (
              <div key={t} style={{ display: "flex", gap: 8, marginBottom: 9 }}>
                <span style={{ color: "var(--green)", flexShrink: 0 }}>✓</span>
                <span style={{ fontFamily: f, fontSize: 13, color: "var(--muted2)", lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`reveal ${inView ? "in" : ""} d3`} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, maxWidth: 540, margin: "0 auto" }}>
          {(ar
            ? [["0%", "عمولة تدفعها"], ["24 ساعة", "وتبدأ تستقبل طلبات"], ["100%", "أرباحك تبقى معك"]]
            : [["0%", "Commission paid"], ["24 hrs", "To first order"], ["100%", "Profit is yours"]]
          ).map(([v, l]) => (
            <div key={l} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: "20px 14px", textAlign: "center" }}>
              <div style={{ fontFamily: f, fontWeight: 900, fontSize: 28, color: "var(--green)", lineHeight: 1 }}>{v}</div>
              <div style={{ fontFamily: f, fontSize: 12, color: "var(--muted)", marginTop: 6, lineHeight: 1.4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   HOW IT WORKS
   ══════════════════════════════════════════════════════════ */
function HowItWorks({ lang }) {
  const [ref, inView] = useInView();
  const ar = lang === "ar";
  const f = ar ? "var(--far)" : "var(--fen)";
  const steps = ar
    ? [
        { n: "١", icon: "💬", title: "تواصل معنا على واتساب", desc: "أرسل اسم مطعمك وقائمة الأصناف والأسعار. خلال ساعتين نبدأ العمل." },
        { n: "٢", icon: "⚡", title: "نبني موقعك في ساعات", desc: "عندنا قوالب جاهزة — نضيف اسمك وأصنافك وأسعارك. ساعات لا أيام." },
        { n: "٣", icon: "🔗", title: "ترسل الرابط لعملاءك", desc: "رابطك الخاص جاهز — تنشره إنستقرام أو تبعثه واتساب أو تطبعه على علبك." },
        { n: "٤", icon: "🛎️", title: "الطلبات تجيك على واتساب", desc: "العميل يطلب وتصلك الطلبية كاملة مباشرة. ترد وتبدأ التحضير. بس." },
      ]
    : [
        { n: "1", icon: "💬", title: "Contact us on WhatsApp", desc: "Send your restaurant name, menu, and prices. We start within 2 hours." },
        { n: "2", icon: "⚡", title: "We build your page in hours", desc: "Ready templates — we add your name, items, prices. Hours, not days." },
        { n: "3", icon: "🔗", title: "Share your link", desc: "Your own link ready — post on Instagram, share on WhatsApp, print on packaging." },
        { n: "4", icon: "🛎️", title: "Orders arrive on WhatsApp", desc: "Customer orders, you receive it directly. Reply, confirm, start preparing." },
      ];
  return (
    <section id="how" ref={ref} className="sec" style={{ paddingTop: 0, background: "linear-gradient(to bottom,var(--black),var(--surface),var(--black))", direction: ar ? "rtl" : "ltr" }}>
      <div className="con">
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div className={`reveal ${inView ? "in" : ""}`}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: f, background: "rgba(37,211,102,.1)", border: "1px solid rgba(37,211,102,.22)", color: "var(--green)", borderRadius: 99, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", marginBottom: 14 }}>
              ⚡ {ar ? "كيف يعمل" : "How it works"}
            </span>
          </div>
          <h2 className={`reveal ${inView ? "in" : ""} d1`} style={{ fontFamily: f, fontWeight: 900, fontSize: "clamp(22px,4vw,44px)", letterSpacing: ar ? "-.01em" : "-.03em", marginBottom: 12 }}>
            {ar ? "من الاتفاق للطلبة الأولى — في 24 ساعة." : "From agreement to first order — in 24 hours."}
          </h2>
          <p className={`reveal ${inView ? "in" : ""} d2`} style={{ fontFamily: f, fontSize: 15, color: "var(--muted2)", maxWidth: 420, margin: "0 auto" }}>
            {ar ? "ما في تقنية تتعلمها. كل شيء على واتساب." : "No technology to learn. Everything on WhatsApp."}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14, maxWidth: 840, margin: "0 auto 24px" }}>
          {steps.map(({ n, icon, title, desc }, i) => (
            <div key={n} className={`reveal card ${inView ? "in" : ""} d${i + 1}`}
              style={{ padding: "26px 20px", position: "relative", overflow: "hidden", transitionDelay: `${i * 0.07}s` }}>
              <div style={{ position: "absolute", top: 8, right: ar ? "auto" : 14, left: ar ? 14 : "auto", fontFamily: f, fontWeight: 900, fontSize: 54, color: "rgba(37,211,102,.06)", lineHeight: 1, pointerEvents: "none" }}>{n}</div>
              <div style={{ width: 48, height: 48, borderRadius: 13, marginBottom: 14, background: "rgba(37,211,102,.1)", border: "1px solid rgba(37,211,102,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, animation: inView ? `float ${3 + i * .4}s ease-in-out ${i * .15}s infinite` : "none" }}>{icon}</div>
              <div style={{ fontFamily: f, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{title}</div>
              <p style={{ fontFamily: f, fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div className={`reveal ${inView ? "in" : ""} d5`} style={{ textAlign: "center", background: "var(--card)", border: "1px solid rgba(37,211,102,.18)", borderRadius: 16, padding: "16px 24px", maxWidth: 480, margin: "0 auto" }}>
          <p style={{ fontFamily: f, fontSize: 15, color: "var(--muted2)", lineHeight: 1.7 }}>
            {ar ? "🙌 ما تحتاج أي خبرة تقنية. بعث المنيو على واتساب — وفي اليوم التالي نظامك شغّال." : "🙌 Zero technical knowledge needed. Send the menu, next day your system is live."}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   MADINAH SECTION
   ══════════════════════════════════════════════════════════ */
function MedinahSection({ lang }) {
  const [ref, inView] = useInView();
  const ar = lang === "ar";
  const f = ar ? "var(--far)" : "var(--fen)";
  return (
    <section ref={ref} className="sec" style={{ paddingTop: 0, direction: ar ? "rtl" : "ltr" }}>
      <div className="con">
        <div className={`reveal ${inView ? "in" : ""}`} style={{ background: "linear-gradient(135deg,rgba(212,168,67,.1),rgba(212,168,67,.03))", border: "1.5px solid rgba(212,168,67,.28)", borderRadius: 24, padding: "32px 28px", display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ fontSize: 52, flexShrink: 0 }}>🕌</div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ fontFamily: f, fontWeight: 900, fontSize: 22, color: "var(--gold2)", marginBottom: 12 }}>
              {ar ? "فرصة المدينة المنورة الذهبية" : "Madinah's Golden Opportunity"}
            </div>
            <p style={{ fontFamily: f, fontSize: 15, color: "var(--muted2)", lineHeight: 1.8, marginBottom: 16 }}>
              {ar
                ? "المدينة المنورة تستقبل ملايين الزوار والمعتمرين كل سنة — وكلهم يستخدمون واتساب بدون استثناء. معتمر من باكستان، من تركيا، من إندونيسيا — الكل يفهم رسالة واتساب. هذا الجمهور الضخم يبحث عن مطاعم كل يوم — هل مطعمك جاهز يستقبلهم؟"
                : "Madinah receives millions of pilgrims and Umrah visitors every year — and they all use WhatsApp. A pilgrim from Pakistan, Turkey, Indonesia — everyone understands a WhatsApp message. This massive audience searches for restaurants every day — is your restaurant ready to receive them?"}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {(ar
                ? [
                    { icon: "🌍", text: "ملايين الزوار يبحثون عن مطاعم يومياً" },
                    { icon: "📱", text: "واتساب هو التطبيق الوحيد الذي يفهمه الجميع" },
                    { icon: "💰", text: "الطلب مرتفع — رمضان والحج والعمرة طوال السنة" },
                    { icon: "🏆", text: "منافسة رقمية أقل من أي مدينة أخرى" },
                  ]
                : [
                    { icon: "🌍", text: "Millions searching for restaurants daily" },
                    { icon: "📱", text: "WhatsApp is the only app everyone understands" },
                    { icon: "💰", text: "High demand — Ramadan, Hajj & Umrah year-round" },
                    { icon: "🏆", text: "Less digital competition than any other city" },
                  ]
              ).map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontFamily: f, fontSize: 13, color: "var(--muted2)", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   OFFER
   ══════════════════════════════════════════════════════════ */
function Offer({ lang, spots }) {
  const [ref, inView] = useInView();
  const ar = lang === "ar";
  const f = ar ? "var(--far)" : "var(--fen)";
  const items = ar
    ? ["موقع منيو احترافي بإسم مطعمك", "زر طلب واتساب مباشر", "إعداد واتساب بيزنس كامل", "ردود تلقائية للعملاء", "QR Code جاهز للطباعة", "تسليم خلال 24 ساعة", "دعم شخصي 7 أيام"]
    : ["Professional menu page with your name", "Direct WhatsApp order button", "Full WhatsApp Business setup", "Automated customer replies", "QR Code ready to print", "Delivered within 24 hours", "7-day personal support"];
  return (
    <section id="offer" ref={ref} className="sec" style={{ paddingTop: 0, background: "linear-gradient(to bottom,var(--black),var(--surface),var(--black))", direction: ar ? "rtl" : "ltr" }}>
      <div className="con">
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div className={`reveal ${inView ? "in" : ""}`}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: f, background: "rgba(249,115,22,.1)", border: "1px solid rgba(249,115,22,.3)", color: "#FB923C", borderRadius: 99, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", marginBottom: 14 }}>
              🔥 {ar ? "عرض الإطلاق الحصري" : "Exclusive Launch Offer"}
            </span>
          </div>
          <h2 className={`reveal ${inView ? "in" : ""} d1`} style={{ fontFamily: f, fontWeight: 900, fontSize: "clamp(24px,4vw,48px)", letterSpacing: ar ? "-.01em" : "-.03em", lineHeight: 1.1, marginBottom: 12 }}>
            {ar ? "ابدأ بـ 199 ريال فقط." : "Start for just SAR 199."}
          </h2>
          <p className={`reveal ${inView ? "in" : ""} d2`} style={{ fontFamily: f, fontSize: 15, color: "var(--muted2)", maxWidth: 440, margin: "0 auto", lineHeight: 1.75 }}>
            {ar
              ? `أول ${spots} مطاعم في المدينة المنورة يحصلون على النظام الكامل بسعر الإطلاق. بعدها يرجع السعر الأصلي 1,500 ريال.`
              : `First ${spots} restaurants in Madinah get the complete system at launch price. After that it returns to SAR 1,500.`}
          </p>
        </div>

        <div className={`reveal ${inView ? "in" : ""} d2`} style={{ maxWidth: 480, margin: "0 auto", background: "linear-gradient(160deg,rgba(37,211,102,.12),var(--card))", border: "2px solid rgba(37,211,102,.4)", borderRadius: 28, padding: "36px 28px", position: "relative", overflow: "hidden", boxShadow: "0 0 70px rgba(37,211,102,.1)" }}>

          {/* Spots remaining */}
          <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#F97316,#FBBF24)", color: "#000", borderRadius: "0 0 14px 14px", padding: "5px 22px", fontFamily: f, fontSize: 12, fontWeight: 900, whiteSpace: "nowrap" }}>
            🔥 {ar ? `متبقي ${spots} مطاعم فقط في المدينة` : `Only ${spots} spots left in Madinah`}
          </div>

          <div style={{ textAlign: "center", marginBottom: 24, marginTop: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontFamily: f, fontSize: 20, color: "var(--muted)", textDecoration: "line-through", fontWeight: 700 }}>SAR 1,500</span>
              <span style={{ background: "var(--red)", color: "#fff", borderRadius: 99, padding: "2px 10px", fontSize: 11, fontWeight: 800 }}>
                {ar ? "خصم 87%" : "-87%"}
              </span>
            </div>
            <div style={{ fontFamily: f, fontWeight: 900, fontSize: 76, color: "var(--green)", lineHeight: 1 }}>199</div>
            <div style={{ fontFamily: f, fontSize: 17, fontWeight: 700, color: "var(--muted2)", marginTop: 2 }}>
              {ar ? "ريال سعودي — مرة واحدة فقط" : "SAR — one time only"}
            </div>
            <div style={{ fontFamily: f, fontSize: 13, color: "var(--muted)", marginTop: 6 }}>
              {ar ? "لا رسوم شهرية. لا عمولة. لا أي رسوم خفية." : "No monthly fees. No commission. No hidden fees."}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 20 }}>
            {items.map(item => (
              <div key={item} style={{ display: "flex", gap: 9 }}>
                <span style={{ color: "var(--green)", flexShrink: 0, fontSize: 14 }}>✓</span>
                <span style={{ fontFamily: f, fontSize: 14, color: "var(--muted2)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(37,211,102,.06)", border: "1px solid rgba(37,211,102,.18)", borderRadius: 12, padding: "12px 14px", marginBottom: 20 }}>
            <p style={{ fontFamily: f, fontSize: 13, color: "var(--muted2)", lineHeight: 1.6 }}>
              {ar ? "💳 الدفع: تحويل بنكي مباشر أو STC Pay" : "💳 Payment: Direct bank transfer or STC Pay"}
            </p>
          </div>

          <a href={ar ? WA_AR : WA_EN} target="_blank" rel="noopener noreferrer"
            className="btn-main" style={{ fontFamily: f, width: "100%", fontSize: 17, padding: "20px" }}>
            <span style={{ fontSize: 22 }}>💬</span>
            {ar ? "احجز مكانك — 199 ريال" : "Claim your spot — SAR 199"}
          </a>

          <p style={{ fontFamily: f, textAlign: "center", fontSize: 12, color: "var(--muted)", marginTop: 12 }}>
            {ar ? "استشارة مجانية أولاً — لا تدفع إلا بعد ما تشوف وترضى" : "Free consultation first — don't pay until you see and approve"}
          </p>

          <div style={{ marginTop: 20, borderTop: "1px solid var(--border)", paddingTop: 16 }}>
            <div style={{ fontFamily: f, fontSize: 12, fontWeight: 800, color: "var(--muted)", marginBottom: 10, letterSpacing: ".08em", textTransform: "uppercase" }}>
              {ar ? "ماذا يحدث بعد التواصل؟" : "What happens next?"}
            </div>
            {(ar
              ? ["ترد عليك في أقل من ساعة", "تبعث لنا: اسم المطعم، المنيو، الشعار", "في 24 ساعة — موقعك حي وتبدأ تستقبل طلبات"]
              : ["We reply in less than 1 hour", "You send: restaurant name, menu, logo", "In 24 hours — your site is live and you receive orders"]
            ).map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 9 }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(37,211,102,.15)", color: "var(--green)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                <span style={{ fontFamily: f, fontSize: 13, color: "var(--muted2)", lineHeight: 1.5 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`reveal ${inView ? "in" : ""} d3`} style={{ textAlign: "center", marginTop: 16, fontFamily: f, fontSize: 14, color: "var(--muted)" }}>
          {ar ? "📌 بعد اكتمال المقاعد الخمسة — السعر يرجع لـ SAR 1,500 بدون نقاش." : "📌 After 5 spots filled — price returns to SAR 1,500. No exceptions."}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   TRUST + GUARANTEE
   ══════════════════════════════════════════════════════════ */
function Trust({ lang }) {
  const [ref, inView] = useInView();
  const ar = lang === "ar";
  const f = ar ? "var(--far)" : "var(--fen)";
  return (
    <section ref={ref} className="sec" style={{ paddingTop: 0, direction: ar ? "rtl" : "ltr" }}>
      <div className="con">
        <div className={`reveal ${inView ? "in" : ""}`} style={{ background: "linear-gradient(135deg,rgba(37,211,102,.1),rgba(37,211,102,.03))", border: "1.5px solid rgba(37,211,102,.28)", borderRadius: 24, padding: "28px 24px", display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap", marginBottom: 20 }}>
          <div style={{ fontSize: 46 }}>🛡️</div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontFamily: f, fontWeight: 900, fontSize: 20, color: "var(--green)", marginBottom: 8 }}>
              {ar ? "ضمان الرضا الكامل" : "Full Satisfaction Guarantee"}
            </div>
            <p style={{ fontFamily: f, fontSize: 14, color: "var(--muted2)", lineHeight: 1.8 }}>
              {ar
                ? "إذا سلمنا النظام وما كنت راضياً — نرجع لك كامل الـ 199 ريال. بدون نقاش. نحن واثقون من عملنا."
                : "If we deliver the system and you're not satisfied — we refund your full SAR 199. No questions asked. We're that confident."}
            </p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12 }}>
          {(ar
            ? [
                { icon: "⚡", title: "24 ساعة بالفعل", desc: "قوالب جاهزة — التغيير يأخذ ساعات لا أيام.", color: "#D4A843" },
                { icon: "💬", title: "تتكلم معي شخصياً", desc: "مو بوتات. مو وسطاء. أنا شخصياً أتابع مشروعك.", color: "#25D366" },
                { icon: "🕌", title: "موجود في المدينة المنورة", desc: "أفهم السوق المحلي ومتطلبات المطاعم هنا.", color: "#D4A843" },
                { icon: "🔒", title: "بياناتك ملكك 100%", desc: "كل طلباتك وعملاءك ملكك — مو ملك أي منصة.", color: "#7c3aed" },
              ]
            : [
                { icon: "⚡", title: "Really 24 hours", desc: "Ready templates — changes take hours not days.", color: "#D4A843" },
                { icon: "💬", title: "Talk to me personally", desc: "No bots. No middlemen. I personally manage your project.", color: "#25D366" },
                { icon: "🕌", title: "Based in Madinah", desc: "I understand the local market and restaurant needs here.", color: "#D4A843" },
                { icon: "🔒", title: "Your data 100% yours", desc: "All orders and customers belong to you — not any platform.", color: "#7c3aed" },
              ]
          ).map(({ icon, title, desc, color }, i) => (
            <div key={title} className={`reveal card ${inView ? "in" : ""} d${i + 1}`} style={{ padding: "18px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, flexShrink: 0, background: `${color}12`, border: `1px solid ${color}28`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{icon}</div>
              <div>
                <div style={{ fontFamily: f, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{title}</div>
                <p style={{ fontFamily: f, fontSize: 12, color: "var(--muted)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   FINAL CTA
   ══════════════════════════════════════════════════════════ */
function FinalCTA({ lang, spots }) {
  const [ref, inView] = useInView();
  const ar = lang === "ar";
  const f = ar ? "var(--far)" : "var(--fen)";
  return (
    <section ref={ref} className="sec" style={{ paddingTop: 0, position: "relative", overflow: "hidden", direction: ar ? "rtl" : "ltr" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(37,211,102,.08),transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(37,211,102,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(37,211,102,.04) 1px,transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(ellipse at center,black 20%,transparent 75%)" }} />
      <div className="con" style={{ textAlign: "center", position: "relative" }}>
        <div className={`reveal ${inView ? "in" : ""}`} style={{ fontSize: 52, marginBottom: 20 }}>🔥</div>
        <h2 className={`reveal ${inView ? "in" : ""} d1`} style={{ fontFamily: f, fontWeight: 900, fontSize: "clamp(26px,5vw,58px)", letterSpacing: ar ? "-.01em" : "-.04em", lineHeight: 1.1, marginBottom: 18 }}>
          {ar ? (
            <>
              متبقي <span style={{ color: "var(--amber)" }}>{spots} مقاعد</span> بسعر 199 ريال.<br />
              بعدها <span style={{ color: "var(--red)" }}>1,500 ريال.</span>
            </>
          ) : (
            <>
              Only <span style={{ color: "var(--amber)" }}>{spots} spots</span> at SAR 199.<br />
              Then <span style={{ color: "var(--red)" }}>SAR 1,500.</span>
            </>
          )}
        </h2>
        <p className={`reveal ${inView ? "in" : ""} d2`} style={{ fontFamily: f, fontSize: 17, color: "var(--muted2)", maxWidth: 460, margin: "0 auto 34px", lineHeight: 1.75 }}>
          {ar
            ? "راسلنا على واتساب الآن. نريك الديمو مجاناً. وفي 24 ساعة نظامك شغّال."
            : "Message us on WhatsApp now. Free demo. In 24 hours your system is live."}
        </p>
        <div className={`reveal ${inView ? "in" : ""} d3`} style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
          <a href={ar ? WA_AR : WA_EN} target="_blank" rel="noopener noreferrer"
            className="btn-main" style={{ fontFamily: f, fontSize: 18, padding: "20px 44px" }}>
            <span style={{ fontSize: 22 }}>💬</span>
            {ar ? "احجز مكانك — 199 ريال" : "Claim your spot — SAR 199"}
          </a>
        </div>
        <div className={`reveal ${inView ? "in" : ""} d4`} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {(ar
            ? ["✅ استشارة مجانية أولاً", "✅ لا تدفع إلا بعد الموافقة", "✅ ضمان استرداد 199 ريال"]
            : ["✅ Free consultation first", "✅ Don't pay until you approve", "✅ Full SAR 199 refund guarantee"]
          ).map(t => (
            <span key={t} style={{ fontFamily: f, fontSize: 14, color: "var(--muted2)" }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════════════════ */
function Footer({ lang }) {
  const ar = lang === "ar";
  const f = ar ? "var(--far)" : "var(--fen)";
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--surface)", padding: "26px 24px", direction: ar ? "rtl" : "ltr" }}>
      <div className="con" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "var(--green)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: f, fontWeight: 900, fontSize: 12, color: "#000" }}>OF</div>
          <div>
            <div style={{ fontFamily: f, fontWeight: 900, fontSize: 16 }}>OrderFlow</div>
            <div style={{ fontFamily: f, fontSize: 10, color: "var(--muted)" }}>
              {ar ? "المدينة المنورة — بدون عمولة" : "Madinah — Zero commission"}
            </div>
          </div>
        </div>
        <div style={{ fontFamily: f, fontSize: 12, color: "var(--muted)" }}>© 2025 OrderFlow</div>
        <a href={ar ? WA_AR : WA_EN} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(37,211,102,.1)", border: "1px solid rgba(37,211,102,.25)", color: "var(--green)", borderRadius: 10, padding: "8px 16px", fontFamily: f, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
          💬 {ar ? "واتساب" : "WhatsApp"}
        </a>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════════
   ROOT — single fixed header wrapper solves everything
   ══════════════════════════════════════════════════════════ */
export function App() {
  const [lang, setLang] = useState("ar");
  const [spots] = useState(5);

  useEffect(() => {
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <>
      <style>{css}</style>

      {/* ── ONE sticky wrapper for banner + nav ── */}
      <StickyHeader lang={lang} setLang={setLang} spots={spots} />

      <main style={{ paddingTop: "var(--header-h)" }}>
        <Hero lang={lang} spots={spots} />
        <Calc lang={lang} />
        <Solution lang={lang} />
        <HowItWorks lang={lang} />
        <MedinahSection lang={lang} />
        <Offer lang={lang} spots={spots} />
        <Trust lang={lang} />
        <FinalCTA lang={lang} spots={spots} />
      </main>

      <Footer lang={lang} />
    </>
  );
}

export default function Home() {
  return <App />;
}
