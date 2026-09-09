import useActiveSection from "../../hooks/useActiveSection";
import { useRef, useState } from "react";
import { X, Menu, Sun, Moon } from "lucide-react";
import { navItems, socialLinks, profile } from "../../data/portfolio";

const sectionIds = navItems.map(item => item.id);

export default function Navbar({ theme, toggleTheme }) {
  const activeSection = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  function handleKeyDown(event) {
    if (event.key === "Escape" && menuOpen) {
      setMenuOpen(false);
      menuButton.current?.focus();
    }
  }

  function followSection(event, id) {
    event.preventDefault();
    setMenuOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    section?.focus({ preventScroll: true });
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <header onKeyDown={handleKeyDown} className="sticky top-0 z-50 border-b border-steel nav-surface backdrop-blur-md">
      <div className="site-container flex min-h-20 items-center justify-between gap-3">
        <a href="#home" aria-label={`${profile.name}, home`} className="shrink-0 text-sm font-semibold tracking-tight sm:text-base">Sintu Mishra<span aria-hidden="true" className="text-accent">.</span></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
          {navItems.map(item => <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? "location" : undefined} className="text-link nav-link px-2 py-3 text-sm">{item.label}</a>)}
        </nav>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <a className="button-secondary hidden sm:inline-flex" href={socialLinks.resume} download>Resume <span aria-hidden="true">↓</span></a>
          <button type="button" onClick={toggleTheme} className="icon-button" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
          </button>
          <button type="button" ref={menuButton} onClick={() => setMenuOpen(open => !open)} className="icon-button xl:hidden" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
            {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen} className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-steel xl:hidden">
        <div className="site-container grid gap-1 py-4">
          {navItems.map(item => <a key={item.id} href={`#${item.id}`} onClick={event => followSection(event, item.id)} aria-current={activeSection === item.id ? "location" : undefined} className="text-link nav-link rounded px-3 py-3 text-sm">{item.label}</a>)}
          <a className="button-secondary mt-2 justify-self-start" href={socialLinks.resume} download>Download Resume <span aria-hidden="true">↓</span></a>
        </div>
      </nav>
    </header>
  );
}
