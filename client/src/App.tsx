import React from "react";
import { Box, makeStyles, ThemeProvider } from "@material-ui/core";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { PageNotFoundScreen } from "./screens/public/PageNotFoundScreen";
import { customTheme } from "./theme/CustomTheme";
import { AuthProvider } from "./contexts/auth/AuthContext";

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

function App() {
  const classes = useStyles();
  return (
    <AuthProvider>
      <ThemeProvider theme={customTheme}>
        <Box className={classes.root}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route>
                <PageNotFoundScreen />
              </Route>
            </Switch>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
