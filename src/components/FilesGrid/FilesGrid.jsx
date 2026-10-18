import styles from "./FilesGrid.module.css";

function FilesGrid({ children }) {
  return <main className={styles.wrapper}>{children}</main>;
}

export default FilesGrid;
