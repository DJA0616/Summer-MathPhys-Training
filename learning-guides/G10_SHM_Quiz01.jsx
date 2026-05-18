import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Simple Harmonic Motion Quiz",
    subtitle: "Timed Assessment · 10 Questions · 15 Minutes",
    topic: "G10 Simple Harmonic Motion — Quiz 01",
    examMode: true,
    quizMode: true,
    timerDuration: 15 * 60,
    timerPhaseThresholds: [600, 300, 60],
  },
  blocks: [
    // Q1 — easy mc: max acceleration
    { type: "mc", diff: "easy", pts: 3,
      question: "A mass on a spring has amplitude A = 0.08 m and angular frequency ω = 5 rad/s. What is the maximum acceleration?",
      choices: ["0.04 m/s²", "0.4 m/s²", "2 m/s²", "40 m/s²"],
      correct: 2,
      explain: "a_max = Aω² = 0.08 × 25 = 2 m/s². Maximum acceleration occurs at maximum displacement, where the restoring force is greatest." },

    // Q2 — easy tf: period independent of mass
    { type: "tf", diff: "easy",
      statement: "The period of a simple pendulum depends on the mass of the bob.",
      correct: false,
      explain: "False. T = 2π√(L/g) contains only length and gravitational acceleration — mass cancels out. This isochronism is why all pendulums of the same length swing at the same rate regardless of how heavy the bob is." },

    // Q3 — easy int: max velocity
    { type: "int", diff: "easy", pts: 3,
      question: "A mass oscillates with amplitude 0.20 m and angular frequency 15 rad/s. What is the maximum speed in m/s? (Give the nearest whole number.)",
      answer: 3,
      hint: "v_max = Aω = 0.20 × 15 = 3 m/s. Maximum speed occurs at equilibrium (x = 0), where all energy is kinetic." },

    // Q4 — medium mc: spring constant from T and m
    { type: "mc", diff: "medium", pts: 4,
      question: "A 0.4 kg mass on a spring oscillates with period 0.4 s. What is the spring constant?",
      choices: ["25.0 N/m", "39.5 N/m", "98.7 N/m", "157.9 N/m"],
      correct: 2,
      explain: "Rearrange T = 2π√(m/k): k = 4π²m/T² = 4π²(0.4)/(0.4)² = 15.79/0.16 ≈ 98.7 N/m." },

    // Q5 — medium mc: Doppler, observer moving toward source
    { type: "mc", diff: "medium", pts: 4,
      question: "A stationary speaker emits 800 Hz. An observer runs toward it at 17 m/s. What frequency does the observer hear? (v_sound = 340 m/s)",
      choices: ["760 Hz", "800 Hz", "840 Hz", "880 Hz"],
      correct: 2,
      explain: "Observer moving toward source: f’ = f(v + v_obs)/v = 800 × (340 + 17)/340 = 800 × 1.05 = 840 Hz. The observer intercepts wavefronts faster than they are emitted, raising the perceived pitch." },

    // Q6 — medium tf: total energy vs amplitude squared
    { type: "tf", diff: "medium",
      statement: "In undamped SHM, tripling the amplitude makes the total mechanical energy nine times larger.",
      correct: true,
      explain: "True. E = ½kA². If A → 3A, then E → ½k(3A)² = 9 × ½kA² = 9E. Total energy scales as the square of the amplitude." },

    // Q7 — medium int: pendulum length for T = 2 s
    { type: "int", diff: "medium", pts: 4,
      question: "What length of pendulum (in cm, nearest integer) gives a period of exactly 2 s on Earth? (Use g = 9.8 m/s².)",
      answer: 99,
      hint: "T = 2π√(L/g) → L = g(T/2π)² = 9.8 × (2/6.283)² = 9.8 × 0.1013 ≈ 0.993 m ≈ 99 cm. This 'seconds pendulum' was the basis of early precision clocks." },

    // Q8 — hard mc: speed at given displacement via energy conservation
    { type: "mc", diff: "hard", pts: 5,
      question: "A spring–mass system (k = 200 N/m, m = 2 kg) oscillates with amplitude 0.10 m. What is the speed when x = 0.06 m?",
      choices: ["0.64 m/s", "0.80 m/s", "1.00 m/s", "1.26 m/s"],
      correct: 1,
      explain: "Energy conservation: ½mv² = ½k(A² − x²). v = √[k(A² − x²)/m] = √[200(0.01 − 0.0036)/2] = √[200 × 0.0064/2] = √0.64 = 0.80 m/s." },

    // Q9 — hard mc: wavelength of sound in a new medium
    { type: "mc", diff: "hard", pts: 5,
      question: "A 1200 Hz sound wave in air (v = 340 m/s) enters a solid where the wave speed is 5100 m/s. What is the wavelength inside the solid?",
      choices: ["0.28 m", "2.38 m", "4.25 m", "6.12 m"],
      correct: 2,
      explain: "Frequency does not change at a boundary — only speed and wavelength do. λ_solid = v_solid/f = 5100/1200 = 4.25 m. Wavelengths are dramatically longer in solids." },

    // Q10 — hard mc: clock rate on a planet with higher g
    { type: "mc", diff: "hard", pts: 5,
      question: "A pendulum clock is calibrated on Earth (g = 9.8 m/s²). Taken to a planet where g = 39.2 m/s², the clock runs fast. By what factor does it gain time?",
      choices: ["2× faster", "4× faster", "2× slower", "4× slower"],
      correct: 0,
      explain: "T ∝ 1/√g. Ratio of periods: T_planet/T_Earth = √(g_Earth/g_planet) = √(9.8/39.2) = √(0.25) = 0.5. The pendulum period halves, so the clock ticks twice as fast — it gains one second for every second that passes." },
  ],
};

export default function G10SHMQuiz01() {
  return <ProbsetComposer config={CONFIG} />;
}
