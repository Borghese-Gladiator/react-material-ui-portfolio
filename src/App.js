import { ThemeProvider } from "@emotion/react";
import { styled } from '@mui/material/styles';

import SectionHeader from "./components/SectionHeader";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer>
        <Landing />
        <StyledSection id="about">
          <SectionHeader>ABOUT</SectionHeader>
          <About />
        </StyledSection> 
        <StyledSection id="experience">
          <SectionHeader>EXPERIENCE</SectionHeader>
          <ExperienceList />
        </StyledSection> 
        <StyledSection id="projects">
          <SectionHeader>PROJECTS</SectionHeader>
          <ProjectList />
        </StyledSection> 
        <StyledSection id="skills">
          <SectionHeader>SKILLS</SectionHeader>
          <SKillsList />
          <div style={{padding:20}}/>
          <LanguageList />
        </StyledSection> 
        <StyledSection id="education">
          <SectionHeader>EDUCATION</SectionHeader>
          <Education />
        </StyledSection> 
        <StyledSection id="contact">
          <SectionHeader>CONTACT</SectionHeader>
          <Contact />
        </StyledSection> 
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}

export default App;
