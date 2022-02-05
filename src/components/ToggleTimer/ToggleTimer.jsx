import React from "react";

import { ReactComponent as SettingsIcon } from "../../assets/icons/SettingsIcon.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/CloseIcon.svg";

import styles from "./ToggleTimer.module.css";

import Button from "../Button/Button";

function ToggleTimer({
  isTimerActive,
  isOpenCustomTimer,
  setIsOpenCustomTimer,
  round,
}) {
  return (
    <div
      className={`${
        round === "pomodoro" ? styles.ShowButton : styles.HideButton
      }`}
    >
      <Button
        className={`${isTimerActive ? styles.SettingsIcon : styles.CloseIcon}`}
        onClick={() => setIsOpenCustomTimer(!isOpenCustomTimer)}
      >
        {isOpenCustomTimer ? <CloseIcon /> : <SettingsIcon />}
      </Button>
    </div>
  );
}

export default ToggleTimer;
