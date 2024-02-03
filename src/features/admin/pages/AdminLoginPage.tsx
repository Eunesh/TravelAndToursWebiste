import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Text } from "@chakra-ui/react";
import AdminLoginLayout from "../components/layout/AdminLoginLayout";
import AdminLoginForm from "../components/form/AdminLoginForm";
import { selectSession } from "../slice/sessionSlice";

const AdminLoginPage = () => {
  const { isLoggedIn, isLoading } = useSelector(selectSession);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (!isLoading && isLoggedIn) {
    toast.warn("You need to logout to access auth pages.");

    return <Navigate to="/admin/protected" />;
  }
  return (
    <AdminLoginLayout>
      <AdminLoginForm />
    </AdminLoginLayout>
  );
};

export default AdminLoginPage;
