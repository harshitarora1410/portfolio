import { certifications, education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading title="Education" subtitle="My academic journey" />

        <div className="relative border-l border-border pl-8">
          {education.map((item) => (
            <div
              key={item.period}
              className="card-surface card-surface-hover relative mb-8 p-6 last:mb-0 sm:p-8"
            >
              <span className="bg-brand absolute -left-[42px] top-8 size-4 rounded-full ring-4 ring-background" />
              <p className="font-mono text-xs text-accent">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.degree}</h3>
              <p className="text-sm text-muted-foreground">{item.school}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading
            title="Certifications"
            subtitle="Professional certifications I've earned"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.title} className="card-surface card-surface-hover p-6">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cert.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
