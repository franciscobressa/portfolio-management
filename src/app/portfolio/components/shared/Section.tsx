import { Box, BoxProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  sx?: SxProps;
}

export default function Section({ children, sx }: SectionProps) {
  return (
    <Box height={"85vh"} sx={sx}>
      {children}
    </Box>
  );
}
