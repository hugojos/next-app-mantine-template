import { ActionIcon } from "@mantine/core";
import { FormTextInput, type FormTextInputProps } from "lkd-web-kit";
import { useState } from "react";
import { IconEye } from "src/icons";
import { string } from "zod";

const PasswordField = (props: FormTextInputProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <FormTextInput
      label="Contraseña"
      name="password"
      type={visible ? "text" : "password"}
      rightSection={
        <ActionIcon
          variant="transparent"
          color="currentColor"
          onClick={() => setVisible((v) => !v)}
        >
          <IconEye size={"sm"} />
        </ActionIcon>
      }
      required
      {...props}
    />
  );
};

export const passwordSchema = string().min(1).max(100);

export default PasswordField;
