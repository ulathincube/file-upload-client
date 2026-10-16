import styles from "./Footer.module.css";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import Button from "../Button";
import Logo from "../Logo";

function Footer() {
  const { user } = useAuth();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo />
        <p className={styles.description}>
          Upload and share files with anyone in just a few clicks
        </p>
        <p className={styles.reserved}>
          &copy; {new Date().getFullYear()} FileUploader. All Rights reserved.
        </p>
      </div>
      <nav className={styles.navigation}>
        <article className={styles.box}>
          <h3 className={styles.title}>Company</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Features
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Features
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Features
              </Link>
            </li>
          </ul>
        </article>
        <article className={styles.box}>
          <h3 className={styles.title}>Product</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Features
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Features
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Features
              </Link>
            </li>
          </ul>
        </article>
        <article className={styles.box}>
          <h3 className={styles.title}>Resources</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Features
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Features
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Features
              </Link>
            </li>
          </ul>
        </article>
      </nav>
    </footer>
  );
}

export default Footer;
