import { ThemeProvider } from "@emotion/react";
import { styled } from '@mui/material/styles';

import SectionHeader from "./components/SectionHeader";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import ErrorBoundary from "./components/ErrorBoundary";
import Landing from "./components/Landing";
import About from "./components/About";
import ExperienceList from "./components/sections/ExperienceList";
import ProjectList from "./components/sections/ProjectList";
import SKillsList from "./components/sections/SkillsList";
import LanguageList from "./components/sections/LanguageList";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import theme from "./utils/theme";

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
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer>
        <Landing />
        <Section id="about">
          <SectionHeader>ABOUT</SectionHeader>
          <About />
        </Section>
        <Section id="experience">
          <SectionHeader>EXPERIENCE</SectionHeader>
          <ExperienceList />
        </Section>
        <Section id="projects">
          <SectionHeader>PROJECTS</SectionHeader>
          <ProjectList />
        </Section>
        <Section id="skills">
          <SectionHeader>SKILLS</SectionHeader>
          <SKillsList />
          <div style={{ padding: 20 }} />
          <LanguageList />
        </Section>
        <Section id="education">
          <SectionHeader>EDUCATION</SectionHeader>
          <Education />
        </Section>
        <Section id="contact">
          <SectionHeader>CONTACT</SectionHeader>
          <Contact />
        </Section>
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}

export default App;
