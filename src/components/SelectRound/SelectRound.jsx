import React from "react";

import Button from "../Button/Button";

import { ReactComponent as SettingsIcon } from "../../assets/icons/SettingsIcon.svg";
import styles from "./SelectRound.module.css";

function SelectRound({
  selectRound,
  isPomodoro,
  isShortBreak,
  isLongBreak,
  isCustomTime,
  setIsOpenCustomTimer,
}) {
  return (
    <div>
      <Button
        active={isPomodoro || isCustomTime}
        onClick={() => selectRound("pomodoro")}
      >
        Pomodoro
      </Button>
      <Button active={isShortBreak} onClick={() => selectRound("shortBreak")}>
        Short Break
      </Button>
      <Button active={isLongBreak} onClick={() => selectRound("longBreak")}>
        Long Break
      </Button>
      <Button
        className={styles.SettingsButton}
        onClick={() => setIsOpenCustomTimer(true)}
      >
        <SettingsIcon />
      </Button>
    </div>
  );
}

export default SelectRound;
