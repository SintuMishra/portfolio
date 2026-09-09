import { Code2, Cpu, Database, Layout, Wrench, Braces } from "lucide-react";
import { skillsData, sectionContent, capabilityContext } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
const icons = [Code2, Cpu, Database, Layout, Wrench, Braces];
export default function Skills() {
  return <section tabIndex={-1} id="skills" aria-labelledby="skills-heading" className="section-shell">
    <SectionHeading id="skills-heading" {...sectionContent.skills} />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillsData.map((group, index) => {
        const Icon = icons[index];
        return <article key={group.title} className="technical-panel capability-panel flex flex-col p-6">
          <div className="mb-6 flex items-center gap-3">
            <span className="category-icon"><Icon aria-hidden="true" size={18} /></span>
            <h3 className="text-base font-semibold">{group.title}</h3>
          </div>
<p className="mb-5 text-sm leading-7 text-secondary">{capabilityContext[group.title]}</p>
          <ul className="flex flex-wrap gap-2">{group.skills.map(skill => <li className="tech-chip" key={skill}>{skill}</li>)}</ul>

        </article>;
      })}
    </div>
  </section>;
}
