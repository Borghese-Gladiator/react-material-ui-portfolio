import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Container from '@mui/material/Container';
import { languageList } from "../utils/constants";

const StyledHeader = styled("h3")({
  marginBottom: 0
})
const StyledSecondarySpan = styled("span")({
  fontSize: "15px",
  color: "gray",
  paddingTop: "0px"
})
const ScaleBar = styled(Slider)(({ theme }) => ({
}));

export default function LanguageList() {
  return (
    <Container>
      {
        languageList.map(({ name, proficiencyText, value }, idx) => {
          return (
            <>
              <StyledHeader>{name}</StyledHeader>
              <StyledSecondarySpan>{proficiencyText}</StyledSecondarySpan>
              <ScaleBar
                value={value}
                marks
                step={10}
                min={0}
                max={100}
              />
            </>
          )
        })
      }
    </Container>
  )
}