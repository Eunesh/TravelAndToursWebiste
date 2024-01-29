import { Routes, Route } from "react-router-dom";
import Contactus from "../pages/Contactus";
import MainContainer from "../../../components/common/layout/MainContainer";

const MiscellaneousRoutes = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="contact-us" element={<Contactus />} />
      </Routes>
    </MainContainer>
  );
};

export default MiscellaneousRoutes;
