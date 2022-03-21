import { styled } from '@mui/material/styles';
import {
  Grid, Card, CardHeader, Typography
} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React from 'react';

const StyledCard = styled(Card)({
  borderRadius: "2px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
});
const UnstyledImageList = styled(ImageList)({
  margin: 0
})
const StyledGridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

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
// <ListSubheader component="div">{groupText}</ListSubheader>