import React, { useState } from "react";
import {
  Box,
  Card,
  TextField,
  makeStyles,
  useTheme,
  Theme,
  Button,
  Divider,
  Grid,
  Tab,
  Tabs,
} from "@material-ui/core";
import { ScreenContainer } from "../../../components/ScreenContainer";
import { LoginTab } from "./LoginTab";
import { CreateAccountTab } from "./CreateAccountTab";

const useStyles = makeStyles((theme: Theme) => ({
  loginCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
}));

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const LoginScreen = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <ScreenContainer>
      <Box
        flexGrow={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor={theme.palette.secondary.light}
      >
        <Card>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Log In" {...a11yProps(0)} />
            <Tab label="Create Account" {...a11yProps(1)} />
          </Tabs>
          {tabValue === 0 ? <LoginTab /> : <CreateAccountTab />}
        </Card>
      </Box>
    </ScreenContainer>
  );
};
