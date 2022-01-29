import React, { useState } from "react";

import Button from "../Button/Button";
import RoundCount from "../RoundCount/RoundCount";
import SelectRound from "../SelectRound/SelectRound";

import useInterval from "../../hooks/useInterval";

import formatTime from "../../utils/formatTime";
import minutesToSeconds from "../../utils/minutesToSeconds";

import styles from "./Timer.module.css";

function Timer() {
  const [seconds, setSeconds] = useState(minutesToSeconds(25));
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [round, setRound] = useState("pomodoro");
  const [roundCount, setRoundCount] = useState(1);

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

  const skipRound = () => {
    const isConfirm = window.confirm(
      "Are you sure you want to finish the round early?"
    );

    if (isConfirm) {
      if (round === "pomodoro") {
        if (roundCount % 4 !== 0) {
          selectRound("shortBreak");
        } else {
          selectRound("longBreak");
        }
      } else {
        selectRound("pomodoro");
        setRoundCount(roundCount + 1);
      }
    }
  };

  useInterval(
    () => {
      if (seconds) {
        setSeconds(seconds - 1);
      } else {
        setIsTimerActive(false);
      }
    },
    isTimerActive ? 1000 : null
  );

  const formattedTime = formatTime(seconds);

  return (
    <div className={styles.container}>
      <SelectRound selectRound={selectRound} />
      <div className={styles.Timer}>{formattedTime}</div>
      <Button
        className={styles.startButton}
        onClick={isTimerActive ? pauseTimer : startTimer}
      >
        {isTimerActive ? "Pause" : "Start"}
      </Button>
      {isTimerActive && <Button onClick={skipRound}>Skip</Button>}
      <RoundCount roundCount={roundCount} />
    </div>
  );
}

export default Timer;
