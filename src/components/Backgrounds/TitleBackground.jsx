import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { TitleContainer } from "./Backgrounds-styled";

const TitleBackground = () => {
  return (
    <TitleContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </TitleContainer>
  );
};
export default TitleBackground;
