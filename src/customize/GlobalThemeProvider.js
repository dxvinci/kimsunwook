import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const GlobalTheme = createMuiTheme({
  palette: {
    back: {
      light: "#444",
      main: "#e57373",
      dark: "#222",
      text: "#111",
    },
    btn: {
      main: "#fdd835"
    }
}});

const GlobalThemeProvider = ({ children }) => (
  <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>
);

export default GlobalThemeProvider;