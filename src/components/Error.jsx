import { Link } from "react-router";
import styles from "./Error.module.css";

function Error({ error }) {
  console.dir(error);
  return (
    <section className={styles.error}>
      <h1 className={styles.heading}>Error Encountered: </h1>
      <span className={styles.text}>
        Server is currently busy... Try again later
      </span>
      <Link className={styles.link} to="/">
        Home
      </Link>
    </section>
  );
}

export default Error;
