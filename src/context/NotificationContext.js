import { createContext } from "react";

const NotificationContext = createContext({
  message: null,
  createNotificationMessage: null,
});

export default NotificationContext;
