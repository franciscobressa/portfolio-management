import { Box, Grid } from "@mui/material";
import Section from "../shared/Section";
import SocialMediaList from "../SocialMediaList";
import { Heading1, Heading2, Text } from "@/components/shared/Typography";
import ProfilePicutre from "@/components/shared/ProfilePicture";

export default function Main() {
  return (
    <Section bgcolor={"firstColor.main"} color={"firstColor.contrastText"}>
      <SocialMediaList />
      <Grid container columns={12}>
        <Grid item xs={12} md={5}>
          <ProfilePicutre />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{ paddingTop: { xs: "5%", sm: "2%", md: "5%" } }}
            paddingX={"10%"}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Heading1>John Doe</Heading1>
              <Heading2>Full Stack Developer</Heading2>
            </Box>
            <Text
              sx={{
                marginTop: { xs: "5%", sm: "2%", md: "5%" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              odit, quia nobis alias voluptas totam eveniet ad dolor commodi
              ipsam impedit molestias corporis.
            </Text>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
