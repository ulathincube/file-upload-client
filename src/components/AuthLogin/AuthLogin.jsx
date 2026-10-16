import styles from "./AuthLogin.module.css";
import { Link } from "react-router";

function Auth() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.parent}>
        <article className={styles.article}>
          <h1 className={styles.title}>Welcome back</h1>
        </article>
        <form className={styles.form}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="email">
              Email address
            </label>
            <input
              className={styles.field}
              type="email"
              id="email"
              placeholder="Email address"
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              className={styles.field}
              type="text"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className={styles.container}>
            <button className={styles.action}>Sign In</button>
          </div>
          <aside className={styles.aside}>
            <Link className={styles.link}>Forgot Password</Link>
          </aside>
        </form>
      </section>
    </main>
  );
}

export default Auth;
