import React, { useState } from "react";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import minutesToSeconds from "../../utils/minutesToSeconds";

import styles from "./CustomTimerModal.module.css";

function CustomTimerModal({
  isOpen,
  isShowCloseButton,
  setIsOpen,
  setSeconds,
  setIsTimerActive,
  setRound,
}) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const setCustomTimer = (event) => {
    setIsTimerActive(false);

    const customTime = minutesToSeconds(event.target.value);

    if (customTime > 0) {
      setSeconds(customTime);
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }

    setRound("pomodoro");
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isShowCloseButton={isShowCloseButton}
    >
      <div className={styles.CustomTimerContainer}>
        <h2>Set your own focus time</h2>
        <label className={styles.InputLabel}>
          Time (in minutes):
          <input
            type="number"
            min="0"
            placeholder="e.g. 25"
            onChange={(event) => setCustomTimer(event)}
            className={styles.InputArea}
          />
        </label>
      </div>
      <Button
        className={styles.SaveButton}
        onClick={() => setIsOpen(false)}
        disabled={isButtonDisabled}
      >
        Save
      </Button>
    </Modal>
  );
}

export default CustomTimerModal;
