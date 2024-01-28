import { Box, Center } from "@chakra-ui/react";
import nepalBgImg from "../../../assets/images/nepal_bg.jpg";
import { Link } from "react-router-dom";

// Icons
import PhoneIcon from "@mui/icons-material/Phone";
// Icons

const GetInTouch = () => {
  return (
    <Box bgImg={nepalBgImg} bgPos={"center"} borderRadius={10}>
      <Center
        fontWeight={700}
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        p="50px"
        bg="white"
        h="full"
        w="full"
        opacity={0.7}
        sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
        gap={5}
        alignItems={"center"}
      >
        <Link to="/more/contact-us">Get In Touch</Link>
        <PhoneIcon sx={{ fontSize: "inherit" }} />
      </Center>
    </Box>
  );
};

export default GetInTouch;
