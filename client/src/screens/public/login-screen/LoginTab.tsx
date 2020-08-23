import { Grid, TextField, Button, Divider, useTheme } from "@material-ui/core";
import { Formik, Form } from "formik";
import React, { useContext } from "react";
import { FormField } from "../../../components/FormField";
import { AuthContext } from "../../../contexts/auth/AuthContext";

const initialValues = {
  email: "",
  password: "",
};

export const LoginTab = () => {
  const authContext = useContext(AuthContext);
  const handleSubmit = (values: { email: string; password: string }) => {
    authContext?.authDispatch.signIn(values);
  };

  const theme = useTheme();
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Grid container direction="column" style={{ padding: 32 }} spacing={2}>
          <Grid item>
            <FormField
              name="email"
              fullWidth
              placeholder="email"
              type="email"
            />
          </Grid>
          <Grid item>
            <FormField
              name="password"
              fullWidth
              placeholder="password"
              type="password"
            />
          </Grid>
          <Grid item>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              style={{ background: theme.palette.success.light }}
            >
              {"Log In"}
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};
