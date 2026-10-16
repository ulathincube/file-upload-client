import styles from "./CallToAction.module.css";
import { Link } from "react-router";

function CallToAction() {
  return (
    <main className={styles.wrapper}>
      <h3 className={styles.title}>Give it a try now. Start Sharing</h3>
      <div className={styles.container}>
        <Link to="/" className={styles.action}>
          Start Uploading
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
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </Link>
      </div>
    </main>
  );
}

export default CallToAction;
