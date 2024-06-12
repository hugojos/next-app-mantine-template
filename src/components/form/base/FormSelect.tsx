import { Select, SelectProps } from "@mantine/core";
import { Controller } from "react-hook-form";

export interface FormSelectProps extends SelectProps {
  name: string;
}

const FormSelect = ({ name, ...props }: FormSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => <Select {...props} {...field} />}
    />
  );
};

export default FormSelect;
