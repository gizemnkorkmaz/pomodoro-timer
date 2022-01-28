import React, { useState } from "react";

import Button from "./Button";
import RoundCount from "./RoundCount";
import SelectRound from "./SelectRound";

import useInterval from "../hooks/useInterval";

import formatTime from "../utils/formatTime";
import minutesToSeconds from "../utils/minutesToSeconds";

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
      setIsTimerActive(false);
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
    <>
      <SelectRound selectRound={selectRound} />
      <div>{formattedTime}</div>
      <Button onClick={isTimerActive ? pauseTimer : startTimer}>
        {isTimerActive ? "Pause" : "Start"}
      </Button>
      <Button onClick={skipRound}>Skip</Button>
      <RoundCount roundCount={roundCount} />
    </>
  );
}

export default Timer;
