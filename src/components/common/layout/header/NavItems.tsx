import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { FC } from "react";

const data = [
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
];

interface INavItem {
  title: string;
  subLinks: Array<{ title: string; link: string }>;
}
const NavItem: FC<INavItem> = ({ title, subLinks }) => {
  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        as={Button}
        colorScheme="yellow"
        variant="ghost"
        sx={{ background: "none" }}
        _hover={{ bg: "yellow.100", borderBottom: "2px solid yellow.500" }}
        _expanded={{ bg: "yellow.200", borderBottom: "2px solid yellow.500" }}
      >
        {title}
      </MenuButton>
      <MenuList>
        {subLinks.map((item) => (
          <MenuItem key={item.title}>{item.title}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

const NavItems = () => {
  return (
    <Flex alignItems="center" gap={2}>
      {data.map((item) => (
        <React.Fragment key={item.title}>
          <NavItem title={item.title} subLinks={item.subLinks} />
        </React.Fragment>
      ))}

      <Button
        px={4}
        py={2}
        colorScheme="yellow"
        variant="ghost"
        sx={{ background: "none" }}
        _hover={{ bg: "yellow.100", borderBottom: "2px solid yellow.500" }}
      >
        Contact Us
      </Button>
      <Button
        px={4}
        py={2}
        colorScheme="yellow"
        variant="ghost"
        sx={{ background: "none" }}
        _hover={{ bg: "yellow.100", borderBottom: "2px solid yellow.500" }}
      >
        About Us
      </Button>
    </Flex>
  );
};

export default NavItems;
