import { Stack } from "@mui/material";
import Main from "./components/sections/Main";
import Projects from "./components/sections/Projects";

export default function Portfolio() {
  return (
    <Stack>
      <Main />
      <Projects />
      <Main />
    </Stack>
  );
}
