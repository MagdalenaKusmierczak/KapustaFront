import styled from "@emotion/styled";

export const FormWrap = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  .tabletDatepicker {
    margin-block: 40px;
    @media screen and (min-width: 768px) {
      margin-top: 12px;
      margin-bottom: 0;
    }
    .datepickerMobile {
      display: inline;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;

export const StyledAllInputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InputProduct = styled.input`
  margin: auto auto;
  width: 280px;
  height: 44px;
  padding: 2px 20px;
  border: 2px solid var(--secondary-color);
  border-bottom: none;
  border-radius: 16px 16px 0 0;

  line-height: 14px;
  outline: none;
  background-color: var(--primary-background);
  color: var(--primary-color);
  &::placeholder {
    color: var(--ternary-color);
  }
  @media screen and (min-width: 768px) {
    width: 186px;
    border-color: var(--primary-background);
    border-bottom: 2px solid var(--primary-background);
    border-right: none;
    border-top-right-radius: 0;
    background-color: var(--secondary-color);
  }
  @media screen and (min-width: 1280px) {
    width: 290px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 80px;
  @media screen and (min-width: 768px) {
    gap: 15px;
    justify-content: flex-start;
    margin-top: 32px;
    margin-left: 35px;
  }
  @media screen and (min-width: 1280px) {
    gap: 16px;
    margin-top: 0;
    margin-left: 32px;
  }
`;

