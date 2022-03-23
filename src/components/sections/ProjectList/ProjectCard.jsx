import { useState, Fragment } from 'react';
import { styled } from '@mui/material/styles';
import {
  Card, CardContent, Typography, CardActionArea,
  Box, IconButton, Slide, Link, Avatar, Grid,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';

const StyledImg = styled("img")({
  maxHeight: 240,
  width: "100%",
  objectFit: "cover",
  borderRadius: "2px 2px 0 0",
})
const UnstyledList = styled('ul')({
  padding: 0,
  margin: 0,
  paddingInlineStart: "15px"
})
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: 56,
  height: 56
}));
const StyledCard = styled(Card)({
  boxShadow: "0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)",
  '&:hover': {
    transform: "scale(1.03)"
  },
})

export default function ProjectCard({ project, id }) {
  const { imgPath, title, about, tech, githubLink, demoLink } = project;
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard p={3} sx={{ height: "400px" }}>
        {open
          ?
          <Slide direction="up" in={open} mountOnEnter unmountOnExit>
            <Box p={3} sx={{ height: "100%", display: 'flex', flexDirection: 'column' }}>
              <Box display="flex">
                <Typography variant="h6" color="secondary">
                  Accomplishments
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton onClick={() => setOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <UnstyledList>
                {tech.map((val, idx) => <Fragment key={`project${id}-tech${idx}`}><Typography variant="body2">{val}</Typography></Fragment>)}
              </UnstyledList>
              <Box sx={{ flexGrow: 1 }} />
              <Box display="flex">
                {
                  demoLink &&
                  <Link href={demoLink} target="_blank" mr={2}>
                    <StyledAvatar>
                      <LinkIcon />
                    </StyledAvatar>
                  </Link>
                }
                <Link href={githubLink} target="_blank">
                  <StyledAvatar>
                    <GitHubIcon />
                  </StyledAvatar>
                </Link>
              </Box>
            </Box>
          </Slide>
          :
          <>
            <CardActionArea onClick={toggle}>
              <StyledImg
                src={imgPath}
              />
              <CardContent pb={1}>
                <Box display="flex">
                  <Typography gutterBottom variant="h5" component="div" color="primary" onClick={() => setOpen(true)}>
                    {title}
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => setOpen(true)}>
                    <MoreVertIcon />
                  </IconButton>
                </Box>
                <Typography variant="body1">
                  {about}
                </Typography>
              </CardContent>
            </CardActionArea>
          </>
        }
      </StyledCard>
    </Grid>
  );
}

