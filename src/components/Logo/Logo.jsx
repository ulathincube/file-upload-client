import { Link } from "react-router";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.link}>
      File Uploader
    </Link>
  );
}

export default Logo;
