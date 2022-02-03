import React from "react";

import Button from "../Button/Button";

import { ReactComponent as CloseIcon } from "../../assets/icons/CloseIcon.svg";
import styles from "./Modal.module.css";

function Modal({ children, isOpen, setIsOpen, isShowCloseButton }) {
  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    isOpen && (
      <div className={styles.Modal}>
        {children}
        {isShowCloseButton && (
          <Button className={styles.CloseButton} onClick={closeModal}>
            <CloseIcon />
          </Button>
        )}
      </div>
    )
  );
}

export default Modal;
