import { Textarea, TextareaProps } from "@mantine/core";
import { withForm, WithFormProps } from "src/hocs/withForm";

export type FormTextarea = TextareaProps & WithFormProps;

const FormTextarea = withForm<TextareaProps>(({ field, props }) => {
  return <Textarea {...field} {...props} />;
});

export default FormTextarea;
