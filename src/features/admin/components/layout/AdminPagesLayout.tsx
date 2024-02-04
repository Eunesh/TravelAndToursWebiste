import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Text } from "@chakra-ui/react";
import AdminSidebar from "./AdminSidebar";
import AdminPagesMainContainer from "./AdminPagesMainContainer";
import useMinimizePage from "../../hooks/useMinimizePage";
import { useSelector } from "react-redux";
import { selectSession } from "../../slice/sessionSlice";

// AG Grid CSS
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
// AG Grid CSS

const AdminPagesLayout = () => {
  const { isLoggedIn, isLoading } = useSelector(selectSession);
  const { minimized, delayedMinimized, toogleMinimized } =
    useMinimizePage(false);

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
