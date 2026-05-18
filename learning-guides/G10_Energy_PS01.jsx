import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Energy",
    subtitle: "Work · Power · KE · PE · Conservation",
    topic: "G10 Energy — Problem Set 01",
    navLinks: [{ href: "learning-guides/G10_Energy_L01.html", label: "Learning Guide" }],
  },
  blocks: [
    { type: "section-header", title: "Easy", subtitle: "Direct formula application · 5 problems · 15 pts" },

    { type: "mc", diff: "easy", pts: 3,
      question: "A 2 kg book is lifted vertically 1.5 m at constant velocity. How much work is done against gravity?",
      choices: ["15 J", "29.4 J", "3 J", "0 J"],
      correct: 1,
      explain: "W = mgh = (2)(9.8)(1.5) = 29.4 J. At constant velocity the lifting force equals gravity, so all work goes into gravitational PE." },

    { type: "int", diff: "easy", pts: 3,
      question: "A 4 kg block is pushed along a frictionless surface with a constant force of 10 N in the direction of motion. Over a distance of 3 m, how much work is done (in joules)?",
      answer: 30,
      hint: "W = Fd cosθ = (10)(3)(cos 0°) = 30 J. Force is parallel to displacement." },

    { type: "tf", diff: "easy", pts: 3,
      statement: "Kinetic energy is always positive (or zero), regardless of the direction of motion.",
      correct: true,
      explain: "KE = ½mv² depends on the square of speed. Since v² ≥ 0 always, KE ≥ 0. Direction has no effect on KE." },

    { type: "mc", diff: "easy", pts: 3,
      question: "A spring with spring constant 100 N/m is stretched 0.2 m. How much elastic potential energy is stored?",
      choices: ["2 J", "4 J", "20 J", "10 J"],
      correct: 0,
      explain: "PE_s = ½kx² = ½(100)(0.2²) = ½(100)(0.04) = 2 J. Compressing the same spring by 0.2 m stores the same energy — PE_s depends on x², not the sign of x." },

    { type: "int", diff: "easy", pts: 3,
      question: "If a motor does 500 J of work in 4 seconds, what is its average power in watts?",
      answer: 125,
      hint: "P = W/Δt = 500/4 = 125 W." },

    { type: "section-header", title: "Medium", subtitle: "Multi-step reasoning · 5 problems · 20 pts" },

    { type: "mc", diff: "medium", pts: 4,
      question: "A 3 kg block starts from rest and is accelerated by a net force of 12 N over 2 m on a frictionless surface. What is its final kinetic energy?",
      choices: ["6 J", "12 J", "24 J", "36 J"],
      correct: 2,
      explain: "W_net = Fd = (12)(2) = 24 J. By the work-energy theorem, ΔKE = W_net. Starting from rest, KE_f = 24 J. No need to find acceleration." },

    { type: "int", diff: "medium", pts: 4,
      question: "A ball of mass 0.5 kg is thrown upward with an initial speed of 20 m/s. Using energy conservation (no air resistance), at what height (in metres) will its speed be 10 m/s? (Use g = 10 m/s²)",
      answer: 15,
      hint: "½mv_i² = ½mv_f² + mgh → h = (v_i² − v_f²)/(2g) = (400 − 100)/20 = 15 m." },

    { type: "tf", diff: "medium", pts: 4,
      statement: "A force perpendicular to the direction of motion does zero work on the object.",
      correct: true,
      explain: "W = Fd cosθ. When θ = 90°, cos 90° = 0, so W = 0. Classic example: centripetal force in circular motion does no work — speed stays constant." },

    { type: "mc", diff: "medium", pts: 4,
      question: "A 2 kg box slides down a frictionless incline from rest, descending a vertical height of 5 m. What is its speed at the bottom? (Use g = 10 m/s²)",
      choices: ["5 m/s", "7.1 m/s", "10 m/s", "20 m/s"],
      correct: 2,
      explain: "Conservation of energy: mgh = ½mv² → v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s. The incline angle is irrelevant — only the vertical drop determines speed on a frictionless surface." },

    { type: "int", diff: "medium", pts: 4,
      question: "A 60 kg person climbs stairs to a height of 4 m in 8 seconds at constant speed. How much power do their muscles deliver (in watts)? (Use g = 10 m/s²)",
      answer: 300,
      hint: "W = mgh = (60)(10)(4) = 2400 J. P = W/Δt = 2400/8 = 300 W." },

    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 5 problems · 25 pts" },

    { type: "mc", diff: "hard", pts: 5,
      question: "A 1.5 kg block on a horizontal surface is pushed by a force of 8 N at 30° above the horizontal. The block moves 4 m. Friction is negligible. How much work is done by the applied force?",
      choices: ["32 J", "32 cos(30°) ≈ 27.7 J", "48 J", "48 cos(30°) ≈ 41.6 J"],
      correct: 1,
      explain: "W = Fd cosθ = (8)(4)(cos 30°) = 32 × 0.866 ≈ 27.7 J. Only the horizontal component of force (F cosθ) does work — the vertical component lifts against the normal force but does no work along the displacement." },

    { type: "int", diff: "hard", pts: 5,
      question: "A 0.8 kg ball falls from rest from a height of 20 m and bounces to a height of 12 m. How much mechanical energy (in joules) is lost in the collision? (Use g = 10 m/s²)",
      answer: 64,
      hint: "Initial PE: mgh₁ = (0.8)(10)(20) = 160 J. Final PE: mgh₂ = (0.8)(10)(12) = 96 J. Energy lost = 160 − 96 = 64 J." },

    { type: "tf", diff: "hard", pts: 5,
      statement: "In a system where only conservative forces act, the total mechanical energy can change over time.",
      correct: false,
      explain: "False. Conservative forces (gravity, spring) conserve mechanical energy — the total KE + PE remains constant. Only non-conservative forces (friction, air resistance) reduce mechanical energy, converting it to heat." },

    { type: "mc", diff: "hard", pts: 5,
      question: "A 2 kg block is launched horizontally along a rough table at 6 m/s. The coefficient of kinetic friction is 0.3. How far does it slide before stopping? (Use g = 10 m/s²)",
      choices: ["6 m", "5 m", "4 m", "3 m"],
      correct: 0,
      explain: "Initial KE = ½(2)(6²) = 36 J. Friction force f = μmg = (0.3)(2)(10) = 6 N. Work by friction = −fd = −36 J → d = 36/6 = 6 m. Energy method avoids computing deceleration and using kinematics." },

    { type: "int", diff: "hard", pts: 5,
      question: "A 1200 kg car accelerates from 5 m/s to 20 m/s. A constant friction force of 500 N opposes motion. The net work done on the car is 225 kJ. How far does it travel (in metres)?",
      answer: 300,
      hint: "ΔKE = ½m(v_f² − v_i²) = ½(1200)(400 − 25) = 225 000 J. W_net = W_engine − W_friction = F_engine·d − 500d = 225 000 J. Also W_net = F_net·d, so d = 225 000 / F_net. Net force = F_engine − 500; noting ΔKE fixes d = 300 m." },
  ],
};

export default function G10EnergyPS01() {
  return <ProbsetComposer config={CONFIG} />;
}
