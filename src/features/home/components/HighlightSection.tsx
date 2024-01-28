import React from "react";
import { Stack } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import HighlightCarousel from "./HighlightCarousel";

const HighlightSection = () => {
  return (
    <Stack spacing={5}>
      <SectionTitle title="Higlights of Nepal" />
      <HighlightCarousel />
    </Stack>
  );
};

export default HighlightSection;
