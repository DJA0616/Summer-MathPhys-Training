# G10 Physics Research: Momentum and Impulse

**Syllabus Reference:** G10 Integrated Learning Roadmap, Phase 2, Blocks 7–11 (Mechanics)

---

## 1. Core Concepts

### 1.1 Momentum

**Definition:** Momentum is the product of an object's mass and velocity. It is a vector quantity that measures the "amount of motion" an object carries.

$$p = mv$$

- **Symbol:** $p$ (sometimes $\vec{p}$ for vector)
- **Units:** kg·m/s (kilogram-meters per second)
- **Direction:** Same as velocity
- **Physical intuition:** A heavy object moving slowly has significant momentum; a light object moving fast also carries momentum. Momentum combines both inertia (mass) and velocity. It is harder to stop a moving truck than a moving bicycle—the truck has more momentum.

### 1.2 Impulse

**Definition:** Impulse is the change in momentum caused by a force applied over a time interval. It is also a vector quantity.

$$J = F \Delta t = \Delta p$$

- **Symbol:** $J$ (or $\vec{J}$)
- **Units:** N·s (newton-seconds) or kg·m/s (equivalent)
- **Direction:** Same as the force applied
- **Physical intuition:** A large force applied for a short time can produce the same impulse as a small force applied for a long time. Example: catching a ball by extending your arm increases the time of contact, reducing the force needed on your hand.

### 1.3 Impulse-Momentum Theorem

**Statement:** The impulse applied to an object equals its change in momentum.

$$J = F_{\text{net}} \Delta t = \Delta p = m v_f - m v_i$$

Where:
- $F_{\text{net}}$ is the net (total) force
- $\Delta t$ is the time interval
- $v_i$ is initial velocity
- $v_f$ is final velocity

**Key insight:** This is Newton's second law in a different form. Instead of $F = ma$, we express force in terms of momentum change over time:

$$F_{\text{net}} = \frac{\Delta p}{\Delta t}$$

### 1.4 Conservation of Momentum

**Statement:** In a closed system (no external forces), the total momentum before an event equals the total momentum after the event.

$$\sum p_{\text{before}} = \sum p_{\text{after}}$$

$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$

**Conditions for validity:**
- System must be isolated (no net external force)
- Internal forces between objects do not change total momentum
- Examples: collisions, explosions, separations

**Physical intuition:** Momentum is "conserved"—it cannot be created or destroyed, only transferred between objects. If one object slows down, another must speed up to conserve the total momentum.

### 1.5 Elastic Collisions

**Definition:** A collision in which kinetic energy is conserved (no energy is lost to deformation, heat, or sound).

**Equations:**
- Momentum conserved: $m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$
- Kinetic energy conserved: $\frac{1}{2}m_1 v_{1i}^2 + \frac{1}{2}m_2 v_{2i}^2 = \frac{1}{2}m_1 v_{1f}^2 + \frac{1}{2}m_2 v_{2f}^2$

**Special case—two objects, head-on:**

$$v_{1f} = \frac{(m_1 - m_2)v_{1i} + 2m_2 v_{2i}}{m_1 + m_2}$$

$$v_{2f} = \frac{(m_2 - m_1)v_{2i} + 2m_1 v_{1i}}{m_1 + m_2}$$

**Physical insight:** Elastic collisions are rare in macroscopic systems (billiard balls approximate this; molecules in gases behave elastically). Most real collisions are partially or fully inelastic.

### 1.6 Inelastic Collisions

**Definition:** A collision in which kinetic energy is not conserved—some energy is lost to deformation, heat, or sound.

**Special case—perfectly inelastic collision:** Objects stick together after collision.

$$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2) v_f$$

**Where to find $v_f$:**

$$v_f = \frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$$

**Energy loss:** Kinetic energy before is greater than kinetic energy after.

$$\Delta KE = \frac{1}{2}m_1 v_{1i}^2 + \frac{1}{2}m_2 v_{2i}^2 - \frac{1}{2}(m_1 + m_2)v_f^2$$

**Physical intuition:** In car crashes, the vehicles deform and stick together—this is perfectly inelastic. Momentum is still conserved, but kinetic energy is not.

### 1.7 Coefficient of Restitution

**Definition:** A dimensionless number (0 ≤ e ≤ 1) that measures the elasticity of a collision.

$$e = \frac{|v_{2f} - v_{1f}|}{|v_{1i} - v_{2i}|} = \frac{\text{relative speed of separation}}{\text{relative speed of approach}}$$

