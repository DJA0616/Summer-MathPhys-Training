import { useState } from "react";
import { C, F, Geo, GLOBAL_CSS, Card, Label, Mono, Dots, Tag, MathBlock, InfoRow, SummaryBox, HintBox, MCField, INTField } from "../project-template-files/block-kit.jsx";

const MAIN_TABS = ["lecture", "practice", "reference"];
const PART_LABELS = ["I · Centripetal Acceleration & Force", "II · Horizontal Circular Motion", "III · Vertical Circles & Banked Curves"];

export default function G10CircularMotionL01() {
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
        <a href="learning-guides/G10_CircularMotion_PS01.html" style={{ color: C.dim, textDecoration: "none" }}>Problem Set →</a>
      </div>

      <div className="bk-fade" style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}><Tag>Physics</Tag><Tag accent>Mechanics</Tag><Tag>Block 8</Tag></div>
        <h1 style={{ fontFamily: F.serif, fontSize: "clamp(26px,4vw,42px)", fontWeight: 500, color: C.heading, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 10, textShadow: `0 0 24px ${C.glowStr}` }}>Uniform Circular Motion &<br /><em>Centripetal Dynamics</em></h1>
        <p style={{ fontFamily: F.serif, fontSize: 15, color: C.dim, fontStyle: "italic" }}>Constant speed does not mean constant velocity. Direction-change is acceleration — and every curve demands a force to maintain it.</p>
      </div>

      <Card style={{ marginBottom: 24 }}>
        <Label style={{ display: "block", marginBottom: 12 }}>What This Covers</Label>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          An object moving in a circle at constant speed is not in equilibrium — its velocity vector is continuously rotating. The acceleration responsible for this rotation always points <strong style={{ fontWeight: 500, color: C.accent }}>toward the center</strong>, and Newton's second law demands a real, inward force to sustain it. We call this the <strong style={{ fontWeight: 500, color: C.accent }}>centripetal force</strong>.
        </p>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          The math integration is <strong style={{ fontWeight: 500, color: C.accent }}>vector decomposition</strong>: every circular-motion problem reduces to resolving real forces along the radial (inward) and tangential directions, then applying F = ma radially.
        </p>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>{["I · Centripetal Acceleration & Force", "II · Horizontal Circular Motion", "III · Vertical Circles & Banked Curves"].map((p, i) => <Tag key={i}>{p}</Tag>)}</div>
      </Card>

      <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>{MAIN_TABS.map(t => <button key={t} onClick={() => setTab(t)} style={tabBtn(t)}>{t}</button>)}</div>
      <div style={{ borderTop: `1px solid ${C.accent}44`, marginBottom: 28 }} />

      {tab === "lecture" && (
        <div className="bk-fade">
          <div style={{ display: "flex", gap: 3, marginBottom: 22, flexWrap: "wrap" }}>{PART_LABELS.map((lbl, i) => <button key={i} onClick={() => setPart(i)} style={partBtn(i)}>{lbl}</button>)}</div>

          {part === 0 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox
              intro="An object in uniform circular motion has constant speed but changing direction — meaning it accelerates. This centripetal acceleration always points toward the center of the circle. Newton's second law then requires a real inward force of the same direction."
              points={[
                "Centripetal acceleration: aᶜ = v²/r = ω²r. Points inward; perpendicular to velocity.",
                "Angular velocity: ω = v/r = 2π/T = 2πf. Relates linear and rotational descriptions.",
                "Centripetal force: Fᶜ = maᶜ = mv²/r = mω²r. This is the net inward force — not a new kind of force.",
                "Because Fᶜ ⊥ v always, centripetal force does zero work. Speed stays constant.",
              ]}
            />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Centripetal Acceleration</Label>
              <MathBlock>{"aᶜ = v²/r = ω²r = 4π²r/T²\n\nv  — linear speed (m/s)\nr  — radius of circle (m)\nω  — angular velocity (rad/s)\nT  — period (s), f — frequency (Hz)\n\nDirection: always toward center (inward)\nMagnitude: constant in uniform circular motion"}</MathBlock>
              {[
                ["aᶜ = v²/r", "Larger speed or tighter curve → stronger centripetal acceleration"],
                ["aᶜ = ω²r", "Equivalent form using angular velocity; useful when ω or T is given"],
                ["aᶜ = 4π²r/T²", "Best form when period T is known directly (orbits, pendulums)"],
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Centripetal Force</Label>
              <MathBlock>{"Fᶜ = m·aᶜ = mv²/r = mω²r\n\nProvided by real forces:\n  Tension T           — ball on string, conical pendulum\n  Normal force N      — car on loop, roller coaster\n  Friction f          — car on flat curve\n  Gravity mg          — satellite in orbit\n  Combination         — banked curve, inclined tracks"}</MathBlock>
              {[
                ["Fᶜ is net inward force", "'Centripetal' names the role, not a new force — always identify the real source"],
                ["Work done = 0", "Fᶜ ⊥ v at every instant → no work, no change in kinetic energy"],
                ["Tangential release", "If the inward force vanishes (string snaps), object flies off tangentially — not outward"],
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Angular Velocity & Period</Label>
              <MathBlock>{"ω = v/r = 2π/T = 2πf\n\nT = 2πr/v = 2π/ω      period (s)\nf = 1/T                frequency (Hz)\n\nConversion: 1 rev = 2π rad\n  1 rpm = 2π/60 rad/s ≈ 0.1047 rad/s"}</MathBlock>
              {[
                ["ω = 2π/T", "Angular velocity from period — most common in exam problems"],
                ["v = ωr", "Bridge between angular and linear description of the same motion"],
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <HintBox variant="comp">
              <p><strong>The Illusion of Centrifugal Force:</strong> In the rotating reference frame of the object, a fictitious outward "centrifugal force" appears to push the object away from the center. This force is not real — it exists only because the frame is non-inertial. In the inertial (ground) frame, only real forces act, always pointing <em>inward</em>. Olympiad problems exploit this: a ball "pushed outward" in a rotating bucket is actually following a straight line as the bucket curves beneath it.</p>
            </HintBox>

            <Card><MCField question="An object moves in a circle of radius 2 m at constant speed 6 m/s. What is the centripetal acceleration?" choices={["3 m/s²", "9 m/s²", "18 m/s²", "36 m/s²"]} correct={2} diff="easy" pts={3} explain="aᶜ = v²/r = 36/2 = 18 m/s²." /></Card>
          </div>)}

          {part === 1 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox
              intro="In horizontal circular motion the object moves in a flat circle. There is no vertical acceleration, so forces balance vertically. The net horizontal force — tension, friction, or the horizontal component of normal force — provides the centripetal force."
              points={[
                "Ball on string (horizontal): Tension provides Fᶜ entirely. Tsinθ = mv²/r; Tcosθ = mg.",
                "Car on flat road: Static friction provides Fᶜ. Maximum speed before skidding: v_max = √(μₛgr).",
                "Conical pendulum: Period T = 2π√(Lcosθ/g). Independent of mass; depends only on geometry.",
                "If centripetal force is insufficient, object skids or flies tangentially — never outward in an arc.",
              ]}
            />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Ball on String — Conical Pendulum</Label>
              <MathBlock>{"String length L, angle θ from vertical:\n\nVertical:    T·cosθ = mg\nHorizontal:  T·sinθ = mv²/r = mω²r\n\nr = L·sinθ      (radius of circle)\n\nDividing: tanθ = v²/(rg) = ω²r/g\n\nPeriod:  T_period = 2π√(L·cosθ / g)"}</MathBlock>
              {[
                ["T = mg/cosθ", "Tension always exceeds weight in a conical pendulum"],
                ["r = L sinθ", "Radius shrinks as string becomes more vertical (θ → 0)"],
                ["T_period independent of m", "Period determined by geometry alone — useful for precision timing"],
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Car on Flat Road</Label>
              <MathBlock>{"Normal force: N = mg   (flat road, no vertical acceleration)\n\nFriction provides centripetal force:\n  f = μₛ·N = μₛ·mg ≥ mv²/r\n\nMaximum speed before skidding:\n  v_max = √(μₛ·g·r)\n\nCentripetal acceleration at v_max:\n  aᶜ = μₛ·g    (independent of mass!)"}</MathBlock>
              {[
                ["v_max = √(μₛgr)", "Maximum cornering speed depends on friction, gravity, and radius — not car mass"],
                ["aᶜ = μₛg", "Maximum lateral acceleration is always the friction coefficient times g"],
                ["Road camber matters", "A flat road relies entirely on friction; a banked road can steer with normal force"],
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <HintBox variant="comp">
              <p><strong>Energy + Force Integration:</strong> Competition problems often combine circular-motion force analysis with energy conservation. For example: find the minimum initial speed for a ball to maintain contact around a loop. The strategy is always (1) identify the constraint (T ≥ 0 or N ≥ 0), (2) write the radial force equation at the critical point, (3) link speeds via energy conservation. This two-step coupling unlocks most olympiad circular-motion problems.</p>
            </HintBox>

            <Card><MCField question="A car enters a flat, unbanked circular curve of radius 80 m. The coefficient of static friction is 0.6. What is the maximum speed before skidding (approx.)?" choices={["12 m/s", "21.9 m/s", "48 m/s", "69 m/s"]} correct={1} diff="medium" pts={4} explain="v_max = √(μₛgr) = √(0.6 × 10 × 80) = √480 ≈ 21.9 m/s." /></Card>
          </div>)}

          {part === 2 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox
              intro="In vertical circular motion, gravity acts along the radial direction at the top and bottom — adding to or subtracting from the centripetal requirement. Banked curves use the slope geometry to redirect normal force inward, reducing reliance on friction."
              points={[
                "Top of loop: N + mg = mv²/r (both inward). Minimum speed: v_min = √(gr) when N = 0.",
                "Bottom of loop: N − mg = mv²/r (N inward, mg outward). N = mg + mv²/r > mg always.",
                "Energy links top and bottom: ½mv_bot² = ½mv_top² + mg(2r).",
                "Banked curve (no friction): tanθ = v²/(rg). Normal force alone steers the car.",
              ]}
            />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Vertical Circle — Top & Bottom</Label>
              <MathBlock>{"At the TOP (both N and mg point toward center):\n  N + mg = mv²/r\n  N = m(v²/r − g)\n  → N = 0 at v_min = √(gr)   [contact lost below this]\n\nAt the BOTTOM (N up, mg down):\n  N − mg = mv²/r\n  N = mg + mv²/r   [always greater than mg]\n\nEnergy conservation (no friction):\n  ½v_bot² = ½v_top² + g(2r)\n  v_top² = v_bot² − 4gr"}</MathBlock>
              {[
                ["v_min,top = √(gr)", "Critical minimum — gravity alone provides all the centripetal force at this speed"],
                ["N_bottom > mg", "You feel heavier at the bottom of a loop — normal force exceeds weight"],
                ["Top is the critical point", "If the object makes it around the top, it will complete the loop — the bottom always has excess speed"],
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Banked Curves</Label>
              <MathBlock>{"No friction — force balance:\n  N·cosθ = mg          (vertical)\n  N·sinθ = mv²/r       (horizontal, centripetal)\n\nDivide → ideal banking angle:\n  tanθ = v²/(rg)\n\nNormal force:\n  N = mg / cosθ   (always > mg)\n\nWith friction (above ideal speed):\n  Friction acts DOWN the slope (opposes tendency to slide up)\n\nWith friction (below ideal speed):\n  Friction acts UP the slope (opposes tendency to slide down)"}</MathBlock>
              {[
                ["tanθ = v²/(rg)", "Ideal angle: the horizontal component of N alone provides Fᶜ — no friction needed"],
                ["N = mg/cosθ", "Banked-road normal force always exceeds flat-road normal force for same weight"],
                ["Faster → friction down slope", "Above ideal speed: car tends to slide up the bank; friction pulls it back down"],
              ].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <HintBox variant="comp">
              <p><strong>Minimum Height for Loop Completion:</strong> A classic olympiad problem — a ball starts from rest at height h above the bottom of a loop of radius r. Find the minimum h such that the ball completes the loop. Strategy: at the top, N = 0 gives v_top² = gr. Energy: gh = ½v_top² + g(2r) = ½gr + 2gr = (5/2)gr. So <strong>h_min = 5r/2</strong>. The factor 5/2 is exact and very frequently tested.</p>
            </HintBox>

            <Card><MCField question="A roller coaster cart (mass 1000 kg) enters a vertical loop of radius 8 m at the bottom with speed 20 m/s. Using energy conservation, what is the approximate speed at the top? (g = 10 m/s²)" choices={["6 m/s", "9 m/s", "12 m/s", "18 m/s"]} correct={1} diff="medium" pts={4} explain="v_top² = v_bot² − 4gr = 400 − 4(10)(8) = 400 − 320 = 80. v_top = √80 ≈ 8.9 ≈ 9 m/s." /></Card>
          </div>)}

          <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
            {part > 0 ? <button onClick={() => setPart(p => p - 1)} style={navBtn(false)}>← {PART_LABELS[part - 1]}</button> : <span />}
            {part < 2 ? <button onClick={() => setPart(p => p + 1)} style={navBtn(true)}>{PART_LABELS[part + 1]} →</button> : <button onClick={() => setTab("practice")} style={navBtn(true)}>Practice →</button>}
          </div>
        </div>
      )}

      {tab === "practice" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Card><Label style={{ display: "block", marginBottom: 6 }}>Problem Set · Circular Motion</Label><p style={{ fontFamily: F.serif, fontSize: 13, color: C.dim, fontStyle: "italic" }}>6 problems · Easy → Medium · 22 pts total</p></Card>

        <Card><MCField question="An object moves in a circle of radius 2 m at constant speed 6 m/s. What is the centripetal acceleration?" choices={["3 m/s²", "9 m/s²", "18 m/s²", "36 m/s²"]} correct={2} diff="easy" pts={3} explain="aᶜ = v²/r = 36/2 = 18 m/s²." /></Card>

        <Card><INTField question="A mass of 0.5 kg moves in a horizontal circle of radius 1 m at speed 4 m/s. What is the centripetal force in newtons?" answer={8} diff="easy" pts={3} hint="Fᶜ = mv²/r = (0.5)(16)/1 = 8 N." /></Card>

        <Card><INTField question="At the top of a vertical loop of radius 10 m, what is the minimum speed (in m/s) to maintain contact with the track? Use g = 10 m/s²." answer={10} diff="easy" pts={3} hint="v_min = √(gr) = √(10 × 10) = 10 m/s. Below this, N would go negative — meaning contact is lost." /></Card>

        <Card><MCField question="A car enters a flat, unbanked circular curve of radius 80 m. The coefficient of static friction is 0.6. What is the maximum speed before skidding (approx.)?" choices={["12 m/s", "21.9 m/s", "48 m/s", "69 m/s"]} correct={1} diff="medium" pts={4} explain="v_max = √(μₛgr) = √(0.6 × 10 × 80) = √480 ≈ 21.9 m/s." /></Card>

        <Card><MCField question="A 2 kg mass is attached to a 1 m string and swung in a vertical circle. At the bottom, the tension is 50 N. What is the speed at the bottom (approx.)?" choices={["2 m/s", "3.8 m/s", "4.5 m/s", "5 m/s"]} correct={1} diff="medium" pts={4} explain="T = mg + mv²/r → 50 = 20 + 2v² → v² = 15 → v ≈ 3.87 m/s ≈ 3.8 m/s." /></Card>

        <Card><INTField question="A roller coaster cart enters a vertical loop of radius 8 m at the bottom with speed 20 m/s. Using energy conservation, what is the speed at the top in m/s (rounded to nearest integer)?" answer={9} diff="medium" pts={4} hint="v_top² = v_bot² − 4gr = 400 − 320 = 80. v_top = √80 ≈ 8.9 ≈ 9 m/s." /></Card>
      </div>)}

      {tab === "reference" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Centripetal Motion — Core Formulas</Label>
          <MathBlock>{"aᶜ = v²/r = ω²r = 4π²r/T²     centripetal acceleration\nFᶜ = maᶜ = mv²/r = mω²r        centripetal force\n\nω = v/r = 2π/T = 2πf           angular velocity\nT = 2πr/v = 2π/ω               period\n\nConical pendulum:\n  T·cosθ = mg,  T·sinθ = mv²/r\n  T_period = 2π√(L·cosθ/g)\n\nCar on flat road:\n  v_max = √(μₛ·g·r)"}</MathBlock>
        </Card>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Vertical Circles & Banked Curves</Label>
          <MathBlock>{"Vertical circle — top:\n  N + mg = mv²/r\n  v_min = √(gr)   when N = 0\n\nVertical circle — bottom:\n  N = mg + mv²/r    (N > mg always)\n\nEnergy between top & bottom:\n  v_top² = v_bot² − 4gr\n  h_min to complete loop = 5r/2\n\nBanked curve (no friction):\n  tanθ = v²/(rg)\n  N = mg/cosθ"}</MathBlock>
        </Card>
      </div>)}

      <div style={{ marginTop: 56, borderTop: `1px solid ${C.border}`, paddingTop: 18, display: "flex", justifyContent: "space-between" }}>
        <Mono style={{ fontSize: 9 }}>circular motion · centripetal · vertical circles · banked curves · block 8</Mono>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="index.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>← Index</a>
          <a href="highscores.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>Highscores →</a>
        </div>
      </div>
    </div>
  </>);
}
