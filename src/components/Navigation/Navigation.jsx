import styles from "./Navigation.module.css";
import { Link } from "react-router";

function Navigation({ current = "home" }) {
  return (
    <ul className={styles.navigation}>
      <li className={styles.item}>
        <Link
          to="/"
          className={current === "home" ? styles.current : styles.link}
        >
          Home
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to="/uploads"
          className={current === "uploads" ? styles.current : styles.link}
        >
          Uploads
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to="/about"
          className={current === "about" ? styles.current : styles.link}
        >
          About
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
