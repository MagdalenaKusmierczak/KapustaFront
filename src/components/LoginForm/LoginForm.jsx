import { useDispatch } from "react-redux";
import { ReactComponent as GoogleSvg } from "../../images/google.svg";
import { logIn } from "../../redux/auth/operations";

import {
  FormRegisterWrapper,
  PromtText,
  BtnGoogle,
  LabelText,
  PromtText1,
  FormInput,
  ButtonBox,
  Label,
  LogInBtn,
  Navlink,
} from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    dispatch(logIn({ email: email.value, password: password.value }));
  };

  return (
    <FormRegisterWrapper>
      <PromtText>You can log in with your Google Account:</PromtText>
      <BtnGoogle href="https://demokraci-kapusta.onrender.com/auth/google">
        <GoogleSvg />
      </BtnGoogle>
      <PromtText1>
        Or log in using an email and password, after registering:
      </PromtText1>
      <form autoComplete="on" onSubmit={handleSubmit}>
        <Label>
          <LabelText>Email:</LabelText>
          <FormInput
            type="email"
            name="email"
            placeholder="your@email.com"
            required
          />
        </Label>
        <div>
          <Label>
            <LabelText>Password:</LabelText>
            <FormInput
              type="password"
              name="password"
              placeholder="Enter your password..."
              required
            />
          </Label>
        </div>
        <ButtonBox>
          <LogInBtn type="submit">LOG IN</LogInBtn>
          <Navlink to="/register">Registration</Navlink>
        </ButtonBox>
      </form>
    </FormRegisterWrapper>
  );
};
