import styles from "./FileInfo.module.css";

function FileInfo({ title }) {
  return (
    <article className={styles.wrapper}>
      <div className={styles.box}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.icon}
        >
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
          <polyline points="13 2 13 9 20 9"></polyline>
        </svg>
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <dl className={styles.list}>
          <div className={styles.group}>
            <dt className={styles.tag}>File type</dt>
            <dd className={styles.description}>MP3</dd>
          </div>
          <div className={styles.group}>
            <dt className={styles.tag}>File Size</dt>
            <dd className={styles.description}>1MB</dd>
          </div>
        </dl>
        <div className={styles.container}>
          <button className={styles.download}>Download</button>
          <button className={styles.share}>Share</button>
        </div>
      </div>
    </article>
  );
}

export default FileInfo;