**Interpretation:**
- $e = 1$: perfectly elastic collision (KE conserved)
- $e = 0$: perfectly inelastic collision (objects stick)
- $0 < e < 1$: partially elastic collision (some energy lost)

**Example:** A tennis ball dropped on concrete has $e \approx 0.7$; after bouncing, it leaves at about 70% of the speed at which it arrived.

---

## 2. Key Formulas Summary

| Concept | Formula | Variables |
|---------|---------|-----------|
| **Momentum** | $p = mv$ | $p$ = momentum (kg·m/s), $m$ = mass (kg), $v$ = velocity (m/s) |
| **Impulse (force-time)** | $J = F \Delta t$ | $J$ = impulse (N·s), $F$ = force (N), $\Delta t$ = time interval (s) |
| **Impulse-Momentum Theorem** | $F_{\text{net}} \Delta t = m(v_f - v_i)$ | $v_f, v_i$ = final, initial velocity (m/s) |
| **Conservation of Momentum** | $m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$ | subscripts: object 1 & 2, initial (i) & final (f) |
| **Perfectly Inelastic** | $v_f = \frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$ | common final velocity after sticking |
| **Elastic Collision (1D)** | $v_{1f} = \frac{(m_1 - m_2)v_{1i} + 2m_2 v_{2i}}{m_1 + m_2}$ | derived from momentum + KE conservation |
| **Coefficient of Restitution** | $e = \frac{v_{2f} - v_{1f}}{v_{1i} - v_{2i}}$ | 0 ≤ e ≤ 1 |

---

## 3. Worked Examples

### Example 1: Basic Momentum Calculation (Easy)

**Problem:** A 1500 kg car travels at 20 m/s. Calculate its momentum.

**Solution:**
$$p = mv = 1500 \text{ kg} \times 20 \text{ m/s} = 30{,}000 \text{ kg·m/s}$$

**Answer:** $p = 3.0 \times 10^4$ kg·m/s or 30,000 kg·m/s.

---

### Example 2: Impulse and Force (Medium)

**Problem:** A 0.5 kg ball moving at 10 m/s is caught by a person and comes to rest in 0.1 seconds. Calculate (a) the impulse on the ball, and (b) the average force exerted by the person.

**Solution:**

(a) **Impulse:**
$$J = \Delta p = m(v_f - v_i) = 0.5 \times (0 - 10) = -5 \text{ N·s}$$

The negative sign indicates the impulse is opposite to the initial motion (force acts to stop the ball).

(b) **Average force:**
$$F_{\text{avg}} = \frac{J}{\Delta t} = \frac{-5}{0.1} = -50 \text{ N}$$

Magnitude: $|F| = 50$ N.

**Answer:** Impulse = 5 N·s (magnitude), Average force = 50 N (opposing motion).

---

### Example 3: Collision—Momentum Conservation (Medium)

**Problem:** A 2 kg object moving at 5 m/s collides with a 3 kg object at rest. After the collision, the 2 kg object moves at 1 m/s. Find the velocity of the 3 kg object after collision.

**Solution:**

Apply conservation of momentum:
$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$

$$2(5) + 3(0) = 2(1) + 3(v_{2f})$$

$$10 = 2 + 3 v_{2f}$$

$$v_{2f} = \frac{8}{3} \approx 2.67 \text{ m/s}$$

**Answer:** The 3 kg object moves at 2.67 m/s after collision.

---

### Example 4: Perfectly Inelastic Collision (Medium)

**Problem:** A 1 kg ball moving at 4 m/s collides and sticks to a 2 kg ball initially at rest. Find the final velocity.

**Solution:**

$$v_f = \frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2} = \frac{1(4) + 2(0)}{1 + 2} = \frac{4}{3} \approx 1.33 \text{ m/s}$$

**Answer:** Final velocity = 1.33 m/s.

---

### Example 5: Elastic Collision—Head On (Hard)

**Problem:** A 2 kg object moving at 6 m/s collides elastically with a 1 kg object initially at rest. Find the velocities after collision.

**Solution:**

Use elastic collision formulas:

$$v_{1f} = \frac{(m_1 - m_2)v_{1i} + 2m_2 v_{2i}}{m_1 + m_2} = \frac{(2 - 1)(6) + 2(1)(0)}{2 + 1} = \frac{6}{3} = 2 \text{ m/s}$$

$$v_{2f} = \frac{(m_2 - m_1)v_{2i} + 2m_1 v_{1i}}{m_1 + m_2} = \frac{(1 - 2)(0) + 2(2)(6)}{2 + 1} = \frac{24}{3} = 8 \text{ m/s}$$

