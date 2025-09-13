"use client";
import { Anchor, Button } from "@mantine/core";
import { Form } from "lkd-web-kit";
import { useForm } from "react-hook-form";
import EmailField from "src/components/fields/EmailField";
import PasswordField from "src/components/fields/PasswordField";

const LoginView = () => {
  const methods = useForm();
  return (
    <div className="flex min-h-main flex-col items-center justify-center">
      <span className="text-center font-bold text-4xl text-blue-4">
        ¡Te damos la bienvenida!
      </span>
      <Form
        methods={methods}
        onSubmit={() => { }}
        className="mt-14 mb-16 w-full max-w-[368px]"
      >
        <h1 className="mb-8 text-center text-3xl">Inicia sesión</h1>
        <EmailField leftSection={null} className="mb-5 w-full" size="md" />
        <PasswordField size="md" className="w-full" />
        <Anchor className="mt-4 block text-blue-7">Olvide mi contraseña</Anchor>
        <Button className="mt-8 block" size="lg" fullWidth>
          Continuar
        </Button>
      </Form>
    </div>
  );
};

export default LoginView;
