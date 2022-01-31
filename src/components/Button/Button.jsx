import React from "react";

import styles from "./Button.module.css";

function Button({ children, active, ...props }) {
  return (
    <button className={active ? styles.ButtonActive : styles.Button} {...props}>
      {children}
    </button>
  );
}

export default Button;
