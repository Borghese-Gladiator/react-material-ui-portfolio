import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import ExperienceCard from "./ExperienceCard";
import { experienceList } from "../../../utils/constants";

const StyledBox =  styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(10),
  marginLeft: theme.spacing(5),
  marginRight: theme.spacing(5)
}));

export default function ExperienceList() {
  return (
    <StyledBox>
      {experienceList.map((experience, idx) => {
        return (
          <ExperienceCard key={`experience${idx}`} experience={experience} id={idx} />
        )
      })}
    </StyledBox>
  )
}