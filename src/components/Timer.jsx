import React, { useEffect, useState } from "react";

import Button from "./Button";

function Timer() {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(24);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const startTimer = () => setIsTimerActive(true);
  const pauseTimer = () => setIsTimerActive(false);

  useEffect(() => {
    const timer = setInterval(() => {
      clearInterval(timer);

      if (isTimerActive && seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [isTimerActive, seconds]);

  return (
    <>
      <div>
        {minutes}:{seconds}
      </div>
      <Button onClick={startTimer}>Start</Button>
      <Button onClick={pauseTimer}>Pause</Button>
    </>
  );
}

export default Timer;
