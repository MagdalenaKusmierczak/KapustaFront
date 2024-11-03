import { useDispatch } from "react-redux";
// import { ReactComponent as GoogleSvg } from "../../images/google.svg";
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
// PromtText,
// BtnGoogle,

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    dispatch(logIn({ email: email.value, password: password.value }));
  };

  return (
    <FormWrapper>
      {/* <Text>You can log in with your Google Account:</Text>
      <BtnGoogle href="https://demokraci-kapusta.onrender.com/auth/google">
        <GoogleSvg />
      </BtnGoogle> */}
      <Text>Log in using an email and password</Text>
      <form autoComplete="on" onSubmit={handleSubmit}>
        <Label>
          <LabelText>Email:</LabelText>
          <Input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="your@email.com"
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
              placeholder="Enter your password..."
              required
            />
          </Label>
        </div>
        <ButtonBox>
          <OrangeButton type="submit">LOG IN</OrangeButton>
          <Navlink to="/register">Registration</Navlink>
        </ButtonBox>
      </form>
    </FormWrapper>
  );
};
