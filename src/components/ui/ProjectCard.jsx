import SystemFlow from "./SystemFlow";
import { projectArchitecture, projectDomains } from "../../data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const linkStyles =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold motion-safe:transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600 dark:focus-visible:outline-cyan-300";

export default function ProjectCard({ project }) {
  const headingId = `project-${project.id}`;
  const sources = project.sources ?? [{ label: "GitHub / Source", href: project.github }];

  return (
    <article
      aria-labelledby={headingId}
      className={`technical-panel project-panel flex min-w-0 flex-col p-6 sm:p-8 ${
        project.flagship
          ? "flagship-panel md:col-span-2 lg:p-10"
          : project.classification === "Selected Project" ? "md:col-span-2" : ""
      }`}
    >
      <div className={`flex-1 ${project.flagship ? "lg:grid lg:grid-cols-[1fr_1.35fr] lg:gap-12" : ""}`}>
        <header>
          <p className="mb-5 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {project.flagship && <span aria-hidden="true" className="h-1.5 w-1.5 bg-current" />}
            {project.classification}
          </p>
          <h3
            id={headingId}
            className={`font-semibold tracking-tight text-ink ${
              project.flagship ? "text-2xl sm:text-3xl" : "text-2xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-3 text-sm font-medium text-muted">
            {project.category}
          </p>
          {projectArchitecture[project.id] && (
            <SystemFlow steps={projectArchitecture[project.id]} label="Application architecture" />
          )}
        </header>

        <div className={project.flagship ? "mt-6 lg:mt-0" : "mt-6"}>
          <p className="text-base leading-8 text-secondary">
            {project.description}
          </p>
          {projectDomains[project.id] && (
            <div className="mt-6">
              <p className="eyebrow mb-3">Core capabilities</p>
              <ul className="domain-grid">{projectDomains[project.id].map(domain => <li key={domain}><span aria-hidden="true" className="flow-port" />{domain}</li>)}</ul>
            </div>
          )}
          <ul aria-label={`${project.title} technologies`} className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((technology) => (
              <li
                key={technology}
                className="rounded-md border border-steel px-2.5 py-1.5 text-sm font-medium leading-5 text-secondary"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 border-t border-steel pt-6">
        {sources.map((source, index) => (
          <a
            key={source.href}
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} ${source.label} on GitHub (opens in a new tab)`}
            className={`${linkStyles} ${index === 0 ? "button-primary" : "button-secondary"}`}
          >
            <FaGithub aria-hidden="true" className="h-4 w-4" />
            {source.label}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        ))}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo (opens in a new tab)`}
            className={`${linkStyles} button-secondary`}
          >
            Live Demo
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}
