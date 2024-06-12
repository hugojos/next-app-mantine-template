import { MultiSelect, MultiSelectProps } from "@mantine/core";
import { Controller } from "react-hook-form";

export interface FormMultiSelectProps extends MultiSelectProps {
  name: string;
}

const FormMultiSelect = ({ name, ...props }: FormMultiSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => {
        return <MultiSelect {...props} {...field} />;
      }}
    />
  );
};

export default FormMultiSelect;
