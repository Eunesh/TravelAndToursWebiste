import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../features/404/pages/PageNotFound";
import MiscellaneousRoutes from "../features/miscellaneous/routes/MiscellaneousRoutes";
import Homepage from "../features/home/pages/Homepage";
import MainLayout from "../components/common/layout/MainLayout";
import LocationPage from "../features/places/pages/LocationPage";
import EventPage from "../features/events/pages/EventPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<></>} />

      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Homepage />} />
        <Route path="more/*" element={<MiscellaneousRoutes />} />
        <Route path="/places/:id" element={<LocationPage />} />
        <Route path="/events/:id" element={<EventPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
