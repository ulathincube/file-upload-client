import { Link } from "react-router";
import styles from "./Folder.module.css";

function Folder({ name }) {
  return (
    <li className={styles.folder}>
      <Link className={styles.link} to={`/uploads/${name}`}>
        <span className="material-symbols-outlined">folder</span>
        {name}
      </Link>
    </li>
  );
}

export default Folder;
