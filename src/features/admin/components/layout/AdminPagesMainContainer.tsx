import { Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FC } from "react";

const Container = styled(Stack)(({ minimized }: { minimized: boolean }) => ({
  marginLeft: minimized ? "100px" : "400px",
  width: minimized ? "calc(100%-100px)" : "calc(100%-400px)",
  minHeight: "100vh",
  transition: "all 200ms",
  "@media (max-width: 1540px)": {
    marginLeft: minimized ? "100px" : "300px",
    width: minimized ? "calc(100%-100px)" : "calc(100%-300px)",
  },
}));

interface IAdminPagesMainContainer {
  children: React.ReactNode | Array<React.ReactNode> | undefined;
  minimized: boolean;
}
const AdminPagesMainContainer: FC<IAdminPagesMainContainer> = ({
  children,
  minimized,
}) => {
  return (
    <Container p={6} spacing={4} minimized={minimized}>
      {children}
    </Container>
  );
};

export default AdminPagesMainContainer;
