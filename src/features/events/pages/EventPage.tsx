import PlacesAndEventsBanner from "../../../components/common/banner/PlacesAndEventsBanner";
import { Container, Stack } from "@chakra-ui/react";
import EventBody from "../components/EventBody";

const EventPage = () => {
  return (
    <Stack spacing={20}>
      <PlacesAndEventsBanner
        image="https://www.andbeyond.com/wp-content/uploads/sites/5/pokhara-valley-nepal.jpg"
        title="Jungle Safari"
      />

      <Container maxW="container.xl" pb={{ base: "30px", md: "50px" }}>
        <EventBody />
      </Container>
    </Stack>
  );
};

export default EventPage;
