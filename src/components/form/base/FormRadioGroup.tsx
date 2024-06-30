import { Radio, RadioGroupProps } from "@mantine/core";
import { WithFormProps, withForm } from "src/hocs/withForm";

export type FormRadioGroupProps = RadioGroupProps & WithFormProps;

const FormRadioGroup = withForm<FormRadioGroupProps>(
  ({ renderProps: { extraFieldProps, field }, ...props }) => (
    <Radio.Group {...extraFieldProps} {...field} {...props} />
  )
);
export default FormRadioGroup;
