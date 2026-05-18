import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

// All answers pre-verified:
// Q1 easy   mc  — charge quantization: n = Q/e = 8e-9/1.6e-19 = 5e10. Correct: 0
// Q2 easy   mc  — E = F/q: (4e-3)/(2e-8) = 2e5 N/C east. Correct: 0
// Q3 easy   tf  — conductor in equilibrium: E inside = 0, charge on surface. True.
// Q4 easy   mc  — charge sharing: total = +12 + (+6) = +18 μC, each gets +9 μC. Correct: 1
// Q5 medium mc  — null point outside two unlike charges (+4μC at 0, −1μC at 3m):
//                 outside to right of −1μC. Let d from −1μC.
//                 k(4)/(3+d)² = k(1)/d² → 2/x = 1/(x-3) where x measured from origin.
//                 Actually: Set positions: +4μC at origin, −1μC at x=3.
//                 For a null point NOT between unlike charges — must be outside beyond −1μC (smaller charge).
//                 Let x > 3, dist from +4μC = x, dist from −1μC = (x-3).
//                 E from +4μC at P: k(4)/x² (pointing right, away from +4)
//                 E from −1μC at P: k(1)/(x-3)² (pointing left, toward −1μC)
//                 Set equal: 4/x² = 1/(x-3)² → 2/x = 1/(x-3) → 2(x-3) = x → x = 6. Correct: 0
// Q6 medium int  — W = qEd = (3e-6)(500)(0.40) = 6e-4 J = 600 μJ. Correct: 600
// Q7 medium mc  — dipole on perp bisector: net field along axis (−y). Correct: 2
// Q8 medium mc  — PE/KE energy conservation with repulsive charges:
//                 +2q released from r, reaches 2r. ΔKE = U_i − U_f = k(2q)Q/r − k(2q)Q/(2r) = kqQ/r. Correct: 0
// Q9 hard   mc  — electrostatic pendulum: tan30° = qE/mg → E = mg·tan30°/q
//                 = (2e-3)(10)(tan30°)/(5e-6) = (0.02)(0.5774)/5e-6 = 0.01155/5e-6 = 2309 N/C ≈ 2.31×10³. Correct: 1
// Q10 hard  mc  — three-charge assembly work:
//                 +2μC at A=(0,0), −3μC at B=(0.30,0), +6μC at C=(0,0.40)
//                 U_AB = k(+2e-6)(−3e-6)/0.30 = (9e9)(−6e-12)/0.30 = −54e-3/0.30 = −0.180 J
//                 U_AC = k(+2e-6)(+6e-6)/0.40 = (9e9)(12e-12)/0.40 = 108e-3/0.40 = +0.270 J
//                 U_BC = k(−3e-6)(+6e-6)/0.50 = (9e9)(−18e-12)/0.50 = −162e-3/0.50 = −0.324 J
//                 (BC dist = √(0.09+0.16) = √0.25 = 0.50 m)
//                 Total U = −0.180 + 0.270 − 0.324 = −0.234 J
//                 Work to assemble (bring from ∞) = U_total = −0.234 J ≈ −0.23 J. Correct: 1

