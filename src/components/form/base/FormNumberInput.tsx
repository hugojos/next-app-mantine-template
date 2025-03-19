import { NumberInput, NumberInputProps } from "@mantine/core";
import { WithFormProps, withForm } from "src/hocs/withForm";

export type FormNumberInputProps = NumberInputProps & WithFormProps;

const FormNumberInput = withForm<FormNumberInputProps>(({ field, props }) => (
  <NumberInput {...field} {...props} />
));

export default FormNumberInput;
