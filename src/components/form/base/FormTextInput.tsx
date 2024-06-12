import { TextInput, TextInputProps } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { ZodTypeAny } from "zod";
import zodValidator from "../utils/zodValidator";

export interface FormTextInputProps extends TextInputProps {
  validate?: ZodTypeAny;
}

const FormTextInput = ({ validate, ...props }: FormTextInputProps & {}) => {
  const { register, formState } = useFormContext();
  const name = props.name ?? "";
  const error = formState.errors[name]?.message as string;

  return (
    <TextInput
      error={error}
      {...props}
      {...register(name, {
        validate: validate ? zodValidator(validate) : undefined,
      })}
    />
  );
};

export default FormTextInput;
