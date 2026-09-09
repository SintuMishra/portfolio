# Sintu Mishra — Engineering Portfolio

React 19 + Vite portfolio focused on backend software, systems, and robotics work. Styling uses Tailwind CSS, with a restrained Framer Motion hero reveal that respects reduced motion.

## Development

Use Node.js 22.12+ or a supported newer LTS release.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm audit
```

Work stays on `redesign/industrial-portfolio`. Builds create local `dist/` output and do not deploy the site.

## Architecture

- `src/App.jsx` composes the page and connects the theme hook.
- `src/components/layout/` contains navigation and footer.
- `src/components/sections/` contains Hero, About, Experience, EngineeringWork, Projects, Skills, Education, and Contact.
- `src/components/ui/` contains shared headings, social links, project cards, and a reduced-motion-aware reveal.
- `src/data/portfolio.js` holds owner-supplied professional details, sanitized engineering summaries, capabilities, education, and audited personal project data.
- `src/hooks/useTheme.js` handles local preference persistence, system preference, and cross-tab synchronization.
- `src/index.css` defines shared containers, surfaces, typography, buttons, focus styles, and reduced-motion behavior.

Resume downloads are actions in navigation and the hero. Contact uses direct email/profile links; no form submission service or environment variables are needed. Existing images and resume assets are preserved.

## Content boundaries

Professional Engineering Work and personal GitHub Projects are distinct. Company work is described at a general level without internal infrastructure, identifiers, datasets, credentials, or source code. Professional facts and capability lists were supplied by the owner; they are not inferred from public project repositories.

The five personal projects are InfraFlow ERP, SinFleet ERP, Team Task Manager, Survey Campaign Builder, and Campus Issue Tracker. Campus Issue Tracker is a selected Java backend project with separate backend and frontend source links; its demo is omitted because backend connectivity was not verified. Only InfraFlow and Survey display demo links. A demo link does not assert production usage or verified end-to-end availability.

## Review before publication

Verify owner-supplied employment dates, education, certificates, capability wording, and resume consistency. Review both themes at 320, 375, 430, 768, 1024, and 1440+ pixels. Check menu keyboard access/Escape, section links, reduced motion, resume downloads, and external-link labels. No canonical URL or OG image is invented.

Never place actual secrets in `VITE_*` variables: they become public browser code. Local environment files remain ignored.
