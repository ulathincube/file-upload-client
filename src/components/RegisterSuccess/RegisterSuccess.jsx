import styles from "./RegisterSuccess.module.css";
import { Link } from "react-router";

function RegisterSuccess() {
  return (
    <main className={styles.wrapper}>
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
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <article className={styles.container}>
        <h3 className={styles.title}>Registration complete</h3>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          corrupti modi at placeat dicta consequatur asperiores provident vitae
          eaque illum nemo qui, nam iure corporis porro eos animi ab quas?
        </p>
        <div className={styles.parent}>
          <Link to="/login" className={styles.link}>
            Log In
          </Link>
        </div>
      </article>
    </main>
  );
}

export default RegisterSuccess;
