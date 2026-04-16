import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./About.module.css";
import { Link } from "react-router";

function About() {
  return (
    <>
      <Header />
      <section className={styles.about}>
        <article className={styles.box}>
          <h1 className={styles.heading}>What is File Uploader?</h1>
          <p className={styles.text}>
            File Uploader is a simple service that you use to upload and share
            files to the internet!
          </p>
          <Link className={styles.link} to="/">
            Learn More
          </Link>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default About;
