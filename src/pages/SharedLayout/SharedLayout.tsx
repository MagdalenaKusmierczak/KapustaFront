import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../../service/Loader/Loader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useMatchMedia } from "../../utils/hooks/useMatchMedia";
import { useRouteDetection } from "../../utils/hooks/useRouteDetection";
import { SharedLayoutContainer } from "./SharedLayout-styled";

const SharedLayout = () => {
  const { isMobile } = useMatchMedia();
  const { isExpenses, isIncome } = useRouteDetection();

  const shouldHideFooter = (isExpenses && isMobile) || (isIncome && isMobile);

  return (
    <Suspense fallback={<Loader />}>
      <SharedLayoutContainer>
        <Header />
        <Outlet />
        {!shouldHideFooter && <Footer />}
      </SharedLayoutContainer>
    </Suspense>
  );
};

export default SharedLayout;



