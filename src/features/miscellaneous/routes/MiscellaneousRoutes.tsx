import { Routes, Route } from "react-router-dom";
import Contactus from "../pages/Contactus";
import MainContainer from "../../../components/common/layout/MainContainer";
import Aboutus from "../pages/Aboutus";

const MiscellaneousRoutes = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="contact-us" element={<Contactus />} />
        <Route path="about-us" element={<Aboutus />} />
      </Routes>
    </MainContainer>
  );
};

export default MiscellaneousRoutes;
