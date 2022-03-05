import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";

import SectionHeader from "./components/SectionHeader";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import Landing from "./components/Landing";
import About from "./components/About";
import ExperienceList from "./components/ExperienceList";
import ProjectList from "./components/ProjectList";
import SKillsList from "./components/SkillsList";
import Education from "./components/Education";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer>
        <Landing />
        <section id="about">
          <SectionHeader>ABOUT</SectionHeader>
          <About />
        </section>
        <section id="experience">
          <SectionHeader>EXPERIENCE</SectionHeader>
          <ExperienceList />
        </section>
        <section id="projects">
          <SectionHeader>PROJECTS</SectionHeader>
          <ProjectList />
        </section>
        <section id="skills">
          <SectionHeader>SKILLS</SectionHeader>
          <SKillsList />
        </section>
        <section id="education">
          <SectionHeader>EDUCATION</SectionHeader>
          <Education />
        </section>
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}

export default App;
