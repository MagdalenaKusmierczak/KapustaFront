import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../../service/Loader/Loader";
import Header from "../../components/Header/Header";
import { SharedLayoutContainer } from "./SharedLayout-styled";

const SharedLayout = () => {
  return (
    <>
      <SharedLayoutContainer>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </SharedLayoutContainer>
    </>
  );
};
export default SharedLayout;
