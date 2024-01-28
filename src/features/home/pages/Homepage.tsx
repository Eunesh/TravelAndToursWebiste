import React from "react";
import { Stack } from "@chakra-ui/react";
import BannerSection from "../components/BannerSection";
import HighlightSection from "../components/HighlightSection";
import MustVisitPlaces from "../components/MustVisitPlaces";
import ExploreTheCulture from "../components/ExploreTheCulture";
import GetInTouch from "../components/GetInTouch";

const Homepage = () => {
  return (
    <Stack spacing={20}>
      <BannerSection />
      <HighlightSection />
      <MustVisitPlaces />
      <ExploreTheCulture />
      <GetInTouch />
    </Stack>
  );
};

export default Homepage;
