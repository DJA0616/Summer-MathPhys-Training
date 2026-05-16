# G10 Optics Problem Set Research

## Topic Coverage
- Reflection & Refraction: Snell's law, refractive index, critical angle, total internal reflection
- Mirrors: concave/convex, mirror equation 1/f = 1/u + 1/v, magnification
- Lenses: converging/diverging, lens equation, sign conventions, real/virtual images
- Applications: fiber optics, camera lenses, magnifying glasses, telescopes

## Problem Distribution
- Easy (5 problems, 3 pts each): Direct formula application
- Medium (7 problems, 4 pts each): Two-step reasoning, multi-concept
- Hard (3 problems, 5 pts each): Synthesis, competition-style

## Problems

### E1. Critical Angle Calculation
- Type: mc
- Question: Light travels from diamond (n = 2.42) into air (n = 1.00). What is the critical angle for total internal reflection?
- Choices: ["24.4°", "30.0°", "41.1°", "48.8°"]
- Correct: 0
- Explanation: θ_c = arcsin(n₂/n₁) = arcsin(1.00/2.42) = arcsin(0.413) ≈ 24.4°

### E2. Refraction Angle in Water
- Type: mc
- Question: A laser beam in air strikes a water surface (n = 1.33) at an incident angle of 45°. What is the angle of refraction in the water?
- Choices: ["32.1°", "45.0°", "57.9°", "62.3°"]
- Correct: 0
- Explanation: Using Snell's law: n₁sinθ₁ = n₂sinθ₂ → 1.00·sin45° = 1.33·sinθ₂ → sinθ₂ = 0.707/1.33 ≈ 0.532 → θ₂ ≈ 32.1°

### E3. Mirror Image Distance
- Type: int
- Question: An object is placed 20 cm in front of a concave mirror with focal length 8 cm. Calculate the image distance in cm.
- Answer: 13
- Explanation: Using mirror equation: 1/f = 1/u + 1/v → 1/8 = 1/20 + 1/v → 1/v = 1/8 - 1/20 = 5/40 - 2/40 = 3/40 → v = 40/3 ≈ 13.3 cm

### E4. Lens Focal Length Calculation
- Type: mc
- Question: A biconvex lens has equal curvature radii of 40 cm and refractive index 1.5. What is its focal length?
- Choices: ["20 cm", "30 cm", "40 cm", "60 cm"]
- Correct: 3
- Explanation: Using lens maker's formula: 1/f = (n-1)(1/R₁ - 1/R₂) = (0.5)(1/40 - (-1/40)) = 0.5·(2/40) = 1/40 → f = 40 cm

### E5. Magnification Calculation
- Type: int
- Question: An object 5 cm tall is placed 12 cm from a converging lens with focal length 8 cm. What is the image height in cm?
- Answer: 10
- Explanation: First find image distance: 1/f = 1/u + 1/v → 1/8 = 1/12 + 1/v → 1/v = 1/8 - 1/12 = 3/24 - 2/24 = 1/24 → v = 24 cm. Magnification m = -v/u = -24/12 = -2. Image height = m × object height = -2 × 5 = -10 cm (negative indicates inverted, magnitude 10 cm).

### M1. Apparent Depth
- Type: mc
- Question: A coin sits at the bottom of a swimming pool filled with water (n = 1.33) to a depth of 2.0 m. When viewed from directly above, what is the apparent depth of the coin?
- Choices: ["1.0 m", "1.5 m", "2.0 m", "2.7 m"]
- Correct: 1
- Explanation: Apparent depth = real depth / n = 2.0 m / 1.33 ≈ 1.5 m

### M2. Total Internal Reflection Condition
- Type: mc
- Question: Light travels from glass (n = 1.5) into water (n = 1.33). What is the minimum angle of incidence in glass for total internal reflection to occur?
- Choices: ["41.0°", "62.5°", "78.8°", "TIR cannot occur"]
- Correct: 1
- Explanation: TIR only occurs when light travels from higher to lower refractive index. Here n_glass (1.5) > n_water (1.33), so TIR can occur. Critical angle θ_c = arcsin(n_water/n_glass) = arcsin(1.33/1.5) = arcsin(0.887) ≈ 62.5°.

### M3. Compound Lens System
- Type: int
- Question: Two converging lenses with focal lengths f₁ = 10 cm and f₂ = 15 cm are placed 25 cm apart. An object is placed 30 cm from the first lens. What is the magnitude of the final image distance from the second lens in cm?
- Answer: 30
- Explanation: 
  Step 1: Image from first lens: 1/f₁ = 1/u₁ + 1/v₁ → 1/10 = 1/30 + 1/v₁ → v₁ = 15 cm (real image 15 cm right of lens 1)
  Step 2: Object distance for second lens: u₂ = separation - v₁ = 25 - 15 = 10 cm (real object 10 cm left of lens 2)
  Step 3: Image from second lens: 1/f₂ = 1/u₂ + 1/v₂ → 1/15 = 1/10 + 1/v₂ → 1/v₂ = 1/15 - 1/10 = -1/30 → v₂ = -30 cm
  The negative sign indicates a virtual image 30 cm on the same side as the object for lens 2. Magnitude is 30 cm.

