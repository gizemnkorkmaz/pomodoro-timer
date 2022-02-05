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
  const openCustomTimer = () => {
    if (round === "pomodoro") {
      setIsOpenCustomTimer(!isOpenCustomTimer);
    }
  };
  return (
    <Button
      className={`${isTimerActive ? styles.SettingsIcon : styles.CloseIcon}`}
      onClick={openCustomTimer}
    >
      {isOpenCustomTimer ? <CloseIcon /> : <SettingsIcon />}
    </Button>
  );
}

export default ToggleTimer;
