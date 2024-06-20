import { Box } from "@mui/material";
import Main from "./components/sections/Main";
import Projects from "./components/sections/Projects";

export default function Portfolio() {
  return (
    <Box>
      <Main />
      <Projects />
      <Main />
    </Box>
  );
}
