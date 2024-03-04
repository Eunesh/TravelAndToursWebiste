import { Stack } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import EventCarousel from "./EventCarousel";

const EventsAndFestivalsSection = () => {
  return (
    <Stack spacing={5}>
      <SectionTitle title="Explore the culture" />
      <EventCarousel />
    </Stack>
  );
};

export default EventsAndFestivalsSection;
