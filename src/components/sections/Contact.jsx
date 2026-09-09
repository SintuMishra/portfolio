import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { profile, socialLinks, contactContent } from "../../data/portfolio";

export default function Contact() {
  return (
    <section tabIndex={-1} id="contact" aria-labelledby="contact-heading" className="section-shell">
      <div className="technical-panel contact-panel p-6 sm:p-10 lg:p-12">
        <p className="eyebrow mb-5">Contact</p>
        <h2 id="contact-heading" className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{contactContent.headline}</h2>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <p className="body-copy max-w-2xl">{contactContent.description}</p>
          <div className="contact-status self-start">
            <p className="flex items-start gap-3 text-sm font-medium"><span aria-hidden="true" className="status-dot" />{contactContent.status}</p>
            <p className="mt-4 flex items-center gap-3 text-sm text-muted"><MapPin aria-hidden="true" size={16} />{profile.location}</p>
          </div>
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="button-primary" href={socialLinks.email} aria-label="Email Sintu Mishra"><Mail aria-hidden="true" size={17} />Email Me</a>
          <a className="button-secondary" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)">LinkedIn<ArrowUpRight aria-hidden="true" size={17} /></a>
          <a className="button-secondary" href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)">GitHub<ArrowUpRight aria-hidden="true" size={17} /></a>
        </div>
      </div>
    </section>
  );
}
