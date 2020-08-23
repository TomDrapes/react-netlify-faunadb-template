import {
  IconButton,
  makeStyles,
  Snackbar,
  SnackbarContent,
  Theme,
  ThemeProvider,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import React, { useContext } from "react";
import { SnackbarContext } from "../contexts/snackbar/SnackbarContext";

export const CustomSnackbar = () => {
  const snackbarContext = useContext(SnackbarContext);
  const status = snackbarContext?.snackbar.status;
  const handleClose = () => snackbarContext?.closeSnackbar();

  console.log(status);
  const theme = useTheme();
  return (
    <Snackbar
      open={snackbarContext?.snackbar.open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <SnackbarContent
        message={snackbarContext?.snackbar.message}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        style={{
          background:
            status === "success"
              ? theme.palette.success.main
              : status === "error"
              ? theme.palette.error.main
              : status === "warning"
              ? theme.palette.warning.main
              : theme.palette.primary.main,
        }}
      />
    </Snackbar>
  );
};
