import { profile, socialLinks } from "../../data/portfolio";
import SocialLinks from "../ui/SocialLinks";
import Reveal from "../ui/Reveal";
import EngineeringProfile from "../ui/EngineeringProfile";

export default function Hero() {
  return (
    <section tabIndex={-1} id="home" aria-labelledby="hero-heading" className="site-container hero-system py-14 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="hero-grid" />
      <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <Reveal>
          <p className="eyebrow mb-7 flex items-center gap-3"><span aria-hidden="true" className="h-px w-8 bg-cyan-700 dark:bg-cyan-400" />{profile.location}</p>
          <h1 id="hero-heading" className="text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-7xl lg:text-[5.25rem]">{profile.name}</h1>
          <p className="mt-7 text-2xl font-medium tracking-tight sm:text-3xl">{profile.role}</p>
          <p className="mt-2 text-xl text-accent sm:text-2xl">{profile.focus}</p>
          <p className="body-copy mt-6 max-w-xl">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button-primary" href="#engineering-work">View Engineering Work <span aria-hidden="true">↗</span></a>
            <a className="button-secondary" href={socialLinks.resume} download>Download Resume <span aria-hidden="true">↓</span></a>
          </div>
          <div className="mt-5"><SocialLinks /></div>
        </Reveal>
        <EngineeringProfile />
      </div>
    </section>
  );
}