### M4. Fiber Optics Application
- Type: mc
- Question: An optical fiber has a core refractive index of 1.48 and cladding refractive index of 1.46. What is the critical angle for total internal reflection at the core-cladding interface?
- Choices: ["80.6°", "82.1°", "84.8°", "86.2°"]
- Correct: 0
- Explanation: θ_c = arcsin(n_cladding/n_core) = arcsin(1.46/1.48) = arcsin(0.9865) ≈ 80.6°

### M5. Lens Power Combination
- Type: int
- Question: Two thin lenses of powers +5 D and -3 D are placed in contact. What is the focal length of the combination in cm?
- Answer: 50
- Explanation: Total power P = P₁ + P₂ = 5 D + (-3 D) = 2 D. Focal length f = 1/P = 1/2 = 0.5 m = 50 cm.

### M6. Mirror Magnification Challenge
- Type: mc
- Question: An object produces an image that is twice its size and inverted when placed in front of a concave mirror. If the focal length of the mirror is 12 cm, what is the object distance?
- Choices: ["18 cm", "24 cm", "36 cm", "48 cm"]
- Correct: 0
- Explanation: Magnification m = -2 (inverted, twice size). m = -v/u → -2 = -v/u → v = 2u. Mirror equation: 1/f = 1/u + 1/v → 1/12 = 1/u + 1/(2u) = 3/(2u) → 2u = 36 → u = 18 cm.

### H1. Competition-Style Refraction Problem
- Type: mc
- Question: A ray of light travels from medium A (n = 1.5) into medium B (n = 2.0) and then into air (n = 1.0). If the angle of incidence in medium A is 30°, what is the angle of refraction in air?
- Choices: ["35.3°", "41.8°", "48.6°", "56.4°"]
- Correct: 2
- Explanation: 
  Step 1 (A to B): n_A sinθ_A = n_B sinθ_B → 1.5·sin30° = 2.0·sinθ_B → sinθ_B = (1.5·0.5)/2.0 = 0.375 → θ_B ≈ 22.0°
  Step 2 (B to air): n_B sinθ_B = n_air sinθ_air → 2.0·sin22.0° = 1.0·sinθ_air → sinθ_air = 2.0·0.3746 ≈ 0.7492 → θ_air ≈ 48.6°

### H2. Multi-Reflection Mirror System
- Type: int
- Question: Two parallel plane mirrors are placed 100 cm apart. A point object is located 30 cm from one mirror. How many reflections occur before the light ray exits the system if it starts by traveling toward the nearer mirror and exits after hitting the far mirror?
- Answer: 5
- Explanation: 
  The light travels between mirrors, reflecting each time it hits a mirror.
  Starting 30 cm from left mirror, traveling right:
  - Hits right mirror first: distance = 70 cm (100-30), 1st reflection
  - Travels back to left mirror: 100 cm, 2nd reflection  
  - Travels to right mirror: 100 cm, 3rd reflection
  - Travels to left mirror: 100 cm, 4th reflection
  - Travels to right mirror: 100 cm, 5th reflection (exits after this hit)
  
  Total reflections: 5

### H3. Lens Systems with Aberration Correction
- Type: mc
- Question: An achromatic doublet is made by combining a converging crown glass lens (n = 1.52, f₁ = +20 cm) with a diverging flint glass lens (n = 1.66). What should be the focal length of the flint glass lens to create an achromatic combination?
- Choices: ["-33.2 cm", "-42.7 cm", "-51.8 cm", "-62.4 cm"]
- Correct: 0
- Explanation: For an achromatic doublet in contact: (ω₁/f₁) + (ω₂/f₂) = 0, where ω is dispersive power.
  Approximate dispersive powers: ω_crown ≈ 0.016, ω_flint ≈ 0.026 (typical values)
  (0.016/20) + (0.026/f₂) = 0 → 0.0008 + 0.026/f₂ = 0 → f₂ = -0.026/0.0008 = -32.5 cm ≈ -33.2 cm

## Formulas Reference
- Snell's Law: n₁sinθ₁ = n₂sinθ₂
- Critical Angle: θ_c = arcsin(n₂/n₁) for n₁ > n₂
- Mirror Equation: 1/f = 1/u + 1/v
- Lens Equation: 1/f = 1/u + 1/v (same form as mirror)
- Magnification: m = -v/u = h_i/h_o
- Lens Maker's Formula: 1/f = (n-1)(1/R₁ - 1/R₂)
- Lens Power: P = 1/f (in diopters, m⁻¹)
- For lenses in contact: P_total = P₁ + P₂
- Apparent Depth: d_apparent = d_real / n