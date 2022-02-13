import { useState, useEffect } from "react";

import styles from "./App.module.css";
import cx from "classnames";

import Header from "./components/Header/Header";
import Timer from "./components/Timer/Timer";
import Settings from "./components/Settings/Settings";
import ToggleTimerButton from "./components/ToggleTimerButton/ToggleTimerButton";

const App = () => {
  const [round, setRound] = useState("pomodoro");
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [customTime, setCustomTime] = useState(25);

  const isPomodoro = round === "pomodoro";

  const roundTime = {
    pomodoro: customTime || 25,
    longBreak: 15,
    shortBreak: 5,
  };

  useEffect(() => {
    if (!isTimerActive) {
      document.title = "Pomodoro Timer";
    }
  }, [isTimerActive]);

  return (
    <div className={styles.App}>
      <Header />
      <div
        className={cx(styles.Container, {
          [styles.TimerActive]: isTimerActive,
        })}
      >
        {isPomodoro && (
          <ToggleTimerButton
            isOpenSettings={isOpenSettings}
            setIsOpenSettings={setIsOpenSettings}
          />
        )}
        {isOpenSettings ? (
          <Settings
            setIsOpenSettings={setIsOpenSettings}
            setIsTimerActive={setIsTimerActive}
            customTime={customTime}
            setCustomTime={setCustomTime}
          />
        ) : (
          <Timer
            round={round}
            setRound={setRound}
            currentTime={roundTime[round]}
            isTimerActive={isTimerActive}
            setIsTimerActive={setIsTimerActive}
          />
        )}
      </div>
    </div>
  );
};

export default App;