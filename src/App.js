import { useState, useRef, useEffect } from 'react'

import { ThemeProvider } from "@emotion/react";
import { styled } from '@mui/material/styles';

import SectionHeader from "./components/SectionHeader";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import ErrorBoundary from "./components/ErrorBoundary";
import Landing from "./components/sections/Landing";
import About from "./components/sections/About";
import ExperienceList from "./components/sections/ExperienceList";
import ProjectList from "./components/sections/ProjectList";
import SKillsList from "./components/sections/SkillsList";
import LanguageList from "./components/sections/LanguageList";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import theme from "./utils/theme";

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const StyledSection = styled('section')(({ theme }) => ({
  marginBottom: theme.spacing(6)
}));
function Section(props) {
  return (
    <ErrorBoundary>
      <StyledSection {...props} />
    </ErrorBoundary>
  )
}

function App() {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const fifthRef = useRef(null);
  const sixthRef = useRef(null);

  useEffect(() => {
    const sectionRefs = [
      { section: "about", ref: firstRef },
      { section: "experience", ref: secondRef },
      { section: "projects", ref: thirdRef },
      { section: "skills", ref: fourthRef },
      { section: "education", ref: fifthRef },
      { section: "contact", ref: sixthRef },
    ];
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
        return false
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer visibleSection={visibleSection}>
        <div ref={headerRef}>
          <Landing />
        </div>
        <div ref={firstRef}>
          <Section id="about">
            <SectionHeader>ABOUT</SectionHeader>
            <About />
          </Section>
        </div>
        <div ref={secondRef}>
          <Section id="experience">
            <SectionHeader>EXPERIENCE</SectionHeader>
            <ExperienceList />
          </Section>
        </div>
        <div ref={thirdRef}>
          <Section id="projects">
            <SectionHeader>PROJECTS</SectionHeader>
            <ProjectList />
          </Section>
        </div>
        <div ref={fourthRef}>
          <Section id="skills">
            <SectionHeader>SKILLS</SectionHeader>
            <SKillsList />
            <div style={{ padding: 20 }} />
            <LanguageList />
          </Section>
        </div>
        <div ref={fifthRef}>
          <Section id="education">
            <SectionHeader>EDUCATION</SectionHeader>
            <Education />
          </Section>
        </div>
        <div ref={sixthRef}>
          <Section id="contact">
            <SectionHeader>CONTACT</SectionHeader>
            <Contact />
          </Section>
        </div>
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}

export default App;
