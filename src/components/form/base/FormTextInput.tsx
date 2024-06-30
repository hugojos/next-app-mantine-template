import { TextInput, TextInputProps } from "@mantine/core";
import { WithFormProps, withForm } from "src/hocs/withForm";

export type FormTextInputProps = WithFormProps & TextInputProps;

const FormTextInput = withForm<FormTextInputProps>(
  ({ renderProps: { extraFieldProps, field }, ...props }) => {
    return <TextInput {...extraFieldProps} {...field} {...props} />;
  }
);

export default FormTextInput;
