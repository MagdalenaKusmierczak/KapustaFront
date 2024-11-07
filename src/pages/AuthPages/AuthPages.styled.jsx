import styled from "styled-components";
import { HandySvg } from "handy-svg";
import imageMobBg from "../../images/backgroundMobile.png";
import imageTabBg from "../../images/backgroundTablet.png";
import imageDeskBg from "../../images/backgroundDesktop.png";

export const StyledAuthPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

`;

export const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 342px;
  background-image: url(${imageMobBg});
  background-repeat: no-repeat;
  padding-top: 86px;
  padding-left: 20px;
  margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    width: 768px;
    height: 582px;
    padding-top: 80px;
    align-items: center;
    padding-left: 32px;
    padding-right: 32px;
    background-image: url(${imageTabBg});
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 582px;
    padding-right: 91px;
    padding-left: 229px;
    flex-direction: row;
    justify-content: center;
    background-image: url(${imageDeskBg});
    background-repeat: no-repeat;
  }
`;

export const KapustaMobTop = styled.img`
  position: absolute;
  top: 110px;
  right: 0;
`;

export const KapustaMobBottom = styled(HandySvg)`
  position: absolute;
  top: 600px;
  left: 35px;
`;

export const KapustaTabBotLeft = styled(HandySvg)`
  position: absolute;
  top: 800px;
  left: 103px;
  z-index: 1;
  @media screen and (min-width: 1280px) {
    top: 700px;
    left: 230px;
  }
`;

export const KapustaTabBotRight = styled(HandySvg)`
  position: absolute;
  top: 765px;
  left: 197px;
  z-index: 1;
  transform: rotate(-90deg);
  @media screen and (min-width: 1280px) {
    top: 680px;
    left: 324px;
  }
`;

export const ShadowTabBotLeft = styled(HandySvg)`
  position: absolute;
  top: 880px;
  left: 108px;
  @media screen and (min-width: 1280px) {
    top: 770px;
    left: 230px;
  }
`;

export const ShadowTabBotRight = styled(HandySvg)`
  position: absolute;
  top: 860px;
  left: 219px;
  @media screen and (min-width: 1280px) {
    top: 750px;
    left: 340px;
  }
`;

export const Image = styled.img`
  width: 183px;
  height: 47px;
  margin-bottom: 5px;
  z-index: 2;
  @media screen and (min-width: 768px) {
    width: 307px;
    height: 78px;
  }
  @media screen and (min-width: 1280px) {
    width: 377px;
    height: 120px;
  }
`;

export const Text = styled.p`
  width: 141px;
  margin-bottom: 50px;
  text-transform: uppercase;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 1.15;
  letter-spacing: 0.15em;
  z-index: 2;
  color: #52555f;
  @media screen and (min-width: 768px) {
    width: 162px;
    margin-bottom: 80px;
    font-size: 16px;
    line-height: 1.18;
    letter-spacing: 0.18em;
  }
`;

export const TextWrap = styled.div`
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -110px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 0;
    margin-right: 157px;
  }
`;

export const GroupTablet = styled.img`
  position: absolute;
  top: 28px;
  left: 0;
`;

export const GroupDesktop = styled.img`
  position: absolute;
  top: 28px;
  left: 10px;
`;