import React from "react";

import Button from "../Button/Button";

function SelectRound({ selectRound, activeRound }) {
  const rounds = [
    { value: "pomodoro", label: "Pomodoro" },
    { value: "shortBreak", label: "Short Break" },
    { value: "longBreak", label: "Long Break" },
  ];

  return (
    <>
      {rounds.map((round) => (
        <Button
          key={round.value}
          active={activeRound === round.value}
          onClick={() => selectRound(round.value)}
        >
          {round.label}
        </Button>
      ))}
    </>
  );
}

export default SelectRound;
