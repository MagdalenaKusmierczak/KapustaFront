import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const FormWrapper = styled.div`
  width: 280px;
  height: 496px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  z-index: 1;
  background-color: var(--secondary-color);
  box-shadow: var(--primary-small-shadow);
  border-radius: 30px;
  @media screen and (min-width: 768px) {
    box-shadow: var(--primary-shadow);
    width: 426px;
    height: 552px;
    padding: 56px 84px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 117px;
  }
`;

export const BtnGoogle = styled.a`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background-color: var(--ternary-background);
  border-radius: 26px;
  border: 0;
  padding: 10px 18px 10px 20px;

  font-weight: 700;
  font-size: 14px;

  color: var(--primary-color);
`;

export const Text = styled.p`
  letter-spacing: 0.04em;
  color: var(--quinary-color);
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const LabelText = styled.span`
  display: flex;
  margin-bottom: 12px;
  width: 100%;
  font-weight: 600;
  line-height: 12px;
  color: var(--primary-color);
`;

export const Input = styled.input`
  box-shadow: inset 0 0 0 1px var(--ternary-background),
    inset 0 0 0 100px var(--ternary-background);
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: var(--ternary-background);
  padding: 17px 18px;
  width: 240px;
  @media screen and (min-width: 768px) {
    padding: 17px 20px 17px 20px;
    width: 259px;
    height: 52px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 15px;
  }
`;

export const Navlink = styled(NavLink)`
  width: 122px;
  height: 44px;
  background-color: var(--primary-background);
  border-radius: 16px;
  border: none;
  padding: 0;
  font-weight: 700;
  align-items: center;
  text-transform: uppercase;
  box-shadow: var(--quinary-color);
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--quinary-color);
  background-color: var(--primary-background);
  text-decoration: none;
  &.active {
    color: var(--secondary-color);
    background-color: var(--brand-color);
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: var(--quinary-color);
    background-color: var(--primary-background);
  }
`;
