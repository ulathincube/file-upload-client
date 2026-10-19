import styles from "./BigContextMenu.module.css";

function BigContextMenu({ onHideContextMenu }) {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.item}>
        <button onClick={onHideContextMenu} className={styles.pick}>
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
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
          <span className={styles.text}>New Folder</span>
        </button>
      </li>
      <li className={styles.item}>
        <button onClick={onHideContextMenu} className={styles.pick}>
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
          <span className={styles.text}>File Upload</span>
        </button>
      </li>
      <li className={styles.item}>
        <button onClick={onHideContextMenu} className={styles.pick}>
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
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </span>
          <span className={styles.text}>Folder Upload</span>
        </button>
      </li>
    </ul>
  );
}

export default BigContextMenu;
