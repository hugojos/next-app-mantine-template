import { DateInput, DateInputProps } from "@mantine/dates";
import Icon from "src/components/ui/Icon";
import { WithFormProps, withForm } from "src/hocs/withForm";
import { CalendarIcon } from "src/icons";

export type FormTextInputProps = WithFormProps & DateInputProps;

const FormDateInput = withForm<FormTextInputProps>(
  ({ field, props, fieldState }) => {
    return (
      <DateInput
        leftSection={<Icon i={CalendarIcon} size={"sm"} />}
        {...field}
        {...props}
      />
    );
  }
);

export default FormDateInput;
