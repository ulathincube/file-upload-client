import { Link } from "react-router";
import styles from "./Error.module.css";

function Error({ error }) {
  console.dir(error);
  return (
    <section className={styles.error}>
      <h1 className={styles.heading}>Error Encountered: {error.message} </h1>
      <Link className={styles.link} to="/">
        Home
      </Link>
    </section>
  );
}

export default Error;
