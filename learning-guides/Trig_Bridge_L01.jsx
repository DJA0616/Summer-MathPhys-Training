import { useState, useEffect, useRef } from "react";
import { C, F, Geo, GLOBAL_CSS, Card, Label, Mono, Tag, Rule, MathBlock, InfoRow, QuoteBlock, HintBox, SummaryBox, MCField, INTField } from "../project-template-files/block-kit.jsx";

// ─────────────────────────────────────────────────────────────
// INTERACTIVE — CIRCLE → WAVE ANIMATION
// ─────────────────────────────────────────────────────────────
function CircleWave() {
  const cvRef = useRef(null);
  const [showCos, setShowCos] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [paused, setPaused] = useState(false);
  const angleRef = useRef(0);
  const lastTRef = useRef(null);

  useEffect(() => {
    const cv = cvRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const W = 640, H = 320;
    const cx = 140, cy = 160, r = 90;

    const CC = {
      circle: "rgba(239,239,239,0.08)",
      axle:   "rgba(126,184,212,0.08)",
      point:  "#7eb8d4",
      projY:  "#7eb8d4",
      projX:  "#a0d4b0",
      wave:   "#7eb8d4",
      waveX:  "#a0d4b0",
      conn:   "rgba(239,239,239,0.1)",
      lbl:    "rgba(239,239,239,0.25)",
      eq:     "rgba(239,239,239,0.5)",
    };

    const wLeft = 340, wTop = 20, wW = W - wLeft - 10, wH = H - wTop - 16; // wave panel
    const gH = wH / 2 * 0.78; // half graph height

    function draw() {
      const a = angleRef.current;
      const px = cx + r * Math.cos(a);
      const py = cy - r * Math.sin(a);

      ctx.clearRect(0, 0, W, H);

      // Circle panel
      ctx.strokeStyle = CC.circle; ctx.lineWidth = 0.5;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, 2 * Math.PI); ctx.stroke();

      // Axes through circle center
      ctx.strokeStyle = CC.axle; ctx.lineWidth = 0.5;
      ctx.beginPath(); ctx.moveTo(cx - r - 10, cy); ctx.lineTo(cx + r + 10, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy - r - 10); ctx.lineTo(cx, cy + r + 10); ctx.stroke();

      // Projection lines
      ctx.strokeStyle = CC.conn; ctx.lineWidth = 0.5;
      ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(cx, py); ctx.stroke();
      ctx.setLineDash([]);

      // Projection dots
      ctx.fillStyle = CC.projX; ctx.beginPath(); ctx.arc(px, cy, 3, 0, 2 * Math.PI); ctx.fill();
      ctx.fillStyle = CC.projY; ctx.beginPath(); ctx.arc(cx, py, 3, 0, 2 * Math.PI); ctx.fill();

      // Point on circle
      ctx.fillStyle = CC.point; ctx.beginPath(); ctx.arc(px, py, 5, 0, 2 * Math.PI); ctx.fill();

      // Radius line
      ctx.strokeStyle = CC.axle; ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();

      // Labels
      ctx.font = "10px monospace"; ctx.fillStyle = CC.lbl; ctx.textAlign = "center";
      ctx.fillText("cos θ", px, cy - 14);
      ctx.fillText("sin θ", cx - 36, py + 4);
      ctx.fillText("θ", cx + 14, cy - 10);

      // Wave panel background grid
      const wyc = wTop + wH / 2;
      ctx.strokeStyle = "rgba(126,184,212,0.04)"; ctx.lineWidth = 0.5;
      ctx.setLineDash([2, 4]);
      ctx.beginPath(); ctx.moveTo(wLeft, wyc); ctx.lineTo(W - 8, wyc); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(wLeft, wyc - gH); ctx.lineTo(W - 8, wyc - gH); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(wLeft, wyc + gH); ctx.lineTo(W - 8, wyc + gH); ctx.stroke();
      ctx.setLineDash([]);

      // Wave trace: recent history
      const pts = [];
      const history = 200;
      for (let k = 0; k < history; k++) {
        const ang = a - k * (0.06 * speed);
        const wx = W - 8 - k * ((W - wLeft - 16) / history);
        if (wx < wLeft) break;
        pts.push({ wx, sy: wyc - Math.sin(ang) * gH, cy: wyc - Math.cos(ang) * gH });
      }

      // Cos wave
      if (showCos) {
        ctx.beginPath(); ctx.strokeStyle = CC.waveX; ctx.lineWidth = 1.5;
        for (let i = 0; i < pts.length; i++) {
          i === 0 ? ctx.moveTo(pts[i].wx, pts[i].cy) : ctx.lineTo(pts[i].wx, pts[i].cy);
        }
        ctx.stroke();
      }

      // Sin wave
      ctx.beginPath(); ctx.strokeStyle = CC.wave; ctx.lineWidth = 1.8;
      for (let i = 0; i < pts.length; i++) {
        i === 0 ? ctx.moveTo(pts[i].wx, pts[i].sy) : ctx.lineTo(pts[i].wx, pts[i].sy);
      }
      ctx.stroke();

      // Wave panel labels
      ctx.font = "9px monospace"; ctx.fillStyle = CC.lbl; ctx.textAlign = "left";
      ctx.fillText("y = sin θ", wLeft + 2, wyc - gH - 6);
      if (showCos) {
        ctx.fillStyle = CC.waveX;
        ctx.fillText("x = cos θ", wLeft + 2, wyc + gH + 14);
      }

      // Angle readout
      ctx.font = "12px monospace"; ctx.fillStyle = CC.eq; ctx.textAlign = "center";
      const deg = ((a * 180 / Math.PI) % 360 + 360) % 360;
      ctx.fillText(`θ = ${deg.toFixed(0)}°  ·  ${(a % (2*Math.PI) + 2*Math.PI) % (2*Math.PI) < 0.01 ? "0" : (a % (2*Math.PI)).toFixed(2)} rad`, W / 2, H - 10);
    }

    let rafId;
    function loop(ts) {
      if (!paused && lastTRef.current !== null) {
        const dt = (ts - lastTRef.current) / 1000;
        angleRef.current += dt * 1.2 * speed;
      }
      lastTRef.current = ts;
      draw();
      rafId = requestAnimationFrame(loop);
    }
    lastTRef.current = performance.now();
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [showCos, speed, paused]);

  return (
    <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: "4px", overflow: "hidden" }}>
      <canvas ref={cvRef} width={640} height={320} style={{ display: "block", width: "100%" }} />
      <div style={{ padding: "10px 16px", borderTop: `1px solid ${C.border}`, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        <button onClick={() => setShowCos(c => !c)} style={{ fontFamily: F.serif, fontSize: 12, padding: "4px 12px", borderRadius: "4px", border: `1px solid ${showCos ? C.accentAlt+"55" : C.border}`, background: "transparent", color: showCos ? C.accentAlt : C.subtle, cursor: "pointer" }}>
          {showCos ? "Hide cos" : "Show cos"}
        </button>
        <button onClick={() => setPaused(p => !p)} style={{ fontFamily: F.serif, fontSize: 12, padding: "4px 12px", borderRadius: "4px", border: `1px solid ${C.border}`, background: "transparent", color: C.subtle, cursor: "pointer" }}>
          {paused ? "Play" : "Pause"}
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Mono style={{ fontSize: 9 }}>Speed</Mono>
          <input type="range" min="0.2" max="3" step="0.1" value={speed} onChange={e => setSpeed(parseFloat(e.target.value))} style={{ width: 80 }} />
          <Mono style={{ fontSize: 9 }}>{speed.toFixed(1)}x</Mono>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// INTERACTIVE — SINUSOIDAL EXPLORER
// ─────────────────────────────────────────────────────────────
function SinusoidalExplorer() {
  const cvRef = useRef(null);
  const ARef = useRef(1);
  const omegaRef = useRef(1);
  const phiRef = useRef(0);
  const needsRedraw = useRef(true);
  const [A, setA] = useState(1);
  const [omega, setOmega] = useState(1);
  const [phi, setPhi] = useState(0);

  useEffect(() => {
    const cv = cvRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const W = 640, H = 210;

    const CC = {
      ax:   "rgba(126,184,212,0.13)",
      grid: "rgba(126,184,212,0.05)",
      wave: "#7eb8d4",
      amp:  "rgba(126,184,212,0.07)",
      lbl:  "rgba(239,239,239,0.34)",
      eq:   "rgba(239,239,239,0.65)",
      tick: "rgba(239,239,239,0.18)",
    };

    const pL = 48, pR = 16, pT = 30, pB = 28;

    function drawGraph() {
      const a = ARef.current, w = omegaRef.current, p = phiRef.current;
      ctx.clearRect(0, 0, W, H);
      const gW = W - pL - pR, gH = H - pT - pB;
      const cy = pT + gH / 2;
      const ys = gH / 2 * 0.84;
      const tMax = 4 * Math.PI / w;

      // Amplitude band
      ctx.fillStyle = CC.amp;
      ctx.fillRect(pL, cy - a * ys, gW, 2 * a * ys);

      // Horizontal grid at ±1
      ctx.strokeStyle = CC.grid; ctx.lineWidth = 0.5; ctx.setLineDash([3, 3]);
      [-1, 1].forEach(v => {
        ctx.beginPath(); ctx.moveTo(pL, cy - v * ys); ctx.lineTo(W - pR, cy - v * ys); ctx.stroke();
      });
      ctx.setLineDash([]);

      // Axes
      ctx.strokeStyle = CC.ax; ctx.lineWidth = 0.5;
      ctx.beginPath(); ctx.moveTo(pL, cy); ctx.lineTo(W - pR, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(pL, pT); ctx.lineTo(pL, H - pB); ctx.stroke();

      // Period tick marks
      const period = 2 * Math.PI / w;
      for (let k = 1; k <= 4; k++) {
        const tx = pL + gW * (k * period / tMax);
        if (tx <= W - pR) {
          ctx.strokeStyle = CC.tick; ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(tx, cy - 3); ctx.lineTo(tx, cy + 3); ctx.stroke();
          ctx.font = "9px monospace"; ctx.fillStyle = CC.tick; ctx.textAlign = "center";
          ctx.fillText(k + "T", tx, cy + 14);
        }
      }

      // Wave
      ctx.beginPath(); ctx.strokeStyle = CC.wave; ctx.lineWidth = 2;
      for (let i = 0; i <= gW; i++) {
        const t = tMax * (i / gW);
        const wy = cy - a * Math.sin(w * t + p) * ys;
        i === 0 ? ctx.moveTo(pL + i, wy) : ctx.lineTo(pL + i, wy);
      }
      ctx.stroke();

      // y-axis labels
      ctx.font = "10px monospace"; ctx.fillStyle = CC.lbl; ctx.textAlign = "right";
      ctx.fillText("+" + a.toFixed(1), pL - 5, cy - a * ys + 4);
      ctx.fillText("-" + a.toFixed(1), pL - 5, cy + a * ys + 4);
      ctx.fillText("0", pL - 5, cy + 4);

      // Equation label
      const ps = Math.abs(p) < 0.01 ? "" : (p > 0 ? " + " + p.toFixed(2) : " − " + Math.abs(p).toFixed(2));
      ctx.fillStyle = CC.eq; ctx.font = "13px monospace"; ctx.textAlign = "left";
      ctx.fillText("y = " + a.toFixed(1) + " · sin(" + w.toFixed(1) + "t" + ps + ")", pL + 6, pT - 8);
    }

    let rafId;
    function loop() {
      if (needsRedraw.current) { drawGraph(); needsRedraw.current = false; }
      rafId = requestAnimationFrame(loop);
    }
    needsRedraw.current = true;
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const update = (setter, ref, val) => { setter(val); ref.current = val; needsRedraw.current = true; };

  const T = (2 * Math.PI / omega).toFixed(2);
  const f = (omega / (2 * Math.PI)).toFixed(3);

  return (
    <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: "4px", overflow: "hidden" }}>
      <canvas ref={cvRef} width={640} height={210} style={{ display: "block", width: "100%" }} />
      <div style={{ padding: "14px 16px", borderTop: `1px solid ${C.border}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
              <Mono style={{ color: C.accent, fontSize: 11 }}>A — amplitude</Mono>
              <Mono style={{ color: C.heading, fontSize: 11 }}>{A.toFixed(1)}</Mono>
            </div>
            <input type="range" min="0.2" max="2" step="0.1" value={A}
              onChange={e => update(setA, ARef, parseFloat(e.target.value))} />
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
              <Mono style={{ color: C.accent, fontSize: 11 }}>ω — angular freq</Mono>
              <Mono style={{ color: C.heading, fontSize: 11 }}>{omega.toFixed(1)} rad/s</Mono>
            </div>
            <input type="range" min="0.5" max="4" step="0.1" value={omega}
              onChange={e => update(setOmega, omegaRef, parseFloat(e.target.value))} />
            <Mono style={{ fontSize: 9, display: "block", marginTop: 5 }}>T = {T}s · f = {f} Hz</Mono>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
              <Mono style={{ color: C.accent, fontSize: 11 }}>φ — phase shift</Mono>
              <Mono style={{ color: C.heading, fontSize: 11 }}>{phi.toFixed(2)} rad</Mono>
            </div>
            <input type="range" min="-3.14" max="3.14" step="0.05" value={phi}
              onChange={e => update(setPhi, phiRef, parseFloat(e.target.value))} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────
const MAIN_TABS = ["lecture", "practice", "reference"];
const PART_LABELS = ["I · Projection", "II · Definitions", "III · Values", "IV · Sinusoidal", "V · Identity"];

export default function TrigBridgeL01() {
  const [tab, setTab] = useState("lecture");
  const [part, setPart] = useState(0);

  const tabBtn = (t) => ({
    fontFamily: F.serif, fontSize: 13, padding: "5px 13px", borderRadius: "4px",
    border: `1px solid ${tab === t ? C.accent+"55" : "transparent"}`,
    background: "transparent", color: tab === t ? C.accent : C.subtle, cursor: "pointer", transition: "all 0.2s",
  });

  const partBtn = (i) => ({
    fontFamily: F.mono, fontSize: 9, letterSpacing: "0.1em", padding: "4px 10px", borderRadius: "4px",
    border: `1px solid ${part === i ? C.accent+"55" : C.border}`,
    background: part === i ? C.accent+"11" : "transparent",
    color: part === i ? C.accent : C.dim, cursor: "pointer", transition: "all 0.2s",
  });

  const navBtn = (accent = false) => ({
    fontFamily: F.serif, fontSize: 13, padding: "6px 16px", borderRadius: "4px",
    border: `1px solid ${accent ? C.accent+"55" : C.border}`,
    background: "transparent", color: accent ? C.accent : C.subtle, cursor: "pointer",
  });

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <Geo />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto", padding: "44px 20px 80px" }}>

        {/* Navbar */}
        <div className="bk-fade" style={{ display: "flex", gap: 12, marginBottom: 36, fontFamily: F.mono, fontSize: 10 }}>
          <a href="../index.html" style={{ color: C.dim, textDecoration: "none" }}>← Index</a>
          <span style={{ color: C.muted }}>|</span>
          <a href="../highscores.html" style={{ color: C.dim, textDecoration: "none" }}>Highscores</a>
        </div>

        {/* ── Header ── */}
        <div className="bk-fade" style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
            <Tag>Trigonometry</Tag>
            <Tag accent>Foundations</Tag>
          </div>
          <h1 style={{ fontFamily: F.serif, fontSize: "clamp(26px,4vw,42px)", fontWeight: 500, color: C.heading, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 10, textShadow: `0 0 24px ${C.glowStr}` }}>
            The Language of<br /><em>Periodic Motion</em>
          </h1>
          <p style={{ fontFamily: F.serif, fontSize: 15, color: C.dim, fontStyle: "italic" }}>
            sin and cos are the coordinates of circular motion. Everything else follows.
          </p>
        </div>

        {/* ── Overview ── */}
        <Card style={{ marginBottom: 24 }}>
          <Label style={{ display: "block", marginBottom: 12 }}>What This Covers</Label>
          <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
            Pendula, springs, sound waves, AC current, light — every periodic phenomenon in physics is described by the same two functions. This is not coincidence. It reflects a deep fact: all such systems reduce to circular motion, and <em>sine</em> and <em>cosine</em> are simply the names for the x and y coordinates of a point moving in a circle.
          </p>
          <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
            This lecture builds those functions from that geometric picture alone — no unit circle memorization, no triangle ratios drilled in isolation. By the end, you will read any sinusoidal equation and extract its physical meaning instantly.
          </p>
          <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
            {["I · Projection", "II · Definitions", "III · Key Values", "IV · Sinusoidal Form", "V · Pythagorean Identity"].map((p, i) => (
              <Tag key={i}>{p}</Tag>
            ))}
          </div>
        </Card>

        {/* ── Tab nav ── */}
        <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
          {MAIN_TABS.map(t => <button key={t} onClick={() => setTab(t)} style={tabBtn(t)}>{t}</button>)}
        </div>
        <div style={{ borderTop: `1px solid ${C.accent}44`, marginBottom: 28 }} />

        {/* ══════════════════════════════════════════════
            LECTURE TAB
        ══════════════════════════════════════════════ */}
        {tab === "lecture" && (
          <div className="bk-fade">
            {/* Part nav */}
            <div style={{ display: "flex", gap: 3, marginBottom: 22, flexWrap: "wrap" }}>
              {PART_LABELS.map((lbl, i) => <button key={i} onClick={() => setPart(i)} style={partBtn(i)}>{lbl}</button>)}
            </div>

            {/* ───────────────────────────────────────
                PART I — The Projection Principle
            ─────────────────────────────────────── */}
            {part === 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                <SummaryBox
                  intro="Why are sin and cos everywhere in physics? Because every oscillating system is secretly a circle, and these two functions are how we read its coordinates."
                  points={[
                    "sin θ and cos θ are the y and x coordinates of a point on a unit circle at angle θ — nothing more.",
                    "A point moving at constant angular speed on a circle produces sinusoidal oscillation in each coordinate as a direct consequence.",
                    "The sine wave and the circle are the same object, viewed from different angles — literally.",
                    "Every periodic signal in physics (springs, waves, circuits) reduces to this picture.",
                  ]}
                />

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>The Setup</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    Consider a point P moving at constant angular velocity ω on a circle of radius R. At time t it has swept an angle θ = ωt from the positive x-axis. Using the component method you already know from vector work, its position is:
                  </p>
                  <MathBlock>{"x(t) = R · cos(ωt)        y(t) = R · sin(ωt)"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 16, marginBottom: 14 }}>
                    Set R = 1 (the <em>unit circle</em>) and you have the definitions. The functions <em>cosine</em> and <em>sine</em> are just those components. There is no deeper definition — this is the origin.
                  </p>
                  <Rule />
                  <Label style={{ display: "block", marginBottom: 10 }}>What to Watch in the Animation</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 8 }}>
                    The blue trace is the <strong style={{ fontWeight: 500, color: C.accent }}>y-coordinate</strong> (sin θ): it starts at zero, rises to 1, falls through 0 to −1, and repeats. The green trace is the <strong style={{ fontWeight: 500, color: C.accentAlt }}>x-coordinate</strong> (cos θ): same wave, but starting at 1.
                  </p>
                  <p style={{ fontFamily: F.serif, fontSize: 14, color: C.dim, lineHeight: 1.7, fontStyle: "italic" }}>
                    Toggle cos off to focus on sin alone. Lower the speed and watch a single rotation build the wave point-by-point.
                  </p>
                </Card>

                <CircleWave />

                <Card>
                  <Label style={{ display: "block", marginBottom: 12 }}>Reading the Circle Directly</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    You can read many values of sin and cos immediately from the geometry, without any formula:
                  </p>
                  {[
                    { k: "θ = 0 (rightmost)", v: "Point at (1, 0). sin(0) = 0, cos(0) = 1." },
                    { k: "θ = π/2 (top)", v: "Point at (0, 1). sin(π/2) = 1, cos(π/2) = 0." },
                    { k: "θ = π (leftmost)", v: "Point at (−1, 0). sin(π) = 0, cos(π) = −1." },
                    { k: "θ = 3π/2 (bottom)", v: "Point at (0, −1). sin(3π/2) = −1, cos(3π/2) = 0." },
                    { k: "θ = 2π (one revolution)", v: "Back to start. sin(2π) = sin(0) = 0. Period = 2π." },
                  ].map(({ k, v }) => <InfoRow key={k} label={k} value={v} />)}
                </Card>

                <QuoteBlock
                  text="The same equations have the same solutions. Wherever you see a sine wave, there is a circle somewhere."
                  author="R. Feynman"
                />

                <HintBox variant="comp">
                  Any periodic signal — no matter how complex — decomposes into a sum of circles of different sizes and speeds. Fourier's theorem guarantees this. A square wave, a sawtooth, the waveform of a violin string — each is a superposition of sine waves, and each sine wave corresponds to one rotating circle in the animation above. The amplitude spectrum of a sound file, the Fourier transform used in MRI imaging, the eigenmodes of a vibrating string: all of this traces back to the observation that periodic motion is circular motion in disguise.
                </HintBox>

                <Card>
                  <MCField
                    question="At θ = π/2, the point P sits at the top of the unit circle at coordinates (0, 1). Which of the following is correct?"
                    choices={[
                      "sin(π/2) = 0 and cos(π/2) = 1",
                      "sin(π/2) = 1 and cos(π/2) = 0",
                      "sin(π/2) = 1 and cos(π/2) = 1",
                      "sin(π/2) = π/2",
                    ]}
                    correct={1}
                    diff="easy" pts={3}
                    explain="At (0, 1): sin(π/2) = y-coordinate = 1, cos(π/2) = x-coordinate = 0. Read directly from the position vector — no formula required."
                  />
                </Card>
              </div>
            )}

            {/* ───────────────────────────────────────
                PART II — Formal Definitions
            ─────────────────────────────────────── */}
            {part === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                <SummaryBox
                  intro="With the picture established, we can state the definitions precisely and extract properties that follow directly from the geometry."
                  points={[
                    "sin θ = y-coordinate on the unit circle at angle θ; cos θ = x-coordinate.",
                    "These extend to all real angles — the point simply continues rotating past 2π, or backwards into negative angles.",
                    "cos is an even function (symmetric about the y-axis); sin is an odd function (antisymmetric). Both follow from the circle's geometry.",
                    "sin and cos are the same wave — cos leads sin by exactly one quarter-cycle (π/2 radians).",
                  ]}
                />

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Formal Definitions</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    For a point at angle θ on a unit circle, measured counterclockwise from the positive x-axis:
                  </p>
                  <InfoRow accent label="sin θ" value="y-coordinate — vertical displacement from center" />
                  <InfoRow accent label="cos θ" value="x-coordinate — horizontal displacement from center" />
                  <Rule />
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    The right-triangle definitions you may have seen — opposite/hypotenuse, adjacent/hypotenuse — are a special case of this. They work only for 0 {"<"} θ {"<"} π/2. The circle definition works for all angles. It is more general and more fundamental.
                  </p>
                  <Label style={{ display: "block", marginBottom: 10 }}>Domain and Range</Label>
                  {[
                    { k: "Domain", v: "All real numbers (the circle can be traversed indefinitely in either direction)" },
                    { k: "Range", v: "[−1, 1] for both sin and cos" },
                    { k: "Period", v: "2π for both (one full revolution restores the point)" },
                  ].map(({ k, v }) => <InfoRow key={k} label={k} value={v} />)}
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Signs by Quadrant</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    As the angle moves through the four quadrants, the signs of x and y (and thus cos and sin) change. You can read this directly from which quadrant the point is in:
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {[
                      { q: "Q I (0 to π/2)", s: "sin +, cos + — point in top-right" },
                      { q: "Q II (π/2 to π)", s: "sin +, cos − — point in top-left" },
                      { q: "Q III (π to 3π/2)", s: "sin −, cos − — point in bottom-left" },
                      { q: "Q IV (3π/2 to 2π)", s: "sin −, cos + — point in bottom-right" },
                    ].map(({ q, s }) => (
                      <div key={q} style={{ padding: "10px 12px", background: C.bg, border: `1px solid ${C.border}`, borderRadius: "4px" }}>
                        <Mono style={{ display: "block", marginBottom: 4, fontSize: 10, color: C.accent }}>{q}</Mono>
                        <span style={{ fontFamily: F.serif, fontSize: 13, color: C.body }}>{s}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontFamily: F.serif, fontSize: 14, color: C.dim, marginTop: 12, lineHeight: 1.65 }}>
                    Memory aid: in Q I, both are positive. Going counterclockwise, sin stays positive through Q II, then both go negative in Q III, then cos recovers in Q IV.
                  </p>
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Even and Odd Symmetry</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    Rotating by −θ reflects the point across the x-axis: x stays the same, y flips sign. Therefore:
                  </p>
                  <MathBlock>{"cos(−θ) = cos θ        (cos is even)\nsin(−θ) = −sin θ       (sin is odd)"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14 }}>
                    These are not rules to memorize — they follow immediately from the reflection. The x-coordinate of a point and its reflection across the x-axis are equal; the y-coordinates are negatives of each other.
                  </p>
                  <Rule />
                  <Label style={{ display: "block", marginBottom: 10 }}>Phase Relation</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 10 }}>
                    Compare the traces in the animation: cos starts at 1 while sin starts at 0. Cos is sin shifted left by a quarter-cycle:
                  </p>
                  <MathBlock>{"cos θ = sin(θ + π/2)\nsin θ = cos(θ − π/2)"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 14, color: C.dim, marginTop: 10, lineHeight: 1.65 }}>
                    In the animation, the cos lead is visible as the green dot always being exactly one quarter-revolution ahead of the blue dot around the circle.
                  </p>
                </Card>

                <HintBox variant="comp">
                  The functions sin and cos are the two linearly independent solutions to the differential equation d²y/dx² = −y. Any physical system where restoring force is proportional to displacement — a spring (F = −kx), a pendulum (small angle), an LC circuit — obeys an equation of this form, scaled by ω². This is precisely why sin and cos appear everywhere in oscillatory physics: the systems select them as solutions.
                </HintBox>

                <Card>
                  <MCField
                    question="cos(−π/3) equals cos(π/3) because cosine is an even function. If cos(π/3) = 1/2, what is sin(−π/3)?"
                    choices={["1/2", "−1/2", "√3/2", "−√3/2"]}
                    correct={3}
                    diff="easy" pts={3}
                    explain="sin is an odd function: sin(−θ) = −sin(θ). From the 30-60-90 triangle, sin(π/3) = sin(60°) = √3/2. Therefore sin(−π/3) = −√3/2. The minus sign comes from the y-coordinate being negated when you reflect across the x-axis."
                  />
                </Card>
              </div>
            )}

            {/* ───────────────────────────────────────
                PART III — Key Values from Geometry
            ─────────────────────────────────────── */}
            {part === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                <SummaryBox
                  intro="Two triangles give you every standard value. The circle's symmetry extends them to all quadrants. No table to memorize — reconstruct on demand."
                  points={[
                    "The 45-45-90 triangle (half a unit square) gives sin 45° = cos 45° = 1/√2.",
                    "The 30-60-90 triangle (half an equilateral triangle) gives sin 30° = cos 60° = 1/2 and sin 60° = cos 30° = √3/2.",
                    "Values in other quadrants follow from reflection: use the reference angle and apply the correct sign from the quadrant.",
                    "Rationalize: write 1/√2 as √2/2, and 1/√3 as √3/3, for cleaner final forms.",
                  ]}
                />

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Deriving the Two Triangles</Label>

                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 10 }}>
                    <strong style={{ fontWeight: 500, color: C.heading }}>Triangle 1 — 45-45-90:</strong> Take a unit square and cut it diagonally. The resulting triangle has two legs of length 1 and a hypotenuse of √2. Normalize to a unit hypotenuse by dividing everything by √2. Each leg is 1/√2 = √2/2.
                  </p>
                  <MathBlock>{"sin 45° = cos 45° = 1/√2 = √2/2 ≈ 0.707"}</MathBlock>

                  <div style={{ marginTop: 18 }}>
                    <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 10 }}>
                      <strong style={{ fontWeight: 500, color: C.heading }}>Triangle 2 — 30-60-90:</strong> Take an equilateral triangle of side 1 and cut it in half vertically. The resulting triangle has hypotenuse 1, short leg 1/2, and long leg √3/2 (by Pythagoras: 1² − (1/2)² = 3/4).
                    </p>
                    <MathBlock>{"sin 30° = cos 60° = 1/2\nsin 60° = cos 30° = √3/2 ≈ 0.866"}</MathBlock>
                  </div>
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Extending to Other Quadrants</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    For any angle θ outside the first quadrant, identify its <em>reference angle</em> — the acute angle between the terminal side and the x-axis — then apply the correct sign for the quadrant.
                  </p>
                  {[
                    { k: "sin(5π/6) = sin(π − π/6)", v: "Reference angle π/6. Q II: sin +. So sin(5π/6) = sin(π/6) = 1/2." },
                    { k: "cos(2π/3) = cos(π − π/3)", v: "Reference angle π/3. Q II: cos −. So cos(2π/3) = −cos(π/3) = −1/2." },
                    { k: "sin(4π/3) = sin(π + π/3)", v: "Reference angle π/3. Q III: sin −. So sin(4π/3) = −sin(π/3) = −√3/2." },
                    { k: "cos(7π/4) = cos(2π − π/4)", v: "Reference angle π/4. Q IV: cos +. So cos(7π/4) = cos(π/4) = √2/2." },
                  ].map(({ k, v }) => <InfoRow key={k} label={k} value={v} />)}
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Standard Value Table</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 14, color: C.dim, fontStyle: "italic", marginBottom: 14 }}>
                    Reconstructed from the two triangles above — do not memorize this table; derive it.
                  </p>
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", fontFamily: F.mono, fontSize: 11, fontWeight: 300 }}>
                      <thead>
                        <tr>
                          {["θ (deg)", "θ (rad)", "sin θ", "cos θ", "tan θ"].map((h, i) => (
                            <th key={i} style={{ padding: "8px 10px", textAlign: "center", color: C.dim, borderBottom: `1px solid ${C.border}`, fontWeight: 400, letterSpacing: "0.06em", fontSize: 10 }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["0°", "0", "0", "1", "0"],
                          ["30°", "π/6", "1/2", "√3/2", "1/√3"],
                          ["45°", "π/4", "√2/2", "√2/2", "1"],
                          ["60°", "π/3", "√3/2", "1/2", "√3"],
                          ["90°", "π/2", "1", "0", "—"],
                          ["180°", "π", "0", "−1", "0"],
                          ["270°", "3π/2", "−1", "0", "—"],
                        ].map((row, ri) => (
                          <tr key={ri}>
                            {row.map((v, ci) => (
                              <td key={ci} style={{ padding: "7px 10px", textAlign: "center", color: ci <= 1 ? C.accent : C.body, borderBottom: `1px solid ${C.border}` }}>{v}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>

                <HintBox variant="comp">
                  In competition problems, exact forms matter — never approximate. Rationalize denominators: 1/√2 → √2/2, 1/√3 → √3/3. When evaluating sin(120°), recognize the reference angle (60°) and quadrant sign (Q II, sin positive): sin(120°) = √3/2. When computing tan(150°): reference angle 30°, Q II (tan negative) → tan(150°) = −1/√3 = −√3/3. The speed comes from having the reference angle method automatic, not from memorizing a larger table.
                </HintBox>

                <Card>
                  <MCField
                    question="Without a calculator, what is the exact value of sin(5π/4)?"
                    choices={["√2/2", "−√2/2", "1/2", "−1/2"]}
                    correct={1}
                    diff="medium" pts={4}
                    explain="5π/4 = π + π/4, which is in Q III. The reference angle is π/4. In Q III, sin is negative. sin(π/4) = √2/2, so sin(5π/4) = −√2/2."
                  />
                </Card>
              </div>
            )}

            {/* ───────────────────────────────────────
                PART IV — The Sinusoidal Form
            ─────────────────────────────────────── */}
            {part === 3 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                <SummaryBox
                  intro="Every oscillation in physics — springs, pendula, sound, AC voltage — can be written in one standard form. Learning to read that form fluently is the core skill of this section."
                  points={[
                    "y = A · sin(ωt + φ): three parameters, three independent pieces of physical information.",
                    "A (amplitude) encodes the scale of oscillation — and the energy stored, which is proportional to A².",
                    "ω (angular frequency) encodes the system's natural rate — set by its physical properties, not initial conditions.",
                    "φ (phase) encodes initial conditions — where the system starts at t = 0.",
                    "Know cold: T = 2π/ω (period), f = ω/(2π) (frequency in Hz).",
                  ]}
                />

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>The General Form</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    From the animation: if a point rotates with angular velocity ω starting at angle φ at t = 0, its y-coordinate at time t is:
                  </p>
                  <MathBlock>
                    <span style={{ color: C.heading }}>y(t)</span>
                    {" = "}
                    <span style={{ color: C.accentAlt }}>A</span>
                    {" · sin("}
                    <span style={{ color: C.accent }}>ω</span>
                    {"t + "}
                    <span style={{ color: "#c8a0d4" }}>φ</span>
                    {")"}
                  </MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 14, color: C.dim, fontStyle: "italic", marginTop: 12 }}>
                    Adjust the sliders to see each parameter's effect. Then read the breakdown below.
                  </p>
                </Card>

                <SinusoidalExplorer />

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Parameter Breakdown</Label>

                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 10 }}>
                    <strong style={{ fontWeight: 500, color: C.accentAlt }}>A — Amplitude.</strong> The maximum displacement from equilibrium. On the graph, A is the vertical half-span. Physically, energy stored in the oscillation is proportional to A²: double the amplitude, quadruple the energy. A is set by how hard you push the system — it is an initial condition.
                  </p>

                  <Rule />

                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 10 }}>
                    <strong style={{ fontWeight: 500, color: C.accent }}>ω — Angular frequency.</strong> How fast the angle increases, in radians per second. It is determined by the system's physical structure:
                  </p>
                  <div style={{ marginLeft: 16, marginBottom: 12 }}>
                    <MathBlock>{"Spring-mass:  ω = √(k/m)\nSimple pendulum (small angle):  ω = √(g/L)"}</MathBlock>
                  </div>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    This is a crucial point: <em>ω is not set by initial conditions</em>. A stiff spring oscillates faster than a soft one regardless of how far you pull it. All pendula of the same length swing at the same rate regardless of the mass or starting angle (for small angles). This is isochronism, and it is why pendulum clocks work.
                  </p>
                  <InfoRow label="Period T" value="T = 2π/ω — time for one complete cycle." accent />
                  <InfoRow label="Frequency f" value="f = ω/(2π) = 1/T — cycles per second (Hz)." accent />
                  <InfoRow label="Angular freq ω" value="ω = 2πf = 2π/T — radians per second." accent />

                  <Rule />

                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 10 }}>
                    <strong style={{ fontWeight: 500, color: "#c8a0d4" }}>φ — Phase shift.</strong> The initial angle of the generating circle at t = 0. It encodes the starting conditions:
                  </p>
                  {[
                    { k: "φ = 0", v: "Starts at equilibrium (y = 0), moving in the positive direction. This is a sine wave in the usual sense." },
                    { k: "φ = π/2", v: "Starts at maximum (y = A) with zero velocity. The wave begins at its peak — this is a cosine." },
                    { k: "φ = −π/2", v: "Starts at minimum (y = −A). Released from maximum compression." },
                    { k: "φ = π/4", v: "Starts at y = A/√2, moving in the positive direction. Intermediate initial condition." },
                  ].map(({ k, v }) => <InfoRow key={k} label={k} value={v} />)}
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 10 }}>Reading a Sinusoidal Equation</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    Given: <span style={{ fontFamily: F.mono, fontSize: 13, color: C.accent }}>x(t) = 0.4 · sin(6t + π/3) m</span>
                  </p>
                  {[
                    { k: "Amplitude", v: "A = 0.4 m (coefficient of the sine)" },
                    { k: "Angular frequency", v: "ω = 6 rad/s (coefficient of t)" },
                    { k: "Period", v: "T = 2π/6 = π/3 ≈ 1.05 s" },
                    { k: "Frequency", v: "f = 6/(2π) ≈ 0.955 Hz" },
                    { k: "Phase", v: "φ = π/3 rad" },
                    { k: "Position at t = 0", v: "x(0) = 0.4 · sin(π/3) = 0.4 · (√3/2) = 0.2√3 ≈ 0.346 m" },
                  ].map(({ k, v }) => <InfoRow key={k} label={k} value={v} />)}
                </Card>

                <HintBox variant="comp">
                  <p>When two sinusoids of the same frequency are added, the result is another sinusoid at the same frequency. The amplitude and phase of the sum are found by <em>phasor addition</em>: represent each wave as a vector of length A at angle φ, add the vectors, and read off the resultant length and angle.</p>
                  <p style={{ marginTop: 8 }}>
                    A₁sin(ωt + φ₁) + A₂sin(ωt + φ₂) = A sin(ωt + φ), where the phasor sum gives A and φ. This is the mechanism behind wave interference, beats, and resonance — three of the most important phenomena you will encounter in waves and electromagnetism.
                  </p>
                </HintBox>

                <Card>
                  <MCField
                    question="A spring-mass system is released from rest at maximum compression. Which sinusoidal form correctly describes its position x(t), with A > 0 and equilibrium at x = 0?"
                    choices={[
                      "x(t) = A · sin(ωt)",
                      "x(t) = A · sin(ωt + π/2)",
                      "x(t) = A · sin(ωt − π)",
                      "x(t) = A · sin(ωt + π)",
                    ]}
                    correct={1}
                    diff="medium" pts={4}
                    explain="Released from rest at maximum compression means at t = 0: position = A (maximum displacement) and velocity = 0. sin(ωt + π/2) evaluated at t = 0 gives sin(π/2) = 1, so x(0) = A. The velocity is ωA·cos(ωt + π/2); at t = 0 this gives ωA·cos(π/2) = 0. Both initial conditions match. Note that sin(ωt + π/2) = cos(ωt), so a cosine also correctly describes this initial condition."
                  />
                </Card>
              </div>
            )}

            {/* ───────────────────────────────────────
                PART V — The Pythagorean Identity
            ─────────────────────────────────────── */}
            {part === 4 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                <SummaryBox
                  intro="The most used identity in trigonometry is not a trig fact at all — it is the Pythagorean theorem applied to the unit circle."
                  points={[
                    "sin²θ + cos²θ = 1 is the equation x² + y² = 1 (unit circle) with x = cos θ and y = sin θ.",
                    "Dividing by cos²θ or sin²θ gives two more equivalent forms involving tan, sec, cot, csc.",
                    "In oscillatory physics, this identity encodes conservation of energy across kinetic and potential.",
                    "It is the algebraic bridge between sin and cos — knowing one determines the other up to sign.",
                  ]}
                />

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Derivation</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    A point on the unit circle satisfies the circle equation — which you derived from the Pythagorean theorem in coordinate geometry:
                  </p>
                  <MathBlock>{"x² + y² = 1"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14, marginBottom: 14 }}>
                    Since x = cos θ and y = sin θ for a point on the unit circle, substitution gives:
                  </p>
                  <MathBlock>
                    <span style={{ color: C.accent }}>sin²θ + cos²θ = 1</span>
                  </MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 14, color: C.dim, marginTop: 12, lineHeight: 1.65 }}>
                    This is not a trigonometric discovery. It is the Pythagorean theorem. The identity holds for every angle θ because the point always stays on the circle.
                  </p>
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Three Equivalent Forms</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    Starting from sin²θ + cos²θ = 1, divide through by cos²θ and then by sin²θ to obtain two more forms. Each is useful in different problem types:
                  </p>
                  <MathBlock>{"sin²θ + cos²θ = 1           (base form)\ntan²θ + 1 = sec²θ            (divide by cos²θ)\n1 + cot²θ = csc²θ            (divide by sin²θ)"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 14, color: C.dim, marginTop: 12, lineHeight: 1.65 }}>
                    Where tan θ = sin θ/cos θ, cot θ = cos θ/sin θ, sec θ = 1/cos θ, csc θ = 1/sin θ. These derived functions appear in calculus and competition problems; for now, know how to produce them from the base form.
                  </p>
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Using the Identity</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    The identity's main practical use is finding one trig value given another:
                  </p>
                  {[
                    { k: "Given sin θ = 3/5 (Q I)", v: "cos²θ = 1 − 9/25 = 16/25, so cos θ = 4/5 (positive in Q I)." },
                    { k: "Given cos θ = −2/3 (Q II)", v: "sin²θ = 1 − 4/9 = 5/9, so sin θ = √5/3 (positive in Q II)." },
                    { k: "Given tan θ = 2 (Q III)", v: "sec²θ = tan²θ + 1 = 5, so cos θ = −1/√5 (negative in Q III)." },
                  ].map(({ k, v }) => <InfoRow key={k} label={k} value={v} />)}
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Energy Conservation in SHM</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    For a spring oscillating as x(t) = A·cos(ωt), the velocity is ẋ(t) = −Aω·sin(ωt). Total mechanical energy:
                  </p>
                  <MathBlock>{"E = ½kx² + ½mv²\n  = ½k(A cos ωt)² + ½m(−Aω sin ωt)²\n  = ½kA²cos²(ωt) + ½mω²A²sin²(ωt)"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14, marginBottom: 14 }}>
                    Since ω² = k/m, the second term becomes ½kA²sin²(ωt). Therefore:
                  </p>
                  <MathBlock>{"E = ½kA²(cos²ωt + sin²ωt) = ½kA²"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 14, color: C.dim, marginTop: 10, lineHeight: 1.65 }}>
                    The total energy is constant and equals ½kA². The Pythagorean identity is what makes the cos² + sin² terms collapse to 1 — energy conservation is built into the geometry of the circle.
                  </p>
                </Card>

                <HintBox variant="comp">
                  <p>The deepest view of this identity comes from Euler's formula: e^(iθ) = cos θ + i·sin θ. The identity sin²θ + cos²θ = 1 then reads as |e^(iθ)|² = 1 — the complex exponential always lies on the unit circle. In this view, sin and cos are not two separate functions but the real and imaginary parts of a single rotating complex number. This is why electrical engineers write impedances in complex form, why quantum wavefunctions are complex, and why the Fourier transform works: all oscillations are complex exponentials, and the unit circle is the organizing principle.</p>
                </HintBox>

                <Card>
                  <MCField
                    question="Point P is in Q II with sin θ = 5/13. Using the Pythagorean identity, what is cos θ?"
                    choices={["12/13", "−12/13", "8/13", "−5/12"]}
                    correct={1}
                    diff="medium" pts={4}
                    explain="cos²θ = 1 − sin²θ = 1 − 25/169 = 144/169, so |cos θ| = 12/13. In Q II, the x-coordinate is negative, so cos θ = −12/13."
                  />
                </Card>

                <Card style={{ background: C.elevated }}>
                  <Label style={{ display: "block", marginBottom: 10 }}>Lecture Complete</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 14, color: C.dim, lineHeight: 1.7 }}>
                    You can now: derive sin/cos geometrically from circular motion, state all standard values from two triangles and quadrant symmetry, read every parameter from a sinusoidal equation, derive and apply the Pythagorean identity, and connect it to energy conservation. Switch to <em>practice</em> to test these, or <em>reference</em> for a compact formula sheet.
                  </p>
                </Card>
              </div>
            )}

            {/* Part navigation */}
            <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
              {part > 0
                ? <button onClick={() => setPart(p => p - 1)} style={navBtn(false)}>← {PART_LABELS[part - 1]}</button>
                : <span />
              }
              {part < 4
                ? <button onClick={() => setPart(p => p + 1)} style={navBtn(true)}>{PART_LABELS[part + 1]} →</button>
                : <button onClick={() => setTab("practice")} style={navBtn(true)}>Practice →</button>
              }
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════
            PRACTICE TAB
        ══════════════════════════════════════════════ */}
        {tab === "practice" && (
          <div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Card>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <Label style={{ display: "block", marginBottom: 6 }}>Problem Set · Trigonometry Foundations</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 13, color: C.dim, fontStyle: "italic" }}>5 problems · Easy → Medium → Hard · 18 pts total</p>
                </div>
              </div>
            </Card>

            {/* P1 — Easy */}
            <Card>
              <MCField
                question="Which of the following equals sin(π/3)?"
                choices={["1/2", "√2/2", "√3/2", "1"]}
                correct={2}
                diff="easy" pts={3}
                explain="π/3 = 60°. From the 30-60-90 triangle: sin(60°) = √3/2. Note that 1/2 = sin(30°), and √2/2 = sin(45°). No table needed — derive from the triangle."
              />
            </Card>

            {/* P2 — Easy */}
            <Card>
              <MCField
                question="A point P is at angle θ = 3π/2 on the unit circle. Which statement is correct?"
                choices={[
                  "P is at (0, −1); sin(3π/2) = −1 and cos(3π/2) = 0",
                  "P is at (−1, 0); sin(3π/2) = 0 and cos(3π/2) = −1",
                  "P is at (0, 1); sin(3π/2) = 1 and cos(3π/2) = 0",
                  "P is at (1, 0); sin(3π/2) = 0 and cos(3π/2) = 1",
                ]}
                correct={0}
                diff="easy" pts={3}
                explain="3π/2 = 270°. Going counterclockwise from (1,0): at π/2 we reach (0,1), at π we reach (−1,0), at 3π/2 we reach (0,−1). Reading off: sin = y = −1, cos = x = 0."
              />
            </Card>

            {/* P3 — Medium */}
            <Card>
              <MCField
                question="The wave y = 2·sin(πt − π/2) can equivalently be written as:"
                choices={["−2·cos(πt)", "2·cos(πt)", "2·cos(πt − π/2)", "−2·sin(πt)"]}
                correct={0}
                diff="medium" pts={4}
                explain="Use the identity sin(x − π/2) = −cos(x). This follows from the angle-sum formula: sin(x)cos(π/2) − cos(x)sin(π/2) = 0 − cos(x) = −cos(x). With x = πt: sin(πt − π/2) = −cos(πt), so y = 2·(−cos(πt)) = −2·cos(πt)."
              />
            </Card>

            {/* P4 — Medium */}
            <Card>
              <MCField
                question="A pendulum is described by θ(t) = 0.2·sin(3t + π/4) radians. What is its angular frequency ω, period T, and the angle at t = 0?"
                choices={[
                  "ω = 3 rad/s, T = 2π/3 s, θ(0) = 0.2·sin(π/4) = √2/10 rad",
                  "ω = π/4 rad/s, T = 8 s, θ(0) = 0.2 rad",
                  "ω = 3 rad/s, T = π/3 s, θ(0) = 0.2 rad",
                  "ω = 0.2 rad/s, T = 2π/0.2 s, θ(0) = sin(π/4) rad",
                ]}
                correct={0}
                diff="medium" pts={4}
                explain="Read directly: A = 0.2, ω = 3 (coefficient of t), φ = π/4. Period T = 2π/ω = 2π/3 s. At t = 0: θ(0) = 0.2·sin(π/4) = 0.2·(√2/2) = √2/10 ≈ 0.141 rad."
              />
            </Card>

            {/* P5 — Hard */}
            <Card>
              <INTField
                question="Given sin θ = 5/13 with θ in Q I, compute the integer 169 · cos²θ."
                answer={144}
                diff="hard" pts={4}
                hint="Apply the Pythagorean identity: cos²θ = 1 − sin²θ = 1 − 25/169 = 144/169. Multiply by 169."
              />
            </Card>
          </div>
        )}

        {/* ══════════════════════════════════════════════
            REFERENCE TAB
        ══════════════════════════════════════════════ */}
        {tab === "reference" && (
          <div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Sinusoidal Form</Label>
              <MathBlock>
                <span style={{ color: C.heading }}>y(t)</span>
                {" = "}
                <span style={{ color: C.accentAlt }}>A</span>
                {" · sin("}
                <span style={{ color: C.accent }}>ω</span>
                {"t + "}
                <span style={{ color: "#c8a0d4" }}>φ</span>
                {")"}
              </MathBlock>
              <div style={{ marginTop: 14 }}>
                {[
                  { k: "A — amplitude", v: "max displacement; energy ∝ A²" },
                  { k: "ω — angular frequency", v: "rad/s; set by system properties" },
                  { k: "φ — phase", v: "rad; encodes initial conditions" },
                  { k: "T = 2π/ω", v: "period in seconds" },
                  { k: "f = ω/(2π)", v: "frequency in Hz; f = 1/T" },
                  { k: "x(0) = A·sin(φ)", v: "initial position" },
                ].map(({ k, v }) => <InfoRow key={k} label={k} value={v} />)}
              </div>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Key Identities</Label>
              <MathBlock>{"sin²θ + cos²θ = 1              (Pythagorean)\ntan²θ + 1    = sec²θ           (÷ cos²θ)\n1 + cot²θ    = csc²θ           (÷ sin²θ)\n\ncos θ = sin(θ + π/2)           (phase lead)\nsin θ = cos(θ − π/2)           (phase lag)\n\nsin(−θ) = −sin θ               (sin is odd)\ncos(−θ) =  cos θ               (cos is even)\n\nsin(π − θ) =  sin θ            (Q I → Q II)\ncos(π − θ) = −cos θ            (Q I → Q II)\nsin(π + θ) = −sin θ            (Q I → Q III)\ncos(π + θ) = −cos θ            (Q I → Q III)"}</MathBlock>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Standard Values</Label>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", fontFamily: F.mono, fontSize: 11, fontWeight: 300 }}>
                  <thead>
                    <tr>
                      {["θ (deg)", "θ (rad)", "sin θ", "cos θ"].map((h, i) => (
                        <th key={i} style={{ padding: "8px 10px", textAlign: "center", color: C.dim, borderBottom: `1px solid ${C.border}`, fontWeight: 400, fontSize: 10 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["0°","0","0","1"],
                      ["30°","π/6","1/2","√3/2"],
                      ["45°","π/4","√2/2","√2/2"],
                      ["60°","π/3","√3/2","1/2"],
                      ["90°","π/2","1","0"],
                      ["120°","2π/3","√3/2","−1/2"],
                      ["135°","3π/4","√2/2","−√2/2"],
                      ["150°","5π/6","1/2","−√3/2"],
                      ["180°","π","0","−1"],
                      ["270°","3π/2","−1","0"],
                      ["360°","2π","0","1"],
                    ].map((row, ri) => (
                      <tr key={ri}>
                        {row.map((v, ci) => (
                          <td key={ci} style={{ padding: "7px 10px", textAlign: "center", color: ci <= 1 ? C.accent : C.body, borderBottom: `1px solid ${C.border}` }}>{v}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Reconstruction Method</Label>
              <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 10 }}>
                To find sin or cos of any standard angle without a table:
              </p>
              {[
                { k: "Step 1", v: "Find the reference angle: the acute angle between the terminal side and the x-axis." },
                { k: "Step 2", v: "Evaluate sin/cos of the reference angle using the 30-60-90 or 45-45-90 triangle." },
                { k: "Step 3", v: "Apply the sign for the quadrant: Q I (+,+), Q II (−,+), Q III (−,−), Q IV (+,−)." },
              ].map(({ k, v }) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Physical Correspondences</Label>
              {[
                { k: "Spring: ω = √(k/m)", v: "k is spring constant (N/m), m is mass (kg). Stiffer spring → higher ω → shorter period." },
                { k: "Pendulum: ω = √(g/L)", v: "g is gravitational acceleration, L is length. Shorter pendulum → shorter period." },
                { k: "Energy: E = ½kA²", v: "For spring-mass. Total energy set by amplitude alone; constant throughout motion." },
                { k: "x²/A² + v²/(Aω)² = 1", v: "Position-velocity relation at any instant (Pythagorean identity in disguise)." },
              ].map(({ k, v }) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

          </div>
        )}

        {/* Footer */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${C.border}`, paddingTop: 18, display: "flex", justifyContent: "space-between" }}>
          <Mono style={{ fontSize: 9 }}>trigonometry · foundations · periodic motion</Mono>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="../index.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>← Index</a>
            <a href="../highscores.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>Highscores →</a>
          </div>
        </div>

      </div>
    </>
  );
}
