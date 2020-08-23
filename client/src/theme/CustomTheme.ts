import { createMuiTheme } from "@material-ui/core";

export const customTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#FF70A0",
      main: "#FF4785",
      dark: "#FF0A5C",
    },
    secondary: {
      main: "#347FD5",
      light: "#679FE0",
      dark: "#2362A9",
    },
    warning: {
      main: "#FFBF69",
    },
    error: {
      main: "#F97068",
    },
    background: {
      default: "#212738",
    },
    success: {
      main: "#69E228",
    },
  },
});