const CONFIG = {
  meta: {
    title: "Electrostatics Quiz",
    subtitle: "Timed Assessment · 10 Questions · 15 Minutes",
    topic: "G10 Electrostatics — Quiz 01",
    examMode: true,
    quizMode: true,
    timerDuration: 15 * 60,
    timerPhaseThresholds: [600, 300, 60],
  },
  blocks: [
    // Q1 — easy — charge quantization
    { type: "mc", diff: "easy", pts: 3,
      question: "A glass rod gains a charge of +8.0 nC when rubbed with silk. How many electrons were transferred from the glass to the silk? (e = 1.6×10⁻¹⁹ C)",
      choices: ["5.0×10¹⁰", "5.0×10⁹", "1.3×10⁻²⁷", "8.0×10¹⁰"],
      correct: 0,
      explain: "n = Q/e = (8.0×10⁻⁹)/(1.6×10⁻¹⁹) = (8.0/1.6)×10¹⁰ = 5.0×10¹⁰ electrons. Charge is quantized: every observable charge is an integer multiple of e." },

    // Q2 — easy — E = F/q
    { type: "mc", diff: "easy", pts: 3,
      question: "A test charge of +2.0×10⁻⁸ C placed at point P experiences an electric force of 4.0×10⁻³ N directed east. What is the electric field at P?",
      choices: ["2.0×10⁵ N/C east", "2.0×10⁵ N/C west", "8.0×10⁻¹¹ N/C east", "4.0×10⁻³ N/C east"],
      correct: 0,
      explain: "E = F/q₀ = (4.0×10⁻³)/(2.0×10⁻⁸) = 2.0×10⁵ N/C. Direction is east — same as the force on a positive test charge." },

    // Q3 — easy — conductor equilibrium
    { type: "tf", diff: "easy",
      statement: "In a conductor in electrostatic equilibrium, the electric field inside the conductor is zero, and all excess charge resides on the outer surface.",
      correct: true },

    // Q4 — easy — charge sharing
    { type: "mc", diff: "easy", pts: 3,
      question: "Two identical metal spheres on insulating stands carry charges +12 μC and +6 μC. They are briefly touched together, then separated. What is the charge on each sphere after separation?",
      choices: ["+18 μC", "+9 μC", "+6 μC", "+3 μC"],
      correct: 1,
      explain: "Identical conductors in contact share charge equally. Total Q = 12 + 6 = +18 μC. Each sphere gets 18/2 = +9 μC." },

    // Q5 — medium — electric field null point between unlike charges
    { type: "mc", diff: "medium", pts: 4,
      question: "A +4 μC charge is at the origin and a −1 μC charge is at x = 3.0 m on the x-axis. At what x-coordinate (in meters) is the net electric field zero?",
      choices: ["x = 6.0 m", "x = 1.5 m", "x = 4.5 m", "x = 9.0 m"],
      correct: 0,
      explain: "The null point lies outside the charges, beyond the smaller (weaker) −1 μC charge. Let x = position from origin (x > 3). Distance from +4μC: x. Distance from −1μC: (x−3). Set magnitudes equal: k(4)/x² = k(1)/(x−3)². Taking square roots: 2/x = 1/(x−3) → 2(x−3) = x → 2x−6 = x → x = 6.0 m." },

    // Q6 — medium — work by electric field
    { type: "int", diff: "medium", pts: 4,
      question: "A uniform electric field of 500 N/C points in the +x direction. A charge of +3.0 μC is moved 0.40 m in the +x direction. How much work does the electric field do on the charge, in μJ?",
      answer: 600,
      hint: "W = qEd cosθ. Motion is along the field, so θ = 0° and cos0° = 1. W = (3.0×10⁻⁶)(500)(0.40) = 6.0×10⁻⁴ J = 600 μJ." },

    // Q7 — medium — dipole field direction on perp bisector
    { type: "mc", diff: "medium", pts: 4,
      question: "An electric dipole has +Q at (0, +a) and −Q at (0, −a). Point P is at (x, 0) on the perpendicular bisector. In which direction does the net electric field at P point?",
      choices: [
        "+x (away from the dipole)",
        "+y (from −Q toward +Q)",
        "−y (from +Q toward −Q)",
        "Zero — fields from +Q and −Q cancel"
      ],
      correct: 2,
      explain: "At P on the x-axis, each charge produces a field of magnitude kQ/(x²+a²). The x-components cancel by symmetry. The y-components both point downward (−y): the +Q above P pushes the field contribution downward, and the −Q below P pulls it downward. Net field is in the −y direction, i.e., from +Q toward −Q, parallel to the dipole axis." },

    // Q8 — medium — energy conservation with repulsive pair
    { type: "mc", diff: "medium", pts: 4,
      question: "A particle of charge +2q is released from rest at distance r from a fixed +Q charge. It accelerates away. Using energy conservation, what is the particle's kinetic energy when it reaches distance 2r?",
      choices: ["kQq/r", "2kQq/r", "kQq/(2r)", "4kQq/r"],
      correct: 0,
      explain: "Energy conservation: KE gained = loss in PE. PE_initial = k(+2q)(+Q)/r = 2kqQ/r. PE_final = k(+2q)(+Q)/(2r) = kqQ/r. KE gained = 2kqQ/r − kqQ/r = kqQ/r." },

    // Q9 — hard — electrostatic pendulum
    { type: "mc", diff: "hard", pts: 5,
      question: "A small conducting sphere (mass 2.0×10⁻³ kg, charge +5.0×10⁻⁶ C) hangs from an insulating thread in a horizontal uniform electric field E. At equilibrium the thread makes an angle of 30° with the vertical. What is E? (g = 10 m/s²)",
      choices: ["1.15×10³ N/C", "2.31×10³ N/C", "5.77×10² N/C", "3.46×10³ N/C"],
      correct: 1,
      explain: "Equilibrium under weight mg (down), tension T (along string), and electric force qE (horizontal). tan30° = qE/mg → E = mg·tan30°/q. tan30° = 1/√3 ≈ 0.5774. E = (2.0×10⁻³)(10)(0.5774)/(5.0×10⁻⁶) = (0.020 × 0.5774)/5.0×10⁻⁶ = 0.01155/5.0×10⁻⁶ ≈ 2.31×10³ N/C." },

    // Q10 — hard — work to assemble three charges
    { type: "mc", diff: "hard", pts: 5,
      question: "Three point charges are placed: +2 μC at A=(0,0), −3 μC at B=(0.30 m, 0), +6 μC at C=(0, 0.40 m). What is the total electrostatic potential energy of this configuration? (k = 9×10⁹, distance BC = 0.50 m)",
      choices: ["+0.23 J", "−0.23 J", "+0.47 J", "−0.47 J"],
      correct: 1,
      explain: "U_total = U_AB + U_AC + U_BC. U_AB = k(+2μC)(−3μC)/0.30 = (9×10⁹)(−6×10⁻¹²)/0.30 = −0.180 J. U_AC = k(+2μC)(+6μC)/0.40 = (9×10⁹)(12×10⁻¹²)/0.40 = +0.270 J. U_BC = k(−3μC)(+6μC)/0.50 = (9×10⁹)(−18×10⁻¹²)/0.50 = −0.324 J. Total = −0.180 + 0.270 − 0.324 = −0.234 J ≈ −0.23 J. Note: BC = √(0.30²+0.40²) = √(0.09+0.16) = √0.25 = 0.50 m." },
  ],
};

export default function G10ElectrostaticsQuiz01() {
  return <ProbsetComposer config={CONFIG} />;
}
