import { FC } from "react";
import { Card, Heading, Image, Stack } from "@chakra-ui/react";
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
      m={"0 10px"}
      boxShadow={"none"}
      onClick={handleClick}
      cursor="pointer"
      title={"Go to page."}
      as={Stack}
      spacing={5}
    >
      <Image h="300px" src={image} alt={title} objectFit={"cover"} />
      <Heading size="md" sx={{ "&:hover": { textDecoration: "underline" } }}>
        <Link to={link}>{title}</Link>
      </Heading>
    </Card>
  );
};
const EventCarousel = () => {
  return (
    <Carousel responsive={responsive} infinite={true}>
      <CarouselItem
        image="https://nepaldesk.com/sites/default/files/2023-11/Tihar%20%28Deepawali%29_1.jpg"
        title="Dashain Tihar"
        link="/places/pokhara"
      />
      <CarouselItem
        image="https://www.drishtiias.com/images/uploads/1667468445_image1.png"
        title="Chat parva"
        link="/places/pokhara"
      />
      <CarouselItem
        image="https://myrepublica.nagariknetwork.com/uploads/media/2019/January/Sakela-Udhauli.jpg"
        title="Udhauli Ubhauli"
        link="/places/pokhara"
      />
      <CarouselItem
        image="https://www.discoveraltitude.com/uploads/img/monks-recite-during-the-buddha-jayanti-festival.webp"
        title="Buddha Jayanti"
        link="/places/pokhara"
      />
    </Carousel>
  );
};

export default EventCarousel;
