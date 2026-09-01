import { useEffect, useState } from "react";

/** Subtle glowing dot + ring cursor. Desktop / fine-pointer only. */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        const el = e.target as HTMLElement | null;
        setActive(!!el?.closest("a,button,[data-cursor-hover],input,textarea,[role='button']"));
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        className="absolute rounded-full bg-cyan transition-transform duration-150"
        style={{
          width: 6,
          height: 6,
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0) scale(${active ? 1.6 : 1})`,
          boxShadow: "0 0 12px var(--cyan)",
        }}
      />
      <div
        className="absolute rounded-full border border-primary/60 transition-all duration-300 ease-out"
        style={{
          width: active ? 46 : 26,
          height: active ? 46 : 26,
          transform: `translate3d(${pos.x - (active ? 23 : 13)}px, ${pos.y - (active ? 23 : 13)}px, 0)`,
          opacity: active ? 0.9 : 0.45,
          boxShadow: active ? "0 0 24px -6px var(--primary)" : "none",
        }}
      />
    </div>
  );
}
