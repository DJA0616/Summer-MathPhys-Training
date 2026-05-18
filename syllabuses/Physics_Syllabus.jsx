import { SyllabusComposer } from "../project-template-files/block-kit.jsx";

// ═══════════════════════════════════════════════════════════════
// REFERENCE DATA — compiled by syllabus-researcher subagents.
// Keyed by topic title. Each topic: [{ category, items: [{title,source,note}] }]
// ═══════════════════════════════════════════════════════════════

const REFS = {
  "Graphical Addition of Vectors": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 3: Vectors", source: "Halliday, Resnick & Walker", note: "Geometric treatment of vector addition with diagrams." },
      { title: "University Physics, Ch. 1: Units and Vectors", source: "Young & Freedman", note: "Parallelogram and polygon methods with worked examples." } ] },
    { category: "Online Resources", items: [
      { title: "HyperPhysics: Vector Addition", source: "Georgia State University", note: "Interactive visual explanations with adjustable angles and magnitudes." },
      { title: "Vectors and Projectiles", source: "The Physics Classroom", note: "Step-by-step tutorials on head-to-tail addition and resultants." } ] },
    { category: "Video Lectures", items: [
      { title: "Vector Addition", source: "Khan Academy (Physics)", note: "Animated explanations of graphical vector addition." },
      { title: "MIT 8.01: Vectors and Kinematics", source: "MIT OpenCourseWare", note: "University-level treatment of vector geometry." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IPhO Training Material: Vectors", source: "IPhO Archive", note: "Competition-level vector problems emphasizing geometric insight." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 1", source: "I.E. Irodov", note: "Challenging problem set on vector geometry." },
      { title: "Physics Olympiad Problems Archive", source: "USAPhO & IPhO", note: "Past competition problems on vector graphical addition." } ] } ],
  "Analytical Addition of Vectors": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 3: Component Method", source: "Halliday, Resnick & Walker", note: "Component decomposition, unit vectors, analytic addition." },
      { title: "College Physics, Ch. 2: Kinematics and Vectors", source: "Serway & Vuille", note: "Cartesian components and vector algebra with applications." } ] },
    { category: "Online Resources", items: [
      { title: "HyperPhysics: Vector Components and Resolution", source: "Georgia State University", note: "Interactive tool for decomposing vectors with angle controls." },
      { title: "PhET: Vector Addition", source: "University of Colorado Boulder", note: "Interactive simulation of component addition and resultants." } ] },
    { category: "Video Lectures", items: [
      { title: "Vector Components and Magnitude", source: "Khan Academy", note: "Animated introduction to component decomposition." },
      { title: "Vector Addition (Analytical)", source: "Professor Dave Explains, YouTube", note: "Intuitive explanation of the component method." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "F=ma Contest: Vector Problems", source: "AAPT", note: "High school competition problems on rapid analytic vector calculations." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 1", source: "I.E. Irodov", note: "Rigorous problems on component addition and vector algebra." },
      { title: "Berkeley Physics Problems with Solutions", source: "UC Berkeley", note: "Advanced problem set with detailed solutions." } ] } ],
  "Motion Graphs": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 2: Straight-Line Motion", source: "Halliday, Resnick & Walker", note: "x-t, v-t, a-t graphs with slope and area interpretations." },
      { title: "University Physics, Ch. 2: Straight-Line Motion", source: "Young & Freedman", note: "Comprehensive coverage of kinematic graphs and meaning." } ] },
    { category: "Online Resources", items: [
      { title: "HyperPhysics: Motion Graphs", source: "Georgia State University", note: "Interactive tools relating position, velocity, acceleration." },
      { title: "Kinematic Graphs", source: "The Physics Classroom", note: "Tutorials on reading and interpreting motion graphs." } ] },
    { category: "Video Lectures", items: [
      { title: "Motion Graphs", source: "Khan Academy (Physics)", note: "Step-by-step explanations of position-time and velocity-time graphs." },
      { title: "Kinematics", source: "Crash Course Physics, YouTube", note: "Engaging visual introduction to motion graphs." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "F=ma: Kinematics and Motion Graph Problems", source: "AAPT", note: "Competition problems requiring graph interpretation." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 1: Kinematics", source: "I.E. Irodov", note: "Challenging problems with non-uniform acceleration." },
      { title: "A-Level Physics Problems: Kinematics", source: "AQA, Edexcel, OCR", note: "Exam-style problems on reading and constructing motion graphs." } ] } ],
  "Relative Velocity": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 4: Two- and Three-Dimensional Motion", source: "Halliday, Resnick & Walker", note: "Relative velocity vectors and Galilean transformations." },
      { title: "University Physics, Ch. 3: Two- or Three-Dimensional Motion", source: "Young & Freedman", note: "Relative velocity with river-crossing and airplane problems." } ] },
    { category: "Online Resources", items: [
      { title: "HyperPhysics: Relative Velocity", source: "Georgia State University", note: "Interactive simulations in boat-river and airplane-wind scenarios." },
      { title: "Relative Velocity", source: "The Physics Classroom", note: "Conceptual explanations and worked examples." } ] },
    { category: "Video Lectures", items: [
      { title: "Relative Velocity", source: "Khan Academy", note: "Animated explanation of velocity addition between frames." },
      { title: "Relative Velocity", source: "Professor Dave Explains, YouTube", note: "Intuitive introduction with classic examples." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "USAPhO: Relative Motion Problems", source: "USAPhO Archive", note: "Competition-level problems in complex reference frames." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 1", source: "I.E. Irodov", note: "Advanced problems with multiple moving reference frames." },
      { title: "Berkeley Physics Problems with Solutions", source: "UC Berkeley", note: "Detailed solutions to relative velocity problems in 2D and 3D." } ] } ],
  "Newton's Laws": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 5–6: Force and Motion", source: "Halliday, Resnick & Walker", note: "Foundational treatment of the three laws with experimental motivation." },
      { title: "University Physics, Ch. 4–5: Forces and Motion", source: "Young & Freedman", note: "Emphasis on inertial frames and free-body diagrams." } ] },
    { category: "Online Resources", items: [
      { title: "HyperPhysics: Newton's Laws", source: "Georgia State University", note: "Interactive visualizations of force, mass, acceleration." },
      { title: "Newton's Laws", source: "The Physics Classroom", note: "Conceptual tutorials on inertia, force, action-reaction." } ] },
    { category: "Video Lectures", items: [
      { title: "Newton's Laws of Motion", source: "Khan Academy", note: "Clear explanations of all three laws with examples." },
      { title: "MIT 8.01: Forces and Motion", source: "MIT OpenCourseWare", note: "University-level treatment with mathematical rigor." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "F=ma: Newton's Laws Problems", source: "AAPT", note: "Competition problems applying all three laws." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 2: Newton's Laws", source: "I.E. Irodov", note: "Rigorous problem set across diverse scenarios." },
      { title: "International Physics Olympiad Archives", source: "IPhO", note: "Past problems emphasizing deep understanding of Newton's laws." } ] } ],
  "Applications of Newton's Laws": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 6: Force and Motion (Applications)", source: "Halliday, Resnick & Walker", note: "Applications to friction, tension, pulleys, inclined planes." },
      { title: "University Physics, Ch. 5–6: Applications of Newton's Laws", source: "Young & Freedman", note: "Friction models, normal force, and constraint forces." } ] },
    { category: "Online Resources", items: [
      { title: "HyperPhysics: Applications of Newton's Laws", source: "Georgia State University", note: "Interactive tools for friction, tension, inclined planes." },
      { title: "Newton's Laws — Applications", source: "The Physics Classroom", note: "Tutorials on friction, normal force, tension, equilibrium." } ] },
    { category: "Video Lectures", items: [
      { title: "Applications of Newton's Laws", source: "Khan Academy", note: "Friction, tension, inclined planes with free-body diagrams." },
      { title: "MIT 8.01: Applications and Problem Solving", source: "MIT OpenCourseWare", note: "University-level problem-solving with constraint forces." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IPhO: Applications of Newton's Laws", source: "International Physics Olympiad Archive", note: "Problems on friction, tension, and complex force scenarios." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 2", source: "I.E. Irodov", note: "Advanced problems on friction, pulleys, multi-body systems." },
      { title: "USAPhO Past Problems", source: "USAPhO Archive", note: "Olympiad problems emphasizing applications of Newton's laws." } ] } ],
  "Momentum and Impulse": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 9: Center of Mass and Momentum", source: "Halliday, Resnick & Walker", note: "Momentum, impulse-momentum theorem, conservation laws." },
      { title: "University Physics, Ch. 8: Momentum, Impulse, and Collisions", source: "Young & Freedman", note: "Collision analysis and momentum conservation." } ] },
    { category: "Online Resources", items: [
      { title: "HyperPhysics: Momentum and Collisions", source: "Georgia State University", note: "Visualizations of elastic and inelastic collisions." },
      { title: "Momentum and Collisions", source: "The Physics Classroom", note: "Tutorials on impulse, conservation, and collision types." } ] },
    { category: "Video Lectures", items: [
      { title: "Momentum and Impulse", source: "Khan Academy", note: "Momentum conservation and the impulse-momentum theorem." },
      { title: "Momentum and Collisions", source: "Crash Course Physics, YouTube", note: "Engaging visual introduction to momentum and impulse." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "F=ma: Momentum and Collisions Problems", source: "AAPT", note: "Competition problems on momentum conservation." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 3", source: "I.E. Irodov", note: "Rigorous problems on elastic, inelastic, and explosion scenarios." },
      { title: "IPhO Archives: Collision Problems", source: "International Physics Olympiad", note: "Competition problems on momentum conservation in complex systems." } ] } ],
  "Energy": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 7: Kinetic Energy and Work", source: "Halliday, Resnick & Walker", note: "Work, kinetic and potential energy, conservation." },
      { title: "University Physics, Ch. 7–8: Work and Energy", source: "Young & Freedman", note: "Work-energy theorem, conservative forces, energy conservation." } ] },
    { category: "Online Resources", items: [
      { title: "HyperPhysics: Energy and Work", source: "Georgia State University", note: "Interactive tools for work, kinetic/potential energy, power." },
      { title: "PhET: Energy Skate Park", source: "University of Colorado Boulder", note: "Simulation of potential/kinetic energy conversion with graphs." } ] },
    { category: "Video Lectures", items: [
      { title: "Work and Energy", source: "Khan Academy", note: "Work, kinetic and potential energy, conservation." },
      { title: "MIT 8.01: Energy and Work", source: "MIT OpenCourseWare", note: "University-level treatment of energy conservation and power." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IPhO: Energy Conservation Problems", source: "International Physics Olympiad Archive", note: "Competition problems on energy conservation in complex systems." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 4: Work and Energy", source: "I.E. Irodov", note: "Advanced problems on work-energy calculations." },
      { title: "USAPhO Past Problems: Energy", source: "USAPhO Archive", note: "Olympiad problems on energy in mechanics and oscillations." } ] } ],
  "Rotational Motion": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 10: Rotation", source: "Halliday, Resnick & Walker", note: "Rotational kinematics, torque, moment of inertia, angular momentum." },
      { title: "University Physics, Ch. 9–10: Rotation of Rigid Bodies", source: "Young & Freedman", note: "Rotational dynamics with rolling and gyroscope applications." } ] },
    { category: "Online Resources", items: [
      { title: "HyperPhysics: Rotational Motion", source: "Georgia State University", note: "Tools for angular velocity, torque, moment of inertia, energy." },
      { title: "Rotational Motion", source: "The Physics Classroom", note: "Tutorials on rotational kinematics and dynamics." } ] },
    { category: "Video Lectures", items: [
      { title: "Rotation of Rigid Bodies", source: "Khan Academy", note: "Angular motion, torque, moment of inertia, angular momentum." },
      { title: "MIT 8.01: Rotational Dynamics", source: "MIT OpenCourseWare", note: "University-level treatment of rigid body rotation." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IPhO: Rotational Motion Problems", source: "International Physics Olympiad Archive", note: "Problems on torque, angular momentum, coupled systems." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 5: Rotational Motion", source: "I.E. Irodov", note: "Rigorous problems on moment of inertia, torque, dynamics." },
      { title: "USAPhO: Rotational Mechanics", source: "USAPhO Archive", note: "Olympiad problems on rolling, gyroscopes, rotational energy." } ] } ],
  "Uniform Circular Motion": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 4: Circular Motion", source: "Halliday, Resnick & Walker", note: "Uniform circular motion, centripetal acceleration and force." },
      { title: "University Physics, Ch. 3: Motion in a Circle", source: "Young & Freedman", note: "Applications to planetary motion and banked curves." } ] },
    { category: "Online Resources", items: [
      { title: "HyperPhysics: Circular Motion", source: "Georgia State University", note: "Simulations of centripetal acceleration, force, period." },
      { title: "PhET: Centripetal Force", source: "University of Colorado Boulder", note: "Explore the relationship between force, speed, and radius." } ] },
    { category: "Video Lectures", items: [
      { title: "Circular Motion and Gravitation", source: "Khan Academy", note: "Centripetal acceleration, period, frequency." },
      { title: "Circular Motion", source: "Professor Dave Explains, YouTube", note: "Intuitive introduction to centripetal force." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "F=ma: Circular Motion Problems", source: "AAPT", note: "Competition problems on centripetal force and orbital motion." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 1: Circular Motion", source: "I.E. Irodov", note: "Advanced problems with complex constraints." },
      { title: "IPhO: Circular Motion and Orbital Problems", source: "International Physics Olympiad Archive", note: "Problems on circular orbits and rotating frames." } ] } ],
  "Gravitation": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 13: Gravitation", source: "Halliday, Resnick & Walker", note: "Newton's law of gravitation, orbital mechanics, potential." },
      { title: "University Physics, Ch. 12: Gravitation", source: "Young & Freedman", note: "Gravitational fields, Kepler's laws, orbital energy." },
      { title: "Classical Mechanics, Ch. 2: Central Force Motion", source: "Goldstein", note: "Advanced treatment of gravitational force and orbital dynamics." } ] },
    { category: "Online Resources", items: [
      { title: "Gravitation and Orbital Mechanics", source: "HyperPhysics (Georgia State University)", note: "Diagrams for gravitational force, orbital and escape velocity." },
      { title: "Gravity Basics and Orbits", source: "Khan Academy", note: "Video lessons on gravitation and planetary motion." } ] },
    { category: "Video Lectures", items: [
      { title: "MIT 8.01: Classical Mechanics, Lectures 11–14", source: "MIT OpenCourseWare (Walter Lewin)", note: "In-depth lectures on gravitation and orbital mechanics." },
      { title: "Gravitation: Crash Course Physics #26–27", source: "CrashCourse, YouTube", note: "Accessible explanations of Newton's law and orbits." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IPhO Problems: Gravitation & Orbits", source: "IPhO Archive (1967–present)", note: "Problems on gravitational fields, orbits, tidal forces." },
      { title: "USAPhO: Gravitation Problems", source: "USA Physics Olympiad Archive", note: "Problems testing deep understanding of gravitational motion." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 1.8: Gravitation", source: "I.E. Irodov", note: "Challenging problems on gravitational force, orbits, energy." },
      { title: "200 Puzzling Physics Problems", source: "Gnädig, Honyek & Riley", note: "Thought-provoking problems requiring insight beyond formulas." } ] } ],
  "Uniformly Accelerated Motion": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 2–3: Motion Along a Line", source: "Halliday, Resnick & Walker", note: "Kinematics, constant acceleration, free fall." },
      { title: "University Physics, Ch. 2: Straight-Line Motion", source: "Young & Freedman", note: "Kinematic equations, average and instantaneous acceleration." },
      { title: "Physics for Scientists and Engineers, Ch. 2", source: "Serway & Jewett", note: "Emphasis on graphical analysis and problem-solving." } ] },
    { category: "Online Resources", items: [
      { title: "Kinematic Equations Interactive Simulator", source: "PhET (University of Colorado)", note: "Visualize position, velocity, and acceleration graphs in real time." },
      { title: "The Physics Classroom: Kinematics", source: "The Physics Classroom", note: "Lessons on acceleration, kinematic equations, free fall." } ] },
    { category: "Video Lectures", items: [
      { title: "MIT 8.01: Classical Mechanics, Lectures 1–3", source: "MIT OpenCourseWare (Walter Lewin)", note: "Rigorous introduction to kinematics." },
      { title: "Motion & Forces: Crash Course Physics #3–5", source: "CrashCourse, YouTube", note: "Acceleration, Newton's laws, kinematic equations." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "F=ma Exam: Kinematics Problems", source: "AAPT", note: "Multiple-choice kinematics problems at olympiad level." },
      { title: "IPhO Problems: One-Dimensional Motion", source: "International Physics Olympiad Archive", note: "Kinematics problems combining multiple concepts." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 1.1–1.2: Kinematics", source: "I.E. Irodov", note: "Problems with uniform acceleration, relative motion, graphs." },
      { title: "200 Puzzling Physics Problems", source: "Gnädig, Honyek & Riley", note: "Non-standard kinematics problems building physical intuition." } ] } ],
  "Introduction to Waves": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 16: Waves I", source: "Halliday, Resnick & Walker", note: "Wave properties, wave equation, superposition, energy transport." },
      { title: "University Physics, Ch. 15: Mechanical Waves", source: "Young & Freedman", note: "Wave motion, sinusoidal waves, interference." },
      { title: "Physics for Scientists and Engineers, Ch. 13", source: "Serway & Jewett", note: "Wave properties with mathematical formulation." } ] },
    { category: "Online Resources", items: [
      { title: "Wave on a String Simulation", source: "PhET (University of Colorado)", note: "Explore amplitude, frequency, wavelength, superposition." },
      { title: "HyperPhysics: Waves and Sound", source: "HyperPhysics (Georgia State University)", note: "Concept maps illustrating wave properties and behavior." } ] },
    { category: "Video Lectures", items: [
      { title: "MIT 8.03: Vibrations and Waves, Lectures 1–5", source: "MIT OpenCourseWare", note: "University-level treatment of wave mechanics." },
      { title: "Waves: Crash Course Physics #16–17", source: "CrashCourse, YouTube", note: "Wave properties, frequency, wavelength, behavior." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IPhO Problems: Wave Motion and Vibrations", source: "International Physics Olympiad Archive", note: "Problems on wave propagation, interference, resonance." },
      { title: "USAPhO: Wave and Sound Problems", source: "USA Physics Olympiad Archive", note: "Olympiad problems on waves and oscillations." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 2.1–2.3: Waves", source: "I.E. Irodov", note: "Problems on wave motion, equations, phenomena." },
      { title: "200 Puzzling Physics Problems", source: "Gnädig, Honyek & Riley", note: "Creative wave problems requiring deeper reasoning." } ] } ],
  "Introduction to Simple Harmonic Motion": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 15: Oscillations", source: "Halliday, Resnick & Walker", note: "SHM, energy in oscillations, damped/driven oscillations." },
      { title: "University Physics, Ch. 14: Oscillations", source: "Young & Freedman", note: "SHM with energy methods and phase analysis." },
      { title: "Physics for Scientists and Engineers, Ch. 12", source: "Serway & Jewett", note: "Differential equations and energy conservation." } ] },
    { category: "Online Resources", items: [
      { title: "Masses and Springs Simulation", source: "PhET (University of Colorado)", note: "Explore SHM with springs; adjust mass and spring constant." },
      { title: "Pendulum Lab", source: "PhET (University of Colorado)", note: "Investigate period dependence on length and angle." } ] },
    { category: "Video Lectures", items: [
      { title: "MIT 8.03: Vibrations and Waves, Lectures 6–10", source: "MIT OpenCourseWare", note: "Harmonic motion, coupled oscillators, resonance." },
      { title: "Simple Harmonic Motion: Crash Course Physics #15", source: "CrashCourse, YouTube", note: "SHM with energy and graphical representations." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IPhO Problems: Oscillations and Harmonic Motion", source: "International Physics Olympiad Archive", note: "Problems on SHM, coupled oscillators, resonance." },
      { title: "F=ma Exam: Oscillations Problems", source: "AAPT", note: "Problems on SHM at secondary level." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 3: Oscillations", source: "I.E. Irodov", note: "Challenging oscillation problems from basic to advanced." },
      { title: "200 Puzzling Physics Problems", source: "Gnädig, Honyek & Riley", note: "Non-standard SHM problems building physical intuition." } ] } ],
  "Light as an Electromagnetic Wave": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 33–34: EM Waves and Light", source: "Halliday, Resnick & Walker", note: "EM wave properties, speed of light, reflection, refraction." },
      { title: "University Physics, Ch. 31–32: EM Waves and Optics", source: "Young & Freedman", note: "EM waves, reflection, refraction, Snell's law." },
      { title: "Optics, Ch. 1–2: Nature of Light", source: "Eugene Hecht", note: "Light as electromagnetic radiation with historical context." } ] },
    { category: "Online Resources", items: [
      { title: "Bending Light Simulation", source: "PhET (University of Colorado)", note: "Explore reflection and refraction; visualize Snell's law." },
      { title: "Geometric Optics: Mirrors and Lenses", source: "The Physics Classroom", note: "Reflection, refraction, and image formation with diagrams." } ] },
    { category: "Video Lectures", items: [
      { title: "MIT 8.02: Electricity and Magnetism, Lectures 30–34", source: "MIT OpenCourseWare", note: "Electromagnetic waves and light from first principles." },
      { title: "Light Waves: Crash Course Physics #39", source: "CrashCourse, YouTube", note: "Light as an electromagnetic wave with modern context." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IPhO Problems: Optics and Light", source: "International Physics Olympiad Archive", note: "Problems on reflection, refraction, diffraction, interference." },
      { title: "USAPhO: Optics and Light Problems", source: "USA Physics Olympiad Archive", note: "Problems on geometric and wave optics." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 5: Optics", source: "I.E. Irodov", note: "Optics problems from basic reflection to wave phenomena." },
      { title: "200 Puzzling Physics Problems", source: "Gnädig, Honyek & Riley", note: "Creative optics problems requiring insight." } ] } ],
  "Mirror and Lens Equation": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 34: Images and Optical Instruments", source: "Halliday, Resnick & Walker", note: "Mirror and lens equations with image formation analysis." },
      { title: "University Physics, Ch. 34: Geometric Optics", source: "Young & Freedman", note: "Spherical mirrors and lenses with sign conventions." },
      { title: "Optics, Ch. 3–4: Geometric Optics", source: "Eugene Hecht", note: "Rigorous mathematical treatment of mirror/lens equations." } ] },
    { category: "Online Resources", items: [
      { title: "Geometric Optics Simulation", source: "PhET (University of Colorado)", note: "Visualize object/image relationships with mirror and lens equations." },
      { title: "Mirrors and Lenses", source: "The Physics Classroom", note: "Mirror equation, lens equation, image characteristics." } ] },
    { category: "Video Lectures", items: [
      { title: "MIT 8.02: Geometric Optics Lectures", source: "MIT OpenCourseWare", note: "Derivation and application of mirror and lens equations." },
      { title: "Mirrors and Lenses: Crash Course Physics #40", source: "CrashCourse, YouTube", note: "Mirror/lens equations and ray diagrams." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IPhO Problems: Geometric Optics", source: "International Physics Olympiad Archive", note: "Problems on mirror/lens systems and optical instruments." },
      { title: "USAPhO: Optics and Lenses Problems", source: "USA Physics Olympiad Archive", note: "Problems combining mirror/lens equations with other concepts." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 5.2: Lenses and Mirrors", source: "I.E. Irodov", note: "Problems on single and combined optical systems." },
      { title: "200 Puzzling Physics Problems", source: "Gnädig, Honyek & Riley", note: "Non-standard problems on mirror/lens equations." } ] } ],
  "Electrostatic Charges and Charge Transfer": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 21: Coulomb's Law and Electric Fields", source: "Halliday, Resnick & Walker", note: "Electric charge, Coulomb's law, electric field superposition." },
      { title: "University Physics, Ch. 21–22: Electric Charge and Field", source: "Young & Freedman", note: "Charge interactions, Coulomb's law, charge distributions." },
      { title: "Introduction to Electrodynamics, Ch. 2: Electrostatics", source: "David J. Griffiths", note: "Rigorous treatment of Coulomb's law with vector calculus." } ] },
    { category: "Online Resources", items: [
      { title: "Charges and Fields Simulation", source: "PhET (University of Colorado)", note: "Visualize electric fields from point charges and distributions." },
      { title: "HyperPhysics: Electrostatics", source: "HyperPhysics (Georgia State University)", note: "Concept maps for Coulomb's law and electric fields." } ] },
    { category: "Video Lectures", items: [
      { title: "MIT 8.02: Electricity and Magnetism, Lectures 1–5", source: "MIT OpenCourseWare (Walter Lewin)", note: "Introduction to electrostatics from first principles." },
      { title: "Electrostatics: Crash Course Physics #25", source: "CrashCourse, YouTube", note: "Electric charge and Coulomb's law." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IPhO Problems: Electrostatics", source: "International Physics Olympiad Archive", note: "Problems on Coulomb's law, fields, charge distributions." },
      { title: "USAPhO: Electrostatics Problems", source: "USA Physics Olympiad Archive", note: "Problems on charge interactions and fields." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 4.1: Electrostatics", source: "I.E. Irodov", note: "Problems on Coulomb's law, fields, charge configurations." },
      { title: "200 Puzzling Physics Problems", source: "Gnädig, Honyek & Riley", note: "Creative electrostatics problems building intuition." } ] } ],
  "Electric Potential and Potential Energy": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 24: Electric Potential", source: "Halliday, Resnick & Walker", note: "Electric potential, potential difference, work-energy relations." },
      { title: "University Physics, Ch. 23: Electric Potential", source: "Young & Freedman", note: "Potential, equipotentials, potential energy with applications." },
      { title: "Introduction to Electrodynamics, Ch. 2: Electrostatics", source: "David J. Griffiths", note: "Rigorous treatment of potential and energy relationships." } ] },
    { category: "Online Resources", items: [
      { title: "Charges and Fields (Potential)", source: "PhET (University of Colorado)", note: "Visualize potential energy and equipotential surfaces." },
      { title: "HyperPhysics: Electric Potential", source: "HyperPhysics (Georgia State University)", note: "Concept maps for potential and energy conservation." } ] },
    { category: "Video Lectures", items: [
      { title: "MIT 8.02: Electricity and Magnetism, Lectures 6–8", source: "MIT OpenCourseWare (Walter Lewin)", note: "Electric potential and energy conservation." },
      { title: "Electric Potential: Crash Course Physics #27", source: "CrashCourse, YouTube", note: "Electric potential and potential energy." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IPhO Problems: Electric Potential and Energy", source: "International Physics Olympiad Archive", note: "Problems on potential, energy, and capacitors." },
      { title: "USAPhO: Electric Potential Problems", source: "USA Physics Olympiad Archive", note: "Problems on potential energy and work in fields." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 4.2: Electric Potential", source: "I.E. Irodov", note: "Problems on potential, energy, capacitor systems." },
      { title: "200 Puzzling Physics Problems", source: "Gnädig, Honyek & Riley", note: "Non-standard problems on potential concepts." } ] } ],
  "Magnetic Materials": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 28–29: Magnetic Fields and Forces", source: "Halliday, Resnick & Walker", note: "Magnetic fields, force on charges and currents, Lorentz force." },
      { title: "University Physics, Ch. 27–28: Magnetic Field and Forces", source: "Young & Freedman", note: "Magnetic fields, forces on conductors, magnetic torque." },
      { title: "Introduction to Electrodynamics, Ch. 5: Magnetostatics", source: "David J. Griffiths", note: "Rigorous treatment of magnetic fields and materials." } ] },
    { category: "Online Resources", items: [
      { title: "Magnets and Electromagnets Simulation", source: "PhET (University of Colorado)", note: "Explore field patterns around magnets and current-carrying conductors." },
      { title: "HyperPhysics: Magnetism", source: "HyperPhysics (Georgia State University)", note: "Concept maps for magnetic fields, forces, magnetization." } ] },
    { category: "Video Lectures", items: [
      { title: "MIT 8.02: Electricity and Magnetism, Lectures 13–17", source: "MIT OpenCourseWare (Walter Lewin)", note: "Magnetic fields and forces on moving charges." },
      { title: "Magnetism: Crash Course Physics #32", source: "CrashCourse, YouTube", note: "Magnetic fields and magnetic forces." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IPhO Problems: Magnetism and Magnetic Materials", source: "International Physics Olympiad Archive", note: "Problems on magnetic fields, forces, material properties." },
      { title: "USAPhO: Magnetism Problems", source: "USA Physics Olympiad Archive", note: "Problems on magnetic fields and forces." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 4.3: Magnetism", source: "I.E. Irodov", note: "Problems on magnetic fields, forces, magnetization." },
      { title: "200 Puzzling Physics Problems", source: "Gnädig, Honyek & Riley", note: "Creative magnetism problems on field and force concepts." } ] } ],
  "Motion of a Charge in a Magnetic Field": [
    { category: "Textbooks", items: [
      { title: "Fundamentals of Physics, Ch. 28: Force on Moving Charges", source: "Halliday, Resnick & Walker", note: "Lorentz force, circular and cyclotron motion." },
      { title: "University Physics, Ch. 27: Magnetic Force on Moving Charges", source: "Young & Freedman", note: "Charged-particle motion, cyclotron, mass spectrometer." },
      { title: "Introduction to Electrodynamics, Ch. 7: Electrodynamics", source: "David J. Griffiths", note: "Faraday's law, Lenz's law, and electromagnetic induction." } ] },
    { category: "Online Resources", items: [
      { title: "Faraday's Law Simulation", source: "PhET (University of Colorado)", note: "Visualize induction, flux change, and induced current." },
      { title: "HyperPhysics: Charged Particle Motion", source: "HyperPhysics (Georgia State University)", note: "Concept maps for Lorentz force and particle trajectories." } ] },
    { category: "Video Lectures", items: [
      { title: "MIT 8.02: Electricity and Magnetism, Lectures 14–16", source: "MIT OpenCourseWare (Walter Lewin)", note: "Particle motion in magnetic fields and induction." },
      { title: "Charged Particles in Magnetic Fields: Crash Course #33", source: "CrashCourse, YouTube", note: "Circular and cyclotron motion." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IPhO Problems: Charged Particle Motion in Fields", source: "International Physics Olympiad Archive", note: "Problems on trajectories, cyclotrons, induction." },
      { title: "USAPhO: Charged Particle Motion", source: "USA Physics Olympiad Archive", note: "Problems on trajectories and electromagnetic interactions." } ] },
    { category: "Problem Sources", items: [
      { title: "Problems in General Physics, Ch. 4.4: Motion in EM Fields", source: "I.E. Irodov", note: "Challenging problems on trajectories and field interactions." },
      { title: "200 Puzzling Physics Problems", source: "Gnädig, Honyek & Riley", note: "Non-standard problems on field-particle interactions." } ] } ],
};

// ═══════════════════════════════════════════════════════════════
// CURRICULUM — major topics with their subtopics, in study order.
// ═══════════════════════════════════════════════════════════════

const PARTS = [
  { title: "Graphical Addition of Vectors", topics: [
    "Parallelogram Method of Adding Vectors",
    "Polygon Method of Adding Vectors" ] },
  { title: "Analytical Addition of Vectors", topics: [
    "Resolving a Vector Into Components",
    "Component Method of Adding Vectors" ] },
  { title: "Motion Graphs", topics: [
    "Position-Time Graphs",
    "Velocity-Time Graphs",
    "Acceleration-Time Graphs",
    "Area Under Motion Graphs" ] },
  { title: "Relative Velocity", topics: [
    "Relative Velocity and Reference Frames",
    "Relative Velocity in One and Two Dimensions" ] },
  { title: "Newton's Laws", topics: [
    "Newton's First Law of Motion",
    "Newton's Second Law of Motion",
    "Newton's Third Law of Motion" ] },
  { title: "Applications of Newton's Laws", topics: [
    "Gravitational Force",
    "Normal Force and Apparent Weight",
    "Static and Kinetic Friction",
    "Tension and Atwood's Machine",
    "Inclined Plane" ] },
  { title: "Momentum and Impulse", topics: [
    "Momentum",
    "Impulse",
    "Impulse-Momentum Theorem",
    "Conservation of Momentum",
    "Elastic and Inelastic Collisions" ],
    links: [
      { label: "Lecture · Momentum", href: "learning-guides/G10_Momentum_L01.html", kind: "guide" },
      { label: "Problem Set · Momentum", href: "learning-guides/G10_Momentum_PS01.html", kind: "probset" } ] },
  { title: "Energy", topics: [
    "Work and Power",
    "Kinetic Energy and the Work-Energy Theorem",
    "Gravitational and Elastic Potential Energy",
    "Conservation of Mechanical Energy" ],
    links: [
      { label: "Lecture · Energy", href: "learning-guides/G10_Energy_L01.html", kind: "guide" },
      { label: "Problem Set · Energy", href: "learning-guides/G10_Energy_PS01.html", kind: "probset" } ] },
  { title: "Rotational Motion", topics: [
    "Rotational Kinematic Quantities",
    "Newton's Second Law for Rotational Motion",
    "Torque and Equilibrium",
    "Rotational Kinetic Energy",
    "Angular Momentum" ],
    links: [
      { label: "Lecture · Rotation", href: "learning-guides/G10_Rotation_L01.html", kind: "guide" },
      { label: "Problem Set · Rotation", href: "learning-guides/G10_Rotation_PS01.html", kind: "probset" } ] },
  { title: "Uniform Circular Motion", topics: [
    "Centripetal Acceleration",
    "Centripetal Force",
    "Horizontal Circular Motion",
    "Vertical Circular Motion",
    "Banked Curves" ],
    links: [
      { label: "Lecture · Circular Motion", href: "learning-guides/G10_CircularMotion_L01.html", kind: "guide" },
      { label: "Problem Set · Circular Motion", href: "learning-guides/G10_CircularMotion_PS01.html", kind: "probset" } ] },
  { title: "Gravitation", topics: [
    "Universal Law of Gravitation",
    "Gravitational Field",
    "Kepler's Laws of Planetary Motion",
    "Satellites in Circular Orbits" ] },
  { title: "Uniformly Accelerated Motion", topics: [
    "Kinematic Equations for Uniformly Accelerated Motion",
    "Uniformly Accelerated 1D Motion",
    "Uniformly Accelerated 2D Motion",
    "Uniformly Accelerated Rotational Motion" ] },
  { title: "Introduction to Waves", topics: [
    "Wave Intensity",
    "Wave Speed",
    "The Wave Equation",
    "Wave Properties",
    "Superposition of Waves" ],
    links: [
      { label: "Lecture · Waves", href: "learning-guides/G10_Waves_L01.html", kind: "guide" } ] },
  { title: "Introduction to Simple Harmonic Motion", topics: [
    "Motion in Simple Harmonic Systems",
    "Energy and Simple Harmonic Motion",
    "Sinusoidal Nature of Simple Harmonic Motion",
    "Period of a Simple Pendulum",
    "Sound as a Wave",
    "Wave and Musical Properties",
    "Sound Reflection",
    "Sound Refraction and Diffraction",
    "The Doppler Effect" ],
    links: [
      { label: "Lecture · SHM", href: "learning-guides/G10_SHM_L01.html", kind: "guide" },
      { label: "Problem Set · SHM", href: "learning-guides/G10_SHM_PS01.html", kind: "probset" } ] },
  { title: "Light as an Electromagnetic Wave", topics: [
    "Law of Reflection",
    "Snell's Law of Refraction",
    "Total Internal Reflection",
    "Apparent Depth",
    "Introduction to Mirrors",
    "Concave and Convex Mirrors" ],
    links: [
      { label: "Lecture · Optics", href: "learning-guides/G10_Optics_L01.html", kind: "guide" },
      { label: "Problem Set · Optics", href: "learning-guides/G10_Optics_PS01.html", kind: "probset" } ] },
  { title: "Mirror and Lens Equation", topics: [
    "The Mirror Equation",
    "Introduction to Lenses",
    "Image Formation by Converging Lenses",
    "Image Formation by Diverging Lenses",
    "Concave and Convex Lenses",
    "The Thin Lens Equation" ],
    links: [
      { label: "Lecture · Optics", href: "learning-guides/G10_Optics_L01.html", kind: "guide" },
      { label: "Problem Set · Optics", href: "learning-guides/G10_Optics_PS01.html", kind: "probset" } ] },
  { title: "Electrostatic Charges and Charge Transfer", topics: [
    "Coulomb's Law",
    "Electric Field",
    "Vector Summation of Electric Fields" ],
    links: [
      { label: "Lecture · Electrostatics", href: "learning-guides/G10_Electrostatics_L01.html", kind: "guide" },
      { label: "Problem Set · Electrostatics", href: "learning-guides/G10_Electrostatics_PS01.html", kind: "probset" } ] },
  { title: "Electric Potential and Potential Energy", topics: [
    "Applications of Electrostatics",
    "Current",
    "Resistivity and Resistance",
    "Ohm's Law",
    "Resistors and Resistor Combinations",
    "Circuits" ],
    links: [
      { label: "Lecture · Circuits", href: "learning-guides/G10_Circuits_L01.html", kind: "guide" },
      { label: "Problem Set · Circuits", href: "learning-guides/G10_Circuits_PS01.html", kind: "probset" },
      { label: "Quiz · Circuits", href: "learning-guides/G10_Circuits_Quiz01.html", kind: "quiz" } ] },
  { title: "Magnetic Materials", topics: [
    "Magnetic Field Lines",
    "Magnetic Field of a Current",
    "Field Configurations",
    "Magnetic Force on a Moving Charge",
    "Magnetic Force on a Current" ],
    links: [
      { label: "Lecture · Magnetism", href: "learning-guides/G10_Magnetism_L01.html", kind: "guide" },
      { label: "Problem Set · Magnetism", href: "learning-guides/G10_Magnetism_PS01.html", kind: "probset" } ] },
  { title: "Motion of a Charge in a Magnetic Field", topics: [
    "Charged Particle Trajectories",
    "Faraday's Law",
    "Lenz's Law" ],
    links: [
      { label: "Lecture · Magnetism", href: "learning-guides/G10_Magnetism_L01.html", kind: "guide" },
      { label: "Problem Set · Magnetism", href: "learning-guides/G10_Magnetism_PS01.html", kind: "probset" } ] },
];

const CONFIG = {
  meta: {
    kicker: "Physics · Syllabus",
    title: "Physics <em>Syllabus</em>",
    subtitle: "A continuous progression through mechanics, waves, optics, and electromagnetism. Each topic carries a curated reference set for deeper exploration.",
    navLinks: [{ label: "Mathematics", href: "syllabuses/Mathematics_Syllabus.html" }],
  },
  parts: PARTS.map(p => ({ ...p, references: REFS[p.title] || [] })),
};

export default function PhysicsSyllabus() {
  return <SyllabusComposer config={CONFIG} />;
}
