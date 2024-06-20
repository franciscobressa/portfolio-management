import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lighTheme } from "../theme";
import "../globals.css";

export const metadata: Metadata = {
  title: "Francisco Bressa's Portfolio",
  description: "Looking for a Dev? You found the right one!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const darkMode = true;

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkMode ? darkTheme : lighTheme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
