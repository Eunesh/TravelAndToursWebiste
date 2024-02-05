import { Routes, Route } from "react-router-dom";
import Contactus from "../pages/Contactus";
import MainContainer from "../../../components/common/layout/MainContainer";
import Aboutus from "../pages/Aboutus";
import PageNotFound from "../../404/pages/PageNotFound";

const MiscellaneousRoutes = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="contact-us" element={<Contactus />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </MainContainer>
  );
};

export default MiscellaneousRoutes;
