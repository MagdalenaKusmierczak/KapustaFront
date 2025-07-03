import styled from "@emotion/styled";

export const NumberMobil = styled.div`
  display: flex;
  margin: 32px auto 0 auto;
`;

export const InputMobile = styled.input`
  width: 125px;
  height: 44px;
  border: 2px solid var(--secondary-color);
  border-bottom-left-radius: 22px;
  border-top-left-radius: 22px;
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  outline: none;
  background-color: var(--primary-background);
`;

export const Span = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 44px;
  border: 2px solid var(--secondary-color);
  border-bottom-right-radius: 22px;
  border-top-right-radius: 22px;
  background-color: var(--primary-background);
`;

export const Number = styled.div`
  position: relative;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const InputNumber = styled.input`
  width: 108px;
  height: 44px;
  padding-left: 15px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  border: 2px solid var(--primary-background);
  border-bottom-right-radius: 22px;
  border-top-right-radius: 22px;
  outline: none;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
    border-left: none;
    padding-right: 37px;
  }
  @media screen and (min-width: 1280px) {
    width: 119px;
    padding-left: 10px;
    padding-right: 46px;
  }
  ::placeholder {
    color: var(--ternary-color);
  }
`;

export const Image = styled.svg`
  position: absolute;
  @media screen and (min-width: 768px) {
    top: 12px;
    left: 75px;
  }
`;
