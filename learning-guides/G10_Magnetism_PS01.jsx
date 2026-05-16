import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Magnetism",
    subtitle: "Biot-Savart · Lorentz Force · Faraday & Lenz",
    topic: "G10 Magnetism — Problem Set 01",
  },
  blocks: [
    { type: "section-header", title: "Easy", subtitle: "Direct formula application · 5 problems · 15 pts" },

    { type: "mc", diff: "easy", pts: 3,
      question: "A long straight wire carries 5.0 A. What is the magnetic field strength at a distance of 0.050 m from the wire? (μ₀ = 4π×10⁻⁷ T·m/A)",
      choices: ["1.0×10⁻⁵ T", "2.0×10⁻⁵ T", "3.0×10⁻⁵ T", "5.0×10⁻⁵ T"],
      correct: 1,
      explain: "B = μ₀I/(2πr) = (4π×10⁻⁷)(5.0)/(2π×0.050) = (2×10⁻⁷×5)/(0.050) = 10×10⁻⁷/5×10⁻² = 2.0×10⁻⁵ T." },

    { type: "int", diff: "easy", pts: 3,
      question: "A uniform magnetic field of 0.40 T is perpendicular to a rectangular loop of area 0.050 m². What is the magnetic flux through the loop? Express your answer in mWb (1 Wb = 1000 mWb).",
      answer: 20,
      hint: "Φ = BA cosθ. With B ⊥ A, θ = 0° so cos0° = 1. Φ = (0.40)(0.050) = 0.020 Wb = 20 mWb." },

    { type: "mc", diff: "easy", pts: 3,
      question: "An electron (q = 1.6×10⁻¹⁹ C) moves at 5.0×10⁶ m/s perpendicular to a 0.25 T magnetic field. What is the magnitude of the magnetic force on the electron?",
      choices: ["1.0×10⁻¹³ N", "2.0×10⁻¹³ N", "4.0×10⁻¹³ N", "8.0×10⁻¹³ N"],
      correct: 1,
      explain: "F = qvB sinθ = (1.6×10⁻¹⁹)(5.0×10⁶)(0.25)(1) = 2.0×10⁻¹³ N. Direction is given by right-hand rule with reversed sign for the electron." },

    { type: "int", diff: "easy", pts: 3,
      question: "A solenoid has N = 200 turns, length L = 0.50 m, and carries 4.0 A. Find the magnetic field inside in mT, rounded to 1 decimal place. (μ₀ = 4π×10⁻⁷ T·m/A)",
      answer: 2.0,
      hint: "n = N/L = 200/0.50 = 400 m⁻¹. B = μ₀nI = (4π×10⁻⁷)(400)(4.0) = 6.4π×10⁻⁴ ≈ 2.01×10⁻³ T = 2.0 mT." },

    { type: "mc", diff: "easy", pts: 3,
      question: "A transformer has N_p = 500 turns on the primary coil and N_s = 100 turns on the secondary. If the primary voltage is 240 V, what is the secondary voltage?",
      choices: ["24 V", "48 V", "120 V", "480 V"],
      correct: 1,
      explain: "V_s/V_p = N_s/N_p → V_s = 240 × (100/500) = 240 × 0.20 = 48 V. This is a step-down transformer — fewer secondary turns means lower voltage." },

    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 7 problems · 28 pts" },

    { type: "int", diff: "medium", pts: 4,
      question: "Two long parallel wires are 0.20 m apart and carry 3.0 A in opposite directions. What is the magnitude of the magnetic field exactly midway between them? Answer in μT.",
      answer: 12,
      hint: "At midpoint, r = 0.10 m from each wire. Each: B = μ₀I/(2πr) = (4π×10⁻⁷)(3)/(2π×0.10) = 6×10⁻⁶ T. Opposite currents → B fields add at midpoint (right-hand rule shows both point same direction). B_total = 2 × 6 = 12 μT." },

    { type: "mc", diff: "medium", pts: 4,
      question: "A proton (q = 1.6×10⁻¹⁹ C, m = 1.67×10⁻²⁷ kg) moves perpendicular to a uniform 0.80 T magnetic field. What is the period of its circular motion?",
      choices: ["4.1×10⁻⁸ s", "8.2×10⁻⁸ s", "1.6×10⁻⁷ s", "3.3×10⁻⁷ s"],
      correct: 1,
      explain: "T = 2πm/(qB) = 2π(1.67×10⁻²⁷)/[(1.6×10⁻¹⁹)(0.80)] = 2π × 1.305×10⁻⁸ = 8.2×10⁻⁸ s. The period is independent of speed — all protons at this field strength orbit with the same period." },

    { type: "mc", diff: "medium", pts: 4,
      question: "Two parallel wires 0.050 m apart carry 4.0 A and 6.0 A in opposite directions. What is the force per unit length between them?",
      choices: ["4.8×10⁻⁵ N/m, attract", "9.6×10⁻⁵ N/m, attract", "4.8×10⁻⁵ N/m, repel", "9.6×10⁻⁵ N/m, repel"],
      correct: 3,
      explain: "F/L = μ₀I₁I₂/(2πd) = (4π×10⁻⁷)(4)(6)/(2π×0.050) = (2×10⁻⁷×24)/0.050 = 4.8×10⁻⁶/0.050 = 9.6×10⁻⁵ N/m. Opposite (antiparallel) currents repel each other." },

    { type: "int", diff: "medium", pts: 4,
      question: "A 40-turn coil encloses an area of 0.030 m². The perpendicular magnetic field increases uniformly from 0.20 T to 0.80 T in 0.15 s. What is the magnitude of the induced EMF in volts?",
      answer: 4.8,
      hint: "ΔΦ = A·ΔB = (0.030)(0.80 − 0.20) = 0.018 Wb. ε = N·ΔΦ/Δt = 40 × 0.018/0.15 = 40 × 0.12 = 4.8 V." },

    { type: "int", diff: "medium", pts: 4,
      question: "A rectangular coil of N = 10 turns, each of area 0.020 m², carries 3.0 A in a uniform 0.50 T field. What is the maximum torque on the coil in N·m?",
      answer: 0.3,
      hint: "Maximum torque when coil is parallel to B (θ = 90°): τ = NIAB sin90° = (10)(3.0)(0.020)(0.50)(1) = 0.30 N·m." },

    { type: "mc", diff: "medium", pts: 4,
      question: "The N pole of a bar magnet is pushed toward a coil of wire connected to a galvanometer. According to Lenz's Law, the induced current in the coil produces a magnetic pole facing the approaching magnet that is:",
      choices: ["N pole, opposing the approach", "S pole, assisting the approach", "N pole, assisting the approach", "No magnetic pole is produced"],
      correct: 0,
      explain: "Lenz's Law: the induced current opposes the change in flux. As the N pole approaches, flux through the coil increases. The coil becomes an electromagnet with its N pole facing the incoming N pole, repelling it. Energy conservation — you must do work to push the magnet against this repulsion." },

    { type: "int", diff: "medium", pts: 4,
      question: "A 0.30 m conducting rod slides on frictionless horizontal rails at 6.0 m/s perpendicular to a 0.50 T magnetic field. The rails are connected by a 4.5 Ω resistor. What is the induced current in amperes?",
      answer: 0.2,
      hint: "Motional EMF: ε = BLv = (0.50)(0.30)(6.0) = 0.90 V. Current: I = ε/R = 0.90/4.5 = 0.20 A. The magnetic force on the induced current opposes the motion — you must keep pushing to maintain constant speed." },

    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 3 problems · 15 pts" },

    { type: "mc", diff: "hard", pts: 5,
      question: "In a mass spectrometer, singly-charged ions (q = +e) first pass through a velocity selector with E = 8000 V/m and B₁ = 0.40 T, then enter a detection chamber with B₂ = 0.80 T perpendicular to their velocity. The ions follow a semicircle of radius 0.052 m. What is the mass of these ions? (e = 1.6×10⁻¹⁹ C, 1 amu = 1.67×10⁻²⁷ kg)",
      choices: ["50 amu", "100 amu", "200 amu", "400 amu"],
      correct: 2,
      explain: "Step 1 — velocity selector: v = E/B₁ = 8000/0.40 = 2.0×10⁴ m/s. Step 2 — circular motion in B₂: r = mv/(qB₂) → m = rqB₂/v = (0.052)(1.6×10⁻¹⁹)(0.80)/(2.0×10⁴) ≈ 3.33×10⁻²⁵ kg. In amu: 3.33×10⁻²⁵ / 1.67×10⁻²⁷ ≈ 200 amu." },

    { type: "int", diff: "hard", pts: 5,
      question: "A rectangular coil of N = 200 turns, each of area 0.025 m², rotates at 3000 rpm in a uniform 0.30 T magnetic field. What is the peak EMF generated, in volts? Round to the nearest integer.",
      answer: 471,
      hint: "ω = 3000 × 2π/60 = 100π ≈ 314.2 rad/s. Peak EMF: ε_max = NBAω = (200)(0.30)(0.025)(100π) = 150π ≈ 471 V. This is the AC generator — mechanical rotation produces sinusoidal voltage ε(t) = NBAω sin(ωt)." },

    { type: "mc", diff: "hard", pts: 5,
      question: "A 0.50 m conducting rod slides at constant speed on frictionless rails in a 0.60 T magnetic field perpendicular to the motion. The circuit has total resistance 2.0 Ω. To maintain a constant speed of 4.0 m/s against the magnetic drag force, what external force must be applied to the rod?",
      choices: ["0.09 N", "0.18 N", "0.36 N", "0.72 N"],
      correct: 1,
      explain: "Step 1 — motional EMF: ε = BLv = (0.60)(0.50)(4.0) = 1.2 V. Step 2 — induced current: I = ε/R = 1.2/2.0 = 0.60 A. Step 3 — magnetic drag: F = BIL = (0.60)(0.60)(0.50) = 0.18 N. To maintain constant speed, applied force must equal the magnetic drag: F_app = 0.18 N. The mechanical power input (Fv = 0.72 W) equals the electrical power dissipated (I²R = 0.72 W) — energy conservation." },
  ],
};

export default function G10MagnetismPS01() {
  return <ProbsetComposer config={CONFIG} />;
}
