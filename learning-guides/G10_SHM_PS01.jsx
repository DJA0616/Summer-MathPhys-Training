import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Simple Harmonic Motion &<br /><em>Sound Waves</em>",
    subtitle: "16 questions · Oscillations · Energy · Sound · Doppler",
    topic: "G10 Simple Harmonic Motion — Problem Set 01",
    navLinks: [{ href: "learning-guides/G10_SHM_L01.html", label: "Learning Guide" }],
  },
  blocks: [
    { type: "section-header", title: "Easy", subtitle: "Direct formula application · 5 problems · 15 pts" },

    // E1
    { type: "mc", diff: "easy", pts: 3,
      question: "A mass on a spring oscillates with amplitude 5 cm and frequency 2 Hz. What is the angular frequency ω?",
      choices: ["2 rad/s", "4π rad/s", "10 rad/s", "20π rad/s"],
      correct: 1,
      explain: "ω = 2πf = 2π × 2 = 4π ≈ 12.6 rad/s. Angular frequency converts the cycle frequency (Hz) into radians per second." },

    // E2
    { type: "int", diff: "easy", pts: 3,
      question: "A pendulum has length 2 m. What is its period in seconds, rounded to the nearest whole number? (Use g = 10 m/s².)",
      answer: 3,
      hint: "T = 2π√(L/g) = 2π√(2/10) = 2π × 0.447 ≈ 2.81 s. Rounds to 3 s." },

    // E3
    { type: "tf", diff: "easy",
      statement: "In simple harmonic motion, velocity is maximum when displacement from equilibrium is maximum.",
      correct: false,
      explain: "False. Velocity is maximum at equilibrium (x = 0), where all energy is kinetic. At maximum displacement (x = ±A), velocity is zero — the object momentarily stops before reversing. Position and velocity are 90° out of phase." },

    // E4
    { type: "mc", diff: "easy", pts: 3,
      question: "A tuning fork vibrates at 440 Hz in air. What is its wavelength? (v_air = 340 m/s)",
      choices: ["0.77 m", "1.3 m", "150 m", "1500 m"],
      correct: 0,
      explain: "λ = v/f = 340/440 ≈ 0.773 m. Wavelength is about 77 cm — roughly arm-length." },

    // E5
    { type: "int", diff: "easy", pts: 3,
      question: "A 500 Hz whistle sounds from a stationary source. What is the wavelength in cm, rounded to the nearest whole number? (Use v = 340 m/s.)",
      answer: 68,
      hint: "λ = v/f = 340/500 = 0.68 m = 68 cm." },

    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 5 problems · 20 pts" },

    // M1
    { type: "mc", diff: "medium", pts: 4,
      question: "A 0.1 kg mass on a spring undergoes SHM with period 0.5 s. What is the spring constant?",
      choices: ["12.6 N/m", "15.8 N/m", "25.3 N/m", "39.5 N/m"],
      correct: 1,
      explain: "Rearrange T = 2π√(m/k): k = 4π²m/T² = 4π²(0.1)/(0.5)² = 3.948/0.25 ≈ 15.8 N/m." },

    // M2
    { type: "int", diff: "medium", pts: 4,
      question: "A mass oscillates on a spring with amplitude 20 cm. If the total mechanical energy is 10 J, what is the spring constant in N/m?",
      answer: 500,
      hint: "E = ½kA² → k = 2E/A² = 2(10)/(0.20)² = 20/0.04 = 500 N/m." },

    // M3
    { type: "tf", diff: "medium",
      statement: "If a pendulum's length is increased by a factor of 4, its period increases by a factor of 2.",
      correct: true,
      explain: "True. T = 2π√(L/g), so T ∝ √L. If L → 4L, then T → 2π√(4L/g) = 2·T_original. The period doubles." },

    // M4
    { type: "mc", diff: "medium", pts: 4,
      question: "A car siren (1000 Hz) is moving away from a stationary observer at 20 m/s. Which frequency does the observer hear? (v_sound = 340 m/s)",
      choices: ["941 Hz", "1000 Hz", "1059 Hz", "1100 Hz"],
      correct: 0,
      explain: "Source moving away: f' = f·v/(v+v_src) = 1000×340/360 ≈ 944 Hz. The wavefronts are stretched behind the receding source, so observed frequency drops. Closest answer is 941 Hz." },

    // M5
    { type: "int", diff: "medium", pts: 4,
      question: "At what position x (in cm, rounded to the nearest whole number) is kinetic energy equal to potential energy for an oscillator with amplitude A = 0.3 m? (Assume x > 0.)",
      answer: 21,
      hint: "E_k = E_p when ½k(A²−x²) = ½kx², so A²−x² = x², giving x = A/√2 = 0.3/1.414 ≈ 0.212 m = 21.2 cm ≈ 21 cm." },

    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 6 problems · 30 pts" },

    // H1 — corrected: 0.9^n = 0.25 → n ≈ 13.2, so 14 cycles
    { type: "mc", diff: "hard", pts: 5,
      question: "A damped oscillator loses 10% of its energy each cycle. After how many complete cycles has the amplitude decreased to 50% of its initial value? (E ∝ A²)",
      choices: ["6 cycles", "7 cycles", "10 cycles", "14 cycles"],
      correct: 3,
      explain: "If A → 0.5A₀, then E → (0.5)²E₀ = 0.25E₀. Energy after n cycles: E = (0.9)ⁿE₀. Solve 0.9ⁿ = 0.25: n = ln(0.25)/ln(0.9) = −1.386/−0.105 ≈ 13.2. So after 14 complete cycles, amplitude has dropped below 50%." },

    // H2
    { type: "int", diff: "hard", pts: 5,
      question: "A 400 Hz sound wave has wavelength 0.85 m in air. What is its wavelength in centimetres in a medium where sound travels at 1360 m/s?",
      answer: 340,
      hint: "Frequency doesn't change at a boundary. λ_new = v_new/f = 1360/400 = 3.4 m = 340 cm." },

    // H3 — corrected: the answer is False
    { type: "tf", diff: "hard",
      statement: "If you double the mass on a spring and quadruple the spring constant, the period remains unchanged.",
      correct: false,
      explain: "False. T = 2π√(m/k). With m → 2m and k → 4k: T' = 2π√(2m/4k) = 2π√(m/2k) = T/√2. The period decreases by a factor of √2 ≈ 1.41. Doubling mass increases T by √2; quadrupling k decreases T by ½ — the net effect is a shorter period." },

    // H4
    { type: "mc", diff: "hard", pts: 5,
      question: "A rocket travels toward Earth at 0.1c (10% speed of light). It emits radio at 500 MHz. What is the frequency observed on Earth? (Non-relativistic Doppler; c = 3×10⁸ m/s)",
      choices: ["450 MHz", "500 MHz", "545 MHz", "556 MHz"],
      correct: 3,
      explain: "Source approaching: f' = f·c/(c−v_src) = 500×1/(1−0.1) = 500/0.9 ≈ 556 MHz. The wavefronts are compressed in front of the approaching source — higher observed frequency." },

    // H5 — corrected answer: A = 0.28 m
    { type: "int", diff: "hard", pts: 5,
      question: "A 2 kg mass on a spring (k = 80 N/m) oscillates. At position x = 0.15 m, its velocity is 1.5 m/s. What is the amplitude in cm, rounded to the nearest whole number?",
      answer: 28,
      hint: "Energy conservation: ½kA² = ½kx² + ½mv². A² = x² + mv²/k = (0.15)² + 2(1.5)²/80 = 0.0225 + 4.5/80 = 0.0225 + 0.05625 = 0.07875. A = √0.07875 ≈ 0.2806 m ≈ 28 cm." },

    // H6
    { type: "mc", diff: "hard", pts: 5,
      question: "Two identical pendulums — one on Earth (g = 10 m/s²), one on the Moon (g = 1.6 m/s²) — have the same length. What is the ratio T_Moon/T_Earth?",
      choices: ["1.6", "2.5", "6.25", "10"],
      correct: 1,
      explain: "T ∝ 1/√g. Ratio = T_Moon/T_Earth = √(g_Earth/g_Moon) = √(10/1.6) = √6.25 = 2.5. The Moon pendulum swings 2.5× more slowly — useful for measuring local gravity." },
  ],
};

export default function G10SHMPS01() {
  return <ProbsetComposer config={CONFIG} />;
}
