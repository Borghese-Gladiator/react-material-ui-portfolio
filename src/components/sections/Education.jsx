import { styled } from '@mui/material/styles';
import { Box, Grid, Card, Typography } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8)
}));
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3)
}));

export default function Education() {
  return (
    <StyledBox>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <Typography variant="h5" color="primary">UMASS AMHERST</Typography>
            <Typography variant="subtitle1" color="secondary">Amherst, MA</Typography>
            <ul>
              <li>Bachelor's in Computer Science</li>
            </ul>
          </StyledCard>
        </Grid>
      </Grid>
    </StyledBox>
  )
}