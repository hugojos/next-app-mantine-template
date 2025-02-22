import { PasswordInput, PasswordInputProps } from "@mantine/core";
import { WithFormProps, withForm } from "src/hocs/withForm";

export type FormPasswordInputProps = PasswordInputProps & WithFormProps;

const FormPasswordInput = withForm<FormPasswordInputProps>(
  ({ field, props }) => <PasswordInput {...field} {...props} />,
);

export default FormPasswordInput;
