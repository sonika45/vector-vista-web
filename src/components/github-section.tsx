import { GitFork, Github, Star } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { profile, repositories } from "@/lib/portfolio-data";

export function GithubSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="GitHub"
          title="Code & Projects"
          description="Everything I build and experiment with lives on GitHub."
        />

        {repositories.length > 0 ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {repositories.map((repo, i) => (
              <Reveal key={repo.name} delay={i * 0.07}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:glow"
                >
                  <h3 className="font-mono text-sm font-semibold">{repo.name}</h3>
                  {repo.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {repo.description}
                    </p>
                  ) : null}
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    {repo.language ? (
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-gradient-brand" aria-hidden />
                        {repo.language}
                      </span>
                    ) : null}
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" aria-hidden /> Stars
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" aria-hidden /> Forks
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-12">
            <div className="mx-auto max-w-xl rounded-2xl glass p-8 text-center">
              <span className="inline-flex rounded-xl bg-gradient-brand p-3 text-primary-foreground">
                <Github className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold">@{profile.githubUser}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Repository cards can be listed here once you choose which ones to feature. For now,
                head straight to the profile.
              </p>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Github className="h-4 w-4" /> View GitHub Profile
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
