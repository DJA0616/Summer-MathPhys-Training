import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Waves Quiz",
    subtitle: "Timed Assessment · 10 Questions · 15 Minutes",
    topic: "G10 Introduction to Waves — Quiz 01",
    examMode: true,
    quizMode: true,
    timerDuration: 15 * 60,
    timerPhaseThresholds: [600, 300, 60],
  },
  blocks: [
    // Q1 — Easy (E6): fundamental wavelength on a string
    { type: "int", diff: "easy", pts: 3,
      question: "A string of length 1.5 m is fixed at both ends and vibrates in its fundamental mode. What is the wavelength in metres?",
      answer: 3,
      hint: "For the fundamental, exactly one half-wavelength fits: L = λ/2, so λ = 2L = 2 × 1.5 = 3 m." },

    // Q2 — Easy (E7): inverse-square intensity from a point source
    { type: "mc", diff: "easy", pts: 3,
      question: "A speaker emits 50 W of sound power uniformly in all directions. What is the intensity at 1 m from the speaker?",
      choices: ["4.0 W/m²", "15.9 W/m²", "50 W/m²", "25.0 W/m²"],
      correct: 0,
      explain: "I = P/(4πr²) = 50/(4π × 1²) = 50/12.57 ≈ 3.98 W/m² ≈ 4.0 W/m². The factor of 4π comes from the surface area of a sphere of radius 1 m." },

    // Q3 — Easy (reworded wave-speed concept): period from wave speed
    { type: "mc", diff: "easy", pts: 3,
      question: "A water wave has speed 12 m/s and wavelength 3 m. What is its period?",
      choices: ["0.1 s", "0.25 s", "4 s", "36 s"],
      correct: 1,
      explain: "T = λ/v = 3/12 = 0.25 s. Equivalently, f = v/λ = 4 Hz and T = 1/f = 0.25 s." },

    // Q4 — Medium (M2): two-speaker interference
    { type: "mc", diff: "medium", pts: 4,
      question: "Two speakers 4 m apart emit waves at 200 Hz. Point P is 3 m from speaker A and 5 m from speaker B. Speed of sound = 340 m/s. Is the interference at P constructive or destructive?",
      choices: [
        "Destructive — path difference = 0.5λ",
        "Approximately constructive — path difference ≈ λ",
        "Perfectly constructive — path difference = 2λ",
        "Neither — the waves cancel exactly"
      ],
      correct: 1,
      explain: "λ = v/f = 340/200 = 1.7 m. Path difference: Δd = 5 − 3 = 2 m. Δd/λ = 2/1.7 ≈ 1.18, closest to integer 1 → approximately constructive interference." },

    // Q5 — Medium (M7): nodes and wavelength on a string
    { type: "mc", diff: "medium", pts: 4,
      question: "A string of length 1 m is fixed at both ends. The first antinode is observed at 0.25 m from one end. What harmonic is vibrating?",
      choices: ["Fundamental (n = 1)", "Second harmonic (n = 2)", "Third harmonic (n = 3)", "Fourth harmonic (n = 4)"],
      correct: 1,
      explain: "For the second harmonic (n = 2), antinodes appear at L/4 and 3L/4. With L = 1 m, the first antinode is at 0.25 m, which matches n = 2. The fundamental would place the antinode at L/2 = 0.5 m." },

    // Q6 — Medium (reworded): phase difference calculation
    { type: "mc", diff: "medium", pts: 4,
      question: "Two coherent sources emit at 256 Hz (speed 320 m/s). Source A is at the origin; source B is at (0, 3 m). A detector is at (4 m, 0). What is the phase difference Δφ at the detector?",
      choices: ["0.8π rad", "1.6π rad", "2π rad", "3.2π rad"],
      correct: 1,
      explain: "λ = v/f = 320/256 = 1.25 m. d_A = 4 m; d_B = √(4² + 3²) = 5 m. Δd = 5 − 4 = 1 m. Δφ = 2π(Δd/λ) = 2π(1/1.25) = 2π × 0.8 = 1.6π rad. Since 1.6π ≈ 1.5π (3λ/4), the waves are near destructive." },

    // Q7 — Hard (H4 core result reframed as MC)
    { type: "mc", diff: "hard", pts: 5,
      question: "At a detector, two coherent sound waves arrive with a path difference of 1 m. Wavelength = 1.25 m. Which best describes the interference?",
      choices: [
        "Constructive — path diff is an integer multiple of λ",
        "Destructive — path diff is an odd multiple of λ/2",
        "Neither — path diff is 0.8λ, between integer and half-integer",
        "Constructive — path diff is less than λ"
      ],
      correct: 2,
      explain: "Δd/λ = 1/1.25 = 0.8. Constructive requires Δd = nλ (0, 1, 2, …); destructive requires Δd = (n + ½)λ (0.5λ, 1.5λ, …). Since 0.8λ is neither, the waves partially reinforce — the resultant amplitude is between |A₁ − A₂| and A₁ + A₂." },

    // Q8 — Hard (H6): standing wave intensity at antinode
    { type: "mc", diff: "hard", pts: 5,
      question: "A travelling wave has amplitude 0.1 m, frequency 50 Hz, speed 10 m/s, and the medium has density 2 kg/m³. When this wave reflects and forms a standing wave, what is the amplitude at an antinode?",
      choices: ["0.05 m", "0.1 m", "0.2 m", "0.4 m"],
      correct: 2,
      explain: "At an antinode, the incident and reflected waves add constructively: A_antinode = 2A_single = 2 × 0.1 = 0.2 m. Nodes have zero amplitude; antinodes have twice the travelling-wave amplitude." },

    // Q9 — Hard (reworded H1): string with tension change, find frequency ratio
    { type: "mc", diff: "hard", pts: 5,
      question: "A string vibrates at fundamental frequency f₀. Its tension is reduced to one-quarter of its original value while all other properties stay the same. What is the new fundamental frequency?",
      choices: ["f₀/4", "f₀/2", "f₀", "2f₀"],
      correct: 1,
      explain: "Wave speed v = √(T/μ), so v ∝ √T. Halving speed (T → T/4 means v → v/2) halves the frequency: f_new = v_new/(2L) = (v/2)/(2L) = f₀/2." },

    // Q10 — Hard (reworded H7): inverse-square amplitude drop
    { type: "int", diff: "hard", pts: 5,
      question: "A point source emits a spherical wave. At 5 m from the source, the amplitude is 0.06 m. At what distance (in metres) is the amplitude 0.02 m?",
      answer: 15,
      hint: "Amplitude of a spherical wave falls as A ∝ 1/r. For A to drop by factor 3 (0.06 → 0.02), distance must triple: r = 5 × 3 = 15 m." },
  ],
};

export default function G10WavesQuiz01() {
  return <ProbsetComposer config={CONFIG} />;
}
