import { AlertCircle, CheckCircle2, Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { profile } from "@/lib/portfolio-data";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;
type Status = "idle" | "loading" | "success" | "error";

const initial = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = () => {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (form.subject.trim().length < 3) next.subject = "Please add a short subject.";
    if (form.message.trim().length < 10) next.message = "Please write at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      const subject = encodeURIComponent(form.subject);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  };

  const field = (
    name: keyof typeof initial,
    label: string,
    type = "text",
    textarea = false,
  ) => (
    <div className={textarea ? "sm:col-span-2" : ""}>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          className="mt-2 w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          className="mt-2 w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
        />
      )}
      {errors[name] ? (
        <p id={`${name}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden /> {errors[name]}
        </p>
      ) : null}
    </div>
  );

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 aurora opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Build Something Intelligent"
          description="Have an idea, project, or opportunity? I’d love to connect and explore how we can turn it into something meaningful."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-3">
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: Linkedin, label: "LinkedIn", value: "sonika-kc", href: profile.linkedin },
              { icon: Github, label: "GitHub", value: `@${profile.githubUser}`, href: profile.github },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="flex items-center gap-4 rounded-2xl glass p-4 transition-all duration-300 hover:-translate-y-0.5 hover:glow"
              >
                <span className="inline-flex rounded-xl bg-secondary p-2.5 text-cyan">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </span>
                  <span className="block text-sm font-medium">{value}</span>
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={submit} noValidate className="rounded-2xl glass p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {field("name", "Name")}
                {field("email", "Email", "email")}
                <div className="sm:col-span-2">{field("subject", "Subject")}</div>
                {field("message", "Message", "text", true)}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                ) : (
                  <Send className="h-4 w-4" aria-hidden />
                )}
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>

              <div aria-live="polite" className="mt-4 text-sm">
                {status === "success" ? (
                  <p className="flex items-center gap-2 text-cyan">
                    <CheckCircle2 className="h-4 w-4" aria-hidden /> Thanks! Your email client
                    should now be open with the message ready to send.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="flex items-center gap-2 text-destructive">
                    <AlertCircle className="h-4 w-4" aria-hidden /> Please fix the highlighted
                    fields and try again.
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
