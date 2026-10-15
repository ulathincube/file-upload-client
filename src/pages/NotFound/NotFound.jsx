import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <>
      <Header />
      <section className={styles.found}>
        <article className={styles.box}>
          <h1 className={styles.heading}>
            This resource could not be found! Try Again
          </h1>
          <Link className={styles.link} to="/">
            Go to Homepage
          </Link>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;
