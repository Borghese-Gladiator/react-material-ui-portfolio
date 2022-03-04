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
          <SectionHeader>About</SectionHeader>
          <About />
        </section>
        <section id="experience">
          <SectionHeader>Experience</SectionHeader>
          <ExperienceList />
        </section>
        <section id="projects">
          <SectionHeader>Projects</SectionHeader>
          <ProjectList />
        </section>
        <section id="skills">
          <SectionHeader>Skills</SectionHeader>
          <SKillsList />
        </section>
        <section id="education">
          <SectionHeader>Education</SectionHeader>
          <Education />
        </section>
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}

export default App;
