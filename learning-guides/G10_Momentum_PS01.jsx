import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Momentum &amp;<br /><em>Impulse</em>",
    subtitle: "15 questions · Impulse · Conservation · Collisions",
    topic: "G10 Momentum and Impulse — Problem Set 01",
    navLinks: [{ href: "learning-guides/G10_Momentum_L01.html", label: "Learning Guide" }],
  },
  blocks: [
    { type: "section-header", title: "Easy", subtitle: "Direct formula application · 5 problems · 15 pts" },

    // E1
    { type: "mc", diff: "easy", pts: 3,
      question: "A 5 kg object moves at 3 m/s. What is its momentum?",
      choices: ["8 kg·m/s", "15 kg·m/s", "2 kg·m/s", "25 kg·m/s"],
      correct: 1,
      explain: "p = mv = 5 × 3 = 15 kg·m/s." },

    // E2
    { type: "int", diff: "easy", pts: 3,
      question: "A 2 kg ball experiences a constant force of 10 N for 0.5 seconds. Calculate the impulse in N·s.",
      answer: 5,
      hint: "J = FΔt = 10 × 0.5 = 5 N·s." },

    // E3
    { type: "tf", diff: "easy",
      statement: "Momentum has units of kg·m/s, which is equivalent to N·s.",
      correct: true },

    // E4
    { type: "mc", diff: "easy", pts: 3,
      question: "Which of the following has the same units as momentum?",
      choices: ["Force", "Impulse", "Kinetic energy", "Acceleration"],
      correct: 1,
      explain: "Impulse = FΔt has units N·s = kg·m/s — identical to momentum by the impulse-momentum theorem." },

    // E5
    { type: "int", diff: "easy", pts: 3,
      question: "A 1000 kg car accelerates from rest to 10 m/s. Calculate the change in momentum in kg·m/s.",
      answer: 10000,
      hint: "Δp = m(v_f − v_i) = 1000 × (10 − 0) = 10 000 kg·m/s." },

    { type: "section-header", title: "Medium", subtitle: "Multi-step reasoning · 5 problems · 20 pts" },

    // M1
    { type: "mc", diff: "medium", pts: 4,
      question: "A 0.2 kg ball traveling at 5 m/s is caught and brought to rest in 0.04 s. What is the average force exerted on the ball?",
      choices: ["25 N", "50 N", "100 N", "200 N"],
      correct: 0,
      explain: "J = mΔv = 0.2 × 5 = 1 N·s. F = J/Δt = 1/0.04 = 25 N." },

    // M2
    { type: "int", diff: "medium", pts: 4,
      question: "Two objects collide. Before: object 1 (3 kg, 4 m/s) and object 2 (2 kg, 0 m/s). After: object 1 moves at 2 m/s. Find the final velocity of object 2 in m/s (integer).",
      answer: 3,
      hint: "3(4) + 2(0) = 3(2) + 2v₂ → 12 = 6 + 2v₂ → v₂ = 3 m/s." },

    // M3
    { type: "tf", diff: "medium",
      statement: "In a perfectly inelastic collision, kinetic energy is always conserved.",
      correct: false },

    // M4
    { type: "mc", diff: "medium", pts: 4,
      question: "A 1.5 kg object moving at 8 m/s collides and sticks with a 2.5 kg object at rest. What is their common final velocity?",
      choices: ["2 m/s", "3 m/s", "4 m/s", "5 m/s"],
      correct: 1,
      explain: "Perfectly inelastic: v_f = (m₁v₁ᵢ + m₂v₂ᵢ)/(m₁+m₂) = (1.5×8 + 0)/(4) = 12/4 = 3 m/s." },

    // M5
    { type: "mc", diff: "medium", pts: 4,
      question: "A 0.5 kg ball drops from 2 m and bounces back to 0.5 m. What is the coefficient of restitution?",
      choices: ["0.25", "0.50", "0.70", "1.00"],
      correct: 1,
      explain: "e = √(h'/h) = √(0.5/2) = √0.25 = 0.50." },

    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 5 problems · 25 pts" },

    // H1
    { type: "mc", diff: "hard", pts: 5,
      question: "Two objects collide elastically. Object A (2 kg) moves at 6 m/s toward stationary object B (1 kg). Find the velocity of object A after the collision.",
      choices: ["2 m/s", "4 m/s", "6 m/s", "8 m/s"],
      correct: 0,
      explain: "Elastic formula: v_Af = (m_A − m_B)v_Ai/(m_A + m_B) = (2−1)(6)/(3) = 6/3 = 2 m/s. Check KE: before = ½(2)(36) = 36 J; after = ½(2)(4) + ½(1)(64) = 4 + 32 = 36 J ✓" },

    // H2
    { type: "int", diff: "hard", pts: 5,
      question: "Object 1 (4 kg, 5 m/s) and object 2 (6 kg, at rest) undergo a perfectly inelastic collision. Calculate the kinetic energy lost in joules.",
      answer: 30,
      hint: "v_f = 4(5)/10 = 2 m/s. KE_i = ½(4)(25) = 50 J. KE_f = ½(10)(4) = 20 J. ΔKE = 50 − 20 = 30 J." },

    // H3
    { type: "tf", diff: "hard",
      statement: "If two objects of equal mass collide elastically head-on and one is initially at rest, they exchange velocities — the moving one stops and the stationary one moves off at the original speed.",
      correct: true },

    // H4
    { type: "mc", diff: "hard", pts: 5,
      question: "A compressed spring separates two blocks (2 kg and 3 kg) initially at rest on a frictionless surface. The 2 kg block moves at 9 m/s afterward. Find the speed of the 3 kg block.",
      choices: ["6 m/s (opposite direction)", "9 m/s (opposite direction)", "4.5 m/s (opposite direction)", "3 m/s (opposite direction)"],
      correct: 0,
      explain: "Total initial momentum = 0. 2(9) + 3v₂ = 0 → v₂ = −6 m/s. The 3 kg block moves at 6 m/s in the opposite direction." },

    // H5
    { type: "int", diff: "hard", pts: 5,
      question: "A 0.1 kg projectile strikes a 2 kg block at rest at 50 m/s and embeds itself. Find the final kinetic energy of the block-projectile system in joules (round to nearest integer).",
      answer: 6,
      hint: "v_f = (0.1×50 + 0)/(2.1) = 5/2.1 ≈ 2.381 m/s. KE_f = ½(2.1)(2.381²) ≈ ½(2.1)(5.667) ≈ 5.95 ≈ 6 J. Initial KE was 125 J — nearly all lost to deformation." },
  ],
};

export default function G10MomentumPS01() {
  return <ProbsetComposer config={CONFIG} />;
}
