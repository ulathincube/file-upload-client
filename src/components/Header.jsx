import { Link } from "react-router";
import styles from "./Header.module.css";
import Button from "./Button";
import useAuth from "../hooks/useAuth";
import Auth from "../services/auth";
import useLocalStorage from "../hooks/useLocalStorage";
import useModal from "../hooks/useModal";

function Header() {
  const { user, loginUser } = useAuth();

  const [, setUserStore] = useLocalStorage("user", null);
  const [modal, toggleModal] = useModal();

  const logoutUserHandler = async () => {
    try {
      const { data, error } = await Auth.logOutUser();
      loginUser(null);
      setUserStore(null);
      console.log({ data, error });
    } catch (error) {
      console.error(error);
    }
  };

  const onShowModal = () => {
    toggleModal();
  };

  return (
    <header className={styles.header}>
      <Link className={styles.box} to="/">
        <h1 className={styles.logo}>File Uploader</h1>
      </Link>
      <nav>
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
          <li className={styles.menu}>
            <Button onClick={onShowModal} className={styles.open}>
              <span className="material-symbols-outlined">dehaze</span>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
