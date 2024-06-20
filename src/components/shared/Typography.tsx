import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

interface Heading1 extends TypographyProps {
  children: ReactNode;
}

export function Heading1({ children, ...rest }: Heading1) {
  return (
    <Typography fontSize={"10vh"} {...rest}>
      {children}
    </Typography>
  );
}
