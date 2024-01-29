import {
  AspectRatio,
  Card,
  Flex,
  Center,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const ContactusLocation = () => {
  const mapContainerStyle = {
    width: "40vw",
    height: "65vh",
  };
  const center = {
    lat: 27.700769, // Kathmandu Latitude
    lng: 85.30014, // Kathmandu Longitude
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <Center>
      <Card height={"70vh"} padding={"20px"}>
        <Flex>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
          >
            <Marker position={center} />
          </GoogleMap>
          <Stack padding={"10px"} spacing={"30px"} flexDirection={"column"}>
            <Text fontSize={"5xl"}>Travel.com</Text>
            <Flex gap={"50px"} fontSize={"md"}>
              <Box>
                <Text>Brikuthimandap</Text>
                <Text>Kathmandu</Text>
                <Text>P.O.Box: 11018</Text>
              </Box>
              <Box borderLeft={"1px"} paddingLeft={"50px"}>
                <Text>Brikuthimandap</Text>
                <Text>Kathmandu</Text>
                <Text>P.O.Box: 11018</Text>
              </Box>
            </Flex>
            <Text fontSize={"sm"}>
              Please visit our trade site for Visit Nepal 2020 notices and all
              <br />
              trade updates
              <br />
              For participation in Travel Fairs/Sales Missions and
            </Text>
            <Text fontSize={"sm"}>Tenders/Quotations, please click here.</Text>
          </Stack>
        </Flex>
      </Card>
    </Center>
  );
};

export default ContactusLocation;
