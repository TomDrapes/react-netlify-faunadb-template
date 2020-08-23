import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { CustomSnackbar } from "./components/CustomSnackbar";
import { HomeScreen } from "./screens/HomeScreen";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    bgcolor: "red",
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "column",
  },
});

export const AppShell = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <HomeScreen />
      <CustomSnackbar />
    </Box>
  );
};
