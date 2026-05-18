import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Exam Set<br /><em>Waves &amp; Sound</em>",
    subtitle: "30 problems · Waves · Simple Harmonic Motion · Sound",
    topic: "G10 Waves & Sound",
    examMode: true,
  },
  blocks: [
    // ── EASY (1 dot, 3 pts) ──────────────────────────────────
    { type: "section-header", title: "Easy", subtitle: "Direct application · 3 pts each" },

    { type: "mc", diff: "easy",
      question: "A wave has frequency 50 Hz and wavelength 6 m. What is its wave speed?",
      choices: ["8.3 m/s", "44 m/s", "300 m/s", "3000 m/s"], correct: 2,
      explain: "v = fλ = 50 × 6 = 300 m/s." },

    { type: "tf", diff: "easy",
      statement: "In simple harmonic motion, the acceleration is maximum when the displacement from equilibrium is maximum.",
      correct: true },

    { type: "mc", diff: "easy",
      question: "A tuning fork vibrates at 440 Hz in air (v = 340 m/s). What is the wavelength of the sound it produces?",
      choices: ["0.55 m", "0.77 m", "1.3 m", "150 m"], correct: 1,
      explain: "λ = v/f = 340/440 ≈ 0.77 m." },

    { type: "int", diff: "easy",
      question: "A wave has period 0.025 s. What is its frequency in Hz? (Integer answer)",
      answer: 40,
      hint: "f = 1/T = 1/0.025." },

    { type: "tf", diff: "easy",
      statement: "In simple harmonic motion, velocity is maximum when the object passes through the equilibrium position.",
      correct: true },

    { type: "mc", diff: "easy",
      question: "A string is fixed at both ends and vibrates in its fundamental mode. The string length is 0.8 m. What is the wavelength of the standing wave?",
      choices: ["0.4 m", "0.8 m", "1.6 m", "3.2 m"], correct: 2,
      explain: "For the fundamental mode, one half-wavelength fits in the string: λ₁ = 2L = 2 × 0.8 = 1.6 m." },

    { type: "mc", diff: "easy",
      question: "Which of the following is a longitudinal wave?",
      choices: ["Light wave in vacuum", "Transverse wave on a rope", "Sound wave in air", "Water ripple on a pond"], correct: 2,
      explain: "Sound is longitudinal — air particles oscillate parallel to the direction of propagation." },

    { type: "tf", diff: "easy",
      statement: "The speed of a sound wave in air depends on the frequency of the wave.",
      correct: false },

    { type: "mc", diff: "easy",
      question: "A 0.5 kg mass oscillates on a spring with k = 200 N/m. What is its angular frequency ω?",
      choices: ["10 rad/s", "20 rad/s", "100 rad/s", "400 rad/s"], correct: 1,
      explain: "ω = √(k/m) = √(200/0.5) = √400 = 20 rad/s." },

    { type: "int", diff: "easy",
      question: "A simple pendulum has length 1.0 m. Using g = 10 m/s², what is its period in seconds? (Round to nearest integer)",
      answer: 2,
      hint: "T = 2π√(L/g) = 2π√(1/10) = 2π × 0.316 ≈ 1.99 s ≈ 2 s." },

    // ── MEDIUM (2 dots, 4 pts) ────────────────────────────────
    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 4 pts each" },

    { type: "mc", diff: "medium",
      question: "A speaker emits 100 W of sound power uniformly in all directions. What is the intensity at a distance of 2 m from the speaker?",
      choices: ["1.99 W/m²", "7.96 W/m²", "12.5 W/m²", "25.0 W/m²"], correct: 0,
      explain: "I = P/(4πr²) = 100/(4π × 4) = 100/(16π) ≈ 1.99 W/m²." },

    { type: "int", diff: "medium",
      question: "A 1.2 m string fixed at both ends has waves traveling at 360 m/s. What is the fundamental frequency in Hz?",
      answer: 150,
      hint: "f₁ = v/(2L) = 360/(2 × 1.2) = 360/2.4 = 150 Hz." },

    { type: "mc", diff: "medium",
      question: "If the length of a pendulum is increased by a factor of 4, what happens to its period?",
      choices: ["It doubles.", "It quadruples.", "It is halved.", "It is unchanged."], correct: 0,
      explain: "T = 2π√(L/g). Increasing L by 4 multiplies √L by 2, so T doubles." },

    { type: "tf", diff: "medium",
      statement: "When a sound wave crosses from air into water, its frequency remains the same but its wavelength increases.",
      correct: true },

    { type: "mc", diff: "medium",
      question: "A 0.2 kg mass oscillates on a spring with k = 50 N/m and amplitude A = 0.4 m. What is the total mechanical energy of the system?",
      choices: ["1 J", "2 J", "4 J", "8 J"], correct: 2,
      explain: "E = ½kA² = ½ × 50 × 0.16 = 4 J." },

    { type: "int", diff: "medium",
      question: "Two speakers emit 400 Hz sound (v = 340 m/s). An observer at point P is 3 m from speaker A and 5 m from speaker B. The path difference |dB − dA| = 2 m. How many full wavelengths is this path difference? (Integer answer)",
      answer: 2,
      hint: "λ = v/f = 340/400 = 0.85 m. Δd/λ = 2/0.85 ≈ 2.35 ≈ 2 full wavelengths (closest integer)." },

    { type: "mc", diff: "medium",
      question: "A sound wave at intensity I = 10⁻² W/m² has what sound level in decibels? (I₀ = 10⁻¹² W/m²)",
      choices: ["10 dB", "50 dB", "100 dB", "120 dB"], correct: 2,
      explain: "L = 10 log₁₀(I/I₀) = 10 log₁₀(10⁻²/10⁻¹²) = 10 × 10 = 100 dB." },

    { type: "mc", diff: "medium",
      question: "A mass-spring oscillator has amplitude 20 cm and total energy 10 J. What is the spring constant?",
      choices: ["125 N/m", "250 N/m", "500 N/m", "1000 N/m"], correct: 2,
      explain: "E = ½kA². k = 2E/A² = 2 × 10/(0.2)² = 20/0.04 = 500 N/m." },

    { type: "tf", diff: "medium",
      statement: "For a string fixed at both ends, the second harmonic has a wavelength equal to the length of the string.",
      correct: true },

    { type: "mc", diff: "medium",
      question: "An ambulance siren emits 1000 Hz and approaches a stationary observer at 30 m/s (v_sound = 343 m/s). What is the observed frequency?",
      choices: ["914 Hz", "1000 Hz", "1096 Hz", "1200 Hz"], correct: 2,
      explain: "f' = f · v/(v − v_src) = 1000 × 343/(343 − 30) = 1000 × 343/313 ≈ 1096 Hz." },

    { type: "mc", diff: "medium",
      question: "A mass oscillating in SHM has k = 80 N/m and is at position x = 0.15 m with velocity v = 0 m/s. The mass is 2 kg. What is the maximum kinetic energy the mass can have?",
      choices: ["0.45 J", "0.90 J", "1.80 J", "3.60 J"], correct: 1,
      explain: "At maximum velocity (x = 0), all energy is kinetic: E = ½kA² = ½ × 80 × 0.15² = ½ × 80 × 0.0225 = 0.90 J." },

    // ── HARD (3 dots, 5 pts) ──────────────────────────────────
    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 5 pts each" },

    { type: "mc", diff: "hard",
      question: "A standing wave has 3 nodes on a string of length 1.5 m fixed at both ends (counting both endpoint nodes). What harmonic is this, and what is the wavelength?",
      choices: ["2nd harmonic, λ = 1.5 m", "3rd harmonic, λ = 1.0 m", "2nd harmonic, λ = 0.75 m", "4th harmonic, λ = 0.5 m"], correct: 0,
      explain: "3 nodes (including both endpoints) means 2 antinodes — this is the 2nd harmonic. λ₂ = 2L/n = 2 × 1.5/2 = 1.5 m." },

    { type: "int", diff: "hard",
      question: "A 2 m string fixed at both ends has a fundamental frequency of 110 Hz. The tension is then increased by a factor of 4. What is the new fundamental frequency in Hz?",
      answer: 220,
      hint: "f ∝ √T. Quadrupling T doubles f: f_new = 2 × 110 = 220 Hz." },

    { type: "mc", diff: "hard",
      question: "A 2 kg mass on a spring (k = 80 N/m) undergoes SHM. At x = 0.15 m its speed is 1.5 m/s. What is the amplitude?",
      choices: ["0.22 m", "0.25 m", "0.28 m", "0.30 m"], correct: 2,
      explain: "Energy: ½kA² = ½kx² + ½mv². A² = x² + mv²/k = 0.0225 + 2(2.25)/80 = 0.0225 + 0.05625 = 0.07875. A ≈ 0.28 m." },

    { type: "tf", diff: "hard",
      statement: "If the mass on a spring is doubled and the spring constant is quadrupled, the period of oscillation decreases by a factor of √2.",
      correct: true },

    { type: "mc", diff: "hard",
      question: "Two identical waves each with amplitude 0.03 m interfere. Wave 1 arrives with a path difference of exactly half a wavelength relative to Wave 2. What is the amplitude of the resultant wave?",
      choices: ["0 m", "0.03 m", "0.06 m", "0.09 m"], correct: 0,
      explain: "A path difference of λ/2 means the waves are exactly 180° out of phase — perfectly destructive interference. A_total = |A₁ − A₂| = |0.03 − 0.03| = 0 m." },

    { type: "mc", diff: "hard",
      question: "Two coherent speakers emit at 256 Hz (v = 320 m/s). Speaker A is at origin; speaker B is at (0, 3 m). A detector at (4 m, 0) detects both waves. Which best describes the interference?",
      choices: ["Constructive, path diff = 1.0λ", "Destructive, path diff = 0.5λ", "Partial, path diff = 0.8λ", "Destructive, path diff = 1.5λ"], correct: 2,
      explain: "λ = 320/256 = 1.25 m. dA = 4 m, dB = √(16 + 9) = 5 m. Δd = 1 m. Δd/λ = 1/1.25 = 0.8. This is neither an integer multiple (constructive) nor a half-integer multiple (destructive) — it is partial interference with path difference 0.8λ." },

    { type: "int", diff: "hard",
      question: "A circular wave from a point source has amplitude 0.05 m at r = 2 m. At what distance r (in m) is the amplitude 0.01 m? (Integer answer)",
      answer: 10,
      hint: "For spherical waves, A ∝ 1/r. If A drops by factor 5 (0.05→0.01), r increases by factor 5: r = 2 × 5 = 10 m." },

    { type: "mc", diff: "hard",
      question: "A guitar string of length 0.65 m and mass 3.2 g is tuned to fundamental frequency 330 Hz. What is the tension in the string?",
      choices: ["100 N", "427 N", "905 N", "1810 N"], correct: 2,
      explain: "μ = m/L = 3.2×10⁻³/0.65 = 4.92×10⁻³ kg/m. v = 2Lf₁ = 2×0.65×330 = 429 m/s. T = μv² = 4.92×10⁻³×429² ≈ 905 N." },
  ],
};

export default function G10WavesSoundExamSet() {
  return <ProbsetComposer config={CONFIG} />;
}
