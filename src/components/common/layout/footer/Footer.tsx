import React from "react";
import {
  Avatar,
  Center,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
// Icons

// Top footer link data
const findUsOn = {
  title: "Find us on",
  links: [
    {
      title: "Facebook",
      link: "",
      icon: () => <FacebookIcon />,
    },
    {
      title: "Instagram",
      link: "",
      icon: () => <InstagramIcon />,
    },
    {
      title: "Twitter",
      link: "",
      icon: () => <XIcon />,
    },
    {
      title: "Youtube",
      link: "",
      icon: () => <YouTubeIcon />,
    },
  ],
};

const moreFromUs = {
  title: "More from us",
  data: [
    {
      title: "Places to go",
      subLinks: [
        {
          title: "Pokhara",
          link: "/places/pokhara",
        },
        {
          title: "Chitwan",
          link: "/places/pokhara",
        },
        {
          title: "Lumbini",
          link: "/places/pokhara",
        },
      ],
    },
    {
      title: "Things to do",
      subLinks: [
        {
          title: "Rafting",
          link: "/places/pokhara",
        },
        {
          title: "Surfing",
          link: "/places/pokhara",
        },
        {
          title: "Jungle Safari",
          link: "/places/pokhara",
        },
      ],
    },
  ],
};
// Top footer link data

const BottomFooter = () => {
  const year = new Date().getFullYear();
  return (
    <Center p="10px" bg="yellow.500" color="white">
      &copy; {year} All rights reseved.
      <Text color="blue.500">
        <Link to="/">Travel.com</Link>
      </Text>
    </Center>
  );
};

const FindUsOnLinks = () => {
  return (
    <Stack spacing={4}>
      <Text fontSize="xl" fontWeight="700" color="yellow.500">
        {findUsOn.title}
      </Text>
      {findUsOn.links.map((item) => (
        <Link to={item.link} key={item.title}>
          <Flex gap={4} alignItems={"center"} color="gray.500">
            {item.icon()}
            <Text>{item.title}</Text>
          </Flex>
        </Link>
      ))}
    </Stack>
  );
};

const MoreFromUsLinks = () => {
  return (
    <Stack spacing={4}>
      <Text fontSize="xl" fontWeight="700" color="yellow.500">
        {moreFromUs.title}
      </Text>
      <Flex gap={10}>
        {moreFromUs.data.map((category) => (
          <Stack key={category.title} spacing={2}>
            <Text fontSize="lg" fontWeight="700" color="gray.500">
              {category.title}
            </Text>
            {category.subLinks.map((link) => (
              <Link to={link.link}>
                <Text color="gray.400">{link.title}</Text>
              </Link>
            ))}
          </Stack>
        ))}
      </Flex>
    </Stack>
  );
};

const QuickLinks = () => {
  return (
    <Stack spacing={4}>
      <Text fontSize="xl" fontWeight="700" color="yellow.500">
        Quick Links
      </Text>
      <Link to="/more/contact-us">
        <Text color="gray.500">Contact Us</Text>
      </Link>
      <Link to="/more/about-us">
        <Text color="gray.500">About Us</Text>
      </Link>
    </Stack>
  );
};

const TopFooterLinks = () => {
  return (
    <Flex gap={20}>
      <FindUsOnLinks />
      <MoreFromUsLinks />
      <QuickLinks />
    </Flex>
  );
};

const TopFooter = () => {
  return (
    <Flex gap={100}>
      <Flex gap={10}>
        <Stack spacing={10}>
          <Flex gap={5} alignItems="center">
            <Avatar size="xl" name="Dan Abrahmov" src={logo} />
            <Text fontSize="2xl">Travel.com</Text>
          </Flex>
          <Text color="gray.400" maxW="400px" textAlign={"justify"}>
            Nepal Tourism Board is a national tourism organization of Nepal
            established in 1998 by an Act of Parliament in the form of
            partnership between the Government of Nepal and private sector
            tourism industry to develop and market Nepal as an attractive
            tourist destination.
          </Text>
        </Stack>
        <Divider orientation="vertical" />
      </Flex>

      <TopFooterLinks />
    </Flex>
  );
};

const Footer = () => {
  return (
    <Container maxW="full" p={0} borderTop="1px" borderColor="gray.300">
      <Container maxW="container.xl" px={"20px"} py="30px">
        <TopFooter />
      </Container>
      <BottomFooter />
    </Container>
  );
};

export default Footer;
