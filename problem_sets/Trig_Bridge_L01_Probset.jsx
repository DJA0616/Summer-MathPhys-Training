import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
// DESIGN SYSTEM (copied from Trig_Bridge_L01.jsx)
// ─────────────────────────────────────────────────────────────
const DS = {
  colors: {
    bg: "#0a0a0a", surface: "#111111", elevated: "#181818",
    border: "#222222", muted: "#2a2a2a", dim: "#555555",
    subtle: "#888888", body: "#c8c8c8", heading: "#efefef",
    accent: "#7eb8d4", accentAlt: "#a0d4b0", err: "#d47e8a",
    glow: "rgba(126,184,212,0.18)", glowStr: "rgba(126,184,212,0.5)",
  },
  font: {
    serif: "'EB Garamond', Georgia, serif",
    mono: "'JetBrains Mono', monospace",
  },
  radius: "4px",
};

const { colors: C, font: F } = DS;

const css = `
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=JetBrains+Mono:wght@300;400&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${C.bg}; color: ${C.body}; font-family: ${F.serif}; font-size: 16px; line-height: 1.7; -webkit-font-smoothing: antialiased; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${C.bg}; }
  ::-webkit-scrollbar-thumb { background: ${C.muted}; border-radius: 2px; }
  @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
  .fade { animation: fadeUp 0.4s ease forwards; }
  input[type=range] { -webkit-appearance: none; width: 100%; height: 2px; background: ${C.muted}; border-radius: 1px; outline: none; cursor: pointer; }
  input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 12px; height: 12px; border-radius: 50%; background: ${C.accent}; cursor: pointer; box-shadow: 0 0 6px ${C.glow}; }
  input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { opacity: 1; }
  input:focus { outline: none; }
  table { border-collapse: collapse; }
`;

// ─────────────────────────────────────────────────────────────
// LAYOUT PRIMITIVES (copied from Trig_Bridge_L01.jsx)
// ─────────────────────────────────────────────────────────────
const Geo = () => (
  <svg style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}>
    <defs>
      <radialGradient id="rg1" cx="85%" cy="5%" r="35%">
        <stop offset="0%" stopColor="#7eb8d4" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#7eb8d4" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="rg2" cx="5%" cy="95%" r="30%">
        <stop offset="0%" stopColor="#a0d4b0" stopOpacity="0.04" />
        <stop offset="100%" stopColor="#a0d4b0" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#rg1)" />
    <rect width="100%" height="100%" fill="url(#rg2)" />
    <g opacity="0.06" stroke="#7eb8d4" strokeWidth="0.6" fill="none">
      <polygon points="820,15 900,70 740,70" />
      <polygon points="900,70 960,15 960,125" />
      <line x1="820" y1="15" x2="820" y2="125" />
      <line x1="740" y1="70" x2="960" y2="70" />
    </g>
    <g opacity="0.045" stroke="#a0d4b0" strokeWidth="0.5" fill="none">
      {[80, 140, 200, 260].map((r, i) => <circle key={i} cx="50" cy="95%" r={r} />)}
    </g>
    <g opacity="0.02" stroke="#7eb8d4" strokeWidth="0.4">
      {Array.from({ length: 18 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 60} x2="100%" y2={i * 60} />)}
      {Array.from({ length: 24 }).map((_, i) => <line key={`v${i}`} x1={i * 80} y1="0" x2={i * 80} y2="100%" />)}
    </g>
    {[[150,180],[350,420],[560,160],[680,360],[820,280],[220,560]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="1.5" fill="#7eb8d4" opacity="0.16" />
    ))}
  </svg>
);

