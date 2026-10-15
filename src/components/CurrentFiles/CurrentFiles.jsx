import styles from './CurrentFiles.module.css';

function CurrentFiles({ children }) {
  return <ul className={styles.files}>{children}</ul>;
}

export default CurrentFiles;
