import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  paddingLeft: theme.spacing(4),
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  marginBottom: theme.spacing(6)
}));

const SectionHeader = ({ children, theme }) => {
  return (
    <StyledDiv>
      <Typography variant="h4" component="div">
        {children}
      </Typography>
    </StyledDiv>
  )
}

export default SectionHeader;
/*
export default CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));
*/