import { string } from "zod";
import FormTextInput, { FormTextInputProps } from "./base/FormTextInput";

const EmailField = (props: FormTextInputProps) => (
  <FormTextInput
    name="email"
    label="Email"
    validate={string().min(1).max(250).email()}
    required
    {...props}
  />
);

export default EmailField;
