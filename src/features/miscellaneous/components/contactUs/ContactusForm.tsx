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
          src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png"
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
