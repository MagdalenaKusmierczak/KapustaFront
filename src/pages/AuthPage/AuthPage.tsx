import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import Loader from "../../service/Loader/Loader";
import { LoginForm } from "../../components/AuthForms/LoginForm/LoginForm";
import { RegistrationForm } from "../../components/AuthForms/RegistrationForm/RegistrationForm";
import { useMatchMedia } from "../../utils/hooks/useMatchMedia";
import Name from "../../images/union.svg";
import kapusta from "../../images/kapusta.svg";
import tabShadow from "../../images/tabEllipse.svg";
import groupTablet from "../../images/groupTablet.png";
import groupDesktop from "../../images/groupDesktop.png";
import halfKapusta from "../../images/half.png";
import {
  StyledAuthPage,
  Image,
  Background,
  KapustaMobBottom,
  KapustaTabBotLeft,
  KapustaTabBotRight,
  ShadowTabBotLeft,
  ShadowTabBotRight,
  TextWrap,
  Text,
  KapustaMobTop,
  GroupTablet,
  GroupDesktop,
} from "./AuthPage.styled";

export default function Auth() {
  const location = useLocation();
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const isLoading = useSelector(selectIsLoading);

  const isRegisterPage = location.pathname === "/register";

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <StyledAuthPage>
        <Background>
          {isMobile && (
            <>
              <KapustaMobTop src={halfKapusta} alt="bg" />
              <KapustaMobBottom src={kapusta} width="83" height="89" />
            </>
          )}
          {isTablet && (
            <>
              <GroupTablet src={groupTablet} alt="bg" />
              <KapustaTabBotLeft src={kapusta} width="83" height="89" />
              <ShadowTabBotLeft src={tabShadow} width="83" height="89" />
              <KapustaTabBotRight src={kapusta} width="83" height="89" />
              <ShadowTabBotRight src={tabShadow} width="83" height="89" />
            </>
          )}
          {isDesktop && (
            <>
              <GroupDesktop src={groupDesktop} alt="bg" />
              <KapustaTabBotLeft src={kapusta} width="83" height="89" />
              <ShadowTabBotLeft src={tabShadow} width="83" height="89" />
              <KapustaTabBotRight src={kapusta} width="83" height="89" />
              <ShadowTabBotRight src={tabShadow} width="83" height="89" />
            </>
          )}
          <TextWrap>
            <Image src={Name} alt="Kapusta" />
            <Text>Smart Finance</Text>
          </TextWrap>
          {isRegisterPage ? <RegistrationForm /> : <LoginForm />}
        </Background>
      </StyledAuthPage>
    </Suspense>
  );
}

