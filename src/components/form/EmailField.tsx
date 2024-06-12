import { string } from "zod";
import FormTextInput, { FormTextInputProps } from "./base/FormTextInput";

const EmailField = (props: FormTextInputProps) => (
  <FormTextInput
    name="email"
    label="Email"
    validate={string().email()}
    required
    {...props}
  />
);

export default EmailField;
