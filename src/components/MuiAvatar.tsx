import React from "react";
import { Avatar, Stack, AvatarGroup } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={1} direction="row">
        <Avatar sx={{ bgcolor: "secondary.light" }}>JS</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>TS</Avatar>
      </Stack>
      <Stack spacing={1} direction="row">
        <AvatarGroup max={3}>
          <Avatar
            src="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
            alt="Woman Image"
          />
          <Avatar
            src="https://static.vecteezy.com/system/resources/previews/005/346/410/non_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
            alt="man image"
          />
          <Avatar sx={{ bgcolor: "secondary.light" }}>JS</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>TS</Avatar>
        </AvatarGroup>
      </Stack>
      <Stack spacing={1} direction="row">
        <Avatar
          sx={{ bgcolor: "secondary.light", width: 100, height: 100 }}
          variant="square"
        >
          JS
        </Avatar>
        <Avatar
          sx={{ bgcolor: "success.light", width: 100, height: 100 }}
          variant="rounded"
        >
          TS
        </Avatar>
      </Stack>
    </Stack>
  );
};
