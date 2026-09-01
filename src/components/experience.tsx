import { Briefcase } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { experiences } from "@/lib/portfolio-data";

/** Hidden entirely while `experiences` is empty — no placeholder claims. */
export function Experience() {
  if (experiences.length === 0) return null;

  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Experience" title="Experience & Activities" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {experiences.map((item, i) => (
            <Reveal key={`${item.title}-${i}`} delay={i * 0.08}>
              <article className="h-full rounded-2xl glass p-6 transition-transform duration-300 hover:-translate-y-1">
                <span className="inline-flex rounded-lg bg-secondary p-2 text-cyan">
                  <Briefcase className="h-4 w-4" aria-hidden />
                </span>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {item.type}
                </p>
                <h3 className="mt-1 text-base font-semibold">{item.title}</h3>
                {item.organisation ? (
                  <p className="mt-1 text-sm text-cyan">{item.organisation}</p>
                ) : null}
                {item.period ? (
                  <p className="mt-1 text-xs text-muted-foreground">{item.period}</p>
                ) : null}
                {item.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
