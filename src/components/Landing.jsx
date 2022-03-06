import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const Section = styled('section')({
  height: "100vh",
  backgroundImage: "url(/img/profile.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  position: "relative"
});
const DivAbsolute = styled('div')({
  top: 0,
  left: 0,
  position: "absolute"
});
const DivOverlay = styled('div')({
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  height: '100%'
})
const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textShadow: "1px 1px 5px rgb(0 0 0 / 50%)",
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(1)
}));
const UnderlineText = styled('span')(({ theme }) => ({
  textDecoration: `underline ${theme.palette.primary.main} `
}));
const BorderText = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1)
}));

export default function Landing() {
  return (
    <Section>
      <DivOverlay />
      <DivAbsolute>
        <StyledTypography variant="h3" ml={3} mt={6}>
          I want to <BorderText>make things</BorderText> <br />
          that <UnderlineText>make a difference</UnderlineText>
        </StyledTypography>
      </DivAbsolute>
    </Section>
  )
}