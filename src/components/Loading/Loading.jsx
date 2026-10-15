import styles from "./Loading.module.css";

function Loading() {
  return (
    <section className={styles.loading}>
      <span>..Loading...</span>
      <span className={`material-symbols-outlined ${styles.spinner}`}>
        donut_large
      </span>
    </section>
  );
}

export default Loading;
