import React from "react";
import { Stack, CircularProgress, LinearProgress } from "@mui/material";

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" variant="determinate" value={60} />

      <LinearProgress />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" variant="determinate" value={60} />
    </Stack>
  );
};
