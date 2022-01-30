import React from "react";

import styles from "./Button.module.css";

function Button({ children, isButtonActive, ...props }) {
  return (
    <button
      className={`${styles.Button} ${isButtonActive ? styles.active : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
