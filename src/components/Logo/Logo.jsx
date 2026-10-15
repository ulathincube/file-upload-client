import { Link } from "react-router";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.box}>
      <h1 className={styles.logo}>File Uploader</h1>
    </Link>
  );
}

export default Logo;
