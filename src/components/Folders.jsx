import styles from './Folders.module.css';

function Folders({ children }) {
  return <ul className={styles.folders}>{children}</ul>;
}

export default Folders;
