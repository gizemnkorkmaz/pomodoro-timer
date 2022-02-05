import React from "react";

import Button from "../Button/Button";

import minutesToSeconds from "../../utils/minutesToSeconds";
import formatTime from "../../utils/formatTime";

import styles from "./CustomTimer.module.css";

function CustomTimer({
  setIsOpenCustomTimer,
  setSeconds,
  setIsTimerActive,
  customTime,
  setCustomTime,
}) {
  const setCustomTimer = (event) => {
    setIsTimerActive(false);
    setCustomTime(event.target.value);
  };

  const saveCustomTime = () => {
    const customTimeInSeconds = minutesToSeconds(customTime);

    if (customTimeInSeconds > 0) {
      setSeconds(customTimeInSeconds);
    }

    document.title = formatTime(minutesToSeconds(customTime));

    setIsOpenCustomTimer(false);
  };

  return (
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
        onClick={saveCustomTime}
        disabled={customTime <= 0}
      >
        Save
      </Button>
    </>
  );
}

export default CustomTimer;
