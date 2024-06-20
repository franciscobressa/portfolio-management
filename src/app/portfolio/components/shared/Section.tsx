import { Box, BoxProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface SectionProps extends BoxProps {
  children: ReactNode;
  sx?: SxProps;
}

export default function Section({ children, sx, ...rest }: SectionProps) {
  return (
    <Box height={"90vh"} sx={sx} {...rest}>
      {children}
    </Box>
  );
}
