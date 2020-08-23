import classes from "*.module.css";
import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navbar: {
    height: "auto",
    width: "100%",
    background: "blue",
    padding: "8px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
  },
});

export const Navbar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.navbar}>
      <Link to={"/"} style={{ marginRight: 8 }}>
        <Button variant="contained">Home</Button>
      </Link>
      <Box>
        <Link to={"/login"} style={{ marginRight: 8 }}>
          <Button variant="contained">Login</Button>
        </Link>
        <Link to={"/join"}>
          <Button variant="contained">Join</Button>
        </Link>
      </Box>
    </Box>
  );
};
