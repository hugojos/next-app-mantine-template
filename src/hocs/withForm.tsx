import { Controller, ControllerProps, useFormContext } from "react-hook-form";
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

export type FormFieldProps = {
  renderProps: Parameters<ControllerProps["render"]>[0] & {
    extraFieldProps: {
      label?: React.ReactNode;
      placeholder?: string;
      description?: React.ReactNode;
    };
  };
};

export const withForm = <P extends object>(
  WrappedComponent: React.ComponentType<P & FormFieldProps>,
  controllerProps?: (props: P) => Omit<Partial<ControllerProps>, "render">
) => {
  const Field: React.FC<P & WithFormProps> = (props) => {
    const { validate, ...withFormRestProps } = props;

    const { formState } = useFormContext();

    const { touchedFields } = formState;

    const name = props.name ?? "";

    const { errors } = formState;

    const placeholder = props.placeholder;
    const label = props.label;
    const error = errors[name]?.message as string;
    const description = props.description;

    const extraFieldProps = {
      placeholder,
      label,
      description,
      error: touchedFields[name] ? error : undefined
    };

    return (
      <Controller
        name={name}
        defaultValue={""}
        rules={{
          validate:
            validate && !props.disabled ? zodValidator(validate) : undefined
        }}
        disabled={props.disabled}
        {...controllerProps?.(props)}
        render={(controllerRenderProps) => {
          const fieldProps = {
            renderProps: {
              extraFieldProps,
              ...controllerRenderProps
            },
            ...withFormRestProps
          } as FormFieldProps & P;

          return <WrappedComponent {...fieldProps} />;
        }}
      />
    );
  };

  // Asignamos el displayName
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || "Componente";
  Field.displayName = `withField(${wrappedComponentName})`;

  return Field;
};
