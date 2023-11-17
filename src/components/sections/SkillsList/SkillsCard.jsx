import { styled } from '@mui/material/styles';
import {
  Grid, Card, CardHeader, Typography
} from "@mui/material";
import React from 'react';

const StyledCard = styled(Card)({
  borderRadius: "2px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
});
const StyledIcon = styled('i')(() => ({
  fontSize: 50
}))

export default function SkillsCard({ skillObj }) {
  const { rootText, skills } = skillObj;
  return (
    <StyledCard p={3} sx={{ width: '100%'}}>
      <CardHeader
        title={rootText}
      />
      <Grid container pt={0} pl={2} pr={2} pb={2} spacing={2}>
        {skills.map(({ text, devicon }, idx) => {
          return (
            <Grid item sx={{ display: "flex", flexDirection: 'column-reverse', alignItems: 'center' }}>
              <Typography variant="caption">{text}</Typography>
              <StyledIcon className={`${devicon} colored`}></StyledIcon>
            </Grid>
          );
        })}
      </Grid>
    </StyledCard>
  )
}

/*
ARCHIVE: 11/17
export default function SkillsCard({ skillObj }) {
  const { rootText, skillGroupList } = skillObj;
  return (
    <StyledCard p={3}>
      <CardHeader
        title={rootText}
      />
      <Grid container pt={0} pl={2} pr={2} pb={2} spacing={2}>
        {skillGroupList.map(({ groupText, skillList }, idx) => {
          return (
            <StyledGridItem item xs={12} sm={6} md={4} lg={3} key={`${rootText}-${groupText}${idx}`}>
              <Typography variant="h6" >{groupText}</Typography>
              <UnstyledImageList>
                {skillList.map(({ text, path }, idx) => (
                  <ImageListItem key={`${rootText}-${groupText}${idx}`}>
                    <img
                      src={`${path}?w=248&fit=crop&auto=format`}
                      srcSet={`${path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={text}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      subtitle={text}
                      sx={{ textAlign: "center" }}
                    />
                  </ImageListItem>
                ))}
              </UnstyledImageList>
            </StyledGridItem>
          );
        })}
      </Grid>
    </StyledCard>
  )
}
*/
// <ListSubheader component="div">{groupText}</ListSubheader>