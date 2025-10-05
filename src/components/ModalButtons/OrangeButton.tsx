import { StyledOrangeButton } from "./Buttons.styled";

// Try to avoid using the color names in the component name - what if we want to change the color in the future?
// Better to use a more generic name like "ActionButton" or "ConfirmButton", or "PrimaryButton" and "SecondaryButton".
// The best way - have one, customizable button component that takes a color or "variant" prop.
type OrangeButtonProps = {
  children: string;
  dispatch?: () => void;
  closeModal?: () => void;
  changeBalance?: string;
};

export const OrangeButton = ({
  children,
  dispatch,
  closeModal,
  changeBalance,
}: OrangeButtonProps) => {
  const handleClick = () => {
    if (children === "YES") {
      dispatch && dispatch();
      closeModal && closeModal();
    }
    
    if (changeBalance) {
      dispatch && dispatch();
      closeModal && closeModal();
    }
  };

  return (
    <StyledOrangeButton onClick={handleClick}>{children}</StyledOrangeButton>
  );
};
