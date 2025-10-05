import { StyledWhiteButton } from "./Buttons.styled";

type WhiteButtonProps = {
  children: string;
  closeModal?: () => void;
};

export const WhiteButton = ({ children, closeModal }: WhiteButtonProps) => {
  return <StyledWhiteButton onClick={closeModal}>{children}</StyledWhiteButton>;
};
