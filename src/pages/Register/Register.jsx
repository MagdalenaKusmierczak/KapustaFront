import React from "react";
import { RegistrationForm } from "../../components/AuthForms/RegistrationForm/RegistrationForm";
import { useMatchMedia } from "../../hooks/MediaQuery";

import {
  StyledRegisterPage,
  Image,
  Background,
  KapustaMobBottom,
  KapustaTabBotLeft,
  KapustaTabBotRight,
  ShadowTabBotLeft,
  TextWrap,
  ShadowTabBotRight,
  Text,
  KapustaMobTop,
  GroupTablet,
  GroupDesktop,
} from "./Register-styled";

import Name from "../../images/union.svg";
import kapusta from "../../images/kapusta.svg";
import tabShadow from "../../images/tabEllipse.svg";
import groupTablet from "../../images/groupTablet.png";
import groupDesktop from "../../images/groupDesktop.png";
import halfKapusta from "../../images/half.png";

// Register page
export default function RegisterPage() {
  // Media
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  return (
    <StyledRegisterPage>
      <Background>
        {/* For mobile */}
        {isMobile && (
          <>
            <KapustaMobTop src={halfKapusta} alt="bg" />
            <KapustaMobBottom src={kapusta} width="83" height="89" />
          </>
        )}
        {/* For tablet */}
        {isTablet && (
          <>
            <GroupTablet src={groupTablet} alt="bg" />

            <KapustaTabBotLeft src={kapusta} width="83" height="89" />
            <ShadowTabBotLeft src={tabShadow} width="83" height="89" />
            <KapustaTabBotRight src={kapusta} width="83" height="89" />
            <ShadowTabBotRight src={tabShadow} width="83" height="89" />
          </>
        )}
        {/* For desktop */}
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
        <RegistrationForm />
      </Background>
    </StyledRegisterPage>
  );
}
