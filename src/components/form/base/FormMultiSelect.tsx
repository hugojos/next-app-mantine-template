import { MultiSelect, MultiSelectProps } from "@mantine/core";
import { withForm, WithFormProps } from "src/hocs/withForm";

export type FormMultiSelectProps = MultiSelectProps & WithFormProps;

const FormMultiSelect = withForm<FormMultiSelectProps>(({ field, props }) => {
  return <MultiSelect {...field} {...props} />;
});

export default FormMultiSelect;
