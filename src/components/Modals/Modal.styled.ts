import styled from "@emotion/styled";

export const ModalBackdrop = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWindow = styled.div<{ variant?: "confirmation" | "information" | "information-reports" }>`
  z-index: 3;
  position: ${props => (props.variant === "information" || props.variant === "information-reports") ? "fixed" : "relative"};
  top: ${props => props.variant === "information" ? "250px" : props.variant === "information-reports" ? "268px" : "auto"};
  left: ${props => props.variant === "information" ? "50%" : props.variant === "information-reports" ? "60%" : "auto"};
  transform: ${props => (props.variant === "information" || props.variant === "information-reports") ? "translateX(-50%)" : "none"};
  background: ${props => (props.variant === "information" || props.variant === "information-reports") ? "var(--gradient-background)" : "var(--secondary-color)"};
  box-shadow: ${props => (props.variant === "information" || props.variant === "information-reports") ? "var(--secondary-shadow)" : "var(--ternary-shadow)"};
  border-radius: 30px;
  max-width: ${props => (props.variant === "information" || props.variant === "information-reports") ? "280px" : "500px"};
  max-height: ${props => (props.variant === "information" || props.variant === "information-reports") ? "163px" : "50vh"};
  width: 100%;
  overflow: hidden;
  
  @media screen and (min-width: 768px) {
    max-width: ${props => (props.variant === "information" || props.variant === "information-reports") ? "288px" : "500px"};
    top: ${props => props.variant === "information" ? "154px" : props.variant === "information-reports" ? "154px" : "auto"};
    left: ${props => props.variant === "information" ? "38%" : props.variant === "information-reports" ? "60%" : "auto"};
  }
  
  @media screen and (min-width: 1280px) {
    max-width: ${props => (props.variant === "information" || props.variant === "information-reports") ? "288px" : "500px"};
    top: ${props => props.variant === "information" ? "160px" : props.variant === "information-reports" ? "160px" : "auto"};
    left: ${props => props.variant === "information" ? "52%" : props.variant === "information-reports" ? "45%" : "auto"};
  }
  
  ${props => (props.variant === "information" || props.variant === "information-reports") && `
    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      top: -9%;
      left: 20%;
      border-left: 16px solid transparent;
      border-right: 16px solid transparent;
      border-bottom: 16px solid #1d346a;
    }
  `}
`;

export const ModalContent = styled.div<{ variant?: "confirmation" | "information" | "information-reports" }>`
  padding: ${props => (props.variant === "information" || props.variant === "information-reports") ? "40px 24px 49px" : "50px 58px 60px"};
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.variant === "information" || props.variant === "information-reports") ? "flex-start" : "center"};
  text-align: ${props => (props.variant === "information" || props.variant === "information-reports") ? "left" : "center"};
  
  @media screen and (min-width: 768px) {
    padding: ${props => (props.variant === "information" || props.variant === "information-reports") ? "40px 29px 49px" : "50px 58px 60px"};
  }
`;

export const ModalText = styled.div<{ variant?: "confirmation" | "information" | "information-reports" }>`
  font-size: ${props => (props.variant === "information" || props.variant === "information-reports") ? "14px" : "18px"};
  font-weight: 400;
  line-height: ${props => (props.variant === "information" || props.variant === "information-reports") ? "1.43" : "1.4"};
  color: ${props => (props.variant === "information" || props.variant === "information-reports") ? "var(--secondary-color)" : "var(--primary-color)"};
  margin-bottom: ${props => (props.variant === "information" || props.variant === "information-reports") ? "20px" : "20px"};
  
  h2 {
    font-size: 14px;
    line-height: 1.43;
    margin-bottom: 20px;
    color: var(--secondary-color);
  }
  
  p {
    line-height: 1.33;
    color: var(--secondary-color);
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const CloseButton = styled.button`
  z-index: 5;
  border: none;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseSVG = styled.svg`
  width: 15px;
  height: 15px;
  fill: var(--primary-color);
`;
