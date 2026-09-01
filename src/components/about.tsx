import {
  BrainCircuit,
  CalendarClock,
  GraduationCap,
  Layers,
  PenTool,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { aboutCards, aboutParagraphs } from "@/lib/portfolio-data";

const icons: Record<string, LucideIcon> = {
  GraduationCap,
  CalendarClock,
  BrainCircuit,
  Layers,
  PenTool,
};

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About" title="A little about me" />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="space-y-5">
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 24)} className="leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutCards.map((card, i) => {
              const Icon = icons[card.icon] ?? BrainCircuit;
              return (
                <Reveal
                  key={card.label}
                  delay={i * 0.08}
                  className={i === aboutCards.length - 1 ? "sm:col-span-2" : ""}
                >
                  <div className="group h-full rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:glow">
                    <span className="inline-flex rounded-xl bg-gradient-brand p-2.5 text-primary-foreground">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-base font-semibold">{card.label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{card.note}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
