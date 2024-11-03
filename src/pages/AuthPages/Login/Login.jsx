import React from "react";
import { LoginForm } from "../../../components/AuthForms/LoginForm/LoginForm";
import { useMatchMedia } from "../../../hooks/MediaQuery";
import Name from "../../../images/union.svg";
import kapusta from "../../../images/kapusta.svg";
import tabShadow from "../../../images/tabEllipse.svg";
import groupTablet from "../../../images/groupTablet.png";
import groupDesktop from "../../../images/groupDesktop.png";
import halfKapusta from "../../../images/half.png";
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
} from "../AuthPages.styled";

export default function LoginPage() {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  return (
    <>
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
          <LoginForm />
        </Background>
      </StyledAuthPage>
    </>
  );
}
