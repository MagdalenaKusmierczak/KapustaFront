import { useDispatch } from "react-redux";
import { registerAPI } from "../../../redux/auth/api";
import { logIn } from "../../../redux/auth/operations";
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    const data = registerAPI({
      email: email.value,
      password: password.value,
    });

    if (data) {
      dispatch(
        logIn({
          email: email.value,
          password: password.value,
        })
      );
    }
  };

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
          <OrangeButton type="submit">Registration</OrangeButton>
        </ButtonBox>
      </form>
    </FormWrapper>
  );
};
