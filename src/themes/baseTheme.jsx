import { createTheme } from "@mui/material/styles";

export const baseTheme = createTheme({
  palette: {
    primary: { main: "#00008B", contrastText: "#efefef" },
    secondary: { main: "#1976d2", contrastText: "#ffffff" },
  },
  typography: {
    fontFamily: "sans-serif",
    fontSize: 14,
    h1: { fontSize: 30 },
    h4: { fontSize: 50 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #3CA899; }`,
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
    MuiPaper: { defaultProps: { elevation: 5, sx: { padding: "10px" } } },
  },
});
