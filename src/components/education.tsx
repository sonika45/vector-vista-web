import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <ol className="relative mt-14 space-y-8 border-l border-border pl-8">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.1}>
              <li className="relative">
                <span
                  className="absolute -left-[2.55rem] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground"
                  aria-hidden
                >
                  <GraduationCap className="h-3.5 w-3.5" />
                </span>
                <div className="rounded-2xl glass p-6">
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-sm text-cyan">{item.institution}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {item.status}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
