import React from "react";
import { Box, Center, Stack } from "@chakra-ui/react";

const BannerSection = () => {
  return (
    <Stack>
      <Box>
        <Center fontSize="5xl" className="dancing-font">
          Official Website of
        </Center>
        <Center fontSize="5xl" className="dancing-font">Travel.com</Center>
      </Box>
    </Stack>
  );
};

export default BannerSection;
