import { DateInput, DateInputProps } from "@mantine/dates";
import { WithFormProps, withForm } from "src/hocs/withForm";

export type FormTextInputProps = WithFormProps & DateInputProps;

const FormDateInput = withForm<FormTextInputProps>(
  ({ field, props, fieldState }) => {
    return <DateInput {...field} {...props} />;
  }
);

export default FormDateInput;
