import { Container, Stack } from "@chakra-ui/react";
import PlacesAndEventsBanner from "../../../components/common/banner/PlacesAndEventsBanner";
import LocationBody from "../components/LocationBody";

const LocationPage = () => {
  return (
    <Stack spacing={20}>
      <PlacesAndEventsBanner
        image="https://www.andbeyond.com/wp-content/uploads/sites/5/pokhara-valley-nepal.jpg"
        title="Pokhara"
      />

      <Container maxW="container.xl" pb={{ base: "30px", md: "50px" }}>
        <LocationBody />
      </Container>
    </Stack>
  );
};

export default LocationPage;
