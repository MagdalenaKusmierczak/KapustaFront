import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--primary-background);
  width: 100%;
  margin-top: auto;
`;

export const AddressContainer = styled.address`
  display: flex;
  justify-content: center;
`;

export const AddressList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0 0 10px 0;
`;

export const Icon = styled.img`
  border-radius: 50%;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    transform: rotateY(360deg);
  }
`;

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 7px 0;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  letter-spacing: 0.04em;
  padding-top: 7px;
`;
