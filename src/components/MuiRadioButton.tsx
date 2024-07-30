import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText
} from "@mui/material";

export const MuiRadioButton = () => {
  const [first, setfirst] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setfirst(event.target.value);
  };

  console.log({first})

  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-lable"
          value={first}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio size="medium" color="secondary" />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};
