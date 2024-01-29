import { Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BoxComponent = () => {
  return (
    <Stack width={"100%"} h={"100%"} gap={"40px"} padding={"30px"}>
      <Stack gap={"10px"}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          About Us
        </Text>
        <Text fontSize={"sm"}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Text>
      </Stack>
      <Link to="/more/contact-us">
        <Text fontSize={"2xl"} color={"purple"}>
          Contact Us | FAQ
        </Text>
      </Link>
    </Stack>
  );
};

export default BoxComponent;
