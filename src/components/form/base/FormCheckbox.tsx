import { Checkbox, CheckboxProps } from "@mantine/core";
import { WithFormProps, withForm } from "src/hocs/withForm";

type FormCheckboxProps = CheckboxProps & WithFormProps;

const FormCheckbox = withForm<FormCheckboxProps>(({ field, props }) => (
  <Checkbox {...field} checked={field.value} {...props} />
));

export default FormCheckbox;
