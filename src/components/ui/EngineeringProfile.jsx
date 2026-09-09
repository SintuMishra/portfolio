import portrait from "../../assets/sintu-mishra-profile.png";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { engineeringProfile, experience } from "../../data/portfolio";

export default function EngineeringProfile() {
  const reducedMotion = useReducedMotion();
  return (
    <aside aria-label="Engineering system map" className="profile-panel technical-panel system-map-panel">
      <div className="flex items-center justify-between gap-4 border-b border-steel pb-5 dark:border-slate-700/60">
        <p className="eyebrow">Engineering system map</p>
        <span aria-hidden="true" className="system-mark" />
      </div>
      <div className="portrait-system-composition">
        <img src={portrait} alt="Sintu Mishra" width={1254} height={1254} fetchPriority="high" className="professional-portrait" />
        <div className="portrait-system-detail">
          <p className="mt-4 text-sm text-muted">Connected disciplines · conceptual view</p>
      <div className="discipline-map">
        <svg aria-hidden="true" className="map-wiring" viewBox="0 0 400 360" preserveAspectRatio="none" fill="none">
          <Motion.path d="M 90 80 H 200 V 280 H 310 M 310 80 H 200 M 90 280 H 200" stroke="currentColor" strokeWidth="1.5"
            initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} />
          <circle cx="200" cy="180" r="25" className="map-hub" />
          <circle cx="200" cy="180" r="5" fill="currentColor" />
          <path d="M 200 148 V 156 M 200 204 V 212 M 168 180 H 176 M 224 180 H 232" stroke="currentColor" />
        </svg>
        <dl className="discipline-nodes">
          {engineeringProfile.map(item => (
            <div key={item.label} className="discipline-node">
              <dt className="mb-2 flex items-center gap-2 text-sm font-semibold"><span aria-hidden="true" className="flow-port" />{item.label}</dt>
              <dd className="text-sm leading-6 text-secondary">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 border-t border-steel pt-5 dark:border-slate-700/60">
        <p className="eyebrow">Current role</p>
        <div><p className="text-sm font-semibold">{experience.role}</p><p className="mt-1 text-sm text-secondary text-muted">{experience.company}</p></div>
      </div>
    </aside>
  );
}
