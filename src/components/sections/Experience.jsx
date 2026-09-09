import { Code2, Cpu, Wrench, FileText } from "lucide-react";
const domainIcons = [Code2, Cpu, Wrench, FileText];
import { experience, experienceThemes, sectionContent } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
export default function Experience() {
  return <section tabIndex={-1} id="experience" aria-labelledby="experience-heading" className="section-shell">
    <SectionHeading id="experience-heading" {...sectionContent.experience} />
    <article className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.5fr] lg:gap-12">
      <header className="metadata-panel relative border-l-2 border-l-cyan-700 dark:border-l-cyan-400">
        <p className="eyebrow mb-5">Current role</p>
        <h3 className="text-xl font-semibold">{experience.company}</h3>
        <p className="mt-2 font-medium leading-7 text-accent">{experience.role}</p>
        <div className="mt-6 border-t border-steel pt-4 text-sm leading-7 text-secondary text-muted">
          <p>{experience.dates}</p><p>{experience.location}</p>
        </div>
      </header>
      <div className="experience-track space-y-7">
        {experienceThemes.map((theme, index) => { const Icon = domainIcons[index]; return <div key={theme.title} className="experience-domain relative ml-7 p-5 sm:p-6">
          <span aria-hidden="true" className="timeline-node" />
          <h4 className="mb-3 flex items-center gap-3 text-sm font-semibold tracking-wide"><Icon aria-hidden="true" size={18} className="shrink-0 text-accent" />{theme.title}</h4>
          <ul className="space-y-2">{theme.contributions.map(item => <li key={item} className="body-copy">{item}</li>)}</ul>
        </div>; })}
      </div>
    </article>
  </section>;
}
