import { useState } from "react";
import { C, F, Geo, GLOBAL_CSS, Card, Label, Mono, Dots, Tag, MathBlock, InfoRow, SummaryBox, HintBox, MCField, INTField } from "../project-template-files/block-kit.jsx";

const MAIN_TABS = ["lecture", "practice", "reference"];
const PART_LABELS = ["I · Oscillations & SHM", "II · Energy & the Pendulum", "III · Sound & Waves"];

export default function G10SHML01() {
  const [tab, setTab] = useState("lecture");
  const [part, setPart] = useState(0);

  const tabBtn = t => ({ fontFamily: F.serif, fontSize: 13, padding: "5px 13px", borderRadius: "4px", border: `1px solid ${tab === t ? C.accent+"55" : "transparent"}`, background: "transparent", color: tab === t ? C.accent : C.subtle, cursor: "pointer", transition: "all 0.2s" });
  const partBtn = i => ({ fontFamily: F.mono, fontSize: 9, letterSpacing: "0.1em", padding: "4px 10px", borderRadius: "4px", border: `1px solid ${part === i ? C.accent+"55" : C.border}`, background: part === i ? C.accent+"11" : "transparent", color: part === i ? C.accent : C.dim, cursor: "pointer", transition: "all 0.2s" });
  const navBtn = (accent = false) => ({ fontFamily: F.serif, fontSize: 13, padding: "6px 16px", borderRadius: "4px", border: `1px solid ${accent ? C.accent+"55" : C.border}`, background: "transparent", color: accent ? C.accent : C.subtle, cursor: "pointer" });

  return (<>
    <style>{GLOBAL_CSS}</style><Geo />
    <div style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto", padding: "44px 20px 80px" }}>

      {/* Navbar */}
      <div className="bk-fade" style={{ display: "flex", gap: 12, marginBottom: 36, fontFamily: F.mono, fontSize: 10 }}>
        <a href="index.html" style={{ color: C.dim, textDecoration: "none" }}>← Index</a>
        <span style={{ color: C.muted }}>|</span>
        <a href="highscores.html" style={{ color: C.dim, textDecoration: "none" }}>Highscores</a>
        <span style={{ color: C.muted }}>|</span>
        <a href="learning-guides/G10_SHM_PS01.html" style={{ color: C.dim, textDecoration: "none" }}>Problem Set →</a>
      </div>

      <div className="bk-fade" style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}><Tag>Physics</Tag><Tag accent>SHM</Tag><Tag>Block 9</Tag></div>
        <h1 style={{ fontFamily: F.serif, fontSize: "clamp(26px,4vw,42px)", fontWeight: 500, color: C.heading, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 10, textShadow: `0 0 24px ${C.glowStr}` }}>Simple Harmonic Motion &<br /><em>Sound Waves</em></h1>
        <p style={{ fontFamily: F.serif, fontSize: 15, color: C.dim, fontStyle: "italic" }}>Oscillation is the universe's default. A restoring force proportional to displacement always produces sinusoidal motion — and sinusoidal motion produces sound.</p>
      </div>

      <Card style={{ marginBottom: 24 }}>
        <Label style={{ display: "block", marginBottom: 12 }}>What This Covers</Label>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          Simple Harmonic Motion is periodic motion where <strong style={{ fontWeight: 500, color: C.accent }}>acceleration is proportional to displacement and directed toward equilibrium</strong>: a = −ω²x. This single rule generates sinusoidal position, velocity, and acceleration curves, conserved mechanical energy, and the resonant behavior that underlies everything from pendulum clocks to musical instruments.
        </p>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          Sound connects SHM to waves: each air molecule oscillates in SHM, and the wave propagates that oscillation through space. The Doppler effect, decibels, and wave refraction all follow from this mechanical picture.
        </p>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>{PART_LABELS.map((p, i) => <Tag key={i}>{p}</Tag>)}</div>
      </Card>

      <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>{MAIN_TABS.map(t => <button key={t} onClick={() => setTab(t)} style={tabBtn(t)}>{t}</button>)}</div>
      <div style={{ borderTop: `1px solid ${C.accent}44`, marginBottom: 28 }} />

      {tab === "lecture" && (
        <div className="bk-fade">
          <div style={{ display: "flex", gap: 3, marginBottom: 22, flexWrap: "wrap" }}>{PART_LABELS.map((lbl, i) => <button key={i} onClick={() => setPart(i)} style={partBtn(i)}>{lbl}</button>)}</div>

          {part === 0 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox
              intro="SHM arises whenever a restoring force is proportional to displacement. The motion is exactly sinusoidal: position, velocity, and acceleration are all cosine/sine waves — phase-shifted by 90° from each other."
              points={[
                "Defining equation: a = −ω²x. Acceleration is always opposite to displacement.",
                "Position: x(t) = A cos(ωt + φ). Amplitude A is the maximum displacement; φ is set by initial conditions.",
                "Velocity is maximum at equilibrium (x = 0); acceleration is maximum at turning points (x = ±A).",
                "Angular frequency ω = 2πf links frequency f (Hz) to period T: ω = 2π/T."
              ]}
            />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Kinematics of SHM</Label>
              <MathBlock>{"a = −ω²x                   defining equation of SHM\n\nx(t) = A cos(ωt + φ)       position\nv(t) = −Aω sin(ωt + φ)    velocity\na(t) = −Aω² cos(ωt + φ)   acceleration\n\nv_max = Aω                 at equilibrium (x = 0)\na_max = Aω²                at turning points (x = ±A)\n\nω = 2πf = 2π/T             angular frequency"}</MathBlock>
              {[
                ["Phase of v vs x", "Velocity leads position by 90° — when x is maximum, v is zero, and vice versa"],
                ["Phase of a vs x", "Acceleration is 180° opposite to position — always points toward equilibrium"],
                ["Amplitude A", "Determined by initial displacement and velocity; does not affect period in ideal SHM"],
                ["Period T", "Time for one complete oscillation; T = 1/f = 2π/ω"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Mass-Spring System</Label>
              <MathBlock>{"T = 2π√(m/k)               period of mass on spring\n\nω = √(k/m)                 angular frequency\n\nk = spring constant (N/m) — stiffness of spring\nm = mass (kg)\n\nExample: m = 0.5 kg, k = 200 N/m\n  T = 2π√(0.5/200) = 2π(0.05) = 0.314 s\n  ω = √(200/0.5) = √400 = 20 rad/s\n  v_max = Aω = 0.1 × 20 = 2 m/s"}</MathBlock>
              {[
                ["Heavier mass", "Longer period — more inertia resists the restoring force"],
                ["Stiffer spring (larger k)", "Shorter period — stronger restoring force accelerates the mass more"],
                ["Amplitude independence", "Period does not depend on amplitude — a hallmark of ideal SHM"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Velocity at Any Position</Label>
              <MathBlock>{"From energy conservation:\n\nv² = ω²(A² − x²)\n\nv = ω√(A² − x²)\n\nAt x = 0:   v = ωA = v_max\nAt x = ±A:  v = 0\nAt x = A/2: v = ω√(3A²/4) = (√3/2)v_max ≈ 0.87 v_max"}</MathBlock>
              {[
                ["Key form", "v² = ω²(A² − x²) avoids needing the time variable — useful in problems"],
                ["At equilibrium", "All energy is kinetic; v is maximum"],
                ["At amplitude", "All energy is potential; v = 0"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <HintBox variant="comp">
              <p><strong>Competition insight — Superposition of SHM:</strong> Two SHMs at the same frequency but different phases add to give another SHM: A₁cos(ωt) + A₂cos(ωt+δ) = A_R cos(ωt + φ_R), where A_R² = A₁² + A₂² + 2A₁A₂cos(δ). This is a phasor addition — identical to vector addition. When δ = 0, amplitudes add constructively (A_R = A₁+A₂); when δ = π, destructively (A_R = |A₁−A₂|). Olympiad problems often ask for the resultant amplitude without giving you the phase explicitly.</p>
            </HintBox>

            <Card><MCField question="A mass on a spring oscillates with amplitude 5 cm and frequency 2 Hz. What is its angular frequency?" choices={["2 rad/s", "4π rad/s", "10 rad/s", "20π rad/s"]} correct={1} diff="easy" pts={3} explain="ω = 2πf = 2π × 2 = 4π ≈ 12.6 rad/s." /></Card>
          </div>)}

          {part === 1 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox
              intro="Mechanical energy is conserved in ideal SHM — it sloshes between kinetic and potential. The pendulum's period depends only on length and g, not on mass or amplitude (small angles). This isochronism made pendulums the basis of precision timekeeping for three centuries."
              points={[
                "Total energy E = ½kA² = constant. At any x: E_k = ½k(A²−x²), E_p = ½kx².",
                "E_k = E_p when x = A/√2 ≈ 0.707A — exactly halfway through the energy cycle.",
                "Simple pendulum: T = 2π√(L/g). Period is independent of mass and amplitude (for θ < 15°).",
                "Quadruple the length → double the period. Increase g (e.g., go to a denser planet) → shorter period."
              ]}
            />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Energy in SHM</Label>
              <MathBlock>{"E_total = ½kA² = ½mω²A²     constant (conserved)\n\nE_k = ½mv² = ½k(A² − x²)   kinetic energy\nE_p = ½kx²                  potential energy (spring)\n\nE_k = E_p  when  x = A/√2\n\nExample: k = 50 N/m, A = 0.4 m\n  E_total = ½(50)(0.4)² = ½(50)(0.16) = 4 J\n  At x = 0.2 m:\n    E_p = ½(50)(0.04) = 1 J\n    E_k = 4 − 1 = 3 J"}</MathBlock>
              {[
                ["At x = 0", "E_k = E_total, E_p = 0 — all kinetic"],
                ["At x = ±A", "E_k = 0, E_p = E_total — all potential"],
                ["At x = A/√2", "E_k = E_p = E_total/2 — equal partition"],
                ["E ∝ A²", "Doubling amplitude quadruples total energy"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Simple Pendulum</Label>
              <MathBlock>{"T = 2π√(L/g)               period (small angle)\n\nValid for θ < 15° (small-angle approximation: sin θ ≈ θ)\n\nL = string length (m)\ng = 9.8 m/s² (Earth surface)\n\nExamples:\n  L = 1.0 m: T = 2π√(1/9.8) = 2.01 s\n  L = 4.0 m: T = 2π√(4/9.8) = 4.02 s (doubled)\n  On Moon (g = 1.6 m/s²), L = 1.0 m:\n    T = 2π√(1/1.6) = 4.97 s"}</MathBlock>
              {[
                ["Mass independence", "Heavier bob has more inertia but also more gravity — effects cancel exactly"],
                ["Amplitude independence", "True only for small angles; large swings are slightly slower (elliptic integral)"],
                ["L quadruples → T doubles", "Because T ∝ √L — a square-root relationship"],
                ["g increases → T decreases", "Stronger gravity pulls bob back faster — higher frequency"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Physical Pendulum (extension)</Label>
              <MathBlock>{"T = 2π√(I/mgd)\n\nI = moment of inertia about pivot\nm = total mass\nd = distance from pivot to center of mass\n\nSimple pendulum: I = mL², d = L\n  → T = 2π√(mL²/mgL) = 2π√(L/g)  ✓"}</MathBlock>
              {[
                ["Rod pivoted at end", "I = mL²/3, d = L/2 → T = 2π√(2L/3g) — slightly faster than simple pendulum of same length"],
                ["Application", "Measuring g: time 10 oscillations, T = t/10, then g = 4π²L/T²"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <HintBox variant="comp">
              <p><strong>Competition insight — Damped oscillator energy:</strong> In a damped oscillator with linear damping, amplitude decays as A(t) = A₀e^(−γt) but energy decays as E(t) = E₀e^(−2γt) — twice as fast. This is because E ∝ A². When a problem says "10% energy loss per cycle," convert to amplitude loss per cycle (lose ~5%), not 10%. The Q-factor Q = ω₀/(2γ) measures how many radians of oscillation occur per e-folding of energy decay. High-Q systems (bells, quartz crystals) lose energy very slowly.</p>
            </HintBox>

            <Card><INTField question="A pendulum has length 2 m. What is its period in seconds, rounded to the nearest integer? (Use g = 10 m/s².)" answer={3} diff="easy" pts={3} hint="T = 2π√(L/g) = 2π√(2/10) = 2π(0.447) ≈ 2.81 s. Rounds to 3 s." /></Card>
          </div>)}

          {part === 2 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox
              intro="Sound is a mechanical longitudinal wave — particles oscillate parallel to the propagation direction. Wave speed depends on the medium. The wave equation v = fλ connects speed, frequency, and wavelength. The Doppler effect shifts the observed frequency when source or observer moves."
              points={[
                "Wave speed: v = fλ. Frequency is a property of the source; wavelength adjusts when speed changes.",
                "Sound in air ≈ 343 m/s at 20°C. In water ≈ 1480 m/s. In steel ≈ 5000 m/s.",
                "Intensity (W/m²) measures power per area. Decibels: L = 10 log₁₀(I/I₀), where I₀ = 10⁻¹² W/m².",
                "Doppler: source approaching → higher frequency (compressed wavefronts); receding → lower."
              ]}
            />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Wave Properties</Label>
              <MathBlock>{"v = f · λ                   wave equation\n\nv = wave speed (m/s)\nf = frequency (Hz) — property of the source\nλ = wavelength (m) — adjusts when medium changes\n\nSound speeds (room temperature):\n  Air:   ~343 m/s\n  Water: ~1480 m/s\n  Steel: ~5000 m/s\n\nExample (440 Hz tuning fork in air):\n  λ = v/f = 343/440 = 0.78 m"}</MathBlock>
              {[
                ["Longitudinal wave", "Compressions and rarefactions along the propagation axis — not transverse"],
                ["Frequency constant across media", "Only wavelength and speed change at a boundary; f is fixed by the source"],
                ["Faster in denser solids", "Stiffer bonds restore particles faster — not about fluid density alone"],
                ["Human hearing", "20 Hz (low rumble) to 20 000 Hz (high squeak); ultrasound > 20 kHz"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Intensity & Decibels</Label>
              <MathBlock>{"I = P / A                  intensity (W/m²)\n\nL = 10 log₁₀(I/I₀)       sound level (dB)\nI₀ = 10⁻¹² W/m²          threshold of hearing\n\nReference levels:\n  I₀ = 10⁻¹² W/m²  →  0 dB   (threshold)\n  10⁻⁶ W/m²        → 60 dB  (conversation)\n  10⁻² W/m²        → 100 dB (loud machinery)\n\nEvery 10× increase in intensity = +10 dB\nEvery 2× increase in intensity = +3 dB"}</MathBlock>
              {[
                ["Logarithmic scale", "Our ears perceive loudness logarithmically — 10 dB difference sounds about 2× as loud"],
                ["I ∝ 1/r²", "Intensity falls as inverse square of distance from point source — double the distance, quarter the intensity"],
                ["Amplitude vs intensity", "I ∝ A² — doubling oscillation amplitude quadruples intensity"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Doppler Effect</Label>
              <MathBlock>{"f' = f · (v ± v_obs) / (v ∓ v_src)\n\nSign rules:\n  +v_obs if observer moves toward source\n  −v_obs if observer moves away\n  −v_src if source moves toward observer\n  +v_src if source moves away\n\nSource approaching stationary observer:\n  f' = f · v / (v − v_src)   [higher frequency]\n\nObserver approaching stationary source:\n  f' = f · (v + v_obs) / v   [higher frequency]\n\nExample: f = 1000 Hz, v_src = 30 m/s toward observer\n  f' = 1000 × 343/(343−30) = 1000 × 343/313 ≈ 1096 Hz"}</MathBlock>
              {[
                ["Approaching → higher pitch", "Wavefronts pile up in front of moving source — shorter wavelength"],
                ["Receding → lower pitch", "Wavefronts stretched out behind source — longer wavelength"],
                ["Symmetric formula", "Both source and observer motion handled by the same formula with sign conventions"],
                ["Sonic boom", "When v_src = v_sound, wavefronts can't outrun the source — they pile up into a shock wave"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <HintBox variant="comp">
              <p><strong>Competition insight — Coupled oscillators and beat frequency:</strong> When two sources have slightly different frequencies f₁ and f₂, the superposed wave has an amplitude that oscillates at the beat frequency f_beat = |f₁ − f₂|. Each "beat" is a momentary constructive interference. Piano tuners use beats: when the beat frequency drops to zero, the strings are in tune. At the olympiad level, beats generalise to amplitude modulation — the carrier frequency is (f₁+f₂)/2 and the modulation frequency is (f₁−f₂)/2.</p>
            </HintBox>

            <Card><MCField question="A car siren (1000 Hz) moves away from a stationary observer at 20 m/s. What frequency does the observer hear? (v_sound = 340 m/s)" choices={["941 Hz", "1000 Hz", "1059 Hz", "1100 Hz"]} correct={0} diff="medium" pts={4} explain="Source moving away: f' = f·v/(v+v_src) = 1000×340/360 ≈ 944 Hz. Closest to 941 Hz (choice A)." /></Card>
          </div>)}

          <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
            {part > 0 ? <button onClick={() => setPart(p => p - 1)} style={navBtn(false)}>← {PART_LABELS[part - 1]}</button> : <span />}
            {part < 2 ? <button onClick={() => setPart(p => p + 1)} style={navBtn(true)}>{PART_LABELS[part + 1]} →</button> : <button onClick={() => setTab("practice")} style={navBtn(true)}>Practice →</button>}
          </div>
        </div>
      )}

      {tab === "practice" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Card>
          <Label style={{ display: "block", marginBottom: 6 }}>Problem Set · SHM & Sound</Label>
          <p style={{ fontFamily: F.serif, fontSize: 13, color: C.dim, fontStyle: "italic" }}>6 problems · Easy → Medium · 22 pts total</p>
        </Card>

        <Card><MCField question="A mass on a spring oscillates with amplitude 5 cm and frequency 2 Hz. What is the angular frequency?" choices={["2 rad/s", "4π rad/s", "10 rad/s", "20π rad/s"]} correct={1} diff="easy" pts={3} explain="ω = 2πf = 2π × 2 = 4π rad/s ≈ 12.6 rad/s." /></Card>

        <Card><INTField question="A pendulum has length 2 m. What is its period in seconds, rounded to the nearest whole number? (Use g = 10 m/s².)" answer={3} diff="easy" pts={3} hint="T = 2π√(2/10) = 2π(0.447) ≈ 2.81 s → rounds to 3 s." /></Card>

        <Card><MCField question="A tuning fork vibrates at 440 Hz in air. What is its wavelength? (v_air = 340 m/s)" choices={["0.77 m", "1.3 m", "150 m", "1500 m"]} correct={0} diff="easy" pts={3} explain="λ = v/f = 340/440 ≈ 0.77 m." /></Card>

        <Card><MCField question="A 0.1 kg mass on a spring undergoes SHM with period 0.5 s. What is the spring constant?" choices={["12.6 N/m", "15.8 N/m", "25.3 N/m", "39.5 N/m"]} correct={1} diff="medium" pts={4} explain="k = 4π²m/T² = 4π²(0.1)/(0.5)² = 3.948/0.25 ≈ 15.8 N/m." /></Card>

        <Card><INTField question="A mass oscillates on a spring with amplitude 20 cm and total energy 10 J. What is the spring constant in N/m?" answer={500} diff="medium" pts={4} hint="E = ½kA² → k = 2E/A² = 2(10)/(0.2)² = 20/0.04 = 500 N/m." /></Card>

        <Card><MCField question="Two pendulums of the same length — one on Earth (g = 10 m/s²) and one on the Moon (g = 1.6 m/s²). What is the ratio T_Moon/T_Earth?" choices={["1.6", "2.5", "6.25", "10"]} correct={1} diff="medium" pts={4} explain="T ∝ 1/√g. Ratio = √(g_Earth/g_Moon) = √(10/1.6) = √6.25 = 2.5." /></Card>
      </div>)}

      {tab === "reference" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>SHM & Oscillations</Label>
          <MathBlock>{"a = −ω²x                   defining equation\nx(t) = A cos(ωt + φ)       position\nv_max = Aω                 at x = 0\na_max = Aω²                at x = ±A\n\nv² = ω²(A² − x²)          velocity at position x\n\nMass-spring:  T = 2π√(m/k),  ω = √(k/m)\nPendulum:     T = 2π√(L/g)   (small angle)\n\nEnergy:\nE_total = ½kA²              conserved\nE_k = ½k(A² − x²)\nE_p = ½kx²\nE_k = E_p  at  x = A/√2"}</MathBlock>
        </Card>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Sound & Waves</Label>
          <MathBlock>{"v = fλ                      wave equation\n\nSound speeds:\n  Air   ≈ 343 m/s\n  Water ≈ 1480 m/s\n  Steel ≈ 5000 m/s\n\nDecibels:\nL = 10 log₁₀(I/I₀)         I₀ = 10⁻¹² W/m²\n\nDoppler:\nf' = f(v ± v_obs)/(v ∓ v_src)\n  + obs toward src;  − src toward obs\n\nBeats:  f_beat = |f₁ − f₂|"}</MathBlock>
        </Card>
      </div>)}

      <div style={{ marginTop: 56, borderTop: `1px solid ${C.border}`, paddingTop: 18, display: "flex", justifyContent: "space-between" }}>
        <Mono style={{ fontSize: 9 }}>shm · oscillations · sound · waves · block 9</Mono>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="index.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>← Index</a>
          <a href="highscores.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>Highscores →</a>
        </div>
      </div>
    </div>
  </>);
}
