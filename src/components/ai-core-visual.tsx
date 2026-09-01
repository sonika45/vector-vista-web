import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const techCards = [
  { name: "Python", angle: -18, radius: 46, depth: 1, dur: 22 },
  { name: "JavaScript", angle: 62, radius: 44, depth: 0.7, dur: 27 },
  { name: "Figma", angle: 145, radius: 47, depth: 1.2, dur: 24 },
  { name: "HTML", angle: 208, radius: 42, depth: 0.6, dur: 30 },
  { name: "CSS", angle: 292, radius: 45, depth: 0.9, dur: 26 },
];

const particles = Array.from({ length: 22 }, (_, i) => ({
  x: (i * 37) % 100,
  y: (i * 53) % 100,
  size: 1.5 + ((i * 7) % 4),
  dur: 6 + ((i * 3) % 7),
  delay: (i % 9) * 0.4,
}));

/** Interactive futuristic AI neural core with orbiting glass tech cards. */
export function AiCoreVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [interactive, setInteractive] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setInteractive(fine && !reduce);
  }, [reduce]);

  useEffect(() => {
    if (!interactive) return;
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setPointer({
        x: (e.clientX - (r.left + r.width / 2)) / r.width,
        y: (e.clientY - (r.top + r.height / 2)) / r.height,
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [interactive]);

  const px = pointer.x;
  const py = pointer.y;
  const visibleParticles = particles.slice(0, 22);

  return (
    <div
      ref={ref}
      aria-hidden
      className="relative mx-auto aspect-square w-full max-w-[34rem] select-none"
      style={{ perspective: "1200px" }}
    >
      {/* ambient glow */}
      <div
        className="absolute inset-[8%] rounded-full opacity-70 blur-3xl"
        style={{ background: "var(--gradient-brand)", opacity: 0.28 }}
      />

      {/* orbit rings */}
      {[
        { size: 96, dur: 34, dir: 1, tilt: 68 },
        { size: 78, dur: 24, dir: -1, tilt: 74 },
        { size: 58, dur: 18, dir: 1, tilt: 62 },
      ].map((ring, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{
            width: `${ring.size}%`,
            height: `${ring.size}%`,
            borderColor: i % 2 ? "color-mix(in oklab, var(--violet) 45%, transparent)" : "color-mix(in oklab, var(--cyan) 45%, transparent)",
            transform: `translate(-50%, -50%) rotateX(${ring.tilt + py * 6}deg) rotateY(${px * 8}deg)`,
            animation: reduce ? undefined : `spin-slow ${ring.dur}s linear infinite ${ring.dir < 0 ? "reverse" : ""}`,
            opacity: 0.5,
          }}
        />
      ))}

      {/* neural network lines */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        style={{ transform: `translate3d(${px * -10}px, ${py * -10}px, 0)` }}
      >
        <defs>
          <linearGradient id="neural" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" />
            <stop offset="100%" stopColor="var(--violet)" />
          </linearGradient>
        </defs>
        {[
          "M200,200 L96,104",
          "M200,200 L308,116",
          "M200,200 L320,246",
          "M200,200 L120,300",
          "M200,200 L206,64",
          "M200,200 L84,214",
          "M200,200 L262,326",
        ].map((d, i) => (
          <path
            key={d}
            d={d}
            stroke="url(#neural)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="6 12"
            opacity={0.55}
            style={{ animation: reduce ? undefined : `dash-flow ${8 + i}s linear infinite` }}
          />
        ))}
        {[
          [96, 104],
          [308, 116],
          [320, 246],
          [120, 300],
          [206, 64],
          [84, 214],
          [262, 326],
        ].map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3.4"
            fill="var(--cyan)"
            opacity={0.85}
            style={{ animation: reduce ? undefined : `pulse-glow ${3 + (i % 4)}s ease-in-out infinite` }}
          />
        ))}
      </svg>

      {/* core */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full glass"
        style={{ x: px * 16, y: py * 16 }}
        animate={reduce ? undefined : { scale: [1, 1.045, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: "var(--gradient-brand)", opacity: 0.5, filter: "blur(14px)" }}
        />
        <div
          className="absolute inset-[14%] rounded-full border"
          style={{
            borderColor: "color-mix(in oklab, var(--cyan) 60%, transparent)",
            animation: reduce ? undefined : "spin-slow 12s linear infinite",
          }}
        />
        <div
          className="relative h-[46%] w-[46%] rounded-full bg-gradient-brand"
          style={{ boxShadow: "0 0 48px -6px var(--primary)" }}
        />
      </motion.div>

      {/* orbiting technology cards */}
      {techCards.map((card) => (
        <div
          key={card.name}
          className="absolute left-1/2 top-1/2 h-0 w-0"
          style={{
            animation: reduce ? undefined : `spin-slow ${card.dur}s linear infinite`,
            transform: `rotate(${card.angle}deg)`,
          }}
        >
          <div
            style={{
              transform: `translate(-50%, -50%) translateX(${card.radius * 3.2}px)`,
            }}
          >
            <motion.div
              className="glass rounded-xl px-3 py-2 shadow-elevated"
              style={{
                animation: reduce ? undefined : `float-y ${5 + card.depth * 2}s ease-in-out infinite`,
                x: px * 26 * card.depth,
                y: py * 26 * card.depth,
              }}
              whileHover={{ scale: 1.12 }}
            >
              <span
                className="whitespace-nowrap font-mono text-[11px] font-medium tracking-wide"
                style={{ animation: reduce ? undefined : `spin-slow ${card.dur}s linear infinite reverse` }}
              >
                {card.name}
              </span>
            </motion.div>
          </div>
        </div>
      ))}

      {/* holographic data panel */}
      <div
        className="absolute bottom-[6%] left-[2%] hidden w-40 rounded-xl glass p-3 sm:block"
        style={{ transform: `translate3d(${px * -22}px, ${py * -22}px, 0)` }}
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
          model output
        </p>
        <svg viewBox="0 0 120 40" className="mt-2 h-10 w-full">
          <polyline
            points="0,32 18,26 34,29 52,16 70,20 88,9 106,12 120,4"
            fill="none"
            stroke="var(--cyan)"
            strokeWidth="1.6"
          />
          <polyline
            points="0,36 18,33 34,34 52,26 70,28 88,20 106,22 120,15"
            fill="none"
            stroke="var(--violet)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
        </svg>
      </div>

      {/* code snippet panel */}
      <div
        className="absolute right-[1%] top-[6%] hidden rounded-xl glass px-3 py-2 sm:block"
        style={{ transform: `translate3d(${px * 24}px, ${py * 24}px, 0)` }}
      >
        <pre className="font-mono text-[9px] leading-relaxed text-muted-foreground">
          {`model.fit(X, y)\npredict(x_new)`}
        </pre>
      </div>

      {/* dataset bars */}
      <div
        className="absolute left-[4%] top-[16%] hidden items-end gap-1 sm:flex"
        style={{ transform: `translate3d(${px * -16}px, ${py * -16}px, 0)` }}
      >
        {[10, 20, 14, 26, 18, 30].map((h, i) => (
          <span
            key={i}
            className="w-1.5 rounded-full bg-gradient-brand"
            style={{ height: h, opacity: 0.75 }}
          />
        ))}
      </div>

      {/* particles */}
      {visibleParticles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cyan"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0.5,
            boxShadow: "0 0 8px var(--cyan)",
            animation: reduce ? undefined : `float-y ${p.dur}s ease-in-out ${p.delay}s infinite, pulse-glow ${p.dur / 1.5}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
