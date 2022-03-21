import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";
import SkillsCard from "./SkillsCard";
import { skillsList } from "../../../utils/constants";

const StyledBox =  styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(5),
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8)
}));

export default function SkillsList() {
  return (
    <StyledBox>
      {skillsList.map((skillObj, idx) => {
        return (
          <SkillsCard skillObj={skillObj} id={idx} key={`skill${idx}`} />
        )
      })}
    </StyledBox>
  )
}