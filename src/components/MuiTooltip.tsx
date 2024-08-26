import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const MuiTooltip = () => {
  return (
    <Tooltip title="Delete" placement="top" enterDelay={500} leaveDelay={500}>
      <IconButton size="large">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