**Verification (momentum):** 
- Before: $2(6) + 1(0) = 12$ kg·m/s
- After: $2(2) + 1(8) = 12$ kg·m/s ✓

**Verification (kinetic energy):**
- Before: $\frac{1}{2}(2)(6^2) + \frac{1}{2}(1)(0^2) = 36$ J
- After: $\frac{1}{2}(2)(2^2) + \frac{1}{2}(1)(8^2) = 4 + 32 = 36$ J ✓

**Answer:** $v_{1f} = 2$ m/s, $v_{2f} = 8$ m/s.

---

### Example 6: Coefficient of Restitution (Hard)

**Problem:** A ball is dropped from height 1.0 m and bounces back to height 0.49 m. Calculate the coefficient of restitution.

**Solution:**

Velocity before impact: $v_{\text{down}} = \sqrt{2gh} = \sqrt{2(10)(1.0)} = \sqrt{20} \approx 4.47$ m/s

Velocity after impact: $v_{\text{up}} = \sqrt{2gh'} = \sqrt{2(10)(0.49)} = \sqrt{9.8} \approx 3.13$ m/s

$$e = \frac{v_{\text{up}}}{v_{\text{down}}} = \frac{3.13}{4.47} \approx 0.70$$

Alternatively: $e = \sqrt{\frac{h'}{h}} = \sqrt{\frac{0.49}{1.0}} = \sqrt{0.49} = 0.7$

**Answer:** $e = 0.7$ (70% elastic).

---

## 4. Practice Problems (15 Total)

### Easy (5 problems)

**E1. Multiple Choice:** A 5 kg object moves at 3 m/s. What is its momentum?
- (A) 8 kg·m/s
- (B) 15 kg·m/s
- (C) 2 kg·m/s
- (D) 25 kg·m/s

**Answer:** (B) 15 kg·m/s | **Sketch:** $p = mv = 5 \times 3 = 15$

---

**E2. Integer:** A 2 kg ball experiences a constant force of 10 N for 0.5 seconds. Calculate the impulse in N·s.

**Answer:** 5 N·s | **Sketch:** $J = F \Delta t = 10 \times 0.5 = 5$

---

**E3. True/False:** Momentum has units of kg·m/s, which is equivalent to N·s.

**Answer:** True | **Sketch:** $F \Delta t$ has units N·s; by impulse-momentum theorem, this equals $\Delta p$ in kg·m/s.

---

**E4. Multiple Choice:** Which of the following has the same units as momentum?
- (A) Force
- (B) Impulse
- (C) Kinetic energy
- (D) Acceleration

**Answer:** (B) Impulse | **Sketch:** Impulse = $F \Delta t$ has units N·s = kg·m/s, same as momentum.

---

**E5. Integer:** A 1000 kg car accelerates from rest to 10 m/s. Calculate the change in momentum in kg·m/s.

**Answer:** 10,000 kg·m/s | **Sketch:** $\Delta p = m(v_f - v_i) = 1000(10 - 0) = 10{,}000$

---

### Medium (5 problems)

**M1. Multiple Choice:** A 0.2 kg ball traveling at 5 m/s is caught and brought to rest in 0.04 s. What is the average force?
- (A) 25 N
- (B) 50 N
- (C) 100 N
- (D) 200 N

**Answer:** (A) 25 N | **Sketch:** $J = m \Delta v = 0.2 \times 5 = 1$ N·s; $F = J/\Delta t = 1/0.04 = 25$ N

---

**M2. Integer:** Two objects collide. Before: object 1 (3 kg, 4 m/s) and object 2 (2 kg, 0 m/s). After: object 1 has velocity 2 m/s. Find the final velocity of object 2 in m/s (express as a decimal to 1 place).

**Answer:** 3.0 m/s | **Sketch:** $3(4) + 2(0) = 3(2) + 2(v_2) \Rightarrow 12 = 6 + 2v_2 \Rightarrow v_2 = 3$

---

**M3. True/False:** In a perfectly inelastic collision, kinetic energy is always conserved.

**Answer:** False | **Sketch:** Only momentum is conserved in all collisions; KE is lost in inelastic collisions.

---

**M4. Multiple Choice:** A 1.5 kg object moving at 8 m/s collides and sticks with a 2.5 kg object at rest. What is their common final velocity?
- (A) 2 m/s
- (B) 3 m/s
- (C) 4 m/s
- (D) 5 m/s

**Answer:** (B) 3 m/s | **Sketch:** $v_f = \frac{1.5(8) + 2.5(0)}{1.5 + 2.5} = \frac{12}{4} = 3$

---

**M5. Integer:** A 0.5 kg ball drops 2 m and bounces back to 0.5 m. Calculate the coefficient of restitution to 2 decimal places.

**Answer:** 0.50 | **Sketch:** $e = \sqrt{\frac{h_{\text{after}}}{h_{\text{before}}}} = \sqrt{\frac{0.5}{2}} = \sqrt{0.25} = 0.50$

---

### Hard (5 problems)

**H1. Multiple Choice:** Two objects collide elastically. Object A (2 kg) moves at 6 m/s toward stationary object B (1 kg). Find $v_A'$ after collision.
- (A) 2 m/s
- (B) 4 m/s
- (C) 6 m/s
- (D) 8 m/s

**Answer:** (A) 2 m/s | **Sketch:** $v_A' = \frac{(2-1)(6) + 0}{3} = 2$; verify KE before = $36$ J, after = $4 + 32 = 36$ J ✓

---

**H2. Integer:** In a collision, object 1 (4 kg, initial 5 m/s) and object 2 (6 kg, initial 0) undergo a perfectly inelastic collision. Calculate the kinetic energy lost (in joules) during the collision.

**Answer:** 30 J (or 30) | **Sketch:** $v_f = \frac{4(5)}{10} = 2$ m/s; $KE_i = \frac{1}{2}(4)(25) = 50$ J; $KE_f = \frac{1}{2}(10)(4) = 20$ J; $\Delta KE = 30$ J

---

**H3. True/False:** If two objects of equal mass collide elastically head-on and one is initially at rest, they will exchange velocities.

**Answer:** True | **Sketch:** $v_1' = \frac{(m-m)v_1 + 2m(0)}{2m} = 0$; $v_2' = \frac{2m v_1}{2m} = v_1$ — velocities swap.

---

**H4. Multiple Choice:** A spring is compressed between two blocks (2 kg and 3 kg) on a frictionless surface. The spring releases, and the 2 kg block moves at 9 m/s. Find the velocity of the 3 kg block.
- (A) 6 m/s (opposite direction)
- (B) 9 m/s (opposite direction)
- (C) 4.5 m/s (opposite direction)
- (D) 3 m/s (opposite direction)

**Answer:** (A) 6 m/s | **Sketch:** Total initial momentum = 0; $2(9) + 3(v_2) = 0 \Rightarrow v_2 = -6$ m/s (opposite direction, magnitude 6 m/s)

---

**H5. Integer:** A projectile of mass 0.1 kg strikes a 2 kg block at rest with velocity 50 m/s and embeds itself. Find the final kinetic energy of the block-projectile system in joules.

**Answer:** 58 J (or 57–59, depending on rounding) | **Sketch:** $v_f = \frac{0.1(50) + 2(0)}{2.1} = \frac{5}{2.1} \approx 2.38$ m/s; $KE_f = \frac{1}{2}(2.1)(2.38)^2 \approx 5.95 \approx 6$ J. *Note: KE$_i = 125$ J, so ~119 J lost.*

---

## 5. Competition Insights

### 5.1 Momentum in Non-Isolated Systems

While momentum is conserved in isolated systems, many physics competition problems involve external forces (gravity, friction, air resistance). The key is identifying the time scale:

- **Collision (very short Δt):** During the collision, external impulse is negligible compared to the internal collision impulse. Example: in a car crash, the collision happens so fast (~0.1 s) that gravity's impulse ($mg \Delta t$) is small compared to the collision forces. Use conservation of momentum as an approximation.

- **Longer time scales:** External forces dominate. Example: after a perfectly inelastic collision, the combined object decelerates due to friction; momentum is NOT conserved over longer times—the external friction force is significant.

**Olympiad twist:** Some problems ask "Is momentum conserved?" The answer is context-dependent: always check the time scale and whether external forces are significant.

### 5.2 Center of Mass Frame

In many collision problems, it is elegant to solve in the center-of-mass (CM) frame, where the total momentum is zero:

$$p_{\text{CM}} = \sum m_i v_i = 0$$

In this frame:
- Elastic collisions become simple: objects reverse direction with the same speed (in the CM frame).
- The transformation between lab frame and CM frame uses: $v_{\text{lab}} = v_{\text{CM}} + v_{\text{object, CM frame}}$

**Example:** Two equal masses colliding head-on. In the lab frame, this looks complex; in the CM frame (moving at their average velocity), they simply reverse directions elastically.

---

## 6. Diagram Descriptions

### Diagram 1: Collision Before and After (Momentum Conservation)

**Title:** "Elastic and Inelastic Collisions"

**Layout:** Two horizontal rows, each showing a before-and-after pair.

**Top row (Elastic Collision):**
- **Before:** Two circles side-by-side, left circle (larger, labeled "2 kg") moving right at "6 m/s" (arrow), right circle (smaller, labeled "1 kg") stationary.
- **After:** Same two circles, left moving right at "2 m/s", right moving right at "8 m/s" (faster, separate from left). Annotation: "Both moving forward; velocities reversed."

**Bottom row (Perfectly Inelastic Collision):**
- **Before:** Same starting setup as elastic.
- **After:** Two circles merged into one larger shape, moving right at "3.33 m/s". Annotation: "Combined object moves forward at reduced speed."

**Annotations:**
- Label total momentum before (12 kg·m/s) and after (both 12 kg·m/s) for both scenarios.
- For elastic: label kinetic energy before (36 J) and after (36 J).
- For inelastic: label kinetic energy before (36 J) and after (16.67 J); note energy loss.

---

### Diagram 2: Impulse-Momentum (Force-Time Graph)

**Title:** "Impulse as Area Under Force-Time Curve"

**Layout:** A single xy-plane with time on x-axis (0 to 0.5 s) and force on y-axis (0 to 200 N).

**Case A (constant force):** A horizontal rectangle from t=0.1 to t=0.3 s at F=100 N. Label: "Constant force, Δt = 0.2 s, Area (impulse) = 100 × 0.2 = 20 N·s"

**Case B (triangular impulse):** A triangle from t=0.1 s, peak at 200 N at t=0.25 s, returning to 0 at t=0.4 s. Label: "Varying force, Area (impulse) = ½ × 0.3 s × 200 N = 30 N·s"

**Annotation:** Explain that impulse is the area under the F-t curve, regardless of whether the force is constant or variable. Add arrow pointing upward: "Larger area → larger impulse → greater Δp".

---

### Diagram 3: Coefficient of Restitution (Bouncing Ball)

**Title:** "Coefficient of Restitution: Ball Bounce Sequence"

**Layout:** A vertical diagram showing a ball at four stages (left to right):

1. **At rest above ground:** Height $h$ above ground, label "Initial height".
2. **Just before impact:** Ball touching ground, velocity arrow pointing downward labeled "$v_{\text{down}} = \sqrt{2gh}$".
3. **Just after bounce:** Ball leaving ground, velocity arrow pointing upward labeled "$v_{\text{up}} = e \cdot v_{\text{down}}$".
4. **At peak of bounce:** Ball at height $h' = e^2 h$ above ground, label "Final height".

**Annotations:**
- Show three cases side-by-side (e = 1.0, 0.7, 0):
  - e = 1.0: ball bounces to original height $h$ (elastic).
  - e = 0.7: ball bounces to 49% of original height (0.49h).
  - e = 0: ball remains on ground (perfectly inelastic).
- Add formula box: "$e = \sqrt{\frac{h'}{h}}$"

---

## 7. Additional Notes for Instructors

1. **Real-world collisions:** Most collisions are partially inelastic (0 < e < 1). Perfectly elastic collisions are idealizations; perfectly inelastic collisions are rare but instructive.

2. **Vector nature:** Momentum and impulse are vectors. Collisions at angles (2D/3D) require component-wise momentum conservation. Most G10 practice focuses on 1D (head-on) collisions.

3. **Reference frame:** Momentum conservation depends on the reference frame. Always state which frame (ground frame, moving platform, etc.) is being used.

4. **Energy vs. momentum:** Students often conflate these. Momentum is always conserved in isolated systems; kinetic energy is conserved only in elastic collisions.

5. **Exam strategies:** 
   - Always draw a before/after diagram and label velocities.
   - Use conservation of momentum first (always valid for isolated systems).
   - Use conservation of kinetic energy only if the collision is stated or clearly elastic.
   - For inelastic collisions, expect energy loss.

---

## Sources & References

- **High School Physics Textbooks:** Serway & Faughn, *College Physics*; Haber-Schaim, *PSSC Physics*
- **International Olympiad Problems:** Physics Olympiad archives (past 10 years), focus on collision problems in the mechanics section
- **Worked examples and formulas:** Derived from standard kinematics and Newton's laws; collision formulas verified against momentum and energy conservation
- **Coefficient of restitution:** Empirically defined; typical values for common materials available in engineering handbooks

---

**End of Research Bundle**
