import { notifications } from "@mantine/notifications";

export const notificationDefaultError = () =>
  notifications.show({
    message: "Ocurrió un error, por favor intenta de nuevo más tarde",
    color: "red"
  });
