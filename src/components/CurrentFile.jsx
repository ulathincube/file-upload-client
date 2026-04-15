import styles from "./CurrentFile.module.css";
import { Link } from "react-router";

function CurrentFile({ name, fileId }) {
  return (
    <li className={styles.file}>
      <Link to={`/uploads/file/${fileId}`} className={styles.link}>
        <span class="material-symbols-outlined">draft</span>
        <span className={styles.name}>{name}</span>
      </Link>
    </li>
  );
}

export default CurrentFile;
