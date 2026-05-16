import { useState, useRef, useEffect } from "react";
import { C, F, Geo, GLOBAL_CSS, Card, Label, Mono, Dots, Tag, Rule, MathBlock, InfoRow, SummaryBox, HintBox, MCField, INTField } from "../project-template-files/block-kit.jsx";

// ── Wave Visualizer ─────────────────────────────────────────

function WaveVisualizer() {
  const cvRef = useRef(null);
  const fRef = useRef(1), ARef = useRef(1);
  const needsRedraw = useRef(true);
  const [freq, setFreq] = useState(1);
  const [amp, setAmp] = useState(1);

  useEffect(() => {
    const cv = cvRef.current; if (!cv) return;
    const ctx = cv.getContext("2d"); const W = 640, H = 200;

    function draw() {
      const A = ARef.current, f = fRef.current;
      ctx.clearRect(0, 0, W, H);
      const cy = H / 2, ampPx = A * 70;

      // Axes
      ctx.strokeStyle = "rgba(126,184,212,0.15)"; ctx.lineWidth = 0.5;
      ctx.beginPath(); ctx.moveTo(30, cy); ctx.lineTo(W - 10, cy); ctx.stroke();

      // λ markers
      const lambda = W / (f * 4);
      ctx.strokeStyle = "rgba(126,184,212,0.08)"; ctx.setLineDash([4, 4]);
      for (let x = 40; x < W - 10; x += lambda) {
        ctx.beginPath(); ctx.moveTo(x, cy - ampPx - 10); ctx.lineTo(x, cy + ampPx + 10); ctx.stroke();
      }
      ctx.setLineDash([]);

      // Wave
      ctx.beginPath(); ctx.strokeStyle = C.accent; ctx.lineWidth = 2;
      for (let px = 40; px < W - 10; px++) {
        const t = (px - 40) / (W - 50);
        const y = cy - Math.sin(f * 2 * Math.PI * t) * ampPx;
        px === 40 ? ctx.moveTo(px, y) : ctx.lineTo(px, y);
      }
      ctx.stroke();

      // Labels
      ctx.font = "10px monospace"; ctx.fillStyle = "rgba(239,239,239,0.34)"; ctx.textAlign = "right";
      ctx.fillText(`λ = ${(1 / f).toFixed(1)}`, W - 14, 18);
      ctx.fillText(`f = ${f.toFixed(1)} Hz`, W - 14, 32);
      ctx.fillText(`A = ${A.toFixed(1)}`, W - 14, 46);
    }

    let rafId;
    function loop() { if (needsRedraw.current) { draw(); needsRedraw.current = false; } rafId = requestAnimationFrame(loop); }
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const update = (setter, ref, val) => { setter(val); ref.current = val; needsRedraw.current = true; };

  return (
    <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: "4px", overflow: "hidden" }}>
      <canvas ref={cvRef} width={640} height={200} style={{ display: "block", width: "100%" }} />
      <div style={{ padding: "14px 16px", borderTop: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
            <Mono style={{ color: C.accent, fontSize: 11 }}>A — Amplitude</Mono>
            <Mono style={{ color: C.heading, fontSize: 11 }}>{amp.toFixed(1)}</Mono>
          </div>
          <input type="range" min="0.2" max="1.5" step="0.1" value={amp} onChange={e => update(setAmp, ARef, parseFloat(e.target.value))} />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
            <Mono style={{ color: C.accent, fontSize: 11 }}>f — Frequency (Hz)</Mono>
            <Mono style={{ color: C.heading, fontSize: 11 }}>{freq.toFixed(1)}</Mono>
          </div>
          <input type="range" min="0.5" max="4" step="0.1" value={freq} onChange={e => update(setFreq, fRef, parseFloat(e.target.value))} />
        </div>
      </div>
    </div>
  );
}

// ── Main ────────────────────────────────────────────────────

const MAIN_TABS = ["lecture", "practice", "reference"];
const PART_LABELS = ["I · Wave Properties", "II · SHM", "III · Superposition & Sound"];

export default function G10WavesL01() {
  const [tab, setTab] = useState("lecture");
  const [part, setPart] = useState(0);

  const tabBtn = t => ({
    fontFamily: F.serif, fontSize: 13, padding: "5px 13px", borderRadius: "4px",
    border: `1px solid ${tab === t ? C.accent+"55" : "transparent"}`,
    background: "transparent", color: tab === t ? C.accent : C.subtle, cursor: "pointer", transition: "all 0.2s",
  });

  const partBtn = i => ({
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
          <a href="index.html" style={{ color: C.dim, textDecoration: "none" }}>← Index</a>
          <span style={{ color: C.muted }}>|</span>
          <a href="highscores.html" style={{ color: C.dim, textDecoration: "none" }}>Highscores</a>
        </div>

        {/* Header */}
        <div className="bk-fade" style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
            <Tag>Physics</Tag><Tag accent>Waves</Tag><Tag>SHM</Tag>
          </div>
          <h1 style={{ fontFamily: F.serif, fontSize: "clamp(26px,4vw,42px)", fontWeight: 500, color: C.heading, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 10, textShadow: `0 0 24px ${C.glowStr}` }}>
            Waves &<br /><em>Simple Harmonic Motion</em>
          </h1>
          <p style={{ fontFamily: F.serif, fontSize: 15, color: C.dim, fontStyle: "italic" }}>
            All periodic phenomena — pendula, springs, sound, light — share one mathematical structure. Understand it once, apply it everywhere.
          </p>
        </div>

        {/* Overview */}
        <Card style={{ marginBottom: 24 }}>
          <Label style={{ display: "block", marginBottom: 12 }}>What This Covers</Label>
          <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
            A wave is a disturbance that propagates energy through a medium without transporting matter. A simple harmonic oscillator is a system where restoring force is proportional to displacement — the purest form of oscillation. Together, these two concepts explain everything from the sound of a violin to the light from a distant galaxy.
          </p>
          <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
            This lecture assumes you have completed the <strong style={{ fontWeight: 500, color: C.accent }}>Trig Bridge</strong> — the sinusoidal form y = A·sin(ωt + φ) and the language of periodic motion are prerequisite. We build the physics on that foundation.
          </p>
          <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
            {["I · Wave Properties", "II · SHM", "III · Superposition & Sound"].map((p, i) => <Tag key={i}>{p}</Tag>)}
          </div>
        </Card>

        {/* Tab nav */}
        <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
          {MAIN_TABS.map(t => <button key={t} onClick={() => setTab(t)} style={tabBtn(t)}>{t}</button>)}
        </div>
        <div style={{ borderTop: `1px solid ${C.accent}44`, marginBottom: 28 }} />

        {/* ═══════════════ LECTURE ═══════════════ */}
        {tab === "lecture" && (
          <div className="bk-fade">
            <div style={{ display: "flex", gap: 3, marginBottom: 22, flexWrap: "wrap" }}>
              {PART_LABELS.map((lbl, i) => <button key={i} onClick={() => setPart(i)} style={partBtn(i)}>{lbl}</button>)}
            </div>

            {/* ── PART I: Wave Properties ── */}
            {part === 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                <SummaryBox
                  intro="A wave is described by its amplitude, wavelength, frequency, and speed. These four quantities are locked together by the wave equation v = fλ. Change one, and something else must adjust."
                  points={[
                    "v = fλ is the fundamental wave equation — speed equals frequency times wavelength.",
                    "Frequency f is set by the source; speed v is set by the medium; wavelength λ adjusts to satisfy v = fλ.",
                    "Transverse waves (string, EM): displacement perpendicular to propagation. Longitudinal waves (sound): displacement parallel to propagation.",
                    "Intensity ∝ A² — double the amplitude, quadruple the energy carried per second.",
                  ]}
                />

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>The Wave Equation</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    Consider a wave on a string. A single crest travels a distance of one wavelength λ in one period T. Since speed = distance/time:
                  </p>
                  <MathBlock>{"v = λ / T         since T = 1 / f\nv = f · λ          fundamental wave equation"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14, marginBottom: 14 }}>
                    This equation holds for <em>all</em> waves — water waves, sound, light, seismic waves. The speed v depends on the medium, not the source. When a wave crosses from one medium to another, its speed changes, its wavelength changes, but its frequency stays the same (the source is still the source).
                  </p>
                  <InfoRow label="v = fλ" value="Wave speed = frequency × wavelength — universal" accent />
                  <InfoRow label="Frequency f" value="Set by source; unchanged across media boundaries" />
                  <InfoRow label="Speed v" value="Set by medium properties (tension, density, temperature)" />
                  <InfoRow label="Wavelength λ" value="Adjusts: λ = v/f — the dependent variable" />
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Wave Visualizer</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    Adjust amplitude and frequency. Observe: increasing f packs more cycles into the same horizontal space (wavelength decreases). Changing amplitude changes the vertical scale only — frequency and wavelength are independent of amplitude.
                  </p>
                  <WaveVisualizer />
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Wave Speed in Different Media</Label>
                  {[
                    { k: "String under tension", v: "v = √(T/μ) — T is tension (N), μ is linear density (kg/m)" },
                    { k: "Sound in air (20°C)", v: "v ≈ 343 m/s — increases with temperature" },
                    { k: "Sound in water", v: "v ≈ 1480 m/s — denser medium, faster sound" },
                    { k: "Light in vacuum", v: "c = 3.00 × 10⁸ m/s — the universal speed limit" },
                    { k: "Light in medium", v: "v = c/n — n is refractive index (> 1)" },
                  ].map(({ k, v }) => <InfoRow key={k} label={k} value={v} />)}
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Intensity and the Inverse-Square Law</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    A wave carries energy. Its intensity I is the power transmitted per unit area perpendicular to the direction of propagation:
                  </p>
                  <MathBlock>{"I = P / A            power per unit area (W/m²)\nI ∝ A²              intensity ∝ amplitude²\nI ∝ 1/r²            spherical waves"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14 }}>
                    The 1/r² drop-off is why distant sounds are faint and why the Sun — a sphere 1.4 million km across — appears as a point in the sky. Energy is conserved; it simply spreads over an ever-larger spherical surface.
                  </p>
                </Card>

                <HintBox variant="comp">
                  <p>The wave equation ∂²y/∂t² = v²·∂²y/∂x² is the master equation governing all classical waves. Its solutions are any functions of the form f(x ± vt) — the ± determines direction. The sinusoidal solution y = A·sin(kx − ωt) is a special case, but any shape propagates without distortion in a dispersionless medium. When dispersion is present (v depends on f), different frequency components travel at different speeds, and the wave packet broadens — this is why tsunamis (long wavelength) travel so much faster than wind waves.</p>
                </HintBox>

                <Card>
                  <MCField
                    question="A wave on a string has frequency f = 50 Hz and wavelength λ = 0.4 m. What is the wave speed?"
                    choices={["0.008 m/s", "20 m/s", "125 m/s", "200 m/s"]}
                    correct={1} diff="easy" pts={3}
                    explain="v = f·λ = (50 Hz)(0.4 m) = 20 m/s. The wave equation is multiplication; no other operation needed."
                  />
                </Card>
              </div>
            )}

            {/* ── PART II: SHM ── */}
            {part === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                <SummaryBox
                  intro="Simple harmonic motion is the projection of uniform circular motion onto a line. Every SHM system has a natural frequency set by its physical structure — not by how hard you push it."
                  points={[
                    "SHM occurs when restoring force ∝ −displacement: F = −kx. The minus sign is the physics — it returns the system to equilibrium.",
                    "Angular frequency ω = √(k/m) for a spring, ω = √(g/L) for a pendulum. These determine period; amplitude determines energy.",
                    "Position, velocity, acceleration are all sinusoidal with fixed phase relationships — v leads x by π/2, a leads v by π/2.",
                    "Total energy is constant: E = ½kA². Kinetic and potential exchange continuously, their sum remains unchanged.",
                  ]}
                />

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>The Spring-Mass System</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    Hooke's Law: F = −kx. The restoring force is proportional to displacement and directed toward equilibrium. Combine with Newton's Second Law:
                  </p>
                  <MathBlock>{"F = −kx  =  ma\n−kx  =  m(d²x/dt²)\nd²x/dt²  =  −(k/m)x"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14, marginBottom: 14 }}>
                    This is a differential equation whose solution is x(t) = A·sin(ωt + φ) where ω = √(k/m). The system selects the sinusoidal form — we do not impose it.
                  </p>
                  <InfoRow accent label="ω = √(k/m)" value="Angular frequency — set by stiffness k and mass m" />
                  <InfoRow accent label="T = 2π√(m/k)" value="Period — stiffer spring → shorter period; more mass → longer period" />
                  <InfoRow label="x(t) = A·sin(ωt + φ)" value="Position — sinusoidal with amplitude A" />
                  <InfoRow label="v(t) = Aω·cos(ωt + φ)" value="Velocity — leads position by π/2 (quarter-cycle)" />
                  <InfoRow label="a(t) = −Aω²·sin(ωt + φ)" value="Acceleration — opposite to displacement (restoring)" />
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>The Simple Pendulum</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    For small angles (θ &lt; ~15°), sin θ ≈ θ in radians, and the pendulum's restoring torque τ = −mgL·θ yields:
                  </p>
                  <MathBlock>{"ω = √(g/L)          angular frequency\nT = 2π√(L/g)        period — independent of mass!"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14, marginBottom: 14 }}>
                    This is the principle of <em>isochronism</em> — all pendula of the same length swing with the same period regardless of mass or amplitude (for small angles). Galileo discovered this watching a chandelier in Pisa Cathedral, timing it against his own pulse. It is why pendulum clocks work: the period is determined by geometry alone.
                  </p>
                  <Rule />
                  <Label style={{ display: "block", marginBottom: 10 }}>Pendulum Physics in One Equation</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 8 }}>
                    The period formula T = 2π√(L/g) encodes three remarkable facts:
                  </p>
                  {[
                    { k: "Mass independence", v: "A 1 kg bob and a 100 kg bob have the same period. Inertia (resistance to motion) and gravitational force both scale with mass — they cancel." },
                    { k: "geometric determination", v: "Period depends only on L and g. To halve the period, quarter the length (T² ∝ L)." },
                    { k: "g as a measurable", v: "Measure T and L precisely, and you can determine g to within 1%. This is how early geodesists mapped Earth's gravitational field." },
                  ].map(({ k, v }) => <InfoRow key={k} label={k} value={v} />)}
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Energy in SHM</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    At any instant, the total mechanical energy is the sum of kinetic and potential:
                  </p>
                  <MathBlock>{"E = ½mv² + ½kx²\n  = ½m(Aω·cos ωt)² + ½k(A·sin ωt)²\n  = ½kA²(cos²ωt + sin²ωt)\n  = ½kA²              (constant!)"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 14, color: C.dim, marginTop: 10, lineHeight: 1.65 }}>
                    The Pythagorean identity cos²ωt + sin²ωt = 1 makes energy conservation automatic. This is why the trig bridge matters — the math and physics are the same thing.
                  </p>
                </Card>

                <HintBox variant="comp">
                  <p>For large-angle pendula, sin θ ≠ θ and the period becomes amplitude-dependent: T = 2π√(L/g)·[1 + (1/16)θ₀² + ...]. This is an example of <em>anharmonic</em> oscillation. Numerical solutions or elliptic integrals are required for exact values. In competition problems, always check whether the small-angle approximation is justified — if the initial angle exceeds ~20°, the standard T = 2π√(L/g) is measurably wrong.</p>
                </HintBox>

                <Card>
                  <INTField
                    question="A pendulum of length L = 1.0 m swings with small amplitude on Earth (g = 9.8 m/s²). Compute its period in seconds, rounded to the nearest integer. Use T = 2π√(L/g) with π ≈ 3.14."
                    answer={2} diff="medium" pts={4}
                    hint="T = 2π√(1.0/9.8) = 2·3.14·√(0.102) ≈ 6.28·0.319 ≈ 2.0 s. A 1-meter pendulum has a period of about 2 seconds — a useful benchmark."
                  />
                </Card>
              </div>
            )}

            {/* ── PART III: Superposition & Sound ── */}
            {part === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                <SummaryBox
                  intro="When two or more waves meet, they superpose — the resultant displacement at any point is the algebraic sum of individual displacements. This principle explains interference, standing waves, and beats."
                  points={[
                    "Superposition principle: y(x,t) = y₁(x,t) + y₂(x,t). Waves pass through each other unchanged.", "Constructive interference occurs when crests align — amplitudes add. Destructive interference when crest meets trough — amplitudes cancel.",
                    "Standing waves form when incident and reflected waves of the same frequency superpose. Nodes (zero displacement) and antinodes (maximum displacement) are stationary.",
                    "Sound is a longitudinal pressure wave. Its speed in air depends on temperature: v = 331 + 0.6·T(°C) m/s.",
                  ]}
                />

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Superposition of Two Waves</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    Consider two identical sinusoidal waves traveling in opposite directions:
                  </p>
                  <MathBlock>{"y₁ = A·sin(kx − ωt)      rightward\ny₂ = A·sin(kx + ωt)      leftward\n\ny = y₁ + y₂ = 2A·sin(kx)·cos(ωt)"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14, marginBottom: 14 }}>
                    The result is a <strong style={{ fontWeight: 500, color: C.accent }}>standing wave</strong>. The spatial part sin(kx) determines where the amplitude is maximum (antinodes: kx = π/2, 3π/2, ...) or zero (nodes: kx = 0, π, 2π, ...). The temporal part cos(ωt) means every point oscillates at the same frequency — but with amplitude set by position.
                  </p>
                  <InfoRow accent label="Nodes" value="kx = nπ → x = nλ/2 — no displacement ever" />
                  <InfoRow accent label="Antinodes" value="kx = (n+½)π → x = (2n+1)λ/4 — maximum oscillation" />
                  <InfoRow label="Node spacing" value="λ/2 between adjacent nodes" />
                  <InfoRow label="Standing wave condition" value="L = n·λ/2 for a string fixed at both ends" />
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Sound Waves</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    Sound is a longitudinal pressure wave. Molecules oscillate parallel to the direction of propagation, creating compressions (high pressure) and rarefactions (low pressure). The speed of sound in air at temperature T (in °C):
                  </p>
                  <MathBlock>{"v = 331 + 0.6·T°C   m/s\n\nv ≈ 343 m/s at 20°C (room temperature)"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14, marginBottom: 14 }}>
                    Sound exhibits all wave phenomena: reflection (echoes), refraction (temperature gradients bend sound), diffraction (sound bends around corners — why you can hear someone in the next room through an open door), and interference (noise-canceling headphones destructively interfere with ambient sound).
                  </p>
                </Card>

                <Card>
                  <Label style={{ display: "block", marginBottom: 14 }}>Beats</Label>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                    When two waves of slightly different frequencies superpose, the amplitude modulates at the difference frequency:
                  </p>
                  <MathBlock>{"y₁ = A·sin(2πf₁t)\ny₂ = A·sin(2πf₂t)\n\ny = y₁ + y₂ = 2A·cos(2π·(f₁−f₂)/2·t)·sin(2π·(f₁+f₂)/2·t)"}</MathBlock>
                  <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14, marginBottom: 14 }}>
                    The beat frequency is <strong style={{ fontWeight: 500, color: C.accent }}>f_beat = |f₁ − f₂|</strong> — the rate at which the amplitude rises and falls. Musicians use beats to tune instruments: when the beat frequency reaches zero, the two notes are in unison.
                  </p>
                </Card>

                <HintBox variant="comp">
                  <p><strong>Doppler Effect:</strong> When a source moves relative to an observer, the observed frequency shifts. For sound: f' = f·(v ± v_obs)/(v ∓ v_src). The signs follow one rule: frequency rises when source and observer approach each other, falls when they recede. The Mach number M = v_src/v_sound characterizes shock waves — when M &gt; 1, the source outruns its own sound waves, producing a sonic boom. For light (relativistic Doppler): f' = f·√((1±β)/(1∓β)) where β = v/c. This is how we measure the expansion of the universe — the redshift of distant galaxies.</p>
                </HintBox>

                <Card>
                  <MCField
                    question="Two sound waves of frequencies 440 Hz and 444 Hz are played simultaneously. What beat frequency is heard?"
                    choices={["2 Hz", "4 Hz", "442 Hz", "884 Hz"]}
                    correct={1} diff="easy" pts={3}
                    explain="Beat frequency = |f₁ − f₂| = |444 − 440| = 4 Hz. The listener hears a tone at the average frequency (442 Hz) whose loudness pulses 4 times per second."
                  />
                </Card>
              </div>
            )}

            {/* Part nav */}
            <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
              {part > 0 ? <button onClick={() => setPart(p => p - 1)} style={navBtn(false)}>← {PART_LABELS[part - 1]}</button> : <span />}
              {part < 2 ? <button onClick={() => setPart(p => p + 1)} style={navBtn(true)}>{PART_LABELS[part + 1]} →</button> : <button onClick={() => setTab("practice")} style={navBtn(true)}>Practice →</button>}
            </div>
          </div>
        )}

        {/* ═══════════════ PRACTICE ═══════════════ */}
        {tab === "practice" && (
          <div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Card>
              <Label style={{ display: "block", marginBottom: 6 }}>Problem Set · Waves & SHM</Label>
              <p style={{ fontFamily: F.serif, fontSize: 13, color: C.dim, fontStyle: "italic" }}>6 problems · Easy → Medium → Hard · 22 pts total</p>
            </Card>

            <Card><MCField question="A wave has wavelength λ = 2.0 m and period T = 0.5 s. What is its speed?" choices={["0.25 m/s", "1.0 m/s", "4.0 m/s", "8.0 m/s"]} correct={2} diff="easy" pts={3} explain="f = 1/T = 1/0.5 = 2.0 Hz. v = f·λ = (2.0)(2.0) = 4.0 m/s." /></Card>

            <Card><MCField question="A spring-mass system has k = 100 N/m and m = 1.0 kg. What is its angular frequency ω?" choices={["0.1 rad/s", "10 rad/s", "50 rad/s", "100 rad/s"]} correct={1} diff="easy" pts={3} explain="ω = √(k/m) = √(100/1.0) = 10 rad/s." /></Card>

            <Card><INTField question="A pendulum has length L = 0.25 m. Using g = 10 m/s² and π ≈ 3.14, compute its period in seconds, rounded to the nearest integer. Hint: T = 2π√(L/g)." answer={1} diff="medium" pts={4} hint="T = 2·3.14·√(0.25/10) = 6.28·√0.025 = 6.28·0.158 ≈ 0.99 s. Rounds to 1 s." /></Card>

            <Card><MCField question="A string of length L = 1.2 m is fixed at both ends. The standing wave with 3 antinodes is observed. What is the wavelength?" choices={["0.4 m", "0.6 m", "0.8 m", "1.2 m"]} correct={2} diff="medium" pts={4} explain="3 antinodes → n = 3. Standing wave condition: L = n·λ/2, so λ = 2L/n = 2·1.2/3 = 0.8 m." /></Card>

            <Card><INTField question="A spring with k = 200 N/m is stretched 0.15 m from equilibrium. What is the potential energy stored, in joules? Round to one decimal place. Hint: U = ½kx²." answer={2} diff="medium" pts={4} hint="U = ½·200·(0.15)² = 100·0.0225 = 2.25 J. Rounds to 2 J." /></Card>

            <Card><MCField question="A sound wave of frequency 500 Hz travels from air (v = 340 m/s) into water (v = 1500 m/s). What happens to its wavelength?" choices={["Stays the same", "Increases by factor ~4.4", "Decreases by factor ~4.4", "Becomes zero"]} correct={1} diff="medium" pts={4} explain="Frequency is unchanged across the boundary. λ = v/f: λ_water = 1500/500 = 3.0 m; λ_air = 340/500 = 0.68 m. Ratio = 3.0/0.68 ≈ 4.4×." /></Card>
          </div>
        )}

        {/* ═══════════════ REFERENCE ═══════════════ */}
        {tab === "reference" && (
          <div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Wave Equation & Properties</Label>
              <MathBlock>{"v = f · λ            wave speed equation\nT = 1/f              period ↔ frequency\nI ∝ A²               intensity ∝ amplitude²\nI ∝ 1/r²             spherical spreading"}</MathBlock>
              <div style={{ marginTop: 14 }}>
                {[
                  { k: "Wave speed (string)", v: "v = √(T/μ) — T = tension, μ = linear density" },
                  { k: "Sound in air", v: "v = 331 + 0.6·T(°C) m/s" },
                  { k: "Light in medium", v: "v = c/n — n is refractive index" },
                ].map(({ k, v }) => <InfoRow key={k} label={k} value={v} />)}
              </div>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Simple Harmonic Motion</Label>
              <MathBlock>{"ω = √(k/m)           spring-mass\nω = √(g/L)           simple pendulum\n\nx(t) = A·sin(ωt + φ)\nv(t) = Aω·cos(ωt + φ)\na(t) = −Aω²·sin(ωt + φ)\n\nT = 2π/ω = 1/f\nE = ½kA²             total energy (constant)"}</MathBlock>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Superposition & Standing Waves</Label>
              <MathBlock>{"y = y₁ + y₂           superposition principle\n\ny = 2A·sin(kx)·cos(ωt)   standing wave\n\nNodes:        x = n·λ/2\nAntinodes:    x = (2n+1)·λ/4\n\ny_string:     L = n·λ/2     (fixed both ends)\nf_n = n·v/(2L)          harmonic frequencies\n\nf_beat = |f₁ − f₂|      beat frequency"}</MathBlock>
            </Card>
          </div>
        )}

        {/* Footer */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${C.border}`, paddingTop: 18, display: "flex", justifyContent: "space-between" }}>
          <Mono style={{ fontSize: 9 }}>waves · shm · sound · block 7</Mono>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="index.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>← Index</a>
            <a href="highscores.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>Highscores →</a>
          </div>
        </div>
      </div>
    </>
  );
}
