import { Grid, TextField, Button, Divider } from "@material-ui/core";
import { Formik, Form } from "formik";
import React, { useContext } from "react";
import { FormField } from "../../../components/FormField";
import { AuthContext } from "../../../contexts/auth/AuthContext";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
export const CreateAccountTab = () => {
  const authContext = useContext(AuthContext);

  const handleSubmit = (values: any) => {
    console.log(values);
    authContext?.authDispatch.signUp(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Grid container direction="column" style={{ padding: 32 }} spacing={2}>
          <Grid item>
            <FormField
              name="firstName"
              fullWidth
              placeholder="First name"
              required
            />
          </Grid>
          <Grid item>
            <FormField
              name="lastName"
              fullWidth
              placeholder="Last name"
              required
            />
          </Grid>
          <Grid item>
            <FormField
              name="email"
              fullWidth
              placeholder="email"
              type="email"
              required
            />
          </Grid>
          <Grid item>
            <FormField
              name="password"
              fullWidth
              placeholder="password"
              type="password"
              required
            />
          </Grid>
          <Divider />
          <Grid item>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              type="submit"
            >
              {"Create Account"}
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};
