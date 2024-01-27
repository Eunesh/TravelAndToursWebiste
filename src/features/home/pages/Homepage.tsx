import React from "react";
import BannerSection from "../components/BannerSection";
import PlacesToGoSection from "../components/PlacesToGoSection";
import EventsAndFestivalsSection from "../components/EventsAndFestivalsSection";
import HighlightSection from "../components/HighlightSection";
import { Stack } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Stack spacing={20}>
      <BannerSection />
      <HighlightSection />
      <PlacesToGoSection />
      <EventsAndFestivalsSection />
    </Stack>
  );
};

export default Homepage;
