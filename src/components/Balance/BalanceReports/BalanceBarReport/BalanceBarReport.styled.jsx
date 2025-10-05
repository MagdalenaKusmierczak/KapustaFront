import styled from "@emotion/styled";

export const BalanceSection = styled.section`
  box-sizing: border-box;
  background: var(--secondary-background);
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
    margin-top:0;
}
  }
`;
export const BalanceText = styled.label`
  font-weight: 500;
  text-align: center;
  color: var(--quaternary-color);
  @media (min-width: 768px) {
    width: 83px;
    text-align: right;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  @media (min-width: 1280px) {
    width: auto;
  }
`;

export const BalanceInput = styled.input`
    text-align: center;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  box-sizing: border-box;
  background: var(--secondary-background);
  height: 44px;
  border: 2px solid var(--secondary-color);
  outline: none;
  font-weight: 700;
  line-height: 14.06px;
  color: var(--primary-color);
  ::placeholder {
    font-weight: 700;
    line-height: 14.06px;
    text-align: center;
    color: var(--primary-color);
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
  background: var(--secondary-background);
  height: 44px;
  border: 2px solid var(--secondary-color);
  line-height: 14.06px;
  color: var(--quaternary-color);
  &:hover,
  &:focus {
    background: ${({ disabled }) =>
      disabled ? "var(--secondary-background)" : "var(--brand-color)"};
    border-color: ${({ disabled }) =>
      disabled ? "var(--secondary-color)" : "var(--brand-color)"};
    color: ${({ disabled }) =>
      disabled ? "var(--quaternary-color)" : "var(--secondary-color)"};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    transition: all 0.25s;
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
    margin-bottom: 8px;
  }
`;
