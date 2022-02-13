import Button from "../Button/Button";

const SelectRound = ({ selectRound, activeRound }) => {
  const rounds = [
    { value: "pomodoro", label: "Pomodoro" },
    { value: "shortBreak", label: "Short Break" },
    { value: "longBreak", label: "Long Break" },
  ];

  return (
    <>
      {rounds.map(({ value, label }) => (
        <Button
          key={value}
          active={activeRound === value}
          onClick={() => selectRound(value)}
        >
          {label}
        </Button>
      ))}
    </>
  );
};

export default SelectRound;
