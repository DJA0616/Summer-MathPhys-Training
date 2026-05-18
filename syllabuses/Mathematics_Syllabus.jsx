import { SyllabusComposer } from "../project-template-files/block-kit.jsx";

// ═══════════════════════════════════════════════════════════════
// REFERENCE DATA — compiled by syllabus-researcher subagents.
// Keyed by topic title. Each topic: [{ category, items: [{title,source,note}] }]
// ═══════════════════════════════════════════════════════════════

const REFS = {
  "Plane and Coordinate Geometry": [
    { category: "Textbooks", items: [
      { title: "Geometry Revisited", source: "H.S.M. Coxeter & S.L. Greitzer, MAA", note: "Classic rigorous treatment of coordinate geometry and classical constructions; competition-level insights." },
      { title: "Coordinate Geometry", source: "S.L. Loney, Arihant", note: "Comprehensive textbook covering distance, lines, circles, conics." },
      { title: "The Secrets of Triangles", source: "Posamentier & Lehmann, Prometheus Books", note: "Deep exploration of triangle properties using coordinate geometry." } ] },
    { category: "Online Resources", items: [
      { title: "Coordinate Geometry Unit", source: "Khan Academy", note: "Interactive lessons on distance formula, slopes, lines, circles." },
      { title: "Cut-the-Knot Coordinate Geometry", source: "Alexander Bogomolny", note: "Curated interactive applets and elegant proofs." },
      { title: "Brilliant.org Coordinate Geometry", source: "Brilliant", note: "Problem-driven lessons bridging elementary to olympiad difficulty." } ] },
    { category: "Video Lectures", items: [
      { title: "Coordinate Geometry Playlist", source: "Professor Leonard, YouTube", note: "Clear, thorough lectures on lines, circles, and transformations." },
      { title: "Analytic Geometry Series", source: "Organic Chemistry Tutor, YouTube", note: "Fast-paced practical lessons on distance, midpoint, and conics." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Olympiad-level problems and classical theorems." },
      { title: "Plane Euclidean Geometry: Theory and Problems", source: "A.D. Gardiner, OUP", note: "Rigorous treatment combining elementary and olympiad perspectives." },
      { title: "AoPS Coordinate Geometry Resources", source: "Art of Problem Solving", note: "Problem archives and wikis on competition coordinate techniques." } ] },
    { category: "Problem Sources", items: [
      { title: "Past AMC 10/12 and AIME Problems", source: "MAA (aops.com archive)", note: "US national problems with graduated difficulty." },
      { title: "IMO Problems", source: "imo-official.org", note: "Gold-standard olympiad problems involving coordinate techniques." },
      { title: "Coordinate Geometry Problem Set", source: "Art of Problem Solving", note: "Curated problem bank with solutions." } ] } ],
  "Transformational Geometry": [
    { category: "Textbooks", items: [
      { title: "Transformation Geometry: An Introduction to Symmetry", source: "Brannan, Esplen & Gray, OUP", note: "Comprehensive treatment of isometries, similarities, affine transformations." },
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Classical insights into transformations, symmetry, and reflection." } ] },
    { category: "Online Resources", items: [
      { title: "Transformations Unit", source: "Khan Academy", note: "Interactive lessons on translations, rotations, reflections, dilations." },
      { title: "Transformation Geometry Applets", source: "GeoGebra Community", note: "Interactive tools for exploring isometries and symmetries." },
      { title: "Cut-the-Knot Transformation Geometry", source: "Alexander Bogomolny", note: "Elegant proofs and visualizations of transformation properties." } ] },
    { category: "Video Lectures", items: [
      { title: "Transformations and Symmetry", source: "Dr. James Tanton (MAA), YouTube", note: "Engaging explanations of rotations, reflections, composition." },
      { title: "Euclidean Geometry Transformations", source: "Organic Chemistry Tutor, YouTube", note: "Clear walkthrough of reflections, rotations, translations, dilations." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Euclidean Geometry in Mathematical Olympiads", source: "Evan Chen, MAA", note: "Advanced techniques using transformations on hard geometry problems." },
      { title: "104 Number Theory Problems", source: "Andreescu & Feng, Birkhäuser", note: "Problems using symmetry and transformational insights." } ] },
    { category: "Problem Sources", items: [
      { title: "AMC 8/10/12 Transformation Problems", source: "MAA", note: "Contest problems emphasizing symmetry and transformation techniques." },
      { title: "Past USAMO Problems", source: "MAA (aops.com)", note: "Advanced problems using transformational geometry." },
      { title: "GeoGebra Problem Collections", source: "GeoGebra Community", note: "Interactive worksheets with embedded transformation problems." } ] } ],
  "Polynomial and Rational Functions": [
    { category: "Textbooks", items: [
      { title: "Polynomials", source: "Edward D. Gaughan, MAA", note: "Comprehensive treatment of polynomial roots, factorization, advanced properties." },
      { title: "Algebra 2", source: "Ron Larson, HMH", note: "Clear treatment of polynomial division, remainder theorem, rational functions." },
      { title: "Calculus Volume 1", source: "Tom Apostol", note: "Rigorous treatment of rational and irrational functions at pre-calculus level." } ] },
    { category: "Online Resources", items: [
      { title: "Polynomial and Rational Functions Unit", source: "Khan Academy", note: "Interactive lessons on operations, factoring, end behavior, asymptotes." },
      { title: "Paul's Online Math Notes", source: "Paul Dawkins, Lamar University", note: "Clear, detailed notes with worked examples." },
      { title: "Brilliant.org Polynomials", source: "Brilliant", note: "Problem-driven exploration of roots, factorization, inequalities." } ] },
    { category: "Video Lectures", items: [
      { title: "Polynomials and Rational Functions Series", source: "Professor Leonard, YouTube", note: "Comprehensive lectures on polynomial behavior, zeros, asymptotes." },
      { title: "Polynomial Long Division and Remainder Theorem", source: "Organic Chemistry Tutor, YouTube", note: "Clear step-by-step worked examples." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Putnam and Beyond", source: "Gelca & Andreescu, Springer", note: "Advanced techniques for polynomial equations and inequalities." },
      { title: "104 Number Theory Problems", source: "Andreescu & Feng, Birkhäuser", note: "Competition problems with polynomial factorization and root analysis." } ] },
    { category: "Problem Sources", items: [
      { title: "AIME Polynomial Problems Archive", source: "Art of Problem Solving", note: "Curated AIME problems on polynomial manipulation." },
      { title: "AMC 10/12 Algebra Problems", source: "MAA", note: "Timed problems on polynomial operations and rational functions." },
      { title: "Polynomial Problem Collections", source: "AoPS Community Wiki", note: "User-contributed problem sets with detailed solutions." } ] } ],
  "Other Types of Functions": [
    { category: "Textbooks", items: [
      { title: "Calculus Volume 1", source: "Tom Apostol", note: "Rigorous treatment of floor/ceiling, absolute value, piecewise functions." },
      { title: "Precalculus: Mathematics for Calculus", source: "Stewart, Redlin & Watson, Cengage", note: "Clear exposition of piecewise, floor, ceiling, and nonstandard functions." } ] },
    { category: "Online Resources", items: [
      { title: "Special Functions Unit", source: "Khan Academy", note: "Interactive lessons on absolute value, piecewise, step functions." },
      { title: "Paul's Online Math Notes", source: "Paul Dawkins, Lamar University", note: "Detailed notes on floor, ceiling, signum, piecewise functions." },
      { title: "Brilliant.org Floor and Ceiling Functions", source: "Brilliant", note: "Problem-driven exploration with competition-level examples." } ] },
    { category: "Video Lectures", items: [
      { title: "Absolute Value and Piecewise Functions", source: "Organic Chemistry Tutor, YouTube", note: "Clear visual explanations of graphing and solving." },
      { title: "Floor and Ceiling Functions", source: "PatrickJMT, YouTube", note: "Accessible introduction to floor/ceiling notation and properties." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IMO Shortlist (special-function problems)", source: "IMO Official Archive", note: "Competition problems leveraging floor/ceiling and piecewise properties." } ] },
    { category: "Problem Sources", items: [
      { title: "AIME Problems with Floor/Ceiling", source: "Art of Problem Solving", note: "Curated problems on floor, ceiling, modular arithmetic." },
      { title: "IMO Shortlist Archive", source: "IMO Official Site", note: "Advanced problems with creative use of special functions." } ] } ],
  "Inverse Functions": [
    { category: "Textbooks", items: [
      { title: "Precalculus (Inverse Functions chapter)", source: "Stewart, Redlin & Watson, Cengage", note: "Clear exposition of definition, existence, algebraic/graphical methods." },
      { title: "Algebra 2", source: "Ron Larson, HMH", note: "Standard treatment of finding inverses, graphing, composition." } ] },
    { category: "Online Resources", items: [
      { title: "Inverse Functions Unit", source: "Khan Academy", note: "Interactive lessons on finding, verifying, graphing inverse functions." },
      { title: "Paul's Online Math Notes", source: "Paul Dawkins, Lamar University", note: "Detailed notes on one-to-one functions and the horizontal line test." },
      { title: "GeoGebra Inverse Functions Applets", source: "GeoGebra Community", note: "Interactive visualizations of reflection over y = x." } ] },
    { category: "Video Lectures", items: [
      { title: "Inverse Functions Series", source: "Professor Leonard, YouTube", note: "Thorough lectures on existence, computation, properties." },
      { title: "Finding and Graphing Inverse Functions", source: "Organic Chemistry Tutor, YouTube", note: "Clear step-by-step explanations with examples." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Functional Equations and How to Solve Them", source: "Christopher G. Small, Springer", note: "Problems exploiting inverse function properties; olympiad level." } ] },
    { category: "Problem Sources", items: [
      { title: "AMC 10/12 Inverse Function Problems", source: "MAA", note: "Mid-level timed problems on finding and applying inverses." },
      { title: "Inverse Function Problem Collections", source: "AoPS Community Wiki", note: "User-contributed problem sets with detailed solutions." } ] } ],
  "Exponential and Logarithmic Functions": [
    { category: "Textbooks", items: [
      { title: "Precalculus (Exponential & Logarithmic chapters)", source: "Stewart, Redlin & Watson, Cengage", note: "Comprehensive treatment of growth/decay, log properties, applications." },
      { title: "Algebra 2", source: "Ron Larson, HMH", note: "Clear coverage of exponential and logarithmic equations." },
      { title: "Calculus Volume 1", source: "Tom Apostol", note: "Rigorous treatment including derivatives and applications." } ] },
    { category: "Online Resources", items: [
      { title: "Exponential & Logarithmic Functions Units", source: "Khan Academy", note: "Interactive lessons on growth/decay, log properties, equations." },
      { title: "Paul's Online Math Notes", source: "Paul Dawkins, Lamar University", note: "Detailed notes with worked examples." },
      { title: "Brilliant.org Exponential and Logarithmic Functions", source: "Brilliant", note: "Problem-driven exploration bridging algebra to applications." } ] },
    { category: "Video Lectures", items: [
      { title: "Exponential & Logarithmic Functions Series", source: "Professor Leonard, YouTube", note: "Comprehensive lectures on properties, equations, applications." },
      { title: "Exponential and Logarithmic Equations", source: "Organic Chemistry Tutor, YouTube", note: "Clear step-by-step walkthroughs." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "IMO Compendium", source: "Djukić et al., Springer", note: "Advanced problems using logarithmic properties and exponential inequalities." },
      { title: "104 Number Theory Problems", source: "Andreescu & Feng, Birkhäuser", note: "Competition problems with logarithmic and exponential manipulations." } ] },
    { category: "Problem Sources", items: [
      { title: "AIME Problems with Exponentials and Logarithms", source: "Art of Problem Solving", note: "Curated problems on exponential equations and log properties." },
      { title: "AMC 10/12 Exponential and Logarithm Problems", source: "MAA", note: "Timed competition problems across difficulty levels." },
      { title: "Exponential and Logarithm Problem Collections", source: "AoPS Community Wiki", note: "User-contributed problem sets with full solutions." } ] } ],
  "Functions as Mathematical Models": [
    { category: "Textbooks", items: [
      { title: "A First Course in Mathematical Modeling", source: "Giordano, Weir & Fox, Cengage", note: "Comprehensive text on building and analyzing mathematical models." },
      { title: "Precalculus (Applications chapters)", source: "Stewart, Redlin & Watson, Cengage", note: "Applications of exponential, polynomial, rational functions to real problems." } ] },
    { category: "Online Resources", items: [
      { title: "Mathematical Modeling Resources", source: "Khan Academy", note: "Interactive lessons on modeling linear and exponential relationships." },
      { title: "MIT OpenCourseWare: Mathematical Modeling", source: "MIT", note: "College-level introduction to modeling techniques." },
      { title: "Brilliant.org Applied Mathematics", source: "Brilliant", note: "Functions applied to physics, economics, biology." } ] },
    { category: "Video Lectures", items: [
      { title: "Applications of Functions", source: "Professor Leonard, YouTube", note: "Modeling real phenomena with polynomials, exponentials, and other functions." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "HiMCM Past Problems", source: "COMAP", note: "High School Mathematical Contest in Modeling — open-ended modeling problems." } ] },
    { category: "Problem Sources", items: [
      { title: "AIME Applied Problems", source: "Art of Problem Solving", note: "Curated problems with real-world and pure modeling contexts." },
      { title: "COMAP Modeling Case Studies", source: "COMAP", note: "Project-based modeling problems with guided frameworks." } ] } ],
  "Sequences and Series": [
    { category: "Textbooks", items: [
      { title: "Precalculus (Sequences & Series chapters)", source: "Stewart, Redlin & Watson, Cengage", note: "Clear treatment of arithmetic/geometric sequences and series." },
      { title: "Calculus Volume 2", source: "Tom Apostol", note: "Rigorous treatment of convergence, power series, applications." },
      { title: "Concrete Mathematics", source: "Graham, Knuth & Patashnik", note: "Deep treatment of sums, recurrences, and generating functions." } ] },
    { category: "Online Resources", items: [
      { title: "Sequences and Series Units", source: "Khan Academy", note: "Interactive lessons on sequences, summation notation, series tests." },
      { title: "Paul's Online Math Notes: Series and Sequences", source: "Paul Dawkins, Lamar University", note: "Detailed notes on convergence and divergence tests." },
      { title: "Brilliant.org Sequences and Series", source: "Brilliant", note: "Problem-driven exploration from elementary to advanced." } ] },
    { category: "Video Lectures", items: [
      { title: "Sequences and Series Series", source: "Professor Leonard, YouTube", note: "Comprehensive lectures on convergence, summation, applications." },
      { title: "Arithmetic and Geometric Sequences", source: "Organic Chemistry Tutor, YouTube", note: "Clear explanations of sequence formulas and series sums." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Problem-Solving Strategies", source: "Arthur Engel, Springer", note: "Advanced techniques including telescoping; olympiad-level reasoning." },
      { title: "104 Number Theory Problems", source: "Andreescu & Feng, Birkhäuser", note: "Competition problems using recurrence relations and summation." } ] },
    { category: "Problem Sources", items: [
      { title: "AIME Sequences and Series Problems", source: "Art of Problem Solving", note: "Curated problems on recurrences, telescoping, closed-form sums." },
      { title: "Putnam Problems on Series", source: "MAA (aops.com archive)", note: "College-level competition problems; challenging and elegant." },
      { title: "Sequences and Series Problem Collections", source: "AoPS Community Wiki", note: "User-contributed problem sets with complete solutions." } ] } ],
  "Elementary Logic": [
    { category: "Textbooks", items: [
      { title: "Introduction to Mathematical Proofs: A Transition", source: "Charles E. Roberts Jr., CRC Press", note: "Comprehensive introduction to logic, proof techniques, reasoning." },
      { title: "How to Read and Do Proofs", source: "Daniel Solow, Wiley", note: "Practical guide to understanding and constructing proofs." },
      { title: "The Art and Craft of Problem Solving", source: "Paul Zeitz, Wiley", note: "Approaches to logic, induction, and proof strategy." } ] },
    { category: "Online Resources", items: [
      { title: "Logic and Proof Units", source: "Khan Academy", note: "Interactive lessons on conditional statements and induction." },
      { title: "Cut-the-Knot Logic and Reasoning", source: "Alexander Bogomolny", note: "Elegant explanations of logical reasoning and induction." },
      { title: "Brilliant.org Proof Techniques", source: "Brilliant", note: "Problem-driven exploration of induction, contradiction, direct proof." } ] },
    { category: "Video Lectures", items: [
      { title: "Mathematical Proof and Reasoning", source: "Dr. James Tanton (MAA), YouTube", note: "Engaging explanations of proof techniques and induction." },
      { title: "Proof by Induction", source: "Organic Chemistry Tutor, YouTube", note: "Clear walkthroughs of induction proofs across difficulty." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "The Art and Craft of Problem Solving", source: "Paul Zeitz, Wiley", note: "Contest-focused exploration of proof strategies at olympiad level." },
      { title: "IMO Compendium", source: "Djukić et al., Springer", note: "Elegant proofs showcasing induction and advanced reasoning." } ] },
    { category: "Problem Sources", items: [
      { title: "AMC 10/12 Logic and Proof Problems", source: "MAA", note: "Timed problems on logical reasoning and elementary induction." },
      { title: "Putnam Competition Problems", source: "MAA (aops.com archive)", note: "College-level problems emphasizing proof strategies." },
      { title: "IMO Shortlist (proof-based problems)", source: "IMO Official Site", note: "Problems requiring sophisticated induction and logical arguments." } ] } ],
  "Lines, Planes, and Angles": [
    { category: "Textbooks", items: [
      { title: "College Geometry: A Discovery Approach", source: "David C. Kay, Pearson", note: "Rigorous treatment of points, lines, planes, angle relationships." },
      { title: "Introduction to Geometry", source: "H.S.M. Coxeter, Wiley", note: "Classical exposition of geometry and spatial relationships." } ] },
    { category: "Online Resources", items: [
      { title: "Lines, Planes, and Angles Units", source: "Khan Academy", note: "Interactive lessons on angle relationships and 3D geometry." },
      { title: "GeoGebra 3D Geometry Tools", source: "GeoGebra Community", note: "Interactive 3D visualizations of lines, planes, angles." },
      { title: "Brilliant.org 3D Geometry", source: "Brilliant", note: "Problem-driven exploration of spatial geometry." } ] },
    { category: "Video Lectures", items: [
      { title: "Lines, Planes, and Angles Series", source: "Professor Leonard, YouTube", note: "Thorough lectures on angle classifications and relationships." },
      { title: "3D Geometry and Vectors", source: "Organic Chemistry Tutor, YouTube", note: "Lines and planes in 3D via coordinate geometry and vectors." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Advanced treatment of geometry suitable for competition prep." } ] },
    { category: "Problem Sources", items: [
      { title: "AMC 10/12 Geometry Problems", source: "MAA", note: "Timed competition problems on lines, angles, spatial relationships." },
      { title: "AIME Geometry Problems Archive", source: "Art of Problem Solving", note: "Curated problems on angle calculation and spatial reasoning." } ] } ],
  "Parallelism and Perpendicularity": [
    { category: "Textbooks", items: [
      { title: "College Geometry: A Discovery Approach", source: "David C. Kay, Pearson", note: "Rigorous treatment of parallel and perpendicular lines and postulates." },
      { title: "The Elements", source: "Euclid, trans. Thomas L. Heath, Dover", note: "Original treatment of the parallel postulate and perpendicularity." } ] },
    { category: "Online Resources", items: [
      { title: "Parallel and Perpendicular Lines Units", source: "Khan Academy", note: "Interactive lessons on transversals and corresponding angles." },
      { title: "Cut-the-Knot Parallel and Perpendicular", source: "Alexander Bogomolny", note: "Elegant visualizations and proofs of classical theorems." },
      { title: "GeoGebra Parallel/Perpendicular Tools", source: "GeoGebra Community", note: "Interactive constructions demonstrating parallels and perpendiculars." } ] },
    { category: "Video Lectures", items: [
      { title: "Parallel Lines and Transversals", source: "Organic Chemistry Tutor, YouTube", note: "Clear explanations of angle relationships." },
      { title: "Perpendicular Lines and Distance", source: "Professor Leonard, YouTube", note: "Perpendicularity in coordinate and classical geometry." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Insights into parallel lines and competition applications." } ] },
    { category: "Problem Sources", items: [
      { title: "AMC and AIME Parallel/Perpendicular Problems", source: "MAA (aops.com)", note: "Timed problems exploiting parallel and perpendicular properties." },
      { title: "Parallel and Perpendicular Problem Collections", source: "AoPS Community Wiki", note: "User-contributed problem sets with solutions." } ] } ],
  "Properties of Triangles": [
    { category: "Textbooks", items: [
      { title: "The Secrets of Triangles", source: "Posamentier & Lehmann, Prometheus Books", note: "Comprehensive exploration of triangle geometry, centers, theorems." },
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Classical insights into triangle properties, cevians, theorems." },
      { title: "Coordinate Geometry", source: "S.L. Loney, Arihant", note: "Triangle properties treated analytically." } ] },
    { category: "Online Resources", items: [
      { title: "Triangle Properties and Theorems Units", source: "Khan Academy", note: "Interactive lessons on congruence, similarity, special centers." },
      { title: "Cut-the-Knot Triangle Geometry", source: "Alexander Bogomolny", note: "Elegant proofs and classical triangle theorems." },
      { title: "Brilliant.org Triangle Geometry", source: "Brilliant", note: "Problem-driven exploration of congruence and special points." } ] },
    { category: "Video Lectures", items: [
      { title: "Triangle Properties and Theorems Series", source: "Professor Leonard, YouTube", note: "Comprehensive lectures on congruence, similarity, centers." },
      { title: "Geometry of Triangles", source: "Dr. James Tanton (MAA), YouTube", note: "Engaging exploration of medians, altitudes, angle bisectors." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Euclidean Geometry in Mathematical Olympiads", source: "Evan Chen, MAA", note: "Advanced treatment of triangle theorems and olympiad techniques." },
      { title: "The Secrets of Triangles", source: "Posamentier & Lehmann, Prometheus Books", note: "Olympiad-level problems and techniques for triangle geometry." } ] },
    { category: "Problem Sources", items: [
      { title: "IMO Triangle Problems Archive", source: "IMO Official Site", note: "International problems emphasizing classical triangle geometry." },
      { title: "AIME and USAMO Triangle Problems", source: "Art of Problem Solving", note: "Curated problems on congruence, similarity, centers, cevians." },
      { title: "Triangle Geometry Problem Collections", source: "AoPS Community Wiki", note: "User-contributed problem sets across difficulty levels." } ] } ],
  "Congruence Between Triangles": [
    { category: "Textbooks", items: [
      { title: "Euclidean Geometry in Mathematical Olympiads", source: "Evan Chen, MAA", note: "Rigorous treatment of congruence with olympiad techniques." },
      { title: "Elements, Book I (Propositions 4–26)", source: "Euclid, Dover", note: "Classical axiomatic foundation for triangle congruence." } ] },
    { category: "Online Resources", items: [
      { title: "Congruence of Triangles", source: "AoPS Wiki", note: "Reference with congruence criteria, worked examples, practice." },
      { title: "Triangle Congruence", source: "Cut-the-Knot", note: "Interactive demonstrations and multiple proofs of criteria." } ] },
    { category: "Video Lectures", items: [
      { title: "Congruence and Similarity", source: "Khan Academy (Geometry)", note: "Clear visual explanations of SSS, SAS, ASA, AAS, HL criteria." },
      { title: "Triangle Congruence Theorems", source: "Professor Leonard, YouTube", note: "Detailed proofs and applications of congruence criteria." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Problem-Solving Through Problems", source: "Loren C. Larson, Springer", note: "Olympiad-level geometry problems involving triangle congruence." },
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Elegant congruence proofs and synthetic techniques." } ] },
    { category: "Problem Sources", items: [
      { title: "IMO Problem Archive (1959–present)", source: "International Mathematical Olympiad", note: "Historical geometry problems relying on congruence criteria." },
      { title: "USAMO & AIME Archives", source: "MAA / Art of Problem Solving", note: "Competition problems with congruence-based synthetic solutions." } ] } ],
  "Compass and Ruler Constructions": [
    { category: "Textbooks", items: [
      { title: "A Course in Geometry: Plane and Solid", source: "Weeks & Adkins", note: "Comprehensive guide covering classical geometric constructions." },
      { title: "Geometry: Euclid and Beyond", source: "Robin Hartshorne, Springer", note: "Rigorous treatment of constructibility theory." } ] },
    { category: "Online Resources", items: [
      { title: "Compass and Straightedge Constructions", source: "Cut-the-Knot", note: "Interactive applets demonstrating classical constructions and proofs." },
      { title: "Geometric Constructions", source: "AoPS Wiki", note: "Reference for constructible angles and impossible constructions." } ] },
    { category: "Video Lectures", items: [
      { title: "Compass and Straightedge Construction", source: "Khan Academy (Geometry)", note: "Step-by-step instructions for standard constructions." },
      { title: "Introduction to Constructible Numbers", source: "MIT/university channels, YouTube", note: "Connecting geometry to algebra and field theory." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Elegant construction problems from olympiad tradition." },
      { title: "Euclidean Geometry in Mathematical Olympiads", source: "Evan Chen, MAA", note: "Construction problems within synthetic geometry context." } ] },
    { category: "Problem Sources", items: [
      { title: "AoPS Construction Problems", source: "AoPS Forum Archives", note: "Community-curated construction challenges and solved examples." },
      { title: "IMO Problem Archive (construction problems)", source: "International Mathematical Olympiad", note: "Olympiad problems requiring elegant construction-based solutions." } ] } ],
  "Triangle Similarity": [
    { category: "Textbooks", items: [
      { title: "Euclidean Geometry in Mathematical Olympiads", source: "Evan Chen, MAA", note: "In-depth treatment of similarity, homothety, applications." },
      { title: "Classical Geometry: Euclidean, Transformational, Inversive, Projective", source: "Leonard, Lewis, Liu & Tokarsky, Wiley", note: "Comprehensive treatment of similarity transformations." } ] },
    { category: "Online Resources", items: [
      { title: "Similar Triangles", source: "AoPS Wiki", note: "Definition, criteria (AA, SAS, SSS), and applications." },
      { title: "Similarity and Proportions", source: "Cut-the-Knot", note: "Interactive demonstrations of similar-triangle properties." } ] },
    { category: "Video Lectures", items: [
      { title: "Similar Triangles", source: "Khan Academy (Geometry)", note: "Clear explanations of similarity criteria and ratios." },
      { title: "Triangle Similarity and Proportional Segments", source: "Professor Leonard, YouTube", note: "Detailed proofs of similarity theorems." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Problem-Solving Strategies", source: "Arthur Engel, Springer", note: "Similarity-based problem-solving techniques for olympiads." },
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Elegant applications of similarity in classical geometry." } ] },
    { category: "Problem Sources", items: [
      { title: "IMO Problem Archive", source: "International Mathematical Olympiad", note: "Numerous problems exploiting similarity and proportionality." },
      { title: "AIME & USAMO Past Problems", source: "MAA / Art of Problem Solving", note: "Competition problems featuring similarity configurations." } ] } ],
  "Polygons": [
    { category: "Textbooks", items: [
      { title: "Euclidean Geometry in Mathematical Olympiads", source: "Evan Chen, MAA", note: "Treatment of cyclic and tangential polygons with olympiad focus." },
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Coverage of polygon properties, area formulas, classical theorems." } ] },
    { category: "Online Resources", items: [
      { title: "Polygon", source: "AoPS Wiki", note: "Reference for polygon types, angle sums, regular polygons." },
      { title: "Polygons and Star Polygons", source: "Cut-the-Knot", note: "Interactive explorations of polygon angles, areas, symmetries." } ] },
    { category: "Video Lectures", items: [
      { title: "Polygons and Their Properties", source: "Khan Academy (Geometry)", note: "Angles, area formulas, regular and irregular polygons." },
      { title: "Cyclic and Tangential Polygons", source: "AoPS / university channels, YouTube", note: "Detailed study of inscribed and circumscribed polygons." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Problem-Solving Strategies", source: "Arthur Engel, Springer", note: "Polygon problems from international olympiads." },
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Classical theorems and proofs involving polygons." } ] },
    { category: "Problem Sources", items: [
      { title: "IMO Problem Archive", source: "International Mathematical Olympiad", note: "Problems on regular polygons, cyclic polygons, area." },
      { title: "USAMO & AIME Archives", source: "MAA / Art of Problem Solving", note: "Competition problems featuring polygon geometry." } ] } ],
  "Circles": [
    { category: "Textbooks", items: [
      { title: "Euclidean Geometry in Mathematical Olympiads", source: "Evan Chen, MAA", note: "Deep treatment of power of a point, radical axis, inversion." },
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Classical circle theorems, poles and polars, synthetic results." } ] },
    { category: "Online Resources", items: [
      { title: "Circle", source: "AoPS Wiki", note: "Reference: tangent lines, chords, arcs, inscribed angles, power of a point." },
      { title: "Circle Theorems", source: "Cut-the-Knot", note: "Interactive demonstrations of angle relationships and radical axes." } ] },
    { category: "Video Lectures", items: [
      { title: "Circle Theorems", source: "Khan Academy (Geometry)", note: "Inscribed angles, tangent-chord angles, intersecting chords." },
      { title: "Advanced Circle Geometry", source: "AoPS / university channels, YouTube", note: "Power of a point, radical axis, inversion, olympiad problems." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Problem-Solving Strategies", source: "Arthur Engel, Springer", note: "Circle-based problem-solving techniques used in olympiads." },
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Simson line, nine-point circle, Apollonian circles." } ] },
    { category: "Problem Sources", items: [
      { title: "IMO Problem Archive", source: "International Mathematical Olympiad", note: "Circle geometry problems are staple olympiad fare." },
      { title: "Brilliant.org Circle Geometry Problems", source: "Brilliant", note: "Circle problems with solutions and skill progression." } ] } ],
  "Volume and Surface Area of Solids": [
    { category: "Textbooks", items: [
      { title: "Solid Geometry", source: "A.I. Markushevich, Dover", note: "Classical rigorous treatment of 3D geometry and volume." },
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Chapters on spatial geometry, polyhedra, volume arguments." } ] },
    { category: "Online Resources", items: [
      { title: "Surface Area and Volume", source: "Khan Academy (Geometry)", note: "Interactive lessons on prisms, pyramids, cylinders, cones, spheres." },
      { title: "3D Geometry", source: "AoPS Wiki", note: "Reference for volume/surface area formulas (cross-section, Cavalieri)." } ] },
    { category: "Video Lectures", items: [
      { title: "Solids of Revolution and Volume", source: "MIT OpenCourseWare (18.02)", note: "Rigorous treatment of volume via integration." },
      { title: "3D Geometry and Polyhedra", source: "AoPS / university channels, YouTube", note: "Cross-section methods and Cavalieri's principle." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Problem-Solving Strategies", source: "Arthur Engel, Springer", note: "Olympiad problems on solid geometry and 3D reasoning." },
      { title: "Euclidean Geometry in Mathematical Olympiads", source: "Evan Chen, MAA", note: "3D geometry problems with synthetic solutions." } ] },
    { category: "Problem Sources", items: [
      { title: "IMO Problem Archive", source: "International Mathematical Olympiad", note: "Solid geometry problems with elegant non-calculus solutions." },
      { title: "USAMO & AIME Archives", source: "MAA / Art of Problem Solving", note: "Competition problems on 3D geometry and volume." } ] } ],
  "Trigonometric Functions": [
    { category: "Textbooks", items: [
      { title: "Trigonometry", source: "I.M. Gelfand & M. Saul, Birkhäuser", note: "Rigorous introduction with geometric emphasis." },
      { title: "Elementary Trigonometry", source: "H.S. Hall & S.R. Knight", note: "Classical comprehensive treatment of sine, cosine, tangent, graphs." } ] },
    { category: "Online Resources", items: [
      { title: "Trigonometric Functions", source: "Khan Academy (Trigonometry)", note: "Visual introduction to unit circle, radians, function graphs." },
      { title: "Trigonometry", source: "AoPS Wiki", note: "Reference for definitions, unit circle, periodicity, applications." } ] },
    { category: "Video Lectures", items: [
      { title: "Unit Circle and Trigonometric Functions", source: "3Blue1Brown, YouTube", note: "Intuitive visual explanation via the unit circle." },
      { title: "Trigonometry Foundations", source: "Professor Leonard, YouTube", note: "Comprehensive lectures on definitions, graphs, transformations." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Trigonometry (advanced sections)", source: "Gelfand & Saul, Birkhäuser", note: "Integration of trigonometry in olympiad geometry problems." },
      { title: "Problem-Solving Strategies", source: "Arthur Engel, Springer", note: "Trigonometric problem-solving techniques for olympiads." } ] },
    { category: "Problem Sources", items: [
      { title: "Khan Academy Practice Problems", source: "Khan Academy", note: "Extensive curated problem sets on trigonometric functions." },
      { title: "AoPS Problem Database", source: "Art of Problem Solving", note: "Searchable collection of trigonometry contest problems." } ] } ],
  "Inverse Trigonometric Functions": [
    { category: "Textbooks", items: [
      { title: "Trigonometry", source: "I.M. Gelfand & M. Saul, Birkhäuser", note: "Rigorous treatment of inverse functions, domains, ranges." },
      { title: "Calculus: Early Transcendentals", source: "James Stewart, Cengage", note: "Comprehensive chapter on inverse trigonometric functions." } ] },
    { category: "Online Resources", items: [
      { title: "Inverse Trigonometric Functions", source: "Khan Academy", note: "Definitions, domain/range restrictions, function graphs." },
      { title: "Arcsin, Arccos, Arctan", source: "Cut-the-Knot", note: "Interactive explorations and identities for inverse trig functions." } ] },
    { category: "Video Lectures", items: [
      { title: "Inverse Trigonometric Functions", source: "Professor Leonard, YouTube", note: "Detailed lectures on domain restriction and graphing." },
      { title: "Inverse Trig Functions and Integration", source: "MIT OpenCourseWare (18.01)", note: "Integration techniques using inverse trig functions." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Problem-Solving Through Problems", source: "Loren C. Larson, Springer", note: "Advanced problems involving inverse trigonometric functions." },
      { title: "Putnam and Beyond", source: "Gelca & Andreescu, Springer", note: "Challenging problems involving inverse trigonometric identities." } ] },
    { category: "Problem Sources", items: [
      { title: "Khan Academy Practice Problems", source: "Khan Academy", note: "Structured problem progression on inverse trig functions." },
      { title: "AIME Archive (trigonometry subset)", source: "MAA / Art of Problem Solving", note: "Competition problems featuring inverse trig functions." } ] } ],
  "Analytic Trigonometry": [
    { category: "Textbooks", items: [
      { title: "Trigonometry", source: "I.M. Gelfand & M. Saul, Birkhäuser", note: "Comprehensive treatment of identities, equations, proofs." },
      { title: "Precalculus: Mathematics for Calculus", source: "Stewart, Redlin & Watson, Cengage", note: "Chapters on identities and solving trigonometric equations." } ] },
    { category: "Online Resources", items: [
      { title: "Trigonometric Identities", source: "Khan Academy (Trigonometry)", note: "Fundamental identities, sum/difference, double- and half-angle." },
      { title: "Trigonometric Equations and Identities", source: "AoPS Wiki", note: "Reference for major identities and equation-solving techniques." } ] },
    { category: "Video Lectures", items: [
      { title: "Trigonometric Identities and Equations", source: "Professor Leonard, YouTube", note: "Detailed derivation and application of identities." },
      { title: "Trigonometric Identities Playlist", source: "PatrickJMT, YouTube", note: "Short focused videos on individual identities and proofs." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Problem-Solving Strategies", source: "Arthur Engel, Springer", note: "Olympiad problems solved via trigonometric identities." },
      { title: "Problem-Solving Through Problems", source: "Loren C. Larson, Springer", note: "Advanced problems on identities and equation-solving." } ] },
    { category: "Problem Sources", items: [
      { title: "Khan Academy Practice Problems", source: "Khan Academy", note: "Extensive curated sets on identities and trigonometric equations." },
      { title: "AIME & USAMO Archives", source: "MAA / Art of Problem Solving", note: "Competition problems with advanced trigonometric techniques." } ] } ],
  "Law of Sines and Law of Cosines": [
    { category: "Textbooks", items: [
      { title: "Trigonometry", source: "I.M. Gelfand & M. Saul, Birkhäuser", note: "Rigorous derivation and applications of both laws." },
      { title: "Euclidean Geometry in Mathematical Olympiads", source: "Evan Chen, MAA", note: "Trigonometric approach to olympiad geometry." } ] },
    { category: "Online Resources", items: [
      { title: "Law of Sines and Law of Cosines", source: "Khan Academy (Trigonometry)", note: "Derivations, triangle solving, and the ambiguous case." },
      { title: "Law of Sines and Cosines", source: "AoPS Wiki", note: "Reference with the extended law of sines and applications." } ] },
    { category: "Video Lectures", items: [
      { title: "Law of Sines and Law of Cosines", source: "Professor Leonard, YouTube", note: "Detailed derivations and problem-solving techniques." },
      { title: "Applications of Trigonometry", source: "Khan Academy (Trigonometry)", note: "Real-world and geometric applications of both laws." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Problem-Solving Strategies", source: "Arthur Engel, Springer", note: "Olympiad geometry solved using trigonometric laws." },
      { title: "Geometry Revisited", source: "Coxeter & Greitzer, MAA", note: "Geometric proofs compared with trigonometric solutions." } ] },
    { category: "Problem Sources", items: [
      { title: "AIME & USAMO Archives", source: "MAA / Art of Problem Solving", note: "Competition problems requiring law of sines/cosines." },
      { title: "Khan Academy Practice Problems", source: "Khan Academy", note: "Structured triangle-solving problems using both laws." } ] } ],
  "Complex Numbers in Polar Form": [
    { category: "Textbooks", items: [
      { title: "Visual Complex Analysis", source: "Tristan Needham, OUP", note: "Intuitive geometric treatment of polar form and transformations." },
      { title: "Complex Variables with Applications", source: "David A. Wunsch, Pearson", note: "Comprehensive treatment of polar form, De Moivre's theorem, roots." } ] },
    { category: "Online Resources", items: [
      { title: "Complex Numbers in Polar Form", source: "Khan Academy (Precalculus)", note: "Conversion, multiplication, division, and powers in polar form." },
      { title: "Complex Numbers", source: "AoPS Wiki", note: "Reference for modulus, argument, polar form, De Moivre's theorem." } ] },
    { category: "Video Lectures", items: [
      { title: "Complex Numbers in Polar Form", source: "Professor Leonard, YouTube", note: "Geometric visualization, conversion, and operations." },
      { title: "Complex Numbers and Euler's Formula", source: "3Blue1Brown, YouTube", note: "Intuitive visual introduction to polar and exponential form." } ] },
    { category: "Contest & Olympiad", items: [
      { title: "Problem-Solving Strategies", source: "Arthur Engel, Springer", note: "Olympiad problems solved using complex numbers in polar form." },
      { title: "Complex Numbers in Geometry", source: "Art of Problem Solving", note: "Complex numbers as tools for olympiad geometry." } ] },
    { category: "Problem Sources", items: [
      { title: "IMO & USAMO Archives (complex number problems)", source: "MAA / IMO", note: "Olympiad problems where polar form gives elegant solutions." },
      { title: "AoPS Problem Database (complex numbers)", source: "Art of Problem Solving", note: "Curated problems on polar form and De Moivre's theorem." } ] } ],
};

// ═══════════════════════════════════════════════════════════════
// CURRICULUM — major topics with their subtopics, in study order.
// ═══════════════════════════════════════════════════════════════

const PARTS = [
  { title: "Plane and Coordinate Geometry", topics: [
    "Geometric terms and notation",
    "Points on a line and on a plane",
    "Distance and Midpoint Formulas",
    "Circles in the coordinate plane" ] },
  { title: "Transformational Geometry", topics: [
    "Translations, Reflections, and Glide Reflections",
    "Rotations and Scale Transformations" ] },
  { title: "Polynomial and Rational Functions", topics: [
    "Polynomial and Rational Functions",
    "Finding and Estimating Intercepts",
    "Constant, Increasing, and Decreasing Functions",
    "Asymptotes",
    "Theorems on Polynomial Functions",
    "Graphs of Polynomial and Rational Functions" ] },
  { title: "Other Types of Functions", topics: [
    "Square Root and Piecewise-Defined Functions",
    "Floor, Ceiling, and Signum Functions",
    "Transformations of Functions" ] },
  { title: "Inverse Functions", topics: [
    "Functions that Have Inverses",
    "Graphs of Inverse Functions" ] },
  { title: "Exponential and Logarithmic Functions", topics: [
    "Graphs and Properties of Exponential and Logarithmic Functions",
    "The Common Logarithmic Function",
    "Natural Exponential and Logarithmic Functions",
    "Laws of Logarithms",
    "Change of Base Formula",
    "Solving Exponential and Logarithmic Equations",
    "Applications of Exponential and Logarithmic Functions" ] },
  { title: "Functions as Mathematical Models", topics: [
    "Building Functions to Model a Relationship Between Two Quantities",
    "Using Functions to Model Relationships of Real-Life Data" ] },
  { title: "Sequences and Series", topics: [
    "Definition of a Sequence",
    "Arithmetic and Geometric Sequences",
    "Other Types of Sequences",
    "Arithmetic and Geometric Series",
    "Applications of Sequences and Series",
    "Pascal's Triangle in Binomial Expansion" ] },
  { title: "Elementary Logic", topics: [
    "Kinds of Reasoning",
    "Conditional, Converse, Inverse, Contrapositive, and Biconditional Statements",
    "Mathematical Induction and Indirect Proof" ] },
  { title: "Lines, Planes, and Angles", topics: [
    "Postulates on Lines and Planes",
    "Angle Pairs" ] },
  { title: "Parallelism and Perpendicularity", topics: [
    "Angles Formed by Parallel Lines Cut by a Transversal",
    "Perpendicular Bisector of a Segment" ] },
  { title: "Properties of Triangles", topics: [
    "Interior and Exterior Angles of a Triangle",
    "Angle Bisector, Altitude, and Median of a Triangle" ] },
  { title: "Congruence Between Triangles", topics: [
    "Congruence Postulates and Theorem",
    "Proving Triangle Congruence",
    "The Isosceles Triangle Theorem and Its Converse",
    "The Pythagorean Theorem and Special Right Triangles" ] },
  { title: "Compass and Ruler Constructions", topics: [
    "Duplicating Segments and Angles",
    "Perpendicular Bisector of a Segment",
    "Angle Bisectors" ] },
  { title: "Triangle Similarity", topics: [
    "Definition of Similar Triangles",
    "The Basic Proportionality Theorem",
    "Similarity Theorems",
    "The Angle Bisector Proportionality Theorem",
    "Similarities in a Right Triangle" ] },
  { title: "Polygons", topics: [
    "Properties of Parallelograms and Other Quadrilaterals",
    "Angles and Diagonals of Polygons",
    "Areas of Polygons" ] },
  { title: "Circles", topics: [
    "Properties of Chords, Radius, and Tangent and Secant Lines",
    "Inscribed Angles and Intercepted Arcs",
    "Inscribed and Circumscribed Polygons",
    "Area and Circumference of a Circle",
    "Area of a Sector and Arc Length" ] },
  { title: "Volume and Surface Area of Solids", topics: [
    "Properties of Volume and Surface Area",
    "Volume and Surface Area of Prisms, Cylinders, Pyramids, Cones, and Spheres" ] },
  { title: "Trigonometric Functions", topics: [
    "Angle Measures",
    "Right Triangle Trigonometry",
    "Wrapping and Trigonometric Functions",
    "Trigonometric Function Values",
    "Graphs and Properties of Basic Trigonometric Functions" ],
    links: [
      { label: "Lecture · Trig Bridge", href: "learning-guides/Trig_Bridge_L01.html", kind: "guide" },
      { label: "Problem Set · Trigonometry", href: "problem_sets/G10_Trig_Bridge_Probset.html", kind: "probset" },
      { label: "Exam Set · Trigonometry", href: "problem_sets/G10_Trig_Bridge_ExamSet.html", kind: "probset" } ] },
  { title: "Inverse Trigonometric Functions", topics: [
    "Basic Inverse Trigonometric Functions",
    "Graphs of Basic Inverse Trigonometric Functions" ] },
  { title: "Analytic Trigonometry", topics: [
    "Trigonometric Identities",
    "Trigonometric Equations" ] },
  { title: "Law of Sines and Law of Cosines", topics: [
    "The Law of Sines",
    "The Law of Cosines",
    "Solving Oblique Triangles" ] },
  { title: "Complex Numbers in Polar Form", topics: [
    "Polar Form of Complex Numbers",
    "Operations of Complex Numbers in Polar Form" ] },
];

const CONFIG = {
  meta: {
    kicker: "Mathematics · Syllabus",
    title: "Mathematics <em>Syllabus</em>",
    subtitle: "A continuous progression through geometry, functions, and trigonometry. Each topic carries a curated reference set for deeper exploration.",
    navLinks: [{ label: "Physics", href: "syllabuses/Physics_Syllabus.html" }],
  },
  parts: PARTS.map(p => ({ ...p, references: REFS[p.title] || [] })),
};

export default function MathematicsSyllabus() {
  return <SyllabusComposer config={CONFIG} />;
}
