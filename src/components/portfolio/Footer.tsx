import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/60">
      <div className="hero-aurora pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="reveal mb-12 rounded-xl border border-border bg-surface-2/60 p-8 text-center sm:p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Open to opportunities
          </p>
          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
            Have a project in mind? <span className="text-gradient">Let's build it together.</span>
          </h3>
          <a
            href={`mailto:${profile.email}`}
            className="bg-brand glow-ring mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Mail className="size-4" /> Say Hello
          </a>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="reveal lg:col-span-2">
            <a href="#home" className="font-mono text-xl font-bold">
              <span className="text-gradient">{profile.name}</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {profile.role} crafting fast, reliable web applications with Go, React and Next.js. I
              care about clean architecture, thoughtful APIs and interfaces that feel effortless to
              use.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Github, href: profile.github, label: "GitHub" },
                { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="reveal">
            <h4 className="font-mono text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            Back to top{" "}
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
