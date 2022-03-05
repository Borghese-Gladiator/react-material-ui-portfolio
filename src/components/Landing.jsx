import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const SectionWithBackground = styled('section')(({ theme }) => ({
  height: "100vh",
  backgroundImage: "url(/profile.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center"
}));
const AbsoluteDiv = styled('div')(({ theme }) => ({
  position: "absolute"
}));
const ContrastTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));
const UnderlineSpan = styled('span')(({ theme }) => ({
  textDecoration: `underline ${theme.palette.primary.main} `
}));
const BorderSpan = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

export default function Landing() {
  return (
    <SectionWithBackground>
      <AbsoluteDiv>
        <ContrastTypography variant="h4" ml={3} mt={6}>
          I want to <BorderSpan>make things</BorderSpan> <br />
          that <UnderlineSpan>make a difference</UnderlineSpan>
        </ContrastTypography>
      </AbsoluteDiv>
    </SectionWithBackground>
  )
}