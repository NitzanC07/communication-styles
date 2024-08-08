import styles from './style.module.css';

interface ButtonProps {
    onClick: () => void;
    text: String;
}
function Button({onClick, text}: ButtonProps) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
        {text}
    </button>
  )
}

export default Button