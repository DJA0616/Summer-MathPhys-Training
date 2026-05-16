# G10 Electrostatics Problem Set Research

## Topic Coverage
- Coulomb's Law: F = kQq/r², superposition of forces, vector addition
- Electric Field: E = F/q, E = kQ/r², field superposition, field null points
- Electric Potential & Energy: V = kQ/r, U = qV, U = kq₁q₂/r, E = −dV/dx
- Constants: k = 9×10⁹ N·m²/C², e = 1.6×10⁻¹⁹ C

## Existing Problems to NOT Duplicate
From G10_Electrostatics_L01.jsx lecture + practice:
- Two charges +3μC/−4μC at 0.20m → F=2.7N (already covered)
- Two equal +Q at ±a, E at midpoint = 0 (already covered)
- +2μC at origin, V at 0.30m = 6.0×10⁴ V (already covered)
- Force at 3r = F/9 (already covered)
- q₁=+5μC, q₂=−3μC at 0.15m → F=6N (already covered)
- E null point between two equal +Q = midpoint (already covered)
- +3μC at 40cm → V=68 kV (already covered)
- Three +Q at equilateral triangle → U=3kQ²/a (already covered)
- V(x)=5x² → E at x=2 (already covered)

## Problem Distribution
- Easy (5 problems, 3 pts each): Direct formula, single-step
- Medium (7 problems, 4 pts each): Two-step, vector addition, work/energy
- Hard (3 problems, 5 pts each): Multi-charge systems, competition-style

## Problems

### E1. Coulomb Force Between Point Charges
- Type: mc
- Question: Two small charged spheres carry charges of +8 μC and +2 μC, separated by 0.30 m. What is the magnitude of the Coulomb force between them?
- Choices: ["1.6 N", "0.48 N", "4.8 N", "16 N"]
- Correct: 0
- Diff: easy
- Pts: 3
- Explanation: F = k·q₁q₂/r² = (9×10⁹)(8×10⁻⁶)(2×10⁻⁶)/(0.30)² = (9×10⁹)(16×10⁻¹²)/0.09 = 0.144/0.09 = 1.6 N.

### E2. Electric Field of a Point Charge
- Type: mc
- Question: A point charge Q = +5 nC is placed at the origin. What is the magnitude of the electric field at a distance of 3.0 m from the charge?
- Choices: ["15 N/C", "5.0 N/C", "1.5 N/C", "45 N/C"]
- Correct: 1
- Diff: easy
- Pts: 3
- Explanation: E = kQ/r² = (9×10⁹)(5×10⁻⁹)/(3.0)² = 45/9 = 5.0 N/C.

### E3. Electric Potential — Simple
- Type: mc
- Question: An isolated point charge Q creates a potential of 900 V at a distance of 2.0 m. What is the value of Q? Use k = 9×10⁹.
- Choices: ["2.0×10⁻⁷ C", "4.5×10⁻⁷ C", "2.0×10⁻⁶ C", "4.5×10⁻⁶ C"]
- Correct: 0
- Diff: easy
- Pts: 3
- Explanation: V = kQ/r → Q = Vr/k = (900)(2.0)/(9×10⁹) = 1800/9×10⁻⁹ = 200×10⁻⁹ = 2.0×10⁻⁷ C.

### E4. Electron in Uniform Field
- Type: mc
- Question: An electron (q = −1.6×10⁻¹⁹ C, m = 9.1×10⁻³¹ kg) is placed in a uniform electric field of 1000 N/C directed upward. What is the magnitude of its acceleration?
- Choices: ["1.76×10¹⁴ m/s²", "1.76×10¹¹ m/s²", "5.7×10⁻¹⁵ m/s²", "1.6×10⁻¹⁶ m/s²"]
- Correct: 0
- Diff: easy
- Pts: 3
- Explanation: F = qE = (1.6×10⁻¹⁹)(1000) = 1.6×10⁻¹⁶ N. a = F/m = 1.6×10⁻¹⁶/9.1×10⁻³¹ ≈ 1.76×10¹⁴ m/s². Direction is opposite the field (electron is negative).

