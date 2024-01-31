import { Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FC } from "react";

const Container = styled(Stack)({
  marginLeft: "400px",
  width: "calc(100%-400px)",
  minHeight: "100vh",
});

interface IAdminPagesMainContainer {
  children: React.ReactNode | Array<React.ReactNode> | undefined;
}
const AdminPagesMainContainer: FC<IAdminPagesMainContainer> = ({
  children,
}) => {
  return (
    <Container p={6} spacing={4}>
      {children}
    </Container>
  );
};

export default AdminPagesMainContainer;
