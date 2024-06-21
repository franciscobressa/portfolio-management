import Link from "next/link";
import { Box } from "@mui/material";
import { LinkedIn, GitHub, Mail, WhatsApp } from "@mui/icons-material";
import { ReactNode } from "react";

const socialMediaItens = [
  {
    name: "Github",
    link: "https://www.github.com/franciscobressa",
    icon: <GitHub fontSize="inherit" />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/franciscobressa",
    icon: <LinkedIn fontSize="inherit" />,
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/+5567998661758",
    icon: <WhatsApp fontSize="inherit" />,
  },
  {
    name: "Email",
    link: "mailto:bressafrancisco@gmail.com",
    icon: <Mail fontSize="inherit" />,
  },
];

function SocialMediaListItem({
  link,
  icon,
}: {
  link: string;
  icon: ReactNode;
}) {
  return (
    <Link target="_blank" href={link}>
      <Box fontSize={"4vh"} color={"#ffffff"}>
        {icon}
      </Box>
    </Link>
  );
}

export default function SocialMediaList() {
  return (
    <Box display={"flex"} justifyContent={"end"} gap={"2vh"}>
      {socialMediaItens.map((item, index) => {
        return (
          <SocialMediaListItem key={index} link={item.link} icon={item.icon} />
        );
      })}
    </Box>
  );
}
