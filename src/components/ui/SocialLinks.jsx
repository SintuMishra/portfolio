import { socialLinks } from "../../data/portfolio";

export default function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
      {[["github", "GitHub"], ["linkedin", "LinkedIn"], ["email", "Email"]].map(([key, label]) => (
        <li key={key}>
          <a className="text-link inline-flex min-h-11 items-center" href={socialLinks[key]}
            target={key === "email" ? undefined : "_blank"}
            rel={key === "email" ? undefined : "noopener noreferrer"}
            aria-label={key === "email" ? "Email Sintu Mishra" : `${label} profile (opens in a new tab)`}>
            {label}<span aria-hidden="true" className="ml-1">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
