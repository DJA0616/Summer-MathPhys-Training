import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Circuits",
    subtitle: "Ohm's Law · Series & Parallel · Kirchhoff's Laws",
    topic: "G10 Circuits — Problem Set 01",
  },
  blocks: [
    { type: "section-header", title: "Easy", subtitle: "Direct formula application · 5 problems · 15 pts" },

    { type: "int", diff: "easy", pts: 3,
      question: "A current of 0.25 A flows through a 48 Ω resistor. What is the voltage across it, in volts?",
      answer: 12,
      hint: "V = IR = (0.25)(48) = 12 V." },

    { type: "mc", diff: "easy", pts: 3,
      question: "An aluminum wire (ρ = 2.8×10⁻⁸ Ω·m) has length 5.0 m and cross-sectional area 7.0×10⁻⁸ m². What is its resistance?",
      choices: ["0.5 Ω", "2.0 Ω", "4.0 Ω", "20 Ω"],
      correct: 1,
      explain: "R = ρL/A = (2.8×10⁻⁸)(5.0)/(7.0×10⁻⁸) = 14×10⁻⁸/7.0×10⁻⁸ = 2.0 Ω." },

    { type: "mc", diff: "easy", pts: 3,
      question: "A current of 3 A flows through a 4 Ω resistor. How much power is dissipated as heat?",
      choices: ["12 W", "24 W", "36 W", "48 W"],
      correct: 2,
      explain: "P = I²R = (3)²(4) = 9 × 4 = 36 W. This is Joule heating — the resistor converts 36 J of electrical energy to heat every second." },

    { type: "int", diff: "easy", pts: 3,
      question: "Resistors of 15 Ω, 25 Ω, and 10 Ω are connected in series. What is the equivalent resistance in ohms?",
      answer: 50,
      hint: "Series: R_eq = R₁ + R₂ + R₃ = 15 + 25 + 10 = 50 Ω." },

    { type: "mc", diff: "easy", pts: 3,
      question: "A 2 A current splits between two parallel resistors: 3 Ω and 6 Ω. What is the current through the 3 Ω resistor?",
      choices: ["0.67 A", "1.33 A", "1.0 A", "2.0 A"],
      correct: 1,
      explain: "Current divider: I₁ = I_total × R₂/(R₁+R₂) = 2 × 6/(3+6) = 2 × 6/9 = 12/9 = 1.33 A. Less resistance → more current. The 3 Ω gets twice the current of the 6 Ω." },

    { type: "section-header", title: "Medium", subtitle: "Multi-step reasoning · 7 problems · 28 pts" },

    { type: "int", diff: "medium", pts: 4,
      question: "Find the equivalent resistance between terminals A and B: a 12 Ω resistor in series with a parallel combination of 6 Ω and 3 Ω. Answer in ohms.",
      answer: 14,
      hint: "Reduce innermost first: 6||3 = (6×3)/(6+3) = 18/9 = 2 Ω. Then series: 12 + 2 = 14 Ω. Always collapse parallel groups before adding series." },

    { type: "mc", diff: "medium", pts: 4,
      question: "A 10 Ω and 30 Ω resistor are in series across a 20 V supply. What is the voltage across the 10 Ω resistor?",
      choices: ["5 V", "10 V", "15 V", "20 V"],
      correct: 0,
      explain: "Voltage divider: V₁₀ = (10/(10+30)) × 20 = (10/40) × 20 = 0.25 × 20 = 5 V. The larger resistor drops most of the voltage — 15 V across the 30 Ω." },

    { type: "int", diff: "medium", pts: 4,
      question: "A 4 Ω and 8 Ω resistor are in series across a 24 V battery. What is the total power dissipated by both resistors, in watts?",
      answer: 48,
      hint: "R_eq = 4 + 8 = 12 Ω. I = V/R_eq = 24/12 = 2 A. P_total = I²R_eq = 4 × 12 = 48 W. Or directly: P = V²/R_eq = 576/12 = 48 W." },

    { type: "mc", diff: "medium", pts: 4,
      question: "A battery with EMF ε = 9 V and internal resistance r = 1 Ω is connected to a variable load resistor R. For what value of R is the power delivered to the load maximum?",
      choices: ["0.5 Ω", "1 Ω", "2 Ω", "9 Ω"],
      correct: 1,
      explain: "Maximum power transfer theorem: power to load is maximized when R_load = r_internal = 1 Ω. At this point, P_max = ε²/(4r) = 81/4 = 20.25 W. Half the power is dissipated in the internal resistance." },

    { type: "int", diff: "medium", pts: 4,
      question: "Find R_eq between A and B: a 10 Ω resistor in parallel with a series combination of 4 Ω and 6 Ω. Answer in ohms.",
      answer: 5,
      hint: "Reduce series first: 4 + 6 = 10 Ω. Then parallel: 10||10 = (10×10)/(10+10) = 100/20 = 5 Ω. Two equal resistors in parallel give half the value." },

    { type: "mc", diff: "medium", pts: 4,
      question: "A 20 Ω resistor carries 0.5 A for 2 minutes. How much energy is dissipated as heat?",
      choices: ["10 J", "600 J", "300 J", "1200 J"],
      correct: 1,
      explain: "P = I²R = (0.5)²(20) = 0.25 × 20 = 5 W. t = 2 × 60 = 120 s. E = Pt = 5 × 120 = 600 J. Energy = power × time — remember to convert minutes to seconds." },

    { type: "mc", diff: "medium", pts: 4,
      question: "At a junction in a circuit, three wires meet. Wire 1 carries 5 A into the junction, wire 2 carries 3 A into the junction. What is the current in wire 3?",
      choices: ["8 A into the junction", "8 A out of the junction", "2 A into the junction", "2 A out of the junction"],
      correct: 1,
      explain: "KCL: ΣI_in = ΣI_out. Total in = 5 + 3 = 8 A. Wire 3 must carry 8 A out for the junction to balance. Charge cannot accumulate at a node — what goes in must come out." },

    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 3 problems · 15 pts" },

    { type: "int", diff: "hard", pts: 5,
      question: "A 12 V battery supplies 4 A total to two parallel branches. Branch 1 has a single 4 Ω resistor. Branch 2 has a 6 Ω resistor in series with an unknown resistor R. Find R in ohms.",
      answer: 6,
      hint: "Total R_eq = V/I = 12/4 = 3 Ω. Parallel: 1/3 = 1/4 + 1/(6+R). 1/(6+R) = 1/3 − 1/4 = 1/12. So 6+R = 12, R = 6 Ω. Verify: branch 2 = 12 Ω, parallel with 4 Ω → (4×12)/(4+12) = 48/16 = 3 Ω. I = 12/3 = 4 A." },

    { type: "int", diff: "hard", pts: 5,
      question: "Find R_eq for: (3 Ω parallel with 6 Ω), in series with (4 Ω parallel with 12 Ω), in series with 2 Ω. Answer in ohms.",
      answer: 7,
      hint: "Work innermost outward: 3||6 = (3×6)/(3+6) = 18/9 = 2 Ω. 4||12 = (4×12)/(4+12) = 48/16 = 3 Ω. Total: 2 + 3 + 2 = 7 Ω. Systematic reduction — always collapse nested parallel groups before adding series." },

    { type: "mc", diff: "hard", pts: 5,
      question: "A battery (ε = 10 V, r = 2 Ω) is connected to a variable load R. What is the maximum power that can be delivered to the load?",
      choices: ["5.0 W", "12.5 W", "25 W", "50 W"],
      correct: 1,
      explain: "Max power when R = r = 2 Ω. Circuit current: I = ε/(r+R) = 10/4 = 2.5 A. P_load = I²R = (2.5)²(2) = 6.25 × 2 = 12.5 W. Formula: P_max = ε²/(4r) = 100/8 = 12.5 W. At maximum power transfer, efficiency is only 50% — half the power heats the battery internally." },
  ],
};

export default function G10CircuitsPS01() {
  return <ProbsetComposer config={CONFIG} />;
}
