import styles from "./Modal.module.css";
import { Link } from "react-router";
import Logo from "./Logo";
import Button from "./Button";
import useModal from "../hooks/useModal";
import useAuth from "../hooks/useAuth";
import Auth from "../services/auth";
import useLocalStorage from "../hooks/useLocalStorage";
import useNotification from "../hooks/useNotification";

function Modal() {
  const [, toggleModal] = useModal();

  const { user, loginUser } = useAuth();
  const [, setUserStore] = useLocalStorage("user", null);
  const { createNotificationMessage } = useNotification();

  const logoutUserHandler = async () => {
    try {
      const { data, error } = await Auth.logOutUser();

      if (error) throw new Error(error);

      loginUser(null);
      setUserStore(null);
      createNotificationMessage(data);
    } catch (error) {
      createNotificationMessage(error);
    }
  };

  return (
    <section className={styles.background}>
      <article className={styles.modal}>
        <span onClick={toggleModal}>
          <Logo />
        </span>
        <ul
          onClick={(event) => {
            if (event.target.tagName === "A") return toggleModal();
          }}
          className={styles.list}
        >
          <li className={styles.item}>
            {user ? (
              <Button onClick={logoutUserHandler} className={styles.logout}>
                Log Out
              </Button>
            ) : (
              <Link className={styles.link} to="/">
                Log in
              </Link>
            )}
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/uploads">
              Uploads
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/about">
              About Us
            </Link>
          </li>
          <li className={styles.special}>
            <Link className={styles.action} to="/">
              Start Uploading
            </Link>
          </li>
          <li className={styles.float}>
            <Button onClick={toggleModal} className={styles.close}>
              <span className="material-symbols-outlined">close</span>
            </Button>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Modal;
