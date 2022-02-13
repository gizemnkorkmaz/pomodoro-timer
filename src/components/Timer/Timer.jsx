import { useState, useEffect } from "react";

import Button from "../Button/Button";
import CurrentRound from "../CurrentRound/CurrentRound";
import SelectRound from "../SelectRound/SelectRound";

import { ReactComponent as SkipIcon } from "../../assets/icons/SkipIcon.svg";
import { ReactComponent as SoundOnIcon } from "../../assets/icons/SoundOnIcon.svg";
import { ReactComponent as SoundOffIcon } from "../../assets/icons/SoundOffIcon.svg";

import countdownSoundSource from "../../assets/sound/countdownSound.wav";

import styles from "./Timer.module.css";

import formatTime from "../../utils/formatTime";
import minutesToSeconds from "../../utils/minutesToSeconds";

import useInterval from "../../hooks/useInterval";
import useLocalStorage from "../../hooks/useLocalStorage";

const Timer = ({
  round,
  setRound,
  isTimerActive,
  setIsTimerActive,
  currentTime,
}) => {
  const [seconds, setSeconds] = useState(minutesToSeconds(25));
  const [currentRound, setCurrentCount] = useState(1);
  const [isSoundOn, setIsSoundOn] = useLocalStorage("isSoundOn", true);
  const [endTime, setEndTime] = useState();
  const countdownSound = new Audio(countdownSoundSource);

  useEffect(() => {
    setSeconds(minutesToSeconds(currentTime));
  }, [currentTime]);

  const selectRound = (round) => {
    const roundTimeInSeconds = minutesToSeconds(currentTime);

    setRound(round);
    setSeconds(roundTimeInSeconds);
    setIsTimerActive(false);
  };

  const startTimer = () => {
    setEndTime(Date.now() + seconds * 1000);
    setIsTimerActive(true);
  };

  const pauseTimer = () => setIsTimerActive(false);
  const toggleSound = () => setIsSoundOn(!isSoundOn);

  const setNextRound = (round) => {
    if (round === "pomodoro") {
      const currentBreak = currentRound % 4 !== 0 ? "shortBreak" : "longBreak";
      selectRound(currentBreak);
    } else {
      selectRound("pomodoro");
      setCurrentCount(currentRound + 1);
    }
  };

  const skipRound = () => {
    const isConfirm = window.confirm(
      "Are you sure you want to finish the round early?"
    );

    if (isConfirm) setNextRound(round);
  };

  const isPomodoro = round === "pomodoro";
  const roundMessage = isPomodoro ? "Stay focused!" : "Break time!";
  const formattedTime = formatTime(seconds);

  useInterval(
    () => {
      if (endTime > Date.now()) {
        const remainingSeconds = Math.round((endTime - Date.now()) / 1000);

        setSeconds(remainingSeconds);

        document.title = `${formatTime(remainingSeconds)} - ${roundMessage}`;
        if (remainingSeconds === 3 && isSoundOn) {
          countdownSound.play();
        }
      } else {
        setIsTimerActive(false);
        setNextRound(round);
      }
    },
    isTimerActive ? 1000 : null
  );

  return (
    <>
      <SelectRound selectRound={selectRound} activeRound={round} />
      <div className={styles.Timer}>{formattedTime}</div>
      {isTimerActive && (
        <Button className={styles.SoundButton} onClick={toggleSound}>
          {isSoundOn ? <SoundOnIcon /> : <SoundOffIcon />}
        </Button>
      )}
      <Button
        className={styles.StartButton}
        onClick={isTimerActive ? pauseTimer : startTimer}
      >
        {isTimerActive ? "Pause" : "Start"}
      </Button>
      {isTimerActive && (
        <Button className={styles.SkipButton} onClick={skipRound}>
          <SkipIcon />
        </Button>
      )}
      <div className={styles.RoundMessage}>{roundMessage}</div>
      <CurrentRound currentRound={currentRound} />
    </>
  );
};

export default Timer;
