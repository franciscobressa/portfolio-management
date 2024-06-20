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

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
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
      main: "#4831d4",
      contrastText: "#ffffff",
    },
    secondColor: { main: "#ccf381" },
    thirdColor: { main: "#76d9d7" },
  },
});

const darkTheme = createTheme(theme, {
  palette: {
    mode: "dark",
    firstColor: {
      main: "#4831d4",
      contrastText: "#ffffff",
    },
    secondColor: { main: "#ccf381" },
    thirdColor: { main: "#76d9d7" },
  },
});

export { lighTheme, darkTheme };
