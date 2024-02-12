import { FC } from "react";
import { Avatar, Flex } from "@chakra-ui/react";

interface IRenderPictures {
  value: Array<string>;
}
const RenderPictures: FC<IRenderPictures> = ({ value }) => {
  return (
    <Flex gap={2} flexWrap="wrap">
      {value.map((picture, index) => (
        <Avatar src={picture} size="md" name="Picture" key={index} />
      ))}
    </Flex>
  );
};

export default RenderPictures;
