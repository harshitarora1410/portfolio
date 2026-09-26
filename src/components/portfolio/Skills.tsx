import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Technical Skills"
          subtitle="A showcase of my technical skills and expertise"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="card-surface card-surface-hover p-6">
              <h3 className="font-mono text-sm font-semibold text-accent">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {item}
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
