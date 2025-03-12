import { ActionIcon } from "@mantine/core";
import { useState } from "react";
import { EyeIcon } from "src/icons";
import { string } from "zod";
import Icon from "../ui/Icon";
import FormTextInput, { FormTextInputProps } from "./base/FormTextInput";

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
          <Icon i={EyeIcon} size={"sm"} />
        </ActionIcon>
      }
      validate={string().min(1).min(6).max(25)}
      required
      {...props}
    />
  );
};

export default PasswordField;
