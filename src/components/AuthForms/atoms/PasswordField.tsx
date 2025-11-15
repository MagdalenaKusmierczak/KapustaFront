import { Label, Input, LabelText } from "../AuthForms.styled";

interface PasswordFieldProps {
  placeholder?: string;
  title?: string;
  autoComplete?: string;
}

export const PasswordField = ({ 
  placeholder = "Enter your password...",
  title,
  autoComplete = "current-password"
}: PasswordFieldProps) => {
  return (
    <Label>
      <LabelText>Password:</LabelText>
      <Input
        type="password"
        name="password"
        autoComplete={autoComplete}
        placeholder={placeholder}
        title={title}
        required
      />
    </Label>
  );
};


