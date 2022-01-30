import React, { useState } from "react";

import { ReactComponent as SkipIcon } from "../../assets/icons/SkipIcon.svg";
import styles from "./Timer.module.css";

import Button from "../Button/Button";
import CurrentRound from "../CurrentRound/CurrentRound";
import SelectRound from "../SelectRound/SelectRound";

import formatTime from "../../utils/formatTime";
import minutesToSeconds from "../../utils/minutesToSeconds";

import useInterval from "../../hooks/useInterval";

function Timer() {
  const [seconds, setSeconds] = useState(minutesToSeconds(25));
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [round, setRound] = useState("pomodoro");
  const [currentRound, setCurrentCount] = useState(1);

  const selectRound = (round) => {
    const roundTime = {
      pomodoro: 25,
      longBreak: 15,
      shortBreak: 5,
    };

    const roundTimeInSeconds = minutesToSeconds(roundTime[round]);

    setRound(round);
    setSeconds(roundTimeInSeconds);
    setIsTimerActive(false);
  };

  const pauseTimer = () => setIsTimerActive(false);
  const startTimer = () => setIsTimerActive(true);

  const setNextRound = (round) => {
    if (round === "pomodoro") {
      if (currentRound % 4 !== 0) {
        selectRound("shortBreak");
      } else {
        selectRound("longBreak");
      }
    } else {
      selectRound("pomodoro");
      setCurrentCount(currentRound + 1);
    }
  };

  const skipRound = () => {
    const isConfirm = window.confirm(
      "Are you sure you want to finish the round early?"
    );

    if (isConfirm) {
      setNextRound(round);
    }
  };

  useInterval(
    () => {
      if (seconds) {
        setSeconds(seconds - 1);
      } else {
        setIsTimerActive(false);
        setNextRound(round);
      }
    },
    isTimerActive ? 1000 : null
  );

  const formattedTime = formatTime(seconds);
  const roundMessage = round === "pomodoro" ? "Stay focused!" : "Break time!";

  return (
    <div className={`${isTimerActive ? styles.timerActive : styles.container}`}>
      <SelectRound selectRound={selectRound} />
      <div className={styles.Timer}>{formattedTime}</div>
      <Button
        className={styles.startButton}
        onClick={isTimerActive ? pauseTimer : startTimer}
      >
        {isTimerActive ? "Pause" : "Start"}
      </Button>
      {isTimerActive && (
        <Button className={styles.skipButton} onClick={skipRound}>
          <SkipIcon />
        </Button>
      )}
      <div className={styles.roundMessage}>{roundMessage}</div>
      <CurrentRound currentRound={currentRound} />
    </div>
  );
}

export default Timer;
