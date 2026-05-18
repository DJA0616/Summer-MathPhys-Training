import { useState } from "react";
import { C, F, Geo, GLOBAL_CSS, Card, Label, Mono, Dots, Tag, MathBlock, InfoRow, SummaryBox, HintBox, MCField, INTField } from "../project-template-files/block-kit.jsx";

const MAIN_TABS = ["lecture", "practice", "reference"];
const PART_LABELS = ["I · Momentum & Impulse", "II · Conservation of Momentum", "III · Collisions"];

export default function G10MomentumL01() {
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
        <a href="learning-guides/G9_Momentum_PS01.html" style={{ color: C.dim, textDecoration: "none" }}>Problem Set →</a>
      </div>

      <div className="bk-fade" style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}><Tag>Physics</Tag><Tag accent>Momentum</Tag><Tag>Block 8</Tag></div>
        <h1 style={{ fontFamily: F.serif, fontSize: "clamp(26px,4vw,42px)", fontWeight: 500, color: C.heading, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 10, textShadow: `0 0 24px ${C.glowStr}` }}>Momentum &<br /><em>Impulse</em></h1>
        <p style={{ fontFamily: F.serif, fontSize: 15, color: C.dim, fontStyle: "italic" }}>Momentum is Newton's second law rewritten in terms of motion quantity. Collisions reveal its conservation; impulse tells you how forces change it over time.</p>
      </div>

      <Card style={{ marginBottom: 24 }}>
        <Label style={{ display: "block", marginBottom: 12 }}>What This Covers</Label>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          Momentum is the quantity of motion — mass times velocity. The <strong style={{ fontWeight: 500, color: C.accent }}>impulse-momentum theorem</strong> links forces to momentum changes, while <strong style={{ fontWeight: 500, color: C.accent }}>conservation of momentum</strong> governs all collisions and explosions in isolated systems.
        </p>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          The math integration is <strong style={{ fontWeight: 500, color: C.accent }}>vectors and proportional reasoning</strong>: momentum and impulse are vector quantities — direction matters. Collision problems reduce to systems of equations.
        </p>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>{PART_LABELS.map((p, i) => <Tag key={i}>{p}</Tag>)}</div>
      </Card>

      <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>{MAIN_TABS.map(t => <button key={t} onClick={() => setTab(t)} style={tabBtn(t)}>{t}</button>)}</div>
      <div style={{ borderTop: `1px solid ${C.accent}44`, marginBottom: 28 }} />

      {tab === "lecture" && (
        <div className="bk-fade">
          <div style={{ display: "flex", gap: 3, marginBottom: 22, flexWrap: "wrap" }}>{PART_LABELS.map((lbl, i) => <button key={i} onClick={() => setPart(i)} style={partBtn(i)}>{lbl}</button>)}</div>

          {part === 0 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="Momentum p = mv is the vector product of mass and velocity. Impulse J = FΔt equals the change in momentum — Newton's second law restated. Both quantities share units: kg·m/s = N·s." points={["Momentum: p = mv. A vector quantity with direction matching velocity.", "Impulse: J = FΔt = Δp. Force applied over time changes momentum.", "Impulse-Momentum Theorem: F_net Δt = m(v_f − v_i). The bridge between force and motion change.", "Units: kg·m/s and N·s are equivalent — both measure momentum and impulse."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Momentum & Impulse Definitions</Label>
              <MathBlock>{"p = m · v                     momentum (kg·m/s)\n\nJ = F · Δt                    impulse (N·s)\n\nJ = Δp = m·v_f − m·v_i       impulse-momentum theorem\n\nF_net = Δp / Δt               Newton's 2nd law (momentum form)\n\nUnits: 1 N·s = 1 kg·m/s       (identical dimensionally)"}</MathBlock>
              {[["p = mv", "Heavier and faster objects carry more momentum — harder to stop"], ["J = FΔt", "Extend contact time to reduce average force (catching a ball, crumple zones)"], ["F_net = Δp/Δt", "Large Δp over short Δt → very large force (bat hitting ball)"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Impulse as Area Under F-t Curve</Label>
              <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                Impulse is the <strong style={{ fontWeight: 500, color: C.accent }}>area under the force-time graph</strong> — whether the force is constant or varies continuously. This is the graphical interpretation used in every exam.
              </p>
              {[["Constant force", "Rectangle: J = F × Δt. Area = height × width."], ["Varying force", "Curved area: J = ∫F dt. Approximate by counting grid squares."], ["Equal areas", "Different F-t shapes with the same area produce identical Δp."]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Real-World Impulse Applications</Label>
              <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                Engineering safety systems exploit J = FΔt: to stop a person (fixed Δp), increasing Δt reduces the peak force.
              </p>
              {[["Airbag", "Increases Δt from ~2 ms to ~50 ms — force drops by factor ~25"], ["Crumple zone", "Car body deforms, extending collision time and protecting occupants"], ["Catching technique", "Extend arm while catching to increase Δt and reduce hand force"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <HintBox variant="comp"><p><strong>Competition insight — Impulse approximation:</strong> In collision problems with very short contact time Δt, the impulse from gravity (mgΔt) is negligible compared to the collision impulse. You may treat the system as isolated during the collision itself even if gravity acts — the external impulse is simply too small to matter. Always state this explicitly in Olympiad solutions.</p></HintBox>

            <Card><MCField question="A 0.2 kg ball traveling at 5 m/s is caught and brought to rest in 0.04 s. What is the average force on the ball?" choices={["5 N", "10 N", "25 N", "50 N"]} correct={2} diff="easy" pts={3} explain="J = mΔv = 0.2 × 5 = 1 N·s. F = J/Δt = 1/0.04 = 25 N." /></Card>
          </div>)}

          {part === 1 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="In an isolated system — no net external force — total momentum before equals total momentum after. This law holds universally: for collisions, explosions, and separations." points={["Conservation law: Σp_before = Σp_after (isolated system only).", "Two-body form: m₁v₁ᵢ + m₂v₂ᵢ = m₁v₁f + m₂v₂f.", "Explosion from rest: total initial momentum = 0, so momenta of fragments are equal and opposite.", "External forces break conservation — check isolation carefully before applying."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Conservation of Momentum</Label>
              <MathBlock>{"Isolated system: Σ F_ext = 0\n\nΣ p_before = Σ p_after\n\nTwo bodies:\nm₁v₁ᵢ + m₂v₂ᵢ = m₁v₁f + m₂v₂f\n\nExplosion from rest (total p = 0):\nm₁v₁f + m₂v₂f = 0\n⟹ v₁f = −(m₂/m₁) v₂f"}</MathBlock>
              {[["Isolated system", "No net external force — gravity and friction may still act internally"], ["Two-body collision", "Four unknowns (v₁f, v₂f) — need one more equation unless it's inelastic"], ["Explosion at rest", "Fragments fly opposite directions; momenta equal in magnitude"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>When Is Momentum NOT Conserved?</Label>
              <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                Momentum conservation fails whenever a net external force acts over a significant time. Recognising these situations is as important as applying conservation.
              </p>
              {[["During collision (short Δt)", "External impulse ≈ 0 — use conservation freely"], ["After collision (long time)", "Friction decelerates the system — momentum decreases"], ["Projectile mid-flight", "Gravity acts continuously — x-momentum conserved, y-momentum not"], ["Rocket thrust", "External force — momentum changes by exhaust momentum expelled"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <HintBox variant="comp"><p><strong>Center-of-mass frame:</strong> In the CM frame, Σmᵢvᵢ = 0. Elastic collisions simplify beautifully — each object reverses direction with the same speed in this frame. Transform to CM frame using v_CM = Σmᵢvᵢ / Σmᵢ, solve there, then transform back. This technique appears in IPhO and APhO problems on 2D collisions.</p></HintBox>

            <Card><MCField question="Two objects collide. Before: object 1 (3 kg, 4 m/s right) and object 2 (2 kg, at rest). After: object 1 moves at 2 m/s right. Find the final velocity of object 2." choices={["1.5 m/s", "2.0 m/s", "3.0 m/s", "4.0 m/s"]} correct={2} diff="medium" pts={4} explain="3(4) + 2(0) = 3(2) + 2v₂ → 12 = 6 + 2v₂ → v₂ = 3.0 m/s." /></Card>
          </div>)}

          {part === 2 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="Collisions conserve momentum always (if isolated). Whether kinetic energy is also conserved determines the collision type. The coefficient of restitution e measures elasticity from 0 (perfectly inelastic) to 1 (perfectly elastic)." points={["Elastic: both momentum AND kinetic energy conserved. e = 1.", "Perfectly inelastic: objects stick together. e = 0. Maximum KE loss.", "Inelastic: momentum conserved, KE lost. 0 < e < 1. Most real collisions.", "Coefficient of restitution: e = |v₂f − v₁f| / |v₁ᵢ − v₂ᵢ| = speed of separation / speed of approach."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Collision Types & Equations</Label>
              <MathBlock>{"Elastic collision (1D, object 2 at rest):\n  v₁f = (m₁ − m₂)v₁ᵢ / (m₁ + m₂)\n  v₂f = 2m₁v₁ᵢ / (m₁ + m₂)\n\nPerfectly inelastic (objects stick):\n  v_f = (m₁v₁ᵢ + m₂v₂ᵢ) / (m₁ + m₂)\n\nCoefficient of restitution:\n  e = |v₂f − v₁f| / |v₁ᵢ − v₂ᵢ|\n  e = √(h'/h)   for bounce from height h"}</MathBlock>
              {[["e = 1 (elastic)", "KE conserved. Billiard balls, molecular gas collisions approximate this"], ["e = 0 (inelastic)", "Objects stick. Car crashes, clay striking wall. Maximum KE loss"], ["0 < e < 1 (partial)", "Most real macroscopic collisions. Tennis ball on concrete: e ≈ 0.7"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Energy Analysis in Collisions</Label>
              <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                Always check: is kinetic energy conserved? Compute KE before and after and compare.
              </p>
              <MathBlock>{"KE_before = ½m₁v₁ᵢ² + ½m₂v₂ᵢ²\nKE_after  = ½m₁v₁f² + ½m₂v₂f²\n\nΔKE = KE_before − KE_after  ≥ 0  (inelastic)\nΔKE = 0                           (elastic)\n\nMax KE loss in perfectly inelastic:\n  ΔKE_max = ½ · (m₁m₂)/(m₁+m₂) · (v₁ᵢ − v₂ᵢ)²"}</MathBlock>
            </Card>

            <HintBox variant="comp"><p><strong>Equal-mass elastic collision:</strong> If m₁ = m₂, use the elastic formulas: v₁f = (m−m)v/(2m) = 0 and v₂f = 2mv/(2m) = v. The moving object stops completely and the stationary one acquires the full velocity. This velocity exchange is the principle behind Newton's cradle and billiard shots.</p></HintBox>

            <Card><MCField question="A 1.5 kg object moving at 8 m/s collides and sticks with a 2.5 kg object at rest. What is the final common velocity?" choices={["2 m/s", "3 m/s", "4 m/s", "5 m/s"]} correct={1} diff="medium" pts={4} explain="Perfectly inelastic: v_f = (1.5×8 + 2.5×0)/(1.5+2.5) = 12/4 = 3 m/s." /></Card>
          </div>)}

          <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
            {part > 0 ? <button onClick={() => setPart(p => p - 1)} style={navBtn(false)}>← {PART_LABELS[part - 1]}</button> : <span />}
            {part < 2 ? <button onClick={() => setPart(p => p + 1)} style={navBtn(true)}>{PART_LABELS[part + 1]} →</button> : <button onClick={() => setTab("practice")} style={navBtn(true)}>Practice →</button>}
          </div>
        </div>
      )}

      {tab === "practice" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Card><Label style={{ display: "block", marginBottom: 6 }}>Problem Set · Momentum & Impulse</Label><p style={{ fontFamily: F.serif, fontSize: 13, color: C.dim, fontStyle: "italic" }}>6 problems · Easy → Medium · 22 pts total</p></Card>

        <Card><MCField question="A 5 kg object moves at 3 m/s. What is its momentum?" choices={["8 kg·m/s", "15 kg·m/s", "2 kg·m/s", "25 kg·m/s"]} correct={1} diff="easy" pts={3} explain="p = mv = 5 × 3 = 15 kg·m/s." /></Card>

        <Card><INTField question="A 2 kg ball experiences a constant force of 10 N for 0.5 seconds. Calculate the impulse in N·s." answer={5} diff="easy" pts={3} hint="J = FΔt = 10 × 0.5 = 5 N·s." /></Card>

        <Card><MCField question="Which quantity has the same units as momentum?" choices={["Force", "Impulse", "Kinetic energy", "Acceleration"]} correct={1} diff="easy" pts={3} explain="Impulse = FΔt has units N·s = kg·m/s, identical to momentum." /></Card>

        <Card><MCField question="A 0.2 kg ball traveling at 5 m/s is caught and brought to rest in 0.04 s. What is the average force on the ball?" choices={["5 N", "10 N", "25 N", "50 N"]} correct={2} diff="medium" pts={4} explain="J = mΔv = 0.2 × 5 = 1 N·s. F = J/Δt = 1/0.04 = 25 N." /></Card>

        <Card><MCField question="A 1.5 kg object moving at 8 m/s collides and sticks with a 2.5 kg object at rest. What is their common final velocity?" choices={["2 m/s", "3 m/s", "4 m/s", "5 m/s"]} correct={1} diff="medium" pts={4} explain="v_f = (m₁v₁ᵢ + m₂v₂ᵢ)/(m₁+m₂) = (1.5×8 + 0)/(4) = 12/4 = 3 m/s." /></Card>

        <Card><INTField question="A 1000 kg car accelerates from rest to 10 m/s. Calculate the change in momentum in kg·m/s." answer={10000} diff="medium" pts={4} hint="Δp = mΔv = 1000 × (10 − 0) = 10 000 kg·m/s. INT answer: 10000." /></Card>
      </div>)}

      {tab === "reference" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Momentum & Impulse</Label>
          <MathBlock>{"p = mv                        momentum (kg·m/s)\nJ = FΔt = Δp                  impulse-momentum theorem\nF_net = Δp/Δt                 Newton's 2nd (momentum form)\n\nConservation (isolated system):\nm₁v₁ᵢ + m₂v₂ᵢ = m₁v₁f + m₂v₂f\n\nPerfectly inelastic:\nv_f = (m₁v₁ᵢ + m₂v₂ᵢ) / (m₁ + m₂)"}</MathBlock>
        </Card>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Elastic Collisions & Restitution</Label>
          <MathBlock>{"Elastic (1D, v₂ᵢ = 0):\n  v₁f = (m₁−m₂)v₁ᵢ / (m₁+m₂)\n  v₂f = 2m₁v₁ᵢ / (m₁+m₂)\n\nEqual masses (m₁=m₂):\n  v₁f = 0,  v₂f = v₁ᵢ   (velocities exchange)\n\nCoefficient of restitution:\n  e = |v₂f−v₁f| / |v₁ᵢ−v₂ᵢ|\n  e = √(h'/h)  (bounce from height h to h')\n\ne=1 elastic · e=0 perfectly inelastic"}</MathBlock>
        </Card>
      </div>)}

      <div style={{ marginTop: 56, borderTop: `1px solid ${C.border}`, paddingTop: 18, display: "flex", justifyContent: "space-between" }}>
        <Mono style={{ fontSize: 9 }}>momentum · impulse · collisions · block 8</Mono>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="index.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>← Index</a>
          <a href="highscores.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>Highscores →</a>
        </div>
      </div>
    </div>
  </>);
}
