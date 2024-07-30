import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

export const MuiSelect = () => {
  //   const [value, setValue] = useState("");
  const [value, setValue] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const country = event.target.value;
    // setValue(event.target.value as string)
    setValue(typeof country === "string" ? country.split(",") : country);
  };
  console.log({ value });
  return (
    <Box width="200px">
      <TextField
        label="Select Country"
        select
        value={value}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
        size="small"
        color="secondary"
        helperText="please select your country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
