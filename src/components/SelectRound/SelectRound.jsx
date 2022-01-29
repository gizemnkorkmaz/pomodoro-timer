import React from "react";
import Button from "../Button/Button";

function SelectRound({ selectRound }) {
  return (
    <div>
      <Button onClick={() => selectRound("pomodoro")}>Pomodoro</Button>
      <Button onClick={() => selectRound("shortBreak")}>Short Break</Button>
      <Button onClick={() => selectRound("longBreak")}>Long Break</Button>
    </div>
  );
}

export default SelectRound;
