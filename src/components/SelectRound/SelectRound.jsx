import React from "react";
import Button from "../Button/Button";

function SelectRound({ selectRound, isPomodoro, isShortBreak, isLongBreak }) {
  return (
    <div>
      <Button
        isButtonActive={isPomodoro}
        onClick={() => selectRound("pomodoro")}
      >
        Pomodoro
      </Button>
      <Button
        isButtonActive={isShortBreak}
        onClick={() => selectRound("shortBreak")}
      >
        Short Break
      </Button>
      <Button
        isButtonActive={isLongBreak}
        onClick={() => selectRound("longBreak")}
      >
        Long Break
      </Button>
    </div>
  );
}

export default SelectRound;
