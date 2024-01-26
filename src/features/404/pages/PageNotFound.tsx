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
    <Center h="80vh" gap={10}>
      <Stack spacing={2}>
        <Text fontSize="2xl" fontWeight="700" color="blue.500">
          404 Error
        </Text>
        <Text fontSize="5xl" fontWeight="600">
          Page not found
        </Text>
        <Text color="gray.500" fontSize="xl">
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
      <Lottie animationData={lottie_file} loop={true} />
    </Center>
  );
};

export default PageNotFound;
