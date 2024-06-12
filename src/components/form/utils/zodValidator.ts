import { ZodIssueCode, ZodTypeAny } from "zod";

const zodValidator = (schema: ZodTypeAny) => {
  return (values: any) => {
    const result = schema.safeParse(values);
    if (result.success) return;

    const { error } = result;
    const firstError = error.issues[0];

    if (firstError.code === ZodIssueCode.invalid_string)
      if (firstError.validation === "email") return "Email invalido";

    if (firstError.code === ZodIssueCode.too_small) {
      if (firstError.minimum === 1) return "Campo requerido";

      return `Minimo ${firstError.minimum} caracteres`;
    }

    if (firstError.code === ZodIssueCode.too_big)
      return `Maximo ${firstError.maximum} caracteres`;

    return result.error.issues[0].message;
  };
};

export default zodValidator;
