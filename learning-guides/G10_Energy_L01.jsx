import { useState } from "react";
import { C, F, Geo, GLOBAL_CSS, Card, Label, Mono, Dots, Tag, MathBlock, InfoRow, SummaryBox, HintBox, MCField, INTField } from "../project-template-files/block-kit.jsx";

const MAIN_TABS = ["lecture", "practice", "reference"];
const PART_LABELS = ["I · Work & Power", "II · Kinetic Energy & Work-Energy Theorem", "III · Potential Energy & Conservation"];

export default function G10EnergyL01() {
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
        <a href="learning-guides/G10_Energy_PS01.html" style={{ color: C.dim, textDecoration: "none" }}>Problem Set →</a>
      </div>

      <div className="bk-fade" style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}><Tag>Physics</Tag><Tag accent>Energy</Tag><Tag>Block 7–9</Tag></div>
        <h1 style={{ fontFamily: F.serif, fontSize: "clamp(26px,4vw,42px)", fontWeight: 500, color: C.heading, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 10, textShadow: `0 0 24px ${C.glowStr}` }}>Energy &<br /><em>Conservation Laws</em></h1>
        <p style={{ fontFamily: F.serif, fontSize: 15, color: C.dim, fontStyle: "italic" }}>Energy is the universal currency of physics. Work is how it transfers; power measures how fast. Conservation is the constraint that makes hard problems tractable.</p>
      </div>

      <Card style={{ marginBottom: 24 }}>
        <Label style={{ display: "block", marginBottom: 12 }}>What This Covers</Label>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          Energy appears in every branch of physics. At the G10 level we study its <strong style={{ fontWeight: 500, color: C.accent }}>mechanical forms</strong> — kinetic, gravitational potential, and elastic potential — and the principle that connects them: conservation of mechanical energy.
        </p>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          The mathematics is <strong style={{ fontWeight: 500, color: C.accent }}>algebraic and geometric</strong>: quadratic formulas for kinetic and spring energy, linear formulas for gravitational PE, and the work integral for variable forces. The physics insight is that energy bookkeeping often replaces force analysis.
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
              intro="Work is the mechanism of energy transfer — the product of force and displacement along the direction of motion. Power measures how quickly that transfer happens."
              points={[
                "Work: W = Fd cosθ. Only the component of force parallel to displacement does work. Work can be positive, negative, or zero.",
                "Zero work: force perpendicular to motion (e.g., centripetal force, normal force on flat ground).",
                "Average power: P = W/Δt. Instantaneous power: P = Fv cosφ. Both measured in watts (W = J/s).",
                "Sign of work matters: positive work adds energy; negative work removes it. Net work = change in KE."
              ]}
            />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Work — Definition & Formula</Label>
              <MathBlock>{"W = F · d · cos θ\n\nF = force (N)\nd = displacement (m)\nθ = angle between force vector and displacement\nW = joules (J)\n\nSpecial cases:\n  θ = 0°  → W = Fd        (force aids motion)\n  θ = 90° → W = 0         (perpendicular, no work)\n  θ = 180° → W = −Fd      (force opposes motion)"}</MathBlock>
              {[
                ["W > 0", "Force has a component along motion — object speeds up or gains energy"],
                ["W = 0", "Force is perpendicular to motion, or object doesn't move"],
                ["W < 0", "Force opposes motion — object loses energy (e.g., friction, gravity on rising object)"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Power — Average and Instantaneous</Label>
              <MathBlock>{"P_avg = W / Δt          average power\n\nP = F · v · cos φ      instantaneous power\n     = dW/dt\n\nUnits: P — watts (W = J/s)\n       1 horsepower = 746 W\n\nExample: lifting 50 kg through 10 m in 5 s:\n  W = mgh = 50 × 9.8 × 10 = 4900 J\n  P = 4900 / 5 = 980 W"}</MathBlock>
              {[
                ["P = W/Δt", "Same work done faster → greater power required"],
                ["P = Fv", "At constant force, power grows linearly with speed"],
                ["1 kW", "A typical human's sustained power output is ~100 W; a car engine ~75–150 kW"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Work on an Incline — Worked Example</Label>
              <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                A 10 kg box is pushed up a frictionless 30° incline at constant velocity over 4 m. The applied force is parallel to the incline.
              </p>
              <MathBlock>{"Gravity's work:\n  h = 4 sin 30° = 2 m\n  W_g = −mgh = −(10)(9.8)(2) = −196 J  (negative)\n\nApplied force at constant velocity:\n  Net force = 0 → F_applied = mg sin 30° = 49 N\n  W_applied = 49 × 4 = +196 J\n\nNet work = 0 → consistent with ΔKE = 0"}</MathBlock>
            </Card>

            <HintBox variant="comp">
              <p><strong>Competition insight — Instantaneous power grows with speed:</strong> For a car accelerating with constant engine force F, power P = Fv increases linearly with speed. Real engines deliver constant <em>power</em> (not force), so force decreases as speed increases: F = P/v. At competition level, watch for problems that distinguish "constant force" from "constant power" — they lead to different acceleration profiles and very different energy analysis.</p>
            </HintBox>

            <Card>
              <MCField
                question="A motor lifts a 50 kg mass vertically 10 m at constant speed in 5 seconds. What is the motor's power output?"
                choices={["490 W", "980 W", "245 W", "4900 W"]}
                correct={1}
                diff="easy"
                pts={3}
                explain="W = mgh = (50)(9.8)(10) = 4900 J. P = W/Δt = 4900/5 = 980 W. Note: constant speed means zero net work, so all power goes into gravitational PE."
              />
            </Card>
          </div>)}

          {part === 1 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox
              intro="Kinetic energy is the energy of motion — it grows as the square of speed. The work-energy theorem connects forces (and the work they do) directly to changes in kinetic energy, bypassing acceleration entirely."
              points={[
                "Kinetic energy: KE = ½mv². Always non-negative; direction of motion doesn't matter.",
                "Work-energy theorem: W_net = ΔKE = ½m(v_f² − v_i²). The net work on an object equals the change in its KE.",
                "Doubling speed quadruples KE (v² dependence). This is why high-speed collisions are so dangerous.",
                "The theorem is a consequence of Newton's 2nd law — not a new law, but often more useful when forces are complex."
              ]}
            />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Kinetic Energy</Label>
              <MathBlock>{"KE = ½ m v²\n\nm = mass (kg)\nv = speed (m/s)   — speed, not velocity: KE ≥ 0\nKE = joules (J)\n\nComparison at same speed:\n  KE ∝ m   — heavier object has more KE\n\nComparison at same mass:\n  KE ∝ v²  — doubling speed → 4× KE\n             tripling speed → 9× KE"}</MathBlock>
              {[
                ["Always ≥ 0", "Depends on v² — speed, not direction"],
                ["1 kg at 10 m/s", "KE = ½(1)(100) = 50 J"],
                ["2 kg at 10 m/s", "KE = ½(2)(100) = 100 J — twice the mass, twice the KE"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Work-Energy Theorem</Label>
              <MathBlock>{"W_net = ΔKE = ½m(v_f² − v_i²)\n\nW_net = total work by ALL forces on the object\n\nApplication — block sliding to rest:\n  KE_i = ½(5)(10²) = 250 J\n  KE_f = 0\n  W_friction = ΔKE = −250 J\n  −f · d = −250 → d = 250/f\n\nNo need to find acceleration — energy is direct."}</MathBlock>
              {[
                ["W_net > 0", "Object speeds up (KE increases)"],
                ["W_net = 0", "Object moves at constant speed (e.g., constant velocity)"],
                ["W_net < 0", "Object slows down (KE decreases, energy removed by friction or opposing force)"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Worked Example — Friction Stopping Distance</Label>
              <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                A 5 kg block slides on a rough floor. Initial speed: 10 m/s. Friction force: 20 N. How far before stopping?
              </p>
              <MathBlock>{"W_net = ΔKE\n−f · d = KE_f − KE_i\n−20d = 0 − 250\nd = 12.5 m\n\nThe friction force did −250 J of work,\nexactly dissipating the initial kinetic energy."}</MathBlock>
            </Card>

            <HintBox variant="comp">
              <p><strong>Competition shortcut — work-energy avoids kinematics:</strong> For non-constant or position-dependent forces, W = ∫F dx and the theorem W_net = ΔKE still holds. A particle subject to F(x) = 3x² from x = 1 m to x = 3 m undergoes work W = ∫₁³ 3x² dx = [x³]₁³ = 27 − 1 = 26 J. The corresponding ΔKE = 26 J immediately, without solving the differential equation F = ma. Olympiad problems exploit this constantly.</p>
            </HintBox>

            <Card>
              <MCField
                question="A 3 kg block starts from rest and is accelerated by a net force of 12 N over 2 m on a frictionless surface. What is its final kinetic energy?"
                choices={["6 J", "12 J", "24 J", "36 J"]}
                correct={2}
                diff="medium"
                pts={4}
                explain="W_net = Fd = (12)(2) = 24 J. By the work-energy theorem, ΔKE = 24 J. Since KE_i = 0, KE_f = 24 J. No need to find acceleration or use kinematics."
              />
            </Card>
          </div>)}

          {part === 2 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox
              intro="Potential energy is stored energy — gravitational PE due to height, elastic PE due to spring deformation. When only conservative forces act, the sum KE + PE is constant: energy conservation."
              points={[
                "Gravitational PE: PE_g = mgh. Reference height h = 0 is arbitrary — only differences in PE matter physically.",
                "Elastic PE: PE_s = ½kx². Always non-negative; same energy whether spring is stretched or compressed by x.",
                "Conservation of mechanical energy (no friction): KE + PE = constant. Gain in KE equals loss in PE, and vice versa.",
                "With friction: E_initial = E_final + Q_friction. Mechanical energy decreases; the lost energy heats the surfaces."
              ]}
            />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Gravitational Potential Energy</Label>
              <MathBlock>{"PE_g = m · g · h\n\nm = mass (kg)\ng = 9.8 m/s²  (use 10 m/s² for competition arithmetic)\nh = height above reference level (m)\nPE_g = joules (J)\n\nKey: only Δh matters — choice of h = 0 is free.\n  PE at height 5 m above floor:\n    = mg(5)   [if floor is reference]\n    = mg(5−0) [if floor is reference]\n  Same physics either way."}</MathBlock>
              {[
                ["Δh > 0", "Object rises — PE increases, work done against gravity"],
                ["Δh < 0", "Object falls — PE decreases, gravity does positive work"],
                ["Reference", "h = 0 is arbitrary; only ΔPE = mgΔh enters the energy equation"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Elastic Potential Energy (Spring)</Label>
              <MathBlock>{"PE_s = ½ k x²\n\nk = spring constant (N/m) — stiffer spring, larger k\nx = deformation from equilibrium (m)\n\nPE_s ≥ 0 always (x² ≥ 0)\n\nExample — spring launch:\n  k = 200 N/m, x = 0.1 m compressed\n  PE_s = ½(200)(0.01) = 1 J\n  Released onto 0.5 kg block (frictionless):\n  ½mv² = 1 J → v² = 4 → v = 2 m/s"}</MathBlock>
              {[
                ["k large", "Stiff spring — stores more energy for same deformation"],
                ["PE_s = ½kx²", "Parabolic: doubling compression → 4× stored energy"],
                ["Equilibrium", "At x = 0, PE_s = 0 — spring in natural length stores no energy"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Conservation of Mechanical Energy</Label>
              <MathBlock>{"Frictionless system (conservative forces only):\n\n  KE_i + PE_i = KE_f + PE_f\n  E_total = KE + PE_g + PE_s = constant\n\nWith friction (non-conservative):\n\n  E_i = E_f + Q_friction\n  Q_friction = f · d  (heat generated)\n\nRoller coaster example (h₁=10 m, h₂=8 m, g=9.8):\n  v_bottom: ½mv² = mgh₁ → v = √(2×9.8×10) = 14 m/s\n  v_at_8m: ½mv² = mg(h₁−h₂) → v = √(2×9.8×2) ≈ 6.3 m/s"}</MathBlock>
              {[
                ["Conservative forces", "Gravity, springs — path doesn't matter, only endpoints"],
                ["Non-conservative", "Friction, air resistance — path-dependent; dissipate energy as heat"],
                ["E_total = const", "The most powerful constraint in mechanics — often replaces F = ma entirely"]
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <HintBox variant="comp">
              <p><strong>Competition insight — coefficient of restitution:</strong> A ball dropped from height h₀ bouncing to height h₁ loses mechanical energy ΔE = mg(h₀ − h₁) to deformation, sound, and heat. The coefficient of restitution e = √(h₁/h₀) quantifies this: e = 1 is perfectly elastic; e = 0 is perfectly inelastic. Advanced problem setters use multi-bounce sequences: after n bounces, h_n = h₀ · e^{2n}. This combines conservation of energy, geometric sequences, and the physics of collisions in one problem.</p>
            </HintBox>

            <Card>
              <MCField
                question="A 2 kg box slides down a frictionless 30° incline from rest, descending a vertical height of 5 m. What is its speed at the bottom? (Use g = 10 m/s²)"
                choices={["5 m/s", "7.1 m/s", "10 m/s", "20 m/s"]}
                correct={2}
                diff="medium"
                pts={4}
                explain="Energy conservation: mgh = ½mv² → v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s. The incline angle is irrelevant — only the vertical height drop determines the final speed on a frictionless surface."
              />
            </Card>
          </div>)}

          <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
            {part > 0 ? <button onClick={() => setPart(p => p - 1)} style={navBtn(false)}>← {PART_LABELS[part - 1]}</button> : <span />}
            {part < 2 ? <button onClick={() => setPart(p => p + 1)} style={navBtn(true)}>{PART_LABELS[part + 1]} →</button> : <button onClick={() => setTab("practice")} style={navBtn(true)}>Practice →</button>}
          </div>
        </div>
      )}

      {tab === "practice" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Card>
          <Label style={{ display: "block", marginBottom: 6 }}>Problem Set · Energy</Label>
          <p style={{ fontFamily: F.serif, fontSize: 13, color: C.dim, fontStyle: "italic" }}>6 problems · Easy → Medium · 22 pts total</p>
        </Card>

        <Card>
          <MCField
            question="A 2 kg book is lifted vertically 1.5 m at constant velocity. How much work is done against gravity?"
            choices={["15 J", "29.4 J", "3 J", "0 J"]}
            correct={1}
            diff="easy"
            pts={3}
            explain="W = mgh = (2)(9.8)(1.5) = 29.4 J. At constant velocity, the lifting force exactly equals gravity, so all work goes into gravitational PE."
          />
        </Card>

        <Card>
          <INTField
            question="A 4 kg block is pushed along a frictionless surface with a constant force of 10 N in the direction of motion. Over a distance of 3 m, how much work is done (in joules)?"
            answer={30}
            diff="easy"
            pts={3}
            hint="W = Fd = (10)(3) = 30 J. Force is parallel to displacement, so θ = 0° and cosθ = 1."
          />
        </Card>

        <Card>
          <MCField
            question="A spring with spring constant 100 N/m is stretched 0.2 m. How much elastic potential energy is stored?"
            choices={["2 J", "4 J", "20 J", "10 J"]}
            correct={0}
            diff="easy"
            pts={3}
            explain="PE_s = ½kx² = ½(100)(0.2²) = ½(100)(0.04) = 2 J. Note: compressing the same spring by 0.2 m stores identical energy."
          />
        </Card>

        <Card>
          <MCField
            question="A 3 kg block starts from rest and is accelerated by a net force of 12 N over 2 m on a frictionless surface. What is its final kinetic energy?"
            choices={["6 J", "12 J", "24 J", "36 J"]}
            correct={2}
            diff="medium"
            pts={4}
            explain="W_net = Fd = (12)(2) = 24 J. By the work-energy theorem, ΔKE = W_net = 24 J. Starting from rest, KE_f = 24 J."
          />
        </Card>

        <Card>
          <INTField
            question="A ball of mass 0.5 kg is thrown upward with an initial speed of 20 m/s. Using energy conservation (no air resistance), at what height (in metres) will its speed be 10 m/s? (Use g = 10 m/s²)"
            answer={15}
            diff="medium"
            pts={4}
            hint="½mv_i² = ½mv_f² + mgh → h = (v_i² − v_f²)/(2g) = (400 − 100)/(20) = 300/20 = 15 m."
          />
        </Card>

        <Card>
          <MCField
            question="A 2 kg box slides down a frictionless incline, descending a vertical height of 5 m. What is its speed at the bottom? (Use g = 10 m/s²)"
            choices={["5 m/s", "7.1 m/s", "10 m/s", "20 m/s"]}
            correct={2}
            diff="medium"
            pts={4}
            explain="mgh = ½mv² → v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s. The incline angle and path shape are irrelevant — only the vertical height drop matters for a frictionless surface."
          />
        </Card>
      </div>)}

      {tab === "reference" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Work, Power & Kinetic Energy</Label>
          <MathBlock>{"W = F · d · cosθ           work (J)\nP_avg = W / Δt             average power (W)\nP = F · v · cosφ           instantaneous power\nKE = ½mv²                  kinetic energy (J)\nW_net = ΔKE = ½m(v_f²−v_i²)   work-energy theorem"}</MathBlock>
        </Card>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Potential Energy & Conservation</Label>
          <MathBlock>{"PE_g = mgh                 gravitational PE (J)\nPE_s = ½kx²               elastic (spring) PE (J)\n\nConservation (no friction):\n  KE_i + PE_i = KE_f + PE_f\n\nWith friction:\n  E_i = E_f + Q_friction\n  Q = f · d              heat dissipated\n\nInstantaneous power: P = Fv  (φ = 0)\nCoeff. of restitution: e = √(h_rebound / h_drop)"}</MathBlock>
        </Card>
      </div>)}

      <div style={{ marginTop: 56, borderTop: `1px solid ${C.border}`, paddingTop: 18, display: "flex", justifyContent: "space-between" }}>
        <Mono style={{ fontSize: 9 }}>energy · work · power · conservation · block 7–9</Mono>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="index.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>← Index</a>
          <a href="highscores.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>Highscores →</a>
        </div>
      </div>
    </div>
  </>);
}
