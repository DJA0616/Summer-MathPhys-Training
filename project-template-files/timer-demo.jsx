import { useState, useEffect, useRef, useCallback, use } from "react";

const TOTAL = 30;

// 6-point shape frames — all centered at (200,200) in a 400×400 space
const pt = (deg, r) => [
  200 + r * Math.cos((deg - 90) * Math.PI / 180),
  200 + r * Math.sin((deg - 90) * Math.PI / 180),
];

const FRAMES = [
  [pt(0, 108), pt(60, 48), pt(120, 108), pt(180, 48), pt(240, 108), pt(300, 48)],   // star-triangle
  [pt(0, 108), pt(90, 108), pt(180, 108), pt(270, 108), pt(45, 50), pt(225, 50)],   // kite-square
  [pt(0, 108), pt(72, 108), pt(144, 108), pt(216, 108), pt(288, 108), pt(180, 38)], // pentagon+spike
  [pt(0, 108), pt(60, 108), pt(120, 108), pt(180, 108), pt(240, 108), pt(300, 108)],// hexagon
  [pt(5, 128), pt(75, 58), pt(148, 116), pt(212, 64), pt(278, 120), pt(335, 76)],   // wave
  [pt(0, 76), pt(58, 126), pt(122, 70), pt(178, 126), pt(238, 76), pt(300, 112)],  // bounce
  [pt(22, 116), pt(84, 50), pt(158, 100), pt(222, 50), pt(288, 116), pt(196, 80)],  // mountain
];

const sCurve = (a, b, t) => a + (b - a) * (10 * Math.pow(t, 3) - 15 * Math.pow(t, 4) + 6 * Math.pow(t, 5));
const sCurvePts = (p1, p2, t) => p1.map((p, i) => [sCurve(p[0], p2[i][0], t), sCurve(p[1], p2[i][1], t)]);
const str = pts => pts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
const scale = (pts, s) => pts.map(([x, y]) => [200 + (x - 200) * s, 200 + (y - 200) * s]);

const PHASES = {
  blue: { c: '#7eb8d4', g: 'rgba(126,184,212,0.55)', dim: 'rgba(126,184,212,0.09)', label: 'normal', transition: 300, floatPhaseDiv: 2000, floatAmp: 6 },
  sage: { c: '#a0d4b0', g: 'rgba(160,212,176,0.55)', dim: 'rgba(160,212,176,0.07)', label: '≤ 10s', transition: 200, floatPhaseDiv: 1000, floatAmp: 5 },
  red: { c: '#d47e8a', g: 'rgba(212,126,138,0.65)', dim: 'rgba(212,126,138,0.10)', label: '≤ 5s — urgent', transition: 100, floatPhaseDiv: 500, floatAmp: 4 },
};

