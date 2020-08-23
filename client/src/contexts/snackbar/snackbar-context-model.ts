export interface SnackbarState {
  open: boolean;
  status: "error" | "warning" | "information" | "success" | undefined;
  message: string;
}

export interface SnackbarContextState {
  snackbar: SnackbarState;
  setSnackbar: (x: SnackbarState) => void;
  closeSnackbar: () => void;
}
