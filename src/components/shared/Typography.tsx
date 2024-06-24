import { SxProps, Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

interface CustomTypography extends TypographyProps {
  children: ReactNode;
  sx?: SxProps;
}

export function Heading1({ children, sx, ...rest }: CustomTypography) {
  return (
    <Typography
      sx={{
        lineHeight: 1,
        fontSize: {
          xs: "6vh",
          md: "8vh",
        },
        ...sx,
      }}
      fontWeight={"700"}
      fontSize={"8vh"}
      {...rest}
    >
      {children}
    </Typography>
  );
}

export function Heading2({ children, sx, ...rest }: CustomTypography) {
  return (
    <Typography
      sx={{
        lineHeight: 1,
        fontSize: {
          xs: "4vh",
          md: "6vh",
        },
        ...sx,
      }}
      fontWeight={"500"}
      {...rest}
    >
      {children}
    </Typography>
  );
}

export function Text({ children, sx, ...rest }: CustomTypography) {
  return (
    <Typography
      sx={{
        lineHeight: 1,
        fontSize: {
          xs: "2.2vh",
          md: "3vh",
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
}
