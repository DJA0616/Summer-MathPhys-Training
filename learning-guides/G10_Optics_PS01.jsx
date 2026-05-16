import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Optics",
    subtitle: "Reflection · Refraction · Mirrors · Lenses",
    topic: "G10 Optics — Problem Set 01",
  },
  blocks: [
    { type: "section-header", title: "Easy", subtitle: "Direct formula application · 5 problems · 15 pts" },

    { type: "mc", diff: "easy", pts: 3,
      question: "Light travels from diamond (n = 2.42) into air (n = 1.00). What is the critical angle for total internal reflection?",
      choices: ["24.4°", "30.0°", "41.1°", "48.8°"],
      correct: 0,
      explain: "θ_c = arcsin(n₂/n₁) = arcsin(1.00/2.42) = arcsin(0.413) ≈ 24.4°. Diamond's high refractive index gives it a small critical angle — light traps easily, producing brilliance." },

    { type: "mc", diff: "easy", pts: 3,
      question: "A laser beam in air strikes a water surface (n = 1.33) at an incident angle of 45°. What is the angle of refraction in the water?",
      choices: ["32.1°", "45.0°", "57.9°", "62.3°"],
      correct: 0,
      explain: "Snell's law: n₁sinθ₁ = n₂sinθ₂ → 1.00·sin45° = 1.33·sinθ₂ → sinθ₂ = 0.7071/1.33 ≈ 0.5317 → θ₂ ≈ 32.1°. Going from air to water, the ray bends toward the normal." },

    { type: "int", diff: "easy", pts: 3,
      question: "An object is placed 20 cm in front of a concave mirror with focal length 8 cm. Calculate the image distance in cm, rounded to the nearest integer.",
      answer: 13,
      hint: "Mirror equation: 1/f = 1/u + 1/v → 1/8 = 1/20 + 1/v → 1/v = 1/8 − 1/20 = 5/40 − 2/40 = 3/40 → v = 40/3 ≈ 13.3 cm." },

    { type: "mc", diff: "easy", pts: 3,
      question: "A biconvex lens has equal curvature radii of 40 cm and refractive index 1.5. What is its focal length?",
      choices: ["20 cm", "30 cm", "40 cm", "60 cm"],
      correct: 2,
      explain: "Lens maker's formula: 1/f = (n−1)(1/R₁ − 1/R₂) = (0.5)(1/40 − (−1/40)) = 0.5·(2/40) = 1/40. So f = 40 cm." },

    { type: "int", diff: "easy", pts: 3,
      question: "An object 5 cm tall is placed 12 cm from a converging lens of focal length 8 cm. What is the magnitude of the image height in cm?",
      answer: 10,
      hint: "First find v: 1/f = 1/u + 1/v → 1/8 = 1/12 + 1/v → v = 24 cm. Magnification m = −v/u = −2. |h_i| = |m| × h_o = 2 × 5 = 10 cm." },

    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 7 problems · 28 pts" },

    { type: "mc", diff: "medium", pts: 4,
      question: "A coin sits at the bottom of a swimming pool filled with water (n = 1.33) to a depth of 2.0 m. When viewed from directly above, what is the apparent depth of the coin?",
      choices: ["1.0 m", "1.5 m", "2.0 m", "2.7 m"],
      correct: 1,
      explain: "Apparent depth = real depth / n = 2.0 m / 1.33 ≈ 1.5 m. Objects underwater always appear shallower than they are — this is why pools look shallower than their actual depth." },

    { type: "mc", diff: "medium", pts: 4,
      question: "Light travels from glass (n = 1.5) into water (n = 1.33). What is the minimum angle of incidence in glass for total internal reflection to occur?",
      choices: ["TIR cannot occur — n_glass < n_water", "41.0°", "62.5°", "78.8°"],
      correct: 2,
      explain: "TIR requires light traveling from higher to lower n. Here n_glass (1.5) > n_water (1.33), so TIR is possible. θ_c = arcsin(n_water/n_glass) = arcsin(1.33/1.5) = arcsin(0.887) ≈ 62.5°." },

    { type: "int", diff: "medium", pts: 4,
      question: "Two converging lenses with focal lengths f₁ = 10 cm and f₂ = 15 cm are placed 25 cm apart. An object is placed 30 cm from the first lens. What is the magnitude of the final image distance from the second lens in cm?",
      answer: 30,
      hint: "Lens 1: 1/10 = 1/30 + 1/v₁ → v₁ = 15 cm (real, 15 cm right of lens 1). Object for lens 2: u₂ = 25 − 15 = 10 cm. Lens 2: 1/15 = 1/10 + 1/v₂ → v₂ = −30 cm. Magnitude = 30 cm." },

    { type: "mc", diff: "medium", pts: 4,
      question: "An optical fiber has a core refractive index of 1.48 and cladding refractive index of 1.46. What is the critical angle for total internal reflection at the core-cladding interface?",
      choices: ["80.6°", "82.1°", "84.8°", "86.2°"],
      correct: 0,
      explain: "θ_c = arcsin(n_cladding/n_core) = arcsin(1.46/1.48) = arcsin(0.9865) ≈ 80.6°. Fiber optics work because the critical angle is very close to 90° — light stays trapped in the core even at shallow bends." },

    { type: "int", diff: "medium", pts: 4,
      question: "Two thin lenses of powers +5 D and −3 D are placed in contact. What is the focal length of the combination in cm?",
      answer: 50,
      hint: "Total power P = P₁ + P₂ = 5 + (−3) = 2 D. Focal length f = 1/P = 1/2 = 0.5 m = 50 cm. A converging and diverging lens in contact partially cancel." },

    { type: "mc", diff: "medium", pts: 4,
      question: "An object produces an image that is twice its size and inverted when placed in front of a concave mirror. If the focal length of the mirror is 12 cm, what is the object distance?",
      choices: ["18 cm", "24 cm", "36 cm", "48 cm"],
      correct: 0,
      explain: "m = −2 (inverted, twice size). m = −v/u → −2 = −v/u → v = 2u. Mirror equation: 1/12 = 1/u + 1/(2u) = 3/(2u) → 2u = 36 → u = 18 cm. The object is between f and 2f — the standard position for magnified real images." },

    { type: "mc", diff: "medium", pts: 4,
      question: "A concave mirror has radius of curvature 40 cm. Where should an object be placed to produce an image at infinity?",
      choices: ["At the center of curvature (40 cm)", "At the focal point (20 cm)", "At infinity", "At 10 cm"],
      correct: 1,
      explain: "For a concave mirror, f = R/2 = 20 cm. When the object is at the focal point (u = f), the reflected rays emerge parallel, producing an image at infinity. This is the principle behind searchlights and satellite dishes." },

    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 3 problems · 15 pts" },

    { type: "mc", diff: "hard", pts: 5,
      question: "A ray of light travels from medium A (n = 1.5) into medium B (n = 2.0) and then into air (n = 1.0). If the angle of incidence in medium A is 30°, what is the angle of refraction in air?",
      choices: ["35.3°", "41.8°", "48.6°", "56.4°"],
      correct: 2,
      explain: "Step 1 (A→B): 1.5·sin30° = 2.0·sinθ_B → sinθ_B = 0.75/2.0 = 0.375 → θ_B ≈ 22.0°. Step 2 (B→air): 2.0·sin22.0° = 1.0·sinθ_air → sinθ_air = 2.0·0.3746 ≈ 0.7492 → θ_air ≈ 48.6°. Note: you can skip the middle step — n_A·sinθ_A = n_air·sinθ_air directly, which is a powerful shortcut in multi-layer problems." },

    { type: "mc", diff: "hard", pts: 5,
      question: "A plano-convex lens (flat on one side, curved with radius 20 cm on the other) is made of glass with n = 1.6. What is its focal length in air?",
      choices: ["20 cm", "25 cm", "33 cm", "50 cm"],
      correct: 2,
      explain: "Lens maker's formula with R₁ = ∞ (flat), R₂ = −20 cm (convex toward outgoing side): 1/f = (n−1)(1/∞ − 1/(−20)) = 0.6/20 = 0.03 → f ≈ 33.3 cm. Same result regardless of which face light enters — the lens maker's formula is symmetric." },

    { type: "mc", diff: "hard", pts: 5,
      question: "An object is 10 cm from a convex mirror of focal length −15 cm. What is the nature of the image?",
      choices: ["Real, inverted, 6 cm behind mirror", "Virtual, upright, 6 cm behind mirror", "Virtual, upright, 30 cm behind mirror", "Real, inverted, 30 cm in front"],
      correct: 1,
      explain: "1/(−15) = 1/10 + 1/v → 1/v = −1/15 − 1/10 = −5/30 → v = −6 cm. Negative v = virtual image 6 cm behind mirror. m = −v/u = −(−6)/10 = 0.6 → upright, diminished. Convex mirrors always give virtual, upright, diminished images — hence their use for wide-angle safety and security views." },
  ],
};

export default function G10OpticsPS01() {
  return <ProbsetComposer config={CONFIG} />;
}
