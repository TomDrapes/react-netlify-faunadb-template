import React, { ReactNode, useState } from "react";
import { SnackbarContextState, SnackbarState } from "./snackbar-context-model";

interface Props {
  children: ReactNode;
}

const defaultState: SnackbarState = {
  open: false,
  status: undefined,
  message: "",
};

const SnackbarContext = React.createContext<SnackbarContextState | undefined>(
  undefined
);

const SnackbarProvider = (props: Props) => {
  const [snackbar, setSnackbar] = useState(defaultState);

  const closeSnackbar = () => setSnackbar(defaultState);

  const value = {
    snackbar,
    setSnackbar,
    closeSnackbar,
  };
  return <SnackbarContext.Provider value={value} children={props.children} />;
};

export { SnackbarContext, SnackbarProvider };
