import React from "react";
import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
// Icon
import EastTwoToneIcon from "@mui/icons-material/EastTwoTone";
// Icon
import lottie_file from "../../../assets/lottie/404_lottie.json";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Center
      minH="80vh"
      gap={10}
      flexDirection={{ base: "column-reverse", md: "row" }}
    >
      <Stack spacing={2} p={"30px"}>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="700"
          color="blue.500"
        >
          404 Error
        </Text>
        <Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} fontWeight="600">
          Page not found
        </Text>
        <Text color="gray.500" fontSize={{ base: "md", md: "xl" }}>
          Sorry the page you are looking for cannot be found or has been
          removed.
        </Text>
        <Box paddingTop={5}>
          <Button
            display={"flex"}
            gap={2}
            colorScheme="blue"
            variant="link"
            onClick={handleClick}
          >
            <Text>Go Back</Text> <EastTwoToneIcon />
          </Button>
        </Box>
      </Stack>
      <Box w={{ base: "300px", md: "auto" }}>
        <Lottie animationData={lottie_file} loop={true} />
      </Box>
    </Center>
  );
};

export default PageNotFound;
