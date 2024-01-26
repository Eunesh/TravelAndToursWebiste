import { Stack } from "@chakra-ui/react";
import ContactusForm from "../components/ContactUs/ContactusForm";
import ContactusLocation from "../components/ContactusLocation";

const Contactus = () => {
  return (
    <Stack>
      <ContactusForm />
      <ContactusLocation />
    </Stack>
  );
};

export default Contactus;
