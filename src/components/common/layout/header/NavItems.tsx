import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { navData } from "./navData";

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
      {navData.map((item) => (
        <React.Fragment key={item.title}>
          <NavItem title={item.title} subLinks={item.subLinks} />
        </React.Fragment>
      ))}

      <Link to="/more/contact-us">
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
      </Link>
      <Link to="/more/about-us">
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
      </Link>
    </Flex>
  );
};

export default NavItems;
