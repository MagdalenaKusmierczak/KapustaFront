import { Button } from "../../ModalButtons/Button";
import { ButtonBox, Navlink } from "../AuthForms.styled";

interface AuthFormActionsProps {
  buttonText: string;
  linkTo: string;
  linkText: string;
  buttonFirst?: boolean;
  isLoading?: boolean;
}

export const AuthFormActions = ({
  buttonText,
  linkTo,
  linkText,
  buttonFirst = true,
  isLoading = false
}: AuthFormActionsProps) => {
  const button = (
    <Button variant="primary" type="submit" disabled={isLoading}>
      {buttonText}
    </Button>
  );

  const link = <Navlink to={linkTo}>{linkText}</Navlink>;

  return (
    <ButtonBox>
      {buttonFirst ? (
        <>
          {button}
          {link}
        </>
      ) : (
        <>
          {link}
          {button}
        </>
      )}
    </ButtonBox>
  );
};


