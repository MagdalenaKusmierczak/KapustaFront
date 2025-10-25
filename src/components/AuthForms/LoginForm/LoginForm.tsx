import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/auth/operations";
import type { AppDispatch } from "../../../redux/store";
import { FormWrapper, Text } from "../AuthForms.styled";
import { EmailField, PasswordField, AuthFormActions } from "../atoms";
import type { AuthFormElement } from "../AuthForms.types";

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent<AuthFormElement>) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    dispatch(logIn({ email: email.value, password: password.value }));
  };

  return (
    <FormWrapper>
      <Text>Log in using an email and password</Text>
      <form autoComplete="on" onSubmit={handleSubmit}>
        <EmailField />
        <div>
          <PasswordField placeholder="Enter your password..." />
        </div>
        <AuthFormActions 
          buttonText="LOG IN"
          linkTo="/register"
          linkText="Registration"
          buttonFirst
        />
      </form>
    </FormWrapper>
  );
};
