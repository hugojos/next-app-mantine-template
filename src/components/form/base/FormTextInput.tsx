import { TextInput, TextInputProps } from "@mantine/core";
import { WithFormProps, withForm } from "src/hocs/withForm";

export type FormTextInputProps = WithFormProps & TextInputProps;

const FormTextInput = withForm<FormTextInputProps>(
  ({ field, props, fieldState }) => {
    return <TextInput {...field} {...props} />;
  },
);

export default FormTextInput;
