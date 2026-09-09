import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import EngineeringWork from "./components/sections/EngineeringWork";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen bg-page text-ink">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content" tabIndex={-1} className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <EngineeringWork />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
