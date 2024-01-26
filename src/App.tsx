import { ToastContainer } from "react-toastify";
import Router from "./routes/Router";
import Header from "./components/common/layout/header/Header";
import MainContainer from "./components/common/layout/MainContainer";
import Footer from "./components/common/layout/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Router />
      </MainContainer>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
