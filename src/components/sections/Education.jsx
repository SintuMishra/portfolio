import { education, achievements, sectionContent } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
export default function Education() {
  return <section tabIndex={-1} id="education" aria-labelledby="education-heading" className="section-shell">
    <SectionHeading id="education-heading" {...sectionContent.education} />
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <article className="border-l-2 border-steel pl-6">
        <h3 className="max-w-lg text-xl font-semibold leading-8">{education.institution}</h3>
        <p className="body-copy mt-3">{education.degree}</p>
        <p className="body-copy mt-3">{education.years}</p>
        <p className="mt-4 text-sm font-medium">{education.grade}</p>
        <p className="mt-2 text-sm text-secondary text-muted">{education.distinction}</p>
      </article>
      <div>
        <h3 className="eyebrow mb-5">Certifications & practice</h3>
        <ul className="space-y-2">{achievements.map(item => <li key={item} className="rounded-md border border-steel bg-white/60 px-4 py-3 text-sm leading-6 dark:bg-slate-900/40">{item}</li>)}</ul>
      </div>
    </div>
  </section>;
}
