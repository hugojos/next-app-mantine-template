import { Controller, ControllerProps } from "react-hook-form";
import zodValidator from "src/components/form/utils/zodValidator";
import { ZodTypeAny } from "zod";

export interface WithFormProps {
  name?: string;
  label?: React.ReactNode;
  placeholder?: string;
  description?: React.ReactNode;
  validate?: ZodTypeAny;
  disabled?: boolean;
}

export type FormFieldProps<T = unknown> = Parameters<
  ControllerProps["render"]
>[0] & {
  props: T;
  field: {
    label?: React.ReactNode;
    placeholder?: string;
    description?: React.ReactNode;
    error?: string;
  };
};

export const withForm = <P extends unknown>(
  WrappedComponent: React.ComponentType<FormFieldProps<P>>,
  getControllerProps?: (props: P) => Omit<Partial<ControllerProps>, "render">
) => {
  const FormField: React.FC<P & WithFormProps> = (props) => {
    const {
      validate,
      name = "",
      placeholder,
      label,
      description,
      ...withFormRestProps
    } = props;
    return (
      <Controller
        name={name}
        defaultValue={""}
        rules={{
          validate:
            validate && !props.disabled ? zodValidator(validate) : undefined
        }}
        disabled={props.disabled}
        {...getControllerProps?.(props)}
        render={(renderProps) => {
          const {
            fieldState: { isTouched, error }
          } = renderProps;
          const fieldProps = {
            ...renderProps,
            props,
            field: {
              ...renderProps.field,
              label,
              placeholder,
              description,
              error: isTouched ? error?.message : undefined
            },
            ...withFormRestProps
          } as FormFieldProps<P>;

          return <WrappedComponent {...fieldProps} />;
        }}
      />
    );
  };

  FormField.displayName = `withForm(${WrappedComponent.displayName})`;

  return FormField;
};
