import NotificationContext from "../context/NotificationContext";
import { useContext } from "react";

function useNotification() {
  const notificationContext = useContext(NotificationContext);

  return {
    message: notificationContext.message,
    createNotificationMessage: notificationContext.createNotificationMessage,
  };
}

export default useNotification;
