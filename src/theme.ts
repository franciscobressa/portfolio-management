"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    mainColor: string;
  }
  interface PaletteOptions {
    mainColor: string;
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
    mode: "light",
    mainColor: "#4831d4",
  },
});

const darkTheme = createTheme(theme, {
  palette: {
    mode: "dark",
    mainColor: "#4831d4",
  },
});

export { lighTheme, darkTheme };
