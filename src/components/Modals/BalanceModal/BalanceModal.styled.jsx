import styled from "@emotion/styled";

export const ModalWindow = styled.div`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
`;

export const ContentDiv = styled.div`
  z-index: 3;
  padding: 50px 58px 60px;
`;

export const Text = styled.p`
  z-index: 3;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  color: black;
`;

export const DivWithButtons = styled.div`
  z-index: 3;
  display: flex;
  gap: 15px;
`;

export const CloseButton = styled.button`
  z-index: 3;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const ModalBackdrop = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const CloseSVG = styled.svg`
  width: 15px;
  height: 15px;
`;
