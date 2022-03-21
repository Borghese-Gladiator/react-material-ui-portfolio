import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projectList } from "../../../utils/constants";

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