import Header from "./header/Header";
import MainContainer from "./MainContainer";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};

export default MainLayout;