const Card = ({ children, style = {} }) => (
  <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: DS.radius, padding: "22px 26px", position: "relative", overflow: "hidden", ...style }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${C.accent}44,transparent)` }} />
    {children}
  }
);

const Label = ({ children, style = {} }) => (
  <span style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.dim, ...style }}>{children}</span>
);

const Mono = ({ children, style = {} }) => (
  <span style={{ fontFamily: F.mono, fontSize: 12, fontWeight: 300, color: C.subtle, ...style }}>{children}</span>
);

const Tag = ({ children, accent = false, alt = false }) => (
  <span style={{
    fontFamily: F.mono, fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase",
    padding: "2px 7px", borderRadius: DS.radius,
    border: `1px solid ${alt ? C.accentAlt+"44" : accent ? C.accent+"44" : C.border}`,
    color: alt ? C.accentAlt : accent ? C.accent : C.dim,
  }}>{children}</span>
);

const Rule = () => <div style={{ borderTop: `1px solid ${C.border}`, margin: "18px 0" }} />;

const MathBlock = ({ children }) => (
  <div style={{
    fontFamily: F.mono, fontSize: 14, fontWeight: 300,
    background: C.bg, border: `1px solid ${C.border}`,
    borderLeft: `2px solid ${C.accent}88`,
    borderRadius: DS.radius, padding: "12px 16px",
    color: C.subtle, letterSpacing: "0.03em",
    lineHeight: 2, whiteSpace: "pre",
  }}>{children}</div>
);

const InfoRow = ({ label, value, accent = false }) => (
  <div style={{ display: "flex", gap: 16, padding: "9px 0", borderBottom: `1px solid ${C.border}`, alignItems: "baseline" }}>
    <Mono style={{ minWidth: 160, color: C.dim, flexShrink: 0, fontSize: 11 }}>{label}</Mono>
    <span style={{ fontFamily: F.serif, fontSize: 14, color: accent ? C.accent : C.body, lineHeight: 1.5 }}>{value}</span>
  </div>
);

const Dots = ({ filled = 1 }) => (
  <span style={{ display: "inline-flex", gap: 3 }}>
    {[1,2,3].map(i => (
      <span key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: i <= filled ? C.accent : C.muted, boxShadow: i <= filled ? `0 0 4px ${C.glowStr}` : "none" }} />
    ))}
  </span>
);

// ─────────────────────────────────────────────────────────────
// FIELD COMPONENTS (controlled versions based on Trig_Bridge_L01.jsx)
// ─────────────────────────────────────────────────────────────
function MCFieldControlled({ question, choices, correct, pts, diff, explain, selected, onSelect, revealed, onCheck }) {
  const on = selected !== null && selected === correct;
  const ok = revealed && selected === correct;
  const bad = revealed && selected !== null && selected !== correct;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Tag>MC</Tag>
          <Dots filled={diff} />
        </div>
        <Mono style={{ fontSize: 10 }}>{pts} pts</Mono>
      </div>
      <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.65, marginBottom: 14 }}>{question}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {choices.map((ch, i) => {
          const L = ["A","B","C","D"][i];
          const isSelected = selected === i;
          return (
            <div key={i} onClick={() => !revealed && onSelect(i)} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
              border: `1px solid ${ok ? C.accentAlt+"aa" : bad ? C.err+"88" : isSelected ? C.accent+"88" : C.border}`,
              borderRadius: DS.radius, cursor: revealed ? "default" : "pointer",
              background: ok ? C.accentAlt+"0e" : bad ? C.err+"0e" : isSelected ? C.accent+"0e" : "transparent",
              boxShadow: isSelected ? `0 0 12px ${C.glow}` : "none",
              transition: "all 0.18s ease",
            }}>
              <Mono style={{ fontSize: 10, color: isSelected ? C.accent : C.dim, minWidth: 14, letterSpacing: "0.08em" }}>{L}</Mono>
              <span style={{ fontFamily: F.serif, fontSize: 14, color: ok ? C.accentAlt : bad ? C.err : isSelected ? C.accent : C.body, flex: 1, lineHeight: 1.5 }}>{ch}</span>
              {ok && <Mono style={{ fontSize: 9, color: C.accentAlt }}>✓</Mono>}
              {bad && <Mono style={{ fontSize: 9, color: C.err }}>✗</Mono>}
            </div>
          );
        })}
      </div>
      {selected !== null && (
        <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
          {!revealed && (
            <button onClick={onCheck} style={{ fontFamily: F.serif, fontSize: 13, padding: "5px 14px", borderRadius: DS.radius, border: `1px solid ${C.accent}55`, background: "transparent", color: C.accent, cursor: "pointer" }}>
              Check
            </button>
          )}
          <button onClick={() => { onSelect(null); onCheck(); }} style={{ fontFamily: F.serif, fontSize: 13, padding: "5px 14px", borderRadius: DS.radius, border: `1px solid ${C.border}`, background: "transparent", color: C.subtle, cursor: "pointer" }}>
            Clear
          </button>
          {revealed && explain && (
            <button onClick={() => /* toggle explain */} style={{ fontFamily: F.serif, fontSize: 13, padding: "5px 14px", borderRadius: DS.radius, border: `1px solid ${C.border}`, background: "transparent", color: C.subtle, cursor: "pointer" }}>
              Explain
            </button>
          )}
        </div>
      )}
      {/* Explain toggle state would need to be lifted too, but for simplicity we omit explain toggle in this version */}
    </div>
  );
}

function INTFieldControlled({ question, answer, pts, diff, hint, value, onChange, checked, onCheck }) {
  const correctParsed = parseInt(value) === answer;
  const ok = checked && correctParsed;
  const bad = checked && value !== "" && !correctParsed;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Tag>INT</Tag>
          <Dots filled={diff} />
        </div>
        <Mono style={{ fontSize: 10 }}>{pts} pts</Mono>
      </div>
      <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.65, marginBottom: 14 }}>{question}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <input type="number" min="0" max="9999" value={value} placeholder="0"
          onChange={e => onChange(e.target.value)}
          style={{
            width: 96, padding: "10px 14px", borderRadius: DS.radius,
            border: `1px solid ${checked ? (correctParsed ? C.accentAlt+"99" : C.err+"88") : C.border}`,
            background: checked ? (correctParsed ? C.accentAlt+"0a" : C.err+"0a") : C.bg,
            color: checked ? (correctParsed ? C.accentAlt : C.err) : C.heading,
            fontFamily: F.mono, fontSize: 22, fontWeight: 300, textAlign: "right",
            boxShadow: value ? `0 0 10px ${C.glow}` : "none",
            transition: "all 0.2s",
          }}
        />
        <div>
          <Mono style={{ fontSize: 9, letterSpacing: "0.12em", display: "block" }}>INTEGER · 0 – 9999</Mono>
          {checked && <Mono style={{ fontSize: 9, display: "block", marginTop: 3, color: correctParsed ? C.accentAlt : C.err }}>{correctParsed ? "✓ correct" : "✗ try again"}</Mono>}
        </div>
      </div>
      {value !== "" && (
        <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
          {!checked && (
            <button onClick={onCheck} style={{ fontFamily: F.serif, fontSize: 13, padding: "5px 14px", borderRadius: DS.radius, border: `1px solid ${C.accent}55`, background: "transparent", color: C.accent, cursor: "pointer" }}>
              Check
            </button>
          )}
          <button