export default function TimerDemo() {
  const [timeLeft, setTimeLeft] = useState(TOTAL);
  const [running, setRunning] = useState(false);
  const [pts, setPts] = useState(FRAMES[0]);
  const ptsRef = useRef(FRAMES[0]);
  const snapRafRef = useRef(null);
  const floatRafRef = useRef(null);
  const snapActiveRef = useRef(false);
  const tickRef = useRef(0);
  const phaseRef = useRef('blue');

  const phase = timeLeft <= 5 ? 'red' : timeLeft <= 10 ? 'sage' : 'blue';
  const col = PHASES[phase];
  useEffect(() => { phaseRef.current = phase; }, [phase]);

  const snap = useCallback((idx) => {
    if (snapRafRef.current) cancelAnimationFrame(snapRafRef.current);
    snapActiveRef.current = true;
    const from = FRAMES[(idx - 1) % FRAMES.length]; // Start from previous frame (clean base, no float offset)
    const to = FRAMES[idx % FRAMES.length];
    let transDur = PHASES[phaseRef.current].transition;
    const amp = PHASES[phaseRef.current].floatAmp;
    const phaseDiv = PHASES[phaseRef.current].floatPhaseDiv;
    const dur = transDur;
    const t0 = performance.now();
    const step = now => {
      const t = Math.min((now - t0) / dur, 1);
      const cur = sCurvePts(from, to, t);
      let curFloated = cur.map(([x, y], i) => [
        x + amp * Math.cos(now / phaseDiv * Math.PI + i),
        y + amp * Math.sin(now / phaseDiv * Math.PI + i),
      ]); // add floating motion during transition
      ptsRef.current = curFloated;
      setPts(curFloated.map(p => [...p]));
      if (t < 1) snapRafRef.current = requestAnimationFrame(step);
      else snapActiveRef.current = false;
    };
    snapRafRef.current = requestAnimationFrame(step);
  }, []);

  const float = useCallback((idx) => {
    if (floatRafRef.current) cancelAnimationFrame(floatRafRef.current);
    const base = FRAMES[idx % FRAMES.length];
    const amp = PHASES[phaseRef.current].floatAmp;
    const phaseDiv = PHASES[phaseRef.current].floatPhaseDiv;
    const dur = 4000;
    const t0 = performance.now();
    const step = now => {
      if (!snapActiveRef.current) {
        const t = (now - t0) / dur;
        const cur = base.map(([x, y], i) => [
          x + amp * Math.cos(now / phaseDiv * Math.PI + i),
          y + amp * Math.sin(now / phaseDiv * Math.PI + i),
        ]);
        ptsRef.current = cur;
        setPts(cur.map(p => [...p]));
      }
      floatRafRef.current = requestAnimationFrame(step);
    }
    floatRafRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    if (!running || timeLeft === 0) return;
    const id = setInterval(() => {
      setTimeLeft(t => { if (t <= 1) { setRunning(false); return 0; } return t - 1; });
      tickRef.current++;
      snap(tickRef.current);
    }, 1000);
    return () => clearInterval(id);
  }, [running, snap]);

  // Start the floating motion once when timer starts
  useEffect(() => {
    float(tickRef.current);
  }, [running, timeLeft, float]);

  const reset = () => {
    setTimeLeft(TOTAL); setRunning(false);
    ptsRef.current = FRAMES[0]; setPts(FRAMES[0]);
    tickRef.current = 0;
    if (snapRafRef.current) cancelAnimationFrame(snapRafRef.current);
    if (floatRafRef.current) cancelAnimationFrame(floatRafRef.current);
  };

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const ss = String(timeLeft % 60).padStart(2, '0');
  const inner = scale(pts, 0.46);
  const outer = scale(pts, 1.18);

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=JetBrains+Mono:wght@300;400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0a; overflow: hidden; }
      `}</style>

      {/* ── Static background layer ── */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {/* Grid */}
        <g opacity="0.022" stroke={col.c} strokeWidth="0.5" style={{ transition: 'stroke 0.7s ease' }}>
          {Array.from({ length: 18 }).map((_, i) => <line key={`h${i}`} x1="0" y1={`${i * 6.5}%`} x2="100%" y2={`${i * 6.5}%`} />)}
          {Array.from({ length: 18 }).map((_, i) => <line key={`v${i}`} x1={`${i * 6.5}%`} y1="0" x2={`${i * 6.5}%`} y2="100%" />)}
        </g>
        {/* Top-right triangle cluster */}
        <g opacity="0.065" stroke={col.c} strokeWidth="0.6" fill="none" style={{ transition: 'stroke 0.7s ease' }}>
          <polygon points="91%,3% 98%,15% 84%,15%" />
          <polygon points="98%,15% 98%,28% 84%,15%" />
          <line x1="91%" y1="3%" x2="91%" y2="28%" />
          <line x1="84%" y1="15%" x2="98%" y2="15%" />
        </g>
        {/* Bottom-left concentric arcs */}
        <g opacity="0.05" stroke={col.c} strokeWidth="0.5" fill="none" style={{ transition: 'stroke 0.7s ease' }}>
          {[9, 16, 23, 30, 37].map((r, i) => <circle key={i} cx="3%" cy="96%" r={`${r}%`} />)}
        </g>
        {/* Phase dots */}
        {[[14, 18], [83, 13], [9, 73], [88, 80], [50, 4], [50, 95], [4, 50], [95, 50]].map(([x, y], i) => (
          <circle key={i} cx={`${x}%`} cy={`${y}%`} r="1.4" fill={col.c} opacity="0.2" style={{ transition: 'fill 0.7s ease' }} />
        ))}
      </svg>

      {/* ── Morphing polygon layer ── */}
      <svg
        width="480" height="480" viewBox="0 0 400 400"
        style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}
      >
        {/* Glow blur pass */}
        <polygon points={str(pts)} fill="none" stroke={col.c} strokeWidth="3" strokeOpacity="0.10" style={{ filter: 'blur(8px)', transition: 'stroke 0.7s' }} />
        {/* Outer faint */}
        <polygon points={str(outer)} fill="none" stroke={col.c} strokeWidth="0.4" strokeOpacity="0.12" style={{ transition: 'stroke 0.7s' }} />
        {/* Main polygon */}
        <polygon points={str(pts)} fill="none" stroke={col.c} strokeWidth="0.85" strokeOpacity="0.50" style={{ transition: 'stroke 0.7s' }} />
        {/* Inner polygon */}
        <polygon points={str(inner)} fill="none" stroke={col.c} strokeWidth="0.4" strokeOpacity="0.22" style={{ transition: 'stroke 0.7s' }} />
        {/* Radial lines from center to vertices */}
        {pts.map(([x, y], i) => (
          <line key={i} x1="200" y1="200" x2={x} y2={y} stroke={col.c} strokeWidth="0.3" strokeOpacity="0.12" style={{ transition: 'stroke 0.7s' }} />
        ))}
        {/* Concentric rings */}
        {[32, 60, 92].map((r, i) => (
          <circle key={i} cx="200" cy="200" r={r} fill="none" stroke={col.c} strokeWidth="0.4" strokeOpacity={0.09 - i * 0.025} style={{ transition: 'stroke 0.7s' }} />
        ))}
        {/* Vertex dots */}
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.8" fill={col.c} opacity="0.35" style={{ transition: 'fill 0.7s' }} />
        ))}
        {/* Center dot */}
        <circle cx="200" cy="200" r="2.5" fill={col.c} opacity="0.55" style={{ transition: 'fill 0.7s' }} />
      </svg>

      {/* ── Timer UI ── */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.22em', color: '#383838', textTransform: 'uppercase', marginBottom: 32 }}>
          Exam Timer · Demo · 30s
        </span>

        {/* Main time display */}
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 'clamp(80px, 18vw, 128px)',
          fontWeight: 300,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: col.c,
          textShadow: `0 0 40px ${col.g}, 0 0 100px ${col.dim}`,
          transition: 'color 0.7s ease, text-shadow 0.7s ease',
        }}>
          {mm}:{ss}
        </div>

        {/* Phase indicator */}
        <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
          {(['blue', 'sage', 'red']).map((ph, i) => (
            <div key={ph} style={{
              width: 5, height: 5, borderRadius: '50%',
              background: phase === ph ? PHASES[ph].c : '#1e1e1e',
              boxShadow: phase === ph ? `0 0 8px ${PHASES[ph].g}` : 'none',
              transition: 'all 0.5s ease',
            }} />
          ))}
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: col.c, opacity: 0.55, marginLeft: 4,
            transition: 'color 0.7s ease',
          }}>
            {col.label}
          </span>
        </div>

        {/* Color legend */}
        <div style={{ marginTop: 20, display: 'flex', gap: 20 }}>
          {[
            { ph: 'blue', label: '> 10s' },
            { ph: 'sage', label: '≤ 10s' },
            { ph: 'red', label: '≤ 5s' },
          ].map(({ ph, label }) => (
            <div key={ph} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 14, height: 1, background: PHASES[ph].c, opacity: phase === ph ? 1 : 0.3, transition: 'opacity 0.5s' }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, letterSpacing: '0.1em', color: phase === ph ? PHASES[ph].c : '#333', transition: 'color 0.5s' }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ marginTop: 44, display: 'flex', gap: 10 }}>
          <button
            onClick={() => timeLeft > 0 && setRunning(r => !r)}
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 16, padding: '9px 28px',
              borderRadius: 4,
              border: `1px solid ${col.c}66`,
              background: running ? col.dim : 'transparent',
              color: col.c, cursor: timeLeft === 0 ? 'default' : 'pointer',
              boxShadow: running ? `0 0 24px ${col.dim}` : 'none',
              transition: 'all 0.3s ease',
              letterSpacing: '0.01em',
            }}
          >
            {running ? 'Pause' : timeLeft === 0 ? '— time up —' : 'Start'}
          </button>
          <button
            onClick={reset}
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 16, padding: '9px 28px',
              borderRadius: 4,
              border: '1px solid #222',
              background: 'transparent',
              color: '#484848', cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}