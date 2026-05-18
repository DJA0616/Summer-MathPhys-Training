import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

// All answers pre-verified:
// Q1 easy   mc  — Lorentz force on proton: F = qvB = (1.6e-19)(4e6)(0.30) = 1.92e-13 N. Correct: 1
// Q2 easy   mc  — Magnetic field of straight wire at 0.02 m, 8 A:
//                 B = μ₀I/(2πr) = (4πe-7)(8)/(2π×0.02) = (32πe-7)/(4πe-2) = 8e-5 T = 8.0×10⁻⁵ T. Correct: 2
// Q3 easy   tf  — Magnetic force on a stationary charge is zero (F = qv×B, v=0). True.
// Q4 easy   mc  — Circular radius of electron: r = mv/(qB) = (9.1e-31)(1.5e7)/[(1.6e-19)(0.50)]
//                 = 1.365e-23/8.0e-20 = 1.706e-4 m ≈ 1.7×10⁻⁴ m. Correct: 1
// Q5 medium mc  — Wire force: F = BIL sin90° = (0.35)(6.0)(0.60)(1) = 1.26 N ≈ 1.3 N. Correct: 0
// Q6 medium mc  — Solenoid B: n = 500/0.25 = 2000 m⁻¹. B = μ₀nI = (4πe-7)(2000)(2.0)
//                 = 16πe-4 ≈ 5.0×10⁻³ T. Correct: 1
// Q7 medium mc  — Faraday's law: B changes from 0.10 T to 0.70 T in 0.20 s, area 0.050 m², N = 30 turns.
//                 ΔΦ = (0.70−0.10)(0.050) = 0.030 Wb. ε = N·ΔΦ/Δt = 30×0.030/0.20 = 4.5 V. Correct: 2
// Q8 medium mc  — Lenz's law: coil moving away from N pole → flux decreasing → induced B should reinforce
//                 original flux → induced current makes S pole facing the retreating magnet → attract. Correct: 1
// Q9 hard   mc  — Cyclotron frequency: f = qB/(2πm) for proton in 1.2 T field.
//                 f = (1.6e-19)(1.2)/(2π×1.67e-27) = 1.92e-19/1.05e-26 = 1.828e7 Hz ≈ 18.3 MHz. Correct: 2
// Q10 hard  int — Peak EMF of rotating coil: N=150, A=0.040 m², B=0.60 T, ω=40π rad/s (20 rev/s).
//                 ε_peak = NBAω = 150 × 0.60 × 0.040 × 40π = 150 × 0.024 × 40π = 3.6 × 40π
//                 = 144π ≈ 452 V ≈ 452. Correct: 452

