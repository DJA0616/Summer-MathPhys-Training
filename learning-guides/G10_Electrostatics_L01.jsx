import { useState } from "react";
import { C, F, Geo, GLOBAL_CSS, Card, Label, Mono, Dots, Tag, MathBlock, InfoRow, SummaryBox, HintBox, MCField, INTField } from "../project-template-files/block-kit.jsx";

const MAIN_TABS = ["lecture", "practice", "reference"];
const PART_LABELS = ["I · Coulomb's Law", "II · Electric Field", "III · Potential & Energy"];

export default function G10ElectrostaticsL01() {
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
      </div>

      <div className="bk-fade" style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}><Tag>Physics</Tag><Tag accent>Electrostatics</Tag><Tag>Block 9</Tag></div>
        <h1 style={{ fontFamily: F.serif, fontSize: "clamp(26px,4vw,42px)", fontWeight: 500, color: C.heading, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 10, textShadow: `0 0 24px ${C.glowStr}` }}>Electrostatics &<br /><em>Vector Fields</em></h1>
        <p style={{ fontFamily: F.serif, fontSize: 15, color: C.dim, fontStyle: "italic" }}>Charge is the source of the electric field. From Coulomb's inverse-square law, we build the field concept — one of the most powerful abstractions in all of physics.</p>
      </div>

      <Card style={{ marginBottom: 24 }}>
        <Label style={{ display: "block", marginBottom: 12 }}>What This Covers</Label>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          Electrostatics is the study of stationary charges and the fields they create. The electric field E is a <strong style={{ fontWeight: 500, color: C.accent }}>vector field</strong> — at every point in space, it has both magnitude and direction. This is where your vector skills from G9 become essential: calculating the net field at a point requires vector superposition of contributions from every charge in the system.
        </p>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          We build from Coulomb's force law → electric field → electric potential → energy. Each step abstracts one layer further from the raw force between charges, but each abstraction makes the physics more powerful.
        </p>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>{["I · Coulomb's Law", "II · Electric Field", "III · Potential & Energy"].map((p, i) => <Tag key={i}>{p}</Tag>)}</div>
      </Card>

      <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>{MAIN_TABS.map(t => <button key={t} onClick={() => setTab(t)} style={tabBtn(t)}>{t}</button>)}</div>
      <div style={{ borderTop: `1px solid ${C.accent}44`, marginBottom: 28 }} />

      {tab === "lecture" && (
        <div className="bk-fade">
          <div style={{ display: "flex", gap: 3, marginBottom: 22, flexWrap: "wrap" }}>{PART_LABELS.map((lbl, i) => <button key={i} onClick={() => setPart(i)} style={partBtn(i)}>{lbl}</button>)}</div>

          {part === 0 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="Coulomb's law is the electric analogue of Newton's law of gravitation — both are inverse-square laws. But where gravity only attracts, the electric force can attract or repel, and it is vastly stronger." points={["Coulomb's Law: F = k·|q₁q₂|/r². Direction: along the line joining charges. Like charges repel; unlike attract.", "k = 8.99 × 10⁹ N·m²/C² — the Coulomb constant. Compare to G = 6.67 × 10⁻¹¹: the electric force is ~10³⁹ times stronger than gravity between two protons.", "Charge is quantized: q = n·e where e = 1.602 × 10⁻¹⁹ C. Every observable charge is an integer multiple of the elementary charge.", "Force is a vector — direction matters. For multiple charges, use vector superposition: F_net = Σ F_i."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Coulomb's Law — Formal Statement</Label>
              <MathBlock>{"F = k · |q₁ q₂| / r²\n\nk = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²\nε₀ = 8.85 × 10⁻¹² C²/(N·m²)     permittivity of free space\n\nDirection: F is along r̂ (unit vector joining q₁ to q₂)\nAttractive for opposite signs; repulsive for same signs"}</MathBlock>
              <div style={{ marginTop: 14 }}>
                <Label style={{ display: "block", marginBottom: 10 }}>Comparison: Coulomb vs. Gravity</Label>
                {[["Force law", "F = k·q₁q₂/r²   vs.   F = G·m₁m₂/r²"], ["Constant magnitude", "k ≈ 9×10⁹   vs.   G ≈ 6.7×10⁻¹¹"], ["Between two protons", "F_e/F_g ≈ 10³⁹ — electric dominates utterly"], ["Sign", "Attractive or repulsive   vs.   always attractive"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
              </div>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Vector Superposition</Label>
              <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                When more than two charges are present, the force on any one charge is the <strong style={{ fontWeight: 500, color: C.accent }}>vector sum</strong> of the forces from all other charges. This is the superposition principle — forces from different sources add independently.
              </p>
              <MathBlock>{"F₁ = F₁₂ + F₁₃ + F₁₄ + ...\n\nF₁ = k·q₁ · Σ(q_i · r̂₁ᵢ / r₁ᵢ²)\n\nEach term: magnitude from Coulomb, direction along r̂"}</MathBlock>
              <p style={{ fontFamily: F.serif, fontSize: 14, color: C.dim, marginTop: 10, lineHeight: 1.65 }}>
                This is where the G9 vector component method becomes essential. For charges not collinear, resolve each force into x and y components, sum components, then reconstruct magnitude and direction of F_net.
              </p>
            </Card>

            <HintBox variant="comp">
              <p><strong>Three-body electrostatics:</strong> In competition problems, the equilibrium of three collinear charges is a classic setup. For charge q₂ between q₁ and q₃ to be in equilibrium: F₁₂ + F₃₂ = 0 → q₁/x² = −q₃/(d−x)². The ratio of distances equals the square root of the charge ratio. This generalizes to the <strong>earthing problem</strong> — when one charge is free to move, equilibrium positions are found by setting net force to zero, solving the resulting algebraic equation. These problems require careful sign handling and often yield surprising solutions where a stable equilibrium requires the middle charge to have the opposite sign.</p>
            </HintBox>

            <Card><MCField question="Two point charges, +3 μC and −4 μC, are 0.20 m apart. What is the magnitude of the force between them?" choices={["0.27 N", "2.7 N", "27 N", "0.54 N"]} correct={1} diff="medium" pts={4} explain="F = k·|q₁q₂|/r² = (9×10⁹)(3×10⁻⁶)(4×10⁻⁶)/(0.20)² = (9×10⁹)(12×10⁻¹²)/0.04 = (0.108)/0.04 = 2.7 N. The sign only tells direction: opposite charges → attractive." /></Card>
          </div>)}

          {part === 1 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="The electric field E at a point is the force per unit charge that a small positive test charge would experience there. The field exists whether or not a test charge is present — it is a property of space itself, created by source charges." points={["E = F/q₀ — force per unit test charge. Units: N/C (equivalent to V/m).", "For a point charge Q: E = k·Q/r², directed radially outward if Q &gt; 0, inward if Q &lt; 0.", "Field lines start on positive charges and end on negative charges. Density of lines ∝ field strength.", "E obeys superposition: E_net = Σ E_i — the vector sum of fields from all source charges."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Electric Field Definition</Label>
              <MathBlock>{"E = F / q₀               definition\n\nFor a point charge Q at distance r:\nE = k · Q / r²            magnitude\nE = k · Q · r̂ / r²        vector form\n\nDirection: radially outward from +Q\n          radially inward toward −Q"}</MathBlock>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Field of Charge Distributions</Label>
              <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                For continuous charge distributions, the field is the integral of contributions from infinitesimal charge elements dq:
              </p>
              <MathBlock>{"E = ∫ k·dq / r² · r̂\n\ndq = λ·dx      linear charge density λ (C/m)\ndq = σ·dA      surface charge density σ (C/m²)\ndq = ρ·dV      volume charge density ρ (C/m³)"}</MathBlock>
              <div style={{ marginTop: 14 }}>{[["Infinite line charge", "E = 2kλ/r = λ/(2πε₀r) — falls as 1/r"], ["Infinite plane", "E = σ/(2ε₀) — constant! Independent of distance"], ["Conducting plate", "E = σ/ε₀ — twice the non-conducting plane"], ["Uniformly charged sphere", "E = kQ/r² outside, E = kQr/R³ inside (r &lt; R)"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}</div>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Gauss's Law — Intuition</Label>
              <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                Gauss's Law states that the net electric flux through any closed surface equals the enclosed charge divided by ε₀:
              </p>
              <MathBlock>{"Φ_E = ∮ E·dA = Q_enclosed / ε₀\n\nFlux = (field strength) × (perpendicular area)\nOnly the component of E perpendicular to the\nsurface contributes to the flux."}</MathBlock>
              <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginTop: 14 }}>
                For symmetric charge distributions (spherical, cylindrical, planar), Gauss's Law reduces the calculation of E to simple algebra. Choose a Gaussian surface where E is constant in magnitude and perpendicular (or parallel) to the surface everywhere, and the flux integral collapses.
              </p>
            </Card>

            <HintBox variant="comp">
              <p><strong>Field superposition in 2D:</strong> Given charges q₁ at (x₁, y₁) and q₂ at (x₂, y₂), the field at point P(x, y) is E = E₁ + E₂. Each Eᵢ = k·qᵢ/rᵢ² · r̂ᵢ, where rᵢ = distance from qᵢ to P. This is a pure vector exercise: compute components E_x = E₁cosθ₁ + E₂cosθ₂, E_y = E₁sinθ₁ + E₂sinθ₂. The direction of E_net is θ = arctan(E_y/E_x). These calculations appear routinely in competition — the physics is Coulomb; the difficulty is vector algebra. Coordinate geometry from G9 math becomes the computational tool.</p>
            </HintBox>

            <Card><MCField question="Two equal positive charges +Q are placed at (-a, 0) and (+a, 0). What is the direction of the electric field at the midpoint (0, 0)?" choices={["Points right (+x)", "Points left (−x)", "Points up (+y)", "Zero — fields cancel exactly"]} correct={3} diff="easy" pts={3} explain="At the midpoint, the fields from the two charges have equal magnitude but opposite directions. The left charge produces E pointing right; the right charge produces E pointing left. They cancel: E_net = 0. For equal charges, the midpoint is a field null point." /></Card>
          </div>)}

          {part === 2 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="Electric potential V is the scalar companion to the vector field E. While E tells you the force direction at every point, V tells you the energy landscape — and being a scalar, superposition is simple arithmetic." points={["Electric potential V = k·Q/r for a point charge. Units: volts (V = J/C).", "V is a scalar field — superposition means simple addition, no vector components needed.", "ΔV = −∫E·dl — the potential difference between two points is the negative line integral of E.", "Electrostatic potential energy U = q·V = k·q₁q₂/r. The work done by the field W = −ΔU."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Electric Potential</Label>
              <MathBlock>{"V = k · Q / r              point charge potential\n\nV_net = Σ k·Q_i / r_i       scalar superposition\n\nΔV = V_B − V_A = −∫_A^B E·dl\n\nFor uniform field E: ΔV = −E·d"}</MathBlock>
              <p style={{ fontFamily: F.serif, fontSize: 14, color: C.dim, marginTop: 10, lineHeight: 1.65 }}>Potential is defined up to an additive constant — only potential differences have physical meaning. Convention: V(∞) = 0 for a finite charge distribution.</p>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Equipotential Surfaces</Label>
              <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                An equipotential surface is a surface on which V is constant. Key properties:
              </p>
              {[["E ⟂ equipotential", "Electric field lines are always perpendicular to equipotential surfaces. If they weren't, there'd be a component of E along the surface, which would do work and change V — contradiction."], ["No work on equipotential", "Moving a charge along an equipotential requires zero work. W = q·ΔV = 0."], ["Spacing = field strength", "Closely spaced equipotentials → strong E. Widely spaced → weak E. E ≈ −ΔV/Δx."], ["Point charge surfaces", "Concentric spheres. V = kQ/r → r = kQ/V — each sphere corresponds to a specific potential."]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Electrostatic Potential Energy</Label>
              <MathBlock>{"U = q · V                  energy of charge q at potential V\n\nU = k · q₁q₂ / r           PE of two point charges\n\nU_system = Σ_(i<j) k·q_i·q_j / r_ij\ntotal PE of a configuration\n\nW_ext = ΔU = U_final − U_initial\nwork done by external agent"}</MathBlock>
              <p style={{ fontFamily: F.serif, fontSize: 14, color: C.dim, marginTop: 10, lineHeight: 1.65 }}>The close analogy is gravitational potential energy U = mgh. But where gravity only involves one sign of "charge" (mass), the electric potential energy can be positive (repulsion) or negative (attraction). A bound system — like an electron orbiting a nucleus — has negative total potential energy.</p>
            </Card>

            <HintBox variant="comp">
              <p><strong>Earnshaw's Theorem:</strong> A point charge cannot be maintained in stable equilibrium by electrostatic forces alone. This follows from Gauss's Law: in a charge-free region, V satisfies Laplace's equation ∇²V = 0, and such functions have no local minima or maxima — only saddle points. This is why ion traps use time-varying fields (Paul traps) or magnetic fields (Penning traps). In competition, expect problems that appear to find stable electrostatic equilibrium — the theorem ensures such solutions must involve constraints, non-electrostatic forces, or dynamic fields.</p>
            </HintBox>

            <Card><MCField question="A +2 μC point charge is fixed at the origin. What is the electric potential at a distance r = 0.30 m? Use k = 9×10⁹." choices={["6.0×10³ V", "6.0×10⁴ V", "6.0×10⁵ V", "1.8×10⁵ V"]} correct={1} diff="easy" pts={3} explain="V = kQ/r = (9×10⁹)(2×10⁻⁶)/(0.30) = 18×10³/0.30 = 6.0×10⁴ V." /></Card>
          </div>)}

          <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
            {part > 0 ? <button onClick={() => setPart(p => p - 1)} style={navBtn(false)}>← {PART_LABELS[part - 1]}</button> : <span />}
            {part < 2 ? <button onClick={() => setPart(p => p + 1)} style={navBtn(true)}>{PART_LABELS[part + 1]} →</button> : <button onClick={() => setTab("practice")} style={navBtn(true)}>Practice →</button>}
          </div>
        </div>
      )}

      {tab === "practice" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Card><Label style={{ display: "block", marginBottom: 6 }}>Problem Set · Electrostatics</Label><p style={{ fontFamily: F.serif, fontSize: 13, color: C.dim, fontStyle: "italic" }}>6 problems · Easy → Medium → Hard · 21 pts total</p></Card>
        <Card><MCField question="The electric force between two charges is F at separation r. What is the force at separation 3r?" choices={["F/9", "F/3", "3F", "9F"]} correct={0} diff="easy" pts={3} explain="Coulomb's Law: F ∝ 1/r². Tripling r reduces F by factor 3² = 9 → F' = F/9." /></Card>
        <Card><INTField question="Two charges q₁ = +5 μC and q₂ = −3 μC are 0.15 m apart. Find the magnitude of the force in newtons, rounded to the nearest integer. Use k = 9×10⁹." answer={6} diff="medium" pts={4} hint="F = k|q₁q₂|/r² = (9×10⁹)(5×10⁻⁶)(3×10⁻⁶)/(0.15)² = (9×10⁹)(15×10⁻¹²)/0.0225 = 0.135/0.0225 = 6.0 N." /></Card>
        <Card><MCField question="At what point on the line between two equal positive charges +Q is the electric field zero?" choices={["At one of the charges", "At the midpoint", "At infinity", "Nowhere — field is never zero"]} correct={1} diff="easy" pts={3} explain="By symmetry: at the midpoint, the two fields have equal magnitude and opposite direction, canceling exactly. Off the midpoint, the closer charge's field dominates." /></Card>
        <Card><INTField question="A +3 μC charge is 40 cm from a point P. Find the electric potential at P in kV (1 kV = 10³ V). Use k = 9×10⁹. Round to the nearest integer." answer={68} diff="medium" pts={4} hint="V = kQ/r = (9×10⁹)(3×10⁻⁶)/0.40 = 27×10³/0.40 = 67.5×10³ V = 67.5 kV. Rounds to 68 kV." /></Card>
        <Card><MCField question="Three equal charges +Q sit at the vertices of an equilateral triangle of side a. What is the potential energy of this configuration?" choices={["3kQ²/a", "kQ²/(3a)", "kQ²/a", "3kQ²/(2a)"]} correct={0} diff="medium" pts={4} explain="U = Σ_(i<j) kq_iq_j/r_ij. Three pairs, each with PE = kQ²/a. Total: U = 3kQ²/a." /></Card>
        <Card><MCField question="The electric potential in a region is V(x) = 5x² volts (x in meters). What is the electric field at x = 2 m?" choices={["10 V/m in +x", "20 V/m in −x", "10 V/m in −x", "20 V/m in +x"]} correct={1} diff="hard" pts={5} explain="E = −dV/dx = −10x. At x = 2: E = −20 V/m. The minus sign means the field points in the −x direction (from higher to lower potential)." /></Card>
      </div>)}

      {tab === "reference" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Coulomb's Law & Electric Field</Label>
          <MathBlock>{"F = k·|q₁q₂|/r²           Coulomb force\nk = 8.99×10⁹ N·m²/C²\n\nE = F/q₀ = k·Q/r²         electric field\nE_net = Σ E_i               vector superposition\n\nGauss: ∮ E·dA = Q_enc/ε₀"}</MathBlock>
        </Card>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Potential & Energy</Label>
          <MathBlock>{"V = k·Q/r                  point charge potential\nV_net = Σ k·Q_i/r_i         scalar superposition\nΔV = −∫ E·dl\n\nU = qV = k·q₁q₂/r          potential energy\nW = −ΔU                     work by field"}</MathBlock>
        </Card>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Key Constants</Label>
          {[["k (Coulomb constant)", "8.99 × 10⁹ N·m²/C²"], ["ε₀ (permittivity)", "8.85 × 10⁻¹² C²/(N·m²)"], ["e (elementary charge)", "1.602 × 10⁻¹⁹ C"], ["Electron mass", "9.11 × 10⁻³¹ kg"], ["Proton mass", "1.67 × 10⁻²⁷ kg"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
        </Card>
      </div>)}

      <div style={{ marginTop: 56, borderTop: `1px solid ${C.border}`, paddingTop: 18, display: "flex", justifyContent: "space-between" }}>
        <Mono style={{ fontSize: 9 }}>electrostatics · electric field · potential · block 9</Mono>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="index.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>← Index</a>
          <a href="highscores.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>Highscores →</a>
        </div>
      </div>
    </div>
  </>);
}
