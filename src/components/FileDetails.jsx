import styles from "./FileDetails.module.css";
import { Link } from "react-router";

function FileDetails({ name, createdAt, id, size, url }) {
  return (
    <article className={styles.file}>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.date}>{createdAt}</span>
      <span className={styles.size}>{size}</span>
      <Link className={styles.download} to={url} download={name}>
        Download
      </Link>
    </article>
  );
}

export default FileDetails;
