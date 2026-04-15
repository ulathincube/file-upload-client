import { Link } from "react-router";
import styles from "./Header.module.css";
import Button from "./Button";

function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.box} to="/">
        <h1 className={styles.logo}>File Uploader</h1>
      </Link>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} to="/login">
              Log In
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/uploads">
              Upload File
            </Link>
          </li>
          <li className={styles.menu}>
            <Button className={styles.open}>
              <span class="material-symbols-outlined">dehaze</span>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
