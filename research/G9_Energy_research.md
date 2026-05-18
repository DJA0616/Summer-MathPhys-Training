# G10 Energy Research Bundle
**Integrated Syllabus Reference:** Phase 2, Blocks 7–11 (Mechanics, Energy Systems)  
**Date:** 2026-05-18

---

## 1. Core Concepts

### Work (W)
**Definition:** Work is energy transferred to or from an object by a force acting over a displacement. Only the component of force parallel to the displacement does work.

**Physical intuition:** Pushing a box horizontally does work; holding it stationary does not. The harder you push and the farther you push, the more work done.

**Key insight:** Work can be positive (force aids motion), negative (force opposes motion), or zero (force perpendicular to motion). This sign convention is crucial for energy conservation.

### Power (P)
**Definition:** Power is the rate at which work is done, or equivalently, the rate at which energy is transferred.

**Physical intuition:** Two workers might lift the same mass to the same height. The one who finishes first does the same work but exerts greater power—they are more powerful. Power answers "how fast" energy is used.

**Key insight:** Average power and instantaneous power are distinct. Instantaneous power can vary as speed and force change.

### Kinetic Energy (KE)
**Definition:** The energy of motion. An object with mass m moving at speed v possesses kinetic energy.

**Physical intuition:** A fast-moving object has more KE than a slow one; a heavy object has more KE than a light one at the same speed. Because KE depends on v², doubling speed quadruples the energy.

**Key insight:** Kinetic energy is always non-negative and depends only on speed, not direction of motion.

### Work-Energy Theorem
**Statement:** The net work done on an object equals the change in its kinetic energy. This connects forces (and work) to motion in a powerful way.

**Physical intuition:** If you do net positive work on an object, it speeds up; net negative work slows it down. The theorem quantifies this relationship precisely.

**Key insight:** This is not a new law—it is a consequence of Newton's second law. It is often easier to use than F=ma when forces are complex or variable.

### Gravitational Potential Energy (GPE)
**Definition:** The energy stored in a mass-Earth system due to relative position. Near Earth's surface, GPE is proportional to height.

**Physical intuition:** A boulder at the top of a cliff has more gravitational PE than at the bottom. If released, it falls and converts PE to KE. PE represents the "capacity" to do work.

**Key insight:** GPE is relative—we choose a reference height (often h=0) for convenience. Only differences in PE matter physically. The choice of reference does not change the physics.

### Elastic Potential Energy (EPE)
**Definition:** Energy stored in a stretched or compressed spring (or any elastic material). For an ideal spring with spring constant k, EPE depends on the square of the deformation.

**Physical intuition:** A compressed spring pushes back; a stretched spring pulls back. Both store energy that can be released to do work (e.g., launching a projectile).

**Key insight:** EPE is always non-negative (depends on displacement squared). A spring deformed by distance d, whether stretched or compressed, stores the same energy.

### Conservation of Mechanical Energy
**Statement:** In a system with only conservative forces (gravity, springs) and no friction, the total mechanical energy (KE + PE) is constant.

**Physical intuition:** A frictionless roller coaster trades height for speed: at the top, mostly PE; at the bottom, mostly KE. Total energy is constant.

**Key insight:** If non-conservative forces (friction, air resistance) act, mechanical energy is not conserved—energy is dissipated as heat. Energy conservation still holds globally (First Law of Thermodynamics), but mechanical energy decreases.

---

## 2. Key Formulas

