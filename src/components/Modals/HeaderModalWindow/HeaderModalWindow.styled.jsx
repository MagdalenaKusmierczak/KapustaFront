import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
`;

export const ContentWrapper = styled.div`
  padding: 50px 58px 60px;
`;

export const Text = styled.p`
  z-index: 4;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const CloseButton = styled.button`
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export const Backdrop = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;
