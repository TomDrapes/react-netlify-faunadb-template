import { Grid, TextField, Button, Divider } from "@material-ui/core";
import React from "react";

export const LoginTab = () => {
  return (
    <Grid container direction="column" style={{ padding: 32 }} spacing={2}>
      <Grid item>
        <TextField fullWidth placeholder="email" type="email" />
      </Grid>
      <Grid item>
        <TextField fullWidth placeholder="password" type="password" />
      </Grid>
      <Divider />
      <Grid item>
        <Button fullWidth variant="contained" style={{ background: "#1FD60A" }}>
          {"Log In"}
        </Button>
      </Grid>
    </Grid>
  );
};
