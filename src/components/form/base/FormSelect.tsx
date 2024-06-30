import { Select, SelectProps } from "@mantine/core";
import { WithFormProps, withForm } from "src/hocs/withForm";

export type FormSelectProps = SelectProps & WithFormProps;

const FormSelect = withForm<FormSelectProps>(
  ({ renderProps: { extraFieldProps, field }, ...props }) => (
    <Select {...extraFieldProps} {...field} {...props} />
  )
);

export default FormSelect;
