import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f6fb;
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
  margin: 0;
  margin-bottom: 10px; // Try to group margins in such cases, e.g. margin: 0 0 10px 0;
`;

export const Icon = styled.img`
  border-radius: 50%;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    transform: rotateY(360deg);
    box-shadow: 0px 0px 4px 4px #f0ff3836;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  margin-bottom: 7px;
  font-family: "Roboto"; // Always provide meaningful fallback fonts
  font-style: normal;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.04em;
  padding-top: 7px;
`;
