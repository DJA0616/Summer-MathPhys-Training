import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Rotational Motion",
    subtitle: "Kinematics · Torque · Energy · Angular Momentum",
    topic: "G10 Rotational Motion — Problem Set 01",
    navLinks: [{ href: "learning-guides/G10_Rotation_L01.html", label: "Learning Guide" }],
  },
  blocks: [
    { type: "section-header", title: "Easy", subtitle: "Direct formula application · 5 problems · 15 pts" },

    // E1
    { type: "mc", diff: "easy", pts: 3,
      question: "A wheel rotates at constant angular velocity ω = 5.0 rad/s. What is its angular displacement after 2.0 s?",
      choices: ["2.5 rad", "5.0 rad", "10 rad", "20 rad"],
      correct: 2,
      explain: "θ = ωt = (5.0)(2.0) = 10 rad. At constant ω there is no angular acceleration, so the kinematic simplifies to θ = ωt." },

    // E2
    { type: "tf", diff: "easy", pts: 3,
      statement: "The moment of inertia of a solid cylinder rotating about its central axis is I = MR².",
      correct: false,
      explain: "False. The correct formula for a solid cylinder about its central axis is I = ½MR². Only a thin ring (hoop) has I = MR², because all of its mass sits at the outer radius." },

    // E3
    { type: "int", diff: "easy", pts: 3,
      question: "A disk starts from rest and reaches ω = 12 rad/s after rotating through 24 rad. What is the angular acceleration α in rad/s²?",
      answer: 3,
      hint: "Use ω² = ω₀² + 2αθ: (12)² = 0 + 2α(24) → 144 = 48α → α = 3 rad/s²." },

    // E4
    { type: "mc", diff: "easy", pts: 3,
      question: "Torque is defined as τ = rF sin θ. For which angle θ between the force and the lever arm is the torque maximum?",
      choices: ["0°", "45°", "90°", "180°"],
      correct: 2,
      explain: "sin(90°) = 1 is the maximum value of the sine function. When force is perpendicular to the lever arm, all of the force contributes to rotation and none is wasted along the arm." },

    // E5
    { type: "int", diff: "easy", pts: 3,
      question: "A spinning top has angular momentum L = 0.50 kg·m²/s and moment of inertia I = 0.010 kg·m². What is its angular velocity ω in rad/s?",
      answer: 50,
      hint: "L = Iω → ω = L/I = 0.50/0.010 = 50 rad/s." },

    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 5 problems · 20 pts" },

    // M1
    { type: "mc", diff: "medium", pts: 4,
      question: "A force F = 20 N is applied perpendicular to a lever arm of length r = 0.50 m. The moment of inertia about the pivot is I = 0.40 kg·m². What is the resulting angular acceleration?",
      choices: ["12.5 rad/s²", "25 rad/s²", "40 rad/s²", "50 rad/s²"],
      correct: 1,
      explain: "τ = rF sin(90°) = (0.50)(20) = 10 N·m. Then τ = Iα → α = τ/I = 10/0.40 = 25 rad/s²." },

    // M2
    { type: "int", diff: "medium", pts: 4,
      question: "Two masses balance on a seesaw pivoted at its center. Mass m₁ = 3.0 kg sits at r₁ = 0.80 m from the pivot. Mass m₂ = 4.0 kg is on the opposite side. At what distance r₂ from the pivot (in m, to two decimal places — enter the value × 100 as an integer, e.g., 60 for 0.60 m) should m₂ be placed for rotational equilibrium?",
      answer: 60,
      hint: "Στ = 0: m₁g·r₁ = m₂g·r₂. (3.0)(0.80) = (4.0)r₂. r₂ = 2.4/4.0 = 0.60 m → enter 60." },

    // M3
    { type: "tf", diff: "medium", pts: 4,
      statement: "If a spinning ice skater pulls her arms inward (reducing moment of inertia I), her angular velocity ω will decrease.",
      correct: false,
      explain: "False. Angular momentum L = Iω is conserved when no external torque acts. If I decreases, ω must increase to keep L constant: ω₂ = (I₁/I₂)ω₁ > ω₁." },

    // M4 — corrected: I = ½(1.0)(0.20)² = 0.020 kg·m², KE = ½(0.020)(100) = 1.0 J
    { type: "mc", diff: "medium", pts: 4,
      question: "A solid disk (I = ½MR²) with M = 1.0 kg and R = 0.20 m rotates at ω = 10 rad/s. What is its rotational kinetic energy?",
      choices: ["1.0 J", "2.0 J", "4.0 J", "10 J"],
      correct: 0,
      explain: "I = ½MR² = ½(1.0)(0.20)² = ½(1.0)(0.04) = 0.020 kg·m². KE_rot = ½Iω² = ½(0.020)(10)² = ½(0.020)(100) = 1.0 J." },

    // M5
    { type: "int", diff: "medium", pts: 4,
      question: "A torque of 12 N·m is applied to a wheel (I = 2.0 kg·m²) starting from rest for 3.0 s. What is the final angular velocity ω in rad/s?",
      answer: 18,
      hint: "α = τ/I = 12/2.0 = 6.0 rad/s². ω = ω₀ + αt = 0 + (6.0)(3.0) = 18 rad/s." },

    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 5 problems · 25 pts" },

    // H1
    { type: "mc", diff: "hard", pts: 5,
      question: "A solid sphere (I = ⅖MR²) rolls from rest down a frictionless ramp of height h. Using energy conservation, which expression gives the final speed v_cm of the center of mass?",
      choices: ["v = √(gh)", "v = √(1.25 gh)", "v = √(10gh/7)", "v = √(2gh)"],
      correct: 2,
      explain: "mgh = ½mv_cm² + ½(⅖mR²)(v_cm/R)² = ½mv_cm² + ⅕mv_cm² = (7/10)mv_cm². Cancel m: v_cm² = (10/7)gh → v = √(10gh/7) ≈ 1.195√(gh). A sliding block on a frictionless ramp gives √(2gh) — the sphere is slower because energy goes into rotation." },

    // H2 — corrected: τ = 0.080 N·m gives α = 4.0 rad/s², t = 20/4 = 5 s
    { type: "int", diff: "hard", pts: 5,
      question: "A hollow cylinder (thin-walled, I = MR²) with M = 2.0 kg and R = 0.10 m spins at ω₀ = 20 rad/s. A friction brake applies a torque of 0.080 N·m opposing rotation. How many seconds until the cylinder stops?",
      answer: 5,
      hint: "I = MR² = (2.0)(0.10)² = 0.020 kg·m². α = −τ/I = −0.080/0.020 = −4.0 rad/s². Time to stop: t = ω₀/|α| = 20/4.0 = 5 s." },

    // H3
    { type: "tf", diff: "hard", pts: 5,
      statement: "An object in rotational equilibrium (Στ = 0) must have zero angular velocity.",
      correct: false,
      explain: "False. Rotational equilibrium means zero net torque, which implies zero angular acceleration (α = 0), not zero angular velocity. The object can spin at any constant ω — just as a car cruising at constant speed has zero net force but nonzero velocity." },

    // H4
    { type: "int", diff: "hard", pts: 5,
      question: "Disk A (I_A = 0.030 kg·m²) rotates at ω_A = 8.0 rad/s. Disk B (I_B = 0.020 kg·m²) is at rest. They are pressed together on the same axis and friction brings them to a common final ω. What is the final angular velocity in rad/s? Enter the answer × 10 as an integer (e.g., 48 for 4.8 rad/s).",
      answer: 48,
      hint: "Conservation of angular momentum: I_A·ω_A + I_B·0 = (I_A + I_B)·ω_f. (0.030)(8.0) = (0.050)ω_f. ω_f = 0.24/0.050 = 4.8 rad/s → enter 48." },

    // H5 — corrected: τ = 1.0 N·m, θ = 4.0 rad → W = 4 J → ω = 4.0 rad/s
    { type: "mc", diff: "hard", pts: 5,
      question: "A torque τ = 1.0 N·m acts on a body initially at rest through an angular displacement θ = 4.0 rad. The moment of inertia is I = 0.50 kg·m². What is the final angular velocity?",
      choices: ["2.0 rad/s", "4.0 rad/s", "6.0 rad/s", "8.0 rad/s"],
      correct: 1,
      explain: "Work done by torque: W = τθ = (1.0)(4.0) = 4.0 J. Work–energy theorem: W = ½Iω² − 0. 4.0 = ½(0.50)ω² = 0.25ω². ω² = 16. ω = 4.0 rad/s." },
  ],
};

export default function G10RotationPS01() {
  return <ProbsetComposer config={CONFIG} />;
}