### E5. Potential Energy of a Pair
- Type: mc
- Question: Two charges q₁ = +6 μC and q₂ = +4 μC are 0.50 m apart. What is the electric potential energy of this two-charge system?
- Choices: ["0.43 J", "4.3 J", "0.043 J", "0.22 J"]
- Correct: 0
- Diff: easy
- Pts: 3
- Explanation: U = k·q₁q₂/r = (9×10⁹)(6×10⁻⁶)(4×10⁻⁶)/0.50 = (9×10⁹)(24×10⁻¹²)/0.50 = 0.216/0.50 = 0.432 ≈ 0.43 J.

### M1. Vector Force on a Charge (2D)
- Type: mc
- Question: Three charges are placed along a line: q₁ = +4 μC at x = 0, q₂ = −2 μC at x = 0.30 m, and q₃ = +3 μC at x = 0.60 m. What is the net electrostatic force on q₂? (Take right as positive.)
- Choices: ["0.80 N left", "0.60 N right", "0.20 N right", "1.40 N left"]
- Correct: 0
- Diff: medium
- Pts: 4
- Explanation: Force from q₁ on q₂: F₁₂ = k(4×10⁻⁶)(2×10⁻⁶)/(0.30)² = 9×10⁹×8×10⁻¹²/0.09 = 0.80 N (attractive, so left on q₂ since q₁ is positive and q₂ is negative — wait, attractive means toward q₁, so left). Force from q₃ on q₂: F₃₂ = k(3×10⁻⁶)(2×10⁻⁶)/(0.30)² = 9×10⁹×6×10⁻¹²/0.09 = 0.60 N (attractive, toward q₃, so right). Net = 0.80 N left − 0.60 N right = 0.20 N left. Wait, let me recalculate: F₁₂ is attractive between +4 and −2, so q₂ (−2) is pulled toward q₁ (+4), which is left. F₃₂ is attractive between +3 and −2, so q₂ (−2) is pulled toward q₃ (+3), which is right. Net = 0.80 − 0.60 = 0.20 N left. Hmm, that's not among the choices. Let me redo: F = k|q₁q₂|/r². F₁₂ = (9×10⁹)(4×10⁻⁶)(2×10⁻⁶)/(0.30)² = (9×10⁹)(8×10⁻¹²)/0.09 = 72×10⁻³/0.09 = 0.80 N. That's the magnitude. Attractive → left on q₂. F₃₂ = (9×10⁹)(3×10⁻⁶)(2×10⁻⁶)/(0.30)² = (9×10⁹)(6×10⁻¹²)/0.09 = 54×10⁻³/0.09 = 0.60 N. Attractive → right on q₂. Net = 0.80 − 0.60 = 0.20 N left. Hmm, 0.20 N left... not in the choices.

Let me fix the choices: ["0.20 N left", "0.20 N right", "1.40 N left", "1.40 N right"]

Actually wait, 0.80 N left means direction is left, and the net would be left with 0.20 N. Let me rephrase.

Actually let me just change the problem slightly to get cleaner numbers.

Let me use: q₁ = +6 μC at x = 0, q₂ = +2 μC at x = 0.20 m, q₃ = −3 μC at x = 0.50 m. Find net force on q₂.

F₁₂ = k(6×10⁻⁶)(2×10⁻⁶)/(0.20)² = (9×10⁹)(12×10⁻¹²)/0.04 = 0.108/0.04 = 2.7 N (repulsive since both +, pushes q₂ right).
F₃₂ = k(3×10⁻⁶)(2×10⁻⁶)/(0.30)² = (9×10⁹)(6×10⁻¹²)/0.09 = 0.054/0.09 = 0.60 N (attractive since + and −, pulls q₂ right).
Net = 2.7 + 0.60 = 3.3 N right.

That's cleaner. Let me use these numbers.

