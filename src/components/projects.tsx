import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ExternalLink, Github, Info, ImageIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/reveal";
import { projectFilters, projects, type Project } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const reduce = useReducedMotion();

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => (p.categories as string[]).includes(filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="Project slots are ready and waiting — each card can be filled with a real project, its stack and its links."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-all duration-300",
                filter === f
                  ? "bg-gradient-brand text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                key={project.name}
                layout
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : i * 0.05 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl glass transition-all duration-300 hover:-translate-y-1.5 hover:glow"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center aurora">
                      <ImageIcon className="h-7 w-7 text-muted-foreground" aria-hidden />
                      <span className="sr-only">Project thumbnail placeholder</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold">{project.name}</h3>
                    {project.placeholder && (
                      <span className="shrink-0 rounded-full border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                        Placeholder
                      </span>
                    )}
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-secondary px-2 py-1 font-mono text-[10px] text-secondary-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <a
                      href={project.github ?? "#"}
                      aria-disabled={!project.github}
                      onClick={(e) => !project.github && e.preventDefault()}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs transition-colors",
                        project.github
                          ? "hover:border-primary/50"
                          : "cursor-not-allowed text-muted-foreground",
                      )}
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                    <a
                      href={project.demo ?? "#"}
                      aria-disabled={!project.demo}
                      onClick={(e) => !project.demo && e.preventDefault()}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs transition-colors",
                        project.demo
                          ? "hover:border-primary/50"
                          : "cursor-not-allowed text-muted-foreground",
                      )}
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                    <button
                      onClick={() => setSelected(project)}
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs text-cyan transition-colors hover:text-foreground"
                    >
                      <Info className="h-3.5 w-3.5" /> View Details
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="glass sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{selected?.name}</DialogTitle>
            <DialogDescription>{selected?.description}</DialogDescription>
          </DialogHeader>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {selected?.details ??
              "Detailed write-up coming soon — this slot is reserved for the full project story: goal, approach, stack and outcome."}
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {selected?.tech.map((t) => (
              <li
                key={t}
                className="rounded-md bg-secondary px-2 py-1 font-mono text-[10px] text-secondary-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </section>
  );
}
