"use client";
import { Anchor, Button } from "@mantine/core";
import { useForm } from "react-hook-form";
import EmailField from "src/components/form/EmailField";
import Form from "src/components/form/Form";
import PasswordField from "src/components/form/PasswordField";

interface LoginViewProps {}

const LoginView = ({}: LoginViewProps) => {
  const methods = useForm();
  return (
    <div className="min-h-main flex flex-col items-center justify-center">
      <span className="text-blue-4 text-center text-4xl font-bold">
        ¡Te damos la bienvenida!
      </span>
      <Form
        methods={methods}
        onSubmit={() => {}}
        className="mt-14 mb-16 w-full max-w-[368px]"
      >
        <h1 className="mb-8 text-center text-3xl">Inicia sesión</h1>
        <EmailField leftSection={null} className="mb-5 w-full" size="md" />
        <PasswordField size="md" className="w-full" />
        <Anchor className="text-blue-7 mt-4 block">Olvide mi contraseña</Anchor>
        <Button className="mt-8 block" size="lg" fullWidth>
          Continuar
        </Button>
      </Form>
    </div>
  );
};

export default LoginView;
