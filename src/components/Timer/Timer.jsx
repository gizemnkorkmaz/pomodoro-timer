import React, { useState } from "react";

import Button from "../Button/Button";
import CurrentRound from "../CurrentRound/CurrentRound";
import SelectRound from "../SelectRound/SelectRound";
import CustomTimer from "../CustomTimer/CustomTimer";
import ToggleTimerButton from "../ToggleTimerButton/ToggleTimerButton";

import { ReactComponent as SkipIcon } from "../../assets/icons/SkipIcon.svg";
import { ReactComponent as SoundOnIcon } from "../../assets/icons/SoundOnIcon.svg";
import { ReactComponent as SoundOffIcon } from "../../assets/icons/SoundOffIcon.svg";

import countdownSoundSource from "../../assets/sound/countdownSound.wav";

import styles from "./Timer.module.css";

import formatTime from "../../utils/formatTime";
import minutesToSeconds from "../../utils/minutesToSeconds";

import useInterval from "../../hooks/useInterval";
import useLocalStorage from "../../hooks/useLocalStorage";

function Timer() {
  const [seconds, setSeconds] = useState(minutesToSeconds(25));
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [round, setRound] = useState("pomodoro");
  const [currentRound, setCurrentCount] = useState(1);
  const [isSoundOn, setIsSoundOn] = useLocalStorage("isSoundOn", true);
  const [isOpenCustomTimer, setIsOpenCustomTimer] = useState(false);
  const [customTime, setCustomTime] = useState(25);
  const countdownSound = new Audio(countdownSoundSource);

  const selectRound = (round) => {
    const roundTime = {
      pomodoro: customTime || 25,
      longBreak: 15,
      shortBreak: 5,
    };

    const roundTimeInSeconds = minutesToSeconds(roundTime[round]);

    setRound(round);
    setSeconds(roundTimeInSeconds);
    setIsTimerActive(false);
    document.title = formatTime(roundTimeInSeconds);
  };

  const pauseTimer = () => setIsTimerActive(false);
  const startTimer = () => setIsTimerActive(true);
  const toggleSound = () => setIsSoundOn(!isSoundOn);

  const setNextRound = (round) => {
    if (round === "pomodoro") {
      if (currentRound % 4 !== 0) {
        selectRound("shortBreak");
      } else {
        selectRound("longBreak");
      }

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

  const formattedTime = formatTime(seconds);
  const roundMessage = round === "pomodoro" ? "Stay focused!" : "Break time!";

  useInterval(
    () => {
      if (seconds) {
        setSeconds(seconds - 1);
        document.title = `${formatTime(seconds)} - ${roundMessage}`;
        if (seconds === 3 && isSoundOn) {
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
    <div className={`${isTimerActive ? styles.TimerActive : styles.Container}`}>
      <ToggleTimerButton
        isTimerActive={isTimerActive}
        isOpenCustomTimer={isOpenCustomTimer}
        setIsOpenCustomTimer={setIsOpenCustomTimer}
        round={round}
      />

      {!isOpenCustomTimer ? (
        <>
          <SelectRound
            selectRound={selectRound}
            isPomodoro={round === "pomodoro"}
            isShortBreak={round === "shortBreak"}
            isLongBreak={round === "longBreak"}
          />
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
      ) : (
        <CustomTimer
          setIsOpenCustomTimer={setIsOpenCustomTimer}
          setSeconds={setSeconds}
          setIsTimerActive={setIsTimerActive}
          customTime={customTime}
          setCustomTime={setCustomTime}
        />
      )}
    </div>
  );
}

export default Timer;
