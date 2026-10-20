import styles from "./GridFile.module.css";
import { Link } from "react-router";

function GridFile({ text }) {
  return (
    <article className={styles.wrapper}>
      <Link className={styles.link}>
        <span className={styles.box}>
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
        </span>
        <span className={styles.text}>{text}</span>
      </Link>
    </article>
  );
}

export default GridFile;
