import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="My Projects" subtitle="Here are some of my recent projects" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card-surface card-surface-hover flex flex-col overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-6">
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-secondary/40 bg-secondary/10 px-2.5 py-1 font-mono text-[11px] text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-6 flex gap-4 text-sm">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-accent transition-opacity hover:opacity-80"
                  >
                    <ExternalLink className="size-4" /> Live Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="size-4" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
