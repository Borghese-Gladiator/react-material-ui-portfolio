import { Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { aboutList } from '../../utils/constants';

const StyledBlockquote = styled('blockquote')({
  borderLeft: "5px solid #795548",
  margin: "20px 0",
  paddingLeft: "1.5rem"
});

export default function About() {
  return (
    <Container>
      <StyledBlockquote>
        <Typography variant="h5" color="secondary">
          Driven full stack developer with an interest in blockchain and data science
        </Typography>
      </StyledBlockquote>
      {
        aboutList.map((val) =>
          <Typography variant="h6" gutterBottom>
            {val}
          </Typography>
        )
      }
    </Container>
  )
}
/*
Mission-driven full stack developer with a passion for thoughtful architecture, collaboration, and teaching
I've always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns - from touring and recording artist, to employee of the year at a non-protfit - I've never stopped engaging my passion to help others and solve problems.
As a web developer, I enjoy my obsessive attention to detail, my unequivocal love for making things, and my mission driven work ethic to change the world. That's why I'm excitedd to make a big impact at high growth companies.

const interests = ["React", "Material Design", "Blockchain"]
const StyledSpan = styled('span')(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize
}));

<Typography>
  {interests.map((val, idx) => {
    return <StyledSpan key={`interests_${idx}`}>{(idx ? ' // ' : '') + val}</StyledSpan>
  })}
</Typography>
*/