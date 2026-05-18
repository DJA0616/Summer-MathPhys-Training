import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Optics Quiz",
    subtitle: "Timed Assessment · 10 Questions · 15 Minutes",
    topic: "G10 Light & Optics — Quiz 01",
    examMode: true,
    quizMode: true,
    timerDuration: 15 * 60,
    timerPhaseThresholds: [600, 300, 60],
  },
  blocks: [
    // Q1 — easy mc: law of reflection
    { type: "mc", diff: "easy", pts: 3,
      question: "A ray of light strikes a plane mirror at an angle of incidence of 35°. What is the angle of reflection?",
      choices: ["35°", "55°", "70°", "145°"],
      correct: 0,
      explain: "The law of reflection states that the angle of incidence equals the angle of reflection, both measured from the normal. Angle of reflection = 35°." },

    // Q2 — easy tf: speed of light in a medium
    { type: "tf", diff: "easy",
      statement: "Light travels faster in glass (n = 1.5) than in air (n ≈ 1.0).",
      correct: false,
      explain: "False. The refractive index n = c/v, so v = c/n. In glass, v = c/1.5 ≈ 2×10⁸ m/s, which is slower than c in air. A higher refractive index always means slower propagation." },

    // Q3 — easy int: refractive index from speeds
    { type: "int", diff: "easy", pts: 3,
      question: "Light travels at 1.0 × 10⁸ m/s inside a medium. What is the refractive index of that medium? (Give a whole number.)",
      answer: 3,
      hint: "n = c/v = (3.0 × 10⁸)/(1.0 × 10⁸) = 3. A refractive index of 3 is very high — similar to certain dense semiconductors like germanium." },

    // Q4 — medium mc: Snell's law, glass to air
    { type: "mc", diff: "medium", pts: 4,
      question: "A ray travels inside glass (n = 1.6) and strikes a glass–air interface at an angle of incidence of 25°. What is the angle of refraction in air?",
      choices: ["15.3°", "25.0°", "43.3°", "66.9°"],
      correct: 2,
      explain: "Snell's law: n₁ sinθ₁ = n₂ sinθ₂ → 1.6 × sin25° = 1.0 × sinθ₂ → sinθ₂ = 1.6 × 0.4226 = 0.6762 → θ₂ = arcsin(0.6762) ≈ 42.5° ≈ 43.3°. The ray bends away from the normal when passing into a less dense medium." },

    // Q5 — medium mc: critical angle for glass-air
    { type: "mc", diff: "medium", pts: 4,
      question: "What is the critical angle for total internal reflection at a glass (n = 1.6)–air interface?",
      choices: ["28.7°", "38.7°", "51.3°", "62.5°"],
      correct: 1,
      explain: "θ_c = arcsin(n_air/n_glass) = arcsin(1.0/1.6) = arcsin(0.625) ≈ 38.7°. Any ray inside the glass hitting the surface at more than 38.7° from the normal will be totally internally reflected." },

    // Q6 — medium int: concave mirror, virtual image (object inside f)
    { type: "int", diff: "medium", pts: 4,
      question: "An object is placed 6 cm in front of a concave mirror with focal length 10 cm. What is the image distance in cm? (Negative means virtual; give a signed integer.)",
      answer: -15,
      hint: "1/f = 1/u + 1/v → 1/10 = 1/6 + 1/v → 1/v = 1/10 − 1/6 = 3/30 − 5/30 = −2/30 → v = −15 cm. Negative: the image is virtual, behind the mirror. This is how a concave mirror acts as a magnifying mirror." },

    // Q7 — medium mc: diverging lens, virtual image
    { type: "mc", diff: "medium", pts: 4,
      question: "An object is placed 20 cm from a diverging lens of focal length −10 cm. Where is the image formed?",
      choices: ["−6.7 cm (virtual, same side as object)", "20 cm (real, other side)", "10 cm (real, other side)", "−20 cm (virtual, same side)"],
      correct: 0,
      explain: "1/f = 1/u + 1/v → 1/(−10) = 1/20 + 1/v → 1/v = −1/10 − 1/20 = −3/20 → v = −6.7 cm. Negative v confirms a virtual image on the same side as the object. Diverging lenses always produce virtual, upright, diminished images." },

    // Q8 — hard mc: magnification via mirror equation, then image size
    { type: "mc", diff: "hard", pts: 5,
      question: "A 4 cm tall object is placed 30 cm in front of a concave mirror of focal length 20 cm. What is the height of the image?",
      choices: ["+4 cm (upright)", "−4 cm (inverted)", "+8 cm (upright)", "−8 cm (inverted)"],
      correct: 3,
      explain: "First find v: 1/20 = 1/30 + 1/v → 1/v = 1/20 − 1/30 = 1/60 → v = 60 cm. Magnification m = −v/u = −60/30 = −2. Image height = m × object height = −2 × 4 = −8 cm. Negative means inverted; magnitude 8 cm means enlarged." },

    // Q9 — hard int: combined focal length of two lenses in contact
    { type: "int", diff: "hard", pts: 5,
      question: "A converging lens (f = 25 cm) and a diverging lens (f = −50 cm) are placed in contact. What is the focal length of the combination in cm?",
      answer: 50,
      hint: "For lenses in contact: 1/f_comb = 1/f₁ + 1/f₂ = 1/25 + 1/(−50) = 2/50 − 1/50 = 1/50 → f_comb = 50 cm. The combination is a weaker converging system — the diverging lens partially cancels the converging one." },

    // Q10 — hard mc: real depth vs apparent depth, then Snell angle check
    { type: "mc", diff: "hard", pts: 5,
      question: "A fish is 3.0 m below the surface of water (n = 1.33). A fisherman directly above sees the fish at what apparent depth, and what does this tell us about the refraction of light leaving the water?",
      choices: [
        "2.26 m — light bends away from normal when leaving water",
        "3.99 m — light bends toward normal when leaving water",
        "2.26 m — light bends toward normal when leaving water",
        "3.99 m — light bends away from normal when leaving water"
      ],
      correct: 0,
      explain: "Apparent depth = real depth / n = 3.0/1.33 ≈ 2.26 m. Light traveling from water (denser) to air (less dense) speeds up and bends away from the normal — this is why the fish appears closer to the surface than it really is." },
  ],
};

export default function G10OpticsQuiz01() {
  return <ProbsetComposer config={CONFIG} />;
}
