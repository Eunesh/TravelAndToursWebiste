import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminPagesMainContainer from "./AdminPagesMainContainer";

interface IAdminPagesLayout {
  children: React.ReactNode | Array<React.ReactNode> | undefined;
}
const AdminPagesLayout: FC<IAdminPagesLayout> = ({ children }) => {
  return (
    <Box>
      <AdminSidebar />
      <AdminPagesMainContainer>{children}</AdminPagesMainContainer>
    </Box>
  );
};

export default AdminPagesLayout;
