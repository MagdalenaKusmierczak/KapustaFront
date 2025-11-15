import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/auth/operations";
import { logIn } from "../../../redux/auth/operations";
import { selectIsLoading } from "../../../redux/auth/selectors";
import type { AppDispatch } from "../../../redux/store";
import Loader from "../../../service/Loader/Loader";
import { FormWrapper, Text } from "../AuthForms.styled";
import { EmailField, PasswordField, AuthFormActions } from "../atoms";
import type { AuthFormElement } from "../AuthForms.types";

export const RegistrationForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = async (event: React.FormEvent<AuthFormElement>) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    try {
      const registrationResult = await dispatch(register({
        email: email.value,
        password: password.value,
      }));

      if (register.fulfilled.match(registrationResult)) {
        await dispatch(logIn({
          email: email.value,
          password: password.value,
        }));
      } else if (register.rejected.match(registrationResult)) {
        console.error(
          "Registration failed:",
          registrationResult.error.message
        );
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error("Error during registration or login:", message);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FormWrapper>
      <Text>Fill in the fields to register</Text>
      <form onSubmit={handleSubmit} autoComplete="on">
        <EmailField />
        <div>
          <PasswordField 
            placeholder="Select your password..."
            title="The password can consist of at least 8 letters, numbers and symbols '!@#$%^&*'"
          />
        </div>
        <AuthFormActions 
          buttonText="REGISTRATION"
          linkTo="/login"
          linkText="Log in"
          buttonFirst={false}
          isLoading={isLoading}
        />
      </form>
    </FormWrapper>
  );
};
