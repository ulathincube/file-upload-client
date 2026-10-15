import styles from "./FileDetails.module.css";
import { Link } from "react-router";
import formatDate from "../../utils/formatDate";

function FileDetails({ name, createdAt, id, size, url }) {
  const creationDate = formatDate(createdAt);

  const sizeInKB = Math.round(size / 1000);
  console.log(sizeInKB, size);

  return (
    <article id={id} className={styles.file}>
      <span className={`material-symbols-outlined ${styles.icon}`}>draft</span>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.date}>{creationDate}</span>
      <span className={styles.size}>{sizeInKB}KB</span>
      <Link className={styles.download} to={url} download={name}>
        Download
      </Link>
    </article>
  );
}

export default FileDetails;
