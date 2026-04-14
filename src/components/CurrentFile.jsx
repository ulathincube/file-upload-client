import styles from "./CurrentFile.module.css";
import { Link } from "react-router";

function CurrentFile({ name, fileId }) {
  return (
    <li>
      <Link to={`/uploads/file/${fileId}`} className={styles.file}>
        <span class="material-symbols-outlined">draft</span>
        <span className={styles.name}>{name}</span>
      </Link>
    </li>
  );
}

export default CurrentFile;
