import { Typography } from "@mui/material";

const interests = ["React", "Material Design", "Blockchain"]

export default function About() {
  return (
    <>
      <blockquote>
        <Typography variant="h4">Mission-driven full stack developer with a passion for thoughtful architecture, collaboration, and teaching</Typography>
      </blockquote>
      <Typography variant="body2" gutterBottom>
        I've always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns - from touring and recording artist, to employee of the year at a non-protfit - I've never stopped engaging my passion to help others and solve problems.
      </Typography>
      <Typography variant="body2" gutterBottom>
        As a web developer, I enjoy my obsessive attention to detail, my unequivocal love for making things, and my mission driven work ethic to change the world. That's why I'm excitedd to make a big impact at high growth companies.
      </Typography>
      <Typography>
        {interests.map((val, idx) => {
          return <span key={`interests_${idx}`}>{(idx ? ', ' : '') + val}</span>
        })}
      </Typography>
    </>
  )
}