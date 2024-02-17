import { FC } from "react";
import parse from "html-react-parser";
import { Box, Flex, Text } from "@chakra-ui/react";

interface IRenderDescription {
  value: string;
}
const RenderDescription: FC<IRenderDescription> = ({ value }) => {
  return (
    <Flex>
      <Box>{parse(value.substring(0, 50))}</Box>
      <Text>...</Text>
    </Flex>
  );
};

export default RenderDescription;
