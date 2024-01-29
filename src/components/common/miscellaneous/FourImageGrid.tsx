import { FC } from "react";
import { Grid, Image } from "@chakra-ui/react";

interface IFourImageGrid {
  images: Array<string>;
}
const FourImageGrid: FC<IFourImageGrid> = ({ images }) => {
  return (
    <Grid templateColumns={"repeat(2, 1fr)"} gap={5}>
      {images.map((image, index) => (
        <Image
          key={`image-${index}`}
          objectFit={"cover"}
          src={image}
          h={{ base: "150px", md: "200px", lg: "300px" }}
          w={"100%"}
          alt="sample"
        />
      ))}
    </Grid>
  );
};

export default FourImageGrid;
