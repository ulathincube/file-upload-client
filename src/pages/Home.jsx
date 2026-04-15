import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <section className={styles.home}>
        <h1 className={styles.heading}>
          <span className={styles.italic}>Upload</span> and{" "}
          <span className={styles.italic}>share</span> your files{" "}
          <span className={styles.italic}>here!</span>
        </h1>
        <p className={styles.text}>
          <span class="material-symbols-outlined">arrow_circle_down</span>
        </p>
        <Link className={styles.link} to="/uploads">
          Start Now
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Home;
