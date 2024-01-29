import { FC } from "react";
import { Container } from "@chakra-ui/react";

interface IAdminLoginLayout {
  children: React.ReactNode | Array<React.ReactNode> | undefined;
}
const AdminLoginLayout: FC<IAdminLoginLayout> = ({ children }) => {
  return (
    <Container maxW="full" className="admin-login-container">
      {children}
    </Container>
  );
};

export default AdminLoginLayout;
