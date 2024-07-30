import React from "react";
import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum sit
        optio, sint aut similique perspiciatis laborum, sunt pariatur inventore
        odit! Repellendus modi in aliquid voluptates placeat ipsam, tempora
        corrupti!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        explicabo nisi beatae ipsum numquam unde nihil sint, earum architecto
        minus ea hic vel sequi eaque? Tempora et cupiditate quia animi.
      </Typography>
    </div>
  );
};
