import { Label, Input, LabelText } from "../AuthForms.styled";

interface EmailFieldProps {
  placeholder?: string;
  title?: string;
}

export const EmailField = ({ 
  placeholder = "your@email.com",
  title = "Email may consist of letters, numbers and a mandatory character '@'"
}: EmailFieldProps) => {
  return (
    <Label>
      <LabelText>Email:</LabelText>
      <Input
        type="email"
        name="email"
        autoComplete="email"
        placeholder={placeholder}
        title={title}
        required
      />
    </Label>
  );
};


