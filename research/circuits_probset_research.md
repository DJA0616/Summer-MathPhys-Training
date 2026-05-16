# G10 Circuits Problem Set Research

## Topic Coverage
- Ohm's Law: V = IR, resistance R = ρL/A
- Power: P = IV = I²R = V²/R
- Series: R_eq = R₁ + R₂ + ..., voltage divider
- Parallel: 1/R_eq = 1/R₁ + 1/R₂ + ..., current divider, product-over-sum for two
- Circuit Analysis: KCL, KVL, internal resistance V = ε − Ir, Wheatstone bridge

## Existing Problems to NOT Duplicate
From G10_Circuits_L01.jsx lecture + practice:
- 48W at 12V → R=3Ω (already covered)
- 2,3,6Ω parallel → R_eq=1Ω (already covered)
- Battery ε=12V, r=0.5Ω, I=4A → V=10V (already covered)
- 100Ω at 12V → I=0.12A (already covered)
- Copper wire R calculation → rounds to 1Ω (already covered)
- 6Ω||3Ω → R_eq=2Ω (already covered)
- 20Ω+30Ω series, 100V → V₃₀=60V (already covered)
- 12V battery, 10Ω → P=14.4W (already covered)
- Wheatstone R₁=4,R₂=8,R₃=6 → R₄=12Ω (already covered)

## Problem Distribution
- Easy (5 problems, 3 pts each): Direct V=IR, simple series/parallel, power
- Medium (7 problems, 4 pts each): Multi-step reduction, power efficiency, internal resistance
- Hard (3 problems, 5 pts each): KVL/KCL multi-loop, bridge circuits, competition-style

## Problems

### E1. Ohm's Law — Find Voltage
- Type: int
- Question: A current of 0.25 A flows through a 48 Ω resistor. What is the voltage across it, in volts?
- Answer: 12
- Diff: easy
- Pts: 3
- Explanation: V = IR = (0.25)(48) = 12 V.

### E2. Resistance from Material Properties
- Type: mc
- Question: An aluminum wire (ρ = 2.8×10⁻⁸ Ω·m) has length 5.0 m and cross-sectional area 7.0×10⁻⁸ m². What is its resistance?
- Choices: ["0.5 Ω", "2.0 Ω", "4.0 Ω", "20 Ω"]
- Correct: 1
- Diff: easy
- Pts: 3
- Explanation: R = ρL/A = (2.8×10⁻⁸)(5.0)/(7.0×10⁻⁸) = 14×10⁻⁸/7.0×10⁻⁸ = 2.0 Ω.

### E3. Power from Current and Resistance
- Type: mc
- Question: A current of 3 A flows through a 4 Ω resistor. How much power is dissipated as heat?
- Choices: ["12 W", "24 W", "36 W", "48 W"]
- Correct: 2
- Diff: easy
- Pts: 3
- Explanation: P = I²R = (3)²(4) = 9×4 = 36 W.

### E4. Series Resistance
- Type: int
- Question: Resistors of 15 Ω, 25 Ω, and 10 Ω are connected in series. What is the equivalent resistance in ohms?
- Answer: 50
- Diff: easy
- Pts: 3
- Explanation: R_eq = 15 + 25 + 10 = 50 Ω.

### E5. Current Divider
- Type: mc
- Question: A 2 A current splits between two parallel resistors: 3 Ω and 6 Ω. What is the current through the 3 Ω resistor?
- Choices: ["0.67 A", "1.33 A", "1.0 A", "2.0 A"]
- Correct: 1
- Diff: easy
- Pts: 3
- Explanation: Current divider: I₁ = I_total × R₂/(R₁+R₂) = 2 × 6/(3+6) = 2 × 6/9 = 12/9 = 1.33 A. Less resistance → more current.

### M1. Stepwise Circuit Reduction
- Type: int
- Question: Find the equivalent resistance between A and B: a 12 Ω resistor in series with a parallel combination of 6 Ω and 3 Ω. Answer in ohms.
- Answer: 14
- Diff: medium
- Pts: 4
- Explanation: Parallel first: 6||3 = (6×3)/(6+3) = 18/9 = 2 Ω. Then series: 12 + 2 = 14 Ω.

### M2. Voltage Divider with Load
- Type: mc
- Question: A 10 Ω and 30 Ω resistor are in series across a 20 V supply. What is the voltage across the 10 Ω resistor?
- Choices: ["5 V", "10 V", "15 V", "20 V"]
- Correct: 0
- Diff: medium
- Pts: 4
- Explanation: V₁₀ = (10/(10+30))×20 = (10/40)×20 = 0.25×20 = 5 V.

