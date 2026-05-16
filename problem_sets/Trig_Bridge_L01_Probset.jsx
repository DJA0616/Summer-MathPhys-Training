import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Trigonometry Bridge",
    subtitle: "Unit Circle · SOH-CAH-TOA · Identities · Waves",
    topic: "Trig Bridge — Lecture 1 Companion",
  },
  blocks: [
    { type: "section-header", title: "Easy", subtitle: "Direct recall · 5 problems · 15 pts" },

    { type: "mc", diff: "easy", pts: 3,
      question: "In a right triangle, the side opposite angle θ is 3 and the hypotenuse is 5. What is sin θ?",
      choices: ["5/3", "3/5", "4/5", "3/4"],
      correct: 1,
      explain: "sin θ = opposite/hypotenuse = 3/5. This is the 3-4-5 Pythagorean triple — the adjacent side is 4." },

    { type: "mc", diff: "easy", pts: 3,
      question: "Which of the following equals cos(π/3)?",
      choices: ["1/2", "√2/2", "√3/2", "1"],
      correct: 0,
      explain: "cos(π/3) = cos(60°) = 1/2. On the unit circle at 60°, the x-coordinate is 1/2." },

    { type: "mc", diff: "easy", pts: 3,
      question: "A right triangle has adjacent side 4 and hypotenuse 5. What is tan θ?",
      choices: ["4/3", "3/4", "4/5", "5/4"],
      correct: 1,
      explain: "tan θ = opposite/adjacent. By Pythagoras: opposite = √(5²−4²) = 3. So tan θ = 3/4." },

    { type: "int", diff: "easy", pts: 3,
      question: "Convert 150° to radians. Express as a fraction of π (e.g., if answer is 5π/6, enter the numerator 5).",
      answer: 5,
      hint: "150° = 150 × π/180 = 5π/6. The numerator is 5." },

    { type: "mc", diff: "easy", pts: 3,
      question: "At θ = π/2, the point P on the unit circle sits at the top. Which is correct?",
      choices: ["cos = 1, sin = 0", "cos = 0, sin = 1", "cos = −1, sin = 0", "cos = 0, sin = −1"],
      correct: 1,
      explain: "At π/2 (90°), the point is (0, 1): cos(π/2) = 0, sin(π/2) = 1." },

    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 5 problems · 20 pts" },

    { type: "mc", diff: "medium", pts: 4,
      question: "cos(−π/3) equals cos(π/3) because cosine is even. If cos(π/3) = 1/2, what is sin(−π/3)?",
      choices: ["1/2", "−1/2", "√3/2", "−√3/2"],
      correct: 3,
      explain: "sin(−θ) = −sin(θ). sin(π/3) = √3/2, so sin(−π/3) = −√3/2. Sine is odd, cosine is even." },

    { type: "int", diff: "medium", pts: 4,
      question: "Point P is in Quadrant II with sin θ = 5/13. Using sin²θ + cos²θ = 1, find cos θ as a reduced fraction a/b. Enter the numerator a (include the sign).",
      answer: -12,
      hint: "cos²θ = 1 − sin²θ = 1 − 25/169 = 144/169. cos θ = ±12/13. In Q II, cosine is negative → cos θ = −12/13. Numerator: −12." },

    { type: "mc", diff: "medium", pts: 4,
      question: "Without a calculator: what is the exact value of sin(5π/4)?",
      choices: ["√2/2", "−√2/2", "−1/2", "−√3/2"],
      correct: 1,
      explain: "5π/4 = 225° is in Q III (both sin and cos negative). Reference angle = 225° − 180° = 45°. sin(45°) = √2/2, so sin(5π/4) = −√2/2." },

    { type: "int", diff: "medium", pts: 4,
      question: "Using sin²θ + cos²θ = 1 and given that θ is acute with sin θ = 0.6, find tan θ as a decimal to 2 decimal places.",
      answer: 0.75,
      hint: "cos θ = √(1 − 0.36) = √0.64 = 0.8. tan θ = sin θ/cos θ = 0.6/0.8 = 0.75." },

    { type: "mc", diff: "medium", pts: 4,
      question: "A pendulum's position is x(t) = 0.2·sin(3t + π/4). What is its angular frequency ω?",
      choices: ["0.2 rad/s", "3 rad/s", "π/4 rad/s", "3t + π/4 rad/s"],
      correct: 1,
      explain: "In x = A·sin(ωt + φ), A = 0.2 m, ω = 3 rad/s, φ = π/4. Angular frequency is the coefficient of t inside the sine." },

    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 2 problems · 10 pts" },

    { type: "int", diff: "hard", pts: 5,
      question: "A spring-mass system is released from rest at maximum compression (x = A, v = 0). The motion is x(t) = A·sin(ωt + φ). What is the phase constant φ in radians? Express as a multiple of π (e.g., if φ = π/2, enter 0.5).",
      answer: 0.5,
      hint: "At t = 0: x(0) = A → sin(φ) = 1 → φ = π/2. As decimal: 0.5 (meaning π/2). This makes the motion equivalent to A·cos(ωt)." },

    { type: "mc", diff: "hard", pts: 5,
      question: "If sin θ = 3/5 and cos θ < 0, what is tan θ?",
      choices: ["−3/4", "3/4", "−4/3", "4/3"],
      correct: 0,
      explain: "sin θ > 0 and cos θ < 0 → Q II. cos θ = −√(1 − 9/25) = −4/5. tan θ = sin θ/cos θ = (3/5)/(−4/5) = −3/4." },
  ],
};

export default function Trig_Bridge_L01_Probset() {
  return <ProbsetComposer config={CONFIG} />;
}
