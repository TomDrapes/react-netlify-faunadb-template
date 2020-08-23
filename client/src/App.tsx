import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { customTheme } from "./theme/CustomTheme";
import { AuthProvider } from "./contexts/auth/AuthContext";
import { SnackbarProvider } from "./contexts/snackbar/SnackbarContext";
import { AppShell } from "./AppShell";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <SnackbarProvider>
        <AuthProvider>
          <AppShell />
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
