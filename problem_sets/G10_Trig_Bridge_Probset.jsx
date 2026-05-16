import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Problem Set<br /><em>Trigonometry Fundamentals</em>",
    subtitle: "20 problems · SOH-CAH-TOA · Basic angles · Identities · Applications",
    topic: "G10 Trigonometry Bridge",
    questions: 20,
  },
  blocks: [
    // ── EASY (1 dot, 3 pts) ──────────────────────────────
    { type: "section-header", title: "Easy", subtitle: "Direct application · 3 pts each" },

    { type: "mc", diff: "easy",
      question: "In a right triangle, sin(θ) = opposite/hypotenuse. If the side opposite angle θ is 3 cm and the hypotenuse is 5 cm, what is sin(θ)?",
      choices: ["3/5", "4/5", "5/3", "5/4"], correct: 0 },

    { type: "mc", diff: "easy",
      question: "What is cos(60°)?",
      choices: ["√3/2", "1/2", "√2/2", "0"], correct: 1 },

    { type: "int", diff: "easy",
      question: "A ladder leans against a wall at a 60° angle. If the ladder is 10 m long, how far is the base from the wall? (Use cos(60°) = 0.5)",
      answer: 5 },

    { type: "tf", diff: "easy",
      statement: "tan(45°) = 1", correct: true },

    { type: "mc", diff: "easy",
      question: "sin(30°) equals which of the following?",
      choices: ["1/2", "√3/2", "√2/2", "1"], correct: 0 },

    { type: "int", diff: "easy",
      question: "In a 30-60-90 triangle, if the shortest side is 4 cm, what is the length of the hypotenuse?",
      answer: 8 },

    { type: "tf", diff: "easy",
      statement: "sin(90°) = 0", correct: false },

    { type: "mc", diff: "easy",
      question: "What is tan(30°)?",
      choices: ["√3/3", "1/√3", "√3", "3"], correct: 0,
      explain: "tan(30°) = sin(30°)/cos(30°) = (1/2)/(√3/2) = 1/√3 = √3/3. Both A and B are equivalent — A is the rationalized form." },

    // ── MEDIUM (2 dots, 4 pts) ────────────────────────────
    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 4 pts each" },

    { type: "mc", diff: "medium",
      question: "A flagpole casts a shadow 12 m long when the sun's angle of elevation is 30°. How tall is the flagpole? (Use tan(30°) ≈ 0.577)",
      choices: ["6 m", "7 m", "8 m", "9 m"], correct: 1,
      explain: "tan(30°) = height / shadow → height = 12 × tan(30°) = 12 × 0.577 ≈ 6.92 m ≈ 7 m." },

    { type: "int", diff: "medium",
      question: "A ramp rises 2 m over a horizontal distance of 2√3 m. What is the angle of elevation in degrees?",
      answer: 30,
      hint: "tan(θ) = rise / run = 2 / (2√3) = 1/√3. What angle has this tangent?" },

    { type: "tf", diff: "medium",
      statement: "sin(θ) = cos(90° − θ) for any angle θ", correct: true },

    { type: "mc", diff: "medium",
      question: "If sin(θ) = 0.6 and θ is in the first quadrant, what is cos(θ)?",
      choices: ["0.4", "0.6", "0.8", "1.0"], correct: 2,
      explain: "cos(θ) = √(1 − sin²θ) = √(1 − 0.36) = √0.64 = 0.8." },

    { type: "int", diff: "medium",
      question: "A right triangle has legs of length 5 cm and 12 cm. What is the length of the hypotenuse?",
      answer: 13 },

    { type: "mc", diff: "medium",
      question: "What is the value of sin²(45°) + cos²(45°)?",
      choices: ["0", "0.5", "1", "2"], correct: 2,
      explain: "sin²(θ) + cos²(θ) = 1 for any angle θ — the fundamental Pythagorean identity." },

    { type: "tf", diff: "medium",
      statement: "tan(θ) = sin(θ)/cos(θ) is undefined when cos(θ) = 0", correct: true },

    { type: "int", diff: "medium",
      question: "In right triangle ABC, angle A = 30°, angle B = 60°, and side AB = 10 cm (hypotenuse). What is the length of side BC (opposite angle A)?",
      answer: 5,
      hint: "Side opposite 30° = hypotenuse × sin(30°) = 10 × 0.5." },

    // ── HARD (3 dots, 5 pts) ──────────────────────────────
    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 5 pts each" },

    { type: "mc", diff: "hard",
      question: "From the top of a 50 m building, the angle of depression to a car on the ground is 30°. How far is the car from the base of the building?",
      choices: ["28.9 m", "50.0 m", "86.6 m", "100.0 m"], correct: 2,
      explain: "Angle of depression = angle of elevation from car. tan(30°) = 50/d → d = 50/tan(30°) = 50/(1/√3) = 50√3 ≈ 86.6 m." },

    { type: "int", diff: "hard",
      question: "A kite is flying at a height of 30 m. If the string makes a 60° angle with the ground, what is the length of the string to the nearest integer?",
      answer: 35,
      hint: "height = length × sin(60°). So length = height / sin(60°) = 30 / (√3/2) = 60/√3 ≈ 34.64 m." },

    { type: "tf", diff: "hard",
      statement: "For any angle θ, sin(θ + 90°) = cos(θ)", correct: true },

    { type: "mc", diff: "hard",
      question: "If cos(θ) = 0.8 and θ is in the fourth quadrant, what is sin(θ)?",
      choices: ["−0.6", "0.6", "−0.8", "0.8"], correct: 0,
      explain: "sin²(θ) + cos²(θ) = 1 → sin²(θ) = 1 − 0.64 = 0.36 → sin(θ) = ±0.6. In QIV, sine is negative → sin(θ) = −0.6." },
  ],
};

export default function G10_Trig_Bridge_Probset() {
  return <ProbsetComposer config={CONFIG} />;
}
