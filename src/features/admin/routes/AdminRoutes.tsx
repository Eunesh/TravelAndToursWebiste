import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminHomePage from "../pages/AdminHomePage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<AdminLoginPage />} />
      <Route path="/" element={<AdminHomePage />} />
    </Routes>
  );
};

export default AdminRoutes;