### M1. Vector Force on a Charge (collinear)
- Type: mc
- Question: Three charges lie on a line: q₁ = +6 μC at x = 0, q₂ = +2 μC at x = 0.20 m, and q₃ = −3 μC at x = 0.50 m. What is the net electrostatic force on q₂? (Take right as positive.)
- Choices: ["3.3 N right", "2.1 N right", "3.3 N left", "2.7 N left"]
- Correct: 0
- Diff: medium
- Pts: 4
- Explanation: F₁₂ (q₁ on q₂): both +, repulsive. F₁₂ = k(6×10⁻⁶)(2×10⁻⁶)/(0.20)² = 0.108/0.04 = 2.7 N right. F₃₂ (q₃ on q₂): + and −, attractive toward q₃ (right). F₃₂ = k(3×10⁻⁶)(2×10⁻⁶)/(0.30)² = 0.054/0.09 = 0.60 N right. Net = 2.7 + 0.60 = 3.3 N right.

### M2. Electric Field Null Point
- Type: int
- Question: Two charges, q₁ = +16 μC at x = 0 and q₂ = +4 μC at x = 3.0 m, are fixed on the x-axis. At what distance (in meters) from q₁ is the net electric field zero? Round to 1 decimal place.
- Answer: 2.0
- Diff: medium
- Pts: 4
- Hint: The null point lies between the charges (since both are +). Set E₁ = E₂: k(16)/x² = k(4)/(3−x)² → 16/x² = 4/(3−x)² → 4/x² = 1/(3−x)² → 2/x = 1/(3−x) → 2(3−x) = x → 6−2x = x → x = 2.0 m.

### M3. Work Done by Electric Field
- Type: mc
- Question: A +5 μC charge is moved from a point at potential V_A = 200 V to a point at V_B = 50 V by the electric field. How much work does the electric field do on the charge?
- Choices: ["+7.5×10⁻⁴ J", "−7.5×10⁻⁴ J", "+1.25×10⁻³ J", "−1.25×10⁻³ J"]
- Correct: 0
- Diff: medium
- Pts: 4
- Explanation: Work by field = −ΔU = −q(V_B − V_A) = −(5×10⁻⁶)(50 − 200) = −(5×10⁻⁶)(−150) = +7.5×10⁻⁴ J. The field does positive work — the charge moves spontaneously from high to low potential.

### M4. Energy to Assemble Three Charges
- Type: int
- Question: Three identical charges q = +2 μC are placed at the vertices of an equilateral triangle of side 0.30 m. Calculate the total potential energy of the configuration in joules, multiplied by 10³ (i.e., give the value in mJ). Round to 1 decimal place. Use k = 9×10⁹.
- Answer: 360.0
- Diff: medium
- Pts: 4
- Hint: U = Σ_(i<j) kq²/r. Three identical pairs: U = 3 × kq²/r = 3 × (9×10⁹)(4×10⁻¹²)/0.30 = 3 × (36×10⁻³)/0.30 = 3 × 0.12 = 0.36 J. In mJ: 0.36 × 10³ = 360 mJ. Answer: 360.

### M5. Charge Sharing Between Spheres
- Type: mc
- Question: Two identical conducting spheres carry charges +12 μC and −4 μC. They are brought into contact and then separated. What is the final charge on each sphere?
- Choices: ["+8 μC each", "+4 μC each", "+12 μC and −4 μC", "+6 μC and +2 μC"]
- Correct: 1
- Diff: medium
- Pts: 4
- Explanation: When identical conductors touch, charge redistributes equally. Total charge = +12 + (−4) = +8 μC. Each gets +8/2 = +4 μC.

### M6. Particle Deflection in Field
- Type: mc
- Question: A proton (q = +1.6×10⁻¹⁹ C, m = 1.67×10⁻²⁷ kg) enters a uniform electric field of 5000 N/C directed vertically downward with an initial horizontal velocity of 2×10⁵ m/s. After traveling 0.10 m horizontally, what is its vertical displacement? (Assume the field region is wide enough.)
- Choices: ["1.2×10⁻³ m", "2.4×10⁻³ m", "4.8×10⁻³ m", "6.0×10⁻⁴ m"]
- Correct: 0
- Diff: medium
- Pts: 4
- Explanation: Time in field: t = Δx/v_x = 0.10/(2×10⁵) = 5×10⁻⁷ s. Acceleration: a = qE/m = (1.6×10⁻¹⁹)(5000)/(1.67×10⁻²⁷) ≈ 4.79×10¹¹ m/s² (upward since proton is +, field is downward → force upward). Wait: F = qE, E is downward, q is positive → F is downward. So a is downward. a = 4.79×10¹¹ m/s² downward. Vertical displacement: y = ½at² = ½(4.79×10¹¹)(5×10⁻⁷)² = ½(4.79×10¹¹)(2.5×10⁻¹³) = ½(0.11975) ≈ 0.060 m = 6.0×10⁻² m. Hmm that doesn't match.

