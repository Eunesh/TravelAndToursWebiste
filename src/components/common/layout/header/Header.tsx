import React from "react";
import { Avatar, Container, Divider, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import logo from "../../../../assets/images/logo.png";

const Header = () => {
  return (
    <Container maxW="full" borderBottom="1px" borderColor="gray.300">
      <Container maxW="container.xl" py="10px">
        <Flex justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Flex gap={2} alignItems="center">
              <Avatar size="lg" name="Dan Abrahmov" src={logo} />
              <Divider orientation="vertical" />
              <Text fontSize="2xl">Travel.com</Text>
            </Flex>
          </Link>

          <NavItems />
        </Flex>
      </Container>
    </Container>
  );
};

export default Header;
