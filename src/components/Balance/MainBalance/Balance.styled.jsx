import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const BalanceSection = styled.section`
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 32px;
    padding-inline: 20px;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    padding-inline: 32px;
    margin-bottom: 60px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1280px) {
    justify-content: flex-end;
    gap: 298px;
    padding-inline: 91px;
    margin-bottom: 8px;
  }
`;

export const ReportBox = styled.div`
  z-index: 1;
  display: flex;
  gap: 15px;
  @media (max-width: 767px) {
    width: 84px;
    height: 24px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ReportText = styled.p`
  z-index: 1;
  z-index: 1;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
  letter-spacing: 0.04em;
  color: #52555fb2;
  padding: 0;
  margin: 0;
  padding-top: 7px;
`;

export const ReportIcon = styled.svg`
  z-index: 1;
  margin: 5px;
  text-align: center;
`;

export const SectionBar = styled.svg`
  z-index: 1;
  @media (max-width: 767px) {
    margin-bottom: 8px;
  }
`;

export const Link = styled(NavLink)`
  z-index: 1;
`;
