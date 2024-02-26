import { FC, useMemo } from "react";
import { Flex, Image } from "@chakra-ui/react";

interface IRenderPictures {
  value: Array<string>;
}
const RenderPictures: FC<IRenderPictures> = ({ value }) => {
  const pictures = useMemo<Array<string>>(() => {
    if (value) {
      return value.map((url) => `${import.meta.env.VITE_API_BASE_URL}${url}`);
    }
    return [];
  }, [value]);
  return (
    <Flex gap={2} flexWrap="wrap">
      {pictures.map((picture, index) => (
        <Image
          src={picture}
          sx={{width: "50px", objectFit: "cover" }}
          alt="Picture"
          key={index}
        />
      ))}
    </Flex>
  );
};

export default RenderPictures;
