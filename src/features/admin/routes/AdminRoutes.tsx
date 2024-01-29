import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<AdminLoginPage />} />
    </Routes>
  );
};

export default AdminRoutes;
