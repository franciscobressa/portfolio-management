import { Box } from "@mui/material";
import Image from "next/image";

export default function ProfilePicutre() {
  return (
    <Box
      sx={{
        height: {
          xs: "30vh",
          md: "50vh",
        },
        width: {
          xs: "30vh",
          md: "50vh",
        },
      }}
      style={{
        margin: "2% auto",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <Box zIndex={9}>
        <Image
          style={{ zIndex: 9 }}
          layout="fill"
          src={"/images/johndoe.png"}
          alt={"profile picture"}
        />
      </Box>

      <Box
        zIndex={0}
        position={"absolute"}
        sx={{
          border: "1px dashed white",
          marginLeft: "3%",
          marginTop: "5%",
          height: {
            xs: "30vh",
            md: "50vh",
          },
          width: {
            xs: "30vh",
            md: "50vh",
          },
        }}
      />
    </Box>
  );
}
