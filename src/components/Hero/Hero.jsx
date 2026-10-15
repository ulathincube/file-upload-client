import styles from "./Hero.module.css";
import { Link } from "react-router";

function Hero() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>
        We help you upload your files to storage
      </h1>
      <p className={styles.description}>
        It's super simple, choose a file, upload and save. That's it!
      </p>
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
    </section>
  );
}

export default Hero;
