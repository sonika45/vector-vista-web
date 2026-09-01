import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-gradient">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end">
          <ul className="flex gap-3">
            {[
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Github, href: profile.github, label: "GitHub" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex rounded-xl glass p-2.5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground">
        © 2026 {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
