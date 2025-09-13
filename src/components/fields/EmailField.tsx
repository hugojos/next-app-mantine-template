import { FormTextInput, type FormTextInputProps } from "lkd-web-kit";
import { toLowerCase } from "src/utils/constraints";
import { email } from "zod";

const EmailField = (props: FormTextInputProps) => (
  <FormTextInput
    name="email"
    label="Email"
    type="email"
    onInput={toLowerCase}
    {...props}
  />
);

export const emailSchema = email().min(1).max(250);

export default EmailField;
