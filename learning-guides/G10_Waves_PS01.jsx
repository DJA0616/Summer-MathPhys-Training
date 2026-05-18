import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Introduction to Waves",
    subtitle: "Wave properties · Superposition · Standing waves · 15 problems",
    topic: "G10 Introduction to Waves — Problem Set 01",
  },
  blocks: [
    { type: "section-header", title: "Easy", subtitle: "Direct formula application · 5 problems · 15 pts" },

    { type: "int", diff: "easy", pts: 3,
      question: "A wave has frequency 50 Hz and wavelength 6 m. What is its speed in m/s?",
      answer: 300,
      hint: "v = fλ = 50 × 6 = 300 m/s." },

    { type: "int", diff: "easy", pts: 3,
      question: "The period of a wave is 0.02 s. What is its frequency in Hz?",
      answer: 50,
      hint: "f = 1/T = 1/0.02 = 50 Hz." },

    { type: "mc", diff: "easy", pts: 3,
      question: "A sound wave travels at 340 m/s with a frequency of 1000 Hz. What is its wavelength?",
      choices: ["0.034 m", "0.34 m", "3.4 m", "34 m"],
      correct: 1,
      explain: "λ = v/f = 340/1000 = 0.34 m. Wavelength is inversely proportional to frequency — higher frequency means more oscillations per metre, so a shorter wavelength." },

    { type: "tf", diff: "easy", pts: 3,
      statement: "The speed of a sound wave in air depends on its frequency.",
      correct: false,
      explain: "Wave speed depends only on the medium (temperature, density, elasticity), not on frequency. Frequency is set by the source; speed is set by the medium." },

    { type: "mc", diff: "easy", pts: 3,
      question: "A string has a fundamental frequency of 200 Hz. What is the frequency of its second harmonic?",
      choices: ["100 Hz", "200 Hz", "400 Hz", "600 Hz"],
      correct: 2,
      explain: "The nth harmonic has frequency fn = n·f₁. For n = 2: f₂ = 2 × 200 = 400 Hz. Each harmonic is an integer multiple of the fundamental." },

    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 5 problems · 20 pts" },

    { type: "mc", diff: "medium", pts: 4,
      question: "A wave on a string is described by y(x, t) = 0.03 sin(2π(x/0.4 − t/0.1)) in SI units. What is the wave speed?",
      choices: ["0.4 m/s", "0.1 m/s", "4 m/s", "40 m/s"],
      correct: 2,
      explain: "Reading the wave function y = A sin(2π(x/λ − t/T)): amplitude A = 0.03 m, wavelength λ = 0.4 m, period T = 0.1 s. Speed: v = λ/T = 0.4/0.1 = 4 m/s." },

    { type: "int", diff: "medium", pts: 4,
      question: "A string of length 0.8 m and mass 160 g vibrates at its third harmonic with frequency 300 Hz. Find the tension in the string in newtons.",
      answer: 5120,
      hint: "Third harmonic: f₃ = 3v/(2L) → v = 2Lf₃/3 = (2 × 0.8 × 300)/3 = 160 m/s. Linear density: μ = m/L = 0.16/0.8 = 0.2 kg/m. Tension: T = μv² = 0.2 × 160² = 5120 N. (Research bundle answer 768 N — use physics-consistent value 5120 N for this problem as written.)" },

    { type: "mc", diff: "medium", pts: 4,
      question: "The intensity of a sound wave with amplitude 0.02 m, frequency 100 Hz, speed 343 m/s, and air density 1.2 kg/m³ is most nearly:",
      choices: ["1.06 W/m²", "10.6 W/m²", "106 W/m²", "1060 W/m²"],
      correct: 0,
      explain: "I = 2π²ρvf²A² = 2π²(1.2)(343)(100²)(0.02²). Compute: 2π² ≈ 19.74; 19.74 × 1.2 × 343 × 10000 × 0.0004 ≈ 19.74 × 1643 ≈ 1.06 W/m². Intensity grows with the square of both amplitude and frequency." },

    { type: "mc", diff: "medium", pts: 4,
      question: "A wave travels from medium 1 (speed 1500 m/s, wavelength 0.3 m) into medium 2 (speed 1000 m/s). What is the new wavelength in medium 2?",
      choices: ["0.1 m", "0.15 m", "0.2 m", "0.45 m"],
      correct: 2,
      explain: "Frequency is constant across the boundary (set by the source): f = v₁/λ₁ = 1500/0.3 = 5000 Hz. In medium 2: λ₂ = v₂/f = 1000/5000 = 0.2 m. When a wave slows down, its wavelength shortens proportionally: λ₂/λ₁ = v₂/v₁." },

    { type: "mc", diff: "medium", pts: 4,
      question: "Two identical waves of amplitude 0.04 m interfere constructively. What is the amplitude of the resultant wave?",
      choices: ["0.02 m", "0.04 m", "0.06 m", "0.08 m"],
      correct: 3,
      explain: "Constructive interference (waves exactly in phase): A_total = A₁ + A₂ = 0.04 + 0.04 = 0.08 m. The displacements add algebraically — crests align with crests, doubling the amplitude." },

    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 5 problems · 25 pts" },

    { type: "mc", diff: "hard", pts: 5,
      question: "A 2 m string fixed at both ends has a fundamental frequency of 110 Hz. The tension is then increased by a factor of 4. What is the new fundamental frequency?",
      choices: ["55 Hz", "110 Hz", "220 Hz", "440 Hz"],
      correct: 2,
      explain: "Wave speed on a string: v = √(T/μ). Quadrupling tension doubles speed (v ∝ √T). Since f₁ = v/(2L) and L is unchanged, frequency also doubles: f_new = 2 × 110 = 220 Hz." },

    { type: "mc", diff: "hard", pts: 5,
      question: "A standing wave on a 1.5 m string has three nodes including both ends. Which harmonic is this, and what is the wavelength?",
      choices: ["1st harmonic, λ = 3 m", "2nd harmonic, λ = 1.5 m", "3rd harmonic, λ = 1 m", "4th harmonic, λ = 0.75 m"],
      correct: 1,
      explain: "Three nodes (both ends plus one in the middle) means two antinodes — one full wavelength fits between the fixed ends: n = 2 (second harmonic). Wavelength: λ₂ = 2L/n = 2(1.5)/2 = 1.5 m." },

    { type: "int", diff: "hard", pts: 5,
      question: "A metal rod 0.5 m long vibrates longitudinally at its fundamental frequency. The speed of sound in the rod is 5000 m/s. What is the fundamental frequency in Hz?",
      answer: 5000,
      hint: "For a rod with free ends at both ends, the fundamental mode has one antinode at each end and a node at the centre: L = λ/2, so λ = 2L = 1 m. f = v/λ = 5000/1 = 5000 Hz." },

    { type: "int", diff: "hard", pts: 5,
      question: "A circular wave from a point source has amplitude 0.05 m at a distance of 2 m. At what distance (in metres) does the amplitude drop to 0.01 m?",
      answer: 10,
      hint: "For a spherical (3D) wave, amplitude falls as A ∝ 1/r. If A drops by a factor of 5 (from 0.05 to 0.01), distance increases by factor 5: r = 2 × 5 = 10 m." },

    { type: "mc", diff: "hard", pts: 5,
      question: "Two speakers 4 m apart emit at 200 Hz. Point P is 3 m from speaker A and 5 m from speaker B. Speed of sound = 340 m/s. What type of interference occurs at P?",
      choices: [
        "Perfectly destructive (path diff = 0.5λ)",
        "Approximately constructive (path diff ≈ λ)",
        "Perfectly constructive (path diff = 2λ)",
        "Approximately destructive (path diff ≈ 1.5λ)"
      ],
      correct: 1,
      explain: "λ = v/f = 340/200 = 1.7 m. Path difference: Δd = |5 − 3| = 2 m. Δd/λ = 2/1.7 ≈ 1.18. This is close to 1λ (nearest integer), so the waves are approximately in phase → approximately constructive interference." },
  ],
};

export default function G10WavesPS01() {
  return <ProbsetComposer config={CONFIG} />;
}
