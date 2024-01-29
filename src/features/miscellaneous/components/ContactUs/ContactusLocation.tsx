import {
  AspectRatio,
  Card,
  Flex,
  Center,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";

const ContactusLocation = () => {
  return (
    <Center>
      <Card padding={{ base: "30px", lg: "50px" }}>
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28256.599929311957!2d85.29772818088527!3d27.71497079394468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191ca61437a3%3A0x13b2693c01ed2c18!2sNarayanhiti%20Palace%20Museum!5e0!3m2!1sen!2snp!4v1706508392357!5m2!1sen!2snp" />
          <Stack padding={"20px"} spacing={"30px"} flexDirection={"column"}>
            <Text
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight={"bold"}
            >
              Travel.com
            </Text>
            <Flex
              gap={"20px"}
              fontSize={"md"}
              flexDirection={{ base: "column", md: "row", lg: "row" }}
            >
              <Box>
                <Text>Brikuthimandap</Text>
                <Text>Kathmandu</Text>
                <Text>P.O.Box: 11018</Text>
              </Box>
              <Box
                borderLeft={{ base: "none", md: "1px", lg: "1px" }}
                paddingLeft={{ base: "none", md: "30px", lg: "30px" }}
              >
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
