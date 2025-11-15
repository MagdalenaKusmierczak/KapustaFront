import { StyledButton } from "./Buttons.styled";

type ButtonVariant = "primary" | "secondary";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  children: string;
  variant?: ButtonVariant;
  type?: ButtonType;
  onClick?: () => void;
  dispatch?: () => void;
  closeModal?: () => void;
  changeBalance?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
  dispatch,
  closeModal,
  changeBalance,
  disabled = false,
}: ButtonProps) => {
  const handleClick = () => {
    if (children === "YES") {
      dispatch && dispatch();
      closeModal && closeModal();
    }
    
    if (changeBalance) {
      dispatch && dispatch();
      closeModal && closeModal();
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton 
      variant={variant} 
      type={type} 
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
