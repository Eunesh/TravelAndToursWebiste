import React from "react";
import { Avatar, Container, Flex, Show, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import logo from "../../../../assets/images/logo.png";
import NavItemsMobile from "./NavItemsMobile";

const Header = () => {
  return (
    <Container
      maxW="full"
      borderBottom="1px"
      borderColor="gray.300"
      position="fixed"
      bg="white"
      top="0"
      zIndex={10}
    >
      <Container maxW="container.xl" py="10px">
        <Flex justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Flex gap={2} alignItems="center">
              <Avatar
                size={{ base: "md", lg: "lg" }}
                name="Travel.com"
                src={logo}
              />
              <Text fontSize={{ base: "xl", lg: "2xl" }}>Travel.com</Text>
            </Flex>
          </Link>

          <Show above="lg">
            <NavItems />
          </Show>
          <Show below="lg">
            <NavItemsMobile />
          </Show>
        </Flex>
      </Container>
    </Container>
  );
};

export default Header;
