import styles from "./MyFiles.module.css";

function MyFiles() {
  return (
    <main className={styles.wrapper}>
      <aside className={styles.left}>
        <div className={styles.group}>
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h3 className={styles.description}>Profile</h3>
        </div>
        <div className={styles.group}>
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
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
          </div>
          <h3 className={styles.description}>My Files</h3>
        </div>
        <div className={styles.group}>
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
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </div>
          <h3 className={styles.description}>Shared</h3>
        </div>
      </aside>
      <header className={styles.header}>
        <h2 className={styles.title}>My Files</h2>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <button className={styles.action}>
            <span className={styles.parent}>
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
            <span className={styles.text}>Add</span>
          </button>
          <article className={styles.context}>
            <button className={styles.pick}>New Folder</button>

            <button className={styles.pick}>File Upload</button>

            <button className={styles.pick}>Folder Upload</button>
          </article>
        </div>
        <article className={styles.display}></article>
      </main>
      <aside className={styles.right}>D</aside>
    </main>
  );
}

export default MyFiles;
