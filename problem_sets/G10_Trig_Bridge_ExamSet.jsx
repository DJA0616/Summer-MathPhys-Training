import { useState } from "react";

// ─────────────────────────────────────────────────────────────
// DESIGN SYSTEM (copied from project-template-files/design-system.jsx)
// ─────────────────────────────────────────────────────────────
const DS = {
  colors: {
    bg: "#0a0a0a",
    surface: "#111111",
    elevated: "#181818",
    border: "#222222",
    muted: "#2a2a2a",
    dim: "#555555",
    subtle: "#888888",
    body: "#c8c8c8",
    heading: "#efefef",
    accent: "#7eb8d4",
    accentAlt: "#a0d4b0",
    glow: "rgba(126,184,212,0.18)",
    glowStr: "rgba(126,184,212,0.5)",
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
  input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { opacity: 1; }
  input:focus { outline: none; }
`;

// ─────────────────────────────────────────────────────────────
// LAYOUT PRIMITIVES (copied from project-template-files/Probset_Format_v2.jsx)
// ─────────────────────────────────────────────────────────────
const Geo = () => (
  <svg style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}>
    <defs>
      <radialGradient id="g1" cx="85%" cy="5%" r="35%">
        <stop offset="0%" stopColor="#7eb8d4" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#7eb8d4" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="g2" cx="5%" cy="95%" r="30%">
        <stop offset="0%" stopColor="#a0d4b0" stopOpacity="0.04" />
        <stop offset="100%" stopColor="#a0d4b0" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g1)" />
    <rect width="100%" height="100%" fill="url(#g2)" />
    <g opacity="0.06" stroke="#7eb8d4" strokeWidth="0.6" fill="none">
      <polygon points="820,15 900,70 740,70" /><polygon points="900,70 960,15 960,125" />
      <line x1="820" y1="15" x2="820" y2="125" /><line x1="740" y1="70" x2="960" y2="70" />
    </g>
    <g opacity="0.045" stroke="#a0d4b0" strokeWidth="0.5" fill="none">
      {[80, 140, 200, 260].map((r, i) => <circle key={i} cx="50" cy="95%" r={r} />)}
    </g>
    <g opacity="0.02" stroke="#7eb8d4" strokeWidth="0.4">
      {Array.from({ length: 18 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 60} x2="100%" y2={i * 60} />)}
      {Array.from({ length: 24 }).map((_, i) => <line key={`v${i}`} x1={i * 80} y1="0" x2={i * 80} y2="100%" />)}
    </g>
    {[[150, 180], [350, 420], [560, 160], [680, 360], [820, 280], [220, 560]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="1.5" fill="#7eb8d4" opacity="0.16" />
    ))}
  </svg>
);

const Card = ({ children, style = {} }) => (
  <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: DS.radius, padding: "22px 26px", position: "relative", overflow: "hidden", ...style }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${C.accent}44,transparent)` }} />
    {children}
  </div>
);

const Label = ({ children, style = {} }) => (
  <span style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.dim, ...style }}>{children}</span>
);

const Mono = ({ children, style = {} }) => (
  <span style={{ fontFamily: F.mono, fontSize: 12, fontWeight: 300, color: C.subtle, ...style }}>{children}</span>
);

const Tag = ({ children, accent = false }) => (
  <span style={{
    fontFamily: F.mono,
    fontSize: 9,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "2px 7px",
    borderRadius: DS.radius,
    border: `1px solid ${accent ? C.accent + "44" : C.border}`,
    color: accent ? C.accent : C.dim,
    background: "transparent",
  }}>
    {children}
  </span>
);

const Rule = () => <div style={{ borderTop: `1px solid ${C.border}`, margin: "18px 0" }} />;

const Dots = ({ filled = 1 }) => (
  <span style={{ display: "inline-flex", gap: 3 }}>
    {[1, 2, 3].map(i => (
      <span key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: i <= filled ? C.accent : C.muted, boxShadow: i <= filled ? `0 0 4px ${C.glowStr}` : "none" }} />
    ))}
  </span>
);

