import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px;

  @media screen and (min-width: 768px) {
    padding: 13px 32px;
  }
`;

export const HeaderIcon = styled.svg`
  width: 90px;
  height: 31px;
`;
