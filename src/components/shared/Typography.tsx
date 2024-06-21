import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

interface Heading1 extends TypographyProps {
  children: ReactNode;
}

export function Heading1({ children, ...rest }: Heading1) {
  return (
    <Typography fontWeight={"700"} fontSize={"10vh"} {...rest}>
      {children}
    </Typography>
  );
}

export function Heading2({ children, ...rest }: Heading1) {
  return (
    <Typography fontWeight={"500"} fontSize={"8vh"} {...rest}>
      {children}
    </Typography>
  );
}
