import React from "react";
import { Grid, Card, Typography } from "@material-ui/core";
import { ScreenContainer } from "../../components/ScreenContainer";

export const PageNotFoundScreen = () => {
  return (
    <ScreenContainer>
      <Grid container direction="column">
        <Grid item>
          <Card>
            <Typography variant="h3">{"PAGE NOT FOUND"}</Typography>
          </Card>
        </Grid>
      </Grid>
    </ScreenContainer>
  );
};
