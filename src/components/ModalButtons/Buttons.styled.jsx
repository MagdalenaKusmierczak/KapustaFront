import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledOrangeButton = styled.button`
  box-sizing: border-box;
  padding: 12px 0;
  width: 120px;
  border: none;
  background-color: var(--brand-color);
  border-radius: 16px;
  color: #fff;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  letter-spacing: 0.02em;
  font-size: 12px;
  line-height: 1.17;
  box-shadow: 1px 3px 5px 0 #ff6b0859;
`;

export const StyledWhiteButton = styled.button`
  box-sizing: border-box;
  padding: 12px 34px;
  border: 2px solid var(--primary-background);
  background-color: #fff;
  border-radius: 16px;
  color: var(--quinary-color);
  font-size: 12px;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  letter-spacing: 0.02em;
  line-height: 1.17;
  width: 120px;
`;

export const ButtonBack = styled(Link)`
  z-index: 2;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  margin: 16px 0 16px 20px;
`;

export const ButtonBackWithText = styled(Link)`
  z-index: 2;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  margin: 16px 0 14px 20px;
`;

export const ButtonBackText = styled.p`
  padding-left: 4px;
  padding-inline: 3px;
  font-size: 10px;
  font-weight: 700;
  line-height: 11.72px;
  letter-spacing: 0.02em;
  text-align: center;
  color: var(--primary-color);
  a {
    color: inherit;
  }
`;
