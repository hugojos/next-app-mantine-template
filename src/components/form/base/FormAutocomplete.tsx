import { Autocomplete, AutocompleteProps } from "@mantine/core";
import { WithFormProps, withForm } from "src/hocs/withForm";

export type FormAutocompleteProps = WithFormProps & AutocompleteProps;

const FormAutocompleteInput = withForm<FormAutocompleteProps>(
  ({ field, props, fieldState }) => {
    return <Autocomplete {...field} {...props} />;
  }
);

export default FormAutocompleteInput;
