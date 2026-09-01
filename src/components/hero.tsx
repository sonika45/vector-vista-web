import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { AiCoreVisual } from "@/components/ai-core-visual";
import { profile } from "@/lib/portfolio-data";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.7, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 aurora opacity-70" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
        <div className="max-w-xl">
          <motion.span
            {...rise(0.05)}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan" />
            {profile.badge}
          </motion.span>

          <motion.h1
            {...rise(0.14)}
            className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.4rem]"
          >
            <span className="text-gradient">AI/ML Engineer</span>
            <br />
            &amp; Full-Stack Developer
          </motion.h1>

          <motion.p {...rise(0.22)} className="mt-5 text-lg text-foreground/90">
            {profile.tagline}
          </motion.p>

          <motion.p {...rise(0.3)} className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            {profile.intro}
          </motion.p>

          <motion.div {...rise(0.38)} className="mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={() => go("projects")}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              View My Work <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <button
              onClick={() => go("contact")}
              className="group inline-flex items-center gap-1.5 px-2 py-3 text-sm font-medium text-cyan"
            >
              Let’s Connect
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="order-last"
        >
          <AiCoreVisual />
        </motion.div>
      </div>
    </section>
  );
}
