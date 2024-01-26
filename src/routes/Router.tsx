import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../features/404/pages/PageNotFound";
import MiscellaneousRoutes from "../features/miscellaneous/routes/MiscellaneousRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path="/more" element={<MiscellaneousRoutes />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
