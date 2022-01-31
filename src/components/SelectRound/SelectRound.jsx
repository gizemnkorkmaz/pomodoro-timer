import React from "react";
import Button from "../Button/Button";

function SelectRound({ selectRound, isPomodoro, isShortBreak, isLongBreak }) {
  return (
    <div>
      <Button active={isPomodoro} onClick={() => selectRound("pomodoro")}>
        Pomodoro
      </Button>
      <Button active={isShortBreak} onClick={() => selectRound("shortBreak")}>
        Short Break
      </Button>
      <Button active={isLongBreak} onClick={() => selectRound("longBreak")}>
        Long Break
      </Button>
    </div>
  );
}

export default SelectRound;
