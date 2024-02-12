import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminPagesLayout from "../components/layout/AdminPagesLayout";
import useMaintainSession from "../hooks/useMaintainSession";
import AdminHomePage from "../pages/AdminHomePage";
import AdminEventsPage from "../pages/AdminEventsPage";
import PageNotFound from "../../404/pages/PageNotFound";

const AdminRoutes = () => {
  // This hook is used to refetch admin session from session storage on every page refresh.
  useMaintainSession();
  return (
    <Routes>
      <Route path="login" element={<AdminLoginPage />} />
      <Route path="protected" element={<AdminPagesLayout />}>
        <Route path="" element={<AdminHomePage />} />
        <Route path="events" element={<AdminEventsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AdminRoutes;
