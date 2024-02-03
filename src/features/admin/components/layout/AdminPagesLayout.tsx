import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminPagesMainContainer from "./AdminPagesMainContainer";
import useMinimizePage from "../../hooks/useMinimizePage";

interface IAdminPagesLayout {
  children: React.ReactNode | Array<React.ReactNode> | undefined;
}
const AdminPagesLayout: FC<IAdminPagesLayout> = ({ children }) => {
  const { minimized, delayedMinimized, toogleMinimized } =
    useMinimizePage(false);
  return (
    <Box>
      <AdminSidebar
        minimized={minimized}
        delayedMinimized={delayedMinimized}
        toogleMinimized={toogleMinimized}
      />
      <AdminPagesMainContainer minimized={minimized}>
        {children}
      </AdminPagesMainContainer>
    </Box>
  );
};

export default AdminPagesLayout;
