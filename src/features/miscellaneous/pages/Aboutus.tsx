import CardComponent from "../components/aboutUs/CardComponent";
import BoxComponent from "../components/aboutUs/BoxComponent";
import { CardData } from "../components/aboutUs/CardData";
import { Grid, GridItem } from "@chakra-ui/react";

const Aboutus = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={6}
    >
      <BoxComponent />
      {CardData.map((content, index) => {
        return (
          <GridItem key={index}>
            <CardComponent title={content.Title} body={content.Body} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default Aboutus;
