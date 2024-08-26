import React from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import { Face } from "@mui/icons-material";

export const MuiChip = () => {
  const [chips, setChips] = React.useState(["chip1", "chip2", "chip3"]);

  const handleDelete = (chipToBeDeleted: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToBeDeleted));
  };

  return (
    <Stack direction="row" spacing={2}>
      <Chip label="chip" color="primary" size="small" icon={<Face />} />
      <Chip
        label="chip outlined"
        color="secondary"
        variant="outlined"
        avatar={<Avatar>JS</Avatar>}
      />
      <Chip label="click" color="primary" onClick={() => alert("clicked")} />
      <Chip
        label="click"
        color="primary"
        onClick={() => alert("clicked")}
        onDelete={() => alert("delete handler called")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
