// https://github.com/wesbos/JavaScript30/blob/d6e74c156accdef155487f1dc3a484c1f8a59a05/29%20-%20Countdown%20Timer/scripts-FINISHED.js#L6

const getTimeDifference = (seconds) => {
  const now = Date.now();
  const then = now + seconds * 1000;
  const secondsLeft = Math.round((then - Date.now()) / 1000);
  return secondsLeft;
};

export default getTimeDifference;
