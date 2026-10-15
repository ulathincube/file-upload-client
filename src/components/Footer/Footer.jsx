import styles from "./Footer.module.css";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import Button from "../Button";

function Footer() {
  const { user } = useAuth();

  return (
    <footer className={styles.footer}>
      <Link className={styles.box} to="/">
        <h1 className={styles.logo}>File Uploader</h1>
      </Link>
      <nav>
        <ul className={styles.list}>
          <li className={styles.pick}>
            {user ? (
              <Button className={styles.logout}>Log Out</Button>
            ) : (
              <Link className={styles.link} to="/login">
                Log In
              </Link>
            )}
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
