import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Uniform Circular Motion",
    subtitle: "Centripetal Force · Vertical Circles · Banked Curves",
    topic: "G10 Uniform Circular Motion — Problem Set 01",
    navLinks: [{ href: "learning-guides/G9_CircularMotion_L01.html", label: "Learning Guide" }],
  },
  blocks: [
    { type: "section-header", title: "Easy", subtitle: "Direct formula application · 5 problems · 15 pts" },

    // E1
    { type: "mc", diff: "easy", pts: 3,
      question: "An object moves in a circle of radius 2 m at constant speed 6 m/s. What is the centripetal acceleration?",
      choices: ["3 m/s²", "9 m/s²", "18 m/s²", "36 m/s²"],
      correct: 2,
      explain: "aᶜ = v²/r = (6)²/2 = 36/2 = 18 m/s²." },

    // E2
    { type: "tf", diff: "easy",
      statement: "Centripetal acceleration is parallel to the object's velocity in uniform circular motion.",
      correct: false,
      explain: "Centripetal acceleration points toward the center — perpendicular (radially inward) to the velocity, which is always tangential." },

    // E3
    { type: "int", diff: "easy", pts: 3,
      question: "A mass of 0.5 kg moves in a horizontal circle of radius 1 m at speed 4 m/s. What is the centripetal force in newtons?",
      answer: 8,
      hint: "Fᶜ = mv²/r = (0.5)(4²)/1 = (0.5)(16) = 8 N." },

    // E4
    { type: "mc", diff: "easy", pts: 3,
      question: "The period of a circular orbit is 4 s and the radius is 5 m. What is the angular velocity?",
      choices: ["0.5 rad/s", "1.57 rad/s", "3.14 rad/s", "6.28 rad/s"],
      correct: 1,
      explain: "ω = 2π/T = 2π/4 = π/2 ≈ 1.57 rad/s." },

    // E5
    { type: "int", diff: "easy", pts: 3,
      question: "At the top of a vertical loop of radius 10 m, what is the minimum speed in m/s to maintain contact with the track? Use g = 10 m/s².",
      answer: 10,
      hint: "v_min = √(gr) = √(10 × 10) = √100 = 10 m/s. At this speed the normal force from the track is exactly zero." },

    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 5 problems · 20 pts" },

    // M1
    { type: "mc", diff: "medium", pts: 4,
      question: "A car enters a flat, unbanked circular curve of radius 80 m. The coefficient of static friction is 0.6. What is the maximum speed before skidding (approx.)? Use g = 10 m/s².",
      choices: ["12 m/s", "21.9 m/s", "48 m/s", "69 m/s"],
      correct: 1,
      explain: "Friction provides centripetal force on flat road: v_max = √(μₛgr) = √(0.6 × 10 × 80) = √480 ≈ 21.9 m/s." },

    // M2
    { type: "tf", diff: "medium",
      statement: "On a banked curve, if a car's speed is below the ideal banking speed, friction acts up the slope.",
      correct: true,
      explain: "Below ideal speed, the inward component of normal force exceeds the centripetal requirement, so the car tends to slide down the bank. Friction opposes this tendency by acting up the slope." },

    // M3
    { type: "int", diff: "medium", pts: 4,
      question: "A conical pendulum has a string of length 1.5 m and the string makes a 45° angle with the vertical. Approximate the period in seconds (rounded to nearest integer). Use g = 10 m/s².",
      answer: 2,
      hint: "T_period = 2π√(L cosθ / g) = 2π√(1.5 × cos45° / 10) = 2π√(1.06/10) ≈ 2π × 0.325 ≈ 2.04 s ≈ 2 s." },

    // M4
    { type: "mc", diff: "medium", pts: 4,
      question: "A 2 kg mass is attached to a 1 m string and swung in a vertical circle. At the bottom, the tension is 50 N. What is the speed at the bottom? Use g = 10 m/s².",
      choices: ["2 m/s", "3.8 m/s", "4.5 m/s", "5 m/s"],
      correct: 1,
      explain: "At bottom: T = mg + mv²/r → 50 = (2)(10) + (2)v²/1 → 50 = 20 + 2v² → v² = 15 → v ≈ 3.87 m/s ≈ 3.8 m/s." },

    // M5
    { type: "int", diff: "medium", pts: 4,
      question: "A roller coaster cart enters a vertical loop of radius 8 m at the bottom with speed 20 m/s. Using energy conservation, what is the speed at the top in m/s (rounded to nearest integer)? Use g = 10 m/s².",
      answer: 9,
      hint: "v_top² = v_bot² − 4gr = (20)² − 4(10)(8) = 400 − 320 = 80. v_top = √80 ≈ 8.94 ≈ 9 m/s." },

    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 5 problems · 25 pts" },

    // H1
    { type: "mc", diff: "hard", pts: 5,
      question: "A ball is attached to a 1 m string and swung in a vertical circle. At the top, the tension equals half the ball's weight. What is the ratio aᶜ/g at that point?",
      choices: ["0.5", "1", "1.5", "2"],
      correct: 2,
      explain: "At top: T + mg = mv²/r. With T = 0.5mg: 0.5mg + mg = mv²/r → 1.5mg = maᶜ → aᶜ/g = 1.5." },

    // H2
    { type: "tf", diff: "hard",
      statement: "At the bottom of a vertical circular loop, the normal force acting on the object equals the centripetal force.",
      correct: false,
      explain: "At the bottom, N − mg = mv²/r, so N = mg + mv²/r. The normal force equals the centripetal force plus the weight. N > Fᶜ always." },

    // H3
    { type: "int", diff: "hard", pts: 5,
      question: "A banked track has no friction and is designed so that a car travelling at 20 m/s needs no friction at bank angle 30°. What is the radius of the curve in meters (rounded to nearest integer)? Use g = 10 m/s².",
      answer: 69,
      hint: "tanθ = v²/(rg) → r = v²/(g tanθ) = 400/(10 × tan30°) = 400/(10 × 0.5774) ≈ 400/5.774 ≈ 69.3 m ≈ 69 m." },

    // H4
    { type: "mc", diff: "hard", pts: 5,
      question: "A motorcycle enters a banked turn at exactly the ideal speed for a 20° bank angle. The rider then accelerates above the ideal speed. In which direction does friction now act?",
      choices: ["Down the slope", "Up the slope", "Tangent to the curve", "Friction is zero"],
      correct: 0,
      explain: "Above ideal speed, the required centripetal force exceeds what the normal force alone can provide. The car tends to slide up the bank, so friction acts down the slope to supply the additional inward force." },

    // H5
    { type: "int", diff: "hard", pts: 5,
      question: "A ball is released from rest at height h above the bottom of a frictionless vertical circular loop of radius r = 4 m. What is the minimum value of h in meters (integer) for the ball to complete the loop without losing contact? Use g = 10 m/s².",
      answer: 10,
      hint: "h_min = 5r/2 = 5(4)/2 = 10 m. Derivation: at the top, v_min² = gr. Energy: gh = ½v_min² + g(2r) = ½gr + 2gr = (5/2)gr → h = 5r/2." },
  ],
};

export default function G10CircularMotionPS01() {
  return <ProbsetComposer config={CONFIG} />;
}
