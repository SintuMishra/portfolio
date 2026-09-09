import { useEffect, useState } from "react";

// Choose the last section above the reading line, including tall sections.
export default function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let frame;
    function update() {
      frame = undefined;
      const readingLine = Math.min(window.innerHeight * 0.3, 220);
      let active = "";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= readingLine) active = id;
      }
      setActiveSection(active);
    }
    function schedule() {
      if (frame === undefined) frame = window.requestAnimationFrame(update);
    }
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [sectionIds]);

  return activeSection;
}
