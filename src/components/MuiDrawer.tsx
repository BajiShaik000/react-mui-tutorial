import React from "react";
import { Drawer, Typography, Box, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <>
      <IconButton
        edge="start"
        aria-label="logo"
        color="inherit"
        size="large"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} textAlign="center" width="250px" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