### M3. Power in Series Circuit
- Type: int
- Question: A 4 Ω and 8 Ω resistor are in series across a 24 V battery. What is the total power dissipated by both resistors, in watts?
- Answer: 48
- Diff: medium
- Pts: 4
- Explanation: R_eq = 12 Ω. I = V/R_eq = 24/12 = 2 A. P_total = I²R_eq = (4)(12) = 48 W. Or: P = V²/R_eq = 576/12 = 48 W.

### M4. Internal Resistance — Power to Load
- Type: mc
- Question: A battery with EMF ε = 9 V and internal resistance r = 1 Ω is connected to a load resistor R. For what value of R is the power delivered to the load maximum?
- Choices: ["0.5 Ω", "1 Ω", "2 Ω", "9 Ω"]
- Correct: 1
- Diff: medium
- Pts: 4
- Explanation: Maximum power transfer occurs when R_load = r_internal = 1 Ω.

### M5. Complex Series-Parallel Reduction
- Type: int
- Question: Find R_eq between terminals A and B: a 10 Ω resistor in parallel with a series combination of 4 Ω and 6 Ω. Answer in ohms.
- Answer: 5
- Diff: medium
- Pts: 4
- Explanation: Series first: 4 + 6 = 10 Ω. Then parallel: 10||10 = (10×10)/(10+10) = 100/20 = 5 Ω.

### M6. Energy Dissipated
- Type: mc
- Question: A 20 Ω resistor carries 0.5 A for 2 minutes. How much energy is dissipated as heat?
- Choices: ["10 J", "600 J", "300 J", "1200 J"]
- Correct: 1
- Diff: medium
- Pts: 4
- Explanation: P = I²R = (0.5)²(20) = 0.25×20 = 5 W. t = 120 s. E = Pt = 5×120 = 600 J.

### M7. KCL Application
- Type: mc
- Question: At a junction in a circuit, three wires meet. Wire 1 carries 5 A in, wire 2 carries 3 A in. What is the current in wire 3?
- Choices: ["8 A in", "8 A out", "2 A in", "2 A out"]
- Correct: 1
- Diff: medium
- Pts: 4
- Explanation: KCL: ΣI_in = ΣI_out. 5 + 3 = 8 A entering. Wire 3 must carry 8 A out for the junction to balance.

### H1. Multi-Loop KVL/KCL
- Type: int
- Question: In a circuit, a 12 V battery connects to two parallel branches. Branch 1: 4 Ω resistor. Branch 2: 6 Ω resistor in series with an unknown R. The current from the battery is 5 A. Find R in ohms.
- Answer: 2
- Diff: hard
- Pts: 5
- Explanation: Total R_eq = V/I = 12/5 = 2.4 Ω. Branch 1: 4 Ω. Branch 2: 6+R Ω. Parallel: 1/2.4 = 1/4 + 1/(6+R) → 1/(6+R) = 1/2.4 − 1/4 = 5/12 − 3/12 = 2/12 = 1/6. So 6+R = 6, R = 0. Wait that gives R=0.

Let me fix: Battery 12V, total current 4A. R_eq = 12/4 = 3 Ω. 1/3 = 1/4 + 1/(6+R) → 1/(6+R) = 1/3 − 1/4 = 4/12 − 3/12 = 1/12. 6+R = 12, R = 6 Ω. 

### H1. Multi-Loop KVL/KCL (revised)
- Type: int
- Question: A 12 V battery supplies 4 A total to two parallel branches. Branch 1 has a single 4 Ω resistor. Branch 2 has a 6 Ω resistor in series with an unknown resistor R. Find R in ohms.
- Answer: 6
- Diff: hard
- Pts: 5
- Explanation: R_eq = V/I = 12/4 = 3 Ω. For parallel: 1/R_eq = 1/R₁ + 1/R₂ → 1/3 = 1/4 + 1/(6+R). 1/(6+R) = 1/3 − 1/4 = 1/12. So 6+R = 12, R = 6 Ω. Verify: Branch 2 total = 12 Ω. R_eq = (4×12)/(4+12) = 48/16 = 3 Ω. I = 12/3 = 4 A.

