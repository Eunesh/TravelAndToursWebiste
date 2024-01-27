import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../features/404/pages/PageNotFound";
import MiscellaneousRoutes from "../features/miscellaneous/routes/MiscellaneousRoutes";
import Homepage from "../features/home/pages/Homepage";
import MainLayout from "../components/common/layout/MainLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<></>} />

      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Homepage />} />
        <Route path="more/*" element={<MiscellaneousRoutes />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
