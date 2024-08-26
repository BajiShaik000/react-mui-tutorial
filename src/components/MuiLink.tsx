import React from "react";
import { Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} m={4} direction="row">
      <Link href="#" variant="h1">Link</Link>
      <Link href="#" color="secondary" underline="hover">
        Secondary
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};
