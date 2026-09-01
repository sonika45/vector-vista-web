import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "@/lib/portfolio-data";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setDone(true), reduce ? 100 : 1100);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative flex h-28 w-28 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-gradient-brand opacity-20 blur-xl" />
              <span
                className="absolute inset-0 rounded-full border border-transparent"
                style={{
                  borderTopColor: "var(--cyan)",
                  borderRightColor: "var(--violet)",
                  animation: "spin-slow 1.4s linear infinite",
                }}
              />
              <span
                className="absolute inset-3 rounded-full border border-transparent"
                style={{
                  borderBottomColor: "var(--primary)",
                  animation: "spin-slow 2s linear infinite reverse",
                }}
              />
              <span className="font-display text-2xl font-semibold text-gradient">
                {profile.initials}
              </span>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-muted-foreground">
              Initialising
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
