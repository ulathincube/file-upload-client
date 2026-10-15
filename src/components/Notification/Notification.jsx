import styles from "./Notification.module.css";
import useNotification from "../../hooks/useNotification";

function Notification() {
  const { message } = useNotification();

  if (!message) return;

  return (
    <figure className={styles.notification}>
      <span>{message}</span>
    </figure>
  );
}

export default Notification;
