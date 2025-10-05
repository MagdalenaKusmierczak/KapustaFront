import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/auth/operations";
import { logIn } from "../../../redux/auth/operations";
import { selectIsLoading } from "../../../redux/auth/selectors";
import Loader from "../../../service/Loader/Loader";
import { Button } from "../../ModalButtons/Button";
import {
  FormWrapper,
  Text,
  Label,
  Input,
  ButtonBox,
  LabelText,
  Navlink,
} from "../AuthForms.styled";

export const RegistrationForm = () => {
  const dispatch = useDispatch() as any;

  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements as any;

    dispatch((register as any)({
      email: email.value,
      password: password.value,
    }))
      .then((registrationResult: any) => {
        if (registrationResult.payload.code === 201) {
          return dispatch((logIn as any)({
            email: email.value,
            password: password.value,
          }));
        } else {
          console.error(
            "Registration failed",
            registrationResult.error.message
          );
        }
      })
      .catch((error: any) => {
        console.error("Error during registration or login:", error.message);
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FormWrapper>
      <Text>Fill in the fields to register</Text>
      <form onSubmit={handleSubmit} autoComplete="on">
        <Label>
          <LabelText>Email:</LabelText>
          <Input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="your@email.com"
            title="Email may consist of letters, numbers and a mandatory character '@'"
            required
          />
        </Label>
        <div>
          <Label>
            <LabelText>Password:</LabelText>
            <Input
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Select your password..."
              title="The password can consist of at least 8 letters, numbers and symbols '!@#$%^&*'"
              required
            />
          </Label>
        </div>
        <ButtonBox>
          <Navlink to="/login">Log in</Navlink>
          <Button variant="primary" type="submit" disabled={isLoading}>
            REGISTRATION
          </Button>
        </ButtonBox>
      </form>
    </FormWrapper>
  );
};
