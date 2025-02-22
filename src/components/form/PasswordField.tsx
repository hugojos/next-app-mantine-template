import { string } from "zod";
import FormPasswordInput, {
  FormPasswordInputProps,
} from "./base/FormPasswordInput";

const PasswordField = (props: FormPasswordInputProps) => {
  return (
    <FormPasswordInput
      label="Contraseña"
      name="password"
      validate={string().min(1).min(6).max(25)}
      required
      {...props}
    />
  );
};

export default PasswordField;
