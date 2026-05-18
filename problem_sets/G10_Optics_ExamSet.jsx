import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: {
    title: "Exam Set<br /><em>Optics</em>",
    subtitle: "30 problems · Reflection · Refraction · Mirrors · Lenses",
    topic: "G10 Optics",
    examMode: true,
  },
  blocks: [
    // ── EASY (1 dot, 3 pts) ──────────────────────────────
    { type: "section-header", title: "Easy", subtitle: "Direct application · 3 pts each" },

    { type: "tf", diff: "easy",
      statement: "When light travels from air into glass, it bends toward the normal because glass has a higher refractive index than air.",
      correct: true,
      explain: "A higher refractive index means lower wave speed. Snell's law n₁sinθ₁ = n₂sinθ₂ requires sinθ₂ < sinθ₁ when n₂ > n₁, so the refracted ray bends toward the normal." },

    { type: "mc", diff: "easy",
      question: "The law of reflection states that the angle of incidence equals the angle of reflection. Both angles are measured from:",
      choices: ["The reflecting surface", "The normal to the surface", "The horizontal", "The vertical"],
      correct: 1,
      explain: "Angles in optics are always measured from the normal (a line perpendicular to the surface at the point of incidence), not from the surface itself." },

    { type: "mc", diff: "easy",
      question: "Which of the following has the highest refractive index?",
      choices: ["Air (n ≈ 1.00)", "Water (n ≈ 1.33)", "Crown glass (n ≈ 1.52)", "Diamond (n ≈ 2.42)"],
      correct: 3,
      explain: "Diamond's n = 2.42 is the highest listed. A larger n means light slows down more inside that medium." },

    { type: "tf", diff: "easy",
      statement: "Total internal reflection can occur when light travels from water into glass, since glass has a higher refractive index than water.",
      correct: false,
      explain: "TIR only occurs when light travels from a medium of higher n into one of lower n. Water (1.33) → glass (1.52) is going from lower to higher n, so TIR cannot occur." },

    { type: "mc", diff: "easy",
      question: "A plane mirror forms an image that is:",
      choices: ["Real, inverted, and the same size as the object", "Virtual, upright, and the same size as the object", "Real, upright, and magnified", "Virtual, inverted, and diminished"],
      correct: 1,
      explain: "A plane mirror always forms a virtual (behind the mirror), upright, and same-size image. The image distance behind the mirror equals the object distance in front." },

    { type: "int", diff: "easy",
      question: "A ray of light in air hits a glass surface at an angle of incidence of 60°. If the glass has refractive index 1.73, what is the angle of refraction in degrees? (Round to nearest integer; sin⁻¹(0.500) = 30°)",
      answer: 30,
      hint: "Snell's law: n₁ sinθ₁ = n₂ sinθ₂ → 1.00 × sin60° = 1.73 × sinθ₂ → sinθ₂ = (√3/2)/1.73 = 0.866/1.73 ≈ 0.500 → θ₂ = 30°." },

    { type: "mc", diff: "easy",
      question: "A concave mirror has a radius of curvature of 30 cm. What is its focal length?",
      choices: ["7.5 cm", "10 cm", "15 cm", "30 cm"],
      correct: 2,
      explain: "For a spherical mirror, f = R/2 = 30/2 = 15 cm. The focal point is halfway between the mirror surface and the center of curvature." },

    { type: "tf", diff: "easy",
      statement: "A convex mirror can produce a real image of a real object.",
      correct: false,
      explain: "A convex mirror has a negative focal length and always forms virtual, upright, diminished images for any real object. Real images require converging reflected rays, which a convex mirror cannot produce." },

    { type: "mc", diff: "easy",
      question: "When light passes from air (n = 1.00) into water (n = 1.33) at normal incidence (θᵢ = 0°), the angle of refraction is:",
      choices: ["0°", "32°", "48°", "90°"],
      correct: 0,
      explain: "At normal incidence (θᵢ = 0°), Snell's law gives n₁ × 0 = n₂ × sinθ₂, so sinθ₂ = 0 and θ₂ = 0°. The ray passes straight through, unchanged in direction." },

    { type: "mc", diff: "easy",
      question: "A diverging lens always produces an image that is:",
      choices: ["Real, inverted, and magnified", "Real, upright, and diminished", "Virtual, inverted, and magnified", "Virtual, upright, and diminished"],
      correct: 3,
      explain: "A diverging (concave) lens spreads rays apart. For any real object, it always produces a virtual, upright, diminished image on the same side as the object." },

    // ── MEDIUM (2 dots, 4 pts) ────────────────────────────
    { type: "section-header", title: "Medium", subtitle: "Two-step reasoning · 4 pts each" },

    { type: "int", diff: "medium",
      question: "An object is placed 30 cm in front of a concave mirror with focal length 10 cm. What is the image distance in cm?",
      answer: 15,
      hint: "Mirror equation: 1/f = 1/u + 1/v → 1/10 = 1/30 + 1/v → 1/v = 1/10 − 1/30 = 3/30 − 1/30 = 2/30 → v = 15 cm." },

    { type: "mc", diff: "medium",
      question: "Light strikes a glass–air interface (n_glass = 1.5) from inside the glass. The critical angle for total internal reflection is approximately:",
      choices: ["19.5°", "33.6°", "41.8°", "48.2°"],
      correct: 2,
      explain: "θ_c = arcsin(n_air/n_glass) = arcsin(1.00/1.50) = arcsin(0.667) ≈ 41.8°. Any angle of incidence above 41.8° leads to TIR." },

    { type: "mc", diff: "medium",
      question: "An object is placed 6 cm in front of a converging lens of focal length 12 cm. The image is:",
      choices: ["Real, inverted, 12 cm on the far side", "Virtual, upright, 12 cm on the near side", "Virtual, upright, 4 cm on the near side", "Real, inverted, 4 cm on the far side"],
      correct: 1,
      explain: "1/12 = 1/6 + 1/v → 1/v = 1/12 − 1/6 = 1/12 − 2/12 = −1/12 → v = −12 cm. Negative v means virtual, on the same side as the object. m = −(−12)/6 = +2, so upright and magnified." },

    { type: "int", diff: "medium",
      question: "A concave mirror of focal length 20 cm forms a real image at 60 cm. What is the object distance in cm?",
      answer: 30,
      hint: "1/f = 1/u + 1/v → 1/20 = 1/u + 1/60 → 1/u = 1/20 − 1/60 = 3/60 − 1/60 = 2/60 → u = 30 cm." },

    { type: "mc", diff: "medium",
      question: "A ray of light travels from air into an unknown medium and is refracted at 25° when the angle of incidence is 45°. What is the refractive index of the medium?",
      choices: ["1.19", "1.41", "1.68", "1.88"],
      correct: 2,
      explain: "n = sinθ_i / sinθ_r = sin45° / sin25° = 0.7071 / 0.4226 ≈ 1.674 ≈ 1.68." },

    { type: "tf", diff: "medium",
      statement: "When an object is placed between a concave mirror and its focal point, the image formed is virtual, upright, and magnified.",
      correct: true,
      explain: "When u < f for a concave mirror, the mirror equation gives v < 0 (virtual), m > 1 (magnified), and the positive magnification means upright. This is the principle behind makeup and shaving mirrors." },

    { type: "int", diff: "medium",
      question: "A convex mirror has a focal length of −25 cm. An object is placed 50 cm in front of the mirror. What is the magnitude of the image distance in cm?",
      answer: 17,
      hint: "1/f = 1/u + 1/v → 1/(−25) = 1/50 + 1/v → 1/v = −1/25 − 1/50 = −2/50 − 1/50 = −3/50 → v = −50/3 ≈ −16.7 cm. Magnitude ≈ 17 cm." },

    { type: "mc", diff: "medium",
      question: "An object 3 cm tall is placed 15 cm from a converging lens of focal length 10 cm. What is the height of the image?",
      choices: ["−6 cm (inverted)", "−3 cm (inverted)", "+6 cm (upright)", "+3 cm (upright)"],
      correct: 0,
      explain: "1/10 = 1/15 + 1/v → 1/v = 1/10 − 1/15 = 3/30 − 2/30 = 1/30 → v = 30 cm. m = −v/u = −30/15 = −2. Image height = m × 3 = −6 cm. Negative means inverted." },

    { type: "mc", diff: "medium",
      question: "What is the apparent depth of a fish 4.0 m below the surface of a lake (n_water = 1.33) when viewed from directly above?",
      choices: ["2.66 m", "3.01 m", "4.00 m", "5.32 m"],
      correct: 1,
      explain: "Apparent depth = real depth / n = 4.0 / 1.33 ≈ 3.01 m. Objects submerged in water appear closer to the surface than they actually are." },

    { type: "tf", diff: "medium",
      statement: "The focal length of a lens depends on the refractive index of the surrounding medium as well as the lens material.",
      correct: true,
      explain: "The lens maker's formula 1/f = (n_lens/n_medium − 1)(1/R₁ − 1/R₂) shows that f depends on the ratio of refractive indices. A glass lens in water has a much longer focal length than the same lens in air." },

    { type: "int", diff: "medium",
      question: "Two thin lenses of focal lengths +20 cm and +30 cm are placed in contact. What is the focal length of the combination in cm?",
      answer: 12,
      hint: "1/f = 1/f₁ + 1/f₂ = 1/20 + 1/30 = 3/60 + 2/60 = 5/60 → f = 60/5 = 12 cm." },

    { type: "mc", diff: "medium",
      question: "A concave mirror produces a real image at 60 cm from the mirror. If the magnification is −3, what is the focal length of the mirror?",
      choices: ["10 cm", "15 cm", "20 cm", "45 cm"],
      correct: 1,
      explain: "m = −3 = −v/u → u = v/3 = 60/3 = 20 cm. Mirror equation: 1/f = 1/u + 1/v = 1/20 + 1/60 = 3/60 + 1/60 = 4/60 → f = 15 cm. A real, inverted image with magnification −3 means the object is between f and 2f." },

    // ── HARD (3 dots, 5 pts) ──────────────────────────────
    { type: "section-header", title: "Hard", subtitle: "Multi-concept synthesis · 5 pts each" },

    { type: "mc", diff: "hard",
      question: "A ray enters the flat face of a glass semicylinder (n = 1.5) along the radius (normal incidence) and hits the curved surface from inside. At what minimum angle to the radius must it hit the curved surface to undergo total internal reflection?",
      choices: ["30.0°", "41.8°", "48.2°", "56.4°"],
      correct: 1,
      explain: "The critical angle is θ_c = arcsin(1/n) = arcsin(1/1.5) = arcsin(0.667) ≈ 41.8°. Because the ray travels along a radius to the curved surface, the angle of incidence at the curved surface equals the angle the ray makes with the radius. TIR occurs at or above 41.8°." },

    { type: "int", diff: "hard",
      question: "A concave mirror has focal length 10 cm. An object 2 cm tall is placed 15 cm from the mirror. What is the height of the image in cm? (Give the magnitude)",
      answer: 4,
      hint: "Step 1 — image distance: 1/10 = 1/15 + 1/v → 1/v = 1/10 − 1/15 = 3/30 − 2/30 = 1/30 → v = 30 cm. Step 2 — magnification: m = −v/u = −30/15 = −2. Step 3 — image height: h_i = m × h_o = −2 × 2 = −4 cm. Magnitude = 4 cm." },

    { type: "mc", diff: "hard",
      question: "A prism with apex angle 60° and n = 1.52 is surrounded by air. A ray enters one face at an angle of incidence of 48.6°. What is the exit angle on the other face? (sin⁻¹(0.760) ≈ 49.5°; sin48.6° ≈ 0.750; sin30° = 0.500)",
      choices: ["30.0°", "40.2°", "49.5°", "60.0°"],
      correct: 2,
      explain: "Step 1: Refraction at entry: 1.00 × sin48.6° = 1.52 × sinr₁ → sinr₁ = 0.750/1.52 ≈ 0.493 → r₁ ≈ 29.6° ≈ 30°. Step 2: Geometry of prism: r₁ + r₂ = A = 60° → r₂ = 60° − 30° = 30°. Step 3: Refraction at exit: 1.52 × sin30° = 1.00 × sine → sine = 1.52 × 0.500 = 0.760 → e ≈ 49.5°." },

    { type: "int", diff: "hard",
      question: "A concave mirror has focal length 12 cm. An object is placed at the center of curvature (24 cm from the mirror). The image forms at the center of curvature as well. If the object is now moved 6 cm closer to the mirror (to 18 cm), what is the new image distance in cm?",
      answer: 36,
      hint: "Mirror equation: 1/f = 1/u + 1/v → 1/12 = 1/18 + 1/v → 1/v = 1/12 − 1/18 = 3/36 − 2/36 = 1/36 → v = 36 cm. Moving the object inside the center of curvature pushes the image further out beyond 2f." },

    { type: "mc", diff: "hard",
      question: "A tank of water (n = 1.33) is 40 cm deep. A mirror lies flat on the bottom. A ray of light enters from air, refracts into the water, travels 40 cm down, reflects off the mirror, and returns to the surface. What is the total optical path length of the ray inside the water (both down and up)?",
      choices: ["40 cm", "53 cm", "80 cm", "106 cm"],
      correct: 3,
      explain: "Optical path length = n × geometric path. The ray travels 40 cm down and 40 cm up inside water — total geometric path = 80 cm. Optical path = 1.33 × 80 = 106.4 ≈ 106 cm. Optical path length accounts for the slower wave speed in the medium and determines phase shifts in interference." },

    { type: "mc", diff: "hard",
      question: "An optical fiber has core n = 1.50 and cladding n = 1.45. What is the numerical aperture (NA) of the fiber? (NA = √(n_core² − n_clad²))",
      choices: ["0.124", "0.174", "0.224", "0.387"],
      correct: 3,
      explain: "NA = √(1.50² − 1.45²) = √(2.25 − 2.1025) = √0.1475 ≈ 0.384 ≈ 0.387. The numerical aperture describes the cone of light a fiber can accept — larger NA means more light captured." },

    { type: "int", diff: "hard",
      question: "A converging lens of focal length 15 cm is used as a simple magnifier. If the image is formed at the near point (25 cm from the eye, on the same side as the object), what is the angular magnification? (M = 1 + D/f, D = 25 cm, f = 15 cm; give the nearest integer)",
      answer: 3,
      hint: "M = 1 + D/f = 1 + 25/15 = 1 + 1.667 = 2.667, which rounds to approximately 3 (nearest integer to 2.67 is 3)." },

    { type: "mc", diff: "hard",
      question: "A glass block (n = 1.5) is 6 cm thick. A ray enters perpendicular to one face and exits the other face. Compared with the unobstructed path in air, the ray is delayed by an optical path length of:",
      choices: ["2 cm", "3 cm", "6 cm", "9 cm"],
      correct: 1,
      explain: "Optical path length through glass = n × d = 1.5 × 6 = 9 cm. The equivalent optical path in air for the same geometric length is 6 cm. Extra optical path = 9 − 6 = 3 cm. This extra path length is the physical basis of dispersion and interference in glass." },
  ],
};

export default function G10OpticsExamSet() {
  return <ProbsetComposer config={CONFIG} />;
}