// ─────────────────────────────────────────────────────────────
// ANSWER FIELD COMPONENTS (simplified versions for probsets)
// ─────────────────────────────────────────────────────────────
function MCField({ question, choices, correct, pts = 3, diff = 1 }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Tag>MC</Tag>
          <Dots filled={diff} />
        </div>
        <Mono style={{ fontSize: 10 }}>{pts} pts</Mono>
      </div>
      <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.65, marginBottom: 16 }}>{question}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {choices.map((ch, i) => {
          const L = ["A", "B", "C", "D"][i];
          const on = selected === i;
          const correct_reveal = revealed && i === correct;
          const wrong_reveal = revealed && on && i !== correct;
          const borderColor = correct_reveal ? C.accentAlt + "aa" : wrong_reveal ? "#d47e8a88" : on ? C.accent + "88" : C.border;
          const bgColor = correct_reveal ? C.accentAlt + "0e" : wrong_reveal ? "#d47e8a0e" : on ? C.accent + "0e" : "transparent";
          const textColor = correct_reveal ? C.accentAlt : wrong_reveal ? "#d47e8a" : on ? C.accent : C.body;
          return (
            <div
              key={i}
              onClick={() => !revealed && setSelected(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 14px",
                border: `1px solid ${borderColor}`,
                borderRadius: DS.radius,
                cursor: revealed ? "default" : "pointer",
                background: bgColor,
                boxShadow: on ? `0 0 12px ${C.glow}` : "none",
                transition: "all 0.18s ease",
              }}
            >
              <span style={{ fontFamily: F.mono, fontSize: 10, color: on ? C.accent : C.dim, minWidth: 14, letterSpacing: "0.08em" }}>{L}</span>
              <span style={{ fontFamily: F.serif, fontSize: 14, color: textColor, flex: 1, lineHeight: 1.5 }}>{ch}</span>
              {correct_reveal && <span style={{ fontFamily: F.mono, fontSize: 9, color: C.accentAlt }}>✓</span>}
              {wrong_reveal && <span style={{ fontFamily: F.mono, fontSize: 9, color: "#d47e8a" }}>✗</span>}
            </div>
          );
        })}
      </div>
      {selected !== null && (
        <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
          {!revealed && (
            <button onClick={() => setRevealed(true)} style={{ fontFamily: F.serif, fontSize: 13, padding: "5px 14px", borderRadius: DS.radius, border: `1px solid ${C.accent}55`, background: "transparent", color: C.accent, cursor: "pointer" }}>
              Check
            </button>
          )}
          <button onClick={() => { setSelected(null); setRevealed(false); }} style={{ fontFamily: F.serif, fontSize: 13, padding: "5px 14px", borderRadius: DS.radius, border: `1px solid ${C.border}`, background: "transparent", color: C.subtle, cursor: "pointer" }}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

function TFField({ statement, correct = true, pts = 3, diff = 1 }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Tag>T / F</Tag>
          <Dots filled={diff} />
        </div>
        <Mono style={{ fontSize: 10 }}>{pts} pts</Mono>
      </div>
      <p style={{ fontFamily: F.serif, fontSize: 14, fontStyle: "italic", color: C.body, lineHeight: 1.65, marginBottom: 16, paddingLeft: 12, borderLeft: `2px solid ${C.accent}44` }}>
        "{statement}"
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        {[true, false].map(val => {
          const label = val ? "True" : "False";
          const on = selected === val;
          const correct_reveal = revealed && val === correct;
          const wrong_reveal = revealed && on && val !== correct;
          return (
            <div
              key={label}
              onClick={() => !revealed && setSelected(val)}
              style={{
                flex: 1,
                padding: "14px 0",
                textAlign: "center",
                border: `1px solid ${correct_reveal ? C.accentAlt + "aa" : wrong_reveal ? "#d47e8a88" : on ? C.accent + "88" : C.border}`,
                borderRadius: DS.radius,
                cursor: revealed ? "default" : "pointer",
                background: correct_reveal ? C.accentAlt + "0e" : wrong_reveal ? "#d47e8a0e" : on ? C.accent + "0e" : "transparent",
                boxShadow: on ? `0 0 14px ${C.glow}` : "none",
                fontFamily: F.serif,
                fontSize: 16,
                color: correct_reveal ? C.accentAlt : wrong_reveal ? "#d47e8a" : on ? C.accent : C.subtle,
                transition: "all 0.18s ease",
              }}
            >
              {label}
              {correct_reveal && " ✓"}
              {wrong_reveal && " ✗"}
            </div>
          );
        })}
      </div>
      {selected !== null && (
        <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
          {!revealed && (
            <button onClick={() => setRevealed(true)} style={{ fontFamily: F.serif, fontSize: 13, padding: "5px 14px", borderRadius: DS.radius, border: `1px solid ${C.accent}55`, background: "transparent", color: C.accent, cursor: "pointer" }}>
              Check
            </button>
          )}
          <button onClick={() => { setSelected(null); setRevealed(false); }} style={{ fontFamily: F.serif, fontSize: 13, padding: "5px 14px", borderRadius: DS.radius, border: `1px solid ${C.border}`, background: "transparent", color: C.subtle, cursor: "pointer" }}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

function INTField({ question, answer, pts = 4, diff = 2 }) {
  const [val, setVal] = useState("");
  const [checked, setChecked] = useState(false);
  const correct = parseInt(val) === answer;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Tag>INT</Tag>
          <Dots filled={diff} />
        </div>
        <Mono style={{ fontSize: 10 }}>{pts} pts</Mono>
      </div>
      <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.65, marginBottom: 16 }}>{question}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            min="0"
            max="999"
            value={val}
            onChange={e => { setVal(e.target.value); setChecked(false); }}
            placeholder="0"
            style={{
              width: 96,
              padding: "10px 14px",
              border: `1px solid ${checked ? (correct ? C.accentAlt + "99" : "#d47e8a88") : C.border}`,
              borderRadius: DS.radius,
              background: checked ? (correct ? C.accentAlt + "0a" : "#d47e8a0a") : C.bg,
              color: checked ? (correct ? C.accentAlt : "#d47e8a") : C.heading,
              fontFamily: F.mono,
              fontSize: 22,
              fontWeight: 300,
              textAlign: "right",
              boxShadow: val ? `0 0 10px ${C.glow}` : "none",
              transition: "all 0.2s",
            }}
            onFocus={e => { if (!checked) e.target.style.borderColor = C.accent + "77"; }}
            onBlur={e => { if (!checked) e.target.style.borderColor = C.border; }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Mono style={{ fontSize: 9, letterSpacing: "0.12em" }}>INTEGER · 0 – 999</Mono>
          {checked && <Mono style={{ fontSize: 9, color: correct ? C.accentAlt : "#d47e8a" }}>{correct ? "✓ correct" : "✗ try again"}</Mono>}
        </div>
      </div>
      {val !== "" && (
        <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
          {!checked && (
            <button onClick={() => setChecked(true)} style={{ fontFamily: F.serif, fontSize: 13, padding: "5px 14px", borderRadius: DS.radius, border: `1px solid ${C.accent}55`, background: "transparent", color: C.accent, cursor: "pointer" }}>
              Check
            </button>
          )}
          <button onClick={() => { setVal(""); setChecked(false); }} style={{ fontFamily: F.serif, fontSize: 13, padding: "5px 14px", borderRadius: DS.radius, border: `1px solid ${C.border}`, background: "transparent", color: C.subtle, cursor: "pointer" }}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
export default function G10_Trig_Bridge_ExamSet() {
  return (
    <>
      <style>{css}</style>
      <Geo />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto", padding: "44px 20px 80px" }}>
        {/* Header */}
        <div className="fade" style={{ marginBottom: 40 }}>
          <Label style={{ display: "block", marginBottom: 10 }}>G10 Trigonometry Bridge</Label>
          <h1 style={{ fontFamily: F.serif, fontSize: "clamp(26px,4vw,42px)", fontWeight: 500, color: C.heading, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 10, textShadow: `0 0 24px ${C.glowStr}, 0 0 48px ${C.glow}` }}>
            Exam Set<br /><em>Trigonometry Fundamentals</em>
          </h1>
          <p style={{ fontFamily: F.serif, fontSize: 15, color: C.dim, fontStyle: "italic" }}>
            30 problems • Comprehensive review • Applications • Identities
          </p>
        </div>

        {/* Problems */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          {/* Easy Problems (1 dot, 3 pts) */}
          <MCField
            question="What is sin(0°)?"
            choices={["0", "1/2", "√2/2", "1"]}
            correct={0}
            pts={3}
            diff={1}
          />

          <MCField
            question="What is cos(0°)?"
            choices={["0", "1/2", "√2/2", "1"]}
            correct={3}
            pts={3}
            diff={1}
          />

          <MCField
            question="What is tan(0°)?"
            choices={["0", "1", "√3", "undefined"]}
            correct={0}
            pts={3}
            diff={1}
          />

          <INTField
            question="In right triangle ABC, angle C = 90°, AB = 10 (hypotenuse), BC = 6. What is AC?"
            answer={8}
            pts={3}
            diff={1}
          />

          <TFField
            statement="sin(30°) = 1/2"
            correct={true}
            pts={3}
            diff={1}
          />

          <MCField
            question="cos(60°) equals:"
            choices={["1/2", "√3/2", "√2/2", "0"]}
            correct={0}
            pts={3}
            diff={1}
          />

          <INTField
            question="If sin(θ) = 3/5 and cos(θ) = 4/5, what is 4 × tan(θ)?"
            answer={3}
            pts={3}
            diff={1}
          />

          <TFField
            statement="tan(45°) = 1"
            correct={true}
            pts={3}
            diff={1}
          />

          <MCField
            question="sin(90°) ="
            choices={["0", "1/2", "√2/2", "1"]}
            correct={3}
            pts={3}
            diff={1}
          />

          <INTField
            question="A right triangle has one angle of 30°. If the side opposite this angle is 5 cm, what is the hypotenuse?"
            answer={10} // sin(30°) = 0.5, so hypotenuse = 5/0.5 = 10
            pts={3}
            diff={1}
          />

          <TFField
            statement="cos(0°) = sin(90°)"
            correct={true}
            pts={3}
            diff={1}
          />

          <MCField
            question="What is sin²(θ) + cos²(θ) equal to?"
            choices={["0", "1/2", "1", "2"]}
            correct={2}
            pts={3}
            diff={1}
          />

          <INTField
            question="tan(45°) = ? (Answer as integer)"
            answer={1}
            pts={3}
            diff={1}
          />

          <TFField
            statement="sin(-θ) = -sin(θ)"
            correct={true}
            pts={3}
            diff={1}
          />

          <MCField
            question="cos(90°) ="
            choices={["0", "1/2", "√2/2", "1"]}
            correct={0}
            pts={3}
            diff={1}
          />

          {/* Medium Problems (2 dots, 4 pts) */}
          <MCField
            question="A tree casts a shadow 15 m long when the sun's angle of elevation is 60°. How tall is the tree?"
            choices={["8.7 m", "15.0 m", "26.0 m", "30.0 m"]}
            correct={2} // height = 15 * tan(60°) = 15 * √3 ≈ 25.98 ≈ 26.0 m
            pts={4}
            diff={2}
          />

          <INTField
            question="A ladder 6 m long rests against a wall. If the foot of the ladder is 2 m from the wall, what angle does it make with the ground?"
            answer={71} // cos(θ) = 2/6 = 1/3, θ ≈ 70.5° ≈ 71°
            pts={4}
            diff={2}
          />

          <TFField
            statement="sin(θ) = cos(90° - θ)"
            correct={true}
            pts={4}
            diff={2}
          />

          <MCField
            question="If sin(θ) = 3/5 and θ is in quadrant II, what is cos(θ)?"
            choices={["-4/5", "4/5", "-3/5", "3/5"]}
            correct={0} // cos² = 1 - sin² = 1 - 9/25 = 16/25, cos = ±4/5, negative in QII
            pts={4}
            diff={2}
          />

          <INTField
            question="In right triangle DEF, angle E = 90°, DF = 13, DE = 5. What is EF?"
            answer={12} // 5-12-13 triplet
            pts={4}
            diff={2}
          />

          <MCField
            question="What is the reference angle for 150°?"
            choices={["30°", "60°", "120°", "150°"]}
            correct={0}
            pts={4}
            diff={2}
          />

          <TFField
            statement="tan(θ) = sin(θ)/cos(θ)"
            correct={true}
            pts={4}
            diff={2}
          />

          <INTField
            question="From a point 20 m from the base of a tree, the angle of elevation to the top is 45°. What is the height of the tree?"
            answer={20} // tan(45°) = 1, so height = 20 * 1 = 20 m
            pts={4}
            diff={2}
          />

          <MCField
            question="If cos(θ) = 0.6, what is sin(θ) for θ in quadrant I?"
            choices={["0.4", "0.6", "0.8", "1.0"]}
            correct={2} // sin = √(1 - 0.36) = √0.64 = 0.8
            pts={4}
            diff={2}
          />

          <TFField
            statement="cot(θ) = 1/tan(θ)"
            correct={true}
            pts={4}
            diff={2}
          />

          {/* Hard Problems (3 dots, 5 pts) */}
          <MCField
            question="From the top of a cliff 80 m high, the angle of depression to a boat is 25°. How far is the boat from the base of the cliff?"
            choices={["37.3 m", "80.0 m", "171.6 m", "188.4 m"]}
            correct={2} // distance = 80 / tan(25°) ≈ 80 / 0.4663 ≈ 171.6 m
            pts={5}
            diff={3}
          />

          <INTField
            question="A ramp needs to rise 1.5 m to reach a platform. If the maximum allowed angle is 15°, what is the minimum length of the ramp?"
            answer={6} // length = rise / sin(15°) = 1.5 / 0.2588 ≈ 5.8 ≈ 6 m
            pts={5}
            diff={3}
          />

          <TFField
            statement="sin(θ + 180°) = -sin(θ)"
            correct={true}
            pts={5}
            diff={3}
          />

          <MCField
            question="If tan(θ) = 2 and θ is in quadrant III, what is sin(θ)?"
            choices={["-2/√5", "2/√5", "-1/√5", "1/√5"]}
            correct={0} // tan = 2 = opp/adj, hyp = √(2²+1²) = √5, sin = opp/hyp = ±2/√5, negative in QIII
            pts={5}
            diff={3}
          />

          <INTField
            question="A ladder leans against a wall making a 75° angle with the ground. If the top of the ladder is 10 m high, how long is the ladder?"
            answer={10} // length = height / sin(75°) = 10 / 0.9659 ≈ 10.35 ≈ 10 m (using common approximation)
            pts={5}
            diff={3}
          />

        </div>

        {/* Footer */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${C.border}`, paddingTop: 18, display: "flex", justifyContent: "space-between" }}>
          <Mono style={{ fontSize: 9 }}>g10-trig-bridge · examset</Mono>
          <Mono style={{ fontSize: 9, color: C.dim }}>30 questions • 110 points total</Mono>
        </div>
      </div>
    </>
  );
}