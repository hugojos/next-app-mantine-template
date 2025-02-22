import { Textarea, TextareaProps } from "@mantine/core";
import { withForm, WithFormProps } from "src/hocs/withForm";

export type FormTextarea = TextareaProps & WithFormProps;

const FormTextarea = withForm<TextareaProps>(({ field, props }) => {
  return <Textarea {...field} {...props} />;
});

// const FormTextarea = withForm({ validate, ...props }: FormTextAreaProps) => {
//   const { register, formState } = useFormContext();
//   const name = props.name ?? "";
//   const error = formState.errors[name]?.message as string;

//   return (
//     <Textarea
//       error={error}
//       {...props}
//       {...register(name, {
//         validate: validate ? zodValidator(validate) : undefined,
//       })}
//     />
//   );
// };

export default FormTextarea;
