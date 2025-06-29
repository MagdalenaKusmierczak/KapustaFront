import PropTypes from "prop-types";
import { StyledOrangeButton } from "./Buttons.styled";

// Try to avoid using the color names in the component name - what if we want to change the color in the future?
// Better to use a more generic name like "ActionButton" or "ConfirmButton", or "PrimaryButton" and "SecondaryButton".
// The best way - have one, customizable button component that takes a color or "variant" prop.
export const OrangeButton = ({
  children,
  dispatch,
  closeModal,
  changeBalance,
}) => {
  const handleClick = () => {
    if (children === "YES") {
      dispatch();
      closeModal();
    }
    
    if (changeBalance) {
      dispatch();
      closeModal();
    }
  };

  return (
    <StyledOrangeButton onClick={handleClick}>{children}</StyledOrangeButton>
  );
};

OrangeButton.propTypes = {
  children: PropTypes.string.isRequired,
  dispatch: PropTypes.func,
  closeModal: PropTypes.func,
  changeBalance: PropTypes.string,
};
