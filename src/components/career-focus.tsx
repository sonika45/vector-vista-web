import { BrainCircuit, Code2, LineChart, PenTool, type LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { careerFocus } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = { BrainCircuit, LineChart, Code2, PenTool };

export function CareerFocus() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Career focus"
          title="What I’m Working Towards"
          description="The roles I’m building my skills around, with AI/ML engineering leading the way."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {careerFocus.map((item, i) => {
            const Icon = icons[item.icon] ?? BrainCircuit;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <article
                  className={cn(
                    "group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1.5",
                    item.primary && "border-primary/40",
                  )}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "var(--gradient-brand)", opacity: 0.06 }}
                    aria-hidden
                  />
                  {item.primary && (
                    <span className="absolute right-4 top-4 rounded-full bg-gradient-brand px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-primary-foreground">
                      Primary
                    </span>
                  )}
                  <span className="relative inline-flex rounded-xl bg-secondary p-3 text-cyan">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="relative mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
