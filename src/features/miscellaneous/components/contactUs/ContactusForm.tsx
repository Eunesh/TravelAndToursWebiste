import { Card, Image, Stack, Text, Grid } from "@chakra-ui/react";
import Form from "./Form";

const ContactusForm = () => {
  return (
    <Card>
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2, 1fr)" }}
        gap={5}
      >
        <Image
          objectFit="cover"
          src="https://hips.hearstapps.com/hmg-prod/images/moraine-lake-with-alpen-glow-on-ten-peaks-banff-royalty-free-image-1682543414.jpg"
          minW={"300px"}
          h="100%"
        />

        <Stack spacing={"20px"} padding={"30px 10px"}>
          <Text fontSize="5xl">Contact us</Text>
          <Form />
        </Stack>
      </Grid>
    </Card>
  );
};

export default ContactusForm;
