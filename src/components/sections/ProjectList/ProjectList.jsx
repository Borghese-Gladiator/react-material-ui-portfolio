import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import ProjectCard from "./ProjectCard";
import { projectList } from "../../../utils/constants";

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(10),
  marginLeft: theme.spacing(5),
  marginRight: theme.spacing(5)
}));

export default function ProjectList() {
  return (
    <Grid
      container
      spacing={2}
      px={10}
      justify="center"
    >
      {projectList.map((project, idx) => {
        return (
          <ProjectCard project={project} id={idx}  key={`project${idx}`} />
        )
      })}
    </Grid>
  )
}