import { Radio, RadioGroupProps } from "@mantine/core";
import { WithFormProps, withForm } from "src/hocs/withForm";

export type FormRadioGroupProps = RadioGroupProps & WithFormProps;

const FormRadioGroup = withForm<FormRadioGroupProps>(({ field, props }) => (
  <Radio.Group {...field} {...props} />
));
export default FormRadioGroup;