| Quantity | Formula | Variables & Units |
|----------|---------|-------------------|
| **Work** | $W = Fd \cos\theta$ | F = force (N), d = displacement (m), θ = angle between F and d (°), W = joules (J) |
| **Work (variable F)** | $W = \int F \, dx$ | Integrate force over path for non-constant forces |
| **Power (average)** | $P_{\text{avg}} = \frac{W}{\Delta t}$ | W = work (J), Δt = time interval (s), P = watts (W) |
| **Power (instantaneous)** | $P = \vec{F} \cdot \vec{v} = Fv\cos\phi$ | v = velocity (m/s), φ = angle between F and v |
| **Kinetic Energy** | $KE = \frac{1}{2}mv^2$ | m = mass (kg), v = speed (m/s), KE = joules (J) |
| **Work-Energy Theorem** | $W_{\text{net}} = \Delta KE = \frac{1}{2}m(v_f^2 - v_i^2)$ | $v_i$, $v_f$ = initial and final speeds |
| **Gravitational PE** | $PE_g = mgh$ | m = mass (kg), g = 9.8 m/s², h = height above reference (m) |
| **Elastic PE (spring)** | $PE_s = \frac{1}{2}kx^2$ | k = spring constant (N/m), x = displacement from equilibrium (m) |
| **Conservation (no friction)** | $E_{\text{total}} = KE + PE_g + PE_s = \text{constant}$ | Holds when only conservative forces act |
| **With friction** | $E_{\text{initial}} = E_{\text{final}} + Q_{\text{friction}}$ | $Q_{\text{friction}}$ = energy dissipated as heat (J) |

---

## 3. Worked Examples

### Example 1: Work on an Incline (Medium)
**Problem:** A 10 kg box is pushed up a frictionless 30° incline over a distance of 4 m. The pushing force is parallel to the incline. How much work is done by gravity? By the applied force if the box moves at constant velocity?

**Solution:**
- **Gravity's work:** Gravity points downward; displacement is 4 m along the incline (upward). Vertical height change: $h = 4 \sin 30° = 2$ m.
  - $W_g = -mgh = -10 \times 9.8 \times 2 = -196$ J (negative because gravity opposes motion)
  
- **Applied force at constant velocity:** At constant velocity, net force is zero. The component of gravity along the incline is $mg\sin\theta = 10 \times 9.8 \times 0.5 = 49$ N (down the incline).
  - Applied force must be 49 N up the incline to maintain constant velocity.
  - $W_{\text{applied}} = 49 \times 4 = 196$ J
  
**Key insight:** The applied force does positive work equal in magnitude to gravity's negative work. Net work is zero, consistent with constant velocity (no change in KE).

---

### Example 2: Work-Energy Theorem with Friction (Medium)
**Problem:** A 5 kg block slides across a rough horizontal floor. Initial speed is 10 m/s. Friction force is 20 N (constant). How far does it slide before stopping?

**Solution:**
- Initial KE: $KE_i = \frac{1}{2} \times 5 \times 10^2 = 250$ J
- Final KE: $KE_f = 0$ (stops)
- Work by friction: $W_f = -20 \times d$ (negative because friction opposes motion)
- By work-energy theorem: $W_f = \Delta KE$
  - $-20d = 0 - 250$
  - $d = 12.5$ m

**Key insight:** Friction dissipates exactly the initial kinetic energy as heat. No calculation of acceleration needed—the energy method is direct.

---

### Example 3: Spring Potential Energy (Medium)
**Problem:** A spring with constant $k = 200$ N/m is compressed 0.1 m and released. It launches a 0.5 kg block on a frictionless surface. What is the block's speed when the spring returns to its natural length?

**Solution:**
- Initial state: Spring compressed, block at rest.
  - $PE_s = \frac{1}{2} \times 200 \times 0.1^2 = 1$ J
  - $KE = 0$
  - $E_{\text{total}} = 1$ J
  
- Final state: Spring at natural length, block moving.
  - $PE_s = 0$
  - $KE = \frac{1}{2}mv^2$
  - $E_{\text{total}} = 1$ J (conserved)
  
- Conservation: $\frac{1}{2} \times 0.5 \times v^2 = 1$
  - $v^2 = 4$
  - $v = 2$ m/s

**Key insight:** All spring PE converts to KE. Energy conservation avoids calculus of variable forces.

---

