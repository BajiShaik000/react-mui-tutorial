import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, Favorite, Person } from "@mui/icons-material";

export const MuiBottomNavigation = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      {value === 0 ? (
        <HomePage />
      ) : value === 1 ? (
        <FavoritePage />
      ) : (
        <ProfilePage />
      )}
      <BottomNavigation
        sx={{ position: "absolute", width: "100%", bottom: 0 }}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Favourites" icon={<Favorite />} />
        <BottomNavigationAction label="Profile" icon={<Person />} />
      </BottomNavigation>
    </>
  );
};

const HomePage = () => {
  return <div>HomePage</div>;
};

const FavoritePage = () => {
  return <div>FavouritePage</div>;
};

const ProfilePage = () => {
  return <div>ProfilePage</div>;
};
