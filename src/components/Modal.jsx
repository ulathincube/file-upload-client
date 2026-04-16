import styles from "./Modal.module.css";
import { Link } from "react-router";
import Logo from "./Logo";
import Button from "./Button";
import useModal from "../hooks/useModal";

function Modal() {
  const [, toggleModal] = useModal();

  return (
    <section className={styles.background}>
      <article className={styles.modal}>
        <span onClick={toggleModal}>
          <Logo />
        </span>
        <ul
          onClick={(event) => {
            if (event.target.tagName === "A") return toggleModal();
          }}
          className={styles.list}
        >
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/uploads">
              Uploads
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/about">
              About Us
            </Link>
          </li>
          <li className={styles.special}>
            <Link className={styles.action} to="/">
              Start Uploading
            </Link>
          </li>
          <li className={styles.float}>
            <Button onClick={toggleModal} className={styles.close}>
              <span className="material-symbols-outlined">close</span>
            </Button>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Modal;
