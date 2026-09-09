import { profile, sectionContent, engineeringProfile } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
export default function About() {
  return <section tabIndex={-1} id="about" aria-labelledby="about-heading" className="section-shell">
    <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
      <div>
        <SectionHeading id="about-heading" {...sectionContent.about} />
        <p className="body-copy max-w-2xl">{profile.about}</p>
      </div>
      <aside aria-label="Engineering focus" className="metadata-panel lg:mt-10">
        <p className="eyebrow mb-5">Engineering focus</p>
        <ul className="grid grid-cols-2 gap-3">{engineeringProfile.map(item => <li key={item.label} className="flex items-center gap-3 py-2 text-sm font-medium"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-700 dark:bg-cyan-400" />{item.label}</li>)}</ul>
        <p className="mt-5 border-t border-steel pt-5 text-sm leading-7 text-secondary text-muted">{profile.capabilities}</p>
      </aside>
    </div>
  </section>;
}
