import styles from "./Button.module.css";

const Button = ({ children, active, ...props }) => (
  <button className={active ? styles.ButtonActive : styles.Button} {...props}>
    {children}
  </button>
);

export default Button;
