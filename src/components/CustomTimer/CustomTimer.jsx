import React, { useState } from "react";

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
  const [newTimer, setNewTimer] = useState(customTime);

  const setCustomTimer = (event) => {
    setIsTimerActive(false);
    setNewTimer(event.target.value);
  };

  const saveCustomTime = () => {
    setCustomTime(newTimer);
    const customTimeInSeconds = minutesToSeconds(newTimer);

    if (customTimeInSeconds > 0) {
      setSeconds(customTimeInSeconds);
      document.title = "Pomodoro Timer";
    }

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
          value={newTimer}
          onChange={(event) => setCustomTimer(event)}
          className={styles.InputArea}
        />
      </label>
      <Button
        className={styles.SaveButton}
        onClick={saveCustomTime}
        disabled={newTimer <= 0}
      >
        Save
      </Button>
    </>
  );
}

export default CustomTimer;
