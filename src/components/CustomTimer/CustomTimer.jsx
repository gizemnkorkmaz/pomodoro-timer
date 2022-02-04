import React, { useState } from "react";

import Button from "../Button/Button";

import minutesToSeconds from "../../utils/minutesToSeconds";

import styles from "./CustomTimer.module.css";

function CustomTimer({
  isOpen,
  setIsOpen,
  setSeconds,
  setIsTimerActive,
  customTime,
  setCustomTime,
}) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const setCustomTimer = (event) => {
    setIsTimerActive(false);
    setCustomTime(event.target.value);

    const customTimeInSeconds = minutesToSeconds(event.target.value);

    if (customTimeInSeconds > 0) {
      setSeconds(customTimeInSeconds);
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  return (
    isOpen && (
      <>
        <h2>Set your own focus time</h2>
        <label className={styles.InputLabel}>
          Time (in minutes):
          <input
            type="number"
            min="0"
            placeholder="e.g. 25"
            value={customTime}
            onChange={(event) => setCustomTimer(event)}
            className={styles.InputArea}
          />
        </label>
        <Button
          className={styles.SaveButton}
          onClick={() => setIsOpen(false)}
          disabled={isButtonDisabled}
        >
          Save
        </Button>
      </>
    )
  );
}

export default CustomTimer;
