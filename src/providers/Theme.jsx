import { useMemo } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { themes } from "../theme";

export function ThemeProvider({
  scheme,
  children,
}) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme(
        themes[scheme || (prefersDarkMode ? "dark" : "light")],
      ),
    [scheme, prefersDarkMode],
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
