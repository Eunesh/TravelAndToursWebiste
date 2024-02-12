import { FC } from "react";
import { Text } from "@chakra-ui/react";

interface IRenderEventCount {
  value: Array<any>;
}
const RenderEventCount: FC<IRenderEventCount> = ({ value }) => {
  return <Text>{value.length}</Text>;
};

export default RenderEventCount;
