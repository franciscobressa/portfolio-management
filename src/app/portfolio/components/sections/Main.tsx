import { Typography } from "@mui/material";
import Section from "../shared/Section";
import SocialMediaList from "../SocialMediaList";
import { Heading1 } from "@/components/shared/Typography";

export default function Main() {
  return (
    <Section bgcolor={"firstColor.main"} color={"firstColor.contrastText"}>
      <SocialMediaList />
      <Heading1>Francisco Bressa</Heading1>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit,
        quia nobis alias voluptas totam eveniet ad dolor commodi ipsam impedit
        molestias corporis repellendus porro vel expedita reprehenderit? Quasi,
        ut.
      </Typography>
    </Section>
  );
}
