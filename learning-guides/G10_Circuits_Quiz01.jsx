import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Circuits Quiz",
    subtitle: "Timed Assessment · 10 Questions · 15 Minutes",
    topic: "G10 Circuits — Quiz 01",
    examMode: true,
    quizMode: true,
    timerDuration: 15 * 60,
    timerPhaseThresholds: [600, 300, 60],
  },
  blocks: [
    { type: "mc", diff: "easy", pts: 3,
      question: "A 12 V battery is connected across a 6 Ω resistor. What is the current through the resistor?",
      choices: ["0.5 A", "2 A", "6 A", "72 A"],
      correct: 1,
      explain: "I = V/R = 12/6 = 2 A." },

    { type: "int", diff: "easy", pts: 3,
      question: "Three resistors — 10 Ω, 20 Ω, and 30 Ω — are connected in series. What is the equivalent resistance in ohms?",
      answer: 60,
      hint: "Series: R_eq = R₁ + R₂ + R₃ = 10 + 20 + 30 = 60 Ω." },

    { type: "mc", diff: "medium", pts: 4,
      question: "A 4 Ω and 12 Ω resistor are connected in parallel. What is the equivalent resistance?",
      choices: ["3 Ω", "8 Ω", "16 Ω", "4 Ω"],
      correct: 0,
      explain: "Product over sum: (4×12)/(4+12) = 48/16 = 3 Ω." },

    { type: "mc", diff: "easy", pts: 3,
      question: "A resistor dissipates 48 W when connected to a 12 V supply. What is its resistance?",
      choices: ["0.25 Ω", "3 Ω", "4 Ω", "12 Ω"],
      correct: 1,
      explain: "P = V²/R → R = V²/P = 144/48 = 3 Ω. Or: I = P/V = 4 A, R = V/I = 3 Ω." },

    { type: "int", diff: "medium", pts: 4,
      question: "Find R_eq between A and B: a 10 Ω resistor in parallel with a series combination of two 10 Ω resistors. Answer in ohms, rounded to 1 decimal place.",
      answer: 6.7,
      hint: "Series first: 10 + 10 = 20 Ω. Then parallel: 10||20 = (10×20)/(10+20) = 200/30 = 6.67 Ω." },

    { type: "mc", diff: "medium", pts: 4,
      question: "At a junction, 4 A enters from one wire and 1 A leaves through a second wire. What is the current in the third wire?",
      choices: ["5 A entering", "5 A leaving", "3 A entering", "3 A leaving"],
      correct: 3,
      explain: "KCL: ΣI_in = ΣI_out. 4 = 1 + I₃ → I₃ = 3 A leaving." },

    { type: "mc", diff: "easy", pts: 3,
      question: "A copper wire has resistance R. If its length is doubled (keeping area constant), what is the new resistance?",
      choices: ["R/2", "R", "2R", "4R"],
      correct: 2,
      explain: "R = ρL/A. Doubling L doubles R." },

    { type: "int", diff: "easy", pts: 3,
      question: "A 5 A current flows through a 10 Ω resistor for 30 seconds. How much energy is dissipated in joules?",
      answer: 7500,
      hint: "P = I²R = 25 × 10 = 250 W. E = Pt = 250 × 30 = 7500 J." },

    { type: "mc", diff: "hard", pts: 5,
      question: "A 12 V battery with internal resistance r = 2 Ω is connected to an external resistor R = 4 Ω. What is the terminal voltage of the battery?",
      choices: ["4 V", "8 V", "10 V", "12 V"],
      correct: 1,
      explain: "I = ε/(r+R) = 12/6 = 2 A. Terminal voltage = ε − Ir = 12 − 4 = 8 V. The 4 V drop is across the internal resistance." },

    { type: "mc", diff: "hard", pts: 5,
      question: "A 50 Ω and 100 Ω resistor in parallel are connected in series with a 20 Ω resistor across a 12 V supply. What is the total current from the battery?",
      choices: ["0.10 A", "0.14 A", "0.23 A", "0.45 A"],
      correct: 2,
      explain: "50||100 = (50×100)/(150) = 33.3 Ω. R_total = 33.3 + 20 = 53.3 Ω. I = 12/53.3 ≈ 0.225 A. Rounded to 0.23 A." },
  ],
};

export default function G10CircuitsQuiz01() {
  return <ProbsetComposer config={CONFIG} />;
}