### Example 4: Roller Coaster (Hard)
**Problem:** A cart of mass 100 kg starts from rest at the top of a frictionless hill, height 10 m above the ground. It descends, reaches a valley (height 0 m, speed $v_1$), then climbs a second hill to height 8 m (speed $v_2$). Find $v_1$ and $v_2$.

**Solution:**
- Total energy at top: $E = mgh_0 = 100 \times 9.8 \times 10 = 9800$ J
- At valley (h = 0): $E = \frac{1}{2}mv_1^2$
  - $9800 = \frac{1}{2} \times 100 \times v_1^2$
  - $v_1^2 = 196$
  - $v_1 = 14$ m/s
  
- At second hill (h = 8 m): $E = mgh_2 + \frac{1}{2}mv_2^2$
  - $9800 = 100 \times 9.8 \times 8 + \frac{1}{2} \times 100 \times v_2^2$
  - $9800 = 7840 + 50v_2^2$
  - $v_2^2 = 39.2$
  - $v_2 \approx 6.26$ m/s

**Key insight:** Energy conservation applies to any frictionless path. The shape of the track does not matter—only heights and speeds.

---

### Example 5: Power Calculation (Easy)
**Problem:** A motor lifts a 50 kg mass vertically at constant speed, rising 10 m in 5 seconds. What is the power output?

**Solution:**
- Work done: $W = mgh = 50 \times 9.8 \times 10 = 4900$ J
- Time: $\Delta t = 5$ s
- Power: $P = \frac{W}{\Delta t} = \frac{4900}{5} = 980$ W (about 1.3 horsepower)

**Key insight:** Power is work divided by time. Lifting twice as fast requires twice the power.

---

### Example 6: Instantaneous Power (Hard)
**Problem:** A 1500 kg car accelerates from rest along a level road. The engine provides a constant force of 4000 N. At the instant the car reaches 20 m/s, what is the instantaneous power?

**Solution:**
- Instantaneous power: $P = Fv \cos(0°) = 4000 \times 20 = 80,000$ W = 80 kW
- (Note: At 0 m/s, P = 0; at 20 m/s, P = 80 kW. Average power over acceleration depends on the motion profile.)

**Key insight:** Instantaneous power depends on both force and velocity. As a car accelerates with constant force, power increases linearly with speed.

---

## 4. Practice Problems

### Easy (5 problems, 1-2 steps)

**E1. [MC]** A 2 kg book is lifted vertically 1.5 m at constant velocity. How much work is done against gravity?  
**(A)** 15 J  
**(B)** 29.4 J  
**(C)** 3 J  
**(D)** 0 J  
**Correct:** (B) 29.4 J  
**Sketch:** $W = mgh = 2 \times 9.8 \times 1.5$

---

**E2. [INT]** A 4 kg block is pushed along a frictionless surface with a constant force of 10 N in the direction of motion. Over a distance of 3 m, how much work is done (in joules)?  
**Answer:** 30  
**Sketch:** $W = Fd = 10 \times 3$

---

**E3. [TF]** Kinetic energy is always positive, regardless of the direction of motion.  
**Correct:** TRUE  
**Sketch:** $KE = \frac{1}{2}mv^2$ depends on speed squared; direction does not affect the sign.

---

**E4. [MC]** A spring with spring constant 100 N/m is stretched 0.2 m. How much elastic potential energy is stored?  
**(A)** 2 J  
**(B)** 4 J  
**(C)** 20 J  
**(D)** 10 J  
**Correct:** (A) 2 J  
**Sketch:** $PE_s = \frac{1}{2}kx^2 = \frac{1}{2} \times 100 \times 0.04$

---

**E5. [INT]** If a motor does 500 J of work in 4 seconds, what is its average power (in watts)?  
**Answer:** 125  
**Sketch:** $P = W/\Delta t = 500/4$

---

### Medium (5 problems, 2-3 steps)

