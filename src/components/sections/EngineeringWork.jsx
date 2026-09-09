import SystemFlow from "../ui/SystemFlow";
import { engineeringWork, engineeringFlows, sectionContent } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
export default function EngineeringWork() {
  return <section tabIndex={-1} id="engineering-work" aria-labelledby="engineering-work-heading" className="section-shell">
    <SectionHeading id="engineering-work-heading" {...sectionContent.engineeringWork} />
    <div className="grid gap-5 md:grid-cols-2">
      {engineeringWork.map(work => <article key={work.id} aria-labelledby={work.id} className="technical-panel engineering-card flex flex-col p-6 sm:p-8">
        <div aria-hidden="true" className="mb-6 flex items-center gap-2"><span className="system-mark" /><span className="h-px w-12 bg-slate-300 dark:bg-slate-700" /></div>
        <h3 id={work.id} className="text-xl font-semibold leading-8 tracking-tight">{work.title}</h3>
        <SystemFlow steps={engineeringFlows[work.id]} label="System flow" conceptual />
        <dl className="mt-6 space-y-5">
          <div><dt className="eyebrow">Challenge</dt><dd className="body-copy mt-2">{work.challenge}</dd></div>
          <div><dt className="eyebrow">Contribution</dt><dd className="body-copy mt-2">{work.contribution}</dd></div>
        </dl>
        <div className="mt-auto pt-6">
          <p className="eyebrow mb-3">Engineering areas</p>
          <ul className="flex flex-wrap gap-2">{work.areas.map(area => <li className="tech-chip" key={area}>{area}</li>)}</ul>
        </div>
      </article>)}
    </div>
  </section>;
}
