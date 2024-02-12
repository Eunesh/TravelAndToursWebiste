import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";

interface IRenderEventPlace {
  value: {
    id: number;
    name: string;
  };
}
const RenderEventPlace: FC<IRenderEventPlace> = ({ value }) => {
  return (
    <Flex gap={5}>
      <Text>
        <Text as="span" fontWeight={700}>
          Id:{" "}
        </Text>
        {value.id}
      </Text>
      <Text>
        <Text as="span" fontWeight={700}>
          Name:{" "}
        </Text>
        {value.name}
      </Text>
    </Flex>
  );
};

export default RenderEventPlace;
