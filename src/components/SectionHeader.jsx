import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

const SectionHeader = ({ children }) => {
  return (
    <CustomTitle variant="h4" gutterBottom component="div">
      {children}
    </CustomTitle>
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