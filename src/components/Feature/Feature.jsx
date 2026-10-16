import styles from "./Feature.module.css";

function Feature({ title, children, body }) {
  return (
    <article className={styles.wrapper}>
      <div className={styles.box}>{children}</div>
      <h3 className={styles.heading}>{title}</h3>
      <p className={styles.description}>{body}</p>
    </article>
  );
}

export default Feature;
