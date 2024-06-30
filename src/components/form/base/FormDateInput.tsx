import { DatePickerInput, DatePickerInputProps } from "@mantine/dates";
import { Controller } from "react-hook-form";

export interface FormDateInputProps extends DatePickerInputProps {}

const FormDateInput = ({ name = "", ...props }: FormDateInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => <DatePickerInput {...props} {...field} />}
    />
  );
};
export default FormDateInput;
