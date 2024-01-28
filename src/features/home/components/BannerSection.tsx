import { Box, Center, Image, Stack } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";

import visitNepal from "../../../assets/images/visit_nepal.jpg";

const BannerSection = () => {
  return (
    <Stack spacing={2}>
      <Image objectFit="cover" src={visitNepal} width="full" height={"70vh"} />
      <Box>
        <Center>
          <SectionTitle title="Official Website of" />
        </Center>
        <Center>
          <SectionTitle title="Travel.com" />
        </Center>
      </Box>
    </Stack>
  );
};

export default BannerSection;
