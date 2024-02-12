import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Text } from "@chakra-ui/react";
import AdminLoginLayout from "../components/layout/AdminLoginLayout";
import { selectSession } from "../slice/sessionSlice";
import AdminLoginForm from "../components/form/AdminLoginForm";

const AdminLoginPage = () => {
  const { isLoggedIn, isLoading } = useSelector(selectSession);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (!isLoading && isLoggedIn) {
    return <Navigate to="/admin/protected" />;
  }
  return (
    <AdminLoginLayout>
      <AdminLoginForm />
    </AdminLoginLayout>
  );
};

export default AdminLoginPage;
