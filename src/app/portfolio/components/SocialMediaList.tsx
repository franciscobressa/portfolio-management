import { Box } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function SocialMediaList() {
  return (
    <Box display={"flex"} justifyContent={"end"} gap={"2vh"}>
      <Link target="_blank" href={"https://www.github.com/franciscobressa"}>
        <Box fontSize={"4vh"} color={"secondColor.main"}>
          <GitHubIcon fontSize="inherit" />
        </Box>
      </Link>
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/franciscobressa"}
      >
        <Box fontSize={"4vh"} color={"secondColor.main"}>
          <LinkedInIcon fontSize="inherit" />
        </Box>
      </Link>
      <Link target="_blank" href={"https://wa.me/+5567998661758"}>
        <Box fontSize={"4vh"} color={"secondColor.main"}>
          <WhatsAppIcon fontSize="inherit" />
        </Box>
      </Link>
      <Link target="_blank" href={"mailto:bressafrancisco@gmail.com"}>
        <Box fontSize={"4vh"} color={"secondColor.main"}>
          <MailIcon fontSize="inherit" />
        </Box>
      </Link>
    </Box>
  );
}
