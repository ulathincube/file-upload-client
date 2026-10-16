import styles from "./Header.module.css";
import { Link } from "react-router";
import Button from "../Button";
import useAuth from "../../hooks/useAuth";
import Auth from "../../services/auth";
import useLocalStorage from "../../hooks/useLocalStorage";
import useModal from "../../hooks/useModal";
import useNotification from "../../hooks/useNotification";
import Logo from "../Logo";

function Header() {
  const { user, loginUser } = useAuth();

  const { createNotificationMessage } = useNotification();

  const [, setUserStore] = useLocalStorage("user", null);
  const { onShowModal } = useModal();

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
    <header className={styles.header}>
      <Logo />
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.item}>
            {user ? (
              <Button className={styles.logout} onClick={logoutUserHandler}>
                Log Out
              </Button>
            ) : (
              <Link className={styles.link} to="/login">
                Log In
              </Link>
            )}
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/uploads">
              Upload File
            </Link>
          </li>
          {/* <li className={styles.menu}>
            <Button onClick={onShowModal} className={styles.open}>
              <span className="material-symbols-outlined">dehaze</span>
            </Button>
          </li> */}
        </ul>
      </nav>
      <div className={styles.menu}>
        <button onClick={onShowModal} className={styles.action}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.icon}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
