import { styled } from '@mui/material/styles';
import { Box, Link, Avatar, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8)
}));
const Row = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: 56,
  height: 56
}));

const mailLink = `href="mailto:tim.shee0791@gmail.com"`;
const githubLink = "https://github.com/Borghese-Gladiator";
const linkedinLink = "https://www.linkedin.com/in/timothy-shee";

export default function Contact() {
  return (
    <StyledBox>
      <Link href={mailLink}>
        <Row>
          <StyledAvatar>
            <EmailIcon />
          </StyledAvatar>
          <Typography ml={2} variant="subtitle1" color="primary">tim.shee0791@gmail.com</Typography>
        </Row>
      </Link>
      <Link href={githubLink}>
        <Row>
          <StyledAvatar>
            <GitHubIcon />
          </StyledAvatar>
          <Typography ml={2} variant="subtitle1" color="primary">github.com/borghese-gladiator</Typography>
        </Row>
      </Link>
      <Link href={linkedinLink}>
        <Row>
          <StyledAvatar>
            <LinkedInIcon />
          </StyledAvatar>
          <Typography ml={2} variant="subtitle1" color="primary">github.com/borghese-gladiator</Typography>
        </Row>
      </Link>
    </StyledBox>
  )
}