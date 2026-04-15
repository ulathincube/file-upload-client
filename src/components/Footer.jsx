import { Link } from "react-router";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.box} to="/">
        <h1 className={styles.logo}>File Uploader</h1>
      </Link>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} to="/">
              Log In
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
