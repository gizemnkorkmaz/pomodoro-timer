import { useState } from "react";

import Button from "../Button/Button";

import styles from "./Settings.module.css";

const Settings = ({
  setIsOpenSettings,
  setIsTimerActive,
  customTime,
  setCustomTime,
}) => {
  const [time, setTime] = useState(customTime);

  const setTimer = (event) => {
    setIsTimerActive(false);
    setTime(event.target.value);
  };

  const saveSettings = () => {
    setCustomTime(time);
    setIsOpenSettings(false);
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
          value={time}
          onChange={(event) => setTimer(event)}
          className={styles.InputArea}
        />
      </label>
      <Button
        className={styles.SaveButton}
        onClick={saveSettings}
        disabled={time <= 0}
      >
        Save
      </Button>
    </>
  );
};

export default Settings;
