import { Select, SelectProps } from "@mantine/core";
import { WithFormProps, withForm } from "src/hocs/withForm";

export type FormSelectProps = SelectProps & WithFormProps;

const FormSelect = withForm<FormSelectProps>(({ field, props }) => (
  <Select {...field} {...props} />
));

export default FormSelect;
