import { Navigate, Outlet } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import AdminSidebar from "./AdminSidebar";
import AdminPagesMainContainer from "./AdminPagesMainContainer";
import useMinimizePage from "../../hooks/useMinimizePage";
import { useSelector } from "react-redux";
import { selectSession } from "../../slice/sessionSlice";
import { toast } from "react-toastify";

const AdminPagesLayout = () => {
  const { isLoggedIn, isLoading } = useSelector(selectSession);
  const { minimized, delayedMinimized, toogleMinimized } = useMinimizePage(false);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (!isLoading && !isLoggedIn) {
    toast.warn("You need to be logged in to access protected pages.");
    return <Navigate to="/admin/login" />;
  }
  return (
    <Box>
      <AdminSidebar
        minimized={minimized}
        delayedMinimized={delayedMinimized}
        toogleMinimized={toogleMinimized}
      />
      <AdminPagesMainContainer minimized={minimized}>
        <Outlet />
      </AdminPagesMainContainer>
    </Box>
  );
};

export default AdminPagesLayout;
