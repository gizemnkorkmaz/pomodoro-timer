import React, { useEffect, useState } from "react";

import Button from "./Button";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const startTimer = () => setIsTimerActive(true);
  const pauseTimer = () => setIsTimerActive(false);

  useEffect(() => {
    const timer = setInterval(() => {
      clearInterval(timer);

      if (isTimerActive) {
        if (seconds > 0 && minutes >= 0) {
          setSeconds(seconds - 1);
        } else if (seconds === 0 && minutes > 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
  }, [isTimerActive, seconds, minutes]);

  return (
    <>
      <div>
        {minutes}:{seconds < 10 ? "0" + seconds : seconds}
      </div>
      <Button onClick={startTimer}>Start</Button>
      <Button onClick={pauseTimer}>Pause</Button>
    </>
  );
}

export default Timer;
