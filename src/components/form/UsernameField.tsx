import { string } from "zod";
import FormTextInput, { FormTextInputProps } from "./base/FormTextInput";

const UsernameField = (props: FormTextInputProps) => {
  return (
    <FormTextInput
      name="username"
      label="Usuario"
      required
      {...props}
      validate={string()
        .min(1)
        .min(3)
        .max(30)
        .refine(
          (str) => /^[a-zA-Z0-9._-]{3,30}$/.test(str),
          `Solo puede contener letras, numeros, "-", "_" y "."`,
        )}
    />
  );
};

export default UsernameField;
