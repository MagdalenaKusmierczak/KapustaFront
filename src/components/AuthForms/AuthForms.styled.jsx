import styled from "styled-components";
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
  background-color: #fff;
  box-shadow: 5px 10px 20px 0px #aab2c566;
  border-radius: 30px;
  @media screen and (min-width: 768px) {
    box-shadow: 0px 10px 60px 0px #aab2c533;
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
  background-color: #f6f7fb;
  border-radius: 26px;
  border: 0;
  padding: 10px 18px 10px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.04em;
  color: #52555f;
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
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: #000000;
`;

export const Input = styled.input`
  box-shadow: inset 0 0 0 1px #f6f7fb, inset 0 0 0 100px #f6f7fb;
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: #f6f7fb;
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
  background-color: #f5f6fb;
  border-radius: 16px;
  border: none;
  padding: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  box-shadow: #52555f;
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52555f;
  background-color: #f5f6fb;
  text-decoration: none;
  &.active {
    color: #ffffff;
    background-color: #ff751d;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #52555f;
    background-color: #f5f6fb;
  }
`;
