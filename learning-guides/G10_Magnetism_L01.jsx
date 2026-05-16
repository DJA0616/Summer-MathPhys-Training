import { useState } from "react";
import { C, F, Geo, GLOBAL_CSS, Card, Label, Mono, Tag, Rule, MathBlock, InfoRow, QuoteBlock, HintBox, SummaryBox, MCField, INTField } from "../project-template-files/block-kit.jsx";

const MAIN_TABS = ["lecture", "practice", "reference"];
const PART_LABELS = ["I · Magnetic Fields", "II · Force on Charges", "III · Force on Wires", "IV · Induction"];

export default function G10MagnetismL01() {
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
        <a href="../index.html" style={{ color: C.dim, textDecoration: "none" }}>← Index</a>
        <span style={{ color: C.muted }}>|</span>
        <a href="highscores.html" style={{ color: C.dim, textDecoration: "none" }}>Highscores</a>
      </div>

      <div className="bk-fade" style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}><Tag>Physics</Tag><Tag accent>Magnetism</Tag><Tag>Block 11</Tag></div>
        <h1 style={{ fontFamily: F.serif, fontSize: "clamp(26px,4vw,42px)", fontWeight: 500, color: C.heading, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 10, textShadow: `0 0 24px ${C.glowStr}` }}>Magnetism &<br /><em>Electromagnetic Induction</em></h1>
        <p style={{ fontFamily: F.serif, fontSize: 15, color: C.dim, fontStyle: "italic" }}>Moving charges create magnetic fields. Magnetic fields exert forces on moving charges. Faraday showed that changing magnetic fields create electric fields — unifying electricity and magnetism.</p>
      </div>

      <Card style={{ marginBottom: 24 }}>
        <Label style={{ display: "block", marginBottom: 12 }}>What This Covers</Label>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          Magnetism is the second half of electromagnetism. Where electrostatics dealt with stationary charges, magnetism deals with <strong style={{ fontWeight: 500, color: C.accent }}>moving charges</strong>. A moving charge creates a magnetic field B; a magnetic field exerts a force on a moving charge. The interaction is fundamentally vectorial — the force is perpendicular to both velocity and field.
        </p>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          Faraday's discovery — that a changing magnetic field induces an electric field — completed the unification. Together with Maxwell's displacement current (beyond G10 scope), these four laws form the complete theory of classical electromagnetism.
        </p>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>{["I · Magnetic Fields", "II · Force on Charges", "III · Force on Wires", "IV · Induction"].map((p, i) => <Tag key={i}>{p}</Tag>)}</div>
      </Card>

      <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>{MAIN_TABS.map(t => <button key={t} onClick={() => setTab(t)} style={tabBtn(t)}>{t}</button>)}</div>
      <div style={{ borderTop: `1px solid ${C.accent}44`, marginBottom: 28 }} />

      {tab === "lecture" && (
        <div className="bk-fade">
          <div style={{ display: "flex", gap: 3, marginBottom: 22, flexWrap: "wrap" }}>{PART_LABELS.map((lbl, i) => <button key={i} onClick={() => setPart(i)} style={partBtn(i)}>{lbl}</button>)}</div>

          {part === 0 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="Magnetic fields are produced by moving charges and intrinsic magnetic moments. Unlike electric fields (which radiate from charges), magnetic field lines always form closed loops — there are no magnetic monopoles." points={["Magnetic field B: units of tesla (T). Earth's field ~ 5×10⁻⁵ T; refrigerator magnet ~ 0.01 T; MRI ~ 1-3 T.", "Magnetic field lines go from N to S outside a magnet, S to N inside — they always form closed loops.", "Ferromagnetic materials (Fe, Ni, Co) can be permanently magnetized; paramagnetic materials are weakly attracted; diamagnetic materials are weakly repelled.", "A straight current-carrying wire produces a circular B-field: B = μ₀I/(2πr). Right-hand rule: thumb in current direction, fingers curl in B direction.", "Solenoid (coil): uniform B = μ₀nI inside, where n = N/L is turns per unit length. Behaves like a bar magnet."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Magnetic Field of a Straight Current</Label>
              <MathBlock>{"B = μ₀ · I / (2πr)\n\nμ₀ = 4π×10⁻⁷ T·m/A    (permeability of free space)\nI = current (A)\nr = perpendicular distance from wire (m)\n\nDirection: right-hand rule —\nthumb along I, fingers curl in direction of B"}</MathBlock>
              {[["μ₀ = 4π×10⁻⁷", "Magnetic constant — analogue of ε₀ in electrostatics"], ["B ∝ 1/r", "Field strength falls off linearly with distance (not inverse-square like E)"], ["B ∝ I", "Double the current → double the field strength"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Solenoid & Electromagnet</Label>
              <MathBlock>{"B = μ₀ · n · I        (inside ideal solenoid)\n\nn = N/L = turns per unit length (m⁻¹)\nN = total number of turns\nL = length of solenoid (m)\n\nB is uniform inside, nearly zero outside"}</MathBlock>
              <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14 }}>
                A solenoid is a coil of wire that produces a uniform magnetic field inside. It is the magnetic analogue of the parallel-plate capacitor. Inserting an iron core amplifies the field by a factor of hundreds to thousands — this is an <strong style={{ fontWeight: 500, color: C.accent }}>electromagnet</strong>.
              </p>
            </Card>

            <HintBox variant="comp"><p><strong>Biot-Savart Law:</strong> The magnetic analogue of Coulomb's Law. dB = (μ₀/4π) · (I dl × r̂)/r². Integrating this over a straight wire gives B = μ₀I/(2πr). For a circular loop on-axis: B = μ₀IR²/[2(R²+x²)^(3/2)]. At the center (x=0): B = μ₀I/(2R). The 1/r³ far-field dependence means magnetic fields from dipoles drop faster than electric fields from monopoles.</p></HintBox>

            <Card><MCField question="A long straight wire carries 5 A. What is the magnetic field strength at a distance of 0.10 m from the wire?" choices={["1.0×10⁻⁵ T", "2.0×10⁻⁵ T", "1.0×10⁻⁶ T", "3.1×10⁻⁵ T"]} correct={0} diff="easy" pts={3} explain="B = μ₀I/(2πr) = (4π×10⁻⁷)(5)/(2π×0.10) = (2×10⁻⁶)/(0.10) = 2×10⁻⁵... Wait: 4π×10⁻⁷ × 5 = 2π×10⁻⁶. Divide by 2π×0.10: (2π×10⁻⁶)/(2π×0.10) = 10⁻⁶/0.10 = 1.0×10⁻⁵ T." /></Card>
          </div>)}

          {part === 1 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="A magnetic field exerts a force on a moving charge. The force is always perpendicular to both v and B — it changes direction but not speed. This is the key difference from electric forces." points={["Lorentz force: F = qvB sinθ. Magnitude only; direction from right-hand rule.", "F = q(v × B): force perpendicular to both v and B. v parallel to B → no force.", "Right-hand rule for + charge: fingers along v, curl toward B, thumb = force direction. For − charge: opposite direction.", "Charged particle perpendicular to uniform B → uniform circular motion: r = mv/(qB), period T = 2πm/(qB).", "T is independent of speed — faster particles have larger orbits but same orbital period. This is the cyclotron principle."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Lorentz Force</Label>
              <MathBlock>{"F = q·v·B·sin θ\n\nF = force (N), q = charge (C)\nv = speed (m/s), B = magnetic field (T)\nθ = angle between v and B\n\nDirection: right-hand rule\nF ⊥ v and F ⊥ B (force is perpendicular to both)"}</MathBlock>
              {[["θ = 90°", "Maximum force: F = qvB. Circular motion if B uniform and v ⊥ B."], ["θ = 0° or 180°", "Zero force. Particle moves in a straight line parallel to B."], ["θ between 0°–90°", "Helical path — circular motion around B plus drift along B."]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Circular Motion in Uniform B</Label>
              <MathBlock>{"qvB = mv²/r    →    r = mv/(qB)\n\nPeriod:  T = 2πr/v = 2πm/(qB)\nFrequency: f = 1/T = qB/(2πm)    (cyclotron frequency)\n\nAngular frequency: ω = qB/m\n  — independent of v and r!"}</MathBlock>
              <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14 }}>
                The magnetic force provides centripetal force. Since F ⊥ v, it does no work — kinetic energy is constant. The orbital period T depends only on m/q and B, not on speed. This is why all particles of the same species orbit with the same period in a cyclotron, regardless of energy.
              </p>
            </Card>

            <HintBox variant="comp"><p><strong>Velocity Selector:</strong> Crossed E and B fields. A charged particle passes undeflected when qE = qvB → v = E/B. Only particles with this specific velocity pass straight through. Combined with the radius measurement in a magnetic field (r = mv/qB), you can determine m/q — this is how a mass spectrometer works. The radius of curvature identifies the mass-to-charge ratio: m/q = rB/v = rB²/E.</p></HintBox>

            <Card><MCField question="A proton (q = +e, m = 1.67×10⁻²⁷ kg) moves at 2.0×10⁶ m/s perpendicular to a 0.50 T magnetic field. What is the radius of its circular path?" choices={["2.1 cm", "4.2 cm", "8.3 cm", "1.0 cm"]} correct={1} diff="medium" pts={4} explain="r = mv/(qB) = (1.67×10⁻²⁷)(2.0×10⁶)/[(1.6×10⁻¹⁹)(0.50)] = 3.34×10⁻²¹/8.0×10⁻²⁰ = 0.0418 m ≈ 4.2 cm." /></Card>
          </div>)}

          {part === 2 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="A current-carrying wire in a magnetic field experiences a force — this is the Lorentz force summed over all the moving charges in the wire. It is the operating principle of electric motors and loudspeakers." points={["Force on a straight wire: F = BIL sinθ, where L is the length of wire in the field.", "Direction: right-hand rule — fingers along I (conventional current), curl toward B, thumb = force.", "Parallel currents attract, antiparallel currents repel — derived from the B-field of each wire acting on the other.", "Torque on a current loop: τ = NIAB sinθ. This is the DC motor principle. θ is angle between B and the loop's normal vector."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Force on a Current-Carrying Wire</Label>
              <MathBlock>{"F = B·I·L·sin θ\n\nF = force on wire (N)\nB = magnetic field (T)\nI = current (A)\nL = length of wire in field (m)\nθ = angle between wire and B field\n\nDerivation:\nF = qvB·sinθ, I = nqAv\n→ total force = (nAL)·qvB·sinθ = BIL·sinθ"}</MathBlock>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Force Between Parallel Currents</Label>
              <MathBlock>{"F/L = μ₀·I₁·I₂ / (2πd)\n\nF/L = force per unit length (N/m)\nd = separation between wires (m)\n\nParallel currents:  attract\nAntiparallel currents: repel"}</MathBlock>
              <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14 }}>
                Each wire sits in the B-field of the other. Wire 1 produces B₁ = μ₀I₁/(2πd) at wire 2; wire 2 experiences F = B₁I₂L. The direction follows from two applications of the right-hand rule.
              </p>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Torque on a Current Loop — DC Motor</Label>
              <MathBlock>{"τ = N·I·A·B·sin θ\n\nN = number of turns\nI = current (A)\nA = area of loop (m²)\nB = magnetic field (T)\nθ = angle between B and loop's normal\n\nMaximum torque when θ = 90° (loop parallel to B)\nZero torque when θ = 0° (loop perpendicular to B)"}</MathBlock>
            </Card>

            <HintBox variant="comp"><p><strong>Galvanometer:</strong> A current loop in a radial magnetic field experiences torque τ = NIAB (constant — sinθ removed by curved pole pieces). A spring provides restoring torque τ = kθ. Equilibrium: NIAB = kθ → θ ∝ I. The deflection is linear with current, enabling precise current measurement. This is the basis of analog ammeters and voltmeters.</p></HintBox>

            <Card><MCField question="A 0.50 m wire carries 3.0 A perpendicular to a 0.40 T magnetic field. What is the magnitude of the force on the wire?" choices={["0.60 N", "0.30 N", "1.2 N", "2.4 N"]} correct={0} diff="easy" pts={3} explain="F = BIL sinθ. Since wire is perpendicular to B, sin90° = 1. F = (0.40)(3.0)(0.50) = 0.60 N." /></Card>
          </div>)}

          {part === 3 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="Faraday discovered that a changing magnetic field induces an electromotive force (EMF). Lenz's Law determines the direction: the induced current always opposes the change in flux that produced it — a direct consequence of energy conservation." points={["Magnetic flux: Φ = BA cosθ. Flux through a surface measures the number of B-field lines passing through.", "Faraday's Law: ε = −N dΦ/dt. The induced EMF equals the rate of change of magnetic flux (times number of turns).", "Lenz's Law (the minus sign): induced current creates a B-field opposing the change in flux. If flux increases → induced B opposes. If flux decreases → induced B reinforces.", "Motional EMF: ε = BLv for a conducting rod moving perpendicular to B. Derived from either Faraday's Law or balancing magnetic and electric forces.", "Applications: electric generators (mechanical → electrical), transformers (AC voltage conversion), induction cooktops, magnetic braking."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Magnetic Flux</Label>
              <MathBlock>{"Φ = B·A·cos θ\n\nΦ = magnetic flux (Wb = T·m²)\nB = magnetic field (T)\nA = area of surface (m²)\nθ = angle between B and normal to surface\n\nFlux is a measure of total field\nlines passing through a surface."}</MathBlock>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Faraday's Law of Induction</Label>
              <MathBlock>{"ε = −N · dΦ/dt\n\nε = induced EMF (V)\nN = number of turns\nΦ = magnetic flux (Wb)\ndΦ/dt = rate of change of flux (Wb/s)\n\nThe minus sign is Lenz's Law:\ninduced EMF opposes the change in flux."}</MathBlock>
              {[["Change in B", "Increasing B → increasing Φ → induced ε creates current whose B opposes the increase."], ["Change in A", "Changing loop area changes flux → induced ε. Demo: sliding rod on rails."], ["Change in θ", "Rotating coil in fixed B → sinusoidal ε. This is the AC generator principle."]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Motional EMF</Label>
              <MathBlock>{"ε = B·L·v\n\nB = magnetic field (T)\nL = length of conductor (m)\nv = speed perpendicular to B (m/s)\n\nDerived from:\n  Faraday: dΦ/dt = B·dA/dt = BLv\n  Force balance: qE = qvB → E = vB\n  → ε = EL = BLv"}</MathBlock>
            </Card>

            <QuoteBlock text="The induced current is always in such a direction as to oppose the change of the magnetic flux that produces it." author="H. Lenz, 1834" />

            <HintBox variant="comp"><p><strong>Eddy Currents:</strong> When a conductor moves through a changing B-field, circulating currents (eddy currents) are induced within the bulk material. These currents experience F = BIL and oppose the motion — this is magnetic braking. In transformers, eddy currents cause energy loss; laminating the iron core into thin insulated sheets breaks up the current paths and reduces losses. The same principle enables contactless braking in roller coasters and high-speed trains.</p></HintBox>

            <Card><MCField question="A coil of 50 turns encloses an area of 0.020 m². The perpendicular magnetic field increases uniformly from 0 to 0.30 T in 0.10 s. What is the magnitude of the induced EMF?" choices={["1.5 V", "3.0 V", "0.30 V", "6.0 V"]} correct={1} diff="medium" pts={4} explain="ΔΦ = A·ΔB = (0.020)(0.30 − 0) = 0.0060 Wb. ε = N·ΔΦ/Δt = 50 × 0.0060/0.10 = 50 × 0.060 = 3.0 V." /></Card>
          </div>)}

          <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
            {part > 0 ? <button onClick={() => setPart(p => p - 1)} style={navBtn(false)}>← {PART_LABELS[part - 1]}</button> : <span />}
            {part < 3 ? <button onClick={() => setPart(p => p + 1)} style={navBtn(true)}>{PART_LABELS[part + 1]} →</button> : <button onClick={() => setTab("practice")} style={navBtn(true)}>Practice →</button>}
          </div>
        </div>
      )}

      {tab === "practice" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Card><Label style={{ display: "block", marginBottom: 6 }}>Problem Set · Magnetism</Label><p style={{ fontFamily: F.serif, fontSize: 13, color: C.dim, fontStyle: "italic" }}>6 problems · Easy → Medium → Hard · 23 pts total</p></Card>
        <Card><MCField question="A long straight wire carries 10 A. What is B at 0.05 m from the wire?" choices={["4.0×10⁻⁵ T", "2.0×10⁻⁵ T", "8.0×10⁻⁵ T", "1.0×10⁻⁴ T"]} correct={0} diff="easy" pts={3} explain="B = μ₀I/(2πr) = (4π×10⁻⁷)(10)/(2π×0.05) = (2×10⁻⁶)/(0.05) = 4.0×10⁻⁵ T." /></Card>
        <Card><INTField question="A wire of length 0.80 m carries 5.0 A at 90° to a 0.25 T field. Find the magnetic force on the wire in newtons." answer={1} diff="easy" pts={3} hint="F = BIL = (0.25)(5.0)(0.80) = 1.0 N. With sin90° = 1." /></Card>
        <Card><MCField question="An electron moves at 3.0×10⁶ m/s perpendicular to a 0.20 T field. What is the radius of its path? (m_e = 9.1×10⁻³¹ kg)" choices={["8.5×10⁻⁵ m", "8.5×10⁻⁴ m", "1.7×10⁻⁴ m", "1.7×10⁻³ m"]} correct={0} diff="medium" pts={4} explain="r = mv/(qB) = (9.1×10⁻³¹)(3.0×10⁶)/[(1.6×10⁻¹⁹)(0.20)] = 2.73×10⁻²⁴/3.2×10⁻²⁰ = 8.53×10⁻⁵ m." /></Card>
        <Card><INTField question="A solenoid has 200 turns, length 0.40 m, and carries 3.0 A. Find B inside in tesla, multiplied by 10³ (give answer in mT). Use μ₀ = 4π×10⁻⁷. Round to 1 decimal place." answer={1.9} diff="medium" pts={4} hint="n = N/L = 200/0.40 = 500 m⁻¹. B = μ₀nI = (4π×10⁻⁷)(500)(3.0) = 6π×10⁻⁴ ≈ 1.885×10⁻³ T = 1.9 mT." /></Card>
        <Card><MCField question="Two parallel wires 0.10 m apart carry 2 A and 5 A in the same direction. What is the force per unit length between them?" choices={["2.0×10⁻⁵ N/m, attractive", "2.0×10⁻⁵ N/m, repulsive", "1.0×10⁻⁵ N/m, attractive", "1.0×10⁻⁵ N/m, repulsive"]} correct={0} diff="medium" pts={4} explain="F/L = μ₀I₁I₂/(2πd) = (4π×10⁻⁷)(2)(5)/(2π×0.10) = (2×10⁻⁶)/(0.10) = 2.0×10⁻⁵ N/m. Same direction → attract." /></Card>
        <Card><INTField question="A 100-turn coil of area 0.015 m² rotates at 10 rev/s in a 0.50 T field. What is the peak EMF in volts? (Hint: peak EMF = NBAω, where ω = 2πf.) Round to the nearest integer." answer={47} diff="medium" pts={5} explain="ω = 2π(10) = 20π ≈ 62.8 rad/s. ε_peak = NBAω = (100)(0.50)(0.015)(62.8) = 47.1 V ≈ 47 V." /></Card>
      </div>)}

      {tab === "reference" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Magnetic Fields</Label>
          <MathBlock>{"B = μ₀I/(2πr)         straight wire\nB = μ₀nI              solenoid (inside)\nμ₀ = 4π×10⁻⁷ T·m/A    permeability\n\nRight-hand rule:\n  Wire: thumb = I, fingers = B\n  Solenoid: fingers = I, thumb = B (N pole)"}</MathBlock>
        </Card>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Lorentz Force & Motion</Label>
          <MathBlock>{"F = qvB sinθ           magnitude\nF = q(v × B)            vector form\nr = mv/(qB)             circular radius\nT = 2πm/(qB)            period (independent of v)\nω = qB/m               cyclotron frequency\n\nForce ⊥ v → no work done → KE constant"}</MathBlock>
        </Card>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Force on Wires & Torque</Label>
          <MathBlock>{"F = BIL sinθ           force on straight wire\nF/L = μ₀I₁I₂/(2πd)    force between parallel wires\nτ = NIAB sinθ          torque on current loop\n\nParallel I: attract\nAntiparallel I: repel"}</MathBlock>
        </Card>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Electromagnetic Induction</Label>
          <MathBlock>{"Φ = BA cosθ            magnetic flux (Wb)\nε = −N dΦ/dt           Faraday's Law\nε = BLv                 motional EMF\n\nLenz's Law: induced current\nopposes change in flux.\n\nAC generator: ε(t) = NBAω·sin(ωt)\n  ε_peak = NBAω"}</MathBlock>
        </Card>
      </div>)}

      <div style={{ marginTop: 56, borderTop: `1px solid ${C.border}`, paddingTop: 18, display: "flex", justifyContent: "space-between" }}>
        <Mono style={{ fontSize: 9 }}>magnetism · lorentz force · faraday · lenz · block 11</Mono>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="../index.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>← Index</a>
          <a href="highscores.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>Highscores →</a>
        </div>
      </div>
    </div>
  </>);
}
