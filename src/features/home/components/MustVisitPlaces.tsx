import { FC } from "react";
import {
  Button,
  Grid,
  Image,
  Show,
  Flex,
  Stack,
  Card,
  Box,
  Heading,
} from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import { Link, useNavigate } from "react-router-dom";

interface IFilterOption {
  title: string;
}
const FilterOption: FC<IFilterOption> = ({ title }) => {
  return (
    <Button colorScheme="gray" variant="solid" borderRadius="50px">
      {title}
    </Button>
  );
};

const FilterSection = () => {
  return (
    <Grid templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}>
      <Grid>
        <Flex gap={3} flexWrap="wrap">
          <FilterOption title="Provinces" />
          <FilterOption title="World Heritage (UNESCO)" />
          <FilterOption title="Protected Areas" />
          <FilterOption title="Eight Thousanders" />
          <FilterOption title="Pilgrimage Sites" />
          <FilterOption title="Mid hills" />
        </Flex>
      </Grid>
      <Show above="lg">
        <Grid></Grid>
      </Show>
    </Grid>
  );
};

interface IPlaceCard {
  image: string;
  title: string;
  link: string;
}
const PlaceCard: FC<IPlaceCard> = ({ image, title, link }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(link);
  };
  return (
    <Card
      maxW="xs"
      onClick={handleNavigate}
      overflow="hidden"
      cursor="pointer"
      boxShadow="none"
    >
      <Image objectFit="cover" w="100%" h={{base:"90px", sm:"100px", md:"110px", xl:"120px"}} src={image} alt={title} />
      <Box pt="20px">
        <Heading size="md" sx={{ "&:hover": { textDecoration: "underline" } }}>
          <Link to="link">{title}</Link>
        </Heading>
      </Box>
    </Card>
  );
};

const MustVisitPlacesBody = () => {
  return (
    <>
      <FilterSection />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={5}
      >
        <Grid>
          <Flex flexWrap="wrap" gap={3}>
            <PlaceCard
              image="https://xcmag.com/wp-content/uploads/2014/02/pokhara-602-402.gif"
              title="Pokhara"
              link="/"
            />
            <PlaceCard
              image="https://xcmag.com/wp-content/uploads/2014/02/pokhara-602-402.gif"
              title="Chitwan"
              link="/"
            />
            <PlaceCard
              image="https://xcmag.com/wp-content/uploads/2014/02/pokhara-602-402.gif"
              title="Jankapur"
              link="/"
            />
            <PlaceCard
              image="https://xcmag.com/wp-content/uploads/2014/02/pokhara-602-402.gif"
              title="Butwal"
              link="/"
            />
            <PlaceCard
              image="https://xcmag.com/wp-content/uploads/2014/02/pokhara-602-402.gif"
              title="Mustang"
              link="/"
            />
            <PlaceCard
              image="https://xcmag.com/wp-content/uploads/2014/02/pokhara-602-402.gif"
              title="Sagarmatha"
              link="/"
            />
          </Flex>
        </Grid>

        <Grid>
          <Image
            h="100%"
            minH="300px"
            src="https://haydenrue.com/wp-content/uploads/2022/09/Where-is-Nepal-located.jpg?ezimgfmt=ngcb2/notWebP"
            w="100%"
            objectFit="cover"
          />
        </Grid>
      </Grid>
    </>
  );
};

const MustVisitPlacesSection = () => {
  return (
    <Stack spacing={5}>
      <SectionTitle title="Must visit places" />
      <MustVisitPlacesBody />
    </Stack>
  );
};

export default MustVisitPlacesSection;
