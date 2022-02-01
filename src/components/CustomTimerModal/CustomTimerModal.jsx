import React from "react";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";

function CustomTimerModal({ isOpen, setIsOpen, isShowCloseButton }) {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isShowCloseButton={isShowCloseButton}
    >
      <h2>Choose your pomodoro time:</h2>
      <Button onClick={() => setIsOpen(false)}>Save</Button>
    </Modal>
  );
}

export default CustomTimerModal;
