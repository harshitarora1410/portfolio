import { experience } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="Where I've been building software professionally"
        />

        <div className="relative border-l border-border pl-8">
          {experience.map((job) => (
            <div
              key={job.period}
              className="card-surface card-surface-hover relative mb-8 p-6 last:mb-0 sm:p-8"
            >
              <span className="bg-brand absolute -left-[42px] top-8 size-4 rounded-full ring-4 ring-background" />
              <p className="font-mono text-xs text-accent">{job.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{job.title}</h3>
              <p className="text-sm text-muted-foreground">
                {job.company} — {job.location}
              </p>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