**M1. [MC]** A 3 kg block starts from rest and is accelerated by a net force of 12 N over a distance of 2 m on a frictionless surface. What is its final kinetic energy?  
**(A)** 6 J  
**(B)** 12 J  
**(C)** 24 J  
**(D)** 36 J  
**Correct:** (C) 24 J  
**Sketch:** $W_{\text{net}} = Fd = 12 \times 2 = 24$ J; by work-energy theorem, $\Delta KE = 24$ J.

---

**M2. [INT]** A ball of mass 0.5 kg is thrown upward with an initial speed of 20 m/s. Using energy conservation (no air resistance), at what height will its speed be 10 m/s? (Use $g = 10$ m/s².)  
**Answer:** 15  
**Sketch:** $\frac{1}{2}m v_i^2 = \frac{1}{2}m v_f^2 + mgh$; solve for h: $h = \frac{v_i^2 - v_f^2}{2g} = \frac{400-100}{20}$

---

**M3. [TF]** A force perpendicular to the direction of motion does zero work.  
**Correct:** TRUE  
**Sketch:** $W = Fd\cos(90°) = 0$. Example: centripetal force in circular motion.

---

**M4. [MC]** A 2 kg box slides down a frictionless 30° incline from rest. It descends a vertical height of 5 m. What is its speed at the bottom? (Use $g = 10$ m/s².)  
**(A)** 5 m/s  
**(B)** 10 m/s  
**(C)** $\sqrt{100}$ m/s = 10 m/s  
**(D)** 20 m/s  
**Correct:** (C) 10 m/s  
**Sketch:** $mgh = \frac{1}{2}mv^2$; $v = \sqrt{2gh} = \sqrt{2 \times 10 \times 5} = 10$ m/s. (Angle does not affect the result.)

---

**M5. [INT]** A 60 kg person climbs stairs to a height of 4 m in 8 seconds at constant speed. How much power do their muscles deliver? (Use $g = 10$ m/s².)  
**Answer:** 300  
**Sketch:** $W = mgh = 60 \times 10 \times 4 = 2400$ J; $P = 2400/8 = 300$ W

---

### Hard (5 problems, multi-concept)

**H1. [MC]** A 1.5 kg block on a horizontal surface is pushed by a force of 8 N at an angle of 30° above the horizontal. The block moves 4 m. Friction is negligible. How much work is done by the applied force?  
**(A)** 32 J  
**(B)** $32\cos(30°) \approx 27.7$ J  
**(C)** 48 J  
**(D)** $48\cos(30°) \approx 41.6$ J  
**Correct:** (B) ≈ 27.7 J  
**Sketch:** $W = Fd\cos\theta = 8 \times 4 \times \cos(30°) = 32 \times 0.866$

---

**H2. [INT]** A 0.8 kg ball falls from rest from a height of 20 m and bounces to a height of 12 m. How much mechanical energy is lost in the collision (in joules)? (Use $g = 10$ m/s².)  
**Answer:** 64  
**Sketch:** Initial PE: $mgh_1 = 0.8 \times 10 \times 20 = 160$ J; Final PE: $mgh_2 = 0.8 \times 10 \times 12 = 96$ J; Lost: $160 - 96 = 64$ J

---

**H3. [TF]** In a system where only conservative forces act, the total mechanical energy can change over time.  
**Correct:** FALSE  
**Sketch:** Conservative forces preserve mechanical energy. Only non-conservative forces (friction, air resistance) reduce it.

---

**H4. [MC]** A 2 kg block is launched horizontally along a rough table at 6 m/s. The coefficient of kinetic friction is 0.3. How far does it slide before stopping? (Use $g = 10$ m/s².)  
**(A)** 6 m  
**(B)** 5 m  
**(C)** 4 m  
**(D)** 3 m  
**Correct:** (A) 6 m  
**Sketch:** Initial KE: $\frac{1}{2} \times 2 \times 36 = 36$ J; Friction force: $f = \mu mg = 0.3 \times 2 \times 10 = 6$ N; Distance: $d = 36/6 = 6$ m.

