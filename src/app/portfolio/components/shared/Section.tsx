import { Box, BoxProps, Stack, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface SectionProps extends BoxProps {
  children: ReactNode;
  sx?: SxProps;
}

export default function Section({ children, sx, ...rest }: SectionProps) {
  return (
    <Box
      height={"85vh"}
      position={"relative"}
      sx={{ padding: { xs: "2% 5%", md: "1%" }, ...sx }}
      {...rest}
    >
      <Stack gap={"2vh"}>{children}</Stack>
    </Box>
  );
}
