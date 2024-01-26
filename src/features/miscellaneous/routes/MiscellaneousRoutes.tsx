import { Routes, Route } from "react-router-dom";
import Contactus from "../pages/Contactus";

const MiscellaneousRoutes = () => {
  return (
    <Routes>
      <Route path="contact-us" element={<Contactus />} />
    </Routes>
  );
};

export default MiscellaneousRoutes;
