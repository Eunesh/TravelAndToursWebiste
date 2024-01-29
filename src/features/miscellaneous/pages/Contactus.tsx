import { Stack } from "@chakra-ui/react";
import ContactusForm from "../components/contactUs/ContactusForm";
import ContactusLocation from "../components/contactUs/ContactusLocation";

const Contactus = () => {
  return (
    <Stack spacing={20} px={{ base: "0px", md: "100px" }}>
      <ContactusForm />
      <ContactusLocation />
    </Stack>
  );
};

export default Contactus;
