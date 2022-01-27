import React, { useState } from "react";

import Button from "./Button";
import Rounds from "./Rounds";

import useInterval from "../hooks/useInterval";

import formatTime from "../utils/formatTime";
import minutesToSeconds from "../utils/minutesToSeconds";

function Timer() {
  const [seconds, setSeconds] = useState(minutesToSeconds(25));
  const [roundCount, setRoundCount] = useState(1);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isPomodoro, setIsPomodoro] = useState(true);
  const [isBreakTime, setIsBreakTime] = useState(false);

  const pauseTimer = () => setIsTimerActive(false);
  const startTimer = () => setIsTimerActive(true);

  const skipRound = () => {
    setIsTimerActive(false);

    alert("Are you sure you want to finish the round early?");

    setIsPomodoro(!isPomodoro);
    setIsBreakTime(!isBreakTime);

    if (isPomodoro) {
      setRoundCount(roundCount + 1);
      if (roundCount % 4 === 0) {
        setSeconds(minutesToSeconds(15));
      } else {
        setSeconds(minutesToSeconds(5));
      }
    } else {
      setSeconds(minutesToSeconds(25));
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
    <>
      <div>{formattedTime}</div>
      <Button onClick={isTimerActive ? pauseTimer : startTimer}>
        {isTimerActive ? "Pause" : "Start"}
      </Button>
      <Button onClick={skipRound}>Skip</Button>
      <Rounds roundCount={roundCount} />
    </>
  );
}

export default Timer;
