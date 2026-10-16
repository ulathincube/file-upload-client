import styles from "./MobileMenu.module.css";
import { Link } from "react-router";
import { createPortal } from "react-dom";
import useModal from "../../hooks/useModal";
const container = document.querySelector("#modal");

function MobileMenu() {
  const { onHideModal } = useModal();

  return createPortal(
    <main className={styles.wrapper}>
      <div className={styles.overlay}>
        <section className={styles.modal}>
          <article className={styles.details}>
            <h3 className={styles.title}>Menu</h3>
            <button onClick={onHideModal} className={styles.action}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeWnecap="round"
                strokeLinejoin="round"
                className={styles.icon}
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </article>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Login
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Upload File
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>
                Learn More
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>,
    container,
  );
}

export default MobileMenu;
