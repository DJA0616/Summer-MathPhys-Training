import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Exam Set<br /><em>Magnetism</em>",
    subtitle: "30 problems · Magnetic Fields · Forces · Induction",
    topic: "G10 Magnetism",
    examMode: true,
  },
  blocks: [
    // ── EASY (1 dot, 3 pts) ──────────────────────────────
    { type: "section-header", title: "Easy", subtitle: "Direct application · 3 pts each" },

    // E1
    { type: "tf", diff: "easy",
      statement: "Magnetic field lines always form closed loops — they have no beginning or end.",
      correct: true,
      explain: "Unlike electric field lines (which start on + charges and end on − charges), B-field lines form closed loops because there are no magnetic monopoles." },

    // E2
    { type: "mc", diff: "easy",
      question: "Which SI unit is used to measure magnetic field strength B?",
      choices: ["Weber (Wb)", "Tesla (T)", "Henry (H)", "Farad (F)"],
      correct: 1,
      explain: "The tesla (T) is the SI unit of magnetic flux density B. 1 T = 1 N/(A·m)." },

    // E3
    { type: "tf", diff: "easy",
      statement: "A stationary charged particle placed in a magnetic field experiences a magnetic force.",
      correct: false,
      explain: "The Lorentz magnetic force is F = qvB sinθ. With v = 0, the force is zero. Magnetic forces only act on moving charges." },

    // E4
    { type: "mc", diff: "easy",
      question: "A charged particle moves exactly parallel to a uniform magnetic field (θ = 0°). What is the magnetic force on it?",
      choices: ["qvB", "qvB/2", "qvB√2", "Zero"],
      correct: 3,
      explain: "F = qvB sinθ = qvB sin(0°) = 0. The cross product v × B vanishes when v is parallel to B." },

    // E5
    { type: "int", diff: "easy",
      question: "A long straight wire carries 8.0 A. What is the magnetic field at 0.20 m from the wire, in μT? (μ₀ = 4π×10⁻⁷ T·m/A)",
      answer: 8,
      hint: "B = μ₀I/(2πr) = (4π×10⁻⁷)(8.0)/(2π×0.20) = (8×10⁻⁷)/(0.20) = 8×10⁻⁶ T = 8 μT." },

    // E6
    { type: "mc", diff: "easy",
      question: "A solenoid has 400 turns and a length of 0.50 m, carrying 2.0 A. What is the magnetic field inside? (μ₀ = 4π×10⁻⁷ T·m/A)",
      choices: ["4.0×10⁻⁴ T", "8.0×10⁻⁴ T", "2.0×10⁻³ T", "4.0×10⁻³ T"],
      correct: 2,
      explain: "n = N/L = 400/0.50 = 800 m⁻¹. B = μ₀nI = (4π×10⁻⁷)(800)(2.0) ≈ 2.01×10⁻³ T ≈ 2.0 mT." },

    // E7
    { type: "tf", diff: "easy",
      statement: "Ferromagnetic materials such as iron can be permanently magnetized.",
      correct: true,
      explain: "Ferromagnetic materials (Fe, Ni, Co) have magnetic domains that align in an external field and stay aligned afterward, producing a permanent magnet." },

    // E8
    { type: "mc", diff: "easy",
      question: "A current-carrying wire experiences a force F = BIL sinθ. If the current is doubled while B and L remain constant at θ = 90°, the force:",
      choices: ["Stays the same", "Doubles", "Quadruples", "Halves"],
      correct: 1,
      explain: "F = BIL sin90° = BIL. F is directly proportional to I, so doubling I doubles F." },

    // E9
    { type: "int", diff: "easy",
      question: "A magnetic flux Φ = 0.60 Wb passes perpendicularly through a loop of area 0.030 m². What is the magnetic field B in tesla?",
      answer: 20,
      hint: "Φ = BA cos0° = BA. B = Φ/A = 0.60/0.030 = 20 T." },

    // E10
    { type: "mc", diff: "easy",
      question: "A coil with N = 25 turns experiences a flux change ΔΦ = 0.004 Wb in 0.10 s. What is the magnitude of the induced EMF?",
      choices: ["0.010 V", "0.100 V", "0.400 V", "1.000 V"],
      correct: 3,
      explain: "ε = N|ΔΦ/Δt| = 25 × (0.004/0.10) = 25 × 0.04 = 1.0 V." },

    // ── MEDIUM (2 dots, 4 pts) ────────────────────────────
    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 4 pts each" },

    // M1
    { type: "mc", diff: "medium",
      question: "An alpha particle (q = +2e, m = 6.64×10⁻²⁷ kg) moves at 3.0×10⁶ m/s perpendicular to a 0.50 T field. What is the radius of its circular path? (e = 1.6×10⁻¹⁹ C)",
      choices: ["0.062 m", "0.124 m", "0.249 m", "0.031 m"],
      correct: 1,
      explain: "q = 2e = 3.2×10⁻¹⁹ C. r = mv/(qB) = (6.64×10⁻²⁷ × 3.0×10⁶)/(3.2×10⁻¹⁹ × 0.50) = 1.992×10⁻²⁰/1.6×10⁻¹⁹ = 0.124 m." },

    // M2
    { type: "int", diff: "medium",
      question: "Two long parallel wires 0.12 m apart carry 5.0 A each in the same direction. What is the force per unit length between them, in μN/m? (μ₀ = 4π×10⁻⁷ T·m/A, round to nearest integer)",
      answer: 42,
      hint: "F/L = μ₀I₁I₂/(2πd) = (4π×10⁻⁷)(25)/(2π×0.12) = (2×10⁻⁷×25)/0.12 = 5×10⁻⁶/0.12 ≈ 4.17×10⁻⁵ N/m = 41.7 μN/m ≈ 42 μN/m. Same direction → attractive force." },

    // M3
    { type: "mc", diff: "medium",
      question: "A conducting rod of length 0.60 m moves at 5.0 m/s perpendicular to a 0.40 T field. What is the induced (motional) EMF?",
      choices: ["0.48 V", "0.60 V", "1.20 V", "2.40 V"],
      correct: 2,
      explain: "ε = BLv = (0.40)(0.60)(5.0) = 1.20 V. The rod sweeps through area L·v·dt each second, so dΦ/dt = BLv." },

    // M4
    { type: "tf", diff: "medium",
      statement: "The period of a charged particle moving in a uniform magnetic field is independent of the particle's speed.",
      correct: true,
      explain: "T = 2πm/(qB). The period depends only on m/q and B. Faster particles trace larger circles but complete one orbit in the same time — the cyclotron principle." },

    // M5
    { type: "mc", diff: "medium",
      question: "A current loop (N = 1, I = 2.0 A, area = 0.015 m²) sits in a uniform 0.80 T field. What is the maximum torque on the loop?",
      choices: ["0.012 N·m", "0.024 N·m", "0.048 N·m", "0.096 N·m"],
      correct: 1,
      explain: "Maximum torque when the loop plane is parallel to B (θ = 90°): τ = NIAB = (1)(2.0)(0.015)(0.80) = 0.024 N·m." },

    // M6
    { type: "int", diff: "medium",
      question: "A solenoid of length 0.25 m has 500 turns and carries 2.0 A. What is the magnetic field inside, in mT? (μ₀ = 4π×10⁻⁷ T·m/A, round to 1 decimal place)",
      answer: 5,
      hint: "n = 500/0.25 = 2000 m⁻¹. B = μ₀nI = (4π×10⁻⁷)(2000)(2.0) = 16π×10⁻⁴ ≈ 5.03×10⁻³ T = 5.0 mT." },

    // M7
    { type: "mc", diff: "medium",
      question: "A transformer steps voltage from 120 V (primary) to 480 V (secondary). If the primary has 100 turns, how many secondary turns are needed?",
      choices: ["25", "100", "400", "1200"],
      correct: 2,
      explain: "N_s/N_p = V_s/V_p → N_s = 100 × (480/120) = 400 turns. This is a step-up transformer — more secondary turns means higher secondary voltage." },

    // M8
    { type: "tf", diff: "medium",
      statement: "When a bar magnet is pulled away from a coil, the face of the coil nearest the magnet becomes a south pole (by Lenz's Law).",
      correct: true,
      explain: "As the magnet retreats, flux through the coil decreases. By Lenz's Law the induced current opposes the decrease, so it reinforces the original flux direction — making the near face a south pole to attract and oppose the retreating magnet." },

    // M9
    { type: "int", diff: "medium",
      question: "A proton (q = 1.6×10⁻¹⁹ C, m = 1.67×10⁻²⁷ kg) moves in a circular orbit of radius 0.030 m in a 0.60 T field. What is the proton's speed in units of 10⁶ m/s? Round to the nearest integer.",
      answer: 2,
      hint: "v = qBr/m = (1.6×10⁻¹⁹)(0.60)(0.030)/(1.67×10⁻²⁷) = 2.88×10⁻²¹/1.67×10⁻²⁷ ≈ 1.72×10⁶ m/s ≈ 2×10⁶ m/s." },

    // M10
    { type: "mc", diff: "medium",
      question: "A 10-turn coil of area 0.050 m² is placed perpendicular to a magnetic field that increases uniformly from 0 to 1.2 T in 0.30 s. What is the induced EMF?",
      choices: ["0.60 V", "1.50 V", "2.00 V", "4.00 V"],
      correct: 2,
      explain: "ΔΦ = A·ΔB = (0.050)(1.2) = 0.060 Wb. ε = N·ΔΦ/Δt = 10 × 0.060/0.30 = 10 × 0.20 = 2.00 V." },

    // M11
    { type: "tf", diff: "medium",
      statement: "Parallel currents (currents in the same direction) attract each other, while antiparallel currents repel.",
      correct: true,
      explain: "Wire 1's B-field at wire 2 points perpendicular to wire 2. The right-hand rule for F = IL × B on wire 2 gives attraction for parallel currents and repulsion for antiparallel currents." },

    // M12
    { type: "mc", diff: "medium",
      question: "A 0.30 m wire carries 4.0 A at an angle of 30° to a 0.60 T field. What is the force on the wire?",
      choices: ["0.22 N", "0.36 N", "0.43 N", "0.72 N"],
      correct: 1,
      explain: "F = BIL sinθ = (0.60)(4.0)(0.30) sin30° = 0.72 × 0.5 = 0.36 N." },

    // ── HARD (3 dots, 5 pts) ──────────────────────────────
    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 5 pts each" },

    // H1
    { type: "mc", diff: "hard",
      question: "A proton and an electron enter the same uniform magnetic field with the same speed perpendicular to B. How does the radius of the proton's circular path compare to the electron's? (m_p/m_e ≈ 1836)",
      choices: ["Smaller by a factor of 1836", "Larger by a factor of 1836", "Equal", "Larger by a factor of √1836"],
      correct: 1,
      explain: "r = mv/(qB). Both have the same |q|, v, and B, so r ∝ m. r_p/r_e = m_p/m_e ≈ 1836. The proton's orbit is about 1836× larger." },

    // H2
    { type: "int", diff: "hard",
      question: "A velocity selector has crossed fields E = 6000 V/m and B = 0.30 T. What is the speed (in units of 10⁴ m/s) of particles that pass through undeflected?",
      answer: 2,
      hint: "Undeflected when electric force = magnetic force: qE = qvB → v = E/B = 6000/0.30 = 2.0×10⁴ m/s. This is independent of the particle's charge or mass." },

    // H3
    { type: "mc", diff: "hard",
      question: "A 0.40 m rod slides on frictionless rails at constant speed 3.0 m/s in a 0.50 T field (perpendicular to rod and motion). Circuit resistance = 1.5 Ω. What external force maintains constant speed?",
      choices: ["0.040 N", "0.080 N", "0.120 N", "0.200 N"],
      correct: 1,
      explain: "ε = BLv = (0.50)(0.40)(3.0) = 0.60 V. I = ε/R = 0.60/1.5 = 0.40 A. Magnetic braking force: F = BIL = (0.50)(0.40)(0.40) = 0.080 N. External force must equal the braking force to maintain constant speed." },

    // H4
    { type: "int", diff: "hard",
      question: "A rectangular coil (N = 150 turns, area = 0.040 m²) rotates at 50 rev/s in a uniform 0.60 T field. What is the peak EMF in volts? Round to the nearest integer. (Use π ≈ 3.14159)",
      answer: 1131,
      hint: "ω = 2π×50 = 100π ≈ 314.16 rad/s. ε_peak = NBAω = (150)(0.60)(0.040)(314.16) = 3.6 × 314.16 ≈ 1131 V." },

    // H5
    { type: "mc", diff: "hard",
      question: "Two long parallel wires carry the same current I in opposite directions separated by distance d. At the point exactly midway between them, the total magnetic field magnitude is:",
      choices: ["Zero", "μ₀I/(πd)", "μ₀I/(2πd)", "2μ₀I/(πd)"],
      correct: 3,
      explain: "At the midpoint (r = d/2 from each wire), each wire produces B = μ₀I/(2π·d/2) = μ₀I/(πd). For antiparallel currents, both fields point in the same direction at the midpoint (right-hand rule). Total B = 2 × μ₀I/(πd) = 2μ₀I/(πd)." },

    // H6
    { type: "mc", diff: "hard",
      question: "A flat circular coil (N = 50 turns, radius = 0.080 m) lies in a plane making a 30° angle with a 1.2 T uniform field. What is the total magnetic flux linkage NΦ through the coil?",
      choices: ["0.121 Wb", "0.302 Wb", "0.603 Wb", "0.241 Wb"],
      correct: 2,
      explain: "The angle between B and the coil's normal is 90° − 30° = 60°. A = π(0.080)² ≈ 0.02011 m². Φ per turn = BA cosθ = (1.2)(0.02011)cos60° = (1.2)(0.02011)(0.5) = 0.01207 Wb. NΦ = 50 × 0.01207 ≈ 0.603 Wb." },

    // H7
    { type: "int", diff: "hard",
      question: "A proton enters a uniform 0.40 T field and traces a semicircle, exiting 0.060 m from its entry point (the diameter). What was its kinetic energy in units of 10⁻¹⁶ J? (m_p = 1.67×10⁻²⁷ kg, e = 1.6×10⁻¹⁹ C, round to nearest integer)",
      answer: 11,
      hint: "r = 0.030 m. v = qBr/m = (1.6×10⁻¹⁹)(0.40)(0.030)/(1.67×10⁻²⁷) ≈ 1.149×10⁶ m/s. KE = ½mv² = ½(1.67×10⁻²⁷)(1.149×10⁶)² ≈ 1.10×10⁻¹⁵ J = 11.0×10⁻¹⁶ J ≈ 11 (in units of 10⁻¹⁶ J)." },

    // H8
    { type: "tf", diff: "hard",
      statement: "In an ideal transformer with 100% efficiency, increasing the turns ratio N_s/N_p also increases the power delivered to the secondary coil.",
      correct: false,
      explain: "An ideal transformer conserves power: P_p = V_p I_p = V_s I_s = P_s. A higher turns ratio steps up voltage but steps down current proportionally. Total power through the transformer is fixed by the source — the turns ratio redistributes voltage and current, not power." },
  ],
};

export default function G10MagnetismExamSet() {
  return <ProbsetComposer config={CONFIG} />;
}
