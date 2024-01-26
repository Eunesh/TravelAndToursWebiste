import { Container } from "@chakra-ui/react";
import React, { FC } from "react";

interface IMainContainer {
  children: React.ReactNode | Array<React.ReactNode> | undefined;
}
const MainContainer: FC<IMainContainer> = ({ children }) => {
  return (
    <Container maxW="full">
      <Container maxW="container.2xl" py={{ base: "30px", md: "50px" }}>
        {children}
      </Container>
    </Container>
  );
};

export default MainContainer;
