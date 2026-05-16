import { useState } from "react";
import { C, F, Geo, GLOBAL_CSS, Card, Label, Mono, Dots, Tag, MathBlock, InfoRow, SummaryBox, HintBox, MCField, INTField } from "../project-template-files/block-kit.jsx";

const MAIN_TABS = ["lecture", "practice", "reference"];
const PART_LABELS = ["I · Ohm's Law & Resistance", "II · Series & Parallel", "III · Circuit Analysis"];

export default function G10CircuitsL01() {
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
        <a href="../highscores.html" style={{ color: C.dim, textDecoration: "none" }}>Highscores</a>
      </div>

      <div className="bk-fade" style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}><Tag>Physics</Tag><Tag accent>Circuits</Tag><Tag>Block 10</Tag></div>
        <h1 style={{ fontFamily: F.serif, fontSize: "clamp(26px,4vw,42px)", fontWeight: 500, color: C.heading, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 10, textShadow: `0 0 24px ${C.glowStr}` }}>Circuits &<br /><em>Mathematical Models</em></h1>
        <p style={{ fontFamily: F.serif, fontSize: 15, color: C.dim, fontStyle: "italic" }}>Ohm's Law is a linear model for resistance. V-I curves are the functions you built in G9 math class — now they describe physical devices.</p>
      </div>

      <Card style={{ marginBottom: 24 }}>
        <Label style={{ display: "block", marginBottom: 12 }}>What This Covers</Label>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          Electric circuits are networks of components connected by conductors. At the high-school level, we model them with <strong style={{ fontWeight: 500, color: C.accent }}>lumped parameters</strong>: each resistor, battery, and wire has a defined role. The mathematical structure is algebraic — a system of linear equations constrained by Kirchhoff's laws.
        </p>
        <p style={{ fontFamily: F.serif, fontSize: 14, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
          The math integration is <strong style={{ fontWeight: 500, color: C.accent }}>functions as models</strong>: the V-I characteristic of a device is a function I(V) — linear for resistors (Ohm's Law), but nonlinear for diodes, filament bulbs, and other real devices.
        </p>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>{["I · Ohm's Law & Resistance", "II · Series & Parallel", "III · Circuit Analysis"].map((p, i) => <Tag key={i}>{p}</Tag>)}</div>
      </Card>

      <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>{MAIN_TABS.map(t => <button key={t} onClick={() => setTab(t)} style={tabBtn(t)}>{t}</button>)}</div>
      <div style={{ borderTop: `1px solid ${C.accent}44`, marginBottom: 28 }} />

      {tab === "lecture" && (
        <div className="bk-fade">
          <div style={{ display: "flex", gap: 3, marginBottom: 22, flexWrap: "wrap" }}>{PART_LABELS.map((lbl, i) => <button key={i} onClick={() => setPart(i)} style={partBtn(i)}>{lbl}</button>)}</div>

          {part === 0 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="Ohm's Law V = IR is the simplest functional relationship in circuit theory — a linear model where current is proportional to voltage. Resistance is the constant of proportionality, determined by material and geometry." points={["Ohm's Law: V = IR. Voltage (V) drives current (I) through resistance (R). The starting point for all circuit analysis.", "Resistance R = ρL/A depends on resistivity ρ, length L, and cross-sectional area A.", "Power dissipated: P = IV = I²R = V²/R. Every resistor converts electrical energy to heat.", "Current I = ΔQ/Δt — the rate of charge flow. Convention: current flows from + to − (opposite to electron flow)."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Ohm's Law & Power</Label>
              <MathBlock>{"V = I · R                  Ohm's Law\n\nI = V / R                  current ∝ voltage\n\nP = I · V = I²R = V²/R    power dissipated\n\nUnits:\nV — volts (V), I — amperes (A)\nR — ohms (Ω), P — watts (W)"}</MathBlock>
              {[["V = IR", "Voltage drop across a resistor equals current times resistance"], ["P = I²R", "Power dissipated as heat — this is why resistors get warm"], ["P = V²/R", "For fixed voltage, lower resistance → more power → more heat"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Resistance — Material & Geometry</Label>
              <MathBlock>{"R = ρ · L / A\n\nρ = resistivity (Ω·m) — material property\nL = length (m) — longer wire = more resistance\nA = cross-sectional area (m²) — thicker wire = less resistance"}</MathBlock>
              {[["Copper", "ρ ≈ 1.7×10⁻⁸ Ω·m — excellent conductor"], ["Aluminum", "ρ ≈ 2.8×10⁻⁸ Ω·m — lighter"], ["Nichrome", "ρ ≈ 1.1×10⁻⁶ Ω·m — heating elements"], ["Glass / Rubber", "ρ ≈ 10¹⁰–10¹⁵ Ω·m — insulators"]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>V-I Characteristics as Functions</Label>
              <p style={{ fontFamily: F.serif, fontSize: 15, color: C.body, lineHeight: 1.75, marginBottom: 14 }}>
                Plot I vs. V and you get the <strong style={{ fontWeight: 500, color: C.accent }}>V-I characteristic</strong> — the function I(V) from G9/G10 math:
              </p>
              {[["Ohmic resistor", "I = V/R — linear through origin. Slope = 1/R."], ["Filament bulb", "I(V) curves upward — R increases with temperature."], ["Diode", "I ≈ 0 for V < 0.7V, then rises exponentially."]].map(([k, v]) => <InfoRow key={k} label={k} value={v} />)}
            </Card>

            <HintBox variant="comp"><p><strong>Microscopic Ohm's Law:</strong> J = σE, where J = I/A is current density and σ = 1/ρ is conductivity. Integrating over geometry recovers V = IR: E = V/L, J = I/A, J = σE → I/A = σ·V/L → V = (L/σA)·I = (ρL/A)·I = IR.</p></HintBox>

            <Card><MCField question="A resistor dissipates 48 W when connected to a 12 V battery. What is its resistance?" choices={["0.25 Ω", "3 Ω", "4 Ω", "48 Ω"]} correct={1} diff="easy" pts={3} explain="P = V²/R → R = V²/P = (12)²/48 = 144/48 = 3 Ω." /></Card>
          </div>)}

          {part === 1 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="Resistors combine in two fundamental patterns. Series: same current, voltages add. Parallel: same voltage, currents add." points={["Series: R_eq = R₁ + R₂ + ... + Rₙ. Same current; total voltage sums individual drops.", "Parallel: 1/R_eq = 1/R₁ + 1/R₂ + ... + 1/Rₙ. Same voltage; total current sums branch currents.", "For two in parallel: R_eq = R₁R₂/(R₁ + R₂) — product over sum. Always less than the smallest R.", "Reduce complex circuits stepwise: collapse innermost groups outward."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Series Resistors</Label>
              <MathBlock>{"R_eq = R₁ + R₂ + R₃ + ...\n\nI = I₁ = I₂ = I₃          same current\nV = V₁ + V₂ + V₃          voltage divides\n\nV_i = I · R_i              voltage across resistor i\n  = (R_i / R_eq) · V       voltage divider formula"}</MathBlock>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Parallel Resistors</Label>
              <MathBlock>{"1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ...\n\nV = V₁ = V₂ = V₃          same voltage\nI = I₁ + I₂ + I₃          current divides\n\nI_i = V / R_i              current through branch i\n\nFor 2 in parallel:\nR_eq = R₁·R₂ / (R₁ + R₂)   product over sum"}</MathBlock>
            </Card>

            <HintBox variant="comp"><p><strong>Delta-Star (Δ-Y) Transformation:</strong> Not all networks reduce to series/parallel. A bridge circuit requires Δ-Y: R₁ = R₁₂·R₃₁/(R₁₂+R₂₃+R₃₁) and cyclic permutations. Essential for Wheatstone bridge problems where the bridge resistor prevents simple reduction.</p></HintBox>

            <Card><MCField question="Three resistors — 2 Ω, 3 Ω, and 6 Ω — are connected in parallel. What is the equivalent resistance?" choices={["11 Ω", "1 Ω", "3.7 Ω", "0.5 Ω"]} correct={1} diff="medium" pts={4} explain="1/R_eq = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1. R_eq = 1 Ω." /></Card>
          </div>)}

          {part === 2 && (<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SummaryBox intro="Kirchhoff's Laws are the universal rules — they work for any network, no matter how complex. The junction rule conserves charge. The loop rule conserves energy." points={["KCL: ΣI_in = ΣI_out at any junction. Charge cannot accumulate at a node.", "KVL: ΣΔV = 0 around any closed loop. Energy gained in battery equals energy lost in resistors.", "EMF ε is energy per unit charge from a source. Terminal voltage V = ε − Ir accounts for internal resistance r.", "For multi-loop circuits: set up linear equations with KCL+KVL, solve simultaneously."]} />

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>Kirchhoff's Laws</Label>
              <MathBlock>{"KCL (Junction Rule):\n  Σ I_in = Σ I_out\n\nKVL (Loop Rule):\n  Σ ΔV = 0  around any closed loop\n\nSign convention:\n  +ε when traversing battery −→+\n  −IR when traversing resistor in direction of I"}</MathBlock>
            </Card>

            <Card>
              <Label style={{ display: "block", marginBottom: 14 }}>EMF and Internal Resistance</Label>
              <MathBlock>{"V_terminal = ε − I·r\n\nOpen circuit (I=0): V_terminal = ε\nShort circuit (R_load=0): I_max = ε/r\n\nPower to load: P = I²·R_load\nMax power transfer when R_load = r"}</MathBlock>
            </Card>

            <HintBox variant="comp"><p><strong>Wheatstone Bridge:</strong> Balance condition: R₁/R₂ = R₃/R₄ — no current through galvanometer. Ratio equality follows from equal voltage drops across parallel paths. This null method is independent of battery voltage, enabling precision resistance measurement.</p></HintBox>

            <Card><MCField question="A battery has EMF ε = 12 V and internal resistance r = 0.5 Ω. It supplies 4 A. What is the terminal voltage?" choices={["12 V", "10 V", "14 V", "11.5 V"]} correct={1} diff="medium" pts={4} explain="V_terminal = ε − Ir = 12 − (4)(0.5) = 12 − 2 = 10 V." /></Card>
          </div>)}

          <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
            {part > 0 ? <button onClick={() => setPart(p => p - 1)} style={navBtn(false)}>← {PART_LABELS[part - 1]}</button> : <span />}
            {part < 2 ? <button onClick={() => setPart(p => p + 1)} style={navBtn(true)}>{PART_LABELS[part + 1]} →</button> : <button onClick={() => setTab("practice")} style={navBtn(true)}>Practice →</button>}
          </div>
        </div>
      )}

      {tab === "practice" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Card><Label style={{ display: "block", marginBottom: 6 }}>Problem Set · Circuits</Label><p style={{ fontFamily: F.serif, fontSize: 13, color: C.dim, fontStyle: "italic" }}>6 problems · Easy → Medium → Hard · 22 pts total</p></Card>
        <Card><MCField question="What current flows through a 100 Ω resistor connected to a 12 V battery?" choices={["0.12 A", "1.2 A", "8.3 A", "1200 A"]} correct={0} diff="easy" pts={3} explain="I = V/R = 12/100 = 0.12 A = 120 mA." /></Card>
        <Card><INTField question="A copper wire has ρ = 1.7×10⁻⁸ Ω·m, L = 10 m, and A = 3.4×10⁻⁷ m². What is its resistance in ohms, rounded to the nearest integer?" answer={1} diff="medium" pts={4} hint="R = ρL/A = (1.7×10⁻⁸)(10)/(3.4×10⁻⁷) = 1.7×10⁻⁷/3.4×10⁻⁷ = 0.5 Ω. Rounds to 1 Ω." /></Card>
        <Card><MCField question="Two resistors 6 Ω and 3 Ω are in parallel. What is the equivalent resistance?" choices={["9 Ω", "2 Ω", "1.5 Ω", "0.5 Ω"]} correct={1} diff="easy" pts={3} explain="R_eq = (6×3)/(6+3) = 18/9 = 2 Ω." /></Card>
        <Card><INTField question="A 20 Ω and 30 Ω resistor are in series across a 100 V supply. Find the voltage across the 30 Ω resistor in volts." answer={60} diff="medium" pts={4} hint="Voltage divider: V_30 = (30/(20+30))×100 = (30/50)×100 = 60 V." /></Card>
        <Card><MCField question="A 12 V battery (negligible internal resistance) is connected to a 10 Ω resistor. What is the power delivered?" choices={["12 W", "14.4 W", "1.2 W", "120 W"]} correct={1} diff="medium" pts={4} explain="P = V²/R = (12)²/10 = 144/10 = 14.4 W. No internal resistance means the full 12 V appears across the resistor." /></Card>
        <Card><MCField question="In a Wheatstone bridge at balance, R₁ = 4 Ω, R₂ = 8 Ω, R₃ = 6 Ω. What is R₄?" choices={["3 Ω", "12 Ω", "10 Ω", "2 Ω"]} correct={1} diff="medium" pts={4} explain="Balance: R₁/R₂ = R₃/R₄ → 4/8 = 6/R₄ → R₄ = 6×8/4 = 12 Ω." /></Card>
      </div>)}

      {tab === "reference" && (<div className="bk-fade" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Ohm's Law & Resistance</Label>
          <MathBlock>{"V = I · R                  Ohm's Law\nR = ρ · L / A              resistance\nP = I·V = I²R = V²/R       power\n\nSeries:   R_eq = R₁ + R₂ + ...\nParallel: 1/R_eq = 1/R₁ + 1/R₂ + ...\n           R_eq = R₁R₂/(R₁+R₂)  (two)"}</MathBlock>
        </Card>
        <Card>
          <Label style={{ display: "block", marginBottom: 14 }}>Kirchhoff's Laws</Label>
          <MathBlock>{"KCL: Σ I_in = Σ I_out      junction rule\nKVL: Σ ΔV = 0              loop rule\n\nV_terminal = ε − I·r       internal resistance\nP_max to load when R_load = r\n\nWheatstone balance: R₁/R₂ = R₃/R₄"}</MathBlock>
        </Card>
      </div>)}

      <div style={{ marginTop: 56, borderTop: `1px solid ${C.border}`, paddingTop: 18, display: "flex", justifyContent: "space-between" }}>
        <Mono style={{ fontSize: 9 }}>circuits · ohm's law · kirchhoff · block 10</Mono>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="../index.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>← Index</a>
          <a href="../highscores.html" style={{ fontFamily: F.mono, fontSize: 9, color: C.dim, textDecoration: "none" }}>Highscores →</a>
        </div>
      </div>
    </div>
  </>);
}
