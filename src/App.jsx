import "./App.css";
import { ThemeProvider } from "./providers/Theme.jsx";
import { CssBaseline } from "@mui/material";

export function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <div>aaa</div>
    </ThemeProvider>
  );
}
