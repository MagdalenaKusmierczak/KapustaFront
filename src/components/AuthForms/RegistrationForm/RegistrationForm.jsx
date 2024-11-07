import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/auth/operations";
import { selectIsLoading } from "../../../redux/auth/selectors";
import { logIn } from "../../../redux/auth/operations";
import Loader from "../../../service/Loader/Loader";
import { OrangeButton } from "../../ModalButtons/OrangeButton";
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
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    dispatch(
      register({
        email: email.value,
        password: password.value,
      })
    )
      .then((registrationResult) => {
        if (registrationResult.payload.code === 201) {
          return dispatch(
            logIn({
              email: email.value,
              password: password.value,
            })
          );
        } else {
          console.error("Registration failed", registrationResult.error.message);
        }
      })
      .catch((error) => {
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
          <OrangeButton type="submit" disabled={isLoading}>
            REGISTRATION
          </OrangeButton>
        </ButtonBox>
      </form>
    </FormWrapper>
  );
};
