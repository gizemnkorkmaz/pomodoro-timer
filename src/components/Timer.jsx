import React, { useState } from "react";

import Button from "./Button";

import useInterval from "../hooks/useInterval";

import formatTime from "../utils/formatTime";
import minutesToSeconds from "../utils/minutesToSeconds";

function Timer() {
  const [seconds, setSeconds] = useState(minutesToSeconds(25));
  const [isTimerActive, setIsTimerActive] = useState(false);

  const pauseTimer = () => setIsTimerActive(false);
  const startTimer = () => setIsTimerActive(true);

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
    <>
      <div>{formattedTime}</div>
      <Button onClick={isTimerActive ? pauseTimer : startTimer}>
        {isTimerActive ? "Pause" : "Start"}
      </Button>
    </>
  );
}

export default Timer;
