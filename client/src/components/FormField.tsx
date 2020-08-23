import React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";
import { useFormikContext } from "formik";

type Props = TextFieldProps & { name: string };

export const FormField = (props: Props) => {
  const { handleChange } = useFormikContext();
  return <TextField onChange={handleChange(props.name)} {...props} />;
};