---

**H5. [INT]** A 1200 kg car accelerates from 5 m/s to 20 m/s. A constant friction force of 500 N opposes motion. If the net work done on the car is 225 kJ, how far does it travel (in meters)?  
**Answer:** 300  
**Sketch:** $\Delta KE = \frac{1}{2}m(v_f^2 - v_i^2) = \frac{1}{2} \times 1200 \times (400-25) = 225,000$ J; $W_{\text{net}} = 225,000$ J matches given; $W_{\text{net}} = F_{\text{net}} \times d$, so $d = 225,000 / F_{\text{net}}$. From $W = F_{\text{applied}} - f$, we get $F_{\text{applied}} \times d - 500d = 225,000$, so $d = 300$ m (assuming constant applied force).

---

## 5. Competition Insight

### Insight 1: The Work-Energy Theorem Avoids Kinematics
In competition physics (Physics Olympiad, national exams), problems often involve complex or non-constant forces. Rather than integrate $F=ma$ to find acceleration and then use kinematic equations, the work-energy theorem provides a shortcut:

$$W_{\text{net}} = \Delta KE$$

This is particularly powerful when the force depends on position (e.g., springs, gravity on a curved path) or when only initial and final states matter, not the trajectory.

**Example insight:** A particle moved by a position-dependent force $F(x) = 3x^2$ over a distance from $x=1$ to $x=3$ undergoes work $W = \int_1^3 3x^2 \, dx = [x^3]_1^3 = 26$ J. The corresponding kinetic energy change is immediate; no need to solve the differential equation.

### Insight 2: Non-Conservative Forces and Energy Dissipation
In real systems, friction, air resistance, and collisions dissipate mechanical energy. A key competition-level skill is recognizing when mechanical energy is conserved (only conservative forces) versus when it is not (friction present). 

**Subtle point:** A student might see a ball bouncing and assume energy is conserved. In reality, the collision is inelastic; energy is lost to sound, deformation, and heat. The **coefficient of restitution** $e$ (defined as $e = \sqrt{h_{\text{rebound}}/h_{\text{drop}}}$) quantifies this loss. Advanced problem setters use this to test whether students conflate ideal and real collisions.

**Example:** A ball dropped from 20 m bounces to 5 m. Energy lost is $mg(20-5) = 15mg$. This energy went somewhere (not "disappeared")—a key insight for advanced problem solvers.

---

## 6. Diagram Descriptions

### Diagram 1: Work Done on an Incline
**Scenario:** A block on a 30° incline, with a force vector applied parallel to the incline (upward), a gravity vector (downward), and a normal force vector (perpendicular to surface).

**Details:**
- Draw a 30° incline as a right triangle, with the block as a small square on the hypotenuse.
- Gravity vector (labeled $\vec{F}_g$ or $\vec{W}$) points straight down from the block's center.
- Applied force vector (labeled $\vec{F}_{\text{applied}}$) points parallel to the incline, upward.
- Normal force vector (labeled $\vec{N}$) points perpendicular to the incline surface, away from the block.
- Show the displacement vector ($\Delta x$ or $\vec{d}$) along the incline, parallel to the applied force.
- Shade or annotate the angle between gravity and displacement to emphasize why only the vertical component ($mg\sin\theta$) does negative work.
- Add a note: "Work by gravity: $W_g = -mg \sin\theta \cdot d$ (negative, opposes motion)."

### Diagram 2: Energy Bar Chart (Roller Coaster)
**Scenario:** Three vertical bar charts, side by side, representing energy at three points on a frictionless roller coaster: top of first hill, bottom of valley, and top of second hill.

**Details:**
- Each bar chart has three stacked components (segments):
  - Bottom segment (red or solid): Gravitational PE
  - Middle segment (blue or hatch): Kinetic Energy
  - Top segment (optional): Any elastic PE (or leave blank if no springs)
