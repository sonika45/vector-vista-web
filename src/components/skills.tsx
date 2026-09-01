import { motion, useReducedMotion } from "motion/react";
import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  MonitorSmartphone,
  PenTool,
  Server,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { skillGroups, skillLevelWidth } from "@/lib/portfolio-data";

const icons: Record<string, LucideIcon> = {
  Code2,
  MonitorSmartphone,
  Server,
  Database,
  BrainCircuit,
  PenTool,
  GitBranch,
};

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 aurora opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          description="Grouped by area, with honest qualitative levels instead of invented numbers."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = icons[group.icon] ?? Code2;
            return (
              <Reveal key={group.category} delay={gi * 0.06}>
                <div className="h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:glow">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex rounded-lg bg-secondary p-2 text-cyan">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold">{group.category}</h3>
                  </div>

                  <ul className="mt-5 space-y-4">
                    {group.skills.map((skill, si) => (
                      <li key={skill.name}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                            {skill.level}
                          </span>
                        </div>
                        <div
                          className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary"
                          role="img"
                          aria-label={`${skill.name}: ${skill.level}`}
                        >
                          <motion.span
                            className="block h-full rounded-full bg-gradient-brand"
                            initial={reduce ? false : { width: 0 }}
                            whileInView={{ width: skillLevelWidth[skill.level] }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{
                              duration: reduce ? 0 : 0.9,
                              delay: reduce ? 0 : si * 0.08,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            style={reduce ? { width: skillLevelWidth[skill.level] } : {}}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
