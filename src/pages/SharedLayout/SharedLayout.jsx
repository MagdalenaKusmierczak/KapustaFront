import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../../service/Loader/Loader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { SharedLayoutContainer } from "./SharedLayout-styled";

const SharedLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SharedLayoutContainer>
        <Header />
          <Outlet />
        <Footer/>
      </SharedLayoutContainer></Suspense>
    
  );
};
export default SharedLayout;