Let me recheck: 0.5 × 4.79×10¹¹ × 2.5×10⁻¹³ = 0.5 × 1.1975 = 0.598. No that's way too big.

Actually: a_y = qE/m = (1.6×10⁻¹⁹)(5000)/(1.67×10⁻²⁷) ≈ 8×10⁻¹⁶/1.67×10⁻²⁷ ≈ 4.79×10¹¹. 
t = 0.10/(2×10⁵) = 5×10⁻⁷ s.
y = ½at² = ½(4.79×10¹¹)(25×10⁻¹⁴) = ½(1.1975×10⁻¹) = 0.0599 m ≈ 6 cm. Still too big.

The problem is the numbers aren't great for this. Let me simplify. Use E = 2000 N/C, v_x = 10⁶ m/s, travel 0.05 m horizontally:
t = 0.05/10⁶ = 5×10⁻⁸ s.
a = qE/m = (1.6×10⁻¹⁹)(2000)/(1.67×10⁻²⁷) ≈ 1.92×10¹¹ m/s².
y = ½(1.92×10¹¹)(25×10⁻¹⁶) = ½(4.8×10⁻⁴) = 2.4×10⁻⁴ m = 0.24 mm.

That's a reasonable displacement. Let me use these.

Choices: ["2.4×10⁻⁴ m", "4.8×10⁻⁴ m", "1.2×10⁻⁴ m", "1.0×10⁻³ m"]
Correct: 0

### M7. E-Field from Two Charges (Vector Addition)
- Type: mc
- Question: Two point charges +Q are placed at (0, d) and (0, −d). What is the electric field at point P = (x, 0) on the x-axis?
- Choices: ["E = (2kQx/(x²+d²)^(3/2)) î", "E = (2kQ/(x²+d²)) î", "E = (2kQd/(x²+d²)^(3/2)) î", "E = 0"]
- Correct: 0
- Diff: medium
- Pts: 4
- Explanation: At P, each charge contributes: |E₁| = |E₂| = kQ/(x² + d²). The y-components cancel (one up, one down). The x-components add: each = kQ/(x²+d²) × x/√(x²+d²) = kQx/(x²+d²)^(3/2). Total E = 2kQx/(x²+d²)^(3/2) in the +x direction.

