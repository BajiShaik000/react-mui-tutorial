import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];

type Skill = {
  id: number;
  label: string;
};

const skillOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log({ skill });
  return (
    <div>
      <Stack spacing={2} width="250px">
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          value={value}
          onChange={(event: any, newValue: string | null) => setValue(newValue)}
          freeSolo
        />
        <Autocomplete
          options={skillOptions}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          value={skill}
          onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
        />
      </Stack>
    </div>
  );
};
