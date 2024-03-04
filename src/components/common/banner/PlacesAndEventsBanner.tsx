import { FC } from "react";
import { Stack, Text } from "@chakra-ui/react";

interface IPlacesAndEventsBanner {
  title: string;
  image: string;
}

const PlacesAndEventsBanner: FC<IPlacesAndEventsBanner> = ({
  title,
  image,
}) => {
  return (
    <Stack
      h="80vh"
      backgroundImage={image}
      backgroundPosition={"center"}
      w="full"
      alignItems={"center"}
      justifyContent={"flex-end"}
    >
      <Text
        fontSize={{ base: "6xl", md: "8xl" }}
        fontWeight={700}
        color="white"
        className="dancing-font"
        p="20px"
      >
        {title}
      </Text>
    </Stack>
  );
};

export default PlacesAndEventsBanner;
