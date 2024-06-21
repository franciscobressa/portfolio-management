"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    firstColor: string;
    secondColor: string;
    thirdColor: string;
  }
  interface PaletteOptions {
    firstColor: string;
    secondColor: string;
    thirdColor: string;
  }
}

// "SF UI Text", "Helvetica Neue", "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", sans-serif

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

const lighTheme = createTheme(theme, {
  palette: {
    mode: "dark",
    firstColor: {
      main: "#6e07f3",
      contrastText: "#ffffff",
    },
    secondColor: { main: "#76d9d7" },
    thirdColor: { main: "#ccf381" },
  },
});

const darkTheme = createTheme(theme, {
  palette: {
    mode: "dark",
    firstColor: {
      main: "#6e07f3",
      contrastText: "#ffffff",
    },
    secondColor: { main: "#76d9d7" },
    thirdColor: { main: "#ccf381" },
  },
});

export { lighTheme, darkTheme };
