import { PasswordInput, PasswordInputProps } from "@mantine/core";
import { WithFormProps, withForm } from "src/hocs/withForm";

export type FormPasswordInputProps = PasswordInputProps & WithFormProps;

const FormPasswordInput = withForm<FormPasswordInputProps>(
  ({ renderProps: { extraFieldProps, field }, ...props }) => (
    <PasswordInput {...extraFieldProps} {...field} {...props} />
  )
);

export default FormPasswordInput;
