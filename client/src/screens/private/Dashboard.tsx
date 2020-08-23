import React from "react";
import { Box, Card, Typography } from "@material-ui/core";
import { ScreenContainer } from "../../components/ScreenContainer";
import { Navbar } from "../../components/Navbar";

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <ScreenContainer>
        <Box
          flexGrow={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Card style={{ width: "50%" }}>
            <Typography variant="h3">{"HOME"}</Typography>
          </Card>
        </Box>
      </ScreenContainer>
    </>
  );
};
