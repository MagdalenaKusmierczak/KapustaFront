import styled from "styled-components";

export const BalanceSection = styled.section`
  box-sizing: border-box;
  background: #f2f5fc;
  display: flex;
  align-items: center;
  height: 128px;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 32px;
    margin-top: 14px;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    justify-content: flex-end;
    gap: 298px;
  }
`;

export const BalanceForm = styled.form`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
  }
  @media (min-width: 768px) {
    gap: 12px;
    align-items: center;
}
  }
  @media (min-width: 1280px) {
  }
`;

export const BalanceBox = styled.div`
  display: flex;
  @media (max-width: 767px) {
    width: 280px;
    gap: 0px;
  }
  @media (min-width: 768px) {
    gap: 15px;
  }
  @media (min-width: 1280px) {
  }
`;

export const BalanceText = styled.label`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.06px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #52555fb2;
  @media (min-width: 768px) {
    width: 83px;
    text-align: right;
    height: 20px;
  }
  @media (min-width: 1280px) {
    width: auto;
  }
`;

export const BalanceInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  box-sizing: border-box;
  text-align: center;
  background: #f2f5fc;
  height: 44px;
  border: 2px solid #ffffff;
  outline: none;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  letter-spacing: 0.02em;
  color: #000000;
  ::placeholder {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.06px;
    letter-spacing: 0.02em;
    color: #000000;
  }
  @media (max-width: 767px) {
    width: 140px;
    border-radius: 16px 0px 0px 16px;
  }
  @media (min-width: 768px) {
    border-radius: 16px;
    width: 125px;
  }
  @media (min-width: 1280px) {
    width: 125px;
  }
`;

export const BalanceButton = styled.button`
  box-sizing: border-box;
  text-align: center;
  background: #f2f5fc;
  height: 44px;
  border: 2px solid #ffffff;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #52555fb2;
  &:hover,
  &:focus {
    background: #ff751d;
    border: #ff751d;
    color: #ffffff;
    cursor: pointer;
    transition: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
  @media (max-width: 767px) {
    width: 140px;
    border-radius: 0px 16px 16px 0px;
    border-left: 0px;
  }
  @media (min-width: 768px) {
    border-radius: 16px;
    width: 125px;
  }
  @media (min-width: 1280px) {
    width: 125px;
  }
`;

export const ReportBox = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 767px) {
    width: 84px;
    height: 24px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1280px) {
  }
`;

export const ReportText = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
  letter-spacing: 0.04em;
  color: #52555fb2;
  padding: 0px;
  margin: 0px;
  padding-top: 7px;
`;

export const ReportIcon = styled.svg`
  width: 14px;
  height: 14px;
  padding: 5px;
  text-align: center;
`;

export const SectionBar = styled.svg`
  @media (max-width: 767px) {
    margin-bottom: 8px;
  }
`;
