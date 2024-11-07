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
    margin-top:16px;
  }

  @media (min-width: 768px) {
    gap: 20px;
    align-items: center;
     margin-top:0px;
}
  }
`;
export const BalanceBox = styled.div`
  display: flex;
  @media (max-width: 767px) {
    gap: 0;
  }

  @media (min-width: 1280px) {
    gap: 16px;
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
`;
export const BalanceInput = styled.input`
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
    width: 183px;
    border-radius: 16px;
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
    background: ${({ disabled }) => (disabled ? "#f2f5fc" : "#ff751d")};
    border: ${({ disabled }) => (disabled ? "#ccc" : "#ff751d")};
    color: ${({ disabled }) => (disabled ? "#52555fb2" : "#ffffff")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    transition: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08),
      0 2px 2px rgba(0, 0, 0, 0.12);
  }
  @media (max-width: 767px) {
    display: none;
    border-radius: 0 16px 16px 0;
    border-left: 0;
  }
  @media (min-width: 768px) {
    display: none;
    border-radius: 16px;
  }
  @media (min-width: 1280px) {
    width: 125px;
    display: inline-block;
  }
`;

export const SectionBar = styled.svg`
  @media (max-width: 767px) {
    width: ;
    height: ;
    padding: ;
    margin-bottom: 8px;
  }
`;
