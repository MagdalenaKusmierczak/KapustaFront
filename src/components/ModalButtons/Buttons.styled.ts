import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  box-sizing: border-box;
  padding: ${props => props.variant === "primary" ? "12px 0" : "12px 34px"};
  width: 120px;
  border: ${props => props.variant === "primary" ? "none" : "2px solid var(--primary-background)"};
  background-color: ${props => props.variant === "primary" ? "var(--brand-color)" : "var(--secondary-color)"};
  border-radius: 16px;
  color: ${props => props.variant === "primary" ? "var(--secondary-color)" : "var(--quinary-color)"};
  font-weight: 700;
  font-family: inherit;
  box-shadow: ${props => props.variant === "primary" ? "var(--brand-shadow)" : "none"};
  cursor: pointer;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    opacity: 0.9;
  }
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

  color: var(--primary-color);
  a {
    color: inherit;
  }
`;

export const ButtonBackAction = styled.button`
  z-index: 2;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  margin: 16px 0 16px 20px;
  cursor: pointer;
  padding: 0;
`;

export const ButtonBackWithTextAction = styled.button`
  z-index: 2;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  margin: 16px 0 14px 20px;
  cursor: pointer;
  padding: 0;
`;