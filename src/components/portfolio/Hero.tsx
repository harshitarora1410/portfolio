import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="hero-aurora relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <p
            style={{ animationDelay: "0.2s" }}
            className="hero-in font-mono text-sm text-accent sm:text-base"
          >
            Hello, my name is
          </p>
          <h1
            style={{ animationDelay: "0.4s" }}
            className="hero-in mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
            <br />
            <span className="text-gradient">{profile.role}</span>
          </h1>
          <p
            style={{ animationDelay: "0.6s" }}
            className="hero-in mt-5 text-xl text-muted-foreground sm:text-2xl"
          >
            {profile.tagline}
          </p>
          <p
            style={{ animationDelay: "0.8s" }}
            className="hero-in mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {profile.intro}
          </p>

          <div style={{ animationDelay: "1s" }} className="hero-in mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-brand inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div
        style={{ animationDelay: "1.2s" }}
        className="hero-fade absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs">Scroll Down</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <span className="block h-2.5 w-1 animate-scroll-mouse rounded-full bg-muted-foreground" />
        </span>
      </div>
    </section>
  );
}