### H2. Unbalanced Wheatstone Bridge
- Type: mc
- Question: In a Wheatstone bridge, R₁ = 6 Ω, R₂ = 3 Ω, R₃ = 4 Ω, R₄ = 2 Ω. A 9 V battery is connected across the bridge. Is the bridge balanced? What is the equivalent resistance of the bridge network?
- Choices: ["Balanced, 5 Ω", "Unbalanced, 3 Ω", "Unbalanced, ~3.6 Ω", "Balanced, 3.6 Ω"]
- Correct: 2
- Diff: hard
- Pts: 5
- Explanation: Balance check: R₁/R₂ = 6/3 = 2, R₃/R₄ = 4/2 = 2. Wait — they ARE equal. Let me change the numbers.

Let me fix: R₁=6, R₂=3, R₃=4, R₄=3. Check: R₁/R₂ = 2, R₃/R₄ = 4/3 ≠ 2. Unbalanced. Hmm, computing R_eq for unbalanced bridge is complex (requires Δ-Y transform). Let me just make it a balanced bridge problem with different numbers from the lecture.

### H2. Wheatstone Bridge — Find Unknown (revised)
- Type: int
- Question: In a balanced Wheatstone bridge, R₁ = 15 Ω, R₂ = 5 Ω, and R₃ = 9 Ω. A galvanometer between the midpoints reads zero current. What is R₄ in ohms?
- Answer: 3
- Diff: medium
- Pts: 4
- Explanation: Balance: R₁/R₂ = R₃/R₄ → 15/5 = 9/R₄ → 3 = 9/R₄ → R₄ = 3 Ω.

Wait, this is too similar to the lecture problem. Let me make H2 a harder circuit reduction problem instead.

### H2. Ladder Network Reduction
- Type: int
- Question: Find the equivalent resistance of a ladder network: two 2 Ω resistors in series, with a 2 Ω resistor connected from their midpoint to the end (forming a T-network). Answer in ohms, rounded to 1 decimal place.
- Answer: 3.3
- Diff: hard
- Pts: 5
- Explanation: The T-network has: R₁ (top left) = 2 Ω, R₂ (top right) = 2 Ω, R₃ (vertical) = 2 Ω. Looking in from left with right end open: R_eq = R₁ + (R₃||R₂) = 2 + (2×2)/(2+2) = 2 + 1 = 3 Ω. If the right end is connected to the bottom, then: R_eq = R₁ + R₃||R₂ where output is shorted. Actually, the T network: from left terminal, R₁ in series with (R₃ parallel with R₂). R₃||R₂ = 1 Ω, total = 3 Ω.

Hmm, 3.3 doesn't match 3. Let me adjust: R₁=4Ω, R₂=6Ω, R₃=3Ω (vertical). R_eq = 4 + (3×6)/(3+6) = 4 + 18/9 = 4 + 2 = 6 Ω. 

Or: R₁=3Ω, R₂=3Ω, R₃=3Ω. R_eq = 3 + (3×3)/(3+3) = 3 + 1.5 = 4.5 Ω. Hmm not clean.

OK this is getting too detailed in my head. Let me use a simpler hard problem.

### H1. Multi-Loop (KVL)
- Type: int
- Question: A 12 V battery supplies 4 A to two parallel branches. Branch 1: 4 Ω resistor. Branch 2: 6 Ω + R in series. Find R in ohms.
- Answer: 6
- (verified above)

### H2. Nested Series-Parallel Reduction
- Type: int
- Question: Find R_eq for: (3 Ω parallel with 6 Ω) then series with (4 Ω parallel with 12 Ω) then series with 2 Ω. Answer in ohms.
- Answer: 7
- Diff: hard
- Pts: 5
- Explanation: 3||6 = 2 Ω. 4||12 = (4×12)/(4+12) = 48/16 = 3 Ω. Total: 2 + 3 + 2 = 7 Ω.

### H3. Power Transfer with Internal Resistance
- Type: mc
- Question: A battery (ε = 10 V, r = 2 Ω) is connected to a variable load R. What is the maximum power that can be delivered to the load?
- Choices: ["5.0 W", "12.5 W", "25 W", "50 W"]
- Correct: 1
- Diff: hard
- Pts: 5
- Explanation: Max power when R = r = 2 Ω. Then I = ε/(r+R) = 10/4 = 2.5 A. P_load = I²R = (2.5)²(2) = 6.25×2 = 12.5 W. Or: P_max = ε²/(4r) = 100/8 = 12.5 W.
