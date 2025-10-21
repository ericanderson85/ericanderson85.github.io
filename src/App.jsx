import About from "./components/pages/about/About";
import Projects from "./components/pages/projects/Projects";
import Experience from "./components/pages/experience/Experience";
import Contact from "./components/pages/contact/Contact";
import Sidebar from "./components/sidebar/Sidebar";
import { useState, useEffect, useRef } from "react"

export default function App() {
  const [active, setActive] = useState("ABOUT");
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sections = Object.entries(sectionRefs.current);
      const containerRect = container.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      const isAtTop = container.scrollTop < 50;
      const isAtBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 50;

      if (isAtTop) {
        setActive('ABOUT');
        return;
      }

      if (isAtBottom) {
        setActive('CONTACT');
        return;
      }

      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach(([id, element]) => {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - centerY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = id;
        }
      });

      if (closestSection) {
        setActive(closestSection.toUpperCase());
      }
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-neutral-50 via-neutral-150 to-neutral-250 flex p-2 gap-2">
      <Sidebar active={active} onNavigate={scrollToSection} />
      <div
        ref={scrollContainerRef}
        className="w-full h-full border-1 border-neutral-200/50 rounded-4xl flex flex-col items-center bg-white/50 backdrop-blur-md p-4 pb-20 overflow-y-auto scroll-smooth shadow-xl"
      >
        <div className="w-full flex flex-col gap-28">
          <section
            id="about"
            ref={(el) => sectionRefs.current['about'] = el}
            className="flex items-center justify-center"
          >
            <About />
          </section>

          <section
            id="experience"
            ref={(el) => sectionRefs.current['experience'] = el}
            className="flex items-center justify-center"
          >
            <Experience />
          </section>

          <section
            id="projects"
            ref={(el) => sectionRefs.current['projects'] = el}
            className="flex items-center justify-center"
          >
            <Projects />
          </section>

          <section
            id="contact"
            ref={(el) => sectionRefs.current['contact'] = el}
            className="flex items-center justify-center"
          >
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}
