import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Exam Set<br /><em>Trigonometry Fundamentals</em>",
    subtitle: "30 problems · Comprehensive review · Applications · Identities",
    topic: "G10 Trigonometry Bridge",
    examMode: true,
  },
  blocks: [
    // ── EASY (1 dot, 3 pts) ──────────────────────────────
    { type: "section-header", title: "Easy", subtitle: "Direct application · 3 pts each" },

    { type: "mc", diff: "easy",
      question: "What is sin(0°)?",
      choices: ["0", "1/2", "√2/2", "1"], correct: 0 },

    { type: "mc", diff: "easy",
      question: "What is cos(0°)?",
      choices: ["0", "1/2", "√2/2", "1"], correct: 3 },

    { type: "mc", diff: "easy",
      question: "What is tan(0°)?",
      choices: ["0", "1", "√3", "undefined"], correct: 0 },

    { type: "int", diff: "easy",
      question: "In right triangle ABC, angle C = 90°, AB = 10 (hypotenuse), BC = 6. What is AC?",
      answer: 8 },

    { type: "tf", diff: "easy",
      statement: "sin(30°) = 1/2", correct: true },

    { type: "mc", diff: "easy",
      question: "cos(60°) equals:",
      choices: ["1/2", "√3/2", "√2/2", "0"], correct: 0 },

    { type: "int", diff: "easy",
      question: "If sin(θ) = 3/5 and cos(θ) = 4/5, what is 4 × tan(θ)?",
      answer: 3 },

    { type: "tf", diff: "easy",
      statement: "tan(45°) = 1", correct: true },

    { type: "mc", diff: "easy",
      question: "sin(90°) equals:",
      choices: ["0", "1/2", "√2/2", "1"], correct: 3 },

    { type: "int", diff: "easy",
      question: "A right triangle has one angle of 30°. If the side opposite this angle is 5 cm, what is the hypotenuse in cm?",
      answer: 10,
      hint: "sin(30°) = 0.5, so opposite/hypotenuse = 0.5 → hypotenuse = 5/0.5." },

    { type: "tf", diff: "easy",
      statement: "cos(0°) = sin(90°)", correct: true },

    { type: "mc", diff: "easy",
      question: "What is sin²(θ) + cos²(θ) equal to?",
      choices: ["0", "1/2", "1", "2"], correct: 2,
      explain: "This is the fundamental Pythagorean identity, true for any angle θ." },

    { type: "int", diff: "easy",
      question: "tan(45°) = ? (Answer as integer)",
      answer: 1 },

    { type: "tf", diff: "easy",
      statement: "sin(−θ) = −sin(θ)", correct: true },

    { type: "mc", diff: "easy",
      question: "cos(90°) equals:",
      choices: ["0", "1/2", "√2/2", "1"], correct: 0 },

    // ── MEDIUM (2 dots, 4 pts) ────────────────────────────
    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 4 pts each" },

    { type: "mc", diff: "medium",
      question: "A tree casts a shadow 15 m long when the sun's angle of elevation is 60°. How tall is the tree?",
      choices: ["8.7 m", "15.0 m", "26.0 m", "30.0 m"], correct: 2,
      explain: "tan(60°) = height/15 → height = 15 × √3 ≈ 25.98 ≈ 26.0 m." },

    { type: "int", diff: "medium",
      question: "A ladder 6 m long rests against a wall. If the foot of the ladder is 2 m from the wall, what angle does it make with the ground in degrees? (Round to nearest integer)",
      answer: 71,
      hint: "cos(θ) = adjacent/hypotenuse = 2/6 = 1/3. Find θ = arccos(1/3)." },

    { type: "tf", diff: "medium",
      statement: "sin(θ) = cos(90° − θ)", correct: true },

    { type: "mc", diff: "medium",
      question: "If sin(θ) = 3/5 and θ is in quadrant II, what is cos(θ)?",
      choices: ["−4/5", "4/5", "−3/5", "3/5"], correct: 0,
      explain: "cos²θ = 1 − sin²θ = 1 − 9/25 = 16/25 → cos θ = ±4/5. Cosine is negative in QII, so cos θ = −4/5." },

    { type: "int", diff: "medium",
      question: "In right triangle DEF, angle E = 90°, DF = 13, DE = 5. What is EF?",
      answer: 12 },

    { type: "mc", diff: "medium",
      question: "What is the reference angle for 150°?",
      choices: ["30°", "60°", "120°", "150°"], correct: 0,
      explain: "Reference angle = 180° − 150° = 30°." },

    { type: "tf", diff: "medium",
      statement: "tan(θ) = sin(θ)/cos(θ)", correct: true },

    { type: "int", diff: "medium",
      question: "From a point 20 m from the base of a tree, the angle of elevation to the top is 45°. What is the height of the tree in m?",
      answer: 20,
      hint: "tan(45°) = 1, so height = distance × 1." },

    { type: "mc", diff: "medium",
      question: "If cos(θ) = 0.6 and θ is in quadrant I, what is sin(θ)?",
      choices: ["0.4", "0.6", "0.8", "1.0"], correct: 2,
      explain: "sin θ = √(1 − cos²θ) = √(1 − 0.36) = √0.64 = 0.8." },

    { type: "tf", diff: "medium",
      statement: "cot(θ) = 1/tan(θ)", correct: true },

    // ── HARD (3 dots, 5 pts) ──────────────────────────────
    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 5 pts each" },

    { type: "mc", diff: "hard",
      question: "From the top of a cliff 80 m high, the angle of depression to a boat is 25°. How far is the boat from the base of the cliff?",
      choices: ["37.3 m", "80.0 m", "171.6 m", "188.4 m"], correct: 2,
      explain: "Angle of depression = angle of elevation from boat. tan(25°) = 80/d → d = 80/tan(25°) ≈ 80/0.4663 ≈ 171.6 m." },

    { type: "int", diff: "hard",
      question: "A ramp needs to rise 1.5 m to reach a platform. If the maximum allowed angle is 15°, what is the minimum length of the ramp in m? (Round to nearest integer)",
      answer: 6,
      hint: "length = rise/sin(15°) = 1.5/0.2588 ≈ 5.8 m → 6 m minimum." },

    { type: "tf", diff: "hard",
      statement: "sin(θ + 180°) = −sin(θ)", correct: true },

    { type: "mc", diff: "hard",
      question: "If tan(θ) = 2 and θ is in quadrant III, what is sin(θ)?",
      choices: ["−2/√5", "2/√5", "−1/√5", "1/√5"], correct: 0,
      explain: "tan = opp/adj = 2/1, hyp = √(2²+1²) = √5. sin = opp/hyp = ±2/√5. Sine is negative in QIII → sin θ = −2/√5." },

    { type: "int", diff: "hard",
      question: "A ladder leans against a wall making a 75° angle with the ground. If the top of the ladder is 10 m high, how long is the ladder in m? (Round to nearest integer)",
      answer: 10,
      hint: "height = length × sin(75°). length = 10/sin(75°) ≈ 10/0.9659 ≈ 10.35 → 10 m." },
  ],
};

export default function G10_Trig_Bridge_ExamSet() {
  return <ProbsetComposer config={CONFIG} />;
}
