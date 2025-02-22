import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

interface NotificationsProps {}

const MyNotifications = ({}: NotificationsProps) => {
  return <Notifications position="top-center" />;
};

export default MyNotifications;