- Label the bars with specific values. Example:
  - **Top of hill 1 (h=10m):** PE=100% (100 J), KE=0%
  - **Valley (h=0m):** PE=0%, KE=100% (100 J)
  - **Top of hill 2 (h=8m):** PE=80%, KE=20% (total still 100 J if frictionless)
- Draw a horizontal line across all three charts at the height of the total energy (showing energy is conserved).
- Add a note: "Total mechanical energy is constant in a frictionless system. Height trades for speed."

### Diagram 3: Spring Potential Energy Curves
**Scenario:** A graph of potential energy versus displacement (or deformation) for a spring.

**Details:**
- Draw a coordinate system with displacement $x$ (or $\Delta x$) on the horizontal axis, ranging from $-x_{\max}$ to $+x_{\max}$ (showing both compression and extension).
- Draw a vertical axis labeled "Potential Energy $PE_s$" ranging from 0 to some maximum.
- Plot the parabola $PE_s = \frac{1}{2}kx^2$, a symmetric U-shaped curve centered at $x=0$.
- Mark the minimum at $(0, 0)$, indicating no stored energy at the equilibrium position.
- Add horizontal dashed lines to show total mechanical energy $E_{\text{total}}$ for two scenarios (e.g., $E_1$ and $E_2$).
- Shade the regions where the block can move (below the energy line) versus where it is forbidden (above the energy line).
- Annotate two points on the curve corresponding to maximum displacement: where $PE_s = E_{\text{total}}$ and $KE = 0$.
- Add a note: "The parabolic shape reflects the quadratic dependence on $x$. Spring oscillations occur between the turning points."

---

## 7. Summary Table: When to Use Each Principle

| Situation | Best Tool | Why |
|-----------|-----------|-----|
| Constant force, straight path | $W = Fd$ | Direct application |
| Variable force, known function | $W = \int F \, dx$ | Integrate along path |
| Work and time given | $P = W/\Delta t$ | Simple definition |
| Force and velocity at instant | $P = Fv\cos\theta$ | Instantaneous rate |
| Initial and final speeds, forces complex | Work-energy theorem | Avoids solving for acceleration |
| Only gravity/springs, no friction | Energy conservation | Total $E = KE + PE = \text{const}$ |
| Friction present | Modified conservation | $E_i = E_f + Q_{\text{friction}}$ |
| Collisions, inelastic processes | Momentum + energy loss | Energy dissipated; momentum conserved |

---

## 8. Key Takeaways for G10 Students

1. **Work** connects forces to energy; it is the mechanism of energy transfer.
2. **Power** measures how fast energy is transferred—crucial for practical engineering.
3. **Kinetic energy** is energy of motion; it grows with the square of speed.
4. **Potential energy** is "stored" energy due to position or deformation—it is a choice of reference point, but differences are physical.
5. **Energy conservation** is one of the most powerful tools in physics. When friction is absent, mechanical energy is conserved; when friction acts, the lost mechanical energy becomes heat.
6. **The work-energy theorem** connects forces and motion without explicit acceleration—use it when forces are complex.
7. **Non-conservative forces** (friction, air resistance) dissipate energy and are the reason ideal systems diverge from reality.

---

## References & Sources

- **Young, Freedman, and Ford**, *University Physics with Modern Physics*, 14th ed. — Chapter 6–7 (Work, Energy, Power) and Chapter 9 (Potential Energy, Conservation).
- **Halliday, Resnick, and Walker**, *Fundamentals of Physics*, 10th ed. — Chapter 7 (Kinetic Energy, Work) and Chapter 8 (Potential Energy, Conservation).
- **International Physics Olympiad (IPhO)** archives — Problems from 2010–2022 involving energy in complex systems (elastic collisions, curved tracks, multi-body systems).
- **Physics Olympiad Problem Compendium** (Eggen & Skaslien) — Classical mechanics sections on energy and power.

