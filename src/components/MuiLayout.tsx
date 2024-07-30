import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

export const MuiLayout = () => {
  //   return <Box>Codevolution</Box>;
  // return <Box component='span'>Codevolution</Box>
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          CodeVolution
        </Box>
        <Box
          display="flex"
          bgcolor="success.light"
          height="100px"
          width="100px"
          p={2}
        ></Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
