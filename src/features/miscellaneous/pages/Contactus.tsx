import { Stack } from "@chakra-ui/react";
import ContactusForm from "../components/contactUs/ContactusForm";
import ContactusLocation from "../components/contactUs/ContactusLocation";

const Contactus = () => {
  return (
    <Stack>
      <ContactusForm />
      <ContactusLocation />
    </Stack>
  );
};

export default Contactus;