const CONFIG = {
  meta: {
    title: "Magnetism Quiz",
    subtitle: "Timed Assessment · 10 Questions · 15 Minutes",
    topic: "G10 Magnetism — Quiz 01",
    examMode: true,
    quizMode: true,
    timerDuration: 15 * 60,
    timerPhaseThresholds: [600, 300, 60],
  },
  blocks: [
    // Q1 — easy — Lorentz force on proton
    { type: "mc", diff: "easy", pts: 3,
      question: "A proton (q = 1.6×10⁻¹⁹ C) moves at 4.0×10⁶ m/s perpendicular to a uniform magnetic field of 0.30 T. What is the magnitude of the magnetic force on the proton?",
      choices: ["9.6×10⁻¹⁴ N", "1.92×10⁻¹³ N", "3.84×10⁻¹³ N", "4.8×10⁻¹⁴ N"],
      correct: 1,
      explain: "F = qvB sinθ. θ = 90° (perpendicular), so sin90° = 1. F = (1.6×10⁻¹⁹)(4.0×10⁶)(0.30) = 1.92×10⁻¹³ N." },

    // Q2 — easy — B from a straight wire
    { type: "mc", diff: "easy", pts: 3,
      question: "A long straight wire carries a current of 8.0 A. What is the magnetic field strength at a distance of 0.020 m from the wire? (μ₀ = 4π×10⁻⁷ T·m/A)",
      choices: ["4.0×10⁻⁵ T", "4.0×10⁻⁴ T", "8.0×10⁻⁵ T", "8.0×10⁻⁴ T"],
      correct: 2,
      explain: "B = μ₀I/(2πr) = (4π×10⁻⁷)(8.0)/(2π×0.020) = (32π×10⁻⁷)/(4π×10⁻²) = (32/4)×10⁻⁵ = 8.0×10⁻⁵ T." },

    // Q3 — easy — stationary charge in B field
    { type: "tf", diff: "easy",
      statement: "A stationary electric charge placed inside a uniform magnetic field experiences no magnetic force.",
      correct: true },

    // Q4 — easy — circular orbit radius of electron
    { type: "mc", diff: "easy", pts: 3,
      question: "An electron (m = 9.1×10⁻³¹ kg, q = 1.6×10⁻¹⁹ C) moves at 1.5×10⁷ m/s perpendicular to a 0.50 T magnetic field. What is the radius of its circular orbit?",
      choices: ["8.5×10⁻⁵ m", "1.7×10⁻⁴ m", "3.4×10⁻⁴ m", "8.5×10⁻⁴ m"],
      correct: 1,
      explain: "r = mv/(qB) = (9.1×10⁻³¹)(1.5×10⁷)/[(1.6×10⁻¹⁹)(0.50)] = 1.365×10⁻²³/8.0×10⁻²⁰ = 1.706×10⁻⁴ m ≈ 1.7×10⁻⁴ m." },

    // Q5 — medium — force on a current-carrying wire
    { type: "mc", diff: "medium", pts: 4,
      question: "A straight wire of length 0.60 m carries a current of 6.0 A perpendicular to a uniform 0.35 T magnetic field. What is the magnitude of the force on the wire?",
      choices: ["1.26 N", "0.63 N", "2.52 N", "0.35 N"],
      correct: 0,
      explain: "F = BIL sinθ. With θ = 90°: F = (0.35)(6.0)(0.60)(1) = 1.26 N." },

    // Q6 — medium — solenoid field
    { type: "mc", diff: "medium", pts: 4,
      question: "A solenoid has 500 turns wound over a length of 0.25 m and carries a current of 2.0 A. What is the magnetic field inside the solenoid? (μ₀ = 4π×10⁻⁷ T·m/A)",
      choices: ["2.5×10⁻³ T", "5.0×10⁻³ T", "1.0×10⁻² T", "1.26×10⁻³ T"],
      correct: 1,
      explain: "n = N/L = 500/0.25 = 2000 m⁻¹. B = μ₀nI = (4π×10⁻⁷)(2000)(2.0) = 16π×10⁻⁴ ≈ 5.03×10⁻³ T ≈ 5.0×10⁻³ T." },

    // Q7 — medium — Faraday's law / induced EMF
    { type: "mc", diff: "medium", pts: 4,
      question: "A 30-turn coil has area 0.050 m². The perpendicular magnetic field increases uniformly from 0.10 T to 0.70 T in 0.20 s. What is the magnitude of the induced EMF?",
      choices: ["0.45 V", "0.90 V", "4.5 V", "9.0 V"],
      correct: 2,
      explain: "ΔΦ = A·ΔB = (0.050)(0.70 − 0.10) = (0.050)(0.60) = 0.030 Wb. |ε| = N·ΔΦ/Δt = 30 × 0.030/0.20 = 30 × 0.15 = 4.5 V." },

    // Q8 — medium — Lenz's law: moving away from magnet
    { type: "mc", diff: "medium", pts: 4,
      question: "A bar magnet's north pole was previously near a coil. The magnet is now being pulled away from the coil. According to Lenz's Law, the face of the coil nearest the retreating magnet becomes:",
      choices: [
        "A north pole — opposing the departure by attracting the magnet",
        "A south pole — attracting the retreating north pole",
        "Neither pole — the induced EMF is zero when the magnet moves away",
        "A north pole — repelling the retreating north pole"
      ],
      correct: 1,
      explain: "As the N pole retreats, the flux through the coil decreases. Lenz's Law: the induced current must oppose this decrease by reinforcing the flux. The coil becomes an electromagnet whose near face is a south pole — attracting the north pole to oppose its departure. Energy conservation requires work to pull the magnet away." },

    // Q9 — hard — cyclotron frequency
    { type: "mc", diff: "hard", pts: 5,
      question: "A proton (q = 1.6×10⁻¹⁹ C, m = 1.67×10⁻²⁷ kg) moves in a circular path in a uniform magnetic field of 1.2 T. What is the cyclotron frequency of the proton (i.e., its orbital frequency)?",
      choices: ["9.1 MHz", "11.5 MHz", "18.3 MHz", "36.6 MHz"],
      correct: 2,
      explain: "The cyclotron frequency is independent of speed: f = qB/(2πm) = (1.6×10⁻¹⁹)(1.2)/(2π×1.67×10⁻²⁷). Numerator: 1.92×10⁻¹⁹. Denominator: 2π×1.67×10⁻²⁷ = 1.049×10⁻²⁶. f = 1.92×10⁻¹⁹/1.049×10⁻²⁶ ≈ 1.83×10⁷ Hz = 18.3 MHz. All protons in this field orbit at this frequency, regardless of their speed." },

    // Q10 — hard — peak EMF of rotating generator coil
    { type: "int", diff: "hard", pts: 5,
      question: "A generator coil has N = 150 turns, area A = 0.040 m², and rotates at 20 revolutions per second in a uniform 0.60 T magnetic field. What is the peak EMF generated in volts? (Round to the nearest integer.)",
      answer: 452,
      hint: "ω = 2πf = 2π(20) = 40π rad/s ≈ 125.7 rad/s. Peak EMF: ε_max = NBAω = (150)(0.60)(0.040)(40π) = 150 × 0.024 × 40π = 3.6 × 40π = 144π ≈ 452 V." },
  ],
};

export default function G10MagnetismQuiz01() {
  return <ProbsetComposer config={CONFIG} />;
}
