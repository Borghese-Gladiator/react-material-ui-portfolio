import * as React from 'react';
import {
  Box, Card, Divider, Typography, CardContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const displayObjMobile = { xs: 'block', sm: 'block', md: 'none' }
const displayObjDesktop = { xs: 'none', sm: 'none', md: 'block' }
const StyledLogoImg = styled('img')({
  maxWidth: "80px",
  maxHeight: "80px"
});
const StyledCard = styled(Card)({
  borderRadius: "2px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
  maxWidth: "815px",
});
const ItalicTypography = styled(Typography)({
  fontStyle: "italic"
});


const DateItalicizedTypography = ({ date }) => {
  return (
    <>
      <Typography variant="subtitle1" component="span">
        {date.split("Present")[0]}
      </Typography>
      <ItalicTypography variant="subtitle1" component="span">
        Present
      </ItalicTypography>
    </>
  )
}

export default function ExperienceCard({ experience, id }) {
  const { logoPath, company, position, summary, bullets, date, location } = experience;

  return (
    <StyledCard>
      <Box sx={{ display: 'flex', alignItems: 'center' }} m={3}>
        <StyledLogoImg src={logoPath} alt={`${company} logo`} />
        <Typography variant="h5" color="primary" ml={4}>{company.toUpperCase()}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="h6" color="secondary" sx={{ display: displayObjDesktop }}>{position}</Typography>
      </Box>
      <Divider />
      <CardContent sx={{ lineHeight: "1.8" }}>
        <Typography variant="h6" color="secondary" sx={{ display: displayObjMobile }}>{position}</Typography>
        <ItalicTypography variant="body1">{summary}</ItalicTypography>
        <ul>
          {bullets.map((val, idx) => {
            if (typeof val === 'object' && val !== null) {
              return (
                <React.Fragment key={`experience${id}-bullet${idx}-nested`}>
                  <li><Typography variant="body1">{val.title}</Typography></li>
                  <ul>
                    {val.bullets.map((val, idx2) => {
                      return (
                        <li key={`experience${id}-bullet${idx}-nested${idx2}`}><Typography variant="body1">{val}</Typography></li>
                      )
                    })}
                  </ul>
                </React.Fragment>
              )
            }
            return <li key={`experience${id}-bullet${idx}`}><Typography variant="body1">{val}</Typography></li>;
          })}
        </ul>
      </CardContent>
      <CardContent>
        <Typography variant="subtitle1">
          {date.includes("Present") ? <DateItalicizedTypography date={date} /> : date} | {location}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}
