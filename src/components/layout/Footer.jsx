import { profile } from "../../data/portfolio";
import SocialLinks from "../ui/SocialLinks";
export default function Footer() {
  return <footer className="border-t border-steel">
    <div className="site-container flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-secondary text-muted">© {new Date().getFullYear()} {profile.name}</p>
      <SocialLinks />
    </div>
  </footer>;
}
