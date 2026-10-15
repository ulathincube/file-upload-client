import Button from "../Button";
import styles from "./StyledButton.module.css";

function StyledButton({ children, onClick }) {
  return (
    <Button onClick={onClick} className={styles.button}>
      {children}
    </Button>
  );
}

export default StyledButton;
