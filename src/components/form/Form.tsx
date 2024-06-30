import { Box, BoxProps, ElementProps } from "@mantine/core";
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormReturn
} from "react-hook-form";

interface FormProps<T extends FieldValues>
  extends BoxProps,
    ElementProps<"form", "onSubmit"> {
  methods: UseFormReturn<T, any, any>;
  onSubmit: SubmitHandler<T>;
  onSubmitError?: SubmitErrorHandler<any>;
}

const Form = <T extends FieldValues>({
  methods,
  onSubmit,
  onSubmitError,
  ...rest
}: FormProps<T>) => {
  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(onSubmit, onSubmitError)}
        {...rest}
      />
    </FormProvider>
  );
};

export default Form;
