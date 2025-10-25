import icons from "../../assets/icons.svg";
import { ButtonBackAction, ButtonBackWithTextAction, ButtonBackText } from "./Buttons.styled";

interface BackButtonProps {
  onNavigate: () => void;
  showText?: boolean;
}

export const BackButton = ({ onNavigate, showText = true }: BackButtonProps) => {
  return (
    <>
      {showText ? (
        <ButtonBackWithTextAction onClick={onNavigate}>
          <svg width="18" height="12">
            <use href={`${icons}#back-arrow`}></use>
          </svg>
          <ButtonBackText>TO TRANSACTIONS</ButtonBackText>
        </ButtonBackWithTextAction>
      ) : (
        <ButtonBackAction onClick={onNavigate}>
          <svg width="18" height="12">
            <use href={`${icons}#back-arrow`}></use>
          </svg>
        </ButtonBackAction>
      )}
    </>
  );
};