### H1. Three-Charge Equilibrium
- Type: mc
- Question: Two fixed charges +Q and +4Q are separated by distance L. Where must a third charge q be placed on the line joining them so that the net force on q is zero? The third charge must be between them.
- Choices: ["L/3 from +Q", "L/2 from +Q", "2L/3 from +Q", "L/4 from +Q"]
- Correct: 0
- Diff: hard
- Pts: 5
- Explanation: Let x = distance from +Q to q. Force from +Q: F₁ = kQq/x² (repulsive if q > 0). Force from +4Q: F₂ = k(4Q)q/(L−x)² (repulsive if q > 0). For equilibrium (regardless of q's sign): kQq/x² = k(4Q)q/(L−x)² → 1/x² = 4/(L−x)² → (L−x)/x = 2 → L−x = 2x → x = L/3.

### H2. E from V in 2D
- Type: mc
- Question: The electric potential in a region is V(x,y) = 3x² − 2y² volts. What is the magnitude of the electric field at the point (1, 1)?
- Choices: ["√52 ≈ 7.2 V/m", "10 V/m", "√20 ≈ 4.5 V/m", "2 V/m"]
- Correct: 0
- Diff: hard
- Pts: 5
- Explanation: E = −∇V. E_x = −∂V/∂x = −6x. E_y = −∂V/∂y = +4y. At (1,1): E_x = −6, E_y = +4. |E| = √(36 + 16) = √52 ≈ 7.21 V/m.

### H3. Stopping an Electron
- Type: int
- Question: An electron (q = −1.6×10⁻¹⁹ C, m = 9.1×10⁻³¹ kg) is shot with initial speed 3×10⁶ m/s toward a fixed +5 μC charge from very far away. How close (in cm) does it get before being repelled? Round to 2 significant figures. (Hint: use conservation of energy. At the closest approach, the electron momentarily stops.)
- Answer: 1.5
- Diff: hard
- Pts: 5
- Hint: Initial KE = ½mv² = ½(9.1×10⁻³¹)(9×10¹²) = 4.095×10⁻¹⁸ J. At closest approach r: KE_final = 0, PE_final = k(−e)(Q)/r. Wait — the electron is negative and Q is positive, so PE is negative (attractive). But the electron is "repelled" — actually the electron would be ATTRACTED to the +5 μC charge. It would accelerate toward it, not be repelled.

Hmm, this is wrong physically. Let me fix this. If you shoot an electron toward a + charge, it gets attracted and speeds up, not repelled. I need to use a NEGATIVE fixed charge for repulsion.

Let me redo: Fixed charge = −5 μC. Electron (negative) is repelled. Initial KE → converted to PE at closest approach.

KE_initial = ½mv² = ½(9.1×10⁻³¹)(3×10⁶)² = ½(9.1×10⁻³¹)(9×10¹²) = 4.095×10⁻¹⁸ J.

At closest approach r: KE = 0, PE = k(−e)(−Q)/r = k(e)(Q)/r. Energy conservation: KE_initial = PE_final = k(e)(Q)/r.

r = k(e)(Q)/KE_initial = (9×10⁹)(1.6×10⁻¹⁹)(5×10⁻⁶)/(4.095×10⁻¹⁸) = (9×10⁹)(8×10⁻²⁵)/(4.095×10⁻¹⁸)
= 7.2×10⁻¹⁵/4.095×10⁻¹⁸ = 1.758×10³ m. In cm: ~1.8×10⁵ cm = 180,000 cm.

That's way too large. Let me scale down. Use initial speed 3×10⁴ m/s:

KE = ½(9.1×10⁻³¹)(9×10⁸) = 4.095×10⁻²² J.
r = (9×10⁹)(1.6×10⁻¹⁹)(5×10⁻⁶)/(4.095×10⁻²²) = 7.2×10⁻¹⁵/4.095×10⁻²² = 1.758×10⁷ m. Still huge.

Let me use Q = −5 nC = −5×10⁻⁹ C and v = 10⁵ m/s:

KE = ½(9.1×10⁻³¹)(10¹⁰) = 4.55×10⁻²¹ J.
r = (9×10⁹)(1.6×10⁻¹⁹)(5×10⁻⁹)/(4.55×10⁻²¹) = 7.2×10⁻¹⁸/4.55×10⁻²¹ = 1.582×10³ m. Still large.

Let me use Q = −50 nC and v = 10⁵ m/s:
r = (9×10⁹)(1.6×10⁻¹⁹)(5×10⁻⁸)/(4.55×10⁻²¹) ≈ 1.58 m. Closer.

But this is getting complicated. Let me use a PROTON instead (positive charge), repelled by +Q:

Proton shot toward +5 μC. KE_initial = ½(1.67×10⁻²⁷)(10⁵)² = ½(1.67×10⁻²⁷)(10¹⁰) = 8.35×10⁻¹⁸ J.
r_min = k(e)(Q)/KE = (9×10⁹)(1.6×10⁻¹⁹)(5×10⁻⁶)/(8.35×10⁻¹⁸) = 7.2×10⁻¹⁵/8.35×10⁻¹⁸ = 0.862 m = 86 cm. 

That's reasonable! Let me use this.

### H3. Closest Approach of Proton to a Fixed Charge (revised)
- Type: int
- Question: A proton (q = +1.6×10⁻¹⁹ C, m = 1.67×10⁻²⁷ kg) is launched from far away with initial speed 1.0×10⁵ m/s straight toward a fixed +5 μC charge. How close (in cm) does the proton get before being repelled to a stop? Round to the nearest integer.
- Answer: 86
- Diff: hard
- Pts: 5
- Hint: Use energy conservation. At closest approach, KE = 0. PE_initial ≈ 0 (far away), PE_final = kqQ/r. ½mv² = kqQ/r → r = 2kqQ/(mv²). Compute and convert to cm.
- Verify: r = 2(9×10⁹)(1.6×10⁻¹⁹)(5×10⁻⁶)/[(1.67×10⁻²⁷)(10¹⁰)] = 2×7.2×10⁻¹⁵/(1.67×10⁻¹⁷) = 14.4×10⁻¹⁵/1.67×10⁻¹⁷. Hmm wait, I used ½mv² = kqQ/r, so r = 2kqQ/(mv²) = 2(9×10⁹)(1.6×10⁻¹⁹)(5×10⁻⁶)/[(1.67×10⁻²⁷)(10¹⁰)] = 2×7.2×10⁻¹⁵/1.67×10⁻¹⁷ = 14.4×10⁻¹⁵/1.67×10⁻¹⁷. Let me calculate: 14.4/1.67 = 8.62. And 10⁻¹⁵/10⁻¹⁷ = 10². So r = 8.62×10² = 862. Hmm wait, that's off by 10.

Let me redo: r = kqQ/KE = kqQ/(½mv²) = 2kqQ/(mv²).
= 2(9×10⁹)(1.6×10⁻¹⁹)(5×10⁻⁶)/[(1.67×10⁻²⁷)(10¹⁰)]
= (18×10⁹)(8×10⁻²⁵)/(1.67×10⁻¹⁷)
= 144×10⁻¹⁶/1.67×10⁻¹⁷
= (144/1.67)×10¹
= 86.2×10¹... wait no.

2 × 9×10⁹ = 18×10⁹ = 1.8×10¹⁰.
1.6×10⁻¹⁹ × 5×10⁻⁶ = 8×10⁻²⁵.
1.8×10¹⁰ × 8×10⁻²⁵ = 14.4×10⁻¹⁵ = 1.44×10⁻¹⁴.
Denominator: 1.67×10⁻²⁷ × 10¹⁰ = 1.67×10⁻¹⁷.
r = 1.44×10⁻¹⁴/1.67×10⁻¹⁷ = (1.44/1.67)×10³ = 0.862×10³ = 862 m. 

Wait, that's 862 meters = 86,200 cm. Not 86 cm!

Let me adjust: use initial speed 3×10⁵ m/s:
v² = 9×10¹⁰. Denominator: 1.67×10⁻²⁷ × 9×10¹⁰ = 1.503×10⁻¹⁶.
r = 1.44×10⁻¹⁴/1.503×10⁻¹⁶ = (1.44/1.503)×10² ≈ 95.8 m = 9580 cm.

Still large. This makes sense — protons are light and the Coulomb force at microscopic distances is enormous.

Let me use Q = +5 nC = 5×10⁻⁹ C, v = 3×10⁵ m/s:
kqQ = (9×10⁹)(1.6×10⁻¹⁹)(5×10⁻⁹) = 7.2×10⁻¹⁸.
2kqQ = 1.44×10⁻¹⁷.
Denominator: 1.67×10⁻²⁷ × 9×10¹⁰ = 1.503×10⁻¹⁶.
r = 1.44×10⁻¹⁷/1.503×10⁻¹⁶ = 0.0958 m = 9.6 cm.

Good! Let me use these numbers and simplify for the student.

H3: Proton, v = 3×10⁵ m/s, fixed charge +5 nC. Closest approach in cm.
Answer: 9.6 → rounds to 10.

Hmm, 9.6 rounds to 10 (nearest integer). Let me adjust so it rounds to something nice. v = 2×10⁵ m/s:
Denominator = (1.67×10⁻²⁷)(4×10¹⁰) = 6.68×10⁻¹⁷.
r = 1.44×10⁻¹⁷/6.68×10⁻¹⁷ = 0.216 m = 21.6 cm → rounds to 22.

That works. Answer: 22.

Let me finalize H3 with these values. And let me update the research file.

OK this is getting very detailed. Let me just write the final research file with verified answers and move on to writing the JSX.
