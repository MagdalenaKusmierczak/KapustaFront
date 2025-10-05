import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const BalanceSection = styled.section`
  box-sizing: border-box;
  background: var(--secondary-background);
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-inline: 20px;
    padding-top: 16px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    margin: 0;
    padding-inline: 32px;
    padding-top: 40px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    padding-inline: 91px;
  }
`;

export const MainPageLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    // width: 100%;
    // text-align: left;
  }
  @media screen and (min-width: 768px) {
    width: auto;
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const MainPageText = styled.p`
  display: block;

  line-height: 14.06px;
  letter-spacing: 0.04em;
  color: var(--quaternary-color);
  text-decoration: none;
  margin: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const MainPageIcon = styled.svg`
  margin-inline: 3px;
  margin-block: 6px;
`;

export const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 102px;
    background: var(--secondary-background);
  }
  @media screen and (min-width: 1280px) {
    gap: 214px;
  }
`;
