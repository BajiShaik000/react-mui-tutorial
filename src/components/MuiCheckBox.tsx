import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormGroup,
  FormLabel,
  FormHelperText
} from "@mui/material";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";

export const MuiCheckBox = () => {
  const [acceptTnc, setacceptTnc] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setacceptTnc(event.target.checked);
  };

  console.log({ skills });

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept Terms and Conditions"
          control={<Checkbox size="small" color="secondary" checked={acceptTnc} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={acceptTnc}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              value="javascript"
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
