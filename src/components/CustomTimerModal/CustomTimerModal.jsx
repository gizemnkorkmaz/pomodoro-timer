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
      <Button onClick={() => setIsOpen(false)}>Save</Button>
    </Modal>
  );
}

export default CustomTimerModal;
