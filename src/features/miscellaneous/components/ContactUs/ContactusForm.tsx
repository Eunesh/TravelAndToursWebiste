import { Card, Image, Center, Stack, Text } from "@chakra-ui/react";
import Form from "./Form";

const ContactusForm = () => {
  return (
    <Center marginTop={"20px"}>
      <Card height={"80vh"} direction={{ base: "column", sm: "row" }}>
        <Image
          objectFit="cover"
          src="https://hips.hearstapps.com/hmg-prod/images/moraine-lake-with-alpen-glow-on-ten-peaks-banff-royalty-free-image-1682543414.jpg"
          // maxW={{ base: "100%", sm: "200px" }}

          width={"35vw"}
          height={"80vh"}
        />

        <Center>
          <Stack spacing={"20px"} padding={"20px"}>
            <Text fontSize="5xl">Contact us</Text>
            <Form />
          </Stack>
        </Center>
      </Card>
    </Center>
  );
};

export default ContactusForm;
