import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Electrostatics",
    subtitle: "Coulomb's Law · Electric Field · Potential & Energy",
    topic: "G10 Electrostatics — Problem Set 01",
  },
  blocks: [
    { type: "section-header", title: "Easy", subtitle: "Direct formula application · 5 problems · 15 pts" },

    { type: "mc", diff: "easy", pts: 3,
      question: "Two small charged spheres carry charges of +8 μC and +2 μC, separated by 0.30 m. What is the magnitude of the Coulomb force between them?",
      choices: ["1.6 N", "0.48 N", "4.8 N", "16 N"],
      correct: 0,
      explain: "F = k·q₁q₂/r² = (9×10⁹)(8×10⁻⁶)(2×10⁻⁶)/(0.30)² = (9×10⁹)(16×10⁻¹²)/0.09 = 0.144/0.09 = 1.6 N." },

    { type: "mc", diff: "easy", pts: 3,
      question: "A point charge Q = +5 nC is placed at the origin. What is the magnitude of the electric field at a distance of 3.0 m from the charge?",
      choices: ["15 N/C", "5.0 N/C", "1.5 N/C", "45 N/C"],
      correct: 1,
      explain: "E = kQ/r² = (9×10⁹)(5×10⁻⁹)/(3.0)² = 45/9 = 5.0 N/C." },

    { type: "mc", diff: "easy", pts: 3,
      question: "An isolated point charge Q creates a potential of 900 V at a distance of 2.0 m. What is the value of Q? Use k = 9×10⁹.",
      choices: ["2.0×10⁻⁷ C", "4.5×10⁻⁷ C", "2.0×10⁻⁶ C", "4.5×10⁻⁶ C"],
      correct: 0,
      explain: "V = kQ/r → Q = Vr/k = (900)(2.0)/(9×10⁹) = 1800/(9×10⁹) = 200×10⁻⁹ = 2.0×10⁻⁷ C." },

    { type: "mc", diff: "easy", pts: 3,
      question: "An electron (q = −1.6×10⁻¹⁹ C, m = 9.1×10⁻³¹ kg) is placed in a uniform electric field of 1000 N/C. What is the magnitude of its acceleration?",
      choices: ["1.76×10¹⁴ m/s²", "1.76×10¹¹ m/s²", "5.7×10⁻¹⁵ m/s²", "1.6×10⁻¹⁶ m/s²"],
      correct: 0,
      explain: "F = |q|E = (1.6×10⁻¹⁹)(1000) = 1.6×10⁻¹⁶ N. a = F/m = 1.6×10⁻¹⁶/9.1×10⁻³¹ ≈ 1.76×10¹⁴ m/s². The electron accelerates opposite the field direction since it is negative." },

    { type: "mc", diff: "easy", pts: 3,
      question: "Two charges q₁ = +6 μC and q₂ = +4 μC are 0.50 m apart. What is the electric potential energy of this two-charge system?",
      choices: ["0.43 J", "4.3 J", "0.043 J", "0.22 J"],
      correct: 0,
      explain: "U = k·q₁q₂/r = (9×10⁹)(6×10⁻⁶)(4×10⁻⁶)/0.50 = (9×10⁹)(24×10⁻¹²)/0.50 = 0.216/0.50 = 0.432 ≈ 0.43 J." },

    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 7 problems · 28 pts" },

    { type: "mc", diff: "medium", pts: 4,
      question: "Three charges lie on a line: q₁ = +6 μC at x = 0, q₂ = +2 μC at x = 0.20 m, and q₃ = −3 μC at x = 0.50 m. What is the net electrostatic force on q₂? (Take right as positive.)",
      choices: ["3.3 N right", "2.1 N right", "3.3 N left", "2.7 N left"],
      correct: 0,
      explain: "F₁₂ (q₁ on q₂): both +, repulsive. F₁₂ = k(6×10⁻⁶)(2×10⁻⁶)/(0.20)² = 0.108/0.04 = 2.7 N right. F₃₂ (q₃ on q₂): + and −, attractive toward q₃ (right). F₃₂ = k(3×10⁻⁶)(2×10⁻⁶)/(0.30)² = 0.054/0.09 = 0.60 N right. Net = 2.7 + 0.60 = 3.3 N right." },

    { type: "int", diff: "medium", pts: 4,
      question: "Two charges, q₁ = +16 μC at x = 0 and q₂ = +4 μC at x = 3.0 m, are fixed on the x-axis. At what distance (in meters) from q₁ is the net electric field zero?",
      answer: 2,
      hint: "The null point lies between the charges (both are +). Set E₁ = E₂: k(16)/x² = k(4)/(3−x)² → 4/x² = 1/(3−x)² → 2/x = 1/(3−x) → x = 2.0 m." },

    { type: "mc", diff: "medium", pts: 4,
      question: "A +5 μC charge is moved from a point at potential V_A = 200 V to a point at V_B = 50 V by the electric field. How much work does the electric field do on the charge?",
      choices: ["+7.5×10⁻⁴ J", "−7.5×10⁻⁴ J", "+1.25×10⁻³ J", "−1.25×10⁻³ J"],
      correct: 0,
      explain: "Work by field = −ΔU = −q(V_B − V_A) = −(5×10⁻⁶)(50 − 200) = −(5×10⁻⁶)(−150) = +7.5×10⁻⁴ J. The field does positive work — the charge moves spontaneously from high to low potential." },

    { type: "int", diff: "medium", pts: 4,
      question: "Three identical charges q = +2 μC are placed at the vertices of an equilateral triangle of side 0.30 m. Calculate the total potential energy of the configuration in mJ (multiply joules by 10³). Use k = 9×10⁹.",
      answer: 360,
      hint: "U = Σ_(i<j) kq²/r. Three identical pairs: U = 3 × kq²/r = 3 × (9×10⁹)(4×10⁻¹²)/0.30 = 3 × 0.12 = 0.36 J = 360 mJ." },

    { type: "mc", diff: "medium", pts: 4,
      question: "Two identical conducting spheres carry charges +12 μC and −4 μC. They are brought into contact and then separated. What is the final charge on each sphere?",
      choices: ["+8 μC each", "+4 μC each", "+12 μC and −4 μC", "+6 μC and +2 μC"],
      correct: 1,
      explain: "When identical conductors touch, charge redistributes equally. Total charge = +12 + (−4) = +8 μC. Each gets +8/2 = +4 μC." },

    { type: "mc", diff: "medium", pts: 4,
      question: "A proton (q = +1.6×10⁻¹⁹ C, m = 1.67×10⁻²⁷ kg) enters a uniform electric field of 2000 N/C with an initial horizontal velocity of 1.0×10⁶ m/s. After traveling 0.05 m horizontally, what is its vertical displacement?",
      choices: ["2.4×10⁻⁴ m", "4.8×10⁻⁴ m", "1.2×10⁻⁴ m", "1.0×10⁻³ m"],
      correct: 0,
      explain: "Time in field: t = Δx/v_x = 0.05/10⁶ = 5×10⁻⁸ s. Acceleration: a = qE/m = (1.6×10⁻¹⁹)(2000)/(1.67×10⁻²⁷) ≈ 1.92×10¹¹ m/s². Vertical displacement: y = ½at² = ½(1.92×10¹¹)(25×10⁻¹⁶) = 2.4×10⁻⁴ m." },

    { type: "mc", diff: "medium", pts: 4,
      question: "Two point charges +Q are placed at (0, d) and (0, −d). What is the electric field at point P = (x, 0) on the x-axis?",
      choices: ["E = (2kQx/(x²+d²)^(3/2)) î", "E = (2kQ/(x²+d²)) î", "E = (2kQd/(x²+d²)^(3/2)) î", "E = 0"],
      correct: 0,
      explain: "At P, each charge contributes |E| = kQ/(x²+d²). The y-components cancel (one up, one down). The x-components add: each = (kQ/(x²+d²)) · (x/√(x²+d²)) = kQx/(x²+d²)^(3/2). Total: E = 2kQx/(x²+d²)^(3/2) in the +x direction." },

    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 3 problems · 15 pts" },

    { type: "mc", diff: "hard", pts: 5,
      question: "Two fixed charges +Q and +4Q are separated by distance L. Where must a third charge q be placed on the line joining them so that the net force on q is zero?",
      choices: ["L/3 from +Q", "L/2 from +Q", "2L/3 from +Q", "L/4 from +Q"],
      correct: 0,
      explain: "Let x = distance from +Q to q. Force from +Q: F₁ = kQq/x². Force from +4Q: F₂ = k(4Q)q/(L−x)². For equilibrium: kQq/x² = k(4Q)q/(L−x)² → 1/x² = 4/(L−x)² → (L−x)/x = 2 → L−x = 2x → x = L/3. The result is independent of the sign and magnitude of q." },

    { type: "mc", diff: "hard", pts: 5,
      question: "The electric potential in a region is V(x,y) = 3x² − 2y² volts. What is the magnitude of the electric field at the point (1, 1)?",
      choices: ["√52 ≈ 7.2 V/m", "10 V/m", "√20 ≈ 4.5 V/m", "2 V/m"],
      correct: 0,
      explain: "E = −∇V. E_x = −∂V/∂x = −6x, E_y = −∂V/∂y = +4y. At (1,1): E = (−6, +4). |E| = √(36 + 16) = √52 ≈ 7.21 V/m. This is the gradient relationship: the field points from high to low potential, and its magnitude is the steepness of the potential surface." },

    { type: "int", diff: "hard", pts: 5,
      question: "A proton (q = +1.6×10⁻¹⁹ C, m = 1.67×10⁻²⁷ kg) is launched from far away with speed 2.0×10⁵ m/s straight toward a fixed +5 nC charge. How close (in cm, rounded to nearest integer) does the proton get before being repelled to a momentary stop?",
      answer: 22,
      hint: "Use energy conservation. At closest approach KE = 0. ½mv² = kqQ/r → r = 2kqQ/(mv²). r = 2(9×10⁹)(1.6×10⁻¹⁹)(5×10⁻⁹)/[(1.67×10⁻²⁷)(4×10¹⁰)] = 1.44×10⁻¹⁷/6.68×10⁻¹⁷ = 0.216 m = 21.6 cm." },
  ],
};

export default function G10ElectrostaticsPS01() {
  return <ProbsetComposer config={CONFIG} />;
}
