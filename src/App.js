import { ThemeProvider } from "@emotion/react";
import { styled } from '@mui/material/styles';

import SectionHeader from "./components/SectionHeader";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import Landing from "./components/Landing";
import About from "./components/About";
import ExperienceList from "./components/ExperienceList";
import ProjectList from "./components/ProjectList";
import SKillsList from "./components/SkillsList";
import LanguageList from "./components/LanguageList";
import Education from "./components/Education";
import Contact from "./components/Contact";
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
