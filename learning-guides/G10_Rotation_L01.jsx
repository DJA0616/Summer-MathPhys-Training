import { useState } from "react";
import { C, F, Geo, GLOBAL_CSS, Card, Label, Mono, Dots, Tag, MathBlock, InfoRow, SummaryBox, HintBox, MCField, INTField } from "../project-template-files/block-kit.jsx";

const MAIN_TABS = ["lecture", "practice", "reference"];
const PART_LABELS = ["I · Rotational Kinematics", "II · Torque & Newton's 2nd Law", "III · Rotational Energy & Angular Momentum"];

export default function G10RotationL01() {
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
        <a href="learning-guides/G10_Rotation_PS01.html" style={{ color: C.dim, textDecoration: "none" }}>Problem Set →</a>
      </div>

      <div className="bk-fade" style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}><Tag>Physics</Tag><Tag accent>Rotational Motion</Tag><Tag>Block 9</Tag></div>
        <h1 style={{ fontFamily: F.serif, fontSize: "clamp(26px,4vw,42px)", fontWeight: 500, color: C.heading, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 10, textShadow: `0 0 24px ${C.glowStr}` }}>Rotational Motion &<br /><em>Angular Mechanics</em></h1>
        <p style={{ fontFamily: F.serif, fontSize: 15, color: C.dim, fontStyle: "italic" }}>Every kinematic and dynamic law of linear motion has a rotational counterpart. Once you see the analogy, two sets of equations collapse into one unified framework.</p>
      </div>

      <Card style={{ marginBottom: 24 }}>
        <Label style={{ display: "block", marginBottom: 12 }}>What This Covers</Label>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          Rotational motion describes how objects spin about a fixed axis. The mathematics mirrors linear mechanics exactly: angle replaces displacement, angular velocity replaces velocity, torque replaces force, and moment of inertia replaces mass. Every formula you know has a <strong style={{ fontWeight: 500, color: C.accent }}>rotational twin</strong>.
        </p>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          The math integration is <strong style={{ fontWeight: 500, color: C.accent }}>symmetry and analogy</strong>: rotational quantities form a complete, self-consistent algebra. Conservation of angular momentum — the rotational analogue of momentum conservation — governs everything from figure skaters to planetary orbits.
        </p>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>{PART_LABELS.map((p, i) => <Tag key={i}>{p}</Tag>)}</div>
      </Card>

      <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>{MAIN_TABS.map(t => <button key={t} onClick={() => setTab(t)} style={tabBtn(t)}>{t}</button>)}</div>
      <div style={{ borderTop: `1px solid ${C.accent}44`, marginBottom: 28 }} />

      {tab === "lecture" && (
        <div className="bk-fade">
          <div style={{ display: "flex", gap: 3, marginBottom: 22, flexWrap: "wrap" }}>{PART_LABELS.map((lbl, i) => <button key={i} onClick={() => setPart(i)} style={partBtn(i)}>{lbl}</button>)}</div>

          {part === 0 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="Rotational kinematics is the geometry of spinning — three quantities (θ, ω, α) describe how a rigid body rotates, governed by equations that are exact analogues of linear kinematics with no new physics needed." points={["Angular displacement θ (rad): the 'distance' in rotation. One revolution = 2π rad.", "Angular velocity ω = dθ/dt (rad/s): how fast the body spins. Every point on a rigid body shares the same ω.", "Angular acceleration α = dω/dt (rad/s²): how quickly the spin rate changes.", "For a point at radius r: v = ωr (tangential speed) and a_t = αr (tangential acceleration)."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Kinematic Equations (constant α)</Label>
              <MathBlock>{"ω  = ω₀ + αt\n\nθ  = ω₀t + ½αt²\n\nω² = ω₀² + 2αθ\n\nUnits:\nθ — radians (rad)\nω — rad/s\nα — rad/s²\n\n1 revolution = 2π rad ≈ 6.283 rad"}</MathBlock>
              {[["ω = ω₀ + αt", "Angular velocity from rest — direct parallel to v = v₀ + at"], ["θ = ω₀t + ½αt²", "Angle swept from rest — parallel to x = v₀t + ½at²"], ["ω² = ω₀² + 2αθ", "Velocity–displacement relation — no time variable needed"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Linear–Rotational Correspondence</Label>
              <MathBlock>{"Linear          Rotational\n─────────────────────────────────\nx  (m)    ↔    θ  (rad)\nv  (m/s)  ↔    ω  (rad/s)\na  (m/s²) ↔    α  (rad/s²)\nm  (kg)   ↔    I  (kg·m²)\nF  (N)    ↔    τ  (N·m)\np  (kg·m/s) ↔  L  (kg·m²/s)\n\nFor a point at radius r:\n  v = ωr\n  a_t = αr\n  a_c = ω²r  (centripetal)"}</MathBlock>
              {[["v = ωr", "Tangential speed — a point far from the axis moves faster"], ["a_t = αr", "Tangential acceleration — proportional to angular acceleration and radius"], ["a_c = ω²r", "Centripetal acceleration — always present in circular motion, directed inward"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Worked Example — Disk from Rest</Label>
              <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 10 }}>
                A disk starts from rest with α = 2.0 rad/s². After 5.0 s, find ω and θ.
              </p>
              {[["ω = ω₀ + αt", "= 0 + (2.0)(5.0) = 10 rad/s"], ["θ = ω₀t + ½αt²", "= 0 + ½(2.0)(25) = 25 rad ≈ 3.98 rev"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <HintBox variant="comp"><p><strong>Competition shortcut:</strong> When a problem gives ω₀, ω_f, and θ — but not t — reach immediately for ω² = ω₀² + 2αθ. This eliminates time from the calculation entirely, just as v² = v₀² + 2ax does in linear kinematics. In multi-body problems, every point on a rigid body has the same α and ω, but different tangential speeds v = ωr — exploit this to relate the motion of different points.</p></HintBox>

            <Card><MCField question="A wheel starts from rest and reaches ω = 12 rad/s after rotating through 24 rad. What is the angular acceleration α (in rad/s²)?" choices={["1.0 rad/s²", "2.0 rad/s²", "3.0 rad/s²", "6.0 rad/s²"]} correct={2} diff="easy" pts={3} explain="Use ω² = ω₀² + 2αθ: 144 = 0 + 2α(24) → α = 144/48 = 3.0 rad/s²." /></Card>
          </div>)}

          {part === 1 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="Torque is the rotational analogue of force — it causes angular acceleration. The key equation τ = Iα is Newton's Second Law for rotation, where moment of inertia I plays the role of mass." points={["Torque τ = rF sin θ (N·m): force × lever arm × sin(angle). Maximum when force is perpendicular (θ = 90°).", "Moment of inertia I = Σmᵢrᵢ² (kg·m²): resistance to angular acceleration. Depends on mass distribution, not just total mass.", "Newton's 2nd for rotation: τ = Iα — same torque on larger I gives less angular acceleration.", "Rotational equilibrium: Στ = 0 — net torque is zero. The body may still spin at constant ω."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Torque</Label>
              <MathBlock>{"τ = r × F = rF sin θ\n\nτ — torque (N·m)\nr — distance from axis to force application point (m)\nF — applied force (N)\nθ — angle between r and F\n\nMaximum torque:  θ = 90°  (force ⊥ lever arm)\nZero torque:     θ = 0°   (force along r)\n\nSign: CCW = positive, CW = negative"}</MathBlock>
              {[["τ = rF (⊥)", "Simplified form when force is perpendicular to lever arm"], ["τ = rF sin θ", "General form — includes the angle between force and radius vector"], ["Lever arm", "Perpendicular distance from axis to line of action of force"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Moment of Inertia</Label>
              <MathBlock>{"Point mass at r:      I = mr²\n\nSolid cylinder/disk:  I = ½MR²\nSolid sphere:         I = ⅖MR²\nThin spherical shell: I = ⅔MR²\nThin ring/hoop:       I = MR²\n\nParallel-axis theorem:\n  I = I_cm + Md²\n  (I_cm = moment about center of mass)\n  (d = distance to new axis)"}</MathBlock>
              {[["I = ½MR² (cylinder)", "Half of the mass contributes as if at radius R — mass near center matters less"], ["I = MR² (hoop)", "All mass at radius R — maximum I for a given M and R"], ["I = ⅖MR² (sphere)", "Sphere distributes mass inward — smaller I than cylinder of same M and R"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Newton's Second Law for Rotation</Label>
              <MathBlock>{"τ_net = I · α\n\nAnalogy:\n  τ ↔ F\n  I ↔ m\n  α ↔ a\n\nFor equilibrium:\n  Στ = 0  (rotational)\n  ΣF = 0  (translational)"}</MathBlock>
              {[["τ = Iα", "The fundamental equation of rotational dynamics"], ["α = τ/I", "For fixed torque: greater I means smaller angular acceleration"], ["Στ = 0", "Rotational equilibrium — constant ω, not necessarily zero ω"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <HintBox variant="comp"><p><strong>Parallel-axis theorem (olympiad tool):</strong> I = I_cm + Md². The moment of inertia about any axis equals the moment about the parallel axis through the center of mass, plus Md². Example: a uniform rod about one end has I_end = ⅟₁₂ML² + M(L/2)² = ⅟₁₂ML² + ¼ML² = ⅓ML². Recognizing when the axis is not through the center of mass — and applying this theorem — dramatically simplifies multi-body rotation problems.</p></HintBox>

            <Card><MCField question="A force F = 20 N is applied perpendicular to a lever arm of length r = 0.50 m. The moment of inertia about the pivot is I = 0.40 kg·m². What is the angular acceleration?" choices={["12.5 rad/s²", "25 rad/s²", "40 rad/s²", "50 rad/s²"]} correct={1} diff="medium" pts={4} explain="τ = rF sin(90°) = (0.50)(20) = 10 N·m. α = τ/I = 10/0.40 = 25 rad/s²." /></Card>
          </div>)}

          {part === 2 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="Rotational energy and angular momentum complete the dynamical framework. Conservation of angular momentum — when no external torque acts — is one of the most powerful conservation laws in physics, governing everything from spinning tops to galaxies." points={["Rotational KE = ½Iω² — spinning objects store energy in their rotation.", "For rolling objects: KE_total = ½mv_cm² + ½Iω². Rolling constraint: v_cm = ωR.", "Angular momentum L = Iω (kg·m²/s) — rotational analogue of p = mv.", "Conservation of L: if τ_net = 0, then Iω = constant (e.g., ice skater pulling in arms)."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Rotational Kinetic Energy & Work</Label>
              <MathBlock>{"KE_rot = ½Iω²\n\nWork by constant torque:\n  W = τθ\n\nWork–energy theorem:\n  W_net = ΔKE_rot = ½Iω_f² − ½Iω_i²\n\nRolling without slipping (v_cm = ωR):\n  KE_total = ½mv_cm² + ½Iω²\n           = ½mv_cm²(1 + I/mR²)"}</MathBlock>
              {[["KE_rot = ½Iω²", "Direct parallel to ½mv² — same form, mass replaced by I, speed by ω"], ["W = τθ", "Work by torque over angle θ — parallel to W = Fd for linear motion"], ["v_cm = ωR", "Rolling constraint — couples translation and rotation into one equation"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Angular Momentum & Conservation</Label>
              <MathBlock>{"L = Iω\n\nτ = dL/dt\n\nConservation (τ_net = 0):\n  L_i = L_f\n  I₁ω₁ = I₂ω₂\n\nIce skater example:\n  I₁ = 3.0 kg·m², ω₁ = 1.5 rad/s\n  I₂ = 1.2 kg·m²\n  ω₂ = (I₁/I₂)ω₁ = (3.0/1.2)(1.5) = 3.75 rad/s"}</MathBlock>
              {[["L = Iω", "Angular momentum — harder to stop a fast, massive spinner"], ["τ = dL/dt", "Torque is the rate of change of angular momentum — parallel to F = dp/dt"], ["I₁ω₁ = I₂ω₂", "Conservation: decrease I → increase ω, and vice versa"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Rolling Down a Ramp — Energy Method</Label>
              <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 10 }}>
                A solid sphere (I = ⅖MR²) rolls from rest down a ramp of height h = 0.20 m. Find v_cm at the bottom.
              </p>
              {[["mgh = ½mv_cm² + ½Iω²", "Energy conservation — PE converts to KE_trans + KE_rot"], ["ω = v_cm/R", "Rolling constraint substitution"], ["v_cm² = (10/7)gh", "Algebra: 1 = ½ + ⅕ = 7/10 factor"], ["v_cm ≈ 1.69 m/s", "For h = 0.20 m: v_cm = √(10/7 × 10 × 0.20) ≈ 1.69 m/s"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <HintBox variant="comp"><p><strong>Rolling-race insight:</strong> The ratio of final speeds down a ramp depends only on the shape of the object, not its mass or radius. For rolling without slipping, v_cm² = 2gh/(1 + I/mR²). A solid cylinder (I = ½mR²) gives v_cm² = (4/3)gh; a solid sphere (I = ⅖mR²) gives (10/7)gh; a hoop (I = mR²) gives gh. The sphere wins because more of its mass is near the center — less energy goes into rotation. Angular momentum as a vector: L points along the rotation axis by the right-hand rule. Vectorial conservation enables gyroscopic precession and makes 3D collision problems tractable at olympiad level.</p></HintBox>

            <Card><MCField question="A figure skater with I₁ = 3.0 kg·m² spins at ω₁ = 1.5 rad/s. She pulls her arms in, reducing I₂ = 1.2 kg·m². What is her new angular velocity (rad/s)?" choices={["0.60 rad/s", "1.5 rad/s", "3.0 rad/s", "3.75 rad/s"]} correct={3} diff="medium" pts={4} explain="Conservation of angular momentum (no external torque): I₁ω₁ = I₂ω₂. ω₂ = (3.0/1.2)(1.5) = 2.5 × 1.5 = 3.75 rad/s. Smaller I → larger ω." /></Card>
          </div>)}

          <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
            {part > 0 ? <button onClick={() => setPart(p => p - 1)} style={navBtn(false)}>← {PART_LABELS[part - 1]}</button> : <span />}
            {part < 2 ? <button onClick={() => setPart(p => p + 1)} style={navBtn(true)}>{PART_LABELS[part + 1]} →</button> : <button onClick={() => setTab("practice")} style={navBtn(true)}>Practice →</button>}
          </div>
        </div>
      )}

      {tab === "practice" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Card><Label style={{ display: "block", marginBottom: 6 }}>Problem Set · Rotational Motion</Label><p style={{ fontFamily: F.serif, fontSize: 13, color: C.dim, fontStyle: "italic" }}>6 problems · Easy → Medium · 23 pts total</p></Card>

        <Card><MCField question="A wheel rotates at constant ω = 5.0 rad/s. What is its angular displacement after 2.0 s?" choices={["2.5 rad", "5.0 rad", "10 rad", "20 rad"]} correct={2} diff="easy" pts={3} explain="θ = ωt = 5.0 × 2.0 = 10 rad. At constant angular velocity, θ grows linearly with time." /></Card>

        <Card><INTField question="A disk starts from rest and reaches ω = 12 rad/s after rotating through 24 rad. What is the angular acceleration α in rad/s²?" answer={3} diff="easy" pts={3} hint="Use ω² = ω₀² + 2αθ: 144 = 0 + 2α(24) → α = 144/48 = 3 rad/s²." /></Card>

        <Card><INTField question="A spinning top has angular momentum L = 0.50 kg·m²/s and moment of inertia I = 0.010 kg·m². What is its angular velocity ω in rad/s?" answer={50} diff="easy" pts={3} hint="L = Iω → ω = L/I = 0.50/0.010 = 50 rad/s." /></Card>

        <Card><MCField question="A force F = 20 N acts perpendicular to a lever arm r = 0.50 m. Moment of inertia I = 0.40 kg·m². What is the angular acceleration?" choices={["12.5 rad/s²", "25 rad/s²", "40 rad/s²", "50 rad/s²"]} correct={1} diff="medium" pts={4} explain="τ = rF = (0.50)(20) = 10 N·m. α = τ/I = 10/0.40 = 25 rad/s²." /></Card>

        <Card><INTField question="A torque of 12 N·m is applied to a wheel (I = 2.0 kg·m²) for 3.0 s starting from rest. Find the final angular velocity ω in rad/s." answer={18} diff="medium" pts={4} hint="α = τ/I = 12/2.0 = 6.0 rad/s². ω = ω₀ + αt = 0 + (6.0)(3.0) = 18 rad/s." /></Card>

        <Card><MCField question="Two masses balance on a seesaw: m₁ = 3.0 kg at r₁ = 0.80 m. How far from the pivot must m₂ = 4.0 kg be placed for rotational equilibrium?" choices={["0.40 m", "0.60 m", "0.80 m", "1.07 m"]} correct={1} diff="medium" pts={4} explain="Στ = 0: m₁g·r₁ = m₂g·r₂. (3.0)(0.80) = (4.0)r₂. r₂ = 2.4/4.0 = 0.60 m." /></Card>
      </div>)}

      {tab === "reference" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Kinematics & Dynamics</Label>
          <MathBlock>{"Kinematics (constant α):\n  ω  = ω₀ + αt\n  θ  = ω₀t + ½αt²\n  ω² = ω₀² + 2αθ\n\nPoint at radius r:\n  v = ωr,   a_t = αr,   a_c = ω²r\n\nTorque & Newton's 2nd:\n  τ = rF sin θ\n  τ = Iα\n  Στ = 0  (equilibrium)"}</MathBlock>
        </Card>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Energy, Momentum & Moments of Inertia</Label>
          <MathBlock>{"Energy:\n  KE_rot = ½Iω²\n  W = τθ  (constant torque)\n  KE_roll = ½mv_cm² + ½Iω²  (v_cm = ωR)\n\nAngular Momentum:\n  L = Iω\n  τ = dL/dt\n  I₁ω₁ = I₂ω₂  (τ_net = 0)\n\nMoments of Inertia:\n  Point mass:        I = mr²\n  Solid cylinder:    I = ½MR²\n  Solid sphere:      I = ⅖MR²\n  Thin shell:        I = ⅔MR²\n  Thin ring/hoop:    I = MR²\n  Parallel-axis:     I = I_cm + Md²"}</MathBlock>
        </Card>
      </div>)}

      <div style={{ marginTop: 56, borderTop: `1px solid ${C.border}`, paddingTop: 18, display: "flex", justifyContent: "space-between" }}>
        <Mono style={{ fontSize: 9 }}>rotational motion · torque · angular momentum · block 9</Mono>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="index.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>← Index</a>
          <a href="highscores.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>Highscores →</a>
        </div>
      </div>
    </div>
  </>);
}
