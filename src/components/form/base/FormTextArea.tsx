import { Textarea, TextareaProps } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { ZodTypeAny } from "zod";
import zodValidator from "../utils/zodValidator";

interface FormTextAreaProps extends TextareaProps {
  validate?: ZodTypeAny;
}

const FormTextarea = ({ validate, ...props }: FormTextAreaProps) => {
  const { register, formState } = useFormContext();
  const name = props.name ?? "";
  const error = formState.errors[name]?.message as string;

  return (
    <Textarea
      error={error}
      {...props}
      {...register(name, {
        validate: validate ? zodValidator(validate) : undefined,
      })}
    />
  );
};

export default FormTextarea;
