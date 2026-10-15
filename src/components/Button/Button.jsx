import styles from './Button.module.css';

function Button({ children, className, onClick = undefined, type = 'button' }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
