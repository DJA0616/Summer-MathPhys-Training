import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Exam Set<br /><em>Electricity</em>",
    subtitle: "30 problems · Electrostatics · Potential · Circuits",
    topic: "G10 Electricity",
    examMode: true,
  },
  blocks: [
    // ── EASY (1 dot, 3 pts) ──────────────────────────────────────────────
    { type: "section-header", title: "Easy", subtitle: "Direct application · 3 pts each" },

    // --- Electrostatics Easy ---

    { type: "mc", diff: "easy",
      question: "Two small charged spheres carry charges of +8 μC and +2 μC, separated by 0.30 m. What is the magnitude of the Coulomb force between them? (k = 9×10⁹ N·m²/C²)",
      choices: ["1.6 N", "0.48 N", "4.8 N", "16 N"], correct: 0,
      explain: "F = kq₁q₂/r² = (9×10⁹)(8×10⁻⁶)(2×10⁻⁶)/(0.30)² = 0.144/0.09 = 1.6 N." },

    { type: "mc", diff: "easy",
      question: "A point charge Q = +5 nC is placed at the origin. What is the magnitude of the electric field at a distance of 3.0 m from the charge? (k = 9×10⁹ N·m²/C²)",
      choices: ["15 N/C", "5.0 N/C", "1.5 N/C", "45 N/C"], correct: 1,
      explain: "E = kQ/r² = (9×10⁹)(5×10⁻⁹)/(3.0)² = 45/9 = 5.0 N/C." },

    { type: "mc", diff: "easy",
      question: "An isolated point charge Q creates a potential of 900 V at a distance of 2.0 m. What is Q? (k = 9×10⁹ N·m²/C²)",
      choices: ["2.0×10⁻⁷ C", "4.5×10⁻⁷ C", "2.0×10⁻⁶ C", "4.5×10⁻⁶ C"], correct: 0,
      explain: "V = kQ/r → Q = Vr/k = (900)(2.0)/(9×10⁹) = 1800/9×10⁻⁹ = 2.0×10⁻⁷ C." },

    { type: "mc", diff: "easy",
      question: "An electron (q = −1.6×10⁻¹⁹ C, m = 9.1×10⁻³¹ kg) is placed in a uniform electric field of 1000 N/C. What is the magnitude of its acceleration?",
      choices: ["1.76×10¹⁴ m/s²", "1.76×10¹¹ m/s²", "5.7×10⁻¹⁵ m/s²", "1.6×10⁻¹⁶ m/s²"], correct: 0,
      explain: "F = qE = (1.6×10⁻¹⁹)(1000) = 1.6×10⁻¹⁶ N. a = F/m = 1.6×10⁻¹⁶ / 9.1×10⁻³¹ ≈ 1.76×10¹⁴ m/s²." },

    { type: "mc", diff: "easy",
      question: "Two charges q₁ = +6 μC and q₂ = +4 μC are 0.50 m apart. What is the electric potential energy of the system? (k = 9×10⁹ N·m²/C²)",
      choices: ["0.43 J", "4.3 J", "0.043 J", "0.22 J"], correct: 0,
      explain: "U = kq₁q₂/r = (9×10⁹)(6×10⁻⁶)(4×10⁻⁶)/0.50 = 0.216/0.50 ≈ 0.43 J." },

    // --- Circuits Easy ---

    { type: "int", diff: "easy",
      question: "A current of 0.25 A flows through a 48 Ω resistor. What is the voltage across it, in volts?",
      answer: 12,
      hint: "V = IR = (0.25)(48)." },

    { type: "mc", diff: "easy",
      question: "An aluminum wire (ρ = 2.8×10⁻⁸ Ω·m) has length 5.0 m and cross-sectional area 7.0×10⁻⁸ m². What is its resistance?",
      choices: ["0.5 Ω", "2.0 Ω", "4.0 Ω", "20 Ω"], correct: 1,
      explain: "R = ρL/A = (2.8×10⁻⁸)(5.0)/(7.0×10⁻⁸) = 14×10⁻⁸/7.0×10⁻⁸ = 2.0 Ω." },

    { type: "mc", diff: "easy",
      question: "A current of 3 A flows through a 4 Ω resistor. How much power is dissipated as heat?",
      choices: ["12 W", "24 W", "36 W", "48 W"], correct: 2,
      explain: "P = I²R = (3)²(4) = 9 × 4 = 36 W." },

    { type: "int", diff: "easy",
      question: "Resistors of 15 Ω, 25 Ω, and 10 Ω are connected in series. What is the equivalent resistance in ohms?",
      answer: 50,
      hint: "R_eq = R₁ + R₂ + R₃ in series." },

    { type: "mc", diff: "easy",
      question: "A 2 A current splits between two parallel resistors: 3 Ω and 6 Ω. What is the current through the 3 Ω resistor?",
      choices: ["0.67 A", "1.33 A", "1.0 A", "2.0 A"], correct: 1,
      explain: "Current divider: I₃ = I_total × R₂/(R₁+R₂) = 2 × 6/(3+6) = 12/9 ≈ 1.33 A." },

    // ── MEDIUM (2 dots, 4 pts) ────────────────────────────────────────────
    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 4 pts each" },

    // --- Electrostatics Medium ---

    { type: "mc", diff: "medium",
      question: "Three charges lie on a line: q₁ = +6 μC at x = 0, q₂ = +2 μC at x = 0.20 m, q₃ = −3 μC at x = 0.50 m. What is the net electrostatic force on q₂? (Take right as positive.)",
      choices: ["3.3 N right", "2.1 N right", "3.3 N left", "2.7 N left"], correct: 0,
      explain: "F₁₂ (repulsive, +6 pushes +2 right): k(6×10⁻⁶)(2×10⁻⁶)/(0.20)² = 0.108/0.04 = 2.7 N right. F₃₂ (attractive, −3 pulls +2 right): k(3×10⁻⁶)(2×10⁻⁶)/(0.30)² = 0.054/0.09 = 0.60 N right. Net = 2.7 + 0.60 = 3.3 N right." },

    { type: "int", diff: "medium",
      question: "Two charges, q₁ = +16 μC at x = 0 and q₂ = +4 μC at x = 3.0 m, are fixed on the x-axis. At what distance (in meters) from q₁ is the net electric field zero? Enter an integer.",
      answer: 2,
      hint: "Null point between two same-sign charges. Set k(16)/x² = k(4)/(3−x)²: take square roots → 4/x = 2/(3−x) → 2(3−x) = x → x = 2 m." },

    { type: "mc", diff: "medium",
      question: "A +5 μC charge is moved from a point at potential V_A = 200 V to a point at V_B = 50 V by the electric field. How much work does the electric field do on the charge?",
      choices: ["+7.5×10⁻⁴ J", "−7.5×10⁻⁴ J", "+1.25×10⁻³ J", "−1.25×10⁻³ J"], correct: 0,
      explain: "W = −ΔU = −q(V_B − V_A) = −(5×10⁻⁶)(50 − 200) = −(5×10⁻⁶)(−150) = +7.5×10⁻⁴ J. Positive work — charge moves from high to low potential." },

    { type: "int", diff: "medium",
      question: "Three identical charges q = +2 μC are placed at the vertices of an equilateral triangle of side 0.30 m. What is the total electric potential energy of the system, in millijoules (mJ)? Enter an integer. (k = 9×10⁹ N·m²/C²)",
      answer: 360,
      hint: "U = 3 × kq²/r = 3 × (9×10⁹)(4×10⁻¹²)/0.30 = 3 × 0.12 = 0.36 J = 360 mJ." },

    { type: "mc", diff: "medium",
      question: "Two identical conducting spheres carry charges +12 μC and −4 μC. They are brought into contact and then separated. What is the final charge on each sphere?",
      choices: ["+8 μC each", "+4 μC each", "+12 μC and −4 μC", "+6 μC and +2 μC"], correct: 1,
      explain: "Total charge = +12 + (−4) = +8 μC. Identical conductors share charge equally: each gets +4 μC." },

    { type: "mc", diff: "medium",
      question: "A proton (q = +1.6×10⁻¹⁹ C, m = 1.67×10⁻²⁷ kg) enters a uniform field of 2000 N/C with horizontal velocity 10⁶ m/s. After traveling 0.05 m horizontally, what is its vertical displacement?",
      choices: ["2.4×10⁻⁴ m", "4.8×10⁻⁴ m", "1.2×10⁻⁴ m", "1.0×10⁻³ m"], correct: 0,
      explain: "t = 0.05/10⁶ = 5×10⁻⁸ s. a = qE/m = (1.6×10⁻¹⁹)(2000)/(1.67×10⁻²⁷) ≈ 1.92×10¹¹ m/s². y = ½at² = ½(1.92×10¹¹)(25×10⁻¹⁶) ≈ 2.4×10⁻⁴ m." },

    { type: "mc", diff: "medium",
      question: "Two point charges +Q are placed at (0, d) and (0, −d). What is the electric field at point P = (x, 0) on the x-axis?",
      choices: [
        "E = 2kQx/(x²+d²)^(3/2) in the +x direction",
        "E = 2kQ/(x²+d²) in the +x direction",
        "E = 2kQd/(x²+d²)^(3/2) in the +x direction",
        "E = 0"
      ], correct: 0,
      explain: "Each charge contributes |E| = kQ/(x²+d²). y-components cancel. Each x-component = kQ/(x²+d²) × x/√(x²+d²) = kQx/(x²+d²)^(3/2). Total E = 2kQx/(x²+d²)^(3/2) in +x direction." },

    // --- Circuits Medium ---

    { type: "int", diff: "medium",
      question: "Find the equivalent resistance: a 12 Ω resistor in series with a parallel combination of 6 Ω and 3 Ω. Answer in ohms.",
      answer: 14,
      hint: "Parallel first: 6||3 = (6×3)/(6+3) = 2 Ω. Then add the series 12 Ω." },

    { type: "mc", diff: "medium",
      question: "A 10 Ω and 30 Ω resistor are connected in series across a 20 V supply. What is the voltage across the 10 Ω resistor?",
      choices: ["5 V", "10 V", "15 V", "20 V"], correct: 0,
      explain: "Voltage divider: V₁₀ = (10/(10+30))×20 = (0.25)(20) = 5 V." },

    { type: "int", diff: "medium",
      question: "A 4 Ω and 8 Ω resistor are in series across a 24 V battery. What is the total power dissipated by both resistors, in watts?",
      answer: 48,
      hint: "R_eq = 12 Ω. I = 24/12 = 2 A. P = I²R_eq = 4×12." },

    { type: "mc", diff: "medium",
      question: "A battery with EMF ε = 9 V and internal resistance r = 1 Ω is connected to a variable load R. For what value of R is the power delivered to the load maximum?",
      choices: ["0.5 Ω", "1 Ω", "2 Ω", "9 Ω"], correct: 1,
      explain: "Maximum power transfer theorem: P_load is maximized when R_load = r_internal = 1 Ω." },

    { type: "int", diff: "medium",
      question: "Find R_eq: a 10 Ω resistor in parallel with a series combination of 4 Ω and 6 Ω. Answer in ohms.",
      answer: 5,
      hint: "Series first: 4+6 = 10 Ω. Then parallel: 10||10 = 100/20 = 5 Ω." },

    // ── HARD (3 dots, 5 pts) ──────────────────────────────────────────────
    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 5 pts each" },

    // --- Electrostatics Hard ---

    { type: "mc", diff: "hard",
      question: "Two fixed charges +Q and +4Q are separated by distance L. Where must a third charge q be placed between them so that the net force on q is zero?",
      choices: ["L/3 from +Q", "L/2 from +Q", "2L/3 from +Q", "L/4 from +Q"], correct: 0,
      explain: "Let x = distance from +Q to q. Force balance: kQq/x² = k(4Q)q/(L−x)² → (L−x)/x = 2 → L−x = 2x → x = L/3, regardless of the sign of q." },

    { type: "mc", diff: "hard",
      question: "The electric potential in a region is V(x,y) = 3x² − 2y² volts. What is the magnitude of the electric field at point (1, 1)?",
      choices: ["√52 ≈ 7.2 V/m", "10 V/m", "√20 ≈ 4.5 V/m", "2 V/m"], correct: 0,
      explain: "E = −∇V. E_x = −∂V/∂x = −6x → at (1,1): E_x = −6 V/m. E_y = −∂V/∂y = +4y → at (1,1): E_y = +4 V/m. |E| = √(36+16) = √52 ≈ 7.2 V/m." },

    { type: "int", diff: "hard",
      question: "A proton (q = +1.6×10⁻¹⁹ C, m = 1.67×10⁻²⁷ kg) is launched from far away with initial speed 2.0×10⁵ m/s straight toward a fixed +5 nC charge. How close (in cm) does the proton get before being brought to a stop? Enter an integer. (k = 9×10⁹ N·m²/C²)",
      answer: 22,
      hint: "Use energy conservation: ½mv² = kqQ/r → r = 2kqQ/(mv²). With Q=5×10⁻⁹ C, v=2×10⁵ m/s: r = 2(9×10⁹)(1.6×10⁻¹⁹)(5×10⁻⁹)/[(1.67×10⁻²⁷)(4×10¹⁰)] = 1.44×10⁻¹⁷/6.68×10⁻¹⁷ ≈ 0.216 m = 22 cm." },

    // --- Circuits Hard ---

    { type: "int", diff: "hard",
      question: "A 12 V battery supplies 4 A total to two parallel branches. Branch 1 has a single 4 Ω resistor. Branch 2 has a 6 Ω resistor in series with an unknown resistor R. Find R in ohms.",
      answer: 6,
      hint: "R_eq = V/I = 12/4 = 3 Ω. Parallel: 1/3 = 1/4 + 1/(6+R) → 1/(6+R) = 1/12 → 6+R = 12." },

    { type: "int", diff: "hard",
      question: "Find R_eq for the following network: (3 Ω in parallel with 6 Ω) in series with (4 Ω in parallel with 12 Ω) in series with 2 Ω. Answer in ohms.",
      answer: 7,
      hint: "3||6 = 2 Ω. 4||12 = 48/16 = 3 Ω. Total = 2 + 3 + 2 = 7 Ω." },

    { type: "mc", diff: "hard",
      question: "A battery (ε = 10 V, r = 2 Ω) is connected to a variable load R. What is the maximum power that can be delivered to the load?",
      choices: ["5.0 W", "12.5 W", "25 W", "50 W"], correct: 1,
      explain: "Max power when R = r = 2 Ω. I = ε/(r+R) = 10/4 = 2.5 A. P_load = I²R = (2.5)²(2) = 12.5 W. Equivalently: P_max = ε²/(4r) = 100/8 = 12.5 W." },

    // --- Conceptual Hard ---

    { type: "tf", diff: "hard",
      statement: "An electric field line and an equipotential surface can intersect at an angle other than 90°.",
      correct: false,
      hint: "Electric field lines are always perpendicular to equipotential surfaces. The component of E along an equipotential is zero by definition (no work done)." },

    { type: "tf", diff: "hard",
      statement: "In a purely resistive series circuit, the resistor that dissipates the most power is the one with the largest resistance.",
      correct: true,
      hint: "In series all resistors share the same current I. P = I²R, so larger R → more power dissipated." },
  ],
};

export default function G10ElectricityExamSet() {
  return <ProbsetComposer config={CONFIG} />;
}
