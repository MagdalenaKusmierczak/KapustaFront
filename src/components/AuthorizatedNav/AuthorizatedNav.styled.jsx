import styled from "@emotion/styled";

export const AuthNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LoginLabel = styled.div`
  padding: 9px 12px;
  font-size: 12px;
  line-height: 1.17;
  font-weight: 700;
  color: var(--quinary-color);
  background-color: #f5f6fa;
  border-radius: 50%;
`;

export const LoginName = styled.p`
  display: none;
  margin: 0;
  padding: 0;
  font-size: 12px;
  line-height: 1.17;
  color: var(--quinary-color);

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const LogoutImg = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const VerticalLine = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 1px;
    height: 36px;
    background-color: #e0e5eb;
  }
`;

export const ExitButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    text-decoration: underline;
    font-size: 12px;
    line-height: 1.17;
  }
`;
export const PageIcon = styled.svg`
  display: flex;
  width: 20px;
  height: 20px;
  color: var(--quinary-color);
`;
