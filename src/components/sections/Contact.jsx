import { styled } from '@mui/material/styles';
import { useTheme, Box, Divider, Link, Avatar, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(3),
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8),
}));
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: 56,
  height: 56
}));

const mailLink = `mailto:tim.shee0791@gmail.com`;
const githubLink = "https://github.com/Borghese-Gladiator";
const linkedinLink = "https://www.linkedin.com/in/timothy-shee";

export default function Contact() {
  const theme = useTheme();
  return (
    <StyledBox>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        aria-label="contacts"
      >
        <Link href={mailLink}>
          <ListItem>
            <StyledAvatar backgroundColor="red">
              <EmailIcon />
            </StyledAvatar>
            <Typography ml={2} variant="subtitle1" color="primary">tim.shee0791@gmail.com</Typography>
          </ListItem>
        </Link>
        <Divider />
        <Link href={githubLink}>
          <ListItem>
            <Avatar sx={{
              width: 56,
              height: 56,
              backgroundColor: 'black',
            }}>
              <GitHubIcon />
            </Avatar>
            <Typography ml={2} variant="subtitle1" color="primary">github.com/borghese-gladiator</Typography>
          </ListItem>
        </Link>
        <Divider />
        <Link href={linkedinLink}>
          <ListItem>
            <Avatar sx={{
              width: 56,
              height: 56,
              backgroundColor: theme.palette.primary.main,
            }}>
              <LinkedInIcon />
            </Avatar>
            <Typography ml={2} variant="subtitle1" color="primary">in/timothyshee</Typography>
          </ListItem>
        </Link>
      </List>
    </StyledBox>
  )
}
