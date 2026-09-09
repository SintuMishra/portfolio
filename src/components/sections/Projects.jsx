import { projects, sectionContent } from "../../data/portfolio";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const { badge, title, description } = sectionContent.projects;

  return (
    <section tabIndex={-1} id="projects"
      aria-labelledby="projects-heading"
      className="section-shell"
    >
      <header className="mb-10 max-w-3xl sm:mb-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {badge}
        </p>
        <h2
          id="projects-heading"
          className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          {title}
        </h2>
        <p className="mt-5 text-base leading-8 text-secondary sm:text-lg">
          {description}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
