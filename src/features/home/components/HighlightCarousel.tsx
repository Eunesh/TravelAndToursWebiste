import { FC } from "react";
import {
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 550 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 1,
  },
};

interface ICarouselItem {
  image: string;
  title: string;
  link: string;
}
const CarouselItem: FC<ICarouselItem> = ({ image, title, link }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };
  return (
    <Card
      maxW="md"
      bg="#fafafa"
      m={"0 10px"}
      onClick={handleClick}
      cursor="pointer"
      title={"Go to page."}
    >
      <CardBody as={Stack} spacing={5}>
        <Image
          h="300px"
          src={image}
          alt={title}
          borderRadius="lg"
          objectFit={"cover"}
        />
        <Divider />
        <Heading size="md" sx={{ "&:hover": { textDecoration: "underline" } }}>
          <Link to={link}>{title}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};
const HighlightCarousel = () => {
  return (
    <Carousel responsive={responsive} infinite={true}>
      <CarouselItem
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/8c/76/6e/pokhara-paragliding.jpg?w=1200&h=-1&s=1"
        title="Explore Pokhara"
        link="/places/pokhara"
      />
      <CarouselItem
        image="https://nepaltraveller.com/images/main/1686125690.sidetrackimage7.jpg"
        title="Chitwan National Park"
        link="/places/pokhara"
      />
      <CarouselItem
        image="https://nepaltraveller.com/images/main/1605092930.sidetrackimagebutwal.jpg"
        title="Beautiful Butwal"
        link="/places/pokhara"
      />
      <CarouselItem
        image="https://holidaystonepal.com/media/files/Blogs/Mustang_valley.jpeg"
        title="Majestic Mustang"
        link="/places/pokhara"
      />
    </Carousel>
  );
};

export default HighlightCarousel;